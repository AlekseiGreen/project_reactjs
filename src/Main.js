import React, {useState} from 'react';
import Backlog from './Backlog.js';
import InProgress from './InProgress.js';
import Ready from './Ready.js';
import Finished from './Finished.js';


function Main() {
    let [copyMain, setArr] = useState([{id: 0, name:'Shop page0'}, {id: 1, name:'Shop page1'}, {id: 2, name:'Shop page2'}, {id: 3, name:'Shop page3'}, {id: 4, name:'Shop page4'}, {id: 5, name:'Shop page5'}]);

    //Func Backlog
    const valueArr = (arrAdd) => {
        let numID = copyMain.length-1;
        copyMain.push({id: numID+1, name: arrAdd});
        setArr(copyMain);
        console.log(copyMain);
    }


    let [rrr, setRRR] = useState([]);

    //Func Ready
    const valueArr2 = (arrDel) => {
        console.log(arrDel);
        console.log(copyMain);
        let DelIndex = copyMain.splice(arrDel, 1);
        //rrr.splice(0);
        rrr.push(DelIndex[0]);
        setRRR(rrr);
        console.log('rrr=', rrr);
        
    }

    //Buffer
    const [textArr, setText] =  useState(0);
    

    //Backlog
    const valueText = (textArr) => {
        setText(textArr);
        valueArr(textArr);
    }

    //Ready
    const valueText2 = (textArr) => {
        setText(textArr);
        valueArr2(textArr);
    }

    const [valueM, setValue] =  useState(0);
    const valueFunct = (valueM) => {
        setValue(valueM);
    }
    
    return(
        <div className="Main">
            <Backlog arrayIn={copyMain} arrayOut={valueText}/>
            <Ready arrayIn={copyMain} arrayOut={valueText2} arrayCut={rrr}/>
            <InProgress title='In Progress' value={valueM}/>
            <Finished value={valueFunct}/>
        </div>
    )
}

export default Main;