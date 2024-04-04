import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "@components/layout"
import { graphql } from "gatsby"

type BlogNodeType = {
    frontmatter: {
        title: string
    }
    parent: {
        sourceInstanceName: string
    }
}

const blogSourceInstanceName = "blogs"
const BlogsPage: React.FC<PageProps<{ allMdx: { nodes: BlogNodeType[] } }>> = ({ data }) => {
    const blogsNodes: BlogNodeType[] = data.allMdx.nodes.filter((node: BlogNodeType) => node.parent.sourceInstanceName === blogSourceInstanceName)
    return (
        <Layout pageTitle="Blogs Page">
            <p>Welcome to my blogs</p>
            <ul>
                {blogsNodes.map((blog: any) => (
                    <li key={blog.frontmatter.title}>
                        {blog.frontmatter.title}
                    </li>
                ))}
            </ul>
        </Layout>
    )
}


export const query = graphql`
    query queryMdx {
        allMdx {
            nodes {
                frontmatter {
                    title
                }
                parent {
                    ... on File {
                        sourceInstanceName
                    }
                }
            }
        }
    }
`
export default BlogsPage

export const Head: HeadFC = () => <title>Blogs Page</title>