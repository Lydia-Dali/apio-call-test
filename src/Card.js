import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    console.log('Enter in CARD component')
    return (
      <div>
        <h3>{this.props.title}</h3>
        <img
          src={this.props.image}
          alt={'alternative'}
        />
      </div>
    )
  }
}
