myBlurFunction = function() {
	let containerElement = document.getElementById('block5');
	let overlayEle = document.getElementById('modal');
	overlayEle.style.display = 'none';
	containerElement.setAttribute('class', null);
};

let contactForm = document.getElementById("application");
let containerElement = document.getElementById('block5');
let overlayEle = document.getElementById('modal');

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let form = new FormData(contactForm);
    fetch('https://formspree.io/olena.reshetnik@gmail.com', {
        method: 'post',
        body: form
    }).then(function(response) {
    	console.log(response);
        overlayEle.style.display = 'block';
		containerElement.setAttribute('class', 'blur');
    }).catch(function(data) {
        console.log(data);
    });
});