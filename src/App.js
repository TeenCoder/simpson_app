import React from "react";
import axios from "axios";
import Quote from "./Quote";

class App extends React.Component {
  state = {
    isLoading: true,
    quotes: []
  };

  getQuotes = async () => {
    const { data } = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=20"
    );
    this.setState({ quotes: data, isLoading: false });
  };

  componentDidMount() {
    this.getQuotes();
  }

  render() {
    const { quotes } = this.state;

    return (
      <section>
        {this.state.isLoading ? (
          "loading..."
        ) : (
          <div>
            {quotes.map((data, index) => (
              <Quote img={data.image} name={data.character} quote={data.quote} key={index}/>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
