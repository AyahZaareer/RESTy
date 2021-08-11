import React from 'react';
import './resultes.scss';
// import Loading from '../loading/loading'
import JSONPretty from 'react-json-pretty';

import 'react-json-pretty/themes/monikai.css';
let JSONPrettyMon = require('react-json-pretty/dist/monikai');

function Results(props) {
  console.log('result', props.data);

  return (
    // <section>
    //   <pre data-testid="result">{props.data ? JSON.stringify(props.data, undefined, 2) : <Loading />}</pre>
    // </section>
    <div data-testid="result" >
      {props.data &&
        <>
          "Headers : "
          <JSONPretty theme={JSONPrettyMon} data={props.data.headers} />

          "Count : "
          <JSONPretty theme={JSONPrettyMon} data={props.data.data.count} />

          "Results : "
          <JSONPretty theme={JSONPrettyMon} data={props.data.data.results} />
        </>
      }
    </div>
  );

}

export default Results;



