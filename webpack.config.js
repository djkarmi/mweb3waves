module.exports = {
	entry: [
		'./main.js'
	],
	output: {
		filename: 'build.js'
	},
	module: {
		rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
		]
	}
};