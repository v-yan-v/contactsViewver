import React from 'react'
import {ContactsList} from "../ContactsList/ContactsList";
import {AddUserContact} from "../ContactsList/AddUserContact";

export const Main = (props) => {
  return (
    <main className='section relative'>
      <AddUserContact />
      <ContactsList />
    </main>
  )
}
