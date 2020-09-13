import React from 'react'
import {connect} from "react-redux";

import {getContactsPerPage} from '../../../FLUX/contactsList/selectors'
import {setContactsPerPage} from "../../../FLUX/contactsList/operations";

const mapStateToProps = (state) => ({
  contactsPerPage: getContactsPerPage(state)
})

const mapDispatchToProps = ({
  setContactsPerPage
})

const HeaderLogic = (props) => {
  const handleSettingsChange = (evt) => {
    let name = evt.target.name
    let value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value

    // let changes = {[name]: value}

    props.setContactsPerPage(+value)
  }


  // console.log('Header.props', props)

  return (
    <header>
      <h1>Список контактов</h1>

      {/* Here will be a separate component Settings when the block contains more fields */}
      <div className="settings">
        <form className="settingsForm row">

          <div className="input-field col s6 row">
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