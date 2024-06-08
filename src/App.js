import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import SearchEmp from './components/SearchEmp';
import DeleteEmp from './components/DeleteEmp';
import ViewEmp from './components/ViewEmp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddEmployee/>}/>
      <Route path="/search" element={<SearchEmp/>}/>
      <Route path="/delete" element={<DeleteEmp/>}/>
      <Route path="/viewall" element={<ViewEmp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
