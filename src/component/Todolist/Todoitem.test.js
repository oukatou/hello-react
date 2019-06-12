import React from 'react'
import {shallow} from 'enzyme'
import Todoitem from './Todoitem'
import renderer from 'react-test-renderer';

describe('<Todoitem/>', ()=>{

    let props={
        handleDelete: jest.fn(),
        content:'test1'
      }
    const todoitem = shallow(
        <Todoitem {...props}></Todoitem>
    )
    it('render todoitem',()=>{
        expect(todoitem.find('li').exists()).toEqual(true)
        expect(todoitem.find('li').text()).toEqual('test1   × ')
        todoitem.find('span').simulate('click')
        expect(props.handleDelete).toBeCalled()
        let tree = renderer.create(<Todoitem {...props}></Todoitem>).toJSON()
        expect(tree).toMatchSnapshot()

    })
})