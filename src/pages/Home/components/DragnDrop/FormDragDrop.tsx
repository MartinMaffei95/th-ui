import {
  InputFileUploadSx,
  StyledFormFileUpload,
  StyledLabelFileUpload,
  StyledUploadButtonDnD,
  TextContainerDnD,
} from '@/pages/Home/styled-components';
import { useRef } from 'react';

type FormDragDropTypes = {
  handleDrag: Function;
  handleDrop: Function;
  handleFile: Function;
  dragActive: boolean;
};

const FormDragDrop = ({
  handleDrag,
  handleDrop,
  handleFile,
  dragActive,
}: FormDragDropTypes) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledFormFileUpload
      id="form-file-upload"
      data-testid="form-file-upload"
      onDragEnter={(e) => handleDrag(e)}
      onDragLeave={(e) => handleDrag(e)}
      onDragOver={(e) => handleDrag(e)}
      onDrop={(e) => handleDrop(e)}
      onSubmit={(e) => e.preventDefault()}
      className={dragActive ? 'drag-active' : ''}
    >
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        data-testid="input-file-upload"
        multiple={false}
        style={InputFileUploadSx}
        onChange={(e) => handleFile(e)}
      />
      <StyledLabelFileUpload
        id="label-file-upload"
        htmlFor="input-file-upload"
        style={{
          ...{ filter: dragActive ? 'brightness(2)' : '' },
        }}
      >
        <TextContainerDnD>
          {/* //ToDo. display this <p> only if is a desktop */}
          <p>Drag and drop your file here or</p>
          <StyledUploadButtonDnD onClick={() => inputRef?.current?.click()}>
            <span className="upload"> Upload a file</span>
          </StyledUploadButtonDnD>
        </TextContainerDnD>
      </StyledLabelFileUpload>
    </StyledFormFileUpload>
  );
};

export default FormDragDrop;
