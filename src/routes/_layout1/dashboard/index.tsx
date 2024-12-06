import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1/dashboard/')({
  component: DashboardPage,
})

 function DashboardPage() {
  return <div>This is Dashboard page</div>
}
