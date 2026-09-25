import { Component } from "react";

class FeedbackOption extends Component {

    render() {
        return(
            <>
              <p>Good: {this.props.good}</p>
              <p>Neutral: {this.props.neutral}</p>
              <p>Bad: {this.props.bad}</p>
              <p>Total: {this.props.total}</p>
              <p>
                Positive feetback:
                {this.props.good > 0
                  ? this.props.positivePercentag
                  : 0}
                %
              </p>
            </>
        )
    }
} 

export default FeedbackOption