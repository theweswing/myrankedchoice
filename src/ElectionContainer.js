import React, {useState,useEffect} from "react"
import ElectionCard from "./ElectionCard"
import ElectionForm from "./ElectionForm"
import styled from "styled-components"

function ElectionContainer({activeElections,allElections,setActiveElections,setAllElections}){
    const[chosenElection,setChosenElection]=useState("All")

    function spawnElections(){
        if (chosenElection==="All"){
        const electionsToDisplay = allElections.map((givenElection) => {
            return (<ElectionCard chosenElection={chosenElection} setChosenElection={setChosenElection} key={givenElection.issue} issue={givenElection.issue} options={givenElection.options} ballots={givenElection.ballots} id={givenElection.id} allElections={allElections} activeElections={activeElections} setAllElections={setAllElections} setActiveElections={setActiveElections}/>)
        })
        return electionsToDisplay}
        else {
            console.log(chosenElection)
            const selectedElection = [...allElections].filter((givenElection) => {
                return (givenElection.issue===chosenElection.issue)
            })
            console.log(selectedElection[0])
            return <ElectionForm chosenElection={chosenElection} setChosenElection={setChosenElection} issue={selectedElection[0].issue} options={selectedElection[0].options} ballots={selectedElection[0].ballots} id={selectedElection[0].id} allElections={allElections} activeElections={activeElections} setAllElections={setAllElections} setActiveElections={setActiveElections} chosenElection={chosenElection} setChosenElection={setChosenElection} />
        }
    }

    return (
    <ElectionsMenu>{
    spawnElections()}
    </ElectionsMenu>)
}

export default ElectionContainer

const ElectionsMenu=styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin-left: 17.3% `