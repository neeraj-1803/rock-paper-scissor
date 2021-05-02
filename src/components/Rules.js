import cross from '../images/icon-close.svg'
import rulesImg from '../images/image-rules.svg'

const Rules = () => {
    function hidePopup(){
        document.getElementById("rule").classList.toggle("hidden");
    }
    return (
        <div className="rules hidden" id="rule">
            <div className="rules-main">
                <div className="rules-head">
                    <h2>RULES</h2>
                    <img src={cross} alt="cross"  onClick={(e)=>hidePopup()}/>
                </div>
                <div className="rules-img">
                    <img src={rulesImg} alt="rulebook"/>
                </div>
            </div>
        </div>
    )
}

export default Rules
