import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ColoredRow } from '../components/ColoredRow'
import styled from 'styled-components'
import { BigButton, Title, PinkHighligt, PinkUnderline } from './../styles/styledComponents'

const HomeWrapper = styled.section`
    background-color: #F2F6F6;
`;

const TopHeader = styled.div`
    background-color: #6C9F9B;
    height: 70vh;
    padding: 5% 15% 0;
    width: 100%;
    margin: 0;
`;

const LogoWrapper = {
    textAlign: 'center',
    margin: '70px 10% 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const LogoImage = styled.img`
    width: 60%;   
    height: auto;
`;

const IconImage = styled.img`
    width: 60%;   
    height: auto;
    margin: 0;
`;

const IconText = styled.p`
    max-width: 14ch;   
    height: auto;
    padding-top: 10px; 
    margin: auto;
    font-weight: bold;
    text-align: center;
`;

const Footer = styled.div`
    min-height: 25vh;
    background-color: #6C9F9B;
`;

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.logIn = this.logIn.bind(this)
    }
    componentDidMount() {
        if (localStorage.getItem('loggedIn')) {
            this.props.history.push('/overview');
        }
    }

    logIn() {
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('user', 'evaterry');
        localStorage.setItem('email', 'email@email.com');
        this.props.history.push('/overview')
    }

    render() {
        return (
            <Fragment>
                <HomeWrapper>
                    <TopHeader>
                        <div class="row" style={{ height: '100px', margin: 'auto' }}>
                            <div class="col s6" style={{ textAlign: 'left', padding: '10% 0' }}>
                                <Title style={{ color: '#fff' }}>
                                    Get social proof < br /> on your <PinkHighligt>abilities.</PinkHighligt>
                                </Title>
                                <Link to='/add-reference'>
                                    <BigButton color={'#000'} bgColor={'#F2F6F6'}> Add Reference </BigButton>
                                </Link>
                            </div>
                            <div class="col s6">
                                <img style={{ width: '90%', height: 'auto' }} src={require('./../assets/saturn.svg')} />
                            </div>
                        </div>
                    </TopHeader>

                    <ColoredRow bgColor={'fff'} flip={true}>
                        <div class="row" style={{ height: '100px', maxWidth: '70ch', textAlign: 'center' }}>
                            <Title>
                                we help job seekers gather and share <PinkHighligt>references.</PinkHighligt> Crowdsourcing social proof <PinkHighligt>globally.</PinkHighligt>
                            </Title>
                        </div>
                    </ColoredRow>

                    <ColoredRow bgColor={'F2F6F6'}>
                        <div class="row" style={{ margin: '0 auto 50px', textAlign: 'center' }}>
                            <Title style={{ fontWeight: '500', letterSpacing: '5px' }}>
                                how <PinkUnderline>it works</PinkUnderline>
                            </Title>
                        </ div>
                        <div class="row" style={{ textAlign: 'center', margin: '70px 10%' }}>
                            <div class="col s3">
                                <IconImage src={require('./../assets/icon-work.svg')} />
                                <IconText>Add your references</IconText>
                            </div>
                            <div class="col s3">
                                <IconImage src={require('./../assets/icon-phone.svg')} />
                                <IconText>Wait for referent to verify</IconText>
                            </div>
                            <div class="col s3">
                                <IconImage src={require('./../assets/icon-letter.svg')} />
                                <IconText>Share references with employers</IconText>
                            </div>
                            <div class="col s3">
                                <IconImage src={require('./../assets/icon-handshake.svg')} />
                                <IconText>Land your dreamjob</IconText>
                            </div>
                        </div>
                    </ColoredRow>

                    <ColoredRow bgColor={'fff'} flip={true} >
                        <div class="row" style={{ margin: 'auto', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <div class="col s4" style={{ textAlign: 'left', maxWidth: '80ch' }}>
                                <Title>
                                    We need to fix the human chain of <PinkHighligt>endorsement.</PinkHighligt>
                                </Title>
                                <p style={{ fontSize: '1.12rem', fontWeight: 'lighter' }}>
                                    A key ingredient to solving the problem of integration is trust. In a multicultural society,
                                    referencing needs to be trustworthy and frictionless. Regardless where on earth it’s coming from.
                                </p>
                            </div>
                            <div class="col s4" style={{ textAlign: 'left' }}>
                                <img style={{ width: '50%' }} src={require('./../assets/team.svg')} />
                            </div>
                        </div>
                        <div class="row" style={{ height: '20vh', margin: '5% auto 0', textAlign: 'center' }}>
                            <div class="col s12">
                                <Link to='/add-reference'>
                                    <BigButton> Add Reference </BigButton>
                                </Link>
                                <BigButton onClick={this.logIn}> Log in </BigButton>
                            </div>
                        </div>
                    </ColoredRow>

                    <ColoredRow bgColor={'F2F6F6'}>
                        <div class="row" style={{ margin: '0 15% 50px', textAlign: 'left' }}>
                            <p style={{ fontWeight: '500', letterSpacing: '5px' }}>
                                <PinkUnderline>empowered by</PinkUnderline>
                            </p>
                        </ div>
                        <div class="row" style={LogoWrapper}>
                            <div class="col s4">
                                <LogoImage src={require('./../assets/logo_AF.png')} />
                            </div>
                            <div class="col s4">
                                <LogoImage src={require('./../assets/logo_jobtech.png')} />
                            </div>
                            <div class="col s4">
                                <LogoImage src={require('./../assets/logo_46elks.png')} />
                            </div>
                        </div>
                    </ColoredRow>
                </HomeWrapper>
                <Footer />
            </Fragment >
        )
    }
}
