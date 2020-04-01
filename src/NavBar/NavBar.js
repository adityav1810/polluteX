import React, { Component } from 'react';
import { Nav, Navbar } from "react-bootstrap";

export default class NavBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return ( <
            div >
            <
            Navbar bg = "light"
            variant = "light" >
            <
            Nav className = "mr-auto"
            style = {
                {
                    "font-size": "400% ",
                    "color": "white"
                }
            } >
            <
            Nav.Link href = "/map" > Maps | < /Nav.Link> <
            Nav.Link href = "/psi" > PSI Level | < /Nav.Link> <
            Nav.Link href = "/pm" > PM 2.5 | < /Nav.Link> <
            Nav.Link href = "/uv" > UV Index | < /Nav.Link> <
            Nav.Link href = "/location" > Location | < /Nav.Link> < /
            Nav > <
            /Navbar> < /
            div > )
    }
}