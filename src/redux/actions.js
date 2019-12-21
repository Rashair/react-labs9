import {
  EMPLOYEES_LOADED,
  EMPLOYEES_LOADING,
  EMPLOYEES_LOADING_ERROR,
  EMPLOYEE_CREATED,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "./constants";

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user
    }
  };
};

export const loginError = name => {
  return {
    type: LOGIN_ERROR,
    payload: {
      name
    }
  };
};

export const employeesLoaded = employees => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
};

export const employeesLoading = () => {
  return {
    type: EMPLOYEES_LOADING,
    payload: {}
  };
};

export const employeesLoadingError = error => {
  return {
    type: EMPLOYEES_LOADING_ERROR,
    payload: {
      error
    }
  };
};

export const employeeCreated = employee => {
  return {
    type: EMPLOYEE_CREATED,
    payload: {
      employee
    }
  };
};
