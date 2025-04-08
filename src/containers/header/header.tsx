import NavAction from '../nav-action/nav-action';


export default function Header() {

  return (
    <header className='p-1 flex flex-row gap-3 border-b-fuchsia-500 border-b-2 bg-pink-50 text-fuchsia-500'>
      <p>Demo Jotai</p>
      <NavAction />
    </header>
  )
}