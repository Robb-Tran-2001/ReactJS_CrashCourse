import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        //passes contact class as prop(erty) down with 4 fields
        <div className="contacts">
            <ContactCard
                contact = {{name = "Morty Smith", imgUrl = "",  
                    phone = "(213) 908 2123", email = "msmith@rnm.com"}} 
                    /* first {} to switch JSX to JS, second {} for objects*/
            />
            <ContactCard 
                contact = {{name = "Jerry Smith", imgUrl = "",  
                phone = "(213) 908 2223", email = "jsmith@rnm.com"}} 
            />
            <ContactCard 
                contact = {{name = "Beth Smith", imgUrl = "",  
                phone = "(213) 908 2323", email = "bsmith@rnm.com"}} 
            />
            <ContactCard 
                contact = {{name = "Summer Smith", imgUrl = "",  
                phone = "(213) 908 2423", email = "ssmith@rnm.com"}} 
            />
        </div>
    )
}

export default App