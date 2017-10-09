import React, {Component} from "react";
import objToQuery from "./objToQuery"
import ToolList from "./ToolList";
import axios from 'axios';
import Ratings from './Ratings';

class App extends Component {
  state = {
    ratingsCount  : {},
    tools         : []
  };

  constructor(props) {
    super(props);
    this.findTools({offset : 0, limit : 5})
      .then(res => {
        let ratingsCount = {};
        ratingsCount[Ratings.LIKE] = 0;
        ratingsCount[Ratings.DISLIKE] = 0;
        this.setState({tools : res.tools, ratingsCount : ratingsCount});
      })
      .catch(() => {
        // ignore error for now; will show a 'no tools' page
      });
  }

  findTools(filter) {
    let url = 'api/tools';
    if (filter) {
      url += '?' + objToQuery(filter);
    }
    return axios.get(url)
      .then(res => {
        return res.data;
      });
  }

  onToolChange = (tool, changes) => {
    let ratingChanges = changes.rating;
    if (ratingChanges) {
      let ratingsCount = this.state.ratingsCount;
      if (ratingChanges.newValue) {
        ratingsCount[ratingChanges.newValue]++;
      }
      if (ratingChanges.oldValue) {
        ratingsCount[ratingChanges.oldValue]--;
      }
      this.setState({ratingsCount : ratingsCount});

      // keep track of the ratings -- when 3 ratings have been received load in more tools
      let totalRatingsCount = Object.keys(ratingsCount).reduce(function(previous, key) {
        return previous + ratingsCount[key];
      }, 0);
      if (totalRatingsCount >= 3) {
        this.findTools()
          .then(res => {
            this.setState({tools : res.tools});
            return res.data;
          });
      }
    }
  };

  render() {
    const {tools} = this.state;
    return (
      <div className="App">
        <div className="ui items">
          <div className="item">
            <div className="middle aligned content">
              <h4>What is your opinion of these front-end tools and frameworks</h4>
            </div>
            <div className="ui right floated">
              <div className="ui icon icon-spacer D(ib)" data-tooltip="I like this">
                <i className="thumbs up icon large selected like"></i>
                <span>{this.state.ratingsCount[Ratings.LIKE]}</span>
              </div>
              <div className="ui icon D(ib)" data-tooltip="I dislike this">
                <i className="thumbs down icon large selected dislike"></i>
                <span>{this.state.ratingsCount[Ratings.DISLIKE]}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ToolList tools={tools} onToolChange={this.onToolChange} />
        </div>
      </div>
    );
  }
}

export default App;
