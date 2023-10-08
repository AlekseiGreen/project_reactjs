import React, { useState } from 'react';


function Backlog({arrayIn, arrayOut}) {

    function setAdd(text1) {
        arrayOut(text1);
        console.log(text1);
    }

    const [text, setText] = useState('');

    function changeText(event) {
        setText(event.target.value);
    }

    const array = arrayIn.map((element, index) => {
        return <p key={index}>{element.name}</p>
    });

    return(
        <div className='box'>
            <div className='box_inter'>
                <p>Backlog</p>
                <p>arr: {array}</p>
                <input type='text' id="fname" class='i-1' value={text} onChange={changeText} /><br/>
                <button onClick={() => setAdd(text)}>
                    +Add card
                </button>
            </div>
        </div>
    )
}

export default Backlog;