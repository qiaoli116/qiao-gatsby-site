import * as React from 'react'
import { Link } from 'gatsby'
import { useEffect } from 'react'

interface LayoutProps {
  pageTitle: string; // Define the type for the pageTitle prop
  children: React.ReactNode; // Define the type for the content rendered within the layout
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout