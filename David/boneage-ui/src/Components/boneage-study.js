import React, { Component } from 'react';

class BoneAgeStudy extends Component {
  render() {
    console.log(this.props)
    return (
      <li className="BoneAgeStudy">
      { this.props.study.name }
      </li>
    );
  }
}

export default BoneAgeStudy;
