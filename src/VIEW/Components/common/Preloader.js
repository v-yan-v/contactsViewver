import React from 'react'

/**
 *
 * @param {String} [size] - 'big' or 'small' size, if empty preloader will be default medium size
 * @param {String} [color] - one of list: blue, red, yellow, green
 * @return {JSX.Element}
 * @constructor
 */
export const Preloader = ({size, color='blue'}) => {
  return (
    <div className='section center-align'>
      <div className={`preloader-wrapper ${size} active `}>
        <div className={`spinner-layer spinner-${color}-only`}>
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