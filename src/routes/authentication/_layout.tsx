import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/authentication/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/authentication/_layout"!

    <Outlet/>
  </div>
}
