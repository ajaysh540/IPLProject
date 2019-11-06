import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import './LeftMenu.css'

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: props.seasons,
            default: props.default,
            handleSeason:props.change,
        }
        props.change(this.state.default);
        this.handleChange=this.handleChange.bind();
    }
handleChange=(e)=>{
    // console.log(e.target.value)
    const v=e.target.value; 
    this.setState({default: v})
    this.state.handleSeason(v);
}
componentDidMount(){
}
    render() {
        return <div className="w-100 sticky-top h-25 h4 col-xs-12 col-sm-3 btn bg-dark text-white text-center m-2 stick">
            Filter By Season
        <hr className="bg-light" />
            <select className="w-50 h5 justify-content-between bg-white text-dark btn-dark b rounded"
                name="seasons" defaultValue={this.state.default} onChange={this.handleChange}>
                {this.state.seasons.map(season =>
                    <option name="season" key={season} value={season}>{season}</option>)
                }
            </select>
        </div>
    }
}
export default LeftMenu;