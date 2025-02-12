import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/authenticated/_layout/teacher/_layout/post',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/authenticated/teacher/_layout/post"!</div>
}
