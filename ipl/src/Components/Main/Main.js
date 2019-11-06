import React, { Component } from "react";
import "./Main.css";
import ReactDOM from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import LeftMenu from "../LeftMenu/LeftMenu";
import Match from "../Match/Match";
import { Redirect } from "react-router-dom";
import Search from '../Search/Search'
class Main extends Component {

  constructor() {
    super();
    this.state = {
      seasons: [],
      matches: [],
      loading: true,
      seasonDisplay: "",
      allMatches: []
    };
    if (!sessionStorage.getItem("loggedIn")) {
      return <Redirect to="/" />;
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/getseasons").then(
      async response => {
        this.setState({
          loading: false,
          seasons: await response.json()
        });

      },
      err => {
        alert("Error loading the data please try again!!! " + err);

      }
    );
  }
  getMatch = async season => {
    fetch(`http://localhost:8080/season/${season}`).then(
      async response => {
        this.setState({ allMatches: await response.json() })
        this.state.allMatches.map(r => {
          this.setState({
            loading: false,
            matches: r.matchInfo,
            seasonDisplay: season
          })
          this.setState({ allMatches: this.state.matches })
          return 0;
        },err=>{
          alert("Some Error Occured Please Try After Some Time! \n"+err)
        })
      }
    )
  }
  handleChange = (e) => {
    const id = e;
    const match = this.state.matches.find(element => element._id === id);
    document.getElementById("table").style.display = "none";
    ReactDOM.render(
      <Match match={match} close={this.removeMatch} />,
      document.getElementById("main")
    );
  };

  removeMatch = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("main"));
    document.getElementById("table").style.display = "block";
  };

  onSearch = team => {
    if (team !== "") {
      let match = [];
      match = (this.state.allMatches.filter(m =>
        (m.team1.toUpperCase().search(team.toUpperCase()) !== -1 || m.team2.toUpperCase().search(team.toUpperCase()) !== -1)
      ))
      this.setState({ matches: match })
    }
    else this.getMatch(this.state.seasonDisplay)
  }


  setMatch = () => [
    this.getMatch(this.state.seasonDisplay)
  ]

  render() {
    const columns = [
      {
        Header: "Id",
        accessor: "_id"
      },
      {
        Header: "City",
        accessor: "city",
        sortable: false
      },
      {
        Header: "Date",
        accessor: "date"
      },
      {
        Header: "Team 1",
        accessor: "team1",
        sortable: false
      },
      {
        Header: "Team 2",
        accessor: "team2",
        sortable: false
      },
      {
        Header: "Winner",
        accessor: "winner",
        sortable: false
      },
    ];

    if (!this.state.loading)
      return (
        <div className="row">
          <LeftMenu
            seasons={this.state.seasons}
            default={this.state.seasons[this.state.seasons.length - 1]}
            change={this.getMatch}
          ></LeftMenu>
          <div className="col-12 col-sm-8">
            <div id="main" className="container text-center"></div>
            <div id="table">
              <div className="navbar bg-dark justify-content-between text-white mt-2 sticky-top rounded">
                <label className="h3">{this.state.seasonDisplay}</label>
                <label className="h5">
                  <Search onSearch={this.onSearch} match={this.setMatch} />
                </label>
              </div>
              <ReactTable
                columns={columns}
                defaultPageSize={20}
                data={this.state.matches}
                getTdProps={(state, rowInfo, column, instance) => {
                  return {
                    onClick: (e) => {
                      this.handleChange(rowInfo.row._id)
                    }
                  }
                }}
              ></ReactTable>
            </div>
          </div>
        </div>
      );
    else return <div className="text-center text-dark h3">Loading.......</div>;
  }
}
export default Main;
