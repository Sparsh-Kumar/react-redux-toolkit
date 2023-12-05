import { createAsyncThunk } from "@reduxjs/toolkit";

export default createAsyncThunk(
  'counter/incrementAsyncThunk',
  async (param: number): Promise<number> => {
    await new Promise((resolve, reject) => setTimeout(() => resolve(param)));
    return param;
  }
)