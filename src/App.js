import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './stores/configureStore';
import Root from './components/Root';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Root />
    </Fragment>
  </Provider>
);

export default App;
