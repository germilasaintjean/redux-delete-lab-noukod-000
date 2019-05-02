import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'

import Band from './Band'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Bnad key={id} text={band} />)



  render() {
    return (
      <div>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    delete: bandText => dispatch({type: 'DELETE_BAND', payload: bandText })
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
