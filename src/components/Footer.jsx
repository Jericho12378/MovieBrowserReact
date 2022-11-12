import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    return(
        <div className="fotter__wrapper">
            <div className="footer">
                <ul className="footer__list">
                    <li className="footer__links" onClick={() => navigate("/")}>Home</li>
                    <li className="footer__links">Contact</li>
                    <li className="footer__links">About Me</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer