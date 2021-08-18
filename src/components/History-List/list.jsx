
import React from 'react'
import { useState } from 'react';
import Results from '../results';

function list(props) {
    console.log('props-list', props);
    // let data = JSON.parse(localStorage.getItem('history'))
    // const [data, setData] = useState({})
    async function fatchResult(result) {
        // const raw = await fetch(props.url);
        // const result = await raw.json();
        // console.log('data-in-list', data)
        // setData(data)
        props.showResultHis(result);
        console.log('data-list', result);
    }


    return (
        <div>
            <h3>History</h3>
            <ul>
                {props.history.map((ele, idx) => {
                    console.log('history-list', history);

                    return (<li key={idx}>
                        <button onClick={() => { fatchResult(ele.result) }}>{ele.method}</button>
                        <p >{ele.url}</p>



                    </li>)
                })}

            </ul>


            <p >gggggggggggg{props.data}</p>


        </div>
    )
}

export default list

