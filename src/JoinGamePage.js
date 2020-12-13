import logo from './new_logo.png';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Message, Grid, Segment } from 'semantic-ui-react';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function JoinGamePage() {
    return (
        <div className="App">
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <img src={logo} className="App-logo" alt="logo" />
            <Message>
              JoinGamePage goes here!
            </Message>
            <Segment>
              <Link to="/">
                <Button color='teal' fluid size='large'>Go back</Button>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid>

      </div>
    );
}

export default JoinGamePage;