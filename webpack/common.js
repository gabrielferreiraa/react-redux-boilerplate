'use strict'

const { join } = require('path')

const paths = {
  root: join(__dirname, '..'),
  modules: join(__dirname, '..', 'node_modules'),
  components: join(__dirname, '..', 'src', 'components'),
  containers: join(__dirname, '..', 'src', 'containers'),
  src: join(__dirname, '..', 'src'),
  docs: join(__dirname, '..', 'docs'),
  dist: join(__dirname, '..', 'src', 'dist'),
  img: join(__dirname, '..', 'public', 'img'),
  reduxFlow: join(__dirname, '..', 'src', 'redux-flow')
}

module.exports = {
  paths,

  entry: {
    main: join(paths.src, 'index'),
    vendor: ['react', 'react-dom', 'react-router-dom']
  },

  output: {
    path: paths.docs,
    filename: '[name]-[hash].js'
  },

  uglifyJsPluginConfig: {
    output: {
      comments: false
    },
    compress: {
      conditionals: true, 
      warnings: false,
      dead_code: true,
      unused: true,
      evoluate: true,
      if_return: true,
      join_vars: true
    }
  },

  htmlPluginConfig: {
    title: 'Starter Kit React',
    template: join(paths.src, 'template.html')
  },

  standardPreLoader: {
    enforce: 'pre',
    test: /\.js$/,
    include: paths.src,
    use: {
      loader: 'standard-loader',
      options: {
        parser: 'babel-eslint'
      }
    }
  },

  jsLoader: {
    test: /\.js$/,
    include: paths.src,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [ [
          'env', { modules: false } ], 'stage-0', 'react' ],
        plugins: [
          'react-hot-loader/babel',
          [ 'transform-runtime', {
            helpers: false,
            polyfill: false,
            regenerator: true
          } ]
        ]
      }
    }
  },

  cssLoader: {
    rules: [
      {
        test: /\.(css|styl)$/,
        include: [ paths.components, paths.containers ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true, localIdentName: '[path][name]__[local]--[hash:base64:5]' }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        include: [ paths.dist, paths.modules ],
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  fileLoader: {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
    include: [ paths.src, paths.modules ],
    use: {
      loader: 'file-loader',
      options: {
        name: 'media/[hash:12].[ext]'
      }
    }
  },

  resolve: {
    extensions: [ '.js', '.json', '.styl', '.css' ],
    alias: {
      src: paths.src,
      components: join(paths.components),
      utils: join(paths.src, 'utils'),
      containers: join(paths.containers),
      dist: join(paths.src, 'dist'),
      reducers: join(paths.reduxFlow, 'reducers'),
      stores: join(paths.reduxFlow, 'stores'),
      css: join(paths.dist, 'css'),
      img: join(paths.img, 'img'),
      modules: join(paths.modules, 'modules')
    }
  }
}
