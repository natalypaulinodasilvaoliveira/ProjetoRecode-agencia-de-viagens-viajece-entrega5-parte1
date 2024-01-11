import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'

const Compras = () => {
    const[compras,setCompras]=useState([])
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7002/api/Compras');
        setCompras(response.data);
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
                <th>Codigo reserva</th>
                <th>Total</th>
                <th>Viajante</th>
                <th>Destino</th>
              </tr>
            </thead>
            {compras.map((element) => (
                <tbody key={element.id}>
                  <tr className={styles.tabela}>
                    <td>{element.id}</td>
                    <td>{element.codigo_Reserva}</td>
                    <td>{element.valor_Total}</td>
                    <td>{element.viajanteId}</td>
                    <td>{element.destinoId}</td>
                  </tr>
                </tbody>
              ))}
    </table>
  )
}

export default Compras