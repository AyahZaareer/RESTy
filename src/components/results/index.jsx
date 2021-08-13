import React from 'react';
import './resultes.scss';
// import Loading from '../loading/loading'
import JSONPretty from 'react-json-pretty';

import 'react-json-pretty/themes/monikai.css';
let JSONPrettyMon = require('react-json-pretty/dist/monikai');
let JSONPretty1337 = require('react-json-pretty/dist/1337');
let JSONPrettyAcai = require('react-json-pretty/dist/acai');
var JSONPrettyAdv = require('react-json-pretty/dist/adventure_time');
function Results(props) {
  console.log('result', props.data);

  return (
    <div data-testid="result"  >
     
        <>
          "count : "
          <JSONPretty data={props.data.data.data.count} />
          "headers : "
          <JSONPretty data={props.data.data.headers} />
          "results : "
          <JSONPretty data={props.data.data} />
        </>
      
    </div>
    // <section>
    //   <pre data-testid="result">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    // </section>
    // <div data-testid="result" >
    //   {props.data &&
    //     <>
    //       "Headers : "
    //       <JSONPretty theme={JSONPretty1337} data={props.data.headers} />

    //       "Count : "
    //       <JSONPretty theme={JSONPretty1337} data={props.data.data.count} />

    //       "Results : "
    //       <JSONPretty theme={JSONPretty1337} data={props.data.data.results} />
    //     </>
    //   }
    // </div>



  );

}

export default Results;



