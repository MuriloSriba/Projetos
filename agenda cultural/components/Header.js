export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d2963c22-b377-402d-9252-f397c33607c8.png" alt="Logo Agenda Cultural Florianópolis" className="mr-3" />
          <h1 className="text-xl font-bold text-blue-900">Agenda Cultural</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#eventos" className="text-gray-700 hover:text-blue-600 font-medium">Eventos</a></li>
            <li><a href="#sobre" className="text-gray-700 hover:text-blue-600 font-medium">Sobre</a></li>
            <li><a href="#contato" className="text-gray-700 hover:text-blue-600 font-medium">Contato</a></li>
          </ul>
        </nav>
        <button className="md:hidden text-blue-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
