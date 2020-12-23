import React from "react"

//life cycle methods
class App extends React.Component {
    constructor () {
        super()
        this.state = { 
            unreadMessages: {
                "Call father".
                "New package"
            }
        } 
    }
    
    render() { 
        //booleanCondition && what to do if true
        return (
            <div>
              {this.state.unreadMessages.length > 0 && 
              <h2>{this.state.unreadMessages.length} unread messages</h3>}
            </div>
        )
    }
}

export default App