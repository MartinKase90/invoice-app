import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InvoiceHeader(){
  return(
    <div className="invoices">
      <div className="invoices_title">
        <Container>
          <Row>
            <Col id="column">
              <h1>Invoices</h1>
              <p>7 invoices</p>
            </Col>
            <Col id="column">
              <DropdownButton title="Filter by"size="sm">
                <Dropdown.Item>Paid</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col id="column">
              <button className="btn btn-primary">add</button>
            </Col>
          </Row>
        </Container>
      </div>    
    </div>

  );
}
export default InvoiceHeader;
