import React, { useState } from 'react';
import Popup from 'reactjs-popup'

function Finished({value}) { // callback=value
    let [valueE, setValue] = useState(0);
    let valueFunct = (valueE) => {
        setValue(valueE + 1)
        value(valueE);
        console.log(valueE);
    }

    return(
        <div className='box'>
            <div className='box_inter'>
                <p>Finished</p>
                <input type="text"  src=''></input>
                <p><button type="button" onClick={()=>valueFunct(valueE)}>+Add card</button></p>
            </div>
        </div>
    )
}

export default Finished;


// import React, {useState} from "react";

// function Ready({arrayIn}) {

//     const [arr, setValue] = useState([{id: 1, name:'Login page – performance issues'}, {id: 2, name:'Sprint bugfix'}]);
//     let copy = Object.assign([], arr);

//     function setAdd(text1) {
        
//         let numID = copy.length-1;
//         copy.push({id: numID+1, name: text1});
//         setValue(copy);
//         console.log(copy);
//     }

//     const result = copy.map((element, index) => {
//         return <p key={index}>{element.name}</p>
//     });

//     const [text, setText] = useState('');

//     function changeText(event) {
//         setText(event.target.value);
//     }


//     return(
//         <div className='box'>
//             <div className='box_inter'>
//                 <p>Ready</p>
//                 <p>{result}</p>
//                 <input type='text' id="fname" class='i-1' value={text} onChange={changeText} /><br/>
//                 <button onClick={() => setAdd(text)}>
//                     +Add card
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Ready;