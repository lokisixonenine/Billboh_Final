import React, { useState } from "react";
import API from "../utils/API";
// import {getNews} from '../utils/API';
import CoolFacts from "../components/CoolFacts";
// import SearchFacts from "../components/SearchFacts";
// import SearchResults from "../components/SearchResults";
import Hero from "../components/Hero";
import Moment from "moment";
import Container from "../components/Container";

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
  const month = Moment().format("MM");
  const day = Moment().format("D");
  const [facts, setFacts] = useState([]);
  const todaysDate = Moment().format("MM/DD/YYYY");

  const handleSearch = () => {
    API.getHistory(month, day).then(data => {
      setFacts(data.data.data.Events);
      console.log(facts);
    });
  };
  handleSearch();

  return (
    <div>
      <Hero backgroundImage="https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/11/The_First_Thanksgiving_cph.3g04961.jpg?resize=1024%2C653&ssl=1">
        <h1>Historical Facts</h1>
        <h5>Today's Date: {todaysDate}</h5>
      </Hero>
      <br></br>
      <br></br>
      <Container>
        <h5>
          <strong>
            See below for a bunch of amazing historical events that happened on
            this day of the year!
          </strong>{" "}
        </h5>
        <br></br>
        <div className="row">
          {facts.map(a => (
            <CoolFacts props={a} />
          ))}
        </div>
      </Container>
      <div className="row">
        <div className="col-2"></div>

        <div className="col-8"></div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

// export default SomeName;
