import React, { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/index.jsx';
import Footer from './components/footer/index.jsx';
import Form from './components/form/index.jsx';
import Results from './components/results/index.jsx';
import List from './components/History-List/list';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import './reducer/reducer';

import { useEffect, useReducer } from 'react';
// import { initialState, historyReducer } from './reducer/reducer.js';
// import { addAction } from './reducer/reducer.js';

const initialState = {
  history: [],
}

function historyReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
      case 'ADD-TO-HISTORY':
          const history = [...state.history, payload.history]
          return { history };
      default:
          return state;
  }
}

function addAction(history) {
  return {
    type: 'ADD-TO-HISTORY',
    payload: { history },
  };
}
function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [requestBody, setRequestBody] = useState({});
  const [state, dispatch] = useReducer(historyReducer, initialState);
  const [loading, setLoading] = useState(false);


  useEffect(async () => {
    if (requestParams.url) {
      if (requestBody) {
        const data = await axios[requestParams.method](requestParams.url, JSON.parse(requestBody));
        setData(data);
        setLoading(false);
        dispatch(addAction(requestParams));




      } else {
        const data = await axios[requestParams.method](requestParams.url);
        setData({ data });
        setLoading(false);
        dispatch(addAction(requestParams));
        console.log('method/app', requestParams);


      }
    }
  }, [requestParams])

  // console.log('method/app', requestParams.method);
  console.log('data/app', data);





  async function callApi(formData, requestBody) {
    // mock output
    setLoading(true);
    if (formData.url) {
      setRequestBody(requestBody);
      console.log('reqqqqqqqqqqqqqqbody', requestBody)
      setRequestParams(formData);
      console.log('fooooooooooooooorm', formData)

    } else {
      const data = {
        Headers: {
          "cache-control": 'string no-cache'
        },
        count: 2,
        method: formData.method,
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      };


      setData({ data });
      setRequestParams(formData);
      console.log('fromData/app', formData);
      dispatch(addAction(formData));
      setLoading(false);

    }

    console.log('body/app', requestBody);
    // console.log('requestParames',requestParams);

  }




  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      {/* <List URL={this.state.requestParams.url} /> */}
      <Form handleApiCall={callApi} />
      {state.history.length ? <List history={state.history} /> : null}

      {loading ? <BeatLoader loading /> : data &&
        <Results data={data} />}


      <Footer />
    </React.Fragment>
  );

}

export default App;
