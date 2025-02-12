import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/authentication/_layout/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/authentication/_layout/login"!</div>
}
