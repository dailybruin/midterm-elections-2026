import { useParams, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { useData } from '../DataContext'
import { categories, NUMBERS, getDropdown } from '../data/categories'
import CandidateDropdown from '../components/CandidateDropdown'

const Page = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  text-align: center;
  padding: 40px 20px 64px; /* bottom space before the footer */

  /* desktop: ~14% margins per side, so the dropdown row is ~72% wide (matches Figma) */
  @media (min-width: 900px) {
    padding: 40px 14vw 96px 14vw;
  }
`

const Title = styled.h1`
  && {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 200;
  }
`

const Intro = styled.p`
  margin-left: auto;
  margin-right: auto;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 1.5vw, 18px);
  line-height: 1.5;
  color: #17171C;
  /* no ink filter: fully crisp text */

  /* desktop: intro is narrower than the dropdown row (~2/3 of it in Figma) */
  @media (min-width: 900px) {
    max-width: 67%;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start; /* each dropdown keeps its own height */
  gap: 8px;
  width: 100%;
  margin: 24px auto 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

// hides "[waiting ...]" placeholders
const clean = (v) => (typeof v === 'string' && v.trim() ? v.trim() : null)

const CategoryPage = () => {
  const { slug } = useParams()
  const data = useData()

  const category = categories.find((c) => c.slug === slug)
  if (!category) return <Navigate to="/" replace />

  const d = getDropdown(data, category.title)
  if (!d) return <Navigate to="/" replace />

  const intro = clean(d[category.introKey])

  const items = [
    ...(category.candidates ?? []).map((c) => ({
      key: c.id,
      name: c.name,
      description: clean(d[`${c.id}_description`]),
      picture: clean(d[`${c.id}_image`]),
      alt: c.name,
      small: false,
    })),
    ...NUMBERS.slice(0, category.measures ?? 0).map((n) => ({
      key: n,
      name: d[`${n}_title`],
      description: clean(d[`${n}_description`]),
      picture: null,
      alt: '',
      small: true, // measures (state & local) get smaller text
    })),
  ]

  return (
    <Page>
      <Title className="ink-text">{d.dropdown_title}</Title>
      {intro && <Intro>{intro}</Intro>}
        <Grid>
        {items.map((item) => (
            <CandidateDropdown
            key={`${slug}-${item.key}`}   // was key={item.key}
            name={item.name}
            description={item.description}
            picture={item.picture}
            alt={item.alt}
            small={item.small}
            />
        ))}
        </Grid>
    </Page>
  )
}

export default CategoryPage