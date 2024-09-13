const path = require("path");

module.exports = {
  entry: "./src/Charter.ts", // Your TypeScript entry file
  module: {
    rules: [
      {
        test: /\.ts$/, // Process .ts files
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve both .ts and .js files
  },
  output: {
    filename: "bundle.js", // Output bundled file
    path: path.resolve(__dirname, "dist"),
  },
};
