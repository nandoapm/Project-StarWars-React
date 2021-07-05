
import AppContext from './providers/AppContext';
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
    </AppContext>
  );
}

export default App;
