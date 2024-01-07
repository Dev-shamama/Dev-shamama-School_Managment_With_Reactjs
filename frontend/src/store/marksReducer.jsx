import { createSlice } from "@reduxjs/toolkit";
// const baseURL = "/api/v1";

export const marksSlice = createSlice({
  name: "marks",
  initialState: {
    marks: [],
    singleMarks: [],
    loading: false,
    error: null,
  },
  reducers: {
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
    setMarksList: (state, action) => {
      state.marks = action.payload;
    },
    setSingleMarks: (state, action) => {
      state.singleMarks = action.payload;
    },
    
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setStatus: (state, action) => {
      const id = action.payload._id;
      state.marks = state.marks.map((item) =>
        item._id === id ? action.payload : item
      );
    },
  },
});

export const {
  setMessage,
  resetMessage,
  setMarksList,
  setSingleMarks,
  setError,
  resetError,
  setLoading,
  setStatus,
} = marksSlice.actions;
export default marksSlice.reducer;

// GET FEES STUDENTS -- ADMIN
export const getMarks = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/admin/getmarks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
    const result = await res.json();
    dispatch(setLoading(false));
    if (result.success === true) {
      dispatch(setMarksList(result.data));
    } else {
      dispatch(setMessage(result.message));
    }
  } catch (error) {
    dispatch(setLoading(false));
  }
};

// GET FEES STUDENTS -- ADMIN
export const getMarksSingleAdmin = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/admin/getmarks/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
    const result = await res.json();
    // console.log(result)
    dispatch(setLoading(false));
    if (result.success === true) {
      dispatch(setSingleMarks(result.data));
    } else {
      dispatch(setMessage(result.message));
    }
  } catch (error) {
    dispatch(setLoading(false));
  }
};

// GET STUDENTS MARKS SINGLE
export const getMarksSingle = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/user/getmarkssingle`,
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
      dispatch(setMarksList(result.data));
    } else {
      dispatch(setMessage(result.message));
    }
  } catch (error) {
    dispatch(setLoading(false));
  }
};


export const statusMarks = (id, status) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/marks/status/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ status }),
      }
    );
    const result = await res.json();
    dispatch(setLoading(false));

    if (result.success === true) {
      dispatch(setMessage("Status Update Successfully"));
      dispatch(setStatus(result.data));
    } else {
      dispatch(setError("Status Update Not Successfully"));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};