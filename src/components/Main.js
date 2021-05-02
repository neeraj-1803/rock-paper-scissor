import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissor from '../images/icon-scissors.svg'

const Main = ({clickedOption}) => {
    return (
        <div className="game-page" id="game-page">
            <div className="paper" onClick={(e)=>clickedOption(e)}>
                <img src={paper} alt="paper"/>
            </div>
            <div className="rock" onClick={(e)=>clickedOption(e)}>
                <img src={rock} alt="rock"/>
            </div>
            <div className="scissor" onClick={(e)=>clickedOption(e)}>
                <img src={scissor} alt="scissor"/>
            </div>
        </div>
    )
}

export default Main
