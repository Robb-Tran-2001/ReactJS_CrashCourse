import React from "react"
import FormComponent from ""./FormComponent"

class FormComponent extends React.Component { 
    //business logic

    constructor () {
        //no need for constructor, just declare variables
        state = {
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

    (event) => { //methods maybe written as arrow functions, no binding
                //lexical "this" reference from surrounding environment, 
                //no need for binding
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