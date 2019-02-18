import React from 'react';
import Variables from 'so-lit-components/dist/Variables/Variables';
import Reset from 'so-lit-components/dist/Reset/Reset';
import Navbar from 'so-lit-components/dist/Navbar/Navbar';
import Container from 'so-lit-components/dist/Container/Container';
import Section from 'so-lit-components/dist/Section/Section';
import Button from 'so-lit-components/dist/Button/Button';
import NewsList from 'so-lit-components/dist/NewsList/NewsList';
import Highlight from 'so-lit-components/dist/Highlight/Highlight';
import Flex from 'so-lit-components/dist/Flex/Flex';
import img1 from './img/img1.jpg';

const App = () => (
  <>
    <Variables />
    <Reset />
    <Navbar
      items={[{ text: 'So Lit', url: '#' }, { text: 'Asiakkaat', url: '#' }]}
      Logo={(
        <>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <span aria-label="So Lit">🔥</span>
        </>
)}
    />
    <Section backgroundColor="primary" backgroundImage={img1} padding={5}>
      <Container>
        <h1>Älykäs teknologia vapauttaa ihmisen olemaan ihminen</h1>
        <Button color="light">Lue lisää</Button>
      </Container>
    </Section>
    <Section backgroundColor="primary" padding={5}>
      <Container>
        <h2>Ajankohtaista</h2>
        <NewsList
          list={[
            {
              category: 'Uutiset',
              href: '#',
              id: 1,
              title: 'So Lit avaa toimiston Göteborgiin',
            },
            {
              category: 'Uutiset',
              href: '#',
              id: 2,
              title: 'So Lit julkisti Suomen ensimmäisen digitaalisen asuntokaupan palvelun',
            },
            {
              category: 'Uutiset',
              href: '#',
              id: 3,
              title: 'So Lit laajentaa Saksaan - avaa toimiston Müncheniin',
            },
          ]}
        />
        <Button color="light" href="#">
          Ajankohtaista osioon
        </Button>
      </Container>
    </Section>
    <Section padding={4}>
      <Container>
        <Flex>
          <Highlight
            alt="Alt text"
            callToAction="Katso avoimet työpaikat"
            img={img1}
            title="Avoimet työpaikat"
            text="Kerro meille unelmasi ja tule mukaan rakentamaan tulevaisuutta, jossa haluat elää. Katso kaikki So Litin avoimet työpaikat."
            url="#"
          />
          <Highlight
            alt="Alt text"
            callToAction="Lataa raportti"
            img={img1}
            title="Think Tank - Tulevaisuuden terveys- ja hyvinvointipalvelut"
            text="Alan vaikuttajista koottu So Lit Think Tank –ryhmämme listasi 8 keskeistä näkökulmaa tulevaisuuden terveys- ja hyvinvointipalveluiden kehittämiseksi. Mikä on esimerkiksi tekoälyn ja palvelumuotoilun rooli?"
            url="#"
          />
        </Flex>
      </Container>
    </Section>
  </>
);

export default App;
