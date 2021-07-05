
import AppContext from './providers/AppContext';
import { Footer } from './screens/components/Footer/Footer';
import Header from './screens/components/Header';
import Pagination from './screens/components/Pagination/Pagination';
import Home from './screens/home/Home';
import './styles/global.scss';

function App() {
  return (
    <AppContext>
      <Header />
      <Home />
      <Pagination />
      <Footer />
    </AppContext>
  );
}

export default App;
