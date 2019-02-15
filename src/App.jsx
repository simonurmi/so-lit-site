import React from 'react';
import Reset from 'so-lit-components/dist/Reset/Reset';
import Container from 'so-lit-components/dist/Container/Container';
import Background from 'so-lit-components/dist/Background/Background';
import Button from 'so-lit-components/dist/Button/Button';
import NewsList from 'so-lit-components/dist/NewsList/NewsList';
import img1 from './img/img1.jpg';

const App = () => (
  <>
    <Reset />
    <Background color="primary" image={img1} padding={1}>
      <Container>
        <h1>Älykäs teknologia vapauttaa ihmisen olemaan ihminen</h1>
        <Button color="light">Lue lisää</Button>
      </Container>
    </Background>
    <Background color="primary">
      <Container>
        <h2>Ajankohtaista</h2>
        <NewsList
          list={[
            {
              category: 'Uutiset',
              href: '#',
              id: 1,
              title: 'Solita avaa toimiston Göteborgiin',
            },
            {
              category: 'Uutiset',
              href: '#',
              id: 2,
              title: 'Skanska julkisti Suomen ensimmäisen digitaalisen asuntokaupan palvelun',
            },
            {
              category: 'Uutiset',
              href: '#',
              id: 3,
              title: 'Solita laajentaa Saksaan - avaa toimiston Müncheniin',
            },
          ]}
        />
      </Container>
    </Background>
  </>
);

export default App;
