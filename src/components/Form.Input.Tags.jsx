import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';
import Badge from './Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ fields }) => {
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState('');

  const removeTag = index => () => fields.remove(index);
  const addTag = (e) => {
    if (e.keyCode && e.keyCode != 13) { return; }

    e.stopPropagation();
    e.preventDefault();

    if (!value) { return; }
    if (disabled) { return; }
    fields.push({ value });
    setValue('');
  }


  const renderBadge = (skill, index) => {

    return (
      <div className="mb-2 mr-1" key={index}>
        <Badge
          value={skill.value}
          onClick={!skill.id ? removeTag(index) : null}
          children={!skill.id ? <FontAwesomeIcon size="sm" icon="times" /> : null} />
      </div>
    )
  };

  useEffect(() => {
    if (!value) {
      setDisabled(true);
      return;
    }

    setDisabled(fields.value.map(x => x.value.toLowerCase()).includes(value.toLowerCase()));
  }, [value])

  return (
    <Row>
      <Col xs="12">
        <div className="d-flex flex-wrap">
          {fields.value.map(renderBadge)}
        </div>
      </Col>
      <Col>
        <Form.Group className="mb-0">
          <Form.Control
            value={value}
            onKeyDown={addTag}
            onChange={({ target }) => setValue(target.value)}
            placeholder="Leadership, C#, Javascript etc..." />
        </Form.Group>
      </Col>
      <Col xs="auto" className="pl-0">
        <Button disabled={disabled} onClick={addTag}>Add</Button>
      </Col>
    </Row>
  );
};