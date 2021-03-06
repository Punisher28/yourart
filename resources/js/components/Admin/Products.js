import React, {Component} from 'react';
import axios from "axios";
import Spinner from "./Spinner";

class Products extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loader: false,
        }
    }

    componentWillMount() {
        axios.get('http://127.0.0.1:8000/admin/products')
            .then(res => {
                if (res.data) {
                    this.setState({data: res.data});
                    console.log(res.data.length);
                    console.log(this.state.data);
                    this.setState({loader: true});
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }

    render() {
        return (

            this.state.loader ? (
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>Category</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Author</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.data.map((object, index) => (
                                <tr key={index}>
                                    <td>{object.id}</td>
                                    <td>{object.login}</td>
                                    <td>{object.first_name}</td>
                                    <td>{object.surname}</td>
                                    <td>{object.email}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            ) : (
                <Spinner/>
            )
        );
    }
}

export default Products;
