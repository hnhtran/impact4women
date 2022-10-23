import './ProductList.css'
import { Container, Input, Row, Col } from 'reactstrap'

export const ProductList = () => {
  return (
    <Container fluid>
      <h1 className='title'>Product List</h1>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>
      <Input 
      type="text" 
      placeholder="Search category" 
      autocomplete="off" 
      autocorrect="off" 
      autocapitalize="off" 
      spellcheck="false" 
      class="searchField" 
      aria-autocomplete="list" 
      aria-expanded="false" 
      aria-label="search input" 
      aria-owns="react-autowhatever-1"
      // style={{position: 'center', verticalAlign: 'top', display: 'inline-block', width: '30%'}}
      ></Input>
      </Col>
      </Row>
    </Container>
  )
}
