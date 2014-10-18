var bio = {
	"name": "Sahel Mastoureshgh",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "323-895-0521",
		"email": "sahel.mastoureshgh@gmail.com",
		"github": "www.github.com/sahelmastoureshgh",
		"address": "8815 Micheal Edward Dr, Louisville,KY,40291"
	},
	"welcomeMessage": "Welcome",
	"skills": [
		"programming", "web development", "JS"
	],
	"bioPic": "images/fry.jpg"
}
var projects = {
	"projects": [{
		"title": "News Website",
		"dates": "November 2013",
		"description": "Implemented a website which gathers the latest news feeds from xml format of different news agencies and has the ability to share news in Facebook. Using Node.js in server side running in Amazon EC2 cloud platform. For client side used Backbone.js, HTML5, Twitter bootstrap framework.",
		"images": ["www.clicknewsup.com"]

	}]
}
var work = {
	"jobs": [{
		"employer": "CBS Interactive",
		"title": "Software Engineer",
		"location": "Louisville,KY",
		"dates": "October 2014 - Present",
		"description": "Blah blah..."
	}, {
		"employer": "American Printing House for Blind",
		"title": "Software Engineer",
		"location": "Louisville,KY",
		"dates": "March 2014-Octber 2014",
		"description": "Blah blah..."

	}, {
		"employer": "Model N",
		"title": "Software Engineer",
		"location": "Waltham,MA",
		"dates": "June 2012-September 2013",
		"description": "Designed and implemented an application for an international reference pricing for pharmacy industry to analyze revenue for different scenarios in cloud platform salesforce.com using Apex and Java script, Jquery, HTML5. Using Agile method to develop and Git repository tools" + "\n" + "Research about column oriented data base and SQL server 2013" + "\n" + "Research about could platforms and their usages"

	}, {
		"employer": "BioSensics LLC",
		"title": "Software Engineer Intern",
		"location": "Cambridge,MA",
		"dates": "June 2011-September 2011",
		"description": "Designed and implemented an application to analysis the result given from<br> the sensor attached to the human body and plot the movement in real time in Java"

	}]
}
var education = {
	"schools": [{
		"name": "Universtity Of Tehran",
		"location": "Tehran, Iran",
		"degree": "Bachelor",
		"majors": ["ComputerScience"],
		"dates": "August 2006 - May 2009",
		"url": "www.google.com"
	}, {
		"name": "Worcester Polytechnic Institute",
		"location": "Worcester, MA",
		"degree": "Master",
		"majors": ["ComputerScience"],
		"dates": "August 2010 - May 2012",
		"url": "www.wpi.edu"
	}],
	"onlineCourses": [{
		"title": "Tackling the Challenges of Big Data",
		"school": "MIT",
		"dates": "February 2014",
		"url": "www.wpi.edu"
	}, {
		"title": "Data Wrangling with MongoDB",
		"school": "Udacity",
		"dates": "May 2014",
		"url": "www.wpi.edu"

	}, {
		"title": "MongoDB for Node.js Developers",
		"school": "MongoDB",
		"dates": "July 2014",
		"url": "www.wpi.edu"
	}]
}



/**
Display work json object in resume object
**/

work.display=function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formettedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formettedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}

}

//Find all location that I have worked
function locationizer(_work) {
    var allLocation=[];
    for (var work in _work.jobs){
        var _workLoc=_work.jobs[work].location;
        allLocation.push(_workLoc);
    }
    return allLocation;

}

//Dispay bio json object in resume page
bio.display=function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
}
//Display projects in resume page
projects.display=function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if(projects.projects[project].images.length>0){
			for (image in projects.projects[project].images){
				var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImages);
			}
		}

	}
	$("#projects").append(HTMLprojectStart);
	
}
//Display education in my resume page
work.display();
bio.display();
projects.display();
