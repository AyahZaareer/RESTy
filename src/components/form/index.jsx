import axios from 'axios';
import React, { useState } from 'react';

// import {useEffect} from 'react'


import './form.scss';

function Form(props) {
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [showText, setShowText] = useState(false);
  const [inputText, setInputText] = useState('');
 
 
   function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = {
        method: method,
        url: url,
      };
      console.log('formData', formData);
     
      props.handleApiCall(formData,  inputText);



      // console.log('Data', data);



    } catch (e) {
      console.error(e);
      // props.changeLoading(true)

    }

    // props.handleApiCall(formData, body);

  }
  async function handeleText(e) {
    setShowText(!showText);
    setMethod(e.target.id);

  }
  function handeleInputText(e) {
    setInputText(e.target.value);
 
  }
  async function handelMethod(e) {
    setMethod(e.target.id);

    console.log('e.tar.id', e.target.id);

  }




  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <select onChange={e => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="DELETE">DELETE</option>
          <option value="PUT">PUT</option>
        </select> */}
        <label >
          <span>URL: </span>
          <input name='link' type='URL' onChange={e => setUrl(e.target.value)} />
          <button type="submit" data-testid="mybtn">GO!</button>
        </label>
        <label className="methods">
          <input type="radio" name="btn" id="get" onClick={handelMethod} />
          <label>GET</label> &nbsp; &nbsp;
          <input type="radio" name="btn" id="post" onClick={handeleText} />
          <label>POST</label> &nbsp; &nbsp;
          <input type="radio" name="btn" id="put" onClick={handeleText} />
          <label>PUT</label> &nbsp; &nbsp;
          <input type="radio" name="btn" id="delete" onClick={handelMethod} />
          <label>DELETE</label> &nbsp; &nbsp;
          {/* <span id="get" onClick={handelMethod}>GET</span>
          <span id="post" onClick={handeleText}>POST</span>
          <span id="put" onClick={handeleText}>PUT</span>
          <span id="delete" onClick={handelMethod}>DELETE</span> */}
        </label>
        {showText &&
          <textarea id="w3review" name="w3review" rows="10" cols="50" onChange={handeleInputText} />}
      </form>
    </>
  );

}

export default Form;
