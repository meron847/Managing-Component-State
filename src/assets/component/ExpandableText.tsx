import React, { Children, useState } from 'react'
interface Props{
    children:string;
    maxCharts?:number;//to summerz a text
}
const ExpandableText = ({children,maxCharts=100}:Props) => {

    const [isExpanded,setExpanded]=useState(false);

    if (children.length <= maxCharts)return <p>{children}</p>;

    const text= isExpanded ? children : children.substring(0, maxCharts);
  return (
    <p>{text}...<button onClick={()=> setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button></p>
  )
}

export default ExpandableText;
