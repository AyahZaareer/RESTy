
import React from 'react'

function list(props) {
    console.log('props', props);
    let data = JSON.parse(localStorage.getItem('history'))
    console.log('dataList', data);

    return (
        <div>
            <h3>History</h3>
            <ul>
                {data ? data.map((ele, idx) => {

                    return (<li key={idx}>
                        <span>{ele.method}</span>
                        <p >{ele.url}</p>

                    </li>)
                }) : null}

            </ul>



        </div>
    )
}

export default list

