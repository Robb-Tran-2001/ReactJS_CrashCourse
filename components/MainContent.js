import React from "react"

function MainContent() {
    const firstName = "Bobby"
    const lastName = "Tarantino"
    const date = new Date() //date object to get hours for time
    let timeOfDay //string to print
    const styles = { 
        color: "#fff", 
        backgroundColor: "000",
        fontSize: "20px"
    }

    if(hours < 12) {
        timeOfDay = "morning"
        styles.color = "yellow"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "orange"
    } else {
        timeOfDay = "night"
        styles.color = "green"
    }
    return (
        <main className = "maincontent"> 
            <p>
                Hello { '${firstName} ${lastName}'} 
                {/*wrapper to indicate javascript components within JSX*/}
            </p>
            <p style = {styles}> {/*inline styling*/}
                and good {'${timeOfDay}'} 
            </p>
        </main>
    )
}

export default MainContent