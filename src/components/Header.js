import logo from '../images/logo.svg'
import '../App.css'
import { useEffect } from 'react';

const Header = () => {
    useEffect(()=>{
        let score = localStorage.getItem('score');
        if(score === '' || score === null){
            localStorage.setItem('score', "1");
        }
    });
    return (
        <div className="header">
            <img src={logo} alt='Logo' />
            <div className="score">
                <h4>SCORE</h4>
                <h2 id="score">{localStorage.getItem('score')}</h2>
            </div>
        </div>
    )
}

export default Header
