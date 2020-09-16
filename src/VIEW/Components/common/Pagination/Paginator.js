import React, {useEffect, useState} from "react";

/**
 * @param {object} props
 * @param {number} props.itemsTotal - total amount of items in all pages
 * @param {number} props.itemsPerPage
 * @param {number} props.pagesPerPortion - amount of pageLinks available in Paginator at once
 * @param {number} props.startPage
 * @param {function} props.getPage - function to be called when user request other page
 * @returns {JSX.Element} - layout
 * @constructor
 */
export const Paginator = (props) => {

  ///     Local Variables     ///
  let totalPages =  Math.ceil( props.itemsTotal / props.itemsPerPage )

  const pagesList = new Array(props.pagesPerPortion).fill(1) //if create empty elements JS do not map them

  const [currentPage, setCurrentPage] = useState(props.startPage || 0)
  const [ portionToShow, setPortionToShow  ] = useState(Math.floor( currentPage / props.pagesPerPortion ))

  //rerender when props.currentPage is changed
  useEffect(() => {
    setCurrentPage(0)
    setPortionToShow(0)
    goToPage(0)
  }, [props.itemsTotal, props.itemsPerPage])


  ///     Local Functions     ///
  const goToPage = (page = 0, step = 1) => {

    const parsePageNumber = (pn) => {
      pn = parseInt(pn)
      if (isNaN(pn)) {
        pn = currentPage
      }
      return pn
    }

    // calculate index next page start
    switch (page) {
      case 'next':
        page = currentPage + step
        break
      case 'prev':
        page = currentPage - step
        break
      case 'last':
        page = totalPages - step
        break
      case 'first':
        page = 0
        break
      default: // warn: !!!  page value is changed !!!
        // parse number or rollback if page either not correct string either number
        page = parsePageNumber(page)

    }

    // validate next page number
      if (page > totalPages - 1) {
        page = totalPages -1
      }
      else if (page < 0) {
        page = 0
      }

    if (page !== currentPage){
      // request page only when it really need
      props.getPage(page)
      setCurrentPage(page)
      setPortionToShow(Math.floor(page / props.pagesPerPortion))
    }
  }

  const pageNumberClickHandler = (e) => {
    let li = e.target.closest('li')
    if (li && !li.classList.contains('disabled')) {
      goToPage( li.dataset.number )
    }
  }


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
