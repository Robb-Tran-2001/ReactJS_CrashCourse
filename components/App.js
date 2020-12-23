import React from "react"
import Product from "./Product"
import productsData from "./productsData"
function App() {
    const productComponents = productsData.map(item => {
        return (
            <Product key = {item.id} product = {item}/>
        )
    })

    return (
        <div className="products">
           {productComponents}
        </div>
    )
}

class App extends React.Component //class based component instead of functional components
{

    myMethod() {
        return (
            productsData.map(item => {
                return (
                    <Product key = {item.id} product = {item}/>
                )
            })
        )
    }

    render() { //always necessary
        // const date = new Date() //set up inline styling, conditional rendering, etc. here
        const productComponents = this.myMethod() //calls myMethod
        return (
            <div className="products">
               {productComponents}
            </div>
        )
    }
}

export default App