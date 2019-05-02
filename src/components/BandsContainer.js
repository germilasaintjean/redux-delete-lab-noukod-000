import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'

import Band from './Band'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Bnad key={id} text={band} />)
   

  
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
