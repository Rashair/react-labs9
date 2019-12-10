import { EMPLOYEES_LOADED, EMPLOYEE_CREATED } from "./constants";

export const initialState = {
  employees: [],
  employeesFetched: false
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return { ...state, employees, employeesFetched: true };
    }
    case EMPLOYEE_CREATED: {
      const newEmp = action.payload.employee;
      const newEmployees = [...state.employees, newEmp];
      // CAREFUL: You can't modify state variable directly.
      return { ...state, employees: newEmployees };
    }

    default:
      return state;
  }
};

export default appReducer;
