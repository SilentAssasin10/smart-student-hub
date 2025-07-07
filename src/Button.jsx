import React from 'react'

export default function Button(props) {
  return (
    <>
    <button type="button" onClick={props.onClick} className="btn btn-primary fs-5" style={{borderRadius: '3rem',width: '11em'}}>{props.title}</button>
    </>
  )
}
