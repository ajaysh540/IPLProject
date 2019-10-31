import React, { Component } from 'react'
import './Main.css'
import ReactDOM from 'react-dom'
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import LeftMenu from '../LeftMenu/LeftMenu';
import Match from '../Match/Match'
import { Redirect } from 'react-router-dom'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: [],
            matches: [],
            loading: true,
            seasonDisplay: '',
            removeMatch: props.removeMatch
        }
        if (!sessionStorage.getItem("loggedIn")) {
            return <Redirect to="/" />
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/seasons')
            .then(async response => {
                this.setState({
                    loading: false,
                    seasons: await response.json()
                })
            }, err => {
                alert('Error loading the data please try again!!!');
                console.log(err)
            });
    }
    getMatch = async (season) => {
        // console.log(this.state.seasons)
        const seasonNumber = parseInt(season) - 1;
        this.setState({ matches: await this.state.seasons[seasonNumber].matchInfo })
        this.setState({ seasonDisplay: this.state.seasons[seasonNumber].season })
    }
    handleChange = (e) => {
        const id = e.target.id;
        const match = this.state.matches.find(element =>
            element._id === id
        )
       document.getElementById("table").style.display="none"
        ReactDOM.render(<Match match={match} close={this.removeMatch} />, document.getElementById("main"));
    }

    removeMatch = () => {ReactDOM.unmountComponentAtNode(document.getElementById("main"))
    document.getElementById("table").style.display="block" }

    render() {
        const columns = [{
            Header: "Id",
            accessor: "_id",
        },
        {
            Header: "City",
            accessor: "city",
            sortable: false
        },
        {
            Header: "Date",
            accessor: "date",
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
            style: {
                border: "1px solid blue"
            },
            sortable: false
        },
        {
            Header: "",
            Cell: ({ row }) => (<div className="btn bg-secondary text-white pointer w-100" role="button" onClick={this.handleChange} id={row._id}>More Details</div>),
        }
        ]


        if (!this.state.loading)
            return (
                <div className="row">

                    <LeftMenu seasons={this.state.seasons} default={this.state.seasons[this.state.seasons.length - 1]._id} change={this.getMatch}></LeftMenu>
                    <div className="col-8">
                        <div id="main" className="container text-center"></div>
                        <div id="table">
                            <div className="navbar bg-dark text-white mt-2 sticky-top rounded"><label className="h3">{this.state.seasonDisplay}</label></div>
                            <ReactTable className="" columns={columns} defaultPageSize={20} data={this.state.matches}></ReactTable>
                        </div>
                    </div>
                </div>);
        else return (<div className="text-center text-dark h3">Loading.......</div>);
    }

}
export default Main;