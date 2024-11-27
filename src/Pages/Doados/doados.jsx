import S from "./doados.module.scss"
import protagonistaLivro from "../../assets/protagonistaLivro.png"

export default function doados(){
    return(
        <main className={S.mainDoados}>
            <section className={S.tituloLivrosDoados}>
                <h2>Livros Doados</h2>
            </section>
            <section>
                <section className={S.boxLivros}>
                   <div className={S.livrosInformacoes}>
                        <img src={protagonistaLivro} alt="Imagem do livro O protagonista" />
                        <div>
                        <p className={S.nomeFilme}>O protagonista</p>
                        <p className={S.autor}>Suzane Andrade</p>
                        <p className={S.genero}>Ficção</p>
                        </div>
                   </div>
                </section>
            </section>
        </main>
      
    )
}