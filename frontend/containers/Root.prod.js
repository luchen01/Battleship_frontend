import PropTypes from 'prop-types';
import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import { Route, HashRouter} from 'react-router-DOM';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

export default function Root({ store }) {
    return (
      <Provider store={store}>
              <HashRouter basename="/">
                  <MuiThemeProvider  muiTheme={muiTheme}>
                  <Route path={"/"} component={AppContainer}/>
                </MuiThemeProvider>
              </HashRouter>
                {/* <div>
                    <AppContainer />
                    <DevTools />
                </div> */}
            </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
