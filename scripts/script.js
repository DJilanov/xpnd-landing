var options = ['Agency', 'Influencer', 'Brand', 'Freelancer', 'Other'];

window.onload = function () {
	document.getElementById("submit").onclick = function (event) {
		event.preventDefault();
		var describer = 'Other';
		var xhr = new XMLHttpRequest();
		xhr.open("POST", 'https://xpnd-node.herokuapp.com/api/subscribe', true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		for (var counter = 0; counter < options.length; counter++) {
			if (document.getElementById(options[counter]).checked) {
				describer = options[counter];
				break;
			}
		}

		xhr.send(JSON.stringify({
			email: document.getElementById("Email").value,
			describer: describer,
			type: window.location.href.includes('ebook') ? 'ebook' : 'landing',
			emailUpdates: document.getElementById("Agree").checked
		}));

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 /* complete */) {
				if (xhr.status === 200) {
					alert('Thank you!');
				} else {
					alert('There was error!');
				}
			}
		};
	}
}