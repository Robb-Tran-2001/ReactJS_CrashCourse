import React from "react"
import Joke from "./Joke"
function App() {
    return (
        <div className="contacts">
           <Joke
                setup = {question="What do you call a pig with 3 eyes",
                    punchline="piiigs"}
           />
           <Joke
                setup = {question="What do you call a cow with no legs",
                    punchline="ground beef"}
           />
           <Joke
                setup = {question="What do you never see",
                    punchline="2 pretty bestfriends"}
           />
           <Joke
                setup = {question="What is obama's last name",
                    punchline="srsly tho what is it"}
           />
           <Joke
                setup = {punchline="sky is sky"}
           />
        </div>
    )
}

export default App