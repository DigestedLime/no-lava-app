import { Button, Message, Grid, Segment } from 'semantic-ui-react';
import logo from '../new_logo.png';
import { Link } from "react-router-dom";

function Main (){
    return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <img src={logo} className="App-logo" alt="logo" />
          <Segment>
          <Link to="/newGame">
            <Button color='teal' fluid size='large'>New Game</Button>
          </Link>
            <br/>
            <Link to="/joinGame">
            <Button fluid size='large'>Join Game</Button>
            </Link>
          </Segment>
          <Message>
            NoLava is a webapp where you can play the game <a href="https://en.wikipedia.org/wiki/The_Resistance_(game)">Avalon</a> with your friends.
            Click a button to get playing!
          </Message>
        </Grid.Column>
      </Grid>
    );
}

export default Main;