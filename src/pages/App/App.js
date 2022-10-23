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
import { Container, Row, Col } from 'reactstrap';
import { Routes, Route } from 'react-router-dom';

function App() {
  const handleDashboardClick = () => {
    return <AddProduct/>;
  }

  return (
    <div className="App">
      <NavBar/>
      <Container fluid>
        <Row>
        <Col xs="3" className='sidebar'><Sidebar handleDashboardClick={handleDashboardClick}/></Col>

        <Col xs="9" className='main'>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/productList" element={<ProductList/>} />
            <Route path="/*" element={<Dashboard/>} />
          </Routes>
      {/* <Dashboard/>
      <AddLocation/>
      <AddProduct/>
      <AddRecipient/>
      <AddSupplier/>
      <MoveProduct/>
      <ProductCategory/>
      <ProductList/>
      <RecipientList/>
      <StockAdjustment/>
      <SupplierList/> */}
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
