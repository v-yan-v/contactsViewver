// Place here simple actions call or Thunks and thunk creators if need.

import * as actions from './actions'
import * as axios from 'axios'

export const setContactsPerPage = (num) => (dispatch) => {
  dispatch(actions.contactsPerPage(num))
}

export const insertBegin = (newContact) => (dispatch) => {
  dispatch (actions.insertBegin(newContact))
}

export const requestList = (rows) => (dispatch) => {

  dispatch(actions.fetchingList())

  axios.get(`http://www.filltext.com/?rows=${rows}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    .then(response => {
      if (response.status === 200) {
        dispatch(actions.requestList(response.data))
        dispatch(actions.fetchingSuccess())
      }
      else {
        dispatch(actions.fetchingFailed())
      }
    })
}

export const setSearchFilter = (searchString) => (dispatch) => {
  dispatch(actions.searchFilter(searchString))
}

export const setShowFrom = (num) => (dispatch) => {
  dispatch(actions.showFrom(num))
}

export const setSortBy = (propertyName) => (dispatch) => {
  dispatch(actions.sortBy(propertyName))
}

export const toggleSortForward = () => (dispatch) => {
  dispatch(actions.toggleSortForward())
}