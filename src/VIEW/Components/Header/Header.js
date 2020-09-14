import React from 'react'
import {connect} from "react-redux";

import {getContactsPerPage} from '../../../FLUX/contactsList/selectors'
import {requestList, setContactsPerPage} from "../../../FLUX/contactsList/operations";

const mapStateToProps = (state) => ({
  contactsPerPage: getContactsPerPage(state)
})

const mapDispatchToProps = ({
  setContactsPerPage
  , requestList
})

const HeaderLogic = (props) => {
  const handleSettingsChange = (evt) => {
    let name = evt.target.name
    let value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value

    // let changes = {[name]: value}

    props.setContactsPerPage(+value)
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
                   id="contactsPerPage"
                   name='contactsPerPage'
                   pattern='\d*'
                   onChange={handleSettingsChange}
                   value={props.contactsPerPage}
            />
            <label htmlFor="contactsPerPage" className='active'>Количество контактов на странице</label>
          </div>

        </form>
      </div>

    </header>
  )
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderLogic)