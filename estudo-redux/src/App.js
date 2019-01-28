import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'react-bootstrap/dist/react-bootstrap.min.js';

import { Grid, Row, Col } from 'react-bootstrap';

import CustonInput from './components/custon-input.js' 
import CustoLabel from './components/custon-label.js'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {consulta: 'Teste'}
    this.changeConsulta = this.changeConsulta.bind(this)

  }

  changeConsulta(e) {
    console.log(e.target.value)
    this.setState({consulta: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col>
              <CustoLabel value={this.state.consulta}></CustoLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <CustonInput _id="txt-consulta" onChange={this.changeConsulta}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;