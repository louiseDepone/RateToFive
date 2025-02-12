import { createFileRoute } from '@tanstack/react-router'
import SchoolsOverview from '../../../../../components/Group/SchoolsOverview'

export const Route = createFileRoute('/authenticated/_layout/school/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
  {   [1,2,3,4,5,6,7].map((e) => {
              return (<SchoolsOverview />)
            })}
  </div>
}
