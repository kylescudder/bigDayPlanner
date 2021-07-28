import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';
import { Navbar, Row, Col, Nav } from 'react-bootstrap'
import headerLogo from '../../images/KSRB.svg'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminLogin: false,
    };
  }
    componentDidCatch() {
        if (document.location.href.indexOf('guestGroupID') === -1){ 
            this.setState({
                adminLogin: true,
            });
        }
        
    }
    render() {
        const {
            adminLogin
        } = this.state;
        return ( 
            <div>
                {adminLogin ? (
                    <header className="header">
                        <Link to="/"><h1 className="title">BigDayPlanner</h1></Link>
                        <AuthOptions />
                    </header>
                ) : (
                    <div>
                        <header className="header guestHeaderBG">
                            <Row>
                                <Col>
                                    <div class="headerContainer">
                                        <div class="vertical-center">
                                                <img src={headerLogo} className="headerLogo" alt="KS/RB Logo" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </header>
                        <Navbar expand="lg" className="navbarHeader">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto mr-auto">
                                <Nav.Link href="Home">HOME</Nav.Link>
                                    <Nav.Link href="Ceremony">CEREMONY</Nav.Link>
                                    <Nav.Link href="Reception">RECEPTION</Nav.Link>
                                    <Nav.Link href="Numbers">NUMBERS</Nav.Link>
                                    <Nav.Link href="Menu">MENU</Nav.Link>
                                    <Nav.Link href="Timing">TIMING</Nav.Link>
                                    <Nav.Link href="SongChoice">SONG CHOICE</Nav.Link>
                                    <Nav.Link href="OtherInfo">OTHER INFO</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                )}
            </div>
         );
    }
}
 
export default Header;