import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './styles.scss';

export function Footer() {
    return (
        <footer className="footerContainer">
            <div className="footerContent">
                <span>&copy; 2021 Copyright - Fernando Melo</span>
                <button onClick={() => window.location.href = "https://github.com/nandoapm/Project-StarWars-React"}>
                    <FaGithub />
                </button>&nbsp;&nbsp;
                <button onClick={() => window.location.href = "https://br.linkedin.com/in/dev-fernando-melo"}>
                    <FaLinkedin />
                </button>
            </div>
        </footer>
    )
}