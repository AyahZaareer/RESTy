import React from 'react';
import './resultes.scss';
import Loading from '../loading/loading'

function Results(props) {
  console.log('result', props.data);

  return (
    <section>
      <pre data-testid="result">{props.data ? JSON.stringify(props.data, undefined, 2) : <Loading />}</pre>
    </section>
  );

}

export default Results;
