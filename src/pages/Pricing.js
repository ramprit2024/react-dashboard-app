import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PricingSectionDashboardNavigations1 from '../components/dashboard-navigations/PricingSectionDashboardNavigations1';
import PricingSectionPricingWhitePattern2 from '../components/pricing-white-pattern/PricingSectionPricingWhitePattern2';
import PricingSectionLogoCloudsWhitePattern3 from '../components/logo-clouds-white-pattern/PricingSectionLogoCloudsWhitePattern3';
import PricingSectionTeamWhitePattern4 from '../components/team-white-pattern/PricingSectionTeamWhitePattern4';
import PricingSectionFootersWhitePattern5 from '../components/footers-white-pattern/PricingSectionFootersWhitePattern5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Pricing() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <PricingSectionDashboardNavigations1 />
      <PricingSectionPricingWhitePattern2 />
      <PricingSectionLogoCloudsWhitePattern3 />
      <PricingSectionTeamWhitePattern4 />
      <PricingSectionFootersWhitePattern5 />
    </React.Fragment>
  );
}

