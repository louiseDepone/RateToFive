import React from 'react'
import { Tagcolor } from '../DTO/Tagcolor'

export default function Tag({Color = "red" , Label = "label"}: Tagcolor) {
    console.log("color", Color)
  return (
<span className={`bg-${Color}-100 text-${Color}-800 text-xs font-medium px-3.5 py-1.5 rounded-sm dark:bg-gray-700 dark:text-gray-300`}>{Label}</span>

  )
}
