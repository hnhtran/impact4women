import './Sidebar.css'
import { ListGroup, ListGroupItem } from 'reactstrap';

export const Sidebar = () => {
  return (
    <>
    <ul className='sidebarlist'>
        <li>Dashboard</li>
        <hr />
        <li>Products</li>
            <li className='sublist'>Add Product</li>
            <li className='sublist'>Add Location</li>
            <li className='sublist'>Product Adjustment</li>
            <li className='sublist'>Move to Production</li>
            <li className='sublist'>Manage Category</li>
            <li className='sublist'>Report</li>
            <hr />
        <li>Stocktake</li>
            <li className='sublist'>Stocktake Form</li>
        <li>Recipient</li>
        <li className='sublist'>Add Recipient</li>
        <li className='sublist'>Report</li>
        <hr />
        <li>Supplier</li>
        <li className='sublist'>Add Supplier</li>
        <li className='sublist'>Report</li>
    </ul>
    </>
  )
}
