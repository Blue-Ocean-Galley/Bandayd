import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  VerticalCard,
  TextArea,
  Button,
  Input,
} from '../styles/globalStyles';

export default function EditArea({
  text = '', title = '', handleSave, handleCancel,
}) {
  const [currentText, setText] = useState(text);
  const [currentTitle, setTitle] = useState(title);

  return (
    <EditCard>
      <Input type="text" defaultValue={currentTitle} onChange={(e) => setTitle(e.target.value)} />
      <TextArea onChange={(e) => setText(e.target.value)} defaultValue={currentText} />
      <div>
        <Button onClick={handleCancel}> Cancel </Button>
        <Button onClick={() => handleSave(currentText, currentTitle)}> Save </Button>
      </div>
    </EditCard>
  );
}
EditArea.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
const EditCard = styled(VerticalCard)`
  flex: 2;
  margin-top: 6rem;
`;
