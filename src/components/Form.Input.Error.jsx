import React from 'react'
export default ({ submitFailed, error, submitError }) => {

  if (!submitFailed) {
    return null;
  }

  if (!error && !submitError) {
    return null;
  }

  return <small className="text-danger my-1" children={error || submitError} />;

}