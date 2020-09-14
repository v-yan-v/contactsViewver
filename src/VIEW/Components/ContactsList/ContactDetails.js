import React from 'react'
import noUserPhoto from '../../../assets/images/noUserPhoto.webp'

export const ContactDetails = ({contact = null}) => {
  const getUserPhoto = () => {}


  return contact && (
    <div className='section row'>

      <div className="col s12 m10 l8 offset-m1 offset-l2">
        <h4 className="header">{contact.firstName} {contact.lastName}</h4>
        <div className="card horizontal ">
          <div className="card-image col s4">
            <img class="responsive-img" src={getUserPhoto() || noUserPhoto} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">Summary</span>

              <p><strong>id: </strong> {contact.id}</p>
              <p><strong>First name: </strong> {contact.firstName}</p>
              <p><strong>Last name: </strong> {contact.lastName}</p>
              <p><strong>email: </strong> {contact.email}</p>
              <p><strong>phone: </strong> {contact.phone}</p>

              <span className="card-title">Address</span>

              <p><strong>Street: </strong> {contact.address.streetAddress}</p>
              <p><strong>City:</strong> {contact.address.city}</p>
              <p><strong>State</strong> {contact.address.state}</p>
              <p><strong>Zip:</strong> {contact.address.zip}</p>

            </div>

            <div className="card-action">
              <span className="card-title">Description</span>
              <p>{contact.description}</p>
            </div>

          </div>
        </div>


      </div>


    </div>
  )
}

