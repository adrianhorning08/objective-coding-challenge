import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants: null
    }
  }

  async componentDidMount() {
   const res = await fetch('/api/applicants')
   const json = await res.json()
   this.setState({ applicants: json });
 }

  render() {
    if (this.state.applicants) {
      return this.state.applicants.map(applicant => {
        return <li>{applicant.name}</li>;
      })
    } else {
      return null;
    }
  }
}

export default Main;
