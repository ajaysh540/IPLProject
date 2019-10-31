import React,{Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
class Table extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(async json => {
            this.setState({ data: await json })
            this.setState({ loading: false })
        });
    }
    render() {
        const columns=[{
            Header:"Album Id",
            accessor:"albumId"
        },{
            Header:"Id",
            accessor:"id"
        },{
            Header:"Title",
            accessor:"title"
        },{
            Header:"Url",
            accessor:"url"
        },
    ]
        
        return (<ReactTable columns={columns}></ReactTable>)
    }
}

export default Table;