import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';
import Badge from './Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ fields: { value = [], ...fields }, placeholder, className, validateTag = (() => true) }) => {
  const [disabled, setDisabled] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const removeTag = index => () => fields.remove(index);
  const addTag = (e) => {
    if (e.keyCode && e.keyCode !== 13) { return; }

    e.stopPropagation();
    e.preventDefault();

    if (!inputValue) { return; }
    if (disabled) { return; }

    fields.push({ value: inputValue });
    setInputValue('');
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
    const conditions = [
      // Value set
      !inputValue,

      // Run validate function
      validateTag && !validateTag(inputValue),

      // Value already exists
      value.map(x => x.value.toLowerCase()).includes(inputValue.toLowerCase())
    ];

    setDisabled(conditions.includes(true));
  }, [inputValue])

  return (
    <Row className={className}>
      <Col xs="12">
        <div className="d-flex flex-wrap">
          {value.map(renderBadge)}
        </div>
      </Col>
      <Col>
        <Form.Group className="mb-0">
          <Form.Control
            value={inputValue}
            onKeyDown={addTag}
            onChange={({ target }) => setInputValue(target.value)}
            placeholder={placeholder} />
        </Form.Group>
      </Col>
      <Col xs="auto" className="pl-0">
        <Button disabled={disabled} onClick={addTag}>Add</Button>
      </Col>
    </Row>
  );
};