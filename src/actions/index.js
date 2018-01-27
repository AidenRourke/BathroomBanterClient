import axios from 'axios';

export const LOGIN = 'login';
export const GET_FLOORS = 'get_floors';
export const GET_WASHROOMS = 'get_washrooms';
export const STORE_INFORMATION = 'store_information';
export const VIEW_WASHROOM = 'view_washroom';

const ROOT_URL="http://localhost:8080/";

export function login(username, password) {
  return {
    type: LOGIN,
  }
}

export function getFloors(building, callback) {
  const request = axios.get(`${ROOT_URL}listOfFloors?building=${building}`)
  return {
    type: GET_FLOORS,
    payload: request
  }
}

export function getWashrooms(building, floor, gender, sort, callback) {
  const request = axios.get(`${ROOT_URL}listOfWashroomsOnFloor?building=${building}&floor=${floor}&gender=${gender}&sort=${sort}`)
    .then(callback(building, floor, gender))

  return {
    type: GET_WASHROOMS,
    payload: request
  }
}

export function storeInformation(building, gender, sort) {
  return {
    type: STORE_INFORMATION,
    payload: {
      building,
      gender,
      sort
    }
  }
}

export function viewWashroom(id, callback) {
  const request = axios.get(`${ROOT_URL}washroom?id=${id}`)
    .then(callback())

  return {
    type: VIEW_WASHROOM,
    payload: request
  }
}
