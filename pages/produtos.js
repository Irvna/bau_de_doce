import React from 'react';
import Footer from '../components/Footer'
import Titulo from '../components/Titulo'
import axios from 'axios';
import styles from '../styles/Produtos.module.css'
import Inicio from '../components/Inicio';
import Link from 'next/link';

function Produtos({produtos}) {
    return (
      <div className={styles.container}>

        <Titulo/>

        <main className={styles.produtos}>
          <h1>Lista do Produtos</h1>
          <h3>Clique no produto desejado para saber mais informações</h3>

            {produtos.map((produto) =>(
                <div>
                  <Link href='/products/[id]' as={`/products/${produto.id}`} className={styles.link}>
                  <p><strong>{produto.id}</strong> . {produto.title} &rarr; </p>
                  </Link>
                </div>
            ))}
        </main>
        <Inicio/>
        <Footer/>
      </div>
    )
  }

  export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const data = await response.data;
    return{
        props: {produtos:data},
    }
  }

  export default Produtos;




