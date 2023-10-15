import React, {useState} from "react";

function Ready({arrayIn, arrayOut, arrayCut}) {

    function setAdd(text1) {
        if(text1 != '') {
            for(let i=0; i < arrayIn.length; i++) {
                if(text1 === arrayIn[i].name) {
                    arrayOut(i);
                }
            }
        }
    }

    const [text, setText] = useState('');

    function changeText(event) {
        setText(event.target.value);
    }

    const array = arrayCut.map((element, index) => {
        return <p className='cssFor' key={index}>{element.name}</p>
    });

    return(
        <div className='box'>
            <div className='box_inter'>
                <p>Ready</p>
                <p>{array}</p>
                <input type='text' id="fname" class='i-1' value={text} onChange={changeText} placeholder='Ведите задачу (Blocklog)'/><br/>
                <button onClick={() => setAdd(text)}>
                    +Add card
                </button>
            </div>
        </div>
    )
}

export default Ready;