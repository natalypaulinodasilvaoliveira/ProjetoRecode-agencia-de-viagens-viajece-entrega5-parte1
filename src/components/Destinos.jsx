import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'

const Destinos = () => {
    const[destinos,setDestinos]=useState([])
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7002/api/Destinos');
        setDestinos(response.data);
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
                <th>Data Entrada</th>
                <th>Data Saída</th>
                <th>Valor Compra</th>
              </tr>
            </thead>
            {destinos.map((element) => (
                <tbody key={element.id}>
                  <tr className={styles.tabela}>
                    <td>{element.id}</td>
                    <td>{element.data_Entrada}</td>
                    <td>{element.data_Saida}</td>
                    <td>{element.valor_Compra}</td>
                  </tr>
                </tbody>
              ))}
    </table>
  )
}

export default Destinos