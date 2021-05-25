import React, { Component } from "react";
import "./styles/App.css";
import Card from "./components/Card";
import SideBar from "./components/SideBar";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }
    // componentWillMount() {
    //   this.struct = document.createElement("app");
    //   document.body.appendChild(this.struct);
    // }

    render() {
        return (
          <div><SideBar/>
          <Card/></div>



        );
    }
}

export default App;
      // <p className="App-intro">{this.state.apiResponse}</p>
