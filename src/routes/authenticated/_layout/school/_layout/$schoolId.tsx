import { createFileRoute } from '@tanstack/react-router'
import TeacherOverview from '../../../../../components/Group/TeacherOverview'

export const Route = createFileRoute(
  '/authenticated/_layout/school/_layout/$schoolId',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <div className='w-full text-center py-10'>
      <p className='font-bold text-2xl uppercase'>University of Sanata Isabel</p>
    </div>
    <div>
        
            {
              [1,2,3,4,5,6,7].map((e) => {
                return (<TeacherOverview/>)
              })
            }
    </div>
  </div>
}
