import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData.js"
function App() {
    const jokeComponents = jokesData.map(joke => { //joke => is equivalent to function(joke)
        return <Joke key = {joke.id} question={joke.question} punchline = {joke.punchline} />
    })
    //go over jokesData array, map it into an array of Joke.js components called jokeComponents
    //each item in the new array takes jokesData fields and handles it in Joke() function
    //which returns a div


    return (
        <div className="jokes">
           {jokeComponents}
        </div>
    )
}

export default App