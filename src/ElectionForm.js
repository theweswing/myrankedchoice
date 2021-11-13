import React,{useState,useEffect} from "react"

function ElectionForm({issue,options,ballots,id,allElections,setAllElections,activeElections,setActiveElections,chosenElection,setChosenElection}){ 
    const [ballotState,setBallotState]=useState({
        name:"",
        email:""
    })
    const [firstChoice,setFirstChoice]=useState("")
    const [secondChoice,setSecondChoice]=useState("")
    const [thirdChoice,setThirdChoice]=useState("")
    const [fourthChoice,setFourthChoice]=useState("")
    const [fifthChoice,setFifthChoice]=useState("")

    function handleName(e){
        setBallotState({
            ...ballotState,name:e.target.value
        })
        console.log(ballotState)
    }

    function handleEmail(e){
        setBallotState({
            ...ballotState,email:e.target.value
        })
        console.log(ballotState)
    }

    function handleFirst(e){
        setFirstChoice(e.target.value)
    }
    function handleSecond(e){
        setSecondChoice(e.target.value)
    }
    function handleThird(e){
        setThirdChoice(e.target.value)
    }
    function handleFourth(e){
        setFourthChoice(e.target.value)
    }
    function handleFifth(e){
        setFifthChoice(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        const ballotData={...ballotState,votes:[firstChoice,secondChoice,thirdChoice,fourthChoice,fifthChoice]}
        console.log(ballotData)
        fetch(`http://localhost:3000/ballots${id}`,{
            method: "POST",
            headers: {
              "Content-Type" : "application/json"
            },
            body: JSON.stringify(ballotData)})
        .then((r) => r.json())
        .then((data) => console.log(data))
        e.target.reset()
    }
    
    function returnToList(e){
        setChosenElection("All")
    }

    function spawnOptions(){
        const optionsToDisplay=options.map((givenOption) => {
            return (<option key={givenOption} value={givenOption}>{givenOption}</option>)
        })
        return optionsToDisplay
    }
    
    return ( <div id={`${id}+form`} >
        <button onClick={returnToList}>Return to Menu</button>
        <h2>{issue}</h2>
        <form onSubmit={handleSubmit} name="ballot">
        <label>Name: </label>
        <input onChange={handleName} type="text"></input><br></br><br></br>
        <label>Email: </label>
        <input onChange={handleEmail} type="email"></input><br></br><br></br>
        <label>First: </label>
        <select onChange={handleFirst} name="firstChoice" id="firstChoice">
            {spawnOptions()}
        </select><br></br><br></br>
        <label>Second: </label>
        <select onChange={handleSecond} name="secondChoice" id="secondChoice">
            {spawnOptions()}
        </select><br></br><br></br>
        <label>Third: </label>
        <select onChange={handleThird} name="thirdChoice" id="thirdChoice">
            {spawnOptions()}
        </select><br></br><br></br>
        <label>Fourth: </label>
        <select onChange={handleFourth} name="fourthChoice" id="fourthChoice">
            {spawnOptions()}
        </select><br></br><br></br>
        <label>Fifth: </label>
        <select onChange={handleFifth} name="fifthChoice" id="fifthChoice">
            {spawnOptions()}
        </select><br></br><br></br>
        <button type="submit">Cast My Vote!</button><br></br><br></br>
        </form>
    </div>
    )
}

export default ElectionForm