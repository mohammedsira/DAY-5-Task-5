var resumeData = {
    "profile": {
        "name"   : "Mohammed Sirajudeen",
        "email"  : "mohammedsira18@gmail.com",
        "phone"  : "7502626719",
        "studies": "diploma in civil enginnering",
    },
    "location": {
        "address"    :"singaravelan salai,rayol mahal road",
        "city"       : "karaikal",
        "state"      : "puducherry",
        "pincode"    : "609602",
        "country"    : "India",
    },
    "education": {
        "degree"  : "diploma in civil engineering",
        "school"  : "M.E.S high school",
        "location": "karaikal, india",
        "date"    : "may/1996 - april/20",
    
    },
    "skills": [
        {
            "name": "full stack devaloper,",
            "level": "Beginner",
        },
    ],
    "languages": [
        {
            "language": "Tamil,Enlish",
        },
    ],
};
console.log(resumeData);

//   2.For the above JSON iterate over all for loops (for, for in, for of, for Each)

console.log("Using for loop:");
for (var key in resumeData.profile) {
    console.log(`${key}: ${resumeData.profile[key]}`);
}

console.log("\nUsing for...in loop:");
for (var key in resumeData.location) {
    if (resumeData.location.hasOwnProperty(key)) {
        console.log(`${key}: ${resumeData.location[key]}`);
    }
}

console.log("\nUsing for...of loop:");
for (var value of Object.values(resumeData.profile)) {
    console.log(value);
}

console.log("\nUsing forEach loop for education:");
resumeData.education.forEach((education) => {
    console.log(education);
});

console.log("\nUsing forEach loop for skills:");
resumeData.skills.forEach((skills) => {
    console.log(skills);
});

console.log("\nUsing forEach loop for languages:");
resumeData.languages.forEach((languages) => {
    console.log(languages);
});