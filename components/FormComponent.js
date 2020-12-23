import React from "react"

function FormComponent (props) { //UI component
    return (
        <form>
            <input 
                placeholder="First Name"
                name="firstName"
                value={props.data.firstName}
                onChange={props.handleChange}
            />
            <br/>
            <input 
                placeholder="Last Name"
                name="lastName"
                value={props.data.lastName}
                onChange={props.handleChange}
            />
            <br/>
            <input 
                placeholder="Age"
                name="age"
                value={props.data.age}
                onChange={props.handleChange}
            />
            <br/>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={props.handleChange}
                />
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={props.handleChange}
                />
            </label>
            <br/>

            <label>
                <select
                    type=""
                    name="location"
                    value={props.data.destination}
                    onChange={props.handleChange}
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
                    onChange={props.handleChange}
                    checked={props.data.isVegan}
                />
            </label>
            <label>
                <input 
                    type="checkbox"
                    name="isKosher"
                    onChange={props.handleChange}
                    checked={props.data.isKosher}
                />
            </label>
            <label>
                <input 
                    type="checkbox"
                    name="isHalal"
                    onChange={props.handleChange}
                    checked={props.data.isHalal}
                />
            </label>
            <br/>
            <button> </button>
        </form>
        <p>Name: {props.data.firstName} {props.data.lastName} </p>
        <p>Age: {props.data.age} </p>
        <p>Gender: {props.data.gender}</p>
        <p>Location: {props.data.location} </p>
        <p> Are you Vegan: {{props.data.isVegan} ? "Yes" : "No" } </p>
        <p> Are you Kosher: {{props.data.isKosher} ? "Yes" : "No" } </p>
        <p> Are you Halal: {{props.data.isHalal} ? "Yes" : "No" } </p>
    )
}

export default FormComponent