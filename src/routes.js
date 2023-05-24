import Menu from 'components/menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './routes.module.scss';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <header className={styles.header}>
          <div className={styles.header__text}>
          A casa do código e da massa
          </div>
        </header>
        <Routes>
          <Route path='/' element={ <Inicio /> } />
          <Route path='/cardapio' element={ <Cardapio/> } />
        </Routes>
      </Router>
    </main>
  );
}