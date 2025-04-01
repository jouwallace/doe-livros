import React, { useState } from 'react';
import axios from 'axios';
import livroAberto from "../../assets/livroAberto.png";  
import S from "./queroDoar.module.scss";  

export default function QueroDoar() {  
    const [titulo, setTitulo] = useState("");  
    const [categoria, setCategoria] = useState("");  
    const [autor, setAutor] = useState("");  
    const [imagem_url, setImagem_url] = useState("");  

    const enviarDados = async (e) => {    
        e.preventDefault();
        const urlApi = "https://projetoapi-ovgx.onrender.com/doar";  
        
        const  dadosEnviar ={ 
            titulo,  
            categoria,  
            autor,  
            imagem_url  
        };
        
        await axios.post(urlApi, dadosEnviar)

        alert("Livro cadastrado!!")
        // Limpa os campos após o envio
        setTitulo("");
        setCategoria("");
        setAutor("");
        setImagem_url("");
    }
    
    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
        console.log(e.target.value)
    }
    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
        
    }
    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }
    const capturaImagem = (e) => {
        setImagem_url(e.target.value)
    }
    

    return (  
        <main className={S.mainQueroDoar}>  
            <div className={S.preenchaInfoAds}>  
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>  
            </div>  

            <section className={S.boxPrincipal}>  
                <form onSubmit={enviarDados} className={S.formularioBox}>  
                    <div className={S.imgTxt}>  
                        <img src={livroAberto} alt="imagem de um livro aberto" />  
                        <h2>Informações do Livro</h2>  
                    </div>  
                    <section className={S.inputBox}>  
                        <input 
                            type="text" 
                            placeholder="Título" 
                            onChange={capturaTitulo} 
                            value={titulo} 
                        />  
                        <input 
                            type="text" 
                            placeholder="Categoria" 
                            onChange={capturaCategoria} 
                            value={categoria} 
                        />  
                        <input 
                            type="text" 
                            placeholder="Autor" 
                            onChange={capturaAutor} 
                            value={autor} 
                        />  
                        <input 
                            type="text" 
                            placeholder="Link da Imagem" 
                            onChange={capturaImagem} 
                            value={imagem_url} 
                        />  
                    </section>  

                    <div className={S.btn}>  
                        <button type="submit" value = "Doar" onClick = {enviarDados}>Doar</button>  
                    </div>  
                </form>  
            </section>  
        </main>  
    );   
}