import livroAberto from "../../assets/livroAberto.png"
import S from "./queroDoar.module.scss"

export default function queroDoar(){
    return(
        <main className={S.mainQueroDoar}>
              <div className={S.preenchaInfoAds}>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
              </div>
              
          <section className={S.boxPrincipal}>

              <form action= "" className={S.formularioBox}>
               <div className={S.imgTxt}>
                <img src={livroAberto} alt="imagem de um livro aberto" />
                <h2>Informações do Livro</h2>
               </div>
               <section className={S.inputBox}>
                <input type="text" placeholder="  Titulo"/>
                <input type="text" placeholder="  Categoria"/>
                <input type="text" placeholder="  Autor"/>
                <input type="text" placeholder="  Link da Imagem"/>
               </section>

               <div className={S.btn}>
                <button>Doar</button>
               </div>
              </form> 
          
          </section>

        
        </main>
)}
