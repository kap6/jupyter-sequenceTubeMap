import React from 'react';

import config from '../config.json';
import { Container, Row, Col, Form, Label, Input } from 'reactstrap';
//import TubeMapContainer from '../js/components/TubeMapContainer';

let Logo ="https://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg?5153";

const DATA_SOURCES = config.DATA_SOURCES;



export default class FirstComponent extends React.Component <{}> {
  

  
    render() {
    let dataSourceDropdownOptions = DATA_SOURCES.map(ds => {
        return (
          <option value={ds.name} key={ds.name}>
            {ds.name}
          </option>
        );
      });
      dataSourceDropdownOptions.push(
        <option value="syntheticExamples" key="syntheticExamples">
          synthetic data examples
        </option>,
        <option value="customFileUpload" key="customFileUpload">
          custom (file upload)
        </option>,
        <option value="customMounted" key="customMounted">
          custom (mounted files)
        </option>
      );
  

    return (
        <div>
        <Container fluid={true}>
          <Row>
            <Col md="auto">
              <img src={Logo} alt="Logo" />
            </Col>
            <Col>
              <Form inline>
                <Label
                  className="tight-label mb-2 mr-sm-2 mb-sm-0 ml-2"
                  for="dataSourceSelect"
                >
                  Data:
                </Label>
                <Input
                  type="select"
                  id="dataSourceSelect"
                  className="custom-select mb-2 mr-sm-4 mb-sm-0"
                >
                  {dataSourceDropdownOptions}
                </Input>
               </Form>
            </Col>
          </Row>
        </Container>

       
      </div>
    );
  }
}