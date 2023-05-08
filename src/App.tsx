import logo from './assets/logo.svg';
import styles from './App.module.scss';
import SearchBar from './components/SearchBar';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <img src={logo} className={styles['App-logo']} alt="logo" />
                <SearchBar />
                <select>
                    <option>Apple</option>
                    <option>Banana</option>
                    <option>Watermelon</option>
                </select>
                <a
                    className={styles['App-link']}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
