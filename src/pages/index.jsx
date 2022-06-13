import { gql, useQuery } from "@apollo/client"
import * as React from "react"
import Card from '../components/Card'
import styled from 'styled-components'

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
    <Container>
      {data.launchesPast.map(launch =>
        <Card title={launch.mission_name} date={launch.launch_date_local} rocket=
        {launch.rocket.rocket_name} />
      )}
      </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
`

export default IndexPage
