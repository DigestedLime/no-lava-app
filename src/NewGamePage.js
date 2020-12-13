import logo from './new_logo.png';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Message, Grid, Segment } from 'semantic-ui-react';
import React from 'react';
import { Link } from "react-router-dom";

function NewGamePage() {
    return (
        <div className="App">
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <img src={logo} className="App-logo" alt="logo" />
            <Message>
              NewGamePage goes here!
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

export default NewGamePage;