import React, {Component} from 'react';
import {
  Button,
  Container,
  Header,
  Grid,
  Image,
  Card,
  Icon,
  Feed,
  Menu,
  Segment,
  Divider
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Route, Link } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  listStudio
} from '../../modules/studio'

class StudiosListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsPerRow:3
    };
  }

  componentDidMount(){
    this.props.listStudio(this.props.token)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentWillUpdate(){
    console.log('componentWillUpdate')
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    // Toda vez
    if(prevProps.location.pathname !== this.props.location.pathname){
      // roda sempre que atualiza
    }
  }

  go(url){
    this.props.history.push('/studios'+ url)
  }

  render(){
    return (
      <div>
       <Container>

        <Grid columns={1}  stackable>
          <Grid.Column stretched width={16}>
          
          <Segment >
            <Header floated='left'>
              <Icon name='gamepad' />
              <Header.Content>
                Studios
              <Header.Subheader>Manage your Studios</Header.Subheader>
              </Header.Content>
            </Header>

              <Button
                onClick={()=>{ this.go('/add') }}
                floated='right'
                color='blue'
                content='Add New'
                icon='add'
                labelPosition='left'
              />

            <Button.Group floated='right' >
              <Button onClick={()=>{this.setState({itemsPerRow:2})}}>2</Button>
              <Button.Or text='/' />
              <Button onClick={()=>{this.setState({itemsPerRow:3})}}>3</Button>
            </Button.Group>
            
          </Segment>

            <Card.Group itemsPerRow={this.state.itemsPerRow}>

              {this.props.studios.map((studio, index) => (
                <Card 
                  key={`game-${index}`}
                  to={`/studio/${studio.id}`} 
                  as={Link}
                  raised 
                  >
                  <Image src={studio.image} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{studio.name}</Card.Header>
                    {/*<Card.Meta>Cadastrado em {game.date}</Card.Meta>*/}
                    <Card.Description>
                    {studio.description}
                    </Card.Description>
                  </Card.Content>
                  {/*
                  <Card.Content extra>
                    <Icon name='calendar alternate outline' />{studio.created_at}
                  </Card.Content>
                  */}
                </Card>
                ))}
            </Card.Group>

            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );

  }
 }

 const mapStateToProps = ({ user, studio }) => ({
  token: user.token,
  studios: studio.studios
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      listStudio,
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudiosListView)

