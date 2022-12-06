import React from 'react';
import styles from '../../styles/Produtos.module.css';
import axios from 'axios';
import Footer from '../../components/Footer';

function Products({produto = {}}) {
    return (
      <div className={styles.container}>

            <main className={styles.lista}>
            <h1>Produtos</h1>
            <p>-----------------------------------------------------------------------------------</p>
                <h3><strong>{produto.id} - {produto.title} </strong></h3>
                <p className={styles.preco}><strong>R$: </strong> {produto.price}</p>
                <img src={produto.image}></img>
                  <p>{produto.description}</p>
                  <p>{produto.category}</p>
                  <p>-----------------------------------------------------------------------------------</p>
            </main>
        <div className={styles.grid}>
        <a href="../produtos" className={styles.card}>
          <h2>Voltar &rarr;</h2>
        </a>
        </div>
        <Footer/>

      </div>
    )
  }

  export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products',
        {params: {id: context.params.id}}
    );
    const produto = await response.data[0];
    return{
        props: {produto}
    }
  }

  export async function getStaticPaths(){
    const response = await axios.get(
        'https://fakestoreapi.com/products',
    );
    const produtos = await response.data;
    const paths = produtos.map((produto) => {
        return {params:{id:String(produto.id)}};
    });
    return{
        paths, 
        fallback: true,
    };
  }

  export default Products;