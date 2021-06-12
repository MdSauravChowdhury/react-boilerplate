import React, { Component } from "react";
import Items from "./components/items";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((currentItems) => this.setState({ items: currentItems }));
    }

    render() {
        return (
            <div>
                <Items item={this.state.items} />
            </div>
        );
    }
}

export default App;
