import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const EventTable = (props) => {
    const {events, history} = props;

    return (
        <div className="tb-container">
                    
            <table className="tb">
            <thead className="tb-head">
                    <tr>
                        <th>Event ID</th>
                        <th>Event Name</th>
                    </tr>                    
            </thead>
            <tbody className="tb-body">
                {events.map((seminar) => (
                <tr key={seminar.id} onClick={() => history.push(`/seminar/${seminar.id}`)}>
                    <td><span className="tb-id">{seminar.id}</span></td>
                    <td><span className="tb-name">{seminar.name}</span></td> 
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}

EventTable.propTypes = {
    events: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(EventTable);