import { createAction } from "@reduxjs/toolkit";
import {
  COUNT_INCREASE,
  COUNT_DECREASE,
  SET_CV_DATA,
  SET_WEATHERS,
  SET_LOADING,
  SET_CITY,
  SET_MESSAGE
} from "./ActionName";
import { API_WEATHER_KEY, API_WEATHER_URL } from "../configs/API";
import { sendRequest } from "../helpers/sendRequest";

export const countIncrease = createAction(COUNT_INCREASE);
export const countDecrease = createAction(COUNT_DECREASE);
export const setCvData = createAction(SET_CV_DATA);
export const setWeathers = createAction(SET_WEATHERS);
export const setLoading = createAction(SET_LOADING);
export const setCity = createAction(SET_CITY);
export const setMessage = createAction(SET_MESSAGE)

export const fetchWeathers = (city) => (dispatch) => {
  dispatch(setLoading(true));

  return sendRequest(
    `${API_WEATHER_URL}?key=${API_WEATHER_KEY}&q=${city}&days=5&aqi=no&alerts=no`
  ).then((data) => {
    dispatch(setWeathers(data));
    dispatch(setLoading(false));
  });
};
