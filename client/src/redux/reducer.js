import * as types from "./action.types";

const intialState = {
  blogs: [],
  isError: false,
  isLoading: false,
  blog: {},
};

export const reducer = (store = intialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.CREATE_BLOG_REQUEST:
      return {
        ...store,
        isLoading: true,
        isError: false,
      };

    case types.CREATE_BLOG_SUCCESS:
      return {
        ...store,
        isLoading: false,
        isError: false,
        blogs: [...store.blogs, payload],
      };

    case types.CREATE_BLOG_ERROR:
      return {
        ...store,
        isLoading: false,
        isError: true,
      };

    case types.GET_SINGLE_BLOG_REQUEST:
      return {
        ...store,
        isLoading: true,
        isError: false,
      };

    case types.GET_SINGLE_BLOG_SUCCESS:
      return {
        ...store,
        isLoading: false,
        isError: false,
        blog: payload,
      };

    case types.GET_SINGLE_BLOG_ERROR:
      return {
        ...store,
        isLoading: false,
        isError: true,
      };

    case types.GET_ALL_BLOG_REQUEST:
      return {
        ...store,
        isLoading: true,
        isError: false,
      };

    case types.GET_ALL_BLOG_SUCCESS:
      return {
        ...store,
        isLoading: false,
        isError: false,
        blogs: payload,
      };

    case types.GET_ALL_BLOG_ERROR:
      return {
        ...store,
        isLoading: false,
        isError: true,
      };

    default:
      return store;
  }
};
