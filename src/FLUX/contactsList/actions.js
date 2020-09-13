// action creators

import * as types from "./types";

export const contactsPerPage = (payload) => ({
  type: types.CONTACTS_PER_PAGE,
  payload
})

export const fetchingList = () => ({type: types.FETCHING_LIST})

export const fetchingSuccess = () => ({type: types.FETCHING_SUCCESS})

export const fetchingFailed = () => ({type: types.FETCHING_FAILED})

export const insertBegin = (payload) => ({
  type     : types.INSERT_BEGIN
  , payload
})

export const requestList = (payload) => ({
  type     : types.REQUEST_LIST
  , payload
})

export const searchFilter = (payload) => ({
  type     : types.SEARCH_FILTER
  , payload
})

export const showFrom = (payload) => ({
  type: types.SHOW_FROM
  , payload
})

export const sortBy = (payload = 'id') => ({
  type: types.SORT_BY
  , payload
})

export const sortForward = () => ({type: types.SORT_FORWARD})
