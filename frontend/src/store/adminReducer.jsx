import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    data: [],
    students: [],
    studentsDetail: {},
    totalUser: 0,
    isAuthenticated: false,
    token: "",
    loading: true,
    error: null,
  },
  reducers: {
    setTotalUser: (state, action) => {
      state.totalUser = action.payload;
    },
    userLoad: (state, action) => {
      state.data = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setStatus: (state, action) => {
      const id = action.payload._id;
      state.students = state.students.map((item) =>
        item._id === id ? action.payload : item
      );
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setStudent: (state, action) => {
      state.students = action.payload;
    },
    setStudentsDetail: (state, action) => {
      state.studentsDetail = action.payload;
    },
  },
});

export const {
  userLoad,
  setAuthenticated,
  setToken,
  setMessage,
  resetMessage,
  setStatus,
  setLoading,
  setData,
  setError,
  resetError,
  setStudent,
  setStudentsDetail,
  setTotalUser,
} = adminSlice.actions;
export default adminSlice.reducer;

// Load User Logged
export const userLoadData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/me`,
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
      dispatch(userLoad(result.user));
    } else {
      dispatch(setAuthenticated(false));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setAuthenticated(false));
  }
};

// Admin Password Update
export const adminPasswordUpdate = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/password/update`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
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
    dispatch(setLoading(false));
    console.log(error);
  }
};

// Admin Login
export const adminLogin = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/login`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await res.json();
    console.log(result);
    dispatch(setLoading(false));
    if (result.success === true) {
      dispatch(setAuthenticated(true));
      dispatch(setToken(result.token));
      localStorage.setItem("token", result.token);
      dispatch(setMessage("Login Successfully"));
    } else {
      dispatch(setError(result.message));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error.message);
  }
};

// Admin Profile Update
export const adminProfileUpdate = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/profile/update`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const result = await res.json();
    dispatch(setLoading(false));

    if (result.success === true) {
      dispatch(setMessage(result.message));
    } else {
      dispatch(setError(result.message));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};

// Admin User Profile Update
export const adminUserProfileUpdate = (id, data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/user/profile/update/${id}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const result = await res.json();
    dispatch(setLoading(false));

    if (result.success === true) {
      dispatch(setMessage("User Profile Update Successfully"));
    } else {
      dispatch(setError(result.message));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};

// REGISTER STUDENTS
export const createStudent = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/user/register`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const result = await res.json();
    dispatch(setLoading(false));
    if (result.success === true) {
      dispatch(setMessage("Students Register Successfully"));
    } else {
      dispatch(setError("Students Register Not Successfully"));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};

// DELETE STUDENTS
export const deleteStudent = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/user/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const result = await res.json();
    dispatch(setLoading(false));
    if (result.success === true) {
      dispatch(setMessage("Delete Successfully"));
    } else {
      dispatch(setError("Delete Not Successfully"));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};

// Students Status
export const statusStudent = (id, status) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/user/status/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ status }),
      }
    );
    const result = await res.json();
    dispatch(setLoading(false));

    if (result.success === true) {
      dispatch(setMessage("Status Update Successfully"));
      dispatch(setStatus(result.user));
    } else {
      dispatch(setError("Status Update Not Successfully"));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};

// Admin Logout
export const adminLogout = () => async (dispatch) => {
  try {
    // dispatch(setLoading(true));
    // const res = await fetch(
    //   `${process.env.REACT_APP_API_URL}/api/v1/admin/logout`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: localStorage.getItem("token"),
    //     },
    //   }
    // );
    // const result = await res.json();
    // console.log(result);
    // dispatch(setLoading(false));

    // if (result.success === true) {
      localStorage.removeItem("token");
      dispatch(setMessage("Admin Logout Successfully"));
      dispatch(setLoading(false));
    dispatch(setAuthenticated(false));
    dispatch(setData([]));
    // } else {
    // dispatch(setError(result.message));
    // }
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};

// GET ALL USER
export const getAllStudent = () => async (dispatch) => {
  try {
    // dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
      }
    );
    const result = await res.json();
    console.log(result);
    // dispatch(setLoading(false));
    if (result.success === true) {
      dispatch(setStudent(result.user));
      dispatch(setTotalUser(result.totalUser));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};

// GET SINGLE USER
export const getSingleStudent = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/user/${id}`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const result = await res.json();
    dispatch(setLoading(false));
    // console.log(result);
    if (result.success === true) {
      dispatch(setStudentsDetail(result.user));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};
