import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/authenticated/_layout/school/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>

    <Outlet/>
  </div>
}
