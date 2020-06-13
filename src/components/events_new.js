import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

// import { postEvents } from '../actions';


class EventsNew extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>foo</div>
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = ({
//   postEvents
// });

export default connect(null, null)(EventsNew);
