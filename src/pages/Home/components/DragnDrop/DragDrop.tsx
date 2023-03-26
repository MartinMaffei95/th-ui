import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { uploadImage } from '../../../../redux/slices/imageSlice';

import { convertToBase64 } from '../../../../utilities/convert-to-base-64';
import FormDragDrop from '@/pages/Home/components/DragnDrop/FormDragDrop';

const DragDrop = () => {
  const dispatch = useDispatch();

  // drag state
  const [dragActive, setDragActive] = useState(false);

  // handle drag events -- ToDo: Refactor this
  const handleDrag = function (e: DragEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  const handleDrop = async (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e?.dataTransfer.files && e?.dataTransfer.files[0]) {
      const img = await convertToBase64(e?.dataTransfer?.files[0]);
      dispatch(uploadImage(img));
    }
  };
  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files) {
      const img = await convertToBase64(e?.target?.files[0]);
      dispatch(uploadImage(img));
    }
  };
  return (
    <FormDragDrop
      handleDrag={handleDrag}
      handleDrop={handleDrop}
      handleFile={handleFile}
      dragActive={dragActive}
    />
  );
};

export default DragDrop;
