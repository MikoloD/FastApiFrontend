import logo from './assets/logo.svg';
import styles from './App.module.scss';
import SearchBar from './components/SearchBar'
import Recomendation from './components/Recomendation';
import { useState } from 'react';

function App() {
    return (
                <div className={styles.App}>
                    <header className={styles['App-header']}>
                        <img src={logo} className={styles['App-logo']} alt="logo" />
                        <SearchBar/>
                        <Recomendation id = {65263}/>    
                    </header>
                </div> 

    );
}

export default App;
