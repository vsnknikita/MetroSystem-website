
<form action="signup.html" method="post" id="signup">
	<h1>Sign Up</h1>
	<div class="field">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" placeholder="Enter your fullname" />
		<small></small>
	</div>
	<div class="field">
		<label for="email">Email:</label>
		<input type="text" id="email" name="email" placeholder="Enter your email address" />
		<small></small>
	</div>
	<button type="submit">Subscribe</button>
</form>
form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["Phone"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("Demo only. No form was posted.");
	}
});
