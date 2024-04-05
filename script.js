//1.Create your own resume data in JSON format.

const myResume = {
  personalInfo: {
    name: "Shweta",
    email: "shwetakohad22@gmail.com",
    phone: "8669988621",
    degree: "B.E",
    location: {
      address: "180, Vyankatesh nagar",
      postalCode: "440024",
      District: "Nagpur",
      state: "Maharashtra",
      country: "India",
    },
  },
  profiles: [
    {
      github: "https://github.com/shwetakohad22",
    },
  ],

  work: [
    {
      company: " Innovations for Me Solution ",
      position: "Intern",
      startDate: "2023-01-15",
      endDate: "2023-07-15",
      summary:
        " Developed and thoroughly tested websites using HTML, CSS, and JavaScript, ensuring optimal functionality and user experience.  Applied advanced techniques in React.js to enhance website interactivity and performance, contributing to the modernization of web projects. Collaborated closely with senior developers to implement industry best practices and adhere to project timelines, fostering a productive learning environment.",
    },
  ],
  education: [
    {
      institution: "Yeshwantrao chavhan college of Engineering",
      department: "ECE",
      "start year": 2018,
      "end year": 2023,
      cgpa: 7.08,
    },
  ],
  skills: ["JavaScript", "HTML", "CSS", "Git"],
  languages: [
    {
      language: "Hindi,English,Marathi",
    },
  ],
};
console.log(myResume);

// 2.Iterating using for loop

console.log("Iterating using for loop:");
for (let section in myResume) {
  console.log(section);
  if (Array.isArray(myResume[section])) {
    for (let item of myResume[section]) {
      console.log(item);
    }
  } else {
    console.log(myResume[section]);
  }
}

// Iterating using for...in loop
console.log("Iterating using for...in loop:");
for (let section in myResume) {
  console.log(section);
  if (Array.isArray(myResume[section])) {
    for (let index in myResume[section]) {
      console.log(myResume[section][index]);
    }
  } else {
    console.log(myResume[section]);
  }
}

// Iterating using for...of loop
console.log("Iterating using for...of loop:");
for (let section of Object.keys(myResume)) {
  console.log(section);
  if (Array.isArray(myResume[section])) {
    for (let item of myResume[section]) {
      console.log(item);
    }
  } else {
    console.log(myResume[section]);
  }
}

// Iterating using forEach method for arrays
console.log("Iterating using forEach method:");
Object.keys(myResume).forEach((section) => {
  console.log(section);
  if (Array.isArray(myResume[section])) {
    myResume[section].forEach((item) => console.log(item));
  } else {
    console.log(myResume[section]);
  }
});
