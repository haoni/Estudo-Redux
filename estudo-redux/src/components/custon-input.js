import React from 'react'


export default props => {
    return (
        <input id={props._id}  placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    )
}