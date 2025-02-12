import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/authentication/_layout/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/authentication/_layout/register"!</div>
}
