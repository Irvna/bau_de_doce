import React from 'react';
import styles from '../styles/Users.module.css';
import axios from 'axios';
import Footer from '../components/Footer';
import Inicio from '../components/Inicio';
import Link from 'next/link';
import Titulo from '../components/Titulo';

function Users({users}) {
    return (
      <div className={styles.container}>

        <Titulo/>

        <main className={styles.users}>

        <h1>Usuários</h1>
        <h3>Clique no nome que deseja obter mais informações</h3>

            {users.map((user) =>(
                <div>
                  <Link href='/profile/[id]' as={`/profile/${user.id}`} className={styles.link}>
                  <p>{user.name} &rarr; </p>
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
        'https://jsonplaceholder.typicode.com/users'
    );
    const data = await response.data;
    return{
        props: {users:data},
    }
  }

  export default Users;