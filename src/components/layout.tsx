import * as React from 'react'
import { Link } from 'gatsby'

interface LayoutProps {
  pageTitle: string; // Define the type for the pageTitle prop
  children: React.ReactNode; // Define the type for the content rendered within the layout
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }: {
  pageTitle: string,
  children: React.ReactNode
}) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
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