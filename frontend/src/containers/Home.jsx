import React, { Component, Fragment } from 'react'
import Navigation from '../components/Navigation'
import { ColoredRow } from '../components/ColoredRow'
import styled from 'styled-components'
import { BigButton, Title } from './../styles/styledComponents'

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
    width: 220px;   
    height: auto;
`;

const IconImage = styled.img`
    width: 100px;   
    height: auto;
    margin: 0;
`;

const IconText = styled.p`
    width: 14ch;   
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
    }

    render() {

        return (
            <Fragment>
                <Navigation />
                <HomeWrapper>
                    <TopHeader>
                        <div class="row" style={{ height: '100px', margin: 'auto' }}>
                            <div class="col s6" style={{ textAlign: 'left', padding: '10% 0' }}>
                                <Title style={{ color: '#fff' }}>
                                    Get social proof < br /> on your <span style={{ color: '#FEA097' }}>abilities.</span>
                                </Title>
                                <BigButton color={'#000'} bgColor={'#F2F6F6'}> Add Reference </BigButton>
                            </div>
                            <div class="col s6">
                                <img style={{ width: '400px' }} src={require('./../assets/saturn.svg')} />
                            </div>
                        </div>
                    </TopHeader>

                    <ColoredRow bgColor={'fff'} flip={true}>
                        <div class="row" style={{ height: '100px', maxWidth: '65ch', margin: 'auto 25%', textAlign: 'center' }}>
                            <Title>
                                we help job seekers gather and share <span style={{ color: '#FEA097' }}>references.</span>
                                Crowdsourcing social proof <span style={{ color: '#FEA097' }}>globally.</span>
                            </Title>
                        </div>
                    </ColoredRow>

                    <ColoredRow bgColor={'F2F6F6'}>
                        <div class="row" style={{ margin: '0 auto 50px', textAlign: 'center' }}>
                            <Title style={{ fontWeight: '500', letterSpacing: '5px' }}>
                                how <span style={{ borderBottom: '2px solid #FEA097', paddingBottom: '5px' }}>it works</span>
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
                        <div class="row" style={{ margin: 'auto', textAlign: 'center' }}>
                            <div class="col s9" style={{ textAlign: 'left', padding: '0 10% 0 15%', maxWidth: '80ch' }}>
                                <Title>
                                    We need to fix the human chain of <span style={{ color: '#FEA097' }}>endorsement.</span>
                                </Title>
                                <p style={{ fontSize: '18px', fontWeight: 'lighter' }}>
                                    A key ingredient to solving the problem of integration is trust. In a multicultural society,
                                    referencing needs to be trustworthy and frictionless. Regardless where on earth it’s coming from.
                                </p>
                            </div>
                            <div class="col s4">
                                <img style={{ width: '250px' }} src={require('./../assets/team.svg')} />
                            </div>
                        </div>
                        <div class="row" style={{ height: '20vh', margin: '5% auto 0', textAlign: 'center' }}>
                            <div class="col s12">
                                <BigButton> Add Reference </BigButton>
                                <BigButton> Add Reference </BigButton>
                            </div>
                        </div>
                    </ColoredRow>

                    <ColoredRow bgColor={'F2F6F6'}>
                        <div class="row" style={{ margin: '0 15% 50px', textAlign: 'left' }}>
                            <p style={{ fontWeight: '500', letterSpacing: '5px' }}>
                                <span style={{ borderBottom: '2px solid #FEA097', paddingBottom: '5px' }}>empowered by</span>
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
