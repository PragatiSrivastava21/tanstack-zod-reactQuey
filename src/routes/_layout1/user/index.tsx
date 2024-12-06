import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1/user/')({
  component: UserPage,
})

function UserPage() {
  return (
    <div className="font-bold text-3xl text-purple-500">
      Hello this is user page
    </div>
  )
}
