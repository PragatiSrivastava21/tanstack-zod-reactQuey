import { createFileRoute, Link, Outlet } from '@tanstack/react-router';


export const Route = createFileRoute('/_layout1')({
  component: Layout1,
})
export default function Layout1(){
    return <div>
        <header className='bg-blue-100 flex items-center justify-center'>This is header</header>
        <aside>
            <nav>
              <div>  <Link to='/user'>User</Link></div>
               <div> <Link to='/dashboard'>Dashboard</Link></div>
            </nav>
        </aside>
        <div>
            <Outlet />
        </div>
    </div>;
}
