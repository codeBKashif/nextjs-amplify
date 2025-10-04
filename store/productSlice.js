const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import { products } from "@/data/product";

const fetchProducts = createAsyncThunk('fetch/products', async () => {
    return new Promise((resolve) => {
        resolve(products);
    });
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    }
});

export { fetchProducts };
export default productSlice.reducer;

