import React from 'react';
import './EventDetail.css';
import data from './events.json';


class EventDetail extends React.Component {
    constructor() {
        super();

        this.state = {
            seminar: {},
        };
    }

    componentDidMount() {
        const seminarID = this.props.match.params.id;
        
        let event = data[seminarID - 1];
        
        console.log(this.props);
        this.setState({seminar: event});
   
    }

    render() {
        const { seminar } = this.state;

        return (
            <div className="dt">
            <h1 className="dt-heading">{seminar.name}</h1>
     
            <div className="dt-container">
               <div className="dt-item">
                  Presenter: <span className="dt-value">{seminar.presenter}</span>
               </div>
               <div className="dt-item">
                  Summary: <span className="dt-value">{seminar.summary}</span>
               </div>
               <div className="dt-item">
                  Room: <span className="dt-value">{seminar.room}</span>
               </div>
               <div className="dt-item">
                  Date: <span className="dt-value">{seminar.date}</span>
               </div>
               <div className="dt-item">
                  Time: <span className="dt-value">{seminar.time}</span>
               </div>
               
            </div>
         </div>
          
        );
    }
}

export default EventDetail;