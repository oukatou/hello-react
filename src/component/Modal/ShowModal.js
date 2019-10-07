import React,{Component} from 'react'
import Modal from './Modal'
import Button from '../Button/Button'

class ShowModal extends Component{
    state={open: false}
    onOpen=()=>{
        this.setState({open: true})
    }
    onClose=()=>{
        this.setState({open: false})
    }
    render(){
        const headerChildren = <i>customheader</i>;
        return <div>
                <Button onClick={this.onOpen} title="show"></Button>
                <Modal title="title" 
                        open={this.state.open}
                        headerChildren={headerChildren}
                        onClose={this.onClose}
                        mask={true}
                        keyboard={true}
                        backClosable={true}
                        className='customClass'
                >
                        <div> A modal is an overlay that focuses the customer's attention on a single task or set of controls. It creates a mode that disables the main window but keeps it visible with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application.
                        Read more about when and how to use the Modal component on the internal wiki.
                        Getting startedA modal is an overlay that focuses the customer's attention on a single task or set of controls. It creates a mode that disables the main window but keeps it visible with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application.
                        Read more about when and how to use the Modal component on the internal wiki.
                        Getting started
                        </div>
                        <Button width='100px' title="Cancel"></Button>
                        <Button width='100px' title="OK"></Button>
                </Modal>
            </div>
    }
}

export default ShowModal