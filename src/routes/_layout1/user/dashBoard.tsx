import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1/user/dashBoard')({
  component: () => <div>Hello /_layout1/user/dashBoard!</div>,
})
