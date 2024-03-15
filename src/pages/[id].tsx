import { useRouter } from 'next/router';
import styles from './css/characterdetails.module.css';
import logo from './img/logo.png';

const CharacterDetails = () => {
  const router = useRouter();
  const { id, name, status, species, gender, origin, location, image } = router.query;

  const getStringParameter = (param: string | string[]): string => {
    return typeof param === 'string' ? param : Array.isArray(param) ? param[0] : '';
  };

  const handleGoBack = () => {
    router.push('/');
  };

  const characterName = getStringParameter(name);
  const characterStatus = getStringParameter(status);
  const characterSpecies = getStringParameter(species);
  const characterGender = getStringParameter(gender);
  const characterOrigin = getStringParameter(origin);
  const characterLocation = getStringParameter(location);
  const characterImage = getStringParameter(image);

  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <img src={logo.src} alt="Logo" className={styles.logo} onClick={handleGoBack} />
      </div>
      <div className={styles.characterHeader}>
        <div className={styles.ellipse} onClick={handleGoBack}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" stroke="#A8C700" />
          </svg>
        </div>
        <h1 className={styles.characterName}>
          {characterName}
        </h1>
      </div>

      <div className={styles.container}>
        {characterName ? (
          <div className={styles['character-card']}>
            <div className={styles['character-details']}>
              <div className={styles['character-info-container']}>
                <div className={styles['character-info']}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                  <p className={styles.titulo}>Status</p>
                  <p className={styles.subtitulo}>{characterStatus}</p>
                </div>
                <div className={styles['character-info']}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${styles.svgIcon}w-6 h-6`}>
                    <path fillRule="evenodd" d="M12 3.75a6.715 6.715 0 0 0-3.722 1.118.75.75 0 1 1-.828-1.25 8.25 8.25 0 0 1 12.8 6.883c0 3.014-.574 5.897-1.62 8.543a.75.75 0 0 1-1.395-.551A21.69 21.69 0 0 0 18.75 10.5 6.75 6.75 0 0 0 12 3.75ZM6.157 5.739a.75.75 0 0 1 .21 1.04A6.715 6.715 0 0 0 5.25 10.5c0 1.613-.463 3.12-1.265 4.393a.75.75 0 0 1-1.27-.8A6.715 6.715 0 0 0 3.75 10.5c0-1.68.503-3.246 1.367-4.55a.75.75 0 0 1 1.04-.211ZM12 7.5a3 3 0 0 0-3 3c0 3.1-1.176 5.927-3.105 8.056a.75.75 0 1 1-1.112-1.008A10.459 10.459 0 0 0 7.5 10.5a4.5 4.5 0 1 1 9 0c0 .547-.022 1.09-.067 1.626a.75.75 0 0 1-1.495-.123c.041-.495.062-.996.062-1.503a3 3 0 0 0-3-3Zm0 2.25a.75.75 0 0 1 .75.75c0 3.908-1.424 7.485-3.781 10.238a.75.75 0 0 1-1.14-.975A14.19 14.19 0 0 0 11.25 10.5a.75.75 0 0 1 .75-.75Zm3.239 5.183a.75.75 0 0 1 .515.927 19.417 19.417 0 0 1-2.585 5.544.75.75 0 0 1-1.243-.84 17.915 17.915 0 0 0 2.386-5.116.75.75 0 0 1 .927-.515Z" clipRule="evenodd" />
                  </svg>
                  <p className={styles.titulo}>Species</p>
                  <p className={styles.subtitulo}>{characterSpecies}</p>
                </div>
                <div className={styles['character-info']}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${styles.svgIcon}w-6 h-6`}>
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                  </svg>
                  <p className={styles.titulo}>Gender</p>
                  <p className={styles.subtitulo}>{characterGender}</p>
                </div>
                <div className={styles['character-info']}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${styles.svgIcon}w-6 h-6`}>
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clipRule="evenodd" />
                  </svg>
                  <p className={styles.titulo}>Origin </p>
                  <p className={styles.subtitulo}>{characterOrigin}</p>
                </div>
                <div className={styles['character-info']}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${styles.svgIcon}w-6 h-6`}>
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <p className={styles.titulo}>Location </p>
                  <p className={styles.subtitulo}>{characterLocation}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Carregando...</p>
        )}

        <img src={characterImage} alt={characterName} className={`${styles.characterImage} characterImage`} />
      </div>
    </div>
  );
};

export default CharacterDetails;
