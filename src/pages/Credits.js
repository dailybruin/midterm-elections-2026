import "./Credits.css";
import { useData } from "../DataContext";

// order here = order on the page; `key` must match the AML block name exactly
const GROUPS = [
  { key: "reporter_credits", label: "Reporters" },
  { key: "developer_credits", label: "Developers" },
  { key: "designers_credit", label: "Designers" },       
  { key: "illustrators_credit", label: "Illustrators" }, 
];

const WORD_TO_NUM = {
  one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
};

function parseMembersFromGroup(group) {
  return Object.keys(group)
    .filter((key) => key.startsWith("name_"))
    .sort((a, b) => {
      const aNum = WORD_TO_NUM[a.replace("name_", "")] ?? 99;
      const bNum = WORD_TO_NUM[b.replace("name_", "")] ?? 99;
      return aNum - bNum;
    })
    .map((key) => {
      const word = key.replace("name_", "");
      return {
        name: group[key],
        position: group[`position_${word}`] || "",
      };
    });
}

export default function TeamCredits() {
  const data = useData();

    return (
    <main className="team-credits-page">
        <h1 className="team-credits-page__title">Credits</h1>
        <section className="team-credits">
        {GROUPS.map(({ key, label }) => {
            const raw = data[key];
            const group = Array.isArray(raw) ? raw[0] : raw;
            if (!group) return null;

            const members = parseMembersFromGroup(group);
            if (members.length === 0) return null;

            return (
            <div key={key} className="team-group">
                <h2 className="team-group__title">{label}</h2>
                <div className="team-grid">
                {members.map((member, i) => (
                    <div className="team-card" key={i}>
                    <p className="team-card__name">{member.name}</p>
                    <p className="team-card__position">{member.position}</p>
                    </div>
                ))}
                </div>
            </div>
            );
        })}
        </section>
    </main>
    );
}