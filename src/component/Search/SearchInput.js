import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Input from '../Input/Input'

class SearchInput extends Component{
    constructor(props){
        super(props);
        this.handleInput=this.handleInput.bind(this);
        this.inputRef = React.createRef();
    }
    static propTypes={
        handleInput: PropTypes.func.isRequired
    }
    handleInput(){
        const node=this.inputRef.current;
        node.focus()
        this.props.handleInput(node.value)
    }
    render(){
        return (
            <div style={{position:'absolute',top:'30px',left:'50px'}}>
                <Input ref={this.inputRef} style={{width: '200px'}}/>
                <Button title="Search" onClick={this.handleInput} style={{width: '70px'}}/>
            </div>
        )
    }
}

export default SearchInput