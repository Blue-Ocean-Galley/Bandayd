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
  text = '', title = '', id = null, handleSave, handleCancel,
}) {
  const [currentText, setText] = useState(text);
  const [currentTitle, setTitle] = useState(title);

  return (
    <EditCard>
      <Input type="text" defaultValue={currentTitle} onChange={(e) => setTitle(e.target.value)} />
      <TextArea onChange={(e) => setText(e.target.value)} defaultValue={currentText} />
      <div>
        <Button onClick={handleCancel}> Cancel </Button>
        <Button onClick={() => handleSave({
          post: currentText,
          name: currentTitle,
          id,
        })}
        >
          Save
        </Button>
      </div>
    </EditCard>
  );
}
EditArea.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
const EditCard = styled(VerticalCard)`
  flex: 2;
`;
