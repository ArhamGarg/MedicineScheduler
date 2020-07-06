function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "arhamgarg1604@gmail.com",
	Password : "Messier 87*",
	To : 'cavikasgarg@gmail.com',
	From : "arhamgarg1604@gmail.com",
	Subject : "Send E-mail",
	Body : "Hello",
	}).then(
		message => alert("mail sent successfully")
	);
}