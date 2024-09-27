
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyFakeHero from './components/MyFakeHero';
import FilmArea from './components/FilmArea';


function App() {
  return (
    <div className='bg-dark'>
      <MyNav />
      <MyFakeHero />
      <FilmArea />
      <MyFooter />
    </div>
  );
}

export default App;
