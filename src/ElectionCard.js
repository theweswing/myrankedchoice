import React,{useState,useEffect} from "react"
function ElectionCard({chosenElection,setChosenElection,allElections,activeElections,setAllElections,setActiveElections,issue,options,ballots,id}){

function handleClick(e){
    setChosenElection({issue})
    console.log(chosenElection)
}

    return(
            <div id={{issue}+"card"}> 
                <h3>{issue}</h3>
                <button onClick={handleClick} value={issue} id={{issue}+"expand"}>Vote Now!</button>
            </div>)
}

export default ElectionCard