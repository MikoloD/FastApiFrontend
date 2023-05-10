import logo from './assets/logo.svg';
import styles from './App.module.scss';
import SearchBar from './components/SearchBar'
import Recomendation from './components/Recomendation';
import { useState } from 'react';
import { SongViewModel } from './models/Song';

function App() {
    const [searchValue, setSearchValue] = useState<SongViewModel>();

    const handleSearchValueChange = (newValue : SongViewModel) => {
      setSearchValue(newValue);
    };
    return (
                <div className={styles.App}>
                    <header className={styles['App-header']}>
                        <img src={logo} className={styles['App-logo']} alt="logo" />
                        <SearchBar onValueChange = {handleSearchValueChange}/>
                        <Recomendation songId = {searchValue?.songId}/>    
                    </header>
                </div> 

    );
}

export default App;
