import React from "react"

class App extends React.Component { //class component has states, not functional components
    constructor () {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: ""
            favColor: ""
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event) { //always passing in a predetermined parameter when event fires
        const {name, value, type, checked} = event.target
        type === "checkBox" ?
        this.setState({[name]: checked}) //ternary statement to update if it is checkbox
        : this.setState({
                [name]: value
                //grabs string from event.target.name with actual square bracket
                //THIS IS WHY THEY NEED TO BE IDENTICAL
            }) 
        //event.target.value indicates new value
    }
    /*one single onChange method for all types of forms
    1. text
    2. textarea
    3. readio
    4. checkbox (only thing that uses checked instead of value property)
    5. select
    */

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.firstName} //to make it a controlled form
                    name="firstName" 
                    placeHolder="First name" 
                    onChange={this.handleChange}/>
                <input 
                    type="text" 
                    value={this.state.lastName}
                    name="lastName" 
                    placeHolder="Last name" 
                    onChange={this.handleChange}/>
                {/*property name needs to match state's property syntax*/}
                <textarea value={"some default value"} onChange={this.handleChange}/> {/* self closing in react*/}
                <input 
                    type="checkbox"
                    name = "isFriendly"
                    checked={this.state.isFriendly}
                    onChange={this.handleChange} //how to make this handle change properly using the same method
                />
                <label> 
                    <input //radio buttons which are both input type text and checkbox
                            //using both value and checked property
                            //aren't meant to be checked if true or false, but depends on
                            //gender value (string)
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === male}
                        onChange={this.handleChange}
                    />
                </label>
                 <label>
                    <input
                        type="radio"
                        name="gender" //same name to both buttons, means I can only pick one
                                    //or the other
                        value="female"
                        checked={this.state.gender === female}
                        onChange={this.handleChange}
                    />
                </label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                </select>
                <button>Submit</button>
            </form>
        )
    }
}

//Control forms: state directs what input box should show, not the other way around
export default App