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
  Divider,
  Loader
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Route } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/*
import {
} from '../../modules/games'
*/

class StudioDashboardView extends Component {

  // TODO: remover esse loading, deixar somente na index
  constructor(props) {
    super(props);
    this.state = {
      loading:false
    };
  }

  componentDidMount(){
    //this.getStudio()
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    /*
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.getStudio()
    }
    */
  }

  /*
  getStudio(){
    this.setState({loading:true})  
    let studio = this.props.studios.filter(row => row.id == this.props.match.params.id)
    setTimeout(() => {
      this.setState({studio: studio[0] , loading:false})  
      return true
    }, 10);
    
  }
  */

  go(url){
    this.props.history.push(url)
  }

  render(){
    if(this.state.loading){
      return(
        <Segment placeholder basic>
          <Loader active />
        </Segment>
      )
    }else{
      return (
        <div>
          <Container style={{marginTop:'1em'}}>
            <Header as='h3' floated='left'
                icon='chart line'
                content={'Dashboard: '}
                subheader='See statistics for your Studio'
              />      
              <Divider clearing />       
          </Container>
        </div>
      )
    }
  }
 }

 const mapStateToProps = ({ user, studio }) => ({
  studio: studio.studio
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudioDashboardView)

