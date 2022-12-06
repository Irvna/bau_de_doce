import Titulo from '../components/Titulo'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'

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

      <Menu/>

      </main>
      <Footer/>
    </div>
  )
}
