import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {insertBegin} from "../../../FLUX/contactsList/operations";

const contactTemplate = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: {
    streetAddress: '',
    city: '',
    state: '',
    zip: ''
  },
  description: '',
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  insertBegin
}

const AddUserContactLogic = (props) => {
  /// VARIABLES ///
  const [showAddUserContact, setShowAddUserContact] = useState(false)
  const [addUserFormData, setAddUserFormData] = useState(contactTemplate)
  const [hasEmptyField, setHasEmptyField] = useState(true)
  useEffect(() => {
    setHasEmptyField(isSomeFieldEmpty())
  }, [addUserFormData])


  /// SUBROUTINES ///
  const isSomeFieldEmpty = (fieldsList) => {
    fieldsList = fieldsList || ['id', 'firstName', 'lastName', 'email', 'phone']

    return !fieldsList.every((field) => (addUserFormData[field] !== '' ))
  }


  /// HANDLERS ///
  const handleInputChange = (evt) => {
    const name = evt.target.name
    const value = evt.target.value

    setAddUserFormData({...addUserFormData, [name]: value})
  }

  const handleAddUserSubmit = (evt) => {
    evt.preventDefault()

    props.insertBegin(addUserFormData)

    setAddUserFormData(contactTemplate)
  }


  /// PAYLOAD ///
  return (

    <React.Fragment>

      <div className="addUserContact">
        <button
          className=" btn teal absolute btn-collapse"
          onClick={() => setShowAddUserContact(!showAddUserContact)}
        >
          <i className="large material-icons">add</i>
        </button>
      </div>

      {showAddUserContact && (
        <form
          className="addUser-Form "
          onSubmit={handleAddUserSubmit}
        >
          <div className="row">

            <div className="input-field col s12 ">
              <input
                id="contactId"
                name='id'
                pattern='\d+'
                onChange={handleInputChange}
                value={addUserFormData.id}
              />
              <label htmlFor="contactId" className='active'>id</label>
            </div>

            <div className="input-field col s12 m6">
              <input
                type="text"
                id="contactFirstName"
                name='firstName'
                onChange={handleInputChange}
                value={addUserFormData.firstName}
              />
              <label htmlFor="contactFirstName" className='active'>First name</label>
            </div>

            <div className="input-field col s12 m6">
              <input
                type="text"
                id="contactLastName"
                name='lastName'
                onChange={handleInputChange}
                value={addUserFormData.lastName}
              />
              <label htmlFor="contactLastName" className='active'>Last name</label>
            </div>

            <div className="input-field col s12 m6 ">
              <input
                type="email"
                id="contactEmail"
                name='email'
                onChange={handleInputChange}
                value={addUserFormData.email}
              />
              <label htmlFor="contactEmail" className='active'>email</label>
            </div>

            <div className="input-field col s12 m6">
              <input
                type="tel"
                id="contactPhone"
                name='phone'
                onChange={handleInputChange}
                value={addUserFormData.phone}
              />
              <label htmlFor="contactPhone" className='active'>phone</label>
            </div>

            <button
              className="btn col s4 offset-s8"
              disabled={hasEmptyField}
            >
              Добавить
            </button>
          </div>

          <div className="divider"></div>
        </form>
      )}

    </React.Fragment>
  )
}

export const AddUserContact = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserContactLogic)