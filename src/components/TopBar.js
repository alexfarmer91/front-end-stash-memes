import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class TopBar extends React.Component {


    render() {
        return (<Navbar>
            <Navbar.Brand href="/">
                <b>Stash Memes</b>
            </Navbar.Brand>
        </Navbar>)
    }
}