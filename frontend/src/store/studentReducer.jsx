import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "students",
  initialState: {
    data: [],
    fees: [],
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    userLoad: (state, action) => {
      state.data = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    resetMessage: (state) => {
      state.message = "";
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetError: (state) => {
      state.error = "";
    },
    setStatus: (state, action) => {
      const id = action.payload._id;
      state.students = state.students.map((item) =>
        item._id === id ? action.payload : item
      );
    },
    setFees: (state, action) => {
      state.fees = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  setMessage,
  resetMessage,
  setStatus,
  setAuthenticated,
  setLoading,
  userLoad,
  setFees,
  setError,
  resetError,
  setData,
} = studentSlice.actions;
export default studentSlice.reducer;

// Admin Login
export const studentLogin = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/user/login`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );
    const result = await res.json();
    dispatch(setLoading(false));
    if (result.success === true) {
      dispatch(setAuthenticated(true));
      localStorage.setItem("token", result.token);
      dispatch(setMessage("Login Successfully"));
    } else {
      dispatch(setError(result.message));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};

// Load User Logged
export const studentLoadData = () => async (dispatch) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
    const result = await res.json();
    dispatch(setLoading(false));
    if (result.success === true) {
      dispatch(setAuthenticated(true));
      dispatch(userLoad(result.data));
    } else {
      dispatch(setAuthenticated(false));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setAuthenticated(false));
  }
};

// Load Students Fees
export const studentFees = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/user/${
        getState().students.data._id
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
      }
    );
    const result = await res.json();
    dispatch(setLoading(false));

    if (result.success === true) {
      dispatch(setAuthenticated(true));
      dispatch(setFees(result.data));
    } else {
      dispatch(setAuthenticated(false));
    }
  } catch (error) {
    dispatch(setAuthenticated(false));
  }
};

// Students Profile Update
export const studentProfileUpdate = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/user/profile/update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(data),
      }
    );
    const result = await res.json();
    dispatch(setLoading(false));

    if (result.success === true) {
      dispatch(setMessage(result.message));
    } else {
      dispatch(setMessage(result.message));
    }
  } catch (error) {
    console.log(error);
  }
};

// Students Password Update
export const studentPasswordUpdate = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/user/password/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(data),
      }
    );
    const result = await res.json();
    dispatch(setLoading(false));

    if (result.success === true) {
      dispatch(setMessage("Update Password Successfully"));
    } else {
      dispatch(setError(result.message));
    }
  } catch (error) {
    console.log(error);
  }
};

// Students Logout
export const studentLogout = () => async (dispatch) => {
  try {
    // const res = await fetch(
    //   `${process.env.REACT_APP_API_URL}/api/v1/user/logout`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       authorization: localStorage.getItem("token"),
    //     },
    //   }
    // );
    // const result = await res.json();
    localStorage.removeItem("token");
    dispatch(setMessage("User Logout Successfully"));
    dispatch(setAuthenticated(false));
    dispatch(setData([]));
  } catch (error) {
    console.log(error);
  }
};
