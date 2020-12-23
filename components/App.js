import React from "react"

class App extends React.Component { //class component has states, not functional components
    constructor () {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1") //get luke skywalker with fetch methods
            .then(response => response.json()) //resolve promise, turn returned value to json
            .then(data => { //change current data
                this.setState({
                        character: data, 
                        loading: false //change current loading
                    })
            }) //what our data is   
    }

    render() {
        return (
            <div>
                <p> {this.state.loading ? "Loading" : this.state.character.name} </p>
            </div>
        )
    }
}

export default App