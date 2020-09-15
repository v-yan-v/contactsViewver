import {
  CONTACTS_PER_PAGE,
  FETCHING_FAILED,
  FETCHING_LIST,
  FETCHING_SUCCESS,
  INSERT_BEGIN,
  REQUEST_LIST,
  SEARCH_FILTER,
  SHOW_FROM,
  SORT_BY,
  SORT_FORWARD
} from "./types";

const initialState = {
    contactsPerPage: 5
  , showFrom       : 0
  , fetchingSuccess: true
  , isFetching     : false
  , list           : []
  , searchFilter   : ''
  , sortBy         : ''
  , sortForward    : true
}

export const contactsList = (state = initialState, action) => {
  switch (action.type) {
    case CONTACTS_PER_PAGE:
      return {...state,  contactsPerPage: action.payload}

    case FETCHING_FAILED:
      return {...state,  fetchingSuccess: false, isFetching: false}

    case FETCHING_LIST:
      return {...state,  fetchingSuccess: false, isFetching: true}

    case FETCHING_SUCCESS:
      return {...state, fetchingSuccess: true, isFetching: false}

    case INSERT_BEGIN:
      return {...state, list: [action.payload, ...state.list]}

    case REQUEST_LIST:
      return {...state, list: action.payload}

    case SEARCH_FILTER:
      // escaping regExp tokens
      action.payload = action.payload.trim().replace(/[.*+?^${}()|[\]\\]/gm, '\\$&')
      return {...state, searchFilter: action.payload}

    case SHOW_FROM:
      return {...state, showFrom: action.payload}

    case SORT_BY:
      return {...state, sortBy: action.payload, sortForward: true}

    case SORT_FORWARD:
      return {...state, sortForward: !state.sortForward}

    default:
      return state
  }
}