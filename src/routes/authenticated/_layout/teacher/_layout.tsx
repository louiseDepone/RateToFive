import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/authenticated/_layout/teacher/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className=''>

    <Outlet/>
  </div>
}
