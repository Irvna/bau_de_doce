import React from 'react';
import styles from '../../styles/Users.module.css';
import axios from 'axios';
import Footer from '../../components/Footer';

function Profile({user = {}}) {
    return (
      <div className={styles.container}>

            <main className={styles.users}>
            <h1>Usuário</h1>
                <p><strong>{user.id}</strong> - {user.name}</p>
                <p><strong>UserName: </strong> {user.username}</p>
            </main>
        <div className={styles.grid}>
        <a href="../users" className={styles.card}>
          <h2>Voltar &rarr;</h2>
        </a>
        </div>
        <Footer/>

      </div>
    )
  }

  export async function getStaticProps(context){
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
        {params: {id: context.params.id}}
    );
    const user = await response.data[0];
    return{
        props: {user}
    }
  }

  export async function getStaticPaths(){
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
    );
    const users = await response.data;
    const paths = users.map((user) => {
        return {params:{id:String(user.id)}};
    });
    return{
        paths, 
        fallback: true,
    };
  }

  export default Profile;