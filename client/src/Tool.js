import React from "react";
import Ratings from "./Ratings"

export default class Tool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tool : props.tool,
    };
    this.onToolChange = props.onToolChange.bind(this);
  }

  onRatingChange(tool, rating) {
    const currentRating = tool.rating;
    if (tool.rating === rating) { // if they already have this rating -- clear it
      delete tool.rating;
    } else {
      tool.rating = rating;
    }
    this.setState({tool: tool});
    this.onToolChange(tool, { rating: { oldValue: currentRating, newValue: tool.rating}});
  }

  render() {
    const { tool } = this.state;
    return (
      <div className="item">
        <div className="left floated middle aligned ">
          <div id='like' className="ui icon D(ib)" data-tooltip="I like this"
            onClick={() => this.onRatingChange(tool, Ratings.LIKE)}>
            <i className={'thumbs up icon large ' + ((Ratings.LIKE === tool.rating) ? 'selected like' : 'selectable')}></i>
          </div>
          <div className="ui icon D(ib)" data-tooltip="I dislike this"
            onClick={() => this.onRatingChange(tool, Ratings.DISLIKE)}>
            <i className={'thumbs down icon large ' + ((Ratings.DISLIKE === tool.rating) ? 'selected dislike' : 'selectable')}></i>
          </div>
        </div>
        <div className="ui middle aligned">
          <div className="">{tool.name}</div>
        </div>
      </div>
    );
  }
}