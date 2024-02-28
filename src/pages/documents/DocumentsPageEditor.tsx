// src/pages/documents/DocumentsPageEditor.tsx
import React from 'react';
import Paper from '../../components/extends/surfaces/PaperWrapper';
import Typography from '../../components/extends/displays/TypographyWrapper';
import MonacoEditor from 'react-monaco-editor';

const DocumentsPageEditor: React.FC<any> = () => {
  const label = 'Documents Editor';

  // Função para manipular mudanças no editor
  const onChange = (newValue: string, e: any) => {
    console.log('onChange', newValue, e);
  };

  // Opções de configuração para o Monaco Editor
  const editorOptions = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line' as const, // Use 'as const' para garantir que o tipo seja reconhecido corretamente
    automaticLayout: true,
  };
  
  return (
    <Paper elevation={3}>
      <Typography color="inherit" variant="h5" component="h1">
        {label}
      </Typography>
      <div style={{ height: '500px' }}> {/* Defina o estilo conforme necessário */}
        <MonacoEditor
          width="100%"
          height="400" // Ajuste a altura conforme necessário
          language="javascript" // Defina a linguagem de programação
          theme="vs-light" // Tema do editor
          value={'// Escreva seu código aqui\n'}
          options={editorOptions}
          onChange={onChange}
        />
      </div>
    </Paper>
  );
};

export default DocumentsPageEditor;
