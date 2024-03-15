import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Layout from './layout';
import logo from './img/logo.png';
import style from './css/characterdetails.module.css';
import styles from './css/home.module.css';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);

  const router = useRouter();

  useEffect(() => {
    fetchCharacters();
  }, [page,searchTerm]);

  useEffect(() => {
    setFilteredCharacters(
      allCharacters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, allCharacters]);
  

  const fetchCharacters = async () => {
    try {
      const response = await client.query({
        query: gql`
          query Characters($page: Int!) {
            characters(page: $page) {
              results {
                id
                name
                status
                species
                gender
                origin {
                  name
                }
                location {
                  name
                }
                image
              }
              info {
                pages
              }
            }
          }
        `,
        variables: {
          page
        }
      });
      const data = response.data;
      setCharacters(data.characters.results);
      setTotalPages(data.characters.info.pages);
      setAllCharacters(data.characters.results);
      setError(false);
    } catch (error) {
      console.error('Error fetching characters:', error);
      setError(true);
    }
  };

  const handleCardFocus = (cardId: number) => {
    setFocusedCard(cardId);
  };

  const handleCardBlur = () => {
    setFocusedCard(null);
  };

  const goToPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleVejaMaisClick = (character: Character) => {
    router.push(`/${character.id}?name=${encodeURIComponent(character.name)}&status=${encodeURIComponent(character.status)}&species=${encodeURIComponent(character.species)}&gender=${encodeURIComponent(character.gender)}&origin=${encodeURIComponent(character.origin.name)}&image=${encodeURIComponent(character.image)}&location=${encodeURIComponent(character.location.name)}`);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 4;
    const start = Math.max(1, page - Math.floor(maxButtons / 2));
    const end = Math.min(totalPages, start + maxButtons - 1);
  
   
    buttons.push(
      <button key="prev" className={`${styles.paginationButton} ${page === 1 ? '' : styles.arrow}`} onClick={() => goToPage(Math.max(1, page - 1))}>&lt;</button>
    );
  
    
    for (let i = start; i <= end; i++) {
      buttons.push(
        <button key={i} className={`${styles.paginationButton} ${i === page ? styles.active : ''}`} onClick={() => goToPage(i)}>{i}</button>
      );
    }
  
    
    if (end < totalPages) {
      buttons.push(
        <span key="ellipsis" className={styles.paginationButton}>...</span>
      );
    }
  
    
    if (totalPages > end) {
      buttons.push(
        <button key={totalPages} className={`${styles.paginationButton} ${totalPages === page ? styles.active : ''}`} onClick={() => goToPage(totalPages)}>{totalPages}</button>
      );
    }
  
   
    if (end < totalPages) {
      buttons.push(
        <button key="next" className={`${styles.paginationButton} ${page === totalPages ? '' : styles.arrow}`} onClick={() => goToPage(page + 1)}>&gt;</button>
      );
    }
  
    return buttons;
  };
  

  return (
    <Layout>
      {error && <p className={styles.errorMessage}>Ocorreu um erro ao carregar os personagens.</p>}
      <div className={style.top}>
        <img src={logo.src} alt="Logo" className={style.logo} />
      </div>
      <div className={styles.header}>
        <div className={styles.headerBackground}></div>
        <h1 className={styles.headerTitle}>Filtro de Personagens</h1>
        <div className={styles.headerText}>
          <p >Confira abaixo os dados dos principais personagens de</p>
          <p >Rick and Morty, como seu nome, status,</p>
          <p > e muito mais!</p>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar Personagem"
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className={styles.searchIcon}>&#128269;</span>
      </div>
      <div className={styles.charactersGrid}>
      {filteredCharacters.map((character) => (
  <div key={character.id} className={styles.characterContainer}>
    <div
      className={`${styles.characterCard} ${focusedCard === character.id ? styles.focused : ''}`}
      onMouseEnter={() => handleCardFocus(character.id)}
      onMouseLeave={handleCardBlur}
    >
      <div className={styles.characterContent}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.characterCardImg}
        />

        <div className={styles.characterName}>{character.name}</div>
        <div className={styles.characterDetails}>
          <div className={styles.additionalInfo}>
          <p className={styles.pers}>{character.location.name}</p>
            <table>
            <tbody>
              <tr>
                <td>Status</td>
                <td>Species</td>
                <td>Gender</td>
              </tr>
              <tr>
                <td className={styles.trName}>{character.status}</td>
                <td className={styles.trName}>{character.species}</td>
                <td className={styles.trName}>{character.gender}</td>
              </tr>
            </tbody>
          </table>
          </div>
          <span className={styles.vejaMais} onClick={() => handleVejaMaisClick(character)}>Ver Mais Sobre</span>
        </div>
      </div>
    </div>
  </div>
))}
      </div>
      <div className={styles.pagination}>
        {renderPaginationButtons()}
      </div>
    </Layout>
  );
};

export default Home;