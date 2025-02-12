import { createFileRoute } from '@tanstack/react-router'
import TeacherOverview from '../../../../../components/Group/TeacherOverview'

export const Route = createFileRoute('/authenticated/_layout/teacher/_layout/')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>
      {
        [1,2,3,4,5,6,7].map((e) => {
          return (<TeacherOverview/>)
        })
      }
    </div>
}
