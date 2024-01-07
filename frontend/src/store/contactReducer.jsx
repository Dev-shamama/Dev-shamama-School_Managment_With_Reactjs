import { createSlice } from "@reduxjs/toolkit";
// const baseURL = "http://localhost:8080/api/v1";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contact: [],
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
    setContactList: (state, action) => {
      state.contact = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setStatus: (state, action) => {
      const id = action.payload._id;
      state.contact = state.contact.map((item) =>
        item._id === id ? action.payload : item
      );
    },
  },
});

export const {
  setMessage,
  resetMessage,
  setContactList,
  setError,
  resetError,
  setLoading,
  setStatus,
} = contactSlice.actions;
export default contactSlice.reducer;

// GET FEES STUDENTS -- ADMIN
export const getContact = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/viewer/getcontact`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
    const result = await res.json();
    dispatch(setLoading(false));
    if (result.success === true) {
      dispatch(setContactList(result.data));
    } else {
      dispatch(setMessage(result.message));
    }
  } catch (error) {
    dispatch(setLoading(false));
  }
};

// STATUS CHANGE CONTACT
export const statusContact = (id, status) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/viewer/status/getcontact/${id}`,
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

// DELETE CONTACT
export const deleteContact = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/viewer/deletecontact/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
      }
    );
    const result = await res.json();
    dispatch(setLoading(false));

    if (result.success === true) {
      dispatch(setMessage(result.message));
      getContact();
    } else {
      dispatch(setError(result.message));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};
