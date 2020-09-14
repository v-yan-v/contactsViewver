import React from 'react'
import {connect} from 'react-redux'
import {getContactsList, getSortBy, getSortForward} from "../../../FLUX/contactsList/selectors";
import {setSortBy, toggleSortForward} from "../../../FLUX/contactsList/operations";

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

  /// HANDLERS ///

  const handleTableClick = (evt) => {
    let tableRowClasses = Array.from(evt.target.closest('tr').classList)

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
    if ([].includes.call(tableRowClasses, 'tableRow')) {
      // show contact details
    }
  }


  /// CREATE LAYOUT ///

  const layout = () => {
    if (props.contactsList.length === 0) {
      // show preloader while waiting data
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
              <tr className='tableRow' key={i} >
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

  /// PAYLOAD ///

  return layout()
}

export const ContactsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsListLogic)