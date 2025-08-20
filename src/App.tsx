import { useState } from 'react'
//import React from 'react'
import produce from 'immer';
import Message from './assets/component/Message';
function App() {
   const [bugs, setBugs]=useState([
    {id:1, title:'Bug 1', fixed: false},
    {id:2, title:'Bug 2', fixed: false}
   ])
const handleClick=()=>{
   setBugs(produce(draft =>{
     const bug =draft.find(bug => bug.id === 2);
     if(bug) bug.fixed = true;
   }))
};
  return (
    <div>
        {bugs.map(bug=><p key={bug.title}>{bug.title} {bug.fixed ? 'Fixed' : 'New'}</p>)}
       <button onClick={handleClick}> Click Me</button>
    </div>
  )
}

export default App;
    


