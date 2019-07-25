/* eslint-disable no-undef */
import React from 'react'
import {mount} from 'enzyme'
import Button from './Button'
import renderer from 'react-test-renderer';

describe('<Button/>',()=>{
    let wrapper,eventHandler
    let subject = (props) => mount(<Button {...props}></Button>)
    describe("onClick", () => {
        beforeEach(() => {
          eventHandler = jest.fn();
          wrapper = subject({ onClick: eventHandler });
        });
  
        it("is triggered on click", () => {
          wrapper.simulate("click");
          expect(eventHandler).toBeCalled();
        });
      });
    
    describe("onMouseLeave", () => {
        beforeEach(() => {
          eventHandler = jest.fn();
          wrapper = subject({ onMouseLeave: eventHandler });
        });
  
        it("is triggered on MouseLeave", () => {
          wrapper.simulate("mouseleave");
          expect(eventHandler).toBeCalled();
        });
      });

    describe("onMouseEnter", () => {
        beforeEach(() => {
          eventHandler = jest.fn();
          wrapper = subject({ onMouseEnter: eventHandler });
        });
  
        it("is triggered on MouseEnter", () => {
          wrapper.simulate("mouseenter");
          expect(eventHandler).toBeCalled();
        });
      });
    /*describe("<button/>", () => {
        beforeEach(() => {
          wrapper = subject({ title: "test" }  );
        });
        it("is a <button> tag", () => {
            expect(wrapper.matchesElement(<button><span>test</span></button>)).toEqual(true);
          });
      }); */
    const props = { title: "test" }  
    const vDom = React.createElement(Button, props);
    const tree = renderer.create(vDom).toJSON();
    expect(tree).toMatchSnapshot()

})