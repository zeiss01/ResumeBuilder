var formattedName=HTMLheaderName.replace("%data%","Sahel");
var formattedRole=HTMLheaderRole.replace("%data%","Software Engineer");
var skills=["programming","web development","JS"];
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
