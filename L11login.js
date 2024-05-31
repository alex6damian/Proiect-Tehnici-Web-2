document.getElementById("login-form").addEventListener("submit", function (e) {
	e.preventDefault();

	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	fetch("L11users.json")
		.then ((response) => response.json())
		.then ((users) => {
			const userExists = users.some(
				(user) => user.username === username && user.password === password
			);

			if(userExists) {
				sessionStorage.setItem("username", username);
				alert("Logged in successfully!");
				setTimeout(function () {
					window.location.href = "/reviews.html";
				}, 500);
			}
			else
			{
				window.location.href = "/L11404.html";
			}
		})
		.catch((error) => {
			console.error("Erorr: ", error);
		});
});