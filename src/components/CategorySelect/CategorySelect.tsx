import "./CategorySelect.css";
import { Link } from "react-router-dom";
import { peopleData } from "../../data/people";
import type { Person } from "../../types";
import { useState } from "react";

const CategorySelect = () => {
 const options = {
  day: "2-digit",
  month: "2-digit",
 } as const;

 const getDate = () => new Date().toLocaleDateString("ru-RU", options);

 const [people, setPeople] = useState<Person[] | []>([]);

 return (
  <div>
   <button
    className="btn"
    onClick={() => setPeople(peopleData.filter((el) => getDate() === el.born))}
   >
    Кто родился в этот день?
   </button>
   <ul className="category">
    {people.map((person) => (
     <li key={person.id}>
      <Link to={`/persons/${person.slug}`} className="category">
       <span className="contents-list__label">{person.name}</span>
      </Link>
     </li>
    ))}
   </ul>
  </div>
 );
};

export default CategorySelect;
