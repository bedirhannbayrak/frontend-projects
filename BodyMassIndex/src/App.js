import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import {Container} from '@chakra-ui/react'
import Home from './pages/Home'
import './App.css'
import Diyet from './pages/Diyet'
import Header from './components/Header'

export default function App() {
  return (
        <Container maxW={'6xl'} h={"100vh"} px={5} overflow={'auto'}>
          <Router>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/diyet1">
                <Diyet title="Diyet 1"/>
              </Route>
              <Route exact path="/diyet2">
                <Diyet title="Diyet 2"/>
              </Route>
              <Route exact path="/diyet3">
                <Diyet title="Diyet 3"/>
              </Route>
              <Route exact path="/diyet4">
                <Diyet title="Diyet 4"/>
              </Route>
              <Route exact path="/diyet5">
                <Diyet title="Diyet 5"/>
              </Route>
              <Route exact path="/diyet5">
                <Diyet title="Diyet 5"/>
              </Route>
              <Route exact path="/diyet6">
                <Diyet title="Diyet 6"/>
              </Route>
              <Route exact path="/diyet7">
                <Diyet title="Diyet 7"/>
              </Route>
              <Route exact path="*">
                <Redirect to={{pathname:"/"}} />
              </Route>
            </Switch>
          </Router>
        </Container>
  );
}