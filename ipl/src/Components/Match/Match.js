import React, { Component } from 'react'
import './Match.css'
class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match: props.match,
            close: props.close
        }
    }
    render() {
        const match = this.state.match;
        return <div >
            <div className="container mt-5 navbar text-left h4">{(match.date)}</div>
            <section className="justify-content-between border border-dark m-2 p-2 row mt-5 mb-5">
                <div className="col-4"><div className="border bg-primary text-white border-dark rounded btn">{match.team1}</div></div>
                <div className="border border-dark p-2 rounded-circle"> VS</div>
                <div className="col-4"><div className="border border-dark bg-success text-white rounded btn">{match.team2}</div></div>

            </section>
            <button className="btn btn-dark" onClick={this.state.close} >Back</button>

        </div>
    }


}
export default Match;