import axios from 'axios';

export const GET_FLOORS = 'get_floors';
export const GET_WASHROOMS = 'get_washrooms';
export const STORE_BUILDING = 'store_building';

const ROOT_URL="http://localhost:8080";

export function getFloors(building, callback) {
  const request = axios.get(`${ROOT_URL}/listOfFloors?building=${building}`)
  return {
    type: GET_FLOORS,
    payload: request
  }
}

export function getWashrooms(building, floor) {
  const request = axios.get(`${ROOT_URL}/listOfWashroomsOnFloor?building=${building}&floor=${4}&sort=average_rating`);
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
