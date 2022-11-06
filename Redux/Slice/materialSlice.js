import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import MaterialService from '../Services/materialService';

export const getMaterial = createAsyncThunk(
  'material/getmaterial',
  async (token, thunkAPI) => {
    try {
      const response = await MaterialService.getMaterialService();
      // console.log(response.data, 'response')
      return response;
    } catch (error) {
      console.log(error, 'from getmmaterial');
      const {message} = error;
      // console.log(error.response.data.error[0].msg, 'from getmmaterial');

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const postMaterial = createAsyncThunk(
  'material/postmaterial',
  async (data, thunkAPI) => {
    try {
      return await MaterialService.postMaterialService(data);
    } catch (error) {
      console.log(error, 'error');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const updateMaterial = createAsyncThunk(
  'material/updatematerial',
  async (data, thunkAPI) => {
    try {
      return await MaterialService.updateMaterialService(data);
    } catch (error) {
      console.log(error, 'error');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const subAddMaterialAction = createAsyncThunk(
  'material/Addmaterial',
  async (data, thunkAPI) => {
    try {
      return await MaterialService.addSubMaterialService(data);
    } catch (error) {
      console.log(error, 'error');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const subUpdateMaterialAction = createAsyncThunk(
  'material/updatematerial',
  async (data, thunkAPI) => {
    try {
      return await MaterialService.subUpdateMaterialService(data);
    } catch (error) {
      console.log(error, 'error');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const deleteMaterial = createAsyncThunk(
  'material/deletematerial',
  async (data, thunkAPI) => {
    try {
      return await MaterialService.deleteMaterialService(data);
    } catch (error) {
      // console.log(error, 'deletederror');
      const {message} = error;
      console.log(error.response.data, 'deletedresponse');

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const subDeleteMaterial = createAsyncThunk(
  'material/subdeletematerial',
  async (data, thunkAPI) => {
    try {
      return await MaterialService.subDeleteMaterialService(data);
    } catch (error) {
      // console.log(error, 'deletederror');
      const {message} = error;
      console.log(error.response.data, 'deletedresponse');

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

const initialState = {
  material: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  refresh: null,
};

const materialSlice = createSlice({
  name: 'material',
  initialState,

  extraReducers: {
    [getMaterial.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getMaterial.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.material = action.payload;
      state.refresh = action.payload.msg;
    },
    [getMaterial.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [postMaterial.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postMaterial.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      console.log(action.payload.data, 'ressssssf');

      state.refresh = action.payload.msg;
    },
    [postMaterial.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [updateMaterial.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateMaterial.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      // console.log(action.payload.data, 'ressssssf');

      state.refresh = action.payload.msg;
    },
    [updateMaterial.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [deleteMaterial.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteMaterial.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      // console.log(action.payload, 'ressssssf');
      state.material = state.material;
      state.refresh = action.payload.msg;
    },
    [deleteMaterial.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action;
    },
  },
});

const {reducer} = materialSlice;
export default reducer;
