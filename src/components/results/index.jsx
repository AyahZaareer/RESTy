import React from 'react';
import './resultes.scss';

function Results(props) {

  return (
    <section>
      <pre data-testid="result">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );

}

export default Results;
