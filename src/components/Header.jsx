function Header() {
    return (
        <header className="bg-gray-100 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="logo">Jyoti Kanwar</div>
          <ul className="flex items-center">
            <li className="mr-6"><a href="/" className="text-gray-700 hover:text-gray-900">About</a></li>
            <li className="mr-6"><a href="/portfolio" className="text-gray-700 hover:text-gray-900">Portfolio</a></li>
            <li className="mr-6"><a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
            <li className="mr-6"><a href="/resume" className="text-gray-700 hover:text-gray-900">Resume</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;