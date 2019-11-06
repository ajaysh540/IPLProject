import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            onSearch: props.onSearch,
            setMatch:props.match
        }
    }
    handleChange = (e) => {
        let x=e.target.value ;
        this.setState({ value: x})
        this.state.onSearch(x)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const x=this.state.value
        this.setState({value:''})
        this.state.onSearch(x)
    }
    render() {
        return (<label><form onSubmit={this.handleSubmit}>
            <input value={this.state.value} className="rounded p-1" onChange={this.handleChange} onBlur={this.setMatch} placeholder="Search Teams" />
        </form>
            </label>);}

}

export default Search;