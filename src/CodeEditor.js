import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import './CodeEditor.css'; // Import the CSS file

const CodeEditor = () => {
  const [code, setCode] = useState(`\
  <!DOCTYPE html>
  <html>
  <head>
      <title>Hello, World Example</title>
  </head>
  <body>
      <h1>Hello, World!</h1>
  </body>
  </html>
  
  `);

  const editorOptions = {
    wordWrap: 'on',
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
  };

  return (
    <div className="code-editor-container">
      <div className="editor-section">
        <MonacoEditor
          width="100%"
          height="100%"
          language="html"
          theme="vs-dark"
          value={code}
          onChange={(newValue) => setCode(newValue)}
          options={editorOptions}
        />
      </div>
      <div className="preview-section">
        <iframe
          title="Preview"
          style={{ width: '100%', height: '100%', border: '1px solid #e1e1e1', borderRadius: '4px' }}
          srcDoc={code}
        ></iframe>
      </div>
    </div>
  );
};

export default CodeEditor;
