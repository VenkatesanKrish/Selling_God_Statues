function validate()
{
    var username = document.getElementById("username").value;
		var password = document.getElementById("password").value; 
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        

 
if (username.match(mailformat) && (username=="venkatesann1998@gmail.com") && (password=="12345")) 
{
alert("Valid email address and password!");

window.location.href = "address.html";

return true;
}
else if(username.match(mailformat) ) 
{
alert("You have entered an invalid email address or password!");



return true;
}
else
{
alert("invalid email");

return false;
}
}