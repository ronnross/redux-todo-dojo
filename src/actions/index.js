import axios from 'axios';

export const REQUEST_SHIPS = 'REQUEST_SHIPS';
export const RECEIVE_SHIPS = 'RECEIVE_SHIPS';
export const FETCH_SHIPS = 'FETCH_SHIPS';

export function requestProjects(params) {
  return {
    type: REQUEST_SHIPS,
    params
  };
}

export function fetchProjects(params) {
  return {
    type: FETCH_SHIPS,
    response: axios.get('http://swapi.co/api/starships')
  };
}
