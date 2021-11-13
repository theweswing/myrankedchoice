import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import Header from './Header'
import ElectionContainer from './ElectionContainer';
import SuggestionBox from './SuggestionBox';

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
    <div className="App">
      <Header />
      <ElectionContainer allElections={allElections} setAllElections={setAllElections} activeElections={activeElections} setActiveElections={setActiveElections} />
      <SuggestionBox />
    </div>
  );
}

export default App;
