import ComponentB from "./ComponentB"
import React, {useState, createContext} from "react"

// if i were to pass <h2>{'Hello ' + user}</h2> I would need to use props
// in every level until i reach component D
// <ComponentB user={user}/> <ComponentC user={props.user}/> and so on

// first export a context that has a descriptive name i.e"ColorContext"
export const UserContext = createContext();

function ComponentA(){
    const [user, setUser] = useState("louai")

    return(<div className="box">
        
        <h1>Component A</h1>
        <h2>{'Hello ' + user}</h2>

        <UserContext.Provider value={user}>
            <ComponentB/>
        </UserContext.Provider>
        
        
    </div>)
}


export default ComponentA

