import { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProjectsContext } from "../context/projects.context";
import { withProjectDetails } from "../hoc/project.hoc";
class ProjectDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.projectDetails && (
          <>
            <p>{this.props.projectDetails.name}</p>
            <p>{this.props.projectDetails.techStack}</p>
            <p>{this.props.projectDetails.description}</p>
            <img src={this.props.projectDetails.image} alt="" />
          </>
        )}
      </>
    );
  }
}

export default withProjectDetails(ProjectDetails);
// memo , forwardRed
