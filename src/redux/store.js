import {
    createStore
  } from 'redux';
  import {
    combineForms,
  } from 'react-redux-form';
  
  const initialUserState = {
    email: '',
    name: ''
  };

  const store = createStore(combineForms({
    user: initialUserState,
  }));
  export default store;