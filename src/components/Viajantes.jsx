import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'

const Viajantes = () => {
    const[viajantes,setViajantes]=useState([])
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7002/api/Viajantes');
        setViajantes(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados: >> ', error);
      }
    };
  
    useEffect(() => {
      fetchData()
    }, [])
  return (
    <table className="table table-responsive table-hover">
    <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Senha</th>
              </tr>
            </thead>
            {viajantes.map((element) => (
                <tbody key={element.id}>
                  <tr className={styles.tabela}>
                    <td>{element.id}</td>
                    <td>{element.nome}</td>
                    <td>{element.email}</td>
                    <td>{element.senha}</td>
                  </tr>
                </tbody>
              ))}
    </table>
  )
}

export default Viajantes