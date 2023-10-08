import React, {useState} from 'react';
import Backlog from './Backlog.js';
import InProgress from './InProgress.js';
import Ready from './Ready.js';
import Finished from './Finished.js';


function Main() {
    let [arr, setArr] = useState([{id: 1, name:'AAA'}, {id: 2, name:'BBB'}]);
    let copyMain = Object.assign([], arr);
    const valueArr = (arrAdd) => {
        let numID = copyMain.length-1;
        copyMain.push({id: numID+1, name: arrAdd});
        setArr(copyMain);
        console.log(copyMain);
    }

    const [textArr, setText] =  useState(0);
    const valueText = (textArr) => {
        setText(textArr);
        console.log(textArr);
        valueArr(textArr);
    }
    const [valueM, setValue] =  useState(0);
    const valueFunct = (valueM) => {
        setValue(valueM);
    }
    
    return(
        <div className="Main">
            <Backlog arrayIn={copyMain} arrayOut={valueText}/>
            <Ready arrayIn={copyMain} />
            <InProgress title='In Progress' value={valueM}/>
            <Finished value={valueFunct}/>
        </div>
    )
}

export default Main;