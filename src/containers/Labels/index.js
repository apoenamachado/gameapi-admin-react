import React, {Component} from 'react';
import {
  Container,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Icon,
  Label
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class LabelsView extends Component {

  teste(){
    console.log('Apoena testando')
  }

  render(){
    return (
      <div>
      <Container style={{ marginTop: '3em' }}>

        <Header as='h1' icon textAlign='center'>
            Labels
          <Header.Subheader>
            Labels examples
          </Header.Subheader>
        </Header>

        <br />

        <Label as='a' alt='Descrição'>
          <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' alt='Descrição'/>
          Elliot
        </Label>
        <Label as='a' alt='Descrição'>
          <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' alt='Descrição' />
          Stevie
        </Label>

        <br />
        <br />

        <Grid columns={3}>
        <Grid.Column>
          <Image
            fluid
            label={{ as: 'a', corner: 'left', icon: 'heart' }}
            src='https://react.semantic-ui.com/images/wireframe/image.png'
            alt='Descrição'
          />
        </Grid.Column>

        <Grid.Column>
          <Image
            fluid
            label={{ as: 'a', corner: 'left',  icon: 'heart' }}
            src='https://react.semantic-ui.com/images/wireframe/image.png'
            alt='Descrição'
          />
        </Grid.Column>

        <Grid.Column>
          <Image
            fluid
            label={{ as: 'a', color: 'red', corner: 'right', icon: 'save' }}
            src='https://react.semantic-ui.com/images/wireframe/image.png'
            alt='Descrição'
          />
        </Grid.Column>
        </Grid>

        <br />

        <div>
        <Label as='a' color='blue' image alt='Descrição'>
          <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' alt='Descrição daImagem' />
          Veronika
          <Label.Detail>Friend</Label.Detail>
        </Label>
        <Label as='a' color='teal' image alt='Descrição'>
          <img src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' alt='Descrição daImagem' />
          Veronika
          <Label.Detail>Friend</Label.Detail>
        </Label>
        <Label as='a' color='yellow' image>
          <img src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' alt='Descrição daImagem' />
          Helen
          <Label.Detail>Co-worker</Label.Detail>
        </Label>
        </div>

        <br />
        <br />

        <Menu compact>
        <Menu.Item as='a'>
          <Icon name='mail' /> Messages
          <Label color='red' floating>
            22
          </Label>
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='users' /> Friends
          <Label color='teal' floating>
            22
          </Label>
        </Menu.Item>
        </Menu>

        <br />
        <br />

        <Grid columns={2}>
        <Grid.Column>
          <Segment raised>
            <Label as='a' color='red' ribbon>
              Overview
            </Label>
            <span>Account Details</span>

            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' alt='Descrição daImagem' />

            <Label as='a' color='blue' ribbon>
              Community
            </Label>
            <span>User Reviews</span>

            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' alt='Descrição daImagem' />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <Label as='a' color='orange' ribbon='right'>
              Specs
            </Label>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' alt='Descrição daImagem' />

            <Label as='a' color='teal' ribbon='right'>
              Reviews
            </Label>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' alt='Descrição daImagem' />
          </Segment>
        </Grid.Column>
        </Grid>

      </Container>
      </div>
    );

  }
 }

 export default LabelsView
