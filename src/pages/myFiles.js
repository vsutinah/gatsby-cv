import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const myFiles = ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div>
        <h1>My Site&apos;s Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </Layout>
    )
}

export default myFiles

export const query = graphql`
    query {
        allFile {
        edges {
            node {
            relativePath
            prettySize
            extension
            birthTime(fromNow: true)
            }
        }
        }
    }
`