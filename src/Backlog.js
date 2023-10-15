import React, { useState } from 'react';


function Backlog({arrayIn, arrayOut}) {

    function setAdd(text1) {
        if(text1 != '') {
            arrayOut(text1);
            console.log('V=', text1);
        }
    }

    const [text, setText] = useState('');

    function changeText(event) {
        console.log('OUT=', event.target.value);
        setText(event.target.value);
    }

    const array = arrayIn.map((element, index) => {
        return <p className='cssFor' key={index}>{element.name}</p>
    });

    return(
        <div className='box'>
            <div className='box_inter'>
                <p>Backlog</p>
                <p>{array}</p>
                <input type='text' id="fname" class='i-1' value={text} onChange={changeText}></input><br/>
                <button onClick={() => setAdd(text)}>
                    +Add card
                </button>
            </div>
        </div>
    )
}

export default Backlog;