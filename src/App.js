import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import Header from './Header'
import ElectionContainer from './ElectionContainer';
import SuggestionBox from './SuggestionBox';
import styled from 'styled-components'

function App() {
const [allElections,setAllElections]=useState([])
const [activeElections,setActiveElections]=useState([])

  useEffect(() => {
    fetch('http://localhost:3000/elections')
    .then((r) => r.json())
    .then((data) => {
      setAllElections(data)
      setActiveElections(data)})
  },[])

  return (
    <div>
      <Header />
      <ElectionContainer allElections={allElections} setAllElections={setAllElections} activeElections={activeElections} setActiveElections={setActiveElections} />
      <SuggestionBox />
    </div>
  );
}

export default App;