import './App.css';
import { AddLocation } from '../../components/AddLocation/AddLocation';
import { AddProduct } from '../../components/AddProduct/AddProduct';
import { AddRecipient } from '../../components/AddRecipient/AddRecipient';
import { AddSupplier } from '../../components/AddSupplier/AddSupplier';
import { Dashboard } from '../../components/Dashboard/Dashboard';
import { MoveProduct } from '../../components/MoveProduct/MoveProduct';
import { NavBar } from '../../components/NavBar/NavBar';
import { ProductCategory } from '../../components/ProductCategory/ProductCategory';
import { ProductList } from '../../components/ProductList/ProductList';
import RecipientList from '../../components/RecipientList/RecipientList';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { StockAdjustment } from '../../components/StockAdjustment/StockAdjustment';
import { SupplierList } from '../../components/SupplierList/SupplierList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Dashboard/>
      <Sidebar/>

      <AddLocation/>
      <AddProduct/>
      <AddRecipient/>
      <AddSupplier/>
      <MoveProduct/>
      <ProductCategory/>
      <ProductList/>
      <RecipientList/>
      <StockAdjustment/>
      <SupplierList/>
    </div>
  );
}

export default App;
