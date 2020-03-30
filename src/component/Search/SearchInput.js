import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Input from '../Input/Input'
import {css} from 'emotion'
import stylesheet from './stylesheet'
import items from '../moviesData'
import Downshift from 'downshift'

class SearchInput extends Component{
    constructor(props){
        super(props);
        this.handleInput=this.handleInput.bind(this);
        this.inputRef = React.createRef();
        this.buttonRef=React.createRef();
    }
    static propTypes={
        handleInput: PropTypes.func.isRequired
    }
    handleInput(){
        console.log(this.buttonRef.current)
        const node=this.inputRef.current;
        node.focus()
        this.props.handleInput(node.value)
    }
    render(){
        const styles = stylesheet();
        return (
            <Downshift
                onChange={selection=>selection && this.props.handleInput(selection.movieName)}
                itemToString={item=>item.movieName}
            >
                {({
                    inputValue,
                    isOpen,
                    getInputProps,
                    getItemProps,
                    getMenuProps,
                    highlightedIndex
                })=>(
                    <div className={css(styles.header)}>
                        <div>
                            <Input ref={this.inputRef} {...getInputProps()}/>
                            <ul {...getMenuProps()} className={css(styles.searchItems)}>
                                {isOpen ? items.filter(item=>item.movieName.includes(inputValue)).map(
                                    (item,index)=>(
                                        <li {...getItemProps({
                                            key:index,
                                            item,
                                            style:{backgroundColor: highlightedIndex == index ? 'gray' : ''}
                                        }
                                        )}
                                        key={index}
                                        >
                                            {item.movieName}
                                        </li>)
                                ) : null}
                            </ul>
                        </div>
                        <Button buttonRef={this.buttonRef} title="Search" onClick={this.handleInput} style={{width: '70px',height: '28px'}}/>
                    </div>
                )}
            </Downshift>
        )
    }
}

export default SearchInput