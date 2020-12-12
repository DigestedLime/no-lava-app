import { Button, Container, Message, Grid, Segment } from 'semantic-ui-react';
import logo from '../new_logo.png';


function Main (){
    return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <img src={logo} className="App-logo" alt="logo" />
            <Segment>
                <Button color='teal' fluid size='large' onClick="">New Game</Button>
                <br/>
                <Button fluid size='large' onClick="">Join Game</Button>
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