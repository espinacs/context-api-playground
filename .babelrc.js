const isTest = String(process.env.NODE_ENV) === 'test'
module.exports = {
  presets: [['env', {modules: isTest ? 'commonjs' : false}], 'react'],
  plugins: [
    'syntax-dynamic-import',
    'transform-class-properties',
    'transform-object-rest-spread',
    isTest ? 'dynamic-import-node' : null,
    [ "import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` for less
  ].filter(Boolean),
}
