import React from "react"

//life cycle methods
class App extends React.Component {
    constructor () {
        super()
        this.state = {
            
        } 
    }
    
    componentDidMount() { 
        //2. you were just born. runs once when it shows on the screen.
        //good for API calls. get the data for display

    }

    // UNSAFE_componentWillReceiveProps(nextProps) { //deprecated
    //     //3. you received a gift. runs every time it is mounted and every time 
    //     //it receives new prop 
    //     if(nextProps.whatever !== this.props.whatever) {
    //         //change if different prop
    //     }
    // }

    // componentWillMount() {}
    // componentWillUpdate() {}

    static getDerivedStateFromProps(props, state) {
        //return new state from the props
        //for rare cases when components receive props from parents and change its state
        //accordingly
    }

    getSnapShotBeforeUpdate() {
        //creates backup of current things
    }

    shouldComponentUpdate(nextProps, nextState) {
        //4. should I change my clothes? Decide if component should change
        //true if it should update false if not
    }

    componentWillUnmount() {
        //5. CLean up, tear code before component disappears
        //e.g. remove event listeners
    }

    render() { 
        //1. lifecycle method, like getting dressed for the day, changes when inner component changes
        return (
            <div>
               Code goes here
            </div>
        )
    }
}

/*
1. render(): every time there is a change, like putting on new clothes
2. componentDidMount(): every time a new component is born (e.g. from api calls)
3. shouldComponentUpdate(nextProps, nextState): should I change clothes?
4. componentWillReceiveProps(nextProps): recieving a gift, runs everytime new prop is received
5. componentWillUnMount(): tear down of old code before component disappears 
6. componentWillUpdate()
7. componentWIllMount()
8. static getDerivedStateFromProps(props, state): when child component gets props from
parent and change its state accordingly
9. getSnapShotForUpdate(): save current data
4, 6, 7 are deprecated. 8 is discouraged
*/
export default App