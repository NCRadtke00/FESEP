import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [],
    };
  }
  async componentDidMount() {}
  render() {
    return <div></div>;
  }
}
