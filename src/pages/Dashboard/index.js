import React, { Component } from 'react';

import Header from '../../components';
import NavbarCartoons from "./utils/navbar";
import Logo from "./utils/logo";
import {getCartoonsBySearch} from "../../server/cartoons";
import Cartoons from "./Cartoons";
import Loading from "./utils/Loading";

export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            cartoonsArray: [],
            isFetch: true
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        fetch('http://localhost:3000/api/admin', { headers: new Headers({ 'Authorization': `Bearer ${token}` })})
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Oops! Ocurrio un error. :(");
            })
            .then(user => this.setState({ user }))
            .catch(e => console.log(e));

        ///// Cartoons /////

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://rickandmortyapi.com/api/character/", requestOptions)
            .then(response => response.json())
            .then( responseJson => this.setState({ cartoonsArray : responseJson.results, isFetch: false }))
    }

    handleSearch = async (search) => {
        const responseJson = await getCartoonsBySearch(search);
        this.setState({ cartoonsArray: responseJson.results ,isFetch: false })
    }

    render() {
        const { cartoonsArray, isFetch} = this.state

        if(isFetch){
            return (
                <Loading />
            )
        }
        return (
            <div className="col-md-12">
                <NavbarCartoons />
                <Logo />
                <section className="cartoons-container">
                    {
                        cartoonsArray.map((cartoon) => <Cartoons name={cartoon.name}
                                                                 status={cartoon.status}
                                                                 species={cartoon.species}
                                                                 gender={cartoon.gender}
                                                                 images={cartoon.image}
                                                                 key={cartoon.id}/>)

                    }

                </section>
            </div>
        );
    }
}
