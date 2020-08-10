import React from "react";
import ReactDOM from "react-dom";
import Message from "./components/MessageComponent";
import Name from "./components/NoteComponent";

class App extends React.Component {
    constructor() {
        super();
        this.state={
            message:"",
            name: "Greg"
        };
    }

    handleSingleClickEvent = () => alert('Single Click Event');
    handleDoubleClickEvent = () => alert ('Double Click Event');
    handleMouseEnter = () => alert('Mouse Enter');
    handleMouseLeave = () => alert('Mouse Leave');
    handleInputChange = event => {
        console.log(event.target.value);
    }

    handleChangeFunction = event => {
        this.setState({ message: event.target.value});
    };

    render() {
        return (
            <div className="App">
                <Message propsMessage={this.state.message} />
                <Name propsName={this.state.name} />
                <input onChange = {this.handleChangeFunction} />

                <br />
                
                <h1> Event Handlers</h1>
                <button onClick={this.handleSingleClickEvent}> Single Click Handler</button>
                <button onDoubleClick={this.handleDoubleClickEvent}> Double Click Handler</button>
                <div onMouseEnter={this.handleMouseEnter}>Mouse Enter</div>
                <div onMouseLeave={this.handleMouseLeave}>Mouse Leave</div>
                <input type="text" placeholder="change me" onChange={this.handleInputChange} handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);