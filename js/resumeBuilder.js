var bio = {
	"name": "Leslie Sachs",
	"role": "Business Consultant",
	"welcomeMessage": "Welcome to Leslie's Resume",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "lsachs7565@gmail.com",
		"github": "lsachs",
		"twitter": "@leslie_sachs",
		"location": "Boston",
	},
	"skills": [
		"HTML",
		"CSS",
		"JS",
		"Axure",
		"Adobe Creative Suite"
	],
	"biopic" : "images/me.png"
};

var education = {
	"schools": [{
			"name": "Scripps College",
			"location": "Claremont, CA",
			"degree": "BA",
			"major": ["Politics", " Psychology"],
			"dates": 2014,
			"url": "www.scrippscollege.edu"
		}
	],
	"onlineCourses": [{
			"title": "Front End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

var work = {
	"jobs": [{
			"employer": "TIAA-CREF",
			"title": "Business Consultant",
			"dates": "2014- Present",
			"location": "Boston, MA",
			"description":
			"Developed tools and processes to improve financial advisors' practice"
		}
	]
};

var projects = {
	"projects": [{
			"title": "Sample Project 1",
			"dates": "2015",
			"description": "Watercolor Painting",
			"images": ["images/citywatercolor%20copy.jpg"]
		}
	]
};

bio.display = function() {
	var formattedheaderName = HTMLheaderName.replace("%data%", bio.name);
	var formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedheaderRole);
	$("#header").prepend(formattedheaderName);

	var formattedMobile= HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail= HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub= HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedTwitter= HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedbiopic);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLocation);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
	}
}
bio.display();

work.display = function() {
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();

projects.display = function () {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length>0) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			$(".project-entry:last").append(formattedImage);
		}
	}
}
projects.display();


education.display = function () {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);	

		var formattedNameDegree	= formattedName + formattedDegree;
		$(".education-entry").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry").append(formattedLocation);		

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}
education.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
	console.log(x,y);
});

function locationizer(work) {
	var locationArray = [];
	for (job in work.jobs){
		var newLocation = work.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

function inName(name) {
	name = name.trim ( ).split (" ");
	console.log(name);
	name[1] = name[1].toUpperCase( );
	name[0] = name[0].slice(1).toUpperCase + name[0].slice(1).toLowerCase( );

	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

$("#map-div").append(googleMap);