import {createSelector} from "reselect";

/// SUBROUTINES ///

const applySearchFilter = (array, search) => {
  // new regExp from user input
  const regExp = new RegExp(search, 'igm')

  const checkStringInObj = (obj) => {
    let found = false

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // each Object can contain another Object, so we need to go deeper
        if (typeof obj[key] === "object") {
          found = checkStringInObj(obj[key])
        } else {
          found = regExp.test(obj[key])
        }

        // if the substring is found, it doesn't matter what is in the other properties
        if (found) {
          return true
        }
      }
    }

    return false
  }

  return array.filter(checkStringInObj)
}

const sortList = (array, sortProperty, forward = true) => {
  let s
  if (forward) {
    s = (a,b) => (a[sortProperty] > b[sortProperty])
  }
  else {
    s = (a,b) => (a[sortProperty] < b[sortProperty])
  }

  return array.sort(s)
}


/// SELECTORS ///

const getAllContacts = (state) => state.contactsList.list
const getContactsPerPage = (state) => state.contactsList.contactsPerPage
const getSearchFilter = (state) => state.contactsList.searchFilter
const getShowFrom = (state) => state.contactsList.showFrom
const getSortBy = (state) => state.contactsList.sortBy
const getSortForward = (state) => state.contactsList.sortForward


const getFilteredContacts = createSelector([getAllContacts, getSearchFilter], (contacts, searchFilter) => {
  if (searchFilter) {
    contacts = applySearchFilter(contacts, searchFilter)
  }

  if (contacts.length === 0) {
    contacts = ['Данные отсутствуют.']
  }

  return contacts
})


const getSortedContacts = createSelector([getFilteredContacts, getSortBy, getSortForward], (contacts, sortBy, sortForward) => {
    return sortList(contacts, sortBy, sortForward)
})


const getSlicedList = createSelector([getSortedContacts, getShowFrom, getContactsPerPage], (list, showFrom, contactsPerPage) => {
  if (showFrom > list.length - 1){
    showFrom = list.length - 1
  }

  if (contactsPerPage < 5) {
    contactsPerPage = 5
  }
  if (contactsPerPage > 50) {
    contactsPerPage = 50
  }

  return list.slice(showFrom, showFrom + contactsPerPage)
})


const getContactsList = (state) => {
  const {isFetching, fetchingSuccess} = state.contactsList

  if (isFetching) {
    return []
  }

  if (!fetchingSuccess) {
    return ['Что-то пошло не так. Невозможно получить данные. Проверьте соединение с интернетом или попробуйте позже.']
  }

  return getSlicedList(state)
}

export {
  getContactsList
  , getContactsPerPage
}