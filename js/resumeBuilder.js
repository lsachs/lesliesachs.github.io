$("#main").append(bio);

var bio = {
	"name": "Leslie Sachs",
	"role": "Business Consultant",
	"welcomemessage": "Hi",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "lsachs7565@gmail.com",
		"github": "lsachs",
		"location": "Boston",
	}
	
	"skills": [
		"HTML",
		"CSS",
		"JS",
		"Axure",
		"Adobe Creative Suite"
	],
	"pictureURL" : "images/me.png"
}

var education = {
	"schools": [
		{
			"name": "Scripps College",
			"location": "Claremont, CA",
			"degree": "BA",
			"majors": ["Politics", "Psychology"],
			"dates": "2014",
			"url": "www.scrippscollege.edu"
		}
	]
	"onlineCourses": [
		{
			"title": "Front End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "TIAA-CREF",
			"title": "Business Consultant",
			"dates": "2014- Present",
			"description": "Developed tools and processes to improve financial advisors' practice"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2015",
			"description": "xxxxxxxx",
			"images": "file:///Users/lesliesachs/Desktop/version-control/portfolio/framework/images/citywatercolor.jpg"
		}
	]
}

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

var formattedheaderName = HTMLheaderName.replace("%data%", bio.name);
var formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile= HTMLmobil.replace
	("%data%"), bio.contacts.mobile);
$("#Contacts,").append(formattedMobile);

var formattedEmail= HTMLemail.replace
	("%data%"), bio.contacts.email);
$("#Contacts,").append(formattedEmail);

var formattedGithub= HTMLgithub.replace
	("%data%"), bio.contacts.github);
$("#Contacts,").append(formattedGithub);

var formattedLocation = HTMLlocation.replace
	("%data%"), bio.contacts.location);
$("#Contacts,").append(formattedLocation);

var formattedWelcomeMessage = HTMLwelcomemessage.replace
	("%data%"), bio.contacts.welcomeMessage);
$("#header,").append(formattedWelcomeMessage);

var formattedPictureURL = HTMLpictureurl.replace
	("%data%"), bio.pictureURL);
$("#header,").append(formattedPictureURL);

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("
		%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[4]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkstart);

		var formattedEmployer = HTMLworkEmployer.replace
		("%data$", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace
		("%data$", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace
			("%data$", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription= HTMLworkDescription.replace
			("%data$", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		}
	}
}
displayWork();

projects.display = function () {
	for (project in projects) {
		$("projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description;
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[projects].images.length > 0) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
$("#projects").append(projects.display);

education.display = function ();
	for (schools in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace
		("%data$", education.schools[school].name);

		var formattedDegree = HTMLschoolDegree.replace
		("%data$", education.schools[school].degree);	

		var formattedNameDegree	= formattedName + formattedDegree;
		$(".education-entry").append(formattedNameDegree);
		}
	}
}
$("#education").append(education.display);

$(document).click(function(loc) {
	varX = loc.pageX;
	varY = loc.pageY;
	logClicks(x,y);
});

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

console.log(locationizer(work));

function inName(name) {
	name = name.trim ( ).split (" ");
	console.log(name);
	name[1] = name[1].toUpperCase( );
	name[0] = name[0].slice(1).toUpperCase + name[0].slice(1).toLowerCase( );

	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);



