import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Header, Layout, Drawer, Navigation, Content } from "react-mdl";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <div style={{ height: "450px", position: "relative" }}>
        <Layout
          style={{
            background:
              "url(https://www.hobbitontours.com/media/1174/hobbiton-movie-set-30.jpg) bottom / cover"
          }}
        >
          <Header transparent title="Billboh" style={{ color: "white" }}>
            <Navigation>
              <a href="billboh/client/src/components/cityHistory.js">
                City History
              </a>
              <a href="billboh/client/src/components/NewsCard.js">News</a>
              {/* <a href="#">Link</a> */}
            </Navigation>
          </Header>
          <Drawer>
            <Navigation>
              <a href="billboh/client/src/components/cityHistory.js">
                City History
              </a>
              <a href="billboh/client/src/components/NewsCard.js">News</a>
              {/* <a href="#">Link</a> */}
            </Navigation>
          </Drawer>
          <Content />
        </Layout>
      </div>
      <div>
        <Router>
          <Route
            exact
            path="/"
            component={() =>
              user ? <Member /> : <LoginSignup setUser={setUser} />
            }
          />
        </Router>
      </div>
    </div>
  );
}
// import member from "Member";

// Form Function
function App() {
  const [developerState, setDeveloperState] = useState({});

  return (
    <div className="card">
      <div>City Name: {developerState.name}</div>
      <div className="btn-group">
        <button
          onClick={() => setDeveloperState({ ...developerState, mood: "lazy" })}
          className="btn btn-danger"
        >
          Search
        </button>
      </div>
    </div>
  );
}

// API Call
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(
      "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=35&gsrsearch="
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      );
    }
  }
}

export default App;
