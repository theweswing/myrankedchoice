import react,{useState,useEffect} from "react"

function SuggestionBox(){
const [issueSuggestion,setIssueSuggestion]=useState({
    name:"",
    email:"",
    issue:"",
    options:[]
})
const [expandBox,setExpandBox]=useState(false)
const [options,setOptions]=useState(["Option","Option"])

function expandorCollapseBox(e){
    setExpandBox(!expandBox) 
}

// function acceptOption(e){
//     setIssueSuggestion({...issueSuggestion,options:[...issueSuggestion.options,[e.target.name]=e.target.value]})
//     console.log(issueSuggestion)
// }

function spawnOptions(){
    let counter=0
    const displayedOptions=[...options].map((givenOption) => {
        counter=counter+1
        console.log(counter)
        return (
            <div>
                <label>Option {`${counter}`}:</label>
                <input onChange={handleOptions} type="text" className="options" name={`${counter-1}`} key={`options[${counter-1}]`}></input>
            </div>
        )
    })
    
    return displayedOptions
}

function handleOptions(e){
    const indexValue=parseInt(e.target.name)
    const newOptions=[...options]
    newOptions.splice(indexValue,1,e.target.value)
    setOptions(newOptions)
    console.log(options)
}

function addOption(e){
    e.preventDefault()
    setOptions([...options,""])
    console.log(options)
}

function handleChange(e){
    setIssueSuggestion({
        ...issueSuggestion,[e.target.name]:e.target.value
    })
    console.log(issueSuggestion)
}

function handleIssueSubmit(e){
    e.preventDefault()
    console.log(options)
    const submittedOptions=[...options]
    console.log(issueSuggestion)
    setIssueSuggestion({...issueSuggestion,options:submittedOptions})
    console.log(issueSuggestion)
    fetch(`http://localhost:3000/suggestions`,{
            method: "POST",
            headers: {
              "Content-Type" : "application/json"
            },
            body: JSON.stringify(
                {"name":issueSuggestion.name,
                "email":issueSuggestion.email,
                "issue":issueSuggestion.issue,
                "options":[...submittedOptions]

            })})
        .then((r) => r.json())
        .then((data) => console.log(data))
        e.target.reset()
        alert(`Thank You ${issueSuggestion.name}! Your submission of ${issueSuggestion.issue} has been received and will be reviewed!`)
}

if (expandBox===false){
    return (
        <div>
            <h2>Suggest New Issue To Vote On</h2>
            <button onClick={expandorCollapseBox}>I have a good one!</button>
        </div>
    )}
else if(expandBox===true){
    return (
        <div>
            <h2>Suggest New Issue To Vote On</h2>
            <form onSubmit={handleIssueSubmit}>
                <label>Name: </label>
                <input onChange={handleChange} type="text" name="name"></input><br></br><br></br>
                <label>Email: </label>
                <input onChange={handleChange} type="email" name="email"></input><br></br><br></br>
                <label>Issue: </label>
                <input onChange={handleChange} type="text" name="issue"></input><br></br><br></br>
                {spawnOptions()}
    <button onClick={addOption}>Add Option</button><br></br>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}


}

export default SuggestionBox


// function spawnOptionsWithCounter(){
//     let counter=0
//     for (const options of [...options]){
//         counter=counter+1
//         console.log('iterated!')
//         return (
//             <div>
//             <label>Option: </label>
//             <input onChange={acceptOption} type="text" name={`options[${counter}]`} ></input>
//         </div>
//         )
//     }
//     }