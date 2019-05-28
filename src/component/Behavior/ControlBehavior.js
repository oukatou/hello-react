import React, { Component } from "react";
import FocusBehavior from "./FocusBehavior";
import HoverBehavior from "./HoverBehavior";
import PressedBehavior from "./PressedBehavior";

class ControlBehavior extends Component {

  render() {
    return (
      <HoverBehavior
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      >
        {({ hasHover, onMouseEnter, onMouseLeave }) => (
          <FocusBehavior
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
          >
            {({ hasFocus, onFocus, onBlur }) => (
              <PressedBehavior
                onMouseDown={this.props.onMouseDown}
                onMouseUp={this.props.onMouseUp}
                onMouseLeave={onMouseLeave}
              >
                {({ isPressed, onMouseDown, onMouseUp, onPressedMouseLeave }) =>
                  this.props.children({
                    hasHover,
                    hasFocus,
                    isPressed,
                    onFocus,
                    onBlur,
                    onMouseDown,
                    onMouseEnter,
                    onMouseLeave: onPressedMouseLeave,
                    onMouseUp
                  })
                }
              </PressedBehavior>
            )}
          </FocusBehavior>
        )}
      </HoverBehavior>
    );
  }
}

export default ControlBehavior;
