import React from 'react'
import { SummaryRating } from '../DTO/SummaryRating'

export default function SummaryRatings({KnowledgeDelivery = 5,
    InterestStimulation = 7,
    ManagementOrganization = 2,
    ProfessorStudentRelation = 9}: SummaryRating) {
  return (
    <div className="flex flex-col  ">
    <p className="pb-2 text-gray-400">Summary ratings</p>
    <div className="flex-1 gap-8 w-full  sm:grid ">
      <div className='w-full '>
        <dl className=''>
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Knowledge of Subject and Delivery of Instruction
          </dt>
          <dd className="mb-3 flex items-center">
            <div className="me-2 h-2.5 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
              <div className={`h-2.5 w-[${KnowledgeDelivery*10}%] rounded-sm bg-blue-600 dark:bg-blue-500`}></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              8.8
            </span>
          </dd>
        </dl>
        <dl>
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Interest and Stimulation
          </dt>
          <dd className="mb-3 flex items-center">
            <div className="me-2 h-2.5 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
              <div className={`h-2.5 w-[${InterestStimulation*10}%]  rounded-sm bg-blue-600 dark:bg-blue-500`}></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              8.9
            </span>
          </dd>
        </dl>
        <dl>
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Free WiFi
          </dt>
          <dd className="mb-3 flex items-center">
            <div className="me-2 h-2.5 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
              <div className={`h-2.5 w-[${ManagementOrganization*10}%]  rounded-sm bg-blue-600 dark:bg-blue-500`}></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              8.8
            </span>
          </dd>
        </dl>
        <dl>
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Facilities
          </dt>
          <dd className="flex items-center">
            <div className="me-2 h-2.5 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
              <div className={`h-2.5 w-[${ProfessorStudentRelation*10}%]  rounded-sm bg-blue-600 dark:bg-blue-500`}></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              5.4
            </span>
          </dd>
        </dl>
      </div>
    </div>
  </div>
  )
}
