import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getContactsList, getSortBy, getSortForward} from "../../../FLUX/contactsList/selectors";
import {setSortBy, toggleSortForward} from "../../../FLUX/contactsList/operations";
import {ContactDetails} from "./ContactDetails";
import {Preloader} from "../common/Preloader";

const mapStateToProps = (state) => ({
  contactsList: getContactsList(state)
  , sortBy: getSortBy(state)
  , sortForward: getSortForward(state)
  // , state
})

const mapDispatchToProps = {
  setSortBy
  , toggleSortForward
}

const ContactsListLogic = (props) => {
  /// VARIABLES ///
  const [showContactDetails, setShowContactDetails] = useState(null)
  useEffect(() => {
    setShowContactDetails(null)
  }, [props])


  /// HANDLERS ///

  const handleTableClick = (evt) => {
    setShowContactDetails(null)

    let tr = evt.target.closest('tr')
    let tableRowClasses = tr ? Array.from(tr.classList) : []

    // console.log('ContactsList.handleTableClick:', 'closest', tableRowClasses)
    // console.log('ContactsList.handleTableClick > appState.contactsList', props.state.contactsList )

    // handle Table Header click
    if (tableRowClasses.includes('tableHeadersRow')) {
      let newSortBy = evt.target.closest('th').dataset.sortby

      if (newSortBy && newSortBy !== props.sortBy) {
        props.setSortBy(newSortBy)
      }
      else  {
        props.toggleSortForward()
      }
    }

    // handle Table simple Row click
    if (tableRowClasses.includes('tableRow')) {
      setShowContactDetails(parseInt(evt.target.closest('tr').dataset.index))
    }
  }


  /// CREATE LAYOUT ///

  const layout = () => {
    if (props.contactsList.length === 0) {
      // show preloader while waiting data
      return <Preloader size={'big'} color={'green'}/>
    }
    else if (props.contactsList.length === 1 && typeof props.contactsList[0] !== "object") {
      // the only element is not an Object? So here is a service message
      return props.contactsList[0]
    }
    else {
      // render data

      // console.log('ContactsList.props.contactsList = ', props.contactsList)
      const sortDirection = (
        <React.Fragment>
          <i className="material-icons right">sort_by_alpha</i>
          <i className={`material-icons ${props.sortForward && 'inverted'}`}>sort</i>
        </React.Fragment>
      )

      return (
        <React.Fragment>
          <table
            className='highlight striped responsive-table'
            onClick={handleTableClick}
          >

            <thead>
            <tr className='tableHeadersRow'>
              {
                ['id', 'firstName', 'lastName', 'email', 'phone']
                  .map((el, i) => {
                    return (<th key={i} data-sortby={el}>
                      <div className="valign-wrapper cursor-pointer">
                        {el} {el === props.sortBy && sortDirection}
                      </div>
                    </th>)
                  })
              }
            </tr>
            </thead>

            <tbody>
            {props.contactsList.map((c, i) => (
              <tr className='tableRow' key={i} data-index={i}>
                <td>{c.id}</td>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
              </tr>
            ))}
            </tbody>

          </table>

          {showContactDetails !== null && <ContactDetails contact={props.contactsList[showContactDetails]}   /> }
        </React.Fragment>
      )
    }
  }

  /// PAYLOAD ///

  return layout()
}

export const ContactsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsListLogic)