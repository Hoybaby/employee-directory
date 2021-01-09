import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbo/Jumbo';
import Search from './components/Search/Search';
import TableBootstrap from './components/Table/Table';


function App() {
  return (
    <div>
      <Jumbotron/>
      <Search/>
      <TableBootstrap/>
      
    </div>
  );
}

export default App;
