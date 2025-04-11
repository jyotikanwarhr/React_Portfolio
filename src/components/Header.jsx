function Header() {
    return (
        <header className="bg-gray-800 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="logo text-white font-bold">Jyoti Kanwar</div>
          <ul className="flex items-center">
            <li className="mr-6"><a href="/" className="text-white hover:text-gray-400 font-bold">About</a></li>
            <li className="mr-6"><a href="/portfolio" className="text-white hover:text-gray-400 font-bold">Portfolio</a></li>
            <li className="mr-6"><a href="/contact" className="text-white hover:text-gray-400 font-bold">Contact</a></li>
            <li className="mr-6"><a href="/resume" className="text-white hover:text-gray-400 font-bold">Resume</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;