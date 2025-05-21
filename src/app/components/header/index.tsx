import Link from 'next/link';


export function Header() {
  return (
    <header className='bg-stone-900 text-white p-5 shadow-md' >
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-4xl font-extrabold tracking-wide'>
          To-do List
        </h1>
        <nav>
          <ul className='flex space-x-4 text-lg font-semibold'>
            <li>
              <Link
                href='/'
                className='text-white hover:text-red-900 hover:underline
                transition-colors'>
                  Login e Cadastro
              </Link>
            </li>
            <li>
              <Link
                href='/todolist'
                className='text-white hover:text-red-900 hover:underline
                transition-colors'>
                  Sua Lista de Tarefas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
  </header>
  )
}