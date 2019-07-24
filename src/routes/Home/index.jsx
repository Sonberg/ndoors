import React from 'react'
import Top from './sections/Top';
import Crowdsourcing from './sections/Crowdsourcing';
import HowItsWork from './sections/HowItsWork';

export default () => (
  <>
    <Top />
    <Crowdsourcing />
    <HowItsWork />
    <div className="bg-primary" style={{ minHeight: '25vh' }} />
  </ >
)