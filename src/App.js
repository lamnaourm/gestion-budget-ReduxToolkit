import './App.css';
import AddBudget from './components/AddBudget';
import AddDepense from './components/AddDepense';
import Header from './components/Header';
import ListDepenses from './components/ListDepenses';
import Statistiques from './components/Statistiques';

function App() {
  return (
    <div className="container">
      <Header />
      <Statistiques />
      <div>
        <div>
          <AddBudget />
          <AddDepense />
        </div>
        <ListDepenses />
      </div>
    </div>
  );
}

export default App;
