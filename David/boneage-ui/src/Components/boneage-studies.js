import React, { Component } from 'react';
import BoneAgeStudy from './boneage-study';

class BoneAgeStudies extends Component {
  render() {
    let studies;
    if (this.props.studies) {
      studies = this.props.studies.map(study => {
        //console.log(study);
        return (
          <BoneAgeStudy study={ study } />
          );
      });
    }
    //console.log(this.props)
    return (
      <div className="BoneAgeStudies">
      { studies }
      </div>
    );
  }
}

export default BoneAgeStudies;
