import React from "react"
import Product from "./Product"
import productsData from "./productsData"
// function App() {
//     const productComponents = productsData.map(item => {
//         return (
//             <Product key = {item.id} product = {item}/>
//         )
//     })

//     return (
//         <div className="products">
//            {productComponents}
//         </div>
//     )
// }

class App extends React.Component //class based component instead of functional components
{
     //initializes the app, necessary for changing states as props' values cannot be changed
    constructor () {
        super() //calls parent constructor
        this.state = {
            answer: "yes"
        }
    }

    render() {
        return (
            <div>
                <h3>Do I need to fix my sleep schedule? {this.state.answer}</h3>
                <ChildComponent answer = {this.state.answer}/> 
                {/*Pass down new prop with the state */}
            </div>
        )
    }
}

export default App