import React, { memo } from 'react'
import Badge from './Badge';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export default memo(({ id, value, verifications = [], ...props }) => {

  const users = verifications.map(x => x.user && x.user.displayName).filter(x => x != null).join(", ");

  return (
    <div className="mb-2 mr-1" key={id}>
      <Badge value={value}{...props}>
        <OverlayTrigger
          overlay={<Tooltip children={users || "Nobody has verified this skill yet!"} />}>
          <span>
            {verifications.length}
          </span>
        </OverlayTrigger>
      </Badge>
    </div>
  )
});