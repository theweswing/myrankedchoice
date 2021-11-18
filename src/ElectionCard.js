import React from "react"
import styled from "styled-components"

function ElectionCard({chosenElection,setChosenElection,allElections,activeElections,setAllElections,setActiveElections,issue,options,ballots,id}){

function handleClick(e){
    setChosenElection({issue})
    console.log(chosenElection)
}

    return(
        <GivenElection>
            <div id={{issue}+"card"}> 
                <h3>{issue}</h3>
                <button onClick={handleClick} value={issue} id={{issue}+"expand"}>Vote Now!</button>
            </div>
            </GivenElection>)
}

export default ElectionCard


const GivenElection=styled.div `
    width: 100px;
    height: 150px;
    padding: 20px;
    margin: 50px;
    border-style:dotted;
    border-width:2px; `