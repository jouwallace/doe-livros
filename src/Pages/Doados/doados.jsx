import S from "./doados.module.scss"
import protagonistaLivro from "../../assets/protagonistaLivro.png"
import { useEffect, useState } from "react";  
import axios from 'axios'
export default function doados(){


    const [livros, setLivros] = useState([])
    
    const getLivros = async () => {
        const response = await axios.get("https://projetoapi-ovgx.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect(()=>{
        getLivros()
    },[])




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
                   {livros.map((item) => (  
                   <article className = {S.livrosInformacoes} key={item.id}>  
                        <img src={item.imagem_url} alt={item.titulo} />  
                        <h3 className={S.nomeFilme}> {item.titulo}</h3>  
                        <p className={S.genero}>{item.autor}</p>  
                        <p className ={S.autor}> {item.categoria}</p>  
                   </article>  
                  ))}  
                </section>
            </section>
        </main>
      
    )
}