import '../App.css'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissor from '../images/icon-scissors.svg'
import { useEffect } from 'react'

const Game = ({selected}) => {
    useEffect(()=>{
        console.log(selected);
        if(selected.length > 1){
            document.getElementById("game-cont").classList.remove("invisible");
            document.getElementById("game-page").classList.toggle("hidden");
        }
        if(selected[0] === "rock"){
            document.getElementById("game-paper").classList.add("hidden");
            document.getElementById("game-rock").classList.remove("hidden");
            document.getElementById("game-scissor").classList.add("hidden");
        }else if(selected[0] === "paper"){
            document.getElementById("game-paper").classList.remove("hidden");
            document.getElementById("game-rock").classList.add("hidden");
            document.getElementById("game-scissor").classList.add("hidden");
        }else if(selected[0] === "scissor"){
            document.getElementById("game-paper").classList.add("hidden");
            document.getElementById("game-rock").classList.add("hidden");
            document.getElementById("game-scissor").classList.remove("hidden");
        }
        if(selected[1] === 1){
            document.getElementById("paper-comp").classList.add("hidden");
            document.getElementById("rock-comp").classList.remove("hidden");
            document.getElementById("scissor-comp").classList.add("hidden");
            if(selected[0] === "rock"){
                document.getElementById("verdict-txt").innerText = "YOU WIN";
            }else{
                document.getElementById("verdict-txt").innerText = "YOU LOSE";
            }
        }else if(selected[1] === 2){
            document.getElementById("paper-comp").classList.remove("hidden");
            document.getElementById("rock-comp").classList.add("hidden");
            document.getElementById("scissor-comp").classList.add("hidden");
            if(selected[0] === "paper"){
                document.getElementById("verdict-txt").innerText = "YOU WIN";
            }else{
                document.getElementById("verdict-txt").innerText = "YOU LOSE";
            }
        }else if(selected[1] === 3){
            document.getElementById("paper-comp").classList.add("hidden");
            document.getElementById("rock-comp").classList.add("hidden");
            document.getElementById("scissor-comp").classList.remove("hidden");
            if(selected[0] === "scissor"){
                document.getElementById("verdict-txt").innerText = "YOU WIN";
            }else{
                document.getElementById("verdict-txt").innerText = "YOU LOSE";
            }
        }
        if(document.getElementById("verdict-txt").innerText === "YOU WIN"){
            let score = localStorage.getItem('score');
            if(score === '' || score === null){
                localStorage.setItem('score', 1);
            }else{
                score = +(score);
                score = score+1;
                localStorage.setItem('score', score);
            }
            document.getElementById("score").innerText = score;
        }
    });

    const resetPage = () => {
        document.getElementById("game-cont").classList.toggle("invisible");
        document.getElementById("game-page").classList.toggle("hidden");
    }
    return (
        <div className="game-container invisible" id="game-cont">
            <div className="user-sel">
                <h3>YOU PICKED</h3>
                <div className="paper-game" id="game-paper">
                    <img src={paper} alt="paper"/>
                </div>
                <div className="rock-game hidden" id="game-rock">
                    <img src={rock} alt="rock"/>
                </div>
                <div className="scissor-game hidden" id="game-scissor">
                    <img src={scissor} alt="scissor"/>
                </div>
            </div>
            <div className="verdict">
                <h2 id="verdict-txt">YOU WIN</h2>
                <button onClick={(e)=>resetPage()}>PLAY AGAIN</button>
            </div>
            <div className="computer-sel">
                <h3>THE HOUSE PICKED</h3>
                <div className="paper-comp-game" id="paper-comp">
                    <img src={paper} alt="paper"/>
                </div>
                <div className="rock-comp-game hidden" id="rock-comp">
                    <img src={rock} alt="rock"/>
                </div>
                <div className="scissor-comp-game hidden" id="scissor-comp">
                    <img src={scissor} alt="scissor"/>
                </div>
            </div>
        </div>
    )
}

export default Game
