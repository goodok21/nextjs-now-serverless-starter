import { Layout } from 'components'
import { withApollo, gql, useQuery, cuid } from 'utils'

const IndexPage = props => {
  const { loading, data, error } = useQuery(GET_POSTS)
  return (
    <Layout>
      <h1>Posts:</h1>
      {!loading && data.allPosts && (
        <ul>
          {data.allPosts.map(({ url, title, votes }) => (
            <li key={cuid()}>
              {title} - {votes} votes
            </li>
          ))}
        </ul>
      )}
      {/* <code>{JSON.stringify(data)}</code> */}
    </Layout>
  )
}

const GET_POSTS = gql`
  {
    allPosts(last: 10) {
      id
      url
      title
      votes
    }
  }
`

export default withApollo(IndexPage)
