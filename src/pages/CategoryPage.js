import { useParams, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { categories } from '../data/categories'
import CandidateDropdown from '../components/CandidateDropdown'

const Page = styled.div`
  text-align: center;
  padding: 40px 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  max-width: 700px;
  margin: 24px auto 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const CategoryPage = () => {
  const { slug } = useParams()
  const category = categories.find((c) => c.slug === slug)

  if (!category) return <Navigate to="/" replace />

  return (
    <Page>
      <h1>{category.title}</h1>
      <p>{category.description}</p>
      <Grid>
        {category.items.map((item) => (
          <CandidateDropdown key={item.label} label={item.label}>
            {item.content}
          </CandidateDropdown>
        ))}
      </Grid>
    </Page>
  )
}

export default CategoryPage