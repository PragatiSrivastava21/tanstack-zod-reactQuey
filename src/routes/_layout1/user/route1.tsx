import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1/user/route1')({
  component: () => <div>Hello /_layout1/user/route1!</div>,
})
