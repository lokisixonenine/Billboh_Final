import React, { Component } from "react";
import API from "../utils/API";
// import {getNews} from '../utils/API';
// import Card from '../components/NewsCard';

import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";
import CoolFacts from "../components/CoolFacts";
import SearchFacts from "../components/SearchFacts";
// import SearchResults from "../components/SearchResults";
class Search extends Component {
  state = {
    parameters: "",
    data: [],
    error: ""
  };

  // const [test, setTest] = useState([]);
  // useEffect(() => {

  // }, [])
  componentDidMount() {
    this.defaultFactsApi();
  }

  defaultFactsApi = () => {
    API.getHistory().then(response => {
      console.log("response", response.data);
      this.setState({ data: response.data });
    });
  };

  //this is called under the form submit button. it doesn't refresh the page. aka handle form submit.
  factsApi = event => {
    event.preventDefault();
    this.defaultFactsApi();
  };

  handleInputChange = event => {
    this.setState({ parameters: event.target.value });
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Month and Date!</h1>
          {/* <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          > */}
          {/* {this.state.error}
          </Alert> */}
          {/* <SearchForm
            handleFormSubmit={this.handleFormSubmit}
          />
          <SearchResults results={this.state.results} /> */}
          <SearchFacts
            handleFormSubmit={this.factsApi}
            handleInputChange={this.handleInputChange}
          />

          <CoolFacts data={this.state.data.data} />

          {/* <SearchResults/>  */}
        </Container>
      </div>
    );
  }
}

export default Search;
