import axios from 'axios';

export const LOGIN = 'login';
export const GET_FLOORS = 'get_floors';
export const GET_WASHROOMS = 'get_washrooms';
export const STORE_BUILDING = 'store_building';
export const VIEW_WASHROOM = 'view_washroom';

const ROOT_URL="http://localhost:8080/";

export function login(username, password, gender) {
  return {
    type: LOGIN,
    payload: gender
  }
}

export function getFloors(building, callback) {
  const request = axios.get(`${ROOT_URL}listOfFloors?building=${building}`)
  return {
    type: GET_FLOORS,
    payload: request
  }
}

export function getWashrooms(building, floor, gender, callback) {
  const request = axios.get(`${ROOT_URL}listOfWashroomsOnFloor?building=${building}&floor=${floor}&gender=${gender}&sort=average_rating`)
    .then(callback(building, floor, gender))

  return {
    type: GET_WASHROOMS,
    payload: request
  }
}

export function storeBuilding(building) {
  return {
    type: STORE_BUILDING,
    payload: building
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
