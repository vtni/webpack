module.exports = {
	mode: "development",
	output: {
		publicPath: "assets/",
		urlModuleFilename: "images/file.[ext]"
	},
	module: {
		rules: [
			{
				test: /\.png$/,
				type: "url/experimental"
			}
		]
	}
};
