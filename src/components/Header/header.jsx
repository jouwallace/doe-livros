// devo importar tudo que preciso aqui
import livroLogo from "../../assets/livroLogo.png"
import lupa from "../../assets/lupa.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Inicio from "../../Pages/Inicio/inicio"
import Doados from "../../Pages/Doados/doados"
import QueroDoar from "../../Pages/QueroDoar/queroDoar"
import S from "./header.module.scss"

export default function Header(){
    return(
        <BrowserRouter>
        <header>
            <section className={S.boxLogo}>
                <img src={livroLogo} alt="imagem de um livro" />
                
                <h1>Livros Vai Na Web</h1>
            </section>

            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="doados">Livros Doados</Link></li>
                    <li><Link to= "queroDoar">Quero Doar</Link></li>
                </ul>

            </nav>

            <div className={S.procurar}>
                <input type="text" placeholder="O que voce procura?" />
                <img src={lupa} alt="lupa para pesquisar" />
            </div>


        </header>

        {/* aqui que as rotas são passadas */}
        <Routes>
            <Route path="/" element = {<Inicio/>}/>
            <Route path="doados" element = {<Doados/>}/>
            <Route path="queroDoar" element = {<QueroDoar/>}/>

        </Routes>
        </BrowserRouter>
    )
}