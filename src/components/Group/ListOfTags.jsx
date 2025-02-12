import React from 'react'
// import  {Tagcolor}  from '../../DTO/Tagcolor'
import Tag from "../Tag"
export default function ListOfTags({Subjects=[1,2,3,4,5]}) {
  return (
    <div className='w-full'>

    <div className="flex flex-wrap gap-1  w-full">
      
    {Subjects.map(({ Color, Label }, index) => {
      return <Tag Color={Color} key={index} Label={Label} />;
    })}
  </div>
    </div>
  )
}
