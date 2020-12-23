import React from "react"

class App extends React.Component { //class component has states, not functional components
    constructor () {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            isVegan: false,
            isKosher: false,
            isHalal: false
            }
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event) { //always passing in a predetermined parameter when event fires
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState([name]: checked}) : 
            this.setState({[name]: value})
    }

    render() {
        return (
            <form>
                <input 
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                />
                <br/>
                <input 
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                />
                <br/>
                <input 
                    placeholder="Age"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
                <br/>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.handleChange}
                    />
                </label>
                <br/>

                <label>
                    <select
                        type=""
                        name="location"
                        value={this.state.destination}
                        onChange={this.handleChange}
                    />
                        <option value=""> ---Choose a City </option>
                        <option value="LA"> LA </option>
                        <option value="SF"> SF </option>
                        <option value="DC"> DC </option>
                        <option value="MIA"> MIA </option>
                    </select>
                    <br/>
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        checked={this.state.isVegan}
                    />
                </label>
                <label>
                    <input 
                        type="checkbox"
                        name="isKosher"
                        onChange={this.handleChange}
                        checked={this.state.isKosher}
                    />
                </label>
                <label>
                    <input 
                        type="checkbox"
                        name="isHalal"
                        onChange={this.handleChange}
                        checked={this.state.isHalal}
                    />
                </label>
                <br/>
                <button> </button>
            </form>
            <p>Name: {this.state.firstName} {this.state.lastName} </p>
            <p>Age: {this.state.age} </p>
            <p>Gender: {this.state.gender}</p>
            <p>Location: {this.state.location} </p>
            <p> Are you Vegan: {{this.state.isVegan} ? "Yes" : "No" } </p>
            <p> Are you Kosher: {{this.state.isKosher} ? "Yes" : "No" } </p>
            <p> Are you Halal: {{this.state.isHalal} ? "Yes" : "No" } </p>
        )
    }
}

export default App