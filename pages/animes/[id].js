import Pagina from '@/Components/Pagina'
import apiAnimes from '@/services/apiAnimes'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ Animes }) => {
  const anime = Animes[0]; 

  return (
    <>
      <Pagina>
        <Row>
          <Col md={4}>
            <Card border="danger" style={{ width: '18rem' }}>
              <Card.Header bg='danger'>Foto</Card.Header>
              <Card.Body>
               
                  <Card.Img  />
                  <Button variant="outline-primary">Warning</Button>
              </Card.Body>
            </Card>
            <Button className='mt-3' variant="outline-dark">Danger</Button>
          </Col>



          <Col md={6}>
            <Card border="danger" src="holder.js/100px160">
              <Card.Header bg='danger'>{Animes.title_english}</Card.Header>
              <Card.Body>
                <p><strong>Episódios:</strong>{Animes.episodes}</p>
                <p><strong>Status:</strong>{Animes.status}</p>
                <p><strong>Ano:</strong>{Animes.year}</p>
                <p><strong>Duração:</strong> {Animes.duration}</p>
                <p><strong>Score:</strong>{Animes.score}</p>
                <p>{Animes.synopsis}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Pagina>
    </>
  )
}

export default Detalhes

export async function getServerSideProps(context) {
  const id = context.params.id;
  const Ranimes = await apiAnimes.get(`/anime/${id}`);

  const Animes = Ranimes.data.data;

  return {
    props: { Animes },
  }
}