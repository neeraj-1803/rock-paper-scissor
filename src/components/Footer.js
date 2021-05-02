import '../App.css'

export const Footer = () => {
    function hidePopup(){
        document.getElementById("rule").classList.toggle("hidden");
    }
    return (
        <div className="footer">
            <button onClick={(e)=> hidePopup()}>Rules</button>
        </div>
    )
}
