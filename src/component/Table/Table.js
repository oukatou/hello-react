import React,{Component} from 'react'
import {Table, Column} from 'react-virtualized'
import 'react-virtualized/styles.css'; 

class TablePresenter extends Component{
    state={
        items: []
    }
    componentDidMount(){
        const subreddit = 'reactjs';
        //fetch(`/r/${subreddit}.json?limit=100`)
        fetch(`${subreddit}.json`)     
            .then(response=>response.json(),error => console.log('An error occurred.', error))
            .then(json=>this.setState({
                items: json.data.children.map(child=>child.data)
            }))
    }
    render(){
        let {items} = this.state;
        items.push(...items)
        items.push(...items)
        items.push(...items)
        items.push(...items)
        items = items.map((item,index)=>{
            let {created,title,author} = item
            created = new Date(created).toLocaleTimeString()
            return {id:index+1,created,title,author}
        })
        const columns=[ {name:'id',width:50},
                        {name:'title',width:750},
                        {name:'author',width:200},
                        {name:'created',width:200}]
        return (
            <div>
                <Table      
                    width={1000}
                    height={400}
                    headerHeight={20}
                    rowHeight={20}
                    rowCount={items.length}
                    rowGetter={({index})=>items[index]}
                    >
                        {   
                            columns.map(column=>{
                                return <Column label={column.name} key={column.name} width={column.width} dataKey={column.name}></Column>
                            })
                        }
                </Table>
            </div>
        )
    }
    
}

export default TablePresenter