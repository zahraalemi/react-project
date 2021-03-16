export default function Counter({Time, Day, changeDay, Month,changeMonth, Year, changeYear}){
   
    return(
        Month == 2 ?(
            <>
            <h2>{Time}</h2>
            <div className="date-box">
            <button className="addBtn" onClick={Day < 28 ? ()=>(changeDay(1)) :  ()=>(changeMonth(1),changeDay(-27)) }> + </button>
            <button className="addBtn" onClick={Month < 12 ? ()=> (changeMonth(1)): ()=>(changeYear(1),changeMonth(-11))}> + </button>
            <button className="addBtn" onClick={()=> (changeYear(1))}> + </button>
            </div>
            <div className="date-box">
                
                <h3> {Day} </h3>
                <h3>/</h3>
                <h3> {Month} </h3>
                <h3>/</h3>
                <h3> {Year} </h3>
            </div>
            <div className="date-box">
            <button className="removeBtn" disabled={Month < 1} onClick={Day > 1 ? ()=>(changeDay(-1)) :  ()=>(changeMonth(-1),changeDay(+29)) }> - </button>
            <button className="removeBtn"  onClick={Month > 1 ? ()=> (changeMonth(-1)): ()=>(changeYear(-1),changeMonth(+11))}> - </button>
            <button className="removeBtn" onClick={()=> (changeYear(-1))}> - </button>
            </div>
            </>
            ) : Month == 3 ? (
                <>
                <h2>{Time}</h2>
                <div className="date-box">
                <button className="addBtn" onClick={Day < 30 ? ()=>(changeDay(1)) :  ()=>(changeMonth(1),changeDay(-29)) }> + </button>
                <button className="addBtn" onClick={Month < 12 ? ()=> (changeMonth(1)): ()=>(changeYear(1),changeMonth(-11))}> + </button>
                <button className="addBtn" onClick={()=> (changeYear(1))}> + </button>
                </div>
                <div className="date-box">
                    
                    <h3> {Day} </h3>
                    <h3>/</h3>
                    <h3> {Month} </h3>
                    <h3>/</h3>
                    <h3> {Year} </h3>
                </div>
                <div className="date-box">
                <button className="removeBtn" disabled={Month < 1} onClick={Day > 1 ? ()=>(changeDay(-1)) :  ()=>(changeMonth(-1),changeDay(+27)) }> - </button>
                <button className="removeBtn" onClick={Month > 1 ? ()=> (changeMonth(-1)): ()=>(changeYear(-1),changeMonth(+11))}> - </button>
                <button className="removeBtn" onClick={()=> (changeYear(-1))}> - </button>
                </div>
                </> 
            ) : (
                <>
                <h2>{Time}</h2>
                <div className="date-box">
                <button className="addBtn" onClick={Day < 30 ? ()=>(changeDay(1)) :  ()=>(changeMonth(1),changeDay(-29)) }> + </button>
                <button className="addBtn" onClick={Month < 12 ? ()=> (changeMonth(1)): ()=>(changeYear(1),changeMonth(-11))}> + </button>
                <button className="addBtn" onClick={()=> (changeYear(1))}> + </button>
                </div>
                <div className="date-box">
                    
                    <h3> {Day} </h3>
                    <h3>/</h3>
                    <h3> {Month} </h3>
                    <h3>/</h3>
                    <h3> {Year} </h3>
                </div>
                <div className="date-box">
                <button className="removeBtn" disabled={Month < 1} onClick={Day > 1 ? ()=>(changeDay(-1)) :  ()=>(changeMonth(-1),changeDay(+29)) }> - </button>
                <button className="removeBtn"  onClick={Month > 1 ? ()=> (changeMonth(-1)): ()=>(changeYear(-1),changeMonth(+11))}> - </button>
                <button className="removeBtn" onClick={()=> (changeYear(-1))}> - </button>
                </div>
                </> 
            )
        
    );
}