import Pagina from '@/componentes/Pagina'
import apiAnimes from '@/service/apiAnimes'
import Link from 'next/link'
import React from 'react'
import { Table } from 'react-bootstrap'

const index = ({animes}) => {
  return (
    <>
      <Pagina titulo={'animes'}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Detalhes</th>
              <th>Titulo</th>
              <th>Duração</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {animes.map(item => (
              <tr>

                <td><Link href={``}></Link></td>
                <td>{item.title}</td>
                <td>{item.duration}</td>
                <td>{item.year}</td>

              </tr>
            ))}

          </tbody>
        </Table>
      </Pagina>
    </>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultadoAnimes = await apiAnimes.get('/animes')
  const animes = resultadoAnimes.data.data

  return {
    props: { animes },
  }
}