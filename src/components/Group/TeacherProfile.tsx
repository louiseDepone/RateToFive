import React from 'react'
import TotalRates from '../TotalRates'
import ListOfTags from '../Group/ListOfTags'
import SummaryRatings from '../SummaryRatings'
export default function TeacherProfile() {
  return (
    <div className="gap- flex flex w-full flex-col flex-col gap-5  ">
             <div className="flex flex-col gap-3 ">
               <p className="text-4xl font-black ">Ryan Louise</p>
   
          <TotalRates Quality={8.7} TotalReviews={376} TeacherLink={"#"}   />
         <ListOfTags/>
   
               
             </div>
             <div className="">
               <p className="pb-1 text-gray-400">Analyzaion of all the reviews</p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
               molestias iure tempore iste porro voluptas, earum quia soluta. Ea
               aut facilis mollitia possimus labore obcaecati id tempore, iusto
               pariatur suscipt <a className="text-blue-800">...see more</a>
             </div>
   
             <SummaryRatings/>
           </div>
  )
}
