import React, {useState} from "react";
function Component1 (){
    let [name , setName] = useState('');
    let [dep ,setDep] = useState('');
    let [rate,setRate] = useState('');
    let [inputData,setInputData] = useState([]);
    let [flag, setFlag] = useState(false)
    const show = (e)=>{
        e.preventDefault();
        inputData.push({
            userName:name,
            userDep:dep,
            userRating:rate
        });
        setInputData(inputData);
        setFlag(!flag);
        setName('');
        setDep('');
        setRate('');
    }
    const goBack = (e)=>{
        e.preventDefault();
        setFlag(!flag)
    }
    return(<div>
        {
            flag ? <div className="mainOpDiv">
        
            {
                inputData.map((item, pos)=>{
                    return <div className="opDiv" key={pos}>
                        Name : {item.userName}<br />
                        Department : {item.userDep} <br />
                        Rating : {item.userRating}
                    </div>
                })
            }
            <button onClick={goBack} className='btnBack'>Go Back</button>
            </div>:
            <form action="">
            <label htmlFor="name" className="label">Name:  </label>
            <input type='text' id="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} className= "input" value={name}/>
            <br /><br />
            <label htmlFor="department" className="label">Department:  </label>
            <input type='text' id="department" placeholder="Enter your department" onChange={(e)=>setDep(e.target.value)} className= "input" value={dep} />
            <br /><br />
            <label htmlFor="rating" className="label">Rating:  </label>
            <input type='number' id="rating" placeholder="Give your rating" onChange={(e)=>setRate(e.target.value)} className= "input" value={rate}/>
            <br /><br />
            <button type="submit" onClick={show} className="btn">Sumbit</button>
            </form>
        }
    </div>)
}
export default Component1;