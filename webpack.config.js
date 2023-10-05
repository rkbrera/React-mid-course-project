const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "/",
    path: path.join(__dirname, "public")
},

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Pluguin para usar la plantilla de HTML en el src
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/, // archivos que terminen en .js, usará babel loader
        exclude: /node_modules/, // excluimos archivos de la carpeta node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], // en los archivos .js usará babel para cargarlos
          },
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: ["style-loader", "css-loader", 'postcss-loader'], // archivos .css utilizarán modulo de style-loader y css-loader
      },
    ],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
