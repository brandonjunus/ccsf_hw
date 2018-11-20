import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './components/common/Header';
import BigList from './components/biglist/BigList';
import NotFound from './components/notfound/NotFound';
import EventDetail from './components/eventdetail/EventDetail';

const App = () => {
  
    return (
        <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={BigList} exact />
                <Route path="/seminar/:id" component={EventDetail} exact />
                <Route component={NotFound} />
            </Switch>
        </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


