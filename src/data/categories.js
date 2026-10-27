export const NUMBERS = [
  "one", "two", "three", "four", "five", "six", "seven",
  "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
];

// `title` must match dropdown_title in the AML exactly
export const categories = [
  {
    slug: "governor",
    title: "Governor",
    size: "large",
    introKey: "gov_description",
    candidates: [
      { id: "becerra", name: "Xavier Becerra" },
      { id: "hilton", name: "Steve Hilton" },
    ],
  },
  {
    slug: "mayor",
    title: "Mayor",
    size: "large",
    introKey: "mayor_description",
    candidates: [
      { id: "bass", name: "Karen Bass" },
      { id: "raman", name: "Nithya Raman" },
    ],
  },
  {
    slug: "state-assembly",
    title: "State Assembly",
    introKey: "state_assembly_description",
    candidates: [
      { id: "zbur", name: "Rick Chavez Zbur" },
      { id: "hernandez", name: "Colin Hernandez" },
    ],
  },
  {
    slug: "state-senate",
    title: "State Senate",
    introKey: "state_senate_description",
    candidates: [
      { id: "erickson", name: "John Erickson" }, // full names once confirmed
      { id: "goldsmith", name: "Brian Goldsmith" },
    ],
  },
  {
    slug: "state-ballot-measures",
    title: "State Ballot Measures",
    introKey: "state_ballot_description", // not in the AML yet, see note
    measures: 14,
  },
  {
    slug: "local-ballot-measures",
    title: "Local Ballot Measures",
    introKey: "local_ballot_description",
    measures: 10,
  },
];

export const getDropdown = (data, title) =>
  data.dropdown.find((d) => d.dropdown_title === title);