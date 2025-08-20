import React, { Children } from 'react'
interface Props{
    Children:string;

}
const ExpandableText = ({Children}:Props) => {
  return (
    <div>{Children}</div>
  )
}

export default ExpandableText;
