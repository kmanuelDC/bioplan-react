import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ImageUploader = () => {
  const [editorHtml, setEditorHtml] = useState('');
  const quillRef = useRef(null);

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    fetch('/upload-image', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        const quill = quillRef.current.getEditor();
        const cursorPosition = quill.getSelection().index;
        quill.insertEmbed(cursorPosition, 'image', result.url);
      });
  };

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.addEventListener('change', handleImageUpload);

    input.click();
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
        modules={{
          toolbar: {
            container: [
              [{ header: '1' }, { header: '2' }, { font: [] }],
              [{ size: [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image'],
              ['clean'],
              ['code-block'],
            ],
            handlers: {
              image: imageHandler,
            },
          },
        }}
        ref={quillRef}
      />
    </div>
  );
};

export default ImageUploader;
