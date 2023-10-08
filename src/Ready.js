import React, {useState} from "react";

function Ready({arrayIn}) {

    const [arr, setValue] = useState([{id: 1, name:'Login page – performance issues'}, {id: 2, name:'Sprint bugfix'}]);
    let copy = Object.assign([], arr);

    let keys = Object.keys(arrayIn)
    //const arrIn = arrayIn.pop();
    console.log(arrayIn[keys[0]]);

    function setAdd(text1) {
        
        let numID = copy.length-1;
        copy.push({id: numID+1, name: text1});
        setValue(copy);
        console.log(copy);
    }

    const result = copy.map((element, index) => {
        return <p key={index}>{element.name}</p>
    });

    const [text, setText] = useState('');

    function changeText(event) {
        setText(event.target.value);
    }


    return(
        <div className='box'>
            <div className='box_inter'>
                <p>Ready</p>
                {/* <p>{result}</p> */}
                <p>{arr[0].name}</p>
                <input type='text' id="fname" class='i-1' value={text} onChange={changeText} /><br/>
                <button onClick={() => setAdd(text)}>
                    +Add card
                </button>
            </div>
        </div>
    )
}

export default Ready;