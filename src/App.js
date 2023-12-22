

import { Route, Routes } from 'react-router';
import './App.css';

import HomePages from './Pages/HomePages';
import InventaryMagament from './Pages/InventaryMagament';
import AllInventaryData from './Pages/AllInventaryData';
import {AddInventaryForm} from "./Pages/AddInventaryForm"
import AddSales from './Pages/AddSales';
import AllSales from './Pages/AllSales';
import SalesManagment from './Pages/SalesManagment';
import EditItems from './Pages/EditItems';
import Report from './Pages/Report';
import InventaryReport from './Pages/InventaryReport';
import ReportSales from './Pages/ReportSales';


function App() {

  return (
    <div className="App">
     
   <Routes>
    <Route path='/' element={<HomePages/>}/>
    <Route path='/inventary' element={<InventaryMagament/>}/>
    <Route path='/addinventary' element={<AddInventaryForm/>}/>
    <Route path='/allinventary' element={<AllInventaryData/>}/>
    <Route path='/editinventoryitem/:id' element={<EditItems/>}/>
    
    <Route path='/sales' element={<SalesManagment/>}/>
    <Route path='/addsale' element={<AddSales/>}/>
    <Route path='/allsale' element={<AllSales/>}/>
    <Route path='/reports' element={<Report/>}/>
    <Route path='/reportinventary' element={<InventaryReport/>}/>
    <Route path='/reportsales' element={<ReportSales/>}/>
   </Routes>
    </div>
  );
}

export default App;
