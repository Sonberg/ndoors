import React from 'react'
export default ({ submitFailed, ...meta }) => {

  if (!submitFailed) {
    return null;
  }

  if (!meta.error) {
    return null;
  }

  return <small className="text-danger my-1" children={meta.error} />;

}