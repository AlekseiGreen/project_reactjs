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
