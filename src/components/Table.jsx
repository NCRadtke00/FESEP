import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [],
    };
  }
  async componentDidMount() {
    const url = "https://api.hatchways.io/assessment/students";
    const response = await fetch(url);
    const data = await response.json();
    try {
      this.setState({
        loading: false,
        list: [...data],
      });
    } catch (e) {
      console.log(
        "Something went very wrong, contact me right away! Thank you!"
      );
      console.log(e);
    }
  }
  render() {
    //sort by first, last, and full name
    const items = this.state.list
      .filter((item) => item.firstName)
      .sort(function (a, b) {
        return a.id - b.id;
      });
    // const sorted = items.filter((item) => item.id);
    //create function getAverage(){ from grades[]}
    return (
      <div>
        <h1>pic firstName lastName</h1>
        <div>
          <h3>Email: {items.email}</h3>
          <h3>Company: {items.company}</h3>
          <h3>Skill: {items.skill}</h3>
          <h3>Average:{}</h3>
        </div>
        <div>grades</div>
      </div>
    );
  }
}

//In this part, you are going to add a text input, where a user can filter the list of students by their name (including full name!).
