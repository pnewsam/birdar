import { lifecycle } from "recompose";

function componentDidMount() {
  fetch(
    "http://ebird.org/ws1.1/data/notable/region/recent?rtype=subnational1&r=US-MA&fmt=json&maxResults=10"
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({
        notableSightings: data
      });
    });
}

export default lifecycle({ componentDidMount });
