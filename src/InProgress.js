import React, { useState } from 'react';


function InProgress(props) {

    const [arr, setValue] = useState([{id: 1, name:'Login page – performance issues'}, {id: 2, name:'Sprint bugfix'}]);
    let copy = Object.assign([], arr);

    function setAdd(text1) {
        let numID = copy.length-1;
        copy.push({id: numID+1, name: text1});
        setValue(copy);
        console.log(copy);
    }


    const result = copy.map((element, index) => {
        return <p className='cssFor' key={index}>{element.name}</p>
    });

    const [text, setText] = useState('');

    function changeText(event) {
        setText(event.target.value);
    }


    return(
        <div className='box'>
            <div className='box_inter'>
                <p>In Progress</p>
                {/* <p>value: {props.value}</p> */}
                {/* {people?.map(p => <span>{p.first}</span>)} */}
                <p>{result}</p>
                <input type='text' id="fname" class='i-1' value={text} onChange={changeText} /><br/>
                <button onClick={() => setAdd(text)}>
                    +Add card
                </button>
            </div>
        </div>
    )
}

export default InProgress;