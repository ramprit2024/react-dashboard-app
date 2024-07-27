import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutSectionDashboardNavigations1 from '../components/dashboard-navigations/AboutSectionDashboardNavigations1';
import AboutSectionApplicationsWhitePattern2 from '../components/applications-white-pattern/AboutSectionApplicationsWhitePattern2';
import AboutSectionDashboardStats3 from '../components/dashboard-stats/AboutSectionDashboardStats3';
import AboutSectionLogoCloudsWhitePattern4 from '../components/logo-clouds-white-pattern/AboutSectionLogoCloudsWhitePattern4';
import AboutSectionFeaturesWhitePattern5 from '../components/features-white-pattern/AboutSectionFeaturesWhitePattern5';
import AboutSectionTeamWhitePattern6 from '../components/team-white-pattern/AboutSectionTeamWhitePattern6';
import AboutSectionCtaWhitePattern7 from '../components/cta-white-pattern/AboutSectionCtaWhitePattern7';
import AboutSectionFootersWhitePattern8 from '../components/footers-white-pattern/AboutSectionFootersWhitePattern8';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function About() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AboutSectionDashboardNavigations1 />
      <AboutSectionApplicationsWhitePattern2 />
      <AboutSectionDashboardStats3 />
      <AboutSectionLogoCloudsWhitePattern4 />
      <AboutSectionFeaturesWhitePattern5 />
      <AboutSectionTeamWhitePattern6 />
      <AboutSectionCtaWhitePattern7 />
      <AboutSectionFootersWhitePattern8 />
    </React.Fragment>
  );
}

