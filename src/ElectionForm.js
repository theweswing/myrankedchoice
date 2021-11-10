import React,{useState,useEffect} from "react"

function ElectionForm({issue,options,ballots,id,allElections,setAllElections,activeElections,setActiveElections,chosenElection,setChosenElection}){ 
    const [ballotState,setBallotState]=useState({
        name:"",
        email:"",
        votes:[
            "",
            "",
            "",
            "",
            ""
        ]
    })

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

    function handleVotes(e){
        setBallotState({
            ...ballotState,[ballotState.votes[0]]:e.target.value
        })
        console.log(ballotState)
        console.log(ballotState.votes)
    }

    // function handleFirstVote(e){
    //     setBallotState({
    //         ...ballotState,
    //     })
    // }

    function spawnOptions(){
        const optionsToDisplay=options.map((givenOption) => {
            return (<option key={givenOption} value={givenOption}>{givenOption}</option>)
        })
        return optionsToDisplay
    }
    
    return ( <div id={`${id}+form`} >
        <h2>{issue}</h2>
        <form name="ballot">
        <label>Name: </label>
        <input onChange={handleName} type="text"></input><br></br><br></br>
        <label>Email: </label>
        <input onChange={handleEmail} type="email"></input><br></br><br></br>
        <label>First: </label>
        <select onChange={handleVotes} name="0" id="firstChoice">
            {spawnOptions()}
        </select><br></br><br></br>
        <label>Second: </label>
        <select onChange={handleVotes} name="1" id="secondChoice">
            {spawnOptions()}
        </select><br></br><br></br>
        <label>Third: </label>
        <select onChange={handleVotes} name="2" id="thirdChoice">
            {spawnOptions()}
        </select><br></br><br></br>
        <label>Fourth: </label>
        <select onChange={handleVotes} name="3" id="fourthChoice">
            {spawnOptions()}
        </select><br></br><br></br>
        <label>Fifth: </label>
        <select onChange={handleVotes} name="4" id="fifthChoice">
            {spawnOptions()}
        </select><br></br><br></br>
        <button type="submit">Cast My Vote!</button>
        </form>
    </div>
    )
}

export default ElectionForm