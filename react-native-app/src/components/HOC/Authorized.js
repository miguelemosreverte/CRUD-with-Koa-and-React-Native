import React, { Component } from 'react';




export default class Authorized extends Component {
  render = () => !!this.props.login_state.auth && this.props.children
}
