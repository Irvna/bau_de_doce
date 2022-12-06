import Footer from '../components/Footer'
import Inicio from '../components/Inicio'
import Titulo from '../components/Titulo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Titulo/>

        <main className={styles.main}>  

            <div className={styles.img}>
                <img src='/logomarca.png' alt='Logomarca da Baú de Doces com um fundo rosa claro e um coração pequeno do lado esquerdo da cor rosa escuro, um fuê do lado direito da cor preta e o nome Baú de Doces embaixo na cor rosa escuro'/>
            </div>

            <p className={styles.description}>
                Bem vindo a melhor doceria do MS!
            </p>  

            <div className={styles.produtos_cardapio}>
            <div className={styles.doce}>
                <h2>&rarr; Bolo Formigueiro</h2>
                <p>Experimente essa explosão de sabor</p>
            </div>
            <div className={styles.doce}>
                <h2>&rarr; Bala Baiana</h2>
                <p>Experimente essa explosão de sabor</p>
            </div>
            </div>

            <Inicio/>
      </main>
      <Footer/>
    </div>
  )
}





