import React,{useState,useEffect} from "react"
import Explainers from "./Explainers"
import styled from "styled-components"

function Header(){

// const [displayHistory,setDisplayHistory]=useState(false)
// const [displayHow,setDisplayHow]=useState(false)
// const [displayWhy,setDisplayWhy]=useState(false)

// function toggleDisplayHow(e){
//     setDisplayHow(!displayHow)
// }

// function toggleDisplayWhy(e){
//     setDisplayWhy(!displayWhy)
// }

// function toggleDisplayHistory(e){
//     setDisplayHistory(!displayHistory)
// }

// const howRankChoice = (<p>The concept is simple: 
//     <br></br><br></br>Instead of voting for just your one favorite candidate, you rank your preferences in order:
//     <br></br>To start, your first choice is the only vote that "matters";
//     <br></br>Elections are run in multiple "rounds,"" and with each round the lowest yielding candidates are eliminated from the ballot.
//     <br></br>If your first choice is eliminated, your second choice is now your vote that "matters", and so on, as the rounds continue.
//     <br></br>The "rounds" continue until two candidates remain, when the candidate with the greater percentage of votes is the winner.</p>)
    
//     const whyRankChoice = (<p>Imagine this common scenario: you are with your friends, deciding on what to order for dinner:
//         <br></br><br></br>Your first thought might be: everyone says which food they want, and you order the food that most people say.
//         <br></br>Realistically, however, we have preferences. You want Pizza, but you'd be okay with Chinese. You'd also do Thai, but not Sushi because you had it for lunch.
//         <br></br>When you have this discussion with your friends, you are informally engaging in ranked-choice decision making:
//         <br></br>You are finding not just the most "popular" outcome but the most widely acceptable outcome that leaves the most people happy!
//         <br></br><br></br>So why should our food orders be more nuanced than our elections? </p>)
    
//     const historyRankChoice = (<p>Invented in Europe in the 1850s, Ranked-choice-voting, or RCV, is a way to give voters more say in their elections. Ranked-Choice is the default method for elections in Australia, Ireland, Scotland, and Wales.<br></br> In the United States, RCV is used in the states of Alaska and Maine, and in many cities including San Francisco, Oakland, and Minneapolis. <br></br>After a ballot initiative in 2019, New York City adopted RCV for primary and special elections. The 2021 Democratic Primary was the first major NYC election to use RCV.</p> )

    return (
        <div id="header">
            <HeaderDiv>
            <h1>My Ranked Choice</h1>
            <h3>Your Interactive, Easy and Fun Guide to Understanding New York City Elections</h3>
            <h4>Mission Statement:</h4>
            <p>Promote a greater understanding of New York City civics by allowing users to rank their favorite "X" and watch a ranked-choice-election play out, determining the crowd's anointed best "X"
            </p>
            <h4 style={{color:"red"}}>Phase 1: Friends And Family</h4>
            <p style={{color:"red"}}>Data Collection. Please vote on as many issues as you have opinions on! Robust data will make the elections more interesting!</p>
            </HeaderDiv>
            <Explainers />
            
        </div>
    )
}

export default Header

// Starting in 2021, New York City has begun using "Ranked Choiced Voting" in many city-wide elections.

const HeaderDiv=styled.div`
    margin: auto;
    width: 80%;
    margin-left: 20%;
    border-left: 10px;
    border-right: 10px;`