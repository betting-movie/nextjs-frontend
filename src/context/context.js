import React from "react";

const snackbarActions = {
  SHOW_SNACKBAR: "showSnackbar",
  HIDE_SNACKBAR: "hideSnackbar",
};

const cartFilterActions = {
  MENTOR_FILTER: "cartFilter",
};

const cartListActions = {
  CART_LIST: "cartListInfo",
};
// Initialize & Define states

const initialState = {
  message: "",
  openSnackbar: false,
  severityType: "success",
  filterSelected: "All",
  cartList: [],
};

// Reducer

const reducer = (state, action) => {
  switch (action.type) {
    // Snackbar
    case snackbarActions.SHOW_SNACKBAR: {
      const newstate = {
        ...state,
        openSnackbar: true,
        message: action.obj.message,
        severityType: action.obj.severityType,
      };
      return newstate;
    }

    case cartFilterActions.MENTOR_FILTER: {
      const newstate = {
        ...state,

        filterSelected: action.obj.filterSelected,
      };

      return newstate;
    }

    case cartListActions.CART_LIST: {
      const newstate = {
        ...state,

        cartList: action.obj.cartList,
      };

      return newstate;
    }

    default:
      return state;
  }
};

export const Context = React.createContext();

export const CustomContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    message: state.message,
    openSnackbar: state.openSnackbar,
    severityType: state.severityType,
    filterSelected: state.filterSelected,
    cartList: state.cartList,

    // Snackbar
    showSnackbar: (message, severity) => {
      const obj = {
        message,
        severityType: severity,
      };
      dispatch({ type: snackbarActions.SHOW_SNACKBAR, obj });
    },
    hideSnackbar: () => {
      dispatch({ type: snackbarActions.HIDE_SNACKBAR });
    },

    cartFilter: (filterSelected) => {
      console.log(filterSelected);
      const obj = {
        filterSelected,
      };
      dispatch({ type: cartFilterActions.MENTOR_FILTER, obj });
    },

    cartListInfo: (cartList) => {
      const obj = {
        cartList,
      };
      dispatch({ type: cartListActions.CART_LIST, obj });
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
