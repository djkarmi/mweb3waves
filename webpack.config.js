module.exports = {
	entry: [
<<<<<<< HEAD
		'./src/main.js'
=======
		'./main.js'
>>>>>>> dc005fa3095047c5f7702cbdf885fe67c279f1e4
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