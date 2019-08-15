import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Input from '../Input/Input'
import {css} from 'emotion'
import stylesheet from './stylesheet'

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
        const styles = stylesheet();
        return (
            <div className={css(styles.header)}>
                <Input ref={this.inputRef}/>
                <Button title="Search" onClick={this.handleInput} style={{width: '70px'}}/>
            </div>
        )
    }
}

export default SearchInput