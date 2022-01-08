const signup = async event => {
	event.preventDefault();

	// idk where this going dude
	const response = await fetch('/auth/register', {
		body: JSON.stringify({
        	email: event.target.email.value,
        	fname: event.target.fname.value,
        	lname: event.target.lname.value,
        	is_landlord: event.target.is_landlord.value,
        	password: event.target.password.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
  });
  const successfail = await response.json();
  alert(successfail);
}

export default signup;
