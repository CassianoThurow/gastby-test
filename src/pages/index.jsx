import { gql, useQuery } from "@apollo/client"
import * as React from "react"

const GET_LAUNCHERS = gql`
  query {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      rocket {
        rocket_name
      }
    }
  }
`

const IndexPage = () => {
  const { data, loading } = useQuery(GET_LAUNCHERS)

  if (loading) {
    return (
      <p>carregando...</p>
    )
  }
  return (
    data.launchesPast.map(launch =>
        <div>
          <h1>{launch.mission_name}</h1>
          <p>{launch.launch_date_local}</p>
          <span>{launch.rocket.rocket_name}</span>
        </div>  
      )
  )
}

export default IndexPage
