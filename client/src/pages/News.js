import React, { useState } from "react";
import API from "../utils/API";
// import {getNews} from '../utils/API';
import NewsCard from "../components/NewsStuff";
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
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [news, setNews] = useState([]);

  const handleSearch = () => {
    API.getNews(city, date).then(({ data }) => {
      setNews(data.articles);
      console.log(data);
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-2"></div>

        <div className="col-8">
          <input
            placeholder="Where are you (city name?)"
            onChange={e => setCity(e.target.value)}
          />
          <input
            placeholder="What date do you want? (year-month-day)"
            onChange={e => setDate(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-warning btn-lg">
            Submit
          </button>

          <div className="row">
            {news.map(a => (
              <NewsCard props={a} />
            ))}
            {/* {news.map((a) => (
                    <NewsCard key={a.publishedAt} props={a} />
                    ))} */}
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

// export default SomeName;
