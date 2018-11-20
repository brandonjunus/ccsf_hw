import React from 'react';
import Load from '../common/Load';
import EventTable from './EventTable';


class BigList extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            events: [],
            error: null
        };
    }

    componentDidMount() {
        this.setState({loading: true});

        fetch('./data/events.json')
        .then(response => response.json())
        .then(data => {
            this.setState({events: data, loading: false});
            //console.log(data[0].name);
        })
        .catch((error) => {
            this.setState({error: "no data found", loading: false})
        });
    }

    render() {
        const { loading, events, error} = this.state;
        //console.log(events);

        if(loading) {
            return <div className="loading-container"><Load /></div>
        }

        if(error) {
            return <div className="error">{error}</div>
        }

        return (
            <EventTable events={events} />
          
        );
    }
}

export default BigList;