import styles from '../styles/Inicio.module.css';

export default function Contato(){
    return(
        <div className={styles.grid}>
        <a href="https://wa.me/5567996707847" className={styles.card}>
            <h2>WhatsApp</h2>
            </a>

            <a href="https://www.instagram.com/" className={styles.card}>
            <h2>Instagram</h2>
            </a>

            <a href="./" className={styles.card}>
            <h2>Site Oficial &rarr;</h2>
            </a>
        </div>
    )
}