export default (
  <webpack target="web" watch mode="production">
    <entry path="src/index.js" />
    <resolve>
      <alias
        {...{
          react: 'preact-compat',
          'react-dom': 'preact-compat',
        }}
      />
    </resolve>
  </webpack>
);