import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/index.jsx';
import Footer from './components/footer/index.jsx';
import Form from './components/form/index.jsx';
import Results from './components/results/index.jsx';
import List from './components/History-List/list';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
      loading: false,
      headers: null,
      count: ''
    };
  }

  callApi = (formData, headers, newData) => {
    // mock output
    const data = {
      Headers: {
        "cache-control": 'string no-cache'
      },
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    this.setState({ data: newData, requestParams: formData, loading: true, headers: headers, count: newData.count });
    console.log('input app', this.state.data);
    console.log('method/app', this.state.requestParams.method);
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {this.state.requestParams.method}</div>
        <div>URL: {this.state.requestParams.url}</div>
        <List URL={this.state.requestParams.url} />
        <Form handleApiCall={this.callApi} />

        <Results data={{ headers: this.state.headers, result: this.state.data, count: this.state.count }} />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
