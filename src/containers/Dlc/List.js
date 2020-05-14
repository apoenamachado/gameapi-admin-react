import React, {Component} from 'react';
import {
  Button,
  Container,
  Header,
  Grid,
  Card,
  List,
  Item,
  Table,
  Segment,
  Loader,
  Popup,
  Icon,
  Divider,
  Image,
  Modal
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Link, Route } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Components
import Confirm from "../../components/Util/Confirm"

import {
  setLoading
} from '../../modules/app'

import {
  setCurrentDlc,
  listDlc,
  addDlc,
  removeDlc
} from '../../modules/dlc'


const GRID = 1
const LIST = 2
const TABLE = 3

class DlcListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      layout:LIST,
      itemsPerRow:3,
      loading:false,
      loading2:false
    };
  }

  componentDidMount(){

    //this.props.setGames( gamesTemp[(Math.floor(Math.random() * gamesTemp.length))] )  
    this.props.setLoading(true)
    this.props.listDlc(this.props.token, this.props.game, ()=>{
      this.props.setLoading(false)
    })
    //this.props.setCurrentDlc(null)
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    if(prevProps.location.pathname !== this.props.location.pathname){
      // Toda vez
    }
  }

  go(url){
    this.props.history.push(url)
  }

  removeDlc(dlc){

    if(window.confirm("Do you really want to delete?")){
      //this.setState({loading2:true})
      this.props.setLoading(true)
      setTimeout(() => {
        this.props.removeDlc(dlc, this.props.token, ()=>{
          //this.setState({loading2:false})
          this.props.setLoading(false)
        })  
      }, 150);
    }

  }

  setLayout(layout){
    this.setState({layout:layout})
  }

  renderlayout(){
    switch (this.state.layout) {
      case GRID:
        return this.renderGrid()
        break;
      case LIST:
        return this.renderList()
        break;
      case TABLE:
        return this.renderTable()
        break;
      default:
        return this.renderGrid()
        break;
    }
  }

  renderAction(dlc){
    return(
      <Button.Group basic size='large' floated='right'>
        <Popup trigger={ <Button color='red' icon='trash alternate' onClick={()=>{this.removeDlc(dlc) } } />} content='Remove'/>
        <Popup trigger={ <Button icon='edit' as={Link} to={`/game/${this.props.game.id}/dlc/edit/${dlc.id}/`} />}  content='Edit'/>
      </Button.Group>
    )
  }
  
  renderGrid(){
    return(
      <Card.Group itemsPerRow={this.state.itemsPerRow} doubling stackable>
        <Card 
          style={{textAlign:'center', justifycontent:'middle', border:0}}
          key={`dlc-add`}
          as={'a'}
          onClick={()=>{ this.go(`/game/${this.props.game.id}/dlc/add`) }}
          color='blue'
          header={(
              <p style={{textAlign:'center', justifycontent:'middle'}}>
              <Icon name='add'/> 
              Add New Dlc
              </p>
            )}
          description='Add and start managing the Download Content of your games.'
        />

        {this.props.dlcs.map((dlc, index) => (
          <Card
            key={'dlc_'+index}
            loading={this.state.loading2}
            raised
             
            image={dlc.thumb}
            header={dlc.name}
            //meta='Friend'
            //description={game.resume}
            meta={dlc.resume}
            as={Link}
            to={`/game/${this.props.game.id}/dlc/edit/${dlc.id}`}
            //extra={this.renderAction(game)}
          />
          )
        )}
      </Card.Group>
    )
  }

  renderList(){
    return(      
          <div>
          <Segment basic clearing>
            <Button 
                floated='right'
                color='violet'
                onClick={()=>{ this.go(`/game/${this.props.game.id}/dlc/add`) }}
                floated='right' icon labelPosition='left' size='small' >
                <Icon name='add' /> Add New Dlc
            </Button>
          </Segment>

          {this.props.dlcs.map((dlc, index) => (
            <Table  celled unstackable selectable padded key={'dlc_'+index}>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell width='one'><Image src={dlc.thumb} rounded size='small' /></Table.Cell>
                    <Table.Cell width='seven'>
                        <Header as='h3'>
                          <Header.Content as={Link} to={`/game/${this.props.game.id}/dlc/edit/${dlc.id}`}>
                            {dlc.name}
                            <Header.Subheader>{dlc.resume}</Header.Subheader>
                          </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell width='tree'>{dlc.type}</Table.Cell>
                    <Table.Cell textAlign='right' width='one'>{this.renderAction(dlc)}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            )
          )}
          </div>
    )
  }

  renderTable(){
    return(   
      <div>
          <Segment basic clearing>
            <Button 
                floated='right'
                color='violet'
                onClick={()=>{ this.go(`/game/${this.props.game.id}/dlc/add`) }}
                floated='right' icon labelPosition='left' size='small' >
                <Icon name='add' /> Add New Dlc
            </Button>
          </Segment>

      <Table  stackable selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {this.props.dlcs.map((dlc, index) => (
            <Table.Row key={'dlc_'+index}>
              <Table.Cell>{dlc.id}</Table.Cell>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={dlc.thumb} rounded size='medium' />
                  <Header.Content as={Link} to={`/game/${this.props.game.id}/dlc/edit/${dlc.id}`}>
                    {dlc.name}
                    {/*<Header.Subheader>{dlc.resume}</Header.Subheader>*/}
                  </Header.Content>
                </Header>
              </Table.Cell>
            <Table.Cell>{dlc.type}</Table.Cell>
            <Table.Cell>{dlc.status}</Table.Cell>
            <Table.Cell>
              {this.renderAction(dlc)}
            </Table.Cell>
            </Table.Row>
            )
          )}
          </Table.Body>
        </Table>

      </div>
    )
  }

  render(){
    if(this.props.loading){
      return(
        <Segment placeholder basic>
          <Loader active size='large'/>
        </Segment>
      )
    }else{

      if(this.props.dlcs.length===0){
        return(
          <Container style={{marginTop:'1em'}} raised>

            <Header as='h3' floated='left'
              icon='cart arrow down'
              content={'Dlc'}
              subheader='Manage your Download Content'
             />
            <Divider clearing />

            <Segment placeholder basic>
            <Header icon>
              <Icon name='game' />
                You have no dlc. Add and start managing the dlc of your games.
            </Header>
            <Button color='violet' onClick={()=>{ this.go(`/game/${this.props.game.id}/dlc/add`) }} >
              <Icon name='add' /> 
              Add Dlc
            </Button>
          </Segment>
          </Container>
        )
      }else{
        return (
          <div>
              <Container style={{marginTop:'1em'}} basic>
                
                  <Header as='h3' 
                          floated='left'
                          icon='gamepad'
                          content={'Dlc'}
                          subheader='Manage your Dlc'
                  />

                  <Button.Group basic size='medium' floated='right'>
                    <Popup trigger={ <Button color='red' icon='grid layout' onClick={()=>{ this.setLayout(GRID) } } active={this.state.layout==GRID} />} content='Grid' />
                    <Popup trigger={ <Button color='red' icon='list layout' onClick={()=>{ this.setLayout(LIST) } } active={this.state.layout==LIST} />} content='List' />
                    <Popup trigger={ <Button color='red' icon='table'       onClick={()=>{ this.setLayout(TABLE) } } active={this.state.layout==TABLE} />} content='Table' />
                  </Button.Group>

                  <Divider clearing />

                   {this.renderlayout()}

                  </Container>

          </div>
        );
      }
    }
  }
 }

 const mapStateToProps = ({ app, user, studio, game, dlc }) => ({
  loading:app.loading,
  token: user.token,
  studio: studio.studio,
  game: game.game,
  dlcs: dlc.dlcs
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setLoading,
      setCurrentDlc,
      listDlc,
      addDlc,
      removeDlc
      //changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DlcListView)

