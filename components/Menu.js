import styles from '../styles/Menu.module.css';

export default function Menu(){
    return(
        <div className={styles.grid}>
        <a href="./cardapio" className={styles.card}>
          <h2>Cardápio &rarr;</h2>
          <p>Conheça o nosso cardápio!</p>
        </a>

        <a href="./contato" className={styles.card}>
          <h2>Contato &rarr;</h2>
          <p>Entre em contato e faça seu pedido!</p>
        </a>

        <a href="./users" className={styles.card}>
          <h2>Users &rarr;</h2>
          <p>Venha conhecer todos os USERS!</p>
          <p><strong>&rarr; 1º atividade</strong></p>
        </a>

        <a href="./produtos" className={styles.card}>
          <h2>Produtos Tecnológicos &rarr;</h2>
          <p>Venha conhecer o melhor da TECNOLOGIA!</p>
          <p><strong>&rarr; 2º atividade</strong></p>
        </a>

      </div>
    )
}