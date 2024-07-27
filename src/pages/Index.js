import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeadersDark1 from '../components/headers-dark/IndexSectionHeadersDark1';
import IndexSectionLogoCloudsWhitePattern2 from '../components/logo-clouds-white-pattern/IndexSectionLogoCloudsWhitePattern2';
import IndexSectionFeaturesWhitePattern3 from '../components/features-white-pattern/IndexSectionFeaturesWhitePattern3';
import IndexSectionTeamWhitePattern4 from '../components/team-white-pattern/IndexSectionTeamWhitePattern4';
import IndexSectionTestimonialsWhitePattern5 from '../components/testimonials-white-pattern/IndexSectionTestimonialsWhitePattern5';
import IndexSectionCtaWhitePattern6 from '../components/cta-white-pattern/IndexSectionCtaWhitePattern6';
import IndexSectionFootersWhitePattern7 from '../components/footers-white-pattern/IndexSectionFootersWhitePattern7';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersDark1 />
      <IndexSectionLogoCloudsWhitePattern2 />
      <IndexSectionFeaturesWhitePattern3 />
      <IndexSectionTeamWhitePattern4 />
      <IndexSectionTestimonialsWhitePattern5 />
      <IndexSectionCtaWhitePattern6 />
      <IndexSectionFootersWhitePattern7 />
    </React.Fragment>
  );
}

