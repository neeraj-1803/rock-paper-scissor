import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import Game from './components/Game';
import Header from './components/Header';
import Main from './components/Main';
import Rules from './components/Rules';

function App() {
  const [selected, setSelected] = useState([]);
  const clickedOption = (e) => {
    let val;
    if(e.target.hasAttribute('alt')){
        val = e.target.alt;
    }else{
        val = e.target.className;
    }
    const rand = Math.floor(Math.random()*3)+1;
    setSelected([val, rand]);
    console.log(selected);
}
  return (
    <div className="App">
      <Header />
      <Main clickedOption={clickedOption}/>
      {(selected !== "")? <Game selected={selected}/> : ''}
      <Rules />
      <Footer />
    </div>
  );
}

export default App;
