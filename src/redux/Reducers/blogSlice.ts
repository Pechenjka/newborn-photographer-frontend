import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiApp } from "../../utils/apiApp";
import { IBlogArticle, PropsInitialStateBlogSlice } from "../../types";

const initialState: PropsInitialStateBlogSlice = {
  blogArticles: [],
  articleDetails: {
    title: "",
    url: "",
    imagePrev: "",
    typePhotoSession: "",
    // _id: "",
    createdAt: "",
    details: {
      images: [],
      description: "",
    },
  },
  loading: {
    getBlog: false,
    getArticleDetail: false,
    articlesURL: false,
  },
  error: {
    getBlog: "",
    getArticleDetail: "",
    articlesURL: "",
  },
  articlesURL: [],
};

export const fetchBlogArticles = createAsyncThunk(
  "blog/fetchBlogArticles",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await apiApp().getBlogArticles();
      console.log(res);
      const sortData = res.data.sort((a: any, b: any) => b.createdAt.localeCompare(a.createdAt));
      console.log("sortData", sortData);
      return sortData;
    } catch (e) {
      return rejectWithValue("Error, the articles was not loaded!");
    }
  }
);

export const fetchArticleDetail = createAsyncThunk(
  "blog/fetchArticleDetail",
  async (url: string | undefined, { rejectWithValue, dispatch }) => {
    try {
      const res = await apiApp().getArticleDetail(url);
      return res.data;
    } catch (e) {
      return rejectWithValue("Error, the articles was not loaded!");
    }
  }
);

export const fetchArticlesUrl = createAsyncThunk(
  "blog/fetchArticlesUrl",
  async (url: string | undefined, { rejectWithValue }) => {
    try {
      const res = await apiApp().getArticlesUrl("/articlesUrl");
      return res.data;
    } catch (e) {
      return rejectWithValue("Error, the articles was not loaded!");
    }
  }
);

export const createArticle = createAsyncThunk(
  "blog/createArticle",
  async (
    data: {
      title: string;
      url: string;
      typePhotoSession: string;
      imagePrev: string;
      description: string;
      images: Array<string>;
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await apiApp().createArticle({
        title: data.title,
        url: data.url,
        imagePrev: data.imagePrev,
        typePhotoSession: data.typePhotoSession,
        details: {
          images: data.images,
          description: data.description,
        },
      });
      return res.data;
    } catch (e) {
      return rejectWithValue("Error, the articles was not create");
    }
  }
);
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    takeEraseArticleDetails: (state, action: { payload: IBlogArticle }) => {
      console.log(action);
      state.articleDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesUrl.pending, (state): void => {
      state.loading.articlesURL = true;
      state.error.articlesURL = "";
    });
    builder.addCase(fetchArticlesUrl.rejected, (state, action: any): void => {
      state.loading.articlesURL = false;
      state.error.articlesURL = action.payload;
    });
    builder.addCase(fetchArticlesUrl.fulfilled, (state, action: any): void => {
      state.loading.articlesURL = false;
      state.error.articlesURL = "";
      state.articlesURL = action.payload;
    });
    builder.addCase(fetchBlogArticles.pending, (state): void => {
      state.loading.getBlog = true;
      state.error.getBlog = "";
    });
    builder.addCase(fetchBlogArticles.rejected, (state, action: any): void => {
      state.loading.getBlog = false;
      state.error.getBlog = action.payload;
    });
    builder.addCase(fetchBlogArticles.fulfilled, (state, action: any): void => {
      state.loading.getBlog = false;
      state.error.getBlog = "";
      state.blogArticles = action.payload;
    });
    builder.addCase(fetchArticleDetail.pending, (state): void => {
      state.loading.getArticleDetail = true;
      state.error.getArticleDetail = "";
    });
    builder.addCase(fetchArticleDetail.rejected, (state, action: any): void => {
      state.loading.getArticleDetail = false;
      state.error.getArticleDetail = action.payload;
    });
    builder.addCase(fetchArticleDetail.fulfilled, (state, action: any): void => {
      state.loading.getArticleDetail = false;
      state.error.getArticleDetail = "";
      state.articleDetails = action.payload;
    });
  },
});

export const { takeEraseArticleDetails } = blogSlice.actions;
export default blogSlice.reducer;
