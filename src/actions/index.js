import request from 'superagent';
import landingData from '../data/landing.json';

export const REQUEST_LANDING_LINKS = 'REQUEST_LANDING_LINKS';
export const REQUEST_LANDING_PARAGRAPH = 'REQUEST_LANDING_PARAGRAPH';
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';

export function requestLandingLinks() {
  const data = landingData.socialLinks;

  return {
    type: REQUEST_LANDING_LINKS,
    payload: data
  }
}

export function requestLandingParagraph() {
  const data = landingData.about;

  return {
    type: REQUEST_LANDING_PARAGRAPH,
    payload: data
  }
}

export function requestProjects() {
  const data = landingData.projects;

  return {
    type: REQUEST_PROJECTS,
    payload: data
  }
}
