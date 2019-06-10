import React from 'react'
import {mount} from 'enzyme'
import PressedBehavior from './PressedBehavior'

function lastCallOfMock(mockFn){
    return mockFn.mock.calls[mockFn.mock.calls.length-1]
}
function renderExample(exampleProps){
    let renderChildSpy = jest.fn(
        ({onMouseDown, onPressedMouseLeave, onMouseUp})=>(
            <input
                onMouseDown={onMouseDown}
                onMouseLeave={onPressedMouseLeave}
                onMouseUp={onMouseUp}
            />
            )
    )
    let wrapper = mount(<PressedBehavior {...exampleProps}>{renderChildSpy}</PressedBehavior>)
    return {
        renderChildSpy,
        wrapper
    }
}

describe('PressedBehavior',()=>{
    describe('by default',()=>{
        it('isPressed=false',()=>{
            let {renderChildSpy} = renderExample();
            let renderArg = lastCallOfMock(renderChildSpy)[0]
            expect(renderArg.isPressed).toBeFalsy()
        })
    })
    describe('when gaining pressed',()=>{
        it('isPressed=true',()=>{
            let {wrapper,renderChildSpy} = renderExample();
            wrapper.simulate('mousedown')
            let renderArg = lastCallOfMock(renderChildSpy)[0]
            expect(renderArg.isPressed).toBeTruthy()
        })
        it('calls onMouseDown callback',()=>{
            const onMouseDownSpy = jest.fn();
            let {wrapper} = renderExample({onMouseDown:onMouseDownSpy})
            wrapper.simulate('mousedown')
            expect(onMouseDownSpy.mock.calls.length).toBe(1)
        })

    })
    describe('when losing pressed',()=>{
        it('isPressed=false',()=>{
            let {wrapper,renderChildSpy} = renderExample();
            wrapper.simulate('mousedown')
            wrapper.simulate('mouseup')
            let renderArg = lastCallOfMock(renderChildSpy)[0]
            expect(renderArg.isPressed).toBeFalsy()
        })
        it('calls onMouseUp callback',()=>{
            const onMouseDownSpy = jest.fn();
            let {wrapper} = renderExample({onMouseDown:onMouseDownSpy})
            wrapper.simulate('mousedown')
            wrapper.simulate('mouseup')
            expect(onMouseDownSpy.mock.calls.length).toBe(1)
        })
        it('passes isPressed=false onMouseLeave',()=>{
            const { renderChildSpy, wrapper } = renderExample();
            wrapper.simulate('mouseleave')
            let renderArg = lastCallOfMock(renderChildSpy)[0]
            expect(renderArg.isPressed).toBeFalsy()
        })

    })
})

