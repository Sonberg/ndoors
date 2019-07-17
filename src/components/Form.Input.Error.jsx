import React from 'react'
export default ({ submitFailed, ...meta }) => {

  if (!submitFailed) {
    return null;
  }

  if (!meta.error) {
    return null;
  }

  return <div className="text-danger" style={{ fontSize: '0.9em' }} children={meta.error} />;

}