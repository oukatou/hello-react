import { Component } from "react";

export default class HoverBehavior extends Component {

  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      hasHover: false
    };
  }

  handleFocus(event) {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }

    if (!event.defaultPrevented) {
      this.setState({ hasHover: true });
    }
  }

  handleBlur(event) {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }

    if (!event.defaultPrevented) {
      this.setState({ hasHover: false });
    }
  }

  render() {
    return this.props.children({
      hasHover: this.state.hasHover,
      onMouseEnter: this.handleFocus,
      onMouseLeave: this.handleBlur
    });
  }
}
