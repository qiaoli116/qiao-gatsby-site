import * as React from 'react'
import Layout from '../components/layout'
import { HeadFC, PageProps, graphql, useStaticQuery } from 'gatsby'


type dataType = {
  mdx: {
    parent: {
      sourceInstanceName: string
    }
    body: string
    frontmatter: {
      date: string
      slug: string
      title: string
    }
  }
}
const blogSourceInstanceName = "blogs"

const BlogPost: React.FC<PageProps<dataType>> = ({ data, children }) => {
  const title = data.mdx.frontmatter.title;
  const date = data.mdx.frontmatter.date;

  if (data.mdx.parent.sourceInstanceName !== blogSourceInstanceName) {
    return (
      <Layout pageTitle="Post not found">
        <p>Post not find</p>
      </Layout>
    )
  }
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>{title}</p>
      <p>{date}</p>
      <div>
        {children}
      </div>
    </Layout>
  )
}
export const query = graphql`
    query queryMdx ($id: String) {
        mdx(id: {eq: $id}) {
            parent {
              ... on File {
                sourceInstanceName
              }
            }
            body
            frontmatter {
              date
              slug
              title
            }
          }
    }
`
/* query result sample
{
  "data": {
    "mdx": {
      "parent": {
        "sourceInstanceName": "blogs"
      },
      "body": "\r\nHere's another post! It's even better than the first one!",
      "frontmatter": {
        "date": "2021-07-24",
        "slug": "another-post",
        "title": "Another Post"
      }
    }
  },
  "extensions": {}
}

*/

export const Head: HeadFC = () => <title>About Me</title>

export default BlogPost