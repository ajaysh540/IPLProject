import React, { Component } from "react";
import "./Match.css";
class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: props.match,
      close: props.close,
      matchDetails: [],
      details: []
    };
  }
  async componentDidMount() {
    let id = Number.parseInt(this.state.match._id)
    fetch(`http://localhost:8080/match/${id}`).then(async res => { this.setState({ matchDetails: await res.json() }) });
  }
  render() {
    const match = this.state.match;
    return (
      <div className=" ">
        <div className="align-content-between container mt-5 navbar text-left h4">{match.date}
          <button className="btn btn-dark" onClick={this.state.close}>
            Back
        </button></div>
        <hr className="bg-dark" />
        <div className="text-center m-2 p-2 row mt-5 mb-5">
          <div className="col-4">
            <div className="border team border-danger rounded btn">
              {match.team1}
            </div>
          </div>
          <div className="col-4 p-2 text-success rounded-circle">------VS------</div>
          <div className="col-4">
            <div className="border border-primary team rounded btn">
              {match.team2}
            </div>
          </div>
        </div>
        <div>
          <div className="text-center">
            <div className="row data-match">
              <div className="col-5"><b>Venue:</b> {match.venue}</div>
              <div className="offset-1 col-5"><b>City:</b> {match.city}</div>
            </div><hr className="bg-dark" />
            <div className="row data-match mt-3">
              <div className="col-4"><b>Toss Winner:</b> {match.tossWinner}</div>
              <div className="col-4"><b>Toss Decision:</b> {match.tossDecision}</div>
              <div className="col-4"><b>Winner:</b> {match.winner}</div>
            </div><hr className="bg-dark" />
            <div className="row data-match mt-3">
              <div className="col-3"> <b>Win By Runs:</b> {match.winByRuns}</div>
              <div className="col-3"> <b>Win By Wickets:</b> {match.winByWickets}</div>
              <div className="col-3"><b>Player Of Match:</b> {match.playerOfMatch}</div>
              <div className="col-3"> <b>Result:</b> {match.result}</div>
            </div><hr className="bg-dark" />
            <div className="row data-match mt-3">
              <div className="col-3"><b>DlApplied:</b> {match.dlApplied}</div>
              <div className="col-3"><b>Umpire1:</b> {match.umpire1}</div>
              <div className="col-3"><b>Umpire2:</b> {match.umpire2}</div>
              <div className="col-3"><b>Umpire3:</b> {match.umpire3}</div>
            </div></div><hr className="bg-dark" />
        </div>

      </div>
    );
  }
}
export default Match;
