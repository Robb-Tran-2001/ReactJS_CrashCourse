import React from "react"

//life cycle methods
class App extends React.Component {
    constructor () {
        super()
        this.state = { //in charge of what to render
            isLoading: true //show when current call to API is taking a while, so what to display
        } 
    }
    
    componentDidMount() { //what to render when the data is fetched
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 1500) //fake API call for now, 
    }

    render() { 
         //JSX wrapping for terniary operator and render is in charge of what to render
         //which makes sense
        return (
            <div>
                {this.state.isLoading ? <h1>Loading... </h1> :
                <Conditional/>
                }
              
            </div>
        )
    }
}

export default App