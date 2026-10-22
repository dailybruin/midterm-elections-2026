const numbered = (prefix, count) =>
  Array.from({ length: count }, (_, i) => ({
    label: `${prefix} ${i + 1}`,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  }))

export const categories = [
  {
    slug: 'governor',
    title: 'Governor',
    size: 'bigger-text',
    description: 'Short explainer about the governor race...',
    items: [
      { label: 'Xavier Becerra', content: 'Bio, positions, endorsements...' },
      { label: 'Steve Hilton', content: 'Bio, positions, endorsements...' },
    ],
  },
  {
    slug: 'mayor',
    title: 'Mayor',
    size: 'bigger-text',
    description: 'Short explainer about the mayoral race...',
    items: [
      { label: 'Karen Bass', content: 'Bio, positions, endorsements...' },
      { label: 'Nithya Raman', content: 'Bio, positions, endorsements...' },
    ],
  },
  {
    slug: 'state-assembly',
    title: 'State Assembly',
    size: 'smaller-text',
    description: 'Short explainer about the state assembly race...',
    items: [
      { label: 'Candidate Name 1', content: 'Bio, positions, endorsements...' },
      { label: 'Candidate Name 2', content: 'Bio, positions, endorsements...' },
    ],
  },
  {
    slug: 'state-senate',
    title: 'State Senate',
    size: 'bigger-text',
    description: 'Short explainer about the state senate race...',
    items: [
      { label: 'Candidate Name 1', content: 'Bio, positions, endorsements...' },
      { label: 'Candidate Name 2', content: 'Bio, positions, endorsements...' },
    ],
  },
  {
    slug: 'state-ballot-measures',
    title: 'State Ballot Measures',
    size: 'smaller-text',
    description: 'Short explainer about the state ballot measures...',
    items: numbered('Proposition', 14),
  },
  {
    slug: 'local-ballot-measures',
    title: 'Local Ballot Measures',
    size: 'smaller-text',
    description: 'Short explainer about the local ballot measures...',
    items: numbered('Measure', 10),
  },
]