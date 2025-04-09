function Header() {
    return (
        <header class="bg-gray-100 py-4">
        <nav class="container mx-auto flex justify-between items-center">
          <div class="logo">Your Name</div>
          <ul class="flex items-center">
            <li class="mr-6"><a href="/" class="text-gray-700 hover:text-gray-900">About</a></li>
            <li class="mr-6"><a href="/portfolio" class="text-gray-700 hover:text-gray-900">Portfolio</a></li>
            <li class="mr-6"><a href="#" class="text-gray-700 hover:text-gray-900">Contact</a></li>
            <li class="mr-6"><a href="#" class="text-gray-700 hover:text-gray-900">Resume</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;