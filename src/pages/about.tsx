import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"

const AboutPage: React.FC<PageProps> = () => {
    return (
        <main>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <p>This is my about page</p>
        </main>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Me</title>
