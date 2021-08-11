/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const pkg = require("./package.json");
const escapeRegExp = require("lodash.escaperegexp");

const externals = Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies });

module.exports = (env, argv) => ({
  mode: argv.mode === "production" ? "production" : "development",
  devtool: "inline-source-map",

  entry: {
    index: "./src/index.ts",
  },
  externals: new RegExp(
    `^(${externals.map((name) => escapeRegExp(name)).join("|")})\\b`,
    "i"
  ),
  module: {
    rules: [
      // Converts TypeScript code to JavaScript
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
    ],
  },

  // Webpack tries these extensions for you if you omit the extension like "import './file'"
  resolve: {
    modules: ["node_modules"],
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },

  output: {
    library: "maki-ds-core",
    libraryTarget: "umd",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"), // Compile into a folder called "dist"
    globalObject: "this", // see https://webpack.js.org/configuration/output/#outputglobalobject
  },

  plugins: [new CleanWebpackPlugin()],
});
