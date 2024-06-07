import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import SearchEmp from './components/SearchEmp';
import DeleteEmp from './components/DeleteEmp';
import ViewEmp from './components/ViewEmp';

function App() {
  return (
    <div>
      <AddEmployee/>
      <SearchEmp/>
      <DeleteEmp/>
      <ViewEmp/>
      
    </div>
  );
}

export default App;
