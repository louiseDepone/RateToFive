import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/authenticated/_layout/feed/_layout/post',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/authenticated/feed/_layout/post"!</div>
}
