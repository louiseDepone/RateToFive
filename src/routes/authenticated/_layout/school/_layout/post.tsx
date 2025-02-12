import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/authenticated/_layout/school/_layout/post',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/authenticated/school/_layout/post"!</div>
}
