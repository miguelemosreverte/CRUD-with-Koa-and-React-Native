import React, { Component } from 'react';




export default class Authorized extends Component {
  render = () => this.props.auth? this.props.children : null
}
