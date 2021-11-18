import {useState} from "react"
import styled from 'styled-components'

function Explainers(){

const [explanation,setExplanation]=useState(false)

function toggleDisplayHow(e){
    setExplanation("how")
}

function toggleDisplayWhy(e){
    setExplanation("why")
}

function toggleDisplayHistory(e){
    setExplanation("history")
}

function displayExplainer(e){
    if (explanation===false){
        return null
    }
    if (explanation==="how"){
        return howRankChoice
    }
    if (explanation==="why"){
        return whyRankChoice
    }
    if (explanation==="history"){
        return historyRankChoice
    }
}

const howRankChoice = (<div><p>The concept is simple: </p>
    <p>Instead of voting for just your one favorite candidate, you rank your preferences in order: </p>
    <p>To start, your first choice is the only vote that "matters";</p>
    <p>Elections are run in multiple "rounds,"" and with each round the lowest yielding candidates are eliminated from the ballot.</p>
    <p>If your first choice is eliminated, your second choice is now your vote that "matters", and so on, as the rounds continue.</p>
    <p>The "rounds" continue until two candidates remain, when the candidate with the greater percentage of votes is the winner.</p></div>)
        
const whyRankChoice = (<div>
<p>Imagine this common scenario: you are with your friends, deciding on what to order for dinner:</p>
<p>Your first thought might be: everyone says which food they want, and you order the food that most people say.</p>
<p>Realistically, however, we have preferences. You want Pizza, but you'd be okay with Chinese. You'd also do Thai, but not Sushi because you had it for lunch.</p>
<p>When you have this discussion with your friends, you are informally engaging in ranked-choice decision making:</p>
<p>You are finding not just the most "popular" outcome but the most widely acceptable outcome that leaves the most people happy!</p>
<p>So why should our food orders be more nuanced than our elections? </p>
    </div>)
        
const historyRankChoice = (
<p>Invented in Europe in the 1850s, Ranked-choice-voting, or RCV, is a way to give voters more say in their elections. <br></br><br></br>Ranked-Choice is the default method for elections in Australia, Ireland, Scotland, and Wales.<br></br><br></br> In the United States, RCV is used in the states of Alaska and Maine, and in many cities including San Francisco, Oakland, and Minneapolis. <br></br><br></br>After a ballot initiative in 2019, New York City adopted RCV for primary and special elections. The 2021 Democratic Primary was the first major NYC election to use RCV.</p> )


    
    return (
        <div>
        <ExplainerButtons>
<button onClick={toggleDisplayWhy}>Why Ranked Choice?</button><br></br><br></br>
<Divider />
<button onClick={toggleDisplayHow}>How Does It Work?</button><br></br><br></br>
<Divider />
<button onClick={toggleDisplayHistory}>History</button>
</ExplainerButtons>
<TextParagraph>
{displayExplainer()}
</TextParagraph>
        </div>
    )
}

export default Explainers

const ExplainerButtons=styled.div`
    display:flex;
    flex-wrap:nowrap;
    margin: auto;
    width: 30%;
    margin-left: 38%;
    border-left: 10px;
    border-right: 10px;`

const Divider=styled.div`
    width: 20px;
    height:auto;
    display:inline-block;`

const TextParagraph=styled.div`
    margin: auto;
    width: 80%;
    margin-left: 20%;
    border-left: 10px;
    border-right: 10px;`