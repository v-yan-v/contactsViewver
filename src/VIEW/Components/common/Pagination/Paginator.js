import React, {useEffect, useState} from "react";

/**
 * @param {object} props
 * @param {number} props.itemsTotal - total amount of items in all pages
 * @param {number} props.itemsPerPage
 * @param {number} props.pagesPerPortion - amount of pageLinks available in Paginator at once
 * @param {number} props.itemToShow - item which start currentPage
 * @param {function} props.getPage - function to be called when user request other page
 * @returns {JSX.Element} - layout
 * @constructor
 */
export const Paginator = (props) => {

  ///     Local Variables     ///
  let totalPages =  Math.ceil( props.itemsTotal / props.itemsPerPage )

  const pagesList = new Array(props.pagesPerPortion).fill(1) //if create empty elements JS do not map them

  const [currentPage, setCurrentPage] = useState(Math.floor(props.itemToShow / props.itemsPerPage))
  const [ portionToShow, setPortionToShow  ] = useState(Math.floor( currentPage / props.pagesPerPortion ))
  // const [ inputPageNumber, setInputPageNumber ] = useState(1)

  //rerender when props.currentPage is changed
  useEffect(() => {
    let pageFromProps = Math.floor(props.itemToShow / props.itemsPerPage)
    let portionFromProps = Math.floor(pageFromProps / props.pagesPerPortion)

    setCurrentPage(pageFromProps)
    setPortionToShow(portionFromProps)
  }, [props.itemToShow, props.itemsTotal])

  //rerender when portionToShow is changed
  // useEffect(() => {
  //   setPortionToShow(() => {
  //     return portionToShow
  //   })
  // }, [portionToShow])


  ///     Local Functions     ///
  const goToPage = (page = 0) => {
    let index

    const parsePageNumber = () => {
      index = parseInt(page) * props.itemsPerPage
      if (isNaN(index)) {
        index = props.itemToShow
      }
    }

    // calculate index next page start
    switch (page) {
      case 'next':
        index = props.itemToShow + props.itemsPerPage
        break
      case 'prev':
        index = props.itemToShow - props.itemsPerPage
        break
      case 'last':
        index = props.itemsTotal - props.itemsPerPage
        break
      case 'first':
        index = 0
        break
      default: // warn: !!!  page value is changed !!!
        // parse number or rollback if page either not correct string either number
        parsePageNumber()

    }

    // validate next page number
      if (index >  props.itemsTotal - props.itemsPerPage) {
        index = props.itemsTotal - props.itemsPerPage
      }
      else if (index < 0) {
        index = 0
      }

    if (index !== props.itemToShow){
      // request page only when it really need
      // setCurrentPage(Math.ceil(index / props.itemsPerPage))
      props.getPage(index)
    }
  }

  const pageNumberClickHandler = (e) => {
    let li = e.target.closest('li')
    if (li && !li.classList.contains('disabled')) {
      goToPage( li.dataset.number )
    }
  }

  // const inputPageNumberHandler = (evt) => {
  //   let newPage = +evt.currentTarget.value
  //   if (newPage < 1){
  //     newPage = 1
  //   }
  //   if (newPage > totalPages) {
  //     newPage = totalPages
  //   }
  //
  //   setInputPageNumber(newPage)
  // }


  ///     RETURN Layout to render     ///
  return (
    <div className='row' >
      <ul
        className="pagination"
        onClick={pageNumberClickHandler}
      >

        <li
          className={(currentPage < 1) ? 'disabled' : undefined}
          data-number='first'
        >
          <a href='#!'> <i className="material-icons ">skip_previous</i> </a>
        </li>

        <li
          className={(currentPage < 1) ? 'disabled' : undefined}
          data-number='prev'
        >
          <a href='#!' > <i className="material-icons">chevron_left</i> </a>
        </li>

        {
          pagesList.map((p, i) => {
            let n = i + portionToShow * props.pagesPerPortion

            if (n > totalPages - 1) {
              return null
            }

            return (
              <li
                key={i}
                data-number={n}
                className={(currentPage === n) ? 'active' : undefined}
              >
                <a href="#!">{n + 1}</a>
              </li>
            )
          })
        }

        <li className='disabled'><a href="#!"> / {totalPages} </a></li>

        <li
          className={(currentPage >= totalPages - 1) ? 'disabled' : undefined}
          data-number='next'
        >
          <a href="#!"><i className="material-icons ">chevron_right</i></a>
        </li>

        <li
          className={(currentPage >= totalPages - 1) ? 'disabled' : undefined}
          data-number='last'
        >
          <a href="#!"><i className="material-icons ">skip_next</i></a>
        </li>

        {/*<input type="number" min={1} max={totalPages} inputMode='numeric' onChange={inputPageNumberHandler} />*/}
        {/*<button onClick={()=>{goToPage(inputPageNumber)}} >перейти</button>*/}

      </ul>
    </div>
  )
}
