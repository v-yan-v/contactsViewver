import React, {useState} from 'react'
import {connect} from "react-redux";

import {getContactsPerPage, getSearchFilter} from '../../../FLUX/contactsList/selectors'
import {requestList, setContactsPerPage, setSearchFilter} from "../../../FLUX/contactsList/operations";

const mapStateToProps = (state) => ({
  contactsPerPage: getContactsPerPage(state)
  , searchFilter: getSearchFilter(state)
})

const mapDispatchToProps = ({
  setContactsPerPage
  , requestList
  , setSearchFilter
})

const HeaderLogic = (props) => {
  const [searchValue, setSearchValue] = useState(props.searchFilter)

  const handleSettingsChange = (evt) => {
    evt.preventDefault()

    let name = evt.target.name
    // let value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value
    let value = evt.target.type === 'number' ? +evt.target.value : evt.target.value

    // console.log('Header.HandleSettingsChange:', 'name = ', name, 'value = ', value)

    props[name](value)
  }

  const handleRequestContacts = (evt) => {
    const listSize = +evt.target.dataset.listsize

    props.requestList(listSize)
  }

  // console.log('Header.props', props)

  return (
    <header>
      <h1>Список контактов</h1>

      {/* Here will be a separate component Settings when the block contains more fields */}
      <div className="settings row">

        <div className="settings-requestList col s6 row">

            <button
              className="btn waves-effect waves-light col s11 row"
              onClick={handleRequestContacts}
              data-listsize='30'
            >
              Загрузить мало контактов
            </button>

            <button
              className="btn waves-effect waves-light col  s11 row"
              onClick={handleRequestContacts}
              data-listsize='1000'
            >
              Загрузить много контактов
            </button>

        </div>

        <form className="settings-Form col s6 ">

          <div className="input-field row">
            <input className='col s2'
                   type="number"
                   min='5'
                   max='50'
                   id="setContactsPerPage"
                   name='setContactsPerPage'
                   pattern='\d*'
                   onChange={handleSettingsChange}
                   value={props.contactsPerPage}
            />
            <label htmlFor="setContactsPerPage" className='active'>Количество контактов на странице</label>
          </div>

        </form>
      </div>

      <form className="searchForm row valign-wrapper">

        <div className="input-field col s12 m7">
          <i className="material-icons prefix">search</i>
          <input className=''
                 type="text"
                 id="searchFilter"
                 name='searchFilter'
                 onChange={(e) => {setSearchValue(e.target.value)}}
                 value={searchValue}
          />
          <label htmlFor="searchFilter" className='active'>Поиск по списку</label>
        </div>

        <div className="row col s12 m5">

          <button
            className="btn col s6 m5"
            name='setSearchFilter'
            onClick={handleSettingsChange}
            value={searchValue}
          >
            <i className="material-icons left">search</i>
            Найти
          </button>

          <button
            className="btn  col s6 m5 offset-m1"
            name='setSearchFilter'
            onClick={(e) => {
              handleSettingsChange(e);
              setSearchValue('')
            }}
            value=''
          >
            <i className="material-icons left red-text">clear</i>
            Очистить поиск
          </button>

        </div>

      </form>

    </header>
  )
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderLogic)