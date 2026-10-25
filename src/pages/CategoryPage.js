import { useParams, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { useData } from '../DataContext'
import { categories, NUMBERS, getDropdown } from '../data/categories'
import CandidateDropdown from '../components/CandidateDropdown'

const Page = styled.div`
  text-align: center;
  padding: 40px 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;   /* each dropdown keeps its own height */
  gap: 8px;
  max-width: 700px;
  margin: 24px auto 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Photo = styled.img`
  width: 100%;
  max-width: 280px;
  display: block;
  margin: 0 auto 12px;
`

// hides "[waiting ...]" placeholders
const clean = (v) => (typeof v === 'string' && v.trim() ? v.trim() : null)

const CategoryPage = () => {
  const { slug } = useParams()   // was missing
  const data = useData()         // was missing

  const category = categories.find((c) => c.slug === slug)
  if (!category) return <Navigate to="/" replace />

  const d = getDropdown(data, category.title)
    if (!d) return <Navigate to="/" replace />
    console.log(d)

  const intro = clean(d[category.introKey])

  const items = [
  ...(category.candidates ?? []).map((c) => ({
    key: c.id,
    name: c.name,
    description: clean(d[`${c.id}_description`]),
    picture: clean(d[`${c.id}_image`]),
    alt: c.name,
  })),
  ...NUMBERS.slice(0, category.measures ?? 0).map((n) => ({
    key: n,
    name: d[`${n}_title`],
    description: clean(d[`${n}_description`]),
    picture: null,
    alt: '',
  })),
]

  return (
    <Page>
      <h1>{d.dropdown_title}</h1>
      {intro && <p>{intro}</p>}
      <Grid>
        {items.map((item) => (
            <CandidateDropdown
            key={item.key}
            name={item.name}
            description={item.description}
            picture={item.picture}
            alt={item.alt}
            />
        ))}
        </Grid>
    </Page>
  )
}

export default CategoryPage