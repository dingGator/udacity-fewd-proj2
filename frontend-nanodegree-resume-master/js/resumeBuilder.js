
 /***********************************************************
 /* `work` contains an array of `jobs`. Each `job` object in `jobs` should contain
an `employer`, `title`, `location`, `dates worked` and `description`.
*****************************************************
 var work = {
 	"jobs": [
 	{
 		"employer": "Brookdale Senior Living",
 		"title": "Resident Care Assistant",
 		"location": "Gainesville, Florida",
 		"dates worked": "2011 - present",
 		"description": "Assist resident in daily living activities"
 	},
 	{
 		"employer": "Advebtage Sales and Marketing",
 		"title": "Sales Assistant",
 		"location": "Gainesville, Florida",
 		"dates worked": "2010 - 2011",
 		"description": "Encouraging sales through tasting samples of products."
 	},
 	{
 		"employer": "Fred Meyer",
 		"title": "Analyst Assistant",
 		"location": "Portland, Oregon",
 		"dates worked": "1996 - 2002",
 		"description": "Assist analyst to complete projects according to user specs."
 	}
 	]
 };

/*************************************************
 * `projects` contains an array of `projects`. Each `project` object in `projects`
  should contain a `title`, `dates worked`, `description`, and an `images` array
  with URL strings for project images.
*****************************************
 var projects = {
 	"projects": [
 		{
 			"title": "Interactive Resume",
  			"dates worked": "3-2015 to present",
  			"description": "An interactive resume",
  			"images": [
  			"http://placehold.it/100x100",
  			"http://placehold.it/100x100"
  			]
  		}
  	]
  };

/******************************************************
* `bio` contains a `name`, `role`, `welcomeMessage`, `contacts` object and
 `skills` array. The `contacts` object should contain (but doesn't have to)
 a `mobile number`, `email` address, `github` username, `twitter` handle and
  `location`.
  **************************************************/

var bio = {
 	"name": "Kim Lien Chu",
 	"role": "Web developer",
 	"contacts": {
 		"mobile": "352-281-4199",
 		"email": "kim@chucrew.net",
 		"github": "dingGator"
 	},
 	"welcomeMessage": "Experienced working in a high-energy team in a high-demanding position.",
 	"skills": [
 		"Java", "Javasript", "HTML", "CSS"
 	],
 	"bioPic": "images/fry.jpg"
 };

 //**************************code from lesson 1 Data Types*********************

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);


var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
/*
counsel.log(bio.skills[0]);
if {bio.skills.length != 0} {
	var formattedSkills = HTMLskillsStart.replace("%data%", bio.skills);
	$("#topContacts").append(formattedSkills);

 	};

//***********************************/

 /***************************************************
  * `education` contains an array of `schools`. Each `school` object in
 `schools` contains a `name`, `location`, `degree`, `majors` array,
 `dates attended` and a `url` for the school's website. `education` also
 contains an `onlineCourses` array. Each `onlineCourse` object
 in `onlineCourses` should contain a `title`, `school`, `dates attended`
 and a `url` for the course.
***************************************************

var education = {
"schools": [
	{
		"name": "University of South Florida",
		"location": "Tampa, Florida",
		"degree": "B.S.",
		"majors": ["Microbiology"],
		"dates attended": 1991,
		"url": "http://example.com"
	},
	{
		"name": "Santa Fe College",
		"city": "Gainesville, Florida",
		"degree": "A.S.",
		"majors": "Biotechnology",
		"dates attended": 2011,
		"url": "http://example.com"
	}
	],
	"onlineCourses": [
		{
		"title": "Front End Web Developer",
		"school": "Udacity",
		"dates attended": 2015,
		"url": "http://www.udacity.com/course/ud804"
		}
	]
};

/************************************************************
2. Iterate through each JSON and append its information to index.html
in the correct section.
 * First off, you’ll be using jQuery’s `selector.append()` and
 `selector.prepend()` functions to modify index.html. `selector.append()`
  makes an element appear at the end of a selected section. `selector.prepend()`
  makes an element appear at the beginning of a selected section.
   * Pay close attention to the ids of the `<div>`s in index.html
   and the HTML snippets in helper.js. They’ll be very useful as jQuery
   selectors for `selector.append()` and `selector.prepend()`
* You’ll also be using the JavaScript method `string.replace(old, new)`
to swap out all the placeholder text (e.g. `%data%`) for data from your
resume JSONs.
* Here’s an example of some code that would add the location of one your
companies to the page:
   * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs
   [job].location);`
   * `$(".work-entry:last").append(formattedLocation);`
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

   ***********************/

/*********************
3. The resume includes an interactive map. To add it, append the googleMap
string to `<div id=”map”>`.
********************************/
/* 4. All of your code for adding elements to the resume should be within
functions. And all of your functions should be encapsulated within the same
objects containing your resume data. For instance, your functions for
appending work experience elements to the page should be found within
the same object containing data about your work experience.
5. Your resume should also `console.log()` information about click
locations. On line 90 in helper.js, you’ll find a jQuery onclick handler
that you’ll need to modify to work with the `logClicks(x,y)` function
above it.
6. It’s possible to make additional information show up when you
click on the pins in the map. Check out line 174 in helper.js and
the Google Maps API to get started.
 No newline at end of file

 ********************************************************/
