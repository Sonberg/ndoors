import React from 'react'
export default ({ submitFailed, error }) => {

  if (!submitFailed) {
    return null;
  }

  if (!error) {
    return null;
  }

  return <small className="text-danger my-1" children={error} />;

}