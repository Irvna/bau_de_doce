import styles from '../styles/Inicio.module.css';

export default function Inicio(){
    return(
        <div className={styles.grid}>
            <a href="./" className={styles.card}>
                <h2>Site Oficial &rarr;</h2>
            </a>
        </div>
    )
}