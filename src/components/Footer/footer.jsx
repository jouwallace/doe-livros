import S from "./footer.module.scss";  
import facebook from "../../assets/facebook.png";  
import twitter from "../../assets/twitter.png";  
import youtube from "../../assets/youtube.png";  
import linkedin from "../../assets/linkedin.png";  
import instagram from "../../assets/instagram.png";  

export default function Footer() {  
    return (  
        <footer className={S.rodape}>  
            <section>  
                <div className={S.telefoneContato}><p>Telefone: 4002-8922</p></div>  
                <nav>  
                    <ul>  
                        <li>  
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">  
                                <img src={facebook} alt="Logotipo do Facebook" />  
                            </a>  
                        </li>  
                        <li>  
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">  
                                <img src={twitter} alt="Logotipo do Twitter" />  
                            </a>  
                        </li>  
                        <li>  
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">  
                                <img src={youtube} alt="Logotipo do YouTube" />  
                            </a>  
                        </li>  
                        <li>  
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">  
                                <img src={linkedin} alt="Logotipo do LinkedIn" />  
                            </a>  
                        </li>  
                        <li>  
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">  
                                <img src={instagram} alt="Logotipo do Instagram" />  
                            </a>  
                        </li>  
                    </ul>  
                </nav>  
            </section>  
            <div className={S.copyright}>  
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>  
            </div>  
        </footer>  
    );  
}  
    
