
import React from 'react'

function list(props) {
    console.log('props', props);
    // let data = JSON.parse(localStorage.getItem('history'))


    return (
        <div>
            <h3>History</h3>
            <ul>
                {props.history.map((ele, idx) => {

                    return (<li key={idx}>
                        <span>{ele.method}</span>
                        <p >{ele.url}</p>

                    </li>)
                })}

            </ul>




        </div>
    )
}

export default list

