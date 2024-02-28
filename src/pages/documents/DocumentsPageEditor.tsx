// src/pages/documents/DocumentsPageEditor.tsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Paper from '../../components/extends/surfaces/PaperWrapper';
import 'react-quill/dist/quill.snow.css'; 

const DocumentsPageEditor: React.FC<any> = () => {
  const label = 'Documents Editor';
  const [editorContent, setEditorContent] = useState('');

  return (
    <Paper elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column', // Garante que os itens dentro do Paper sejam organizados verticalmente
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 100px)', // Ajusta a altura para ocupar quase toda a altura da tela, ajuste conforme necessário
        margin: '50px', // Adiciona margem ao redor do Paper para não tocar as bordas da tela
        padding: '20px' // Adiciona padding dentro do Paper
      }}>
      <ReactQuill 
        theme="snow" 
        value={editorContent} 
        onChange={setEditorContent}
        style={{ 
          width: '100%', // Faz o ReactQuill ocupar toda a largura disponível
          height: '85%', // Faz o ReactQuill ocupar a altura disponível
        }} 
      />
    </Paper>
  );
};

export default DocumentsPageEditor;
