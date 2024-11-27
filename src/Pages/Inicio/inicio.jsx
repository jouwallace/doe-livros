import S from "./inicio.module.scss"
import React from "react"
import comunity from "../../assets/comunity.png"
import leitura from "../../assets/leitura.png"
import libra from "../../assets/libra.png"
import transformarVidas from "../../assets/transformarVidas.png"
// import background from '../assets/parteDoacaoTexto.png';  



export default function inicio(){
    return(
        <main>
        <section className={S.venhaDoar}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <div className={S.porqueDoar}>
             <h2>
                Por que devo doar?
             </h2>
        </div>
        <section className={S.motivosDoacoes}>
             <article>
             <img src={comunity} alt="comunidade imagem" />
             <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
             </article>

             <article>
             <img src={leitura} alt="estimular leitura imagem" />
             <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
             </article>

             <article>
             <img src={libra} alt="libra imagem" />
             <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
             </article>

             <article>
             <img src={transformarVidas} alt="transformar vidas imagem" />
             <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
             </article>
          
        </section>
        </main>
    )
}