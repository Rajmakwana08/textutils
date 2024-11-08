import React from 'react'

function Alert(props) {
    return (
      props.alert && props.alert.msg && props.alert.type && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}:</strong> {props.alert.msg}
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      )
    );
  }
  
  export default Alert;
  
