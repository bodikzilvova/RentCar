import React from 'react'
import { Container } from './RentPage.styled'
import SearchForms from 'components/SearchForms/SearchForms'
import CatalogItem from 'components/CatalogItem/CatalogItem'

function RentPage() {
  return (
    <>
    <Container>
    <SearchForms />
    </Container>
    <CatalogItem/>
    </>
    
  )
}

export default RentPage