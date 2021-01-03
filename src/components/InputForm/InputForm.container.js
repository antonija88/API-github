import React from "react";
import Component from "./InputForm.component";

const inputFormState = (Component) =>
  class InputForm extends React.Component {
    state = {
      value: ""
    };

    onChange = (event) => {
      const value = event.target.value;
      this.setState((state) => ({ value }));
    };

    onSubmit = (event) => {
      event.preventDefault();

      if (typeof this.props.onSubmit === "function") {
        this.props.onSubmit(this.state.value);
      }
    };

    render() {
      return (
        <Component
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          value={this.state.value}
        />
      );
    }
  };

export default inputFormState(Component);
