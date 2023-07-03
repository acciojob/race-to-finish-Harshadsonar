function generatePromise() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Hello, world!")
		},1000)
	})
}
generatePromise().then(data) => {
	const element = document.getElementById("output");
	element.innerText = data;
}