import {
  showDeletableCars, createCar, removeCar, showDetailCars,
} from '../../services/carAPIFeatures';

const GET_DELETABLE_CARS_LIST = 'CarsShow/cars/GET_DELETABLE_CARS_LIST';
const GET_DETAIL_CARS_LIST = 'CarsShow/cars/GET_DETAIL_CARS_LIST';
const CREATE_CAR = 'CarsShow/cars/CREATE_CAR';
const DELETE_CAR = 'CarShow/cars/DELETE_CAR';

const getDeletableCarsList = () => async (dispatch) => {
  const deletableCarsList = await showDeletableCars();
  dispatch({
    type: GET_DELETABLE_CARS_LIST,
    payload: deletableCarsList,
  });
};

const getDetailCarsList = () => async (dispatch) => {
  const detailCarsList = await showDetailCars();
  dispatch({
    type: GET_DETAIL_CARS_LIST,
    payload: detailCarsList,
  });
};

const addCarAction = (name, fd) => async (dispatch) => {
  const car = {
    name,
    image_data: fd,
  };

  await createCar(car);

  dispatch({
    type: CREATE_CAR,
    payload: car,
  });
};

const removeCarAction = (id) => async (dispatch) => {
  await removeCar(id);

  dispatch({
    type: DELETE_CAR,
    payload: id,
  });
};

const detailCarAction = (id) => async (dispatch) => {
  const carSpecs = await detailCarAction(id);

  // dispatch({
  //   type: DETAIL_CAR,
  //   payload: carSpecs,
  // });
};

const addDeleteCarsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DELETABLE_CARS_LIST:
      return [...action.payload];
    case GET_DETAIL_CARS_LIST:
      return [...action.payload];
    case CREATE_CAR:
      return [...state, action.payload];
    case DELETE_CAR:
      return state.filter((car) => car.id !== action.payload);
    default:
      return state;
  }
};

export {
  getDeletableCarsList, addDeleteCarsReducer, addCarAction, removeCarAction,
  getDetailCarsList, detailCarAction,
};
