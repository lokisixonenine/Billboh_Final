import React, { useState } from "react";
import API from "../utils/API";
// import {getNews} from '../utils/API';
import CoolFacts from "../components/CoolFacts";
// import SearchFacts from "../components/SearchFacts";
// import SearchResults from "../components/SearchResults";

// import NewsCard from "../components/SearchResaultCard";
// import DayFacts from '../pages/DayFacts';

// class News extends Component {
//     state = {
//         city: "",
//         date: "",
//         news: ""
//     }
// }
export default () => {
  // const SomeName = () => {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [facts, setFacts] = useState([]);

  const handleSearch = () => {
    API.getHistory(month, day).then(data => {
      setFacts(data.data.data.Events);
      console.log(facts);
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-2"></div>

        <div className="col-8">
          <input
            placeholder="What month do you want?"
            onChange={e => setMonth(e.target.value)}
          />
          <input
            placeholder="What date do you want? (year-month-day)"
            onChange={e => setDay(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-warning btn-lg">
            Submit
          </button>
          <div className="row">
            {facts.map(a => (
              <CoolFacts props={a} />
            ))}
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

// export default SomeName;
