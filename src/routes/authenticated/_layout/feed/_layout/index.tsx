import { createFileRoute } from '@tanstack/react-router'
import IndividualReports from '../../../../../components/Group/IndividualReports'

export const Route = createFileRoute('/authenticated/_layout/feed/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-col gap-9'>
    {
      [1,2,3,4,5,6,7].map((e) => {
        return (<IndividualReports/>)
      })
    }
  </div>
}
