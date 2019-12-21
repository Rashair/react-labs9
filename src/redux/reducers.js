import {
  EMPLOYEES_LOADED,
  EMPLOYEES_LOADING,
  EMPLOYEES_LOADING_ERROR,
  EMPLOYEE_CREATED
} from "./constants";

export const initialState = {
  employees: [],
  isLoading: true,
  error: null,
  employeesFetched: false
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADING: {
      return { ...state, loading: true, error: null };
    }

    case EMPLOYEES_LOADING_ERROR: {
      const { error } = action.payload;
      return { ...state, error, isLoading: false };
    }

    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      return { ...state, employees, employeesFetched: true, isLoading: false };
    }

    case EMPLOYEE_CREATED: {
      const newEmp = action.payload.employee;
      const newEmployees = [...state.employees, newEmp];
      return { ...state, employees: newEmployees };
    }

    default:
      return state;
  }
};

export default appReducer;
