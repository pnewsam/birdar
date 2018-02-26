import React, { Component } from "react";
import NotableSighting from "./NotableSighting";

export class NotableSightings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notableSightings: []
    };
  }
  componentDidMount() {
    fetch(
      "http://ebird.org/ws1.1/data/notable/region/recent?rtype=subnational1&r=US-MA&fmt=json&maxResults=10"
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          notableSightings: data
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.notableSightings.map((notableSighting, index) => {
          return (
            <NotableSighting
              key={index}
              comName={notableSighting.comName}
              sciName={notableSighting.sciName}
              locName={notableSighting.locName}
              obsDt={notableSighting.obsDt}
            />
          );
        })}
      </div>
    );
  }
}

export default NotableSightings;
