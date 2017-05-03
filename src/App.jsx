import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import { createStore, applyMiddleware } from 'redux';

import './style/style.scss';

import rootReducer from './reducers';

import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import PostsShow from './components/PostsShow';

const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <Provider store={storeWithMiddleware(rootReducer)}>
            <BrowserRouter>
              <div>
                <Switch>
                  <Route path="/posts/new" component={PostsNew} />
                  <Route path="/posts/:id" component={PostsShow} />
                  <Route path="/" component={PostsIndex} />
                </Switch>
              </div>
            </BrowserRouter>
          </Provider>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
