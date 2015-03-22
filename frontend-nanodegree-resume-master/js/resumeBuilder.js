/************************************************************
2. Iterate through each JSON and append its information to index.html
in the correct section.
*********
 * First off, you’ll be using jQuery’s `selector.append()` and
 `selector.prepend()` functions to modify index.html. `selector.append()`
  makes an element appear at the end of a selected section. `selector.prepend()`
  makes an element appear at the beginning of a selected section.
   * Pay close attention to the ids of the `<div>`s in index.html
   and the HTML snippets in helper.js. They’ll be very useful as jQuery
   selectors for `selector.append()` and `selector.prepend()`
*****************
* You’ll also be using the JavaScript method `string.replace(old, new)`
to swap out all the placeholder text (e.g. `%data%`) for data from your
resume JSONs.
********************
* Here’s an example of some code that would add the location of one your
companies to the page:
********
   * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs
   [job].location);`
   * `$(".work-entry:last").append(formattedLocation);`
 ***********
 * Use the mockup at the bottom of this document as a guide for the order
 in which you should append elements to the page.
**************************************************/
/*********************************

* First off, you’ll be using jQuery’s `selector.append()` and
 `selector.prepend()` functions to modify index.html. `selector.append()`
  makes an element appear at the end of a selected section. `selector.prepend()`
  makes an element appear at the beginning of a selected section.
   * Pay close attention to the ids of the `<div>`s in index.html
   and the HTML snippets in helper.js. They’ll be very useful as jQuery
   selectors for `selector.append()` and `selector.prepend()`
***********************************
****************************************************
* 4. All of your code for adding elements to the resume should be within
functions. And all of your functions should be encapsulated within the same
objects containing your resume data. For instance, your functions for
appending work experience elements to the page should be found within
the same object containing data about your work experience.
*******************************************
/******************************************************
1.* `bio` contains a `name`, `role`, `welcomeMessage`, `contacts` object and
 `skills` array. The `contacts` object should contain (but doesn't have to)
 a `mobile number`, `email` address, `github` username, `twitter` handle and
  `location`.
  **************************************************/


var bio = {
 		"name": "Kim Chu",
 		"role": "Web developer",
 		"contacts": {
 			"mobile": "352-281-4199",
 			"email": "kim@chucrew.net",
 			"github": "dingGator",
 			"location": "Gainesville, Florida"
 			},
 		"welcomeMessage": "Experienced working in a high-energy team position.",
 		"skills": [
 			"flexibility",
 			"Java",
 			"Javasript",
 			"HTML",
 			"CSS",
 			],
 		"bioPic":  	"http://placehold.it/100x100",
 		"display":
/***********************
	header display contacts info section
*********************/
function displayBio()
{

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


	$("#topContacts").append(formattedEmail);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedLocation);


	var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMsg);
	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedImage);

/********************************************
	Skills display section
**********************/

	$("#header").append(HTMLskillsStart);

	if (bio.skills.length > 0) {

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);

	    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
 	};
/**********************************
	footer display section
***********************/

	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedLocation);
},
};

 /***********************************************************
 /* `work` contains an array of `jobs`. Each `job` object in `jobs` should contain
an `employer`, `title`, `location`, `dates worked` and `description`.
*****************************************************/

var work =
	 {
 		"jobs":
 		[
 			{
 				"employer": "Brookdale Senior Living:",
 				"title": "Resident Care Assistant",
 				"location": "Gainesville, Florida",
 				"dates": "2011 - present",
 				"description": "Assist resident in daily living activities"
 			},
 			{
 				"employer": "Advantage Sales and Marketing:",
 				"title": "Sales Assistant",
 				"location": "Gainesville, Florida",
 				"dates": "2010 - 2011",
 				"description": "Encouraging sales through tasting samples of products."
 			},
 			{
 				"employer": "Fred Meyer:",
 				"title": "Analyst Assistant",
 				"location": "Portland, Oregon",
 				"dates": "1999 - 2002",
 				"description": "Assist analyst to complete projects according to user specs."
 			}
  		],

	"display":

 /****************************
Work display section

******************************/
function displayWork()
	{

	for (job in work.jobs)
	{

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
    	$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);

	}
}
}

/*************************************************
 * `projects` contains an array of `projects`. Each `project` object in `projects`
  should contain a `title`, `dates worked`, `description`, and an `images` array
  with URL strings for project images.
*****************************************/

var projects =
	{
 		"projects":
 		[
 			{
 				"title": "Interactive Resume",
  				"dates": "March 2015",
  				"description": "An interactive resume",
  				"images":
  					[
  					"http://placehold.it/300x200",
  					"http://placehold.it/300x200"
  					]
  			},
		],

		"display":

/**************************************
project display section

************/
	function displayProjects()
	{
		for (project in projects.projects)
			{
				$("#projects").append(HTMLprojectStart);

 				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length>0)
		{	for (image in projects.projects[project].images)
			{
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	};
}
}
/***************************************************
  * `education` contains an array of `schools`. Each `school` object in
 `schools` contains a `name`, `location`, `degree`, `majors` array,
 `dates attended` and a `url` for the school's website. `education` also
 contains an `onlineCourses` array. Each `onlineCourse` object
 in `onlineCourses` should contain a `title`, `school`, `dates attended`
 and a `url` for the course.
***************************************************
*/
var education =
	{
	"schools": [
		{
			"name": "University of South Florida",
			"location": "Tampa, Florida",
			"degree": "B.S.",
			"majors": ["Microbiology"],
			"dates": 1991,
			"url": "http://placehold.it/300x200",

		},
		{
			"name": "Santa Fe College",
			"location": "Gainesville, Florida",
			"degree": "A.S.",
			"majors": "Biotechnology",
			"dates": 2011,
			"url": "http://placehold.it/300x200",
  		},
	],
	"onlineCourses": [
		{
		"title": "Front End Web Developer",
		"school": "Udacity",
		"date": 2015,
		"url": "http://www.udacity.com/course/ud804"
		},
		],
	"display":
/************************************************
education display section

********/

function displayEducation()
{

	for (school in education.schools)
	{
		$("#education").append(HTMLschoolStart);
 		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDegree);
 		$(".education-entry:last").append(formattedDates);
 		$(".education-entry:last").append(formattedLocation);
 		$(".education-entry:last").append(formattedMajor);
 	};


 	for (course in education.onlineCourses)
	{
		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedSchool);
 		$(".education-entry:last").append(formattedDates);
 		$(".education-entry:last").append(formattedUrl);
 	}

}}
/******
3. The resume includes an interactive map. To add it, append the googleMap
string to `<div id=”map”>`.
********************************/
bio.display("displayBio");

work.display("displayWork");

projects.display("displayProjects");

education.display("displayEducation");

/**********************************
	internationalize name display section
***********************/

function inName(name)
	{
		name = name.trim().split(" ");
		console.log(name);
		name[1] = name[1].toUpperCase();
		name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

		console.log(name);
    	return name[0]+ " " + name[1];
    }

$("#main").append(internationalizeButton);
$(document).click(function(loc) {
		// your code goes here
	inName(bio.name);

	});



/********************************
5. Your resume should also `console.log()` information about click
locations. On line 90 in helper.js, you’ll find a jQuery onclick handler
that you’ll need to modify to work with the `logClicks(x,y)` function
above it.
******************************************/

$(document).click(function(loc) {
	// your code goes here
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);[0]
});

/*********************************/
/***********************************************
6. It’s possible to make additional information show up when you
click on the pins in the map. Check out line 174 in helper.js and
the Google Maps API to get started.
 No newline at end of file
********************/
$("#mapDiv").append(googleMap);
