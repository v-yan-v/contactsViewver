import React from 'react'
import {connect} from 'react-redux'
import {getContactsList} from "../../../FLUX/contactsList/selectors";

const mapStateToProps = (state) => ({
  contactsList: getContactsList(state)
})

const mapDispatchToProps = {}

const ContactsListLogic = (props) => {


  if (props.contactsList.length === 0) {
    return (
      <div className='section center-align'>
        <div className="preloader-wrapper big active ">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else if (props.contactsList.length === 1 && typeof props.contactsList[0] !== "object") {
    return props.contactsList[0]
  }
  else {
    console.log(props.contactsList)


    return (
      <table className='highlight striped responsive-table'>

        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>

        <tbody>
          {props.contactsList.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
            </tr>
          ))}
        </tbody>

      </table>
    )
  }

}

export const ContactsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsListLogic)