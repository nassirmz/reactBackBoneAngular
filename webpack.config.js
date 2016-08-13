module.exports = {
  entry: './react/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './react/components'
    ],
    alias: {
      styles: 'assets/main.css',
      auth: 'react/api/authentication.jsx',
      actions: 'react/actions/actions.jsx',
      reducers: 'react/reducers/reducers.jsx',
      configureStore: 'react/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      },
      {
        loader: 'style!css',
        test: /\.css?$/
      }
    ]
  }
};
