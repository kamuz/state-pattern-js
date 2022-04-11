const PageState = function() {
	let currentState = new homeState(this);

	this.init = function() {
		this.change(new aboutState);
	}

	this.change = function(state) {
		currentState = state;
	}
};

// Home State
const homeState = function(page) {
	document.querySelector('#heading').textContent = null;
	document.querySelector('#content').innerHTML = `
	<div class="bg-light p-5 rounded" bis_skin_checked="1">
		<h1>Navbar example</h1>
		<p class="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
		<a class="btn btn-lg btn-primary" href="#" role="button">View navbar docs »</a>
	</div>
	`;
};

// About State
const aboutState = function(page) {
	document.querySelector('#heading').textContent = 'About Us';
	document.querySelector('#content').innerHTML = `
	<p>This is the about page</p>
	`;
};

// Contact State
const contactState = function(page) {
	document.querySelector('#heading').textContent = 'Contact Us';
	document.querySelector('#content').innerHTML = `
	<form>
		<div class="mb-3">
			<label for="email" class="form-label">Email address</label>
			<input type="email" class="form-control" id="email" aria-describedby="email-help">
			<div id="email-help" class="form-text">We'll never share your email with anyone else.</div>
		</div>
		<div class="mb-3">
			<label for="pass" class="form-label">Password</label>
			<input type="password" class="form-control" id="pass">
		</div>
		<div class="mb-3 form-check">
			<input type="checkbox" class="form-check-input" id="checkbox">
			<label class="form-check-label" for="checkbox">Check me out</label>
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
	`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

// Home
home.addEventListener('click', function(e){
	page.change(new homeState);
	e.preventDefault();
});

// About
about.addEventListener('click', function(e){
	page.change(new aboutState);
	e.preventDefault();
});

// Home
contact.addEventListener('click', function(e){
	page.change(new contactState);
	e.preventDefault();
});