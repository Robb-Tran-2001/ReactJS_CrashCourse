import React from "react"
import FormComponent from ""./FormComponent"

class FormComponent extends React.Component { 
    //business logic
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
        <FormComponent
            handleChange={this.handleChange}
            data={this.state}
            {/*Or pass down whole thing with {...this.state} allows FormComponent to use
            props.firstName, props.lastName, etc.
            */}
        />
    }
}

export default Form