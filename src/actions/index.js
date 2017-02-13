import request from 'superagent';
import landingData from '../data/landing.json';

export const REQUEST_LANDING_LINKS = 'REQUEST_LANDING_LINKS';

export function requestLandingLinks() {
  const data = landingData.socialLinks;

  return {
    type: REQUEST_LANDING_LINKS,
    payload: data
  }
}
