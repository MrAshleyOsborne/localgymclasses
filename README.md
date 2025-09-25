# localgymclasses
A simple gym class booking system with weekly schedules, instructor profiles, capacity tracking, waitlists, and cancellations built with HTML, CSS, and JavaScript using localStorage for persistence

# Local Gym Class Booking System

This project is a web application that allows users to browse weekly gym classes, book sessions by date and time, manage cancellations, and join waitlists. It also includes instructor profiles, an admin panel for adding classes, and local storage persistence. The goal is to provide a simple but functional booking system that demonstrates core web development skills.

---

## Table of Contents

1. Features  
2. User Stories  
3. User Experience (UX)  
4. Design and Wireframes  
5. Technologies Used  
6. Data Model  
7. Testing  
8. Deployment  
9. Future Improvements  
10. Credits

---

## Features

Users can browse weekly classes by day and see live availability with total capacity and remaining spots. They can book classes by selecting a specific date and time, cancel bookings, and join a waitlist if a class is full. The system automatically promotes waitlisted users when a spot becomes available. An admin panel allows new classes to be added with instructor assignment and capacity settings. Instructor profiles include bios, skills, and years of experience. The design is responsive and works on both desktop and mobile.

---

## User Stories

- As a user, I want to see which classes are available on each day so I can plan my week.  
- As a user, I want to know how many spots are left in a class so I can decide quickly.  
- As a user, I want to book a class by selecting a date and time so I can secure my place.  
- As a user, I want to cancel a booking easily so I can free up my spot if I cannot attend.  
- As a user, I want to be added to a waitlist if a class is full so I still have a chance to attend.  
- As an admin, I want to add new classes with instructors and capacities so the schedule can be updated.  
- As a visitor, I want to view instructor profiles so I know who is leading the classes.

---

## User Experience (UX)

Navigation is clear with links to Classes, Booking, Cancellation, Admin, and Instructors. The layout is consistent and easy to follow. The design adapts to smaller screens for mobile use. Forms are simple and accessible with clear labels. Instructor profiles add personality and trust to the platform.

---

## Design and Wireframes

The design uses a clean card‑based layout for both classes and instructors. A consistent color scheme with accent highlights is applied. Wireframes were sketched for desktop and mobile views to ensure responsiveness. Chrome DevTools was used to test breakpoints and layout adjustments.

---

## Technologies Used

HTML5 for structure  
CSS3 for styling and responsiveness  
JavaScript (ES6) for interactivity and logic  
localStorage for persistence  
GitHub Pages for deployment

---

## Data Model

The application uses JavaScript objects to represent instructors and weekly schedules. Each class object stores its name, time, instructor ID, capacity, number booked, bookings array, and waitlist array. Data is persisted in localStorage so that bookings remain after page refresh.

---

## Testing

The following table outlines the main features tested, the steps taken, the expected results, and the actual results observed.

| Feature                | Test Steps                                                                 | Expected Result                                                                 | Actual Result |
|-------------------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------------|---------------|
| Browse Weekly Classes   | Select a day from the dropdown                                             | Classes for that day are displayed with name, time, instructor, capacity, spots | Works as expected |
| Booking a Class         | Enter name, email, select date and time, submit form                      | Booking is confirmed, spots left decreases by one                               | Works as expected |
| Booking Full Class      | Fill booking form for a class at full capacity                            | User is added to waitlist, message confirms waitlist status                     | Works as expected |
| Cancellation            | Enter email and date of an existing booking, submit cancellation form     | Booking is removed, spots left increases by one                                 | Works as expected |
| Waitlist Promotion      | Cancel a booking when waitlist has users                                  | First waitlisted user is promoted to booked, confirmation message shown         | Works as expected |
| Admin Add Class         | Fill admin form with class name, instructor, time, day, and capacity      | New class appears in weekly schedule and booking dropdown                       | Works as expected |
| Instructor Profiles     | Scroll to instructor section                                              | Instructor cards display with name, gender, years, skills, classes, and bio     | Works as expected |
| Responsiveness          | Open site on mobile view in Chrome DevTools                               | Layout adapts, navigation stacks, cards resize for smaller screens              | Works as expected |
| Data Persistence        | Refresh page after making a booking                                       | Bookings remain saved via localStorage                                          | Works as expected |

### Additional Notes
Tested on Chrome, Firefox, and Edge.  
Tested on desktop and mobile screen sizes.  
No critical bugs remain. Minor limitation: admin panel has no authentication.

### Bugs Fixed

An issue where cancelling did not update spots left was resolved. A bug that allowed the admin form to submit without selecting an instructor was also fixed.

### Remaining Issues

The admin panel does not have authentication, so anyone can add classes. Data is stored only in localStorage, which is cleared if the browser cache is reset. There is no backend or database integration. Automated testing has not been implemented.

---

## Deployment

The project is deployed via GitHub Pages.  
Live site: [https://mrashleyosborne.github.io/localgymclasses](https://mrashleyosborne.github.io/localgymclasses)  
Repository: [https://github.com/MrAshleyOsborne/localgymclasses](https://github.com/MrAshleyOsborne/localgymclasses)

Steps to deploy:
1. Push all files to the main branch of the repository.  
2. Go to Settings → Pages.  
3. Under Source, select “Deploy from a branch” and choose `main` branch, root folder.  
4. Save and wait for GitHub Pages to build.  
5. The live link is generated automatically.

---

## Future Improvements

Planned improvements include adding a login system for admin and users, integrating with a backend for persistent storage, adding email or SMS notifications, implementing automated testing, and creating a calendar view for easier browsing.

---
## Testing

The following table outlines the main features tested, the steps taken, the expected results, and the actual results observed.

| Feature                | Test Steps                                                                 | Expected Result                                                                 | Actual Result |
|-------------------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------------|---------------|
| Browse Weekly Classes   | Select a day from the dropdown                                             | Classes for that day are displayed with name, time, instructor, capacity, spots | Works as expected |
| Booking a Class         | Enter name, email, select date and time, submit form                      | Booking is confirmed, spots left decreases by one                               | Works as expected |
| Booking Full Class      | Fill booking form for a class at full capacity                            | User is added to waitlist, message confirms waitlist status                     | Works as expected |
| Cancellation            | Enter email and date of an existing booking, submit cancellation form     | Booking is removed, spots left increases by one                                 | Works as expected |
| Waitlist Promotion      | Cancel a booking when waitlist has users                                  | First waitlisted user is promoted to booked, confirmation message shown         | Works as expected |
| Admin Add Class         | Fill admin form with class name, instructor, time, day, and capacity      | New class appears in weekly schedule and booking dropdown                       | Works as expected |
| Instructor Profiles     | Scroll to instructor section                                              | Instructor cards display with name, gender, years, skills, classes, and bio     | Works as expected |
| Responsiveness          | Open site on mobile view in Chrome DevTools                               | Layout adapts, navigation stacks, cards resize for smaller screens              | Works as expected |
| Data Persistence        | Refresh page after making a booking                                       | Bookings remain saved via localStorage                                          | Works as expected |

### Additional Notes

- Tested on Chrome, Firefox, and Edge  
- Tested on desktop and mobile screen sizes  
- No critical bugs remain  
- Minor limitation: admin panel has no authentication  

### Bugs Fixed

- Cancelling did not update spots left — resolved  
- Admin form allowed submission without selecting instructor — resolved  

### Remaining Issues

- Admin panel has no authentication  
- Data is stored only in localStorage (cleared if browser cache is reset)  
- No backend or database integration  
- No automated testing implemented  

---

## Heroku Deployment Testing

| Feature / Area          | Test Steps                                                                 | Expected Result                                                                 | Actual Result |
|--------------------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------------|---------------|
| **Deployment**           | Open the Heroku app URL in browser                                         | Homepage loads with header, navigation, and sections visible                     | Works as expected |
| **Static Assets**        | Inspect page source and network tab                                        | CSS and JS files load correctly without 404 errors                               | Works as expected |
| **Browse Classes**       | Select a day from dropdown                                                 | Classes for that day display with correct details                                | Works as expected |
| **Booking Form**         | Enter name, email, date, select time, submit                              | Booking confirmed, spots left decreases                                          | Works as expected |
| **Full Class Booking**   | Fill all spots, attempt another booking                                    | User added to waitlist, confirmation message shown                               | Works as expected |
| **Cancellation**         | Enter email and date of existing booking, submit                          | Booking removed, spots left increases                                            | Works as expected |
| **Waitlist Promotion**   | Cancel a booking when waitlist has users                                   | First waitlisted user promoted to booked                                         | Works as expected |
| **Admin Add Class**      | Fill admin form with class details, submit                                | New class appears in schedule and booking dropdown                               | Works as expected |
| **Instructor Profiles**  | Scroll to instructor section                                               | Instructor cards display with correct info                                       | Works as expected |
| **Responsiveness**       | Open site in mobile view (DevTools)                                       | Layout adapts, navigation stacks, cards resize                                   | Works as expected |
| **Data Persistence**     | Make a booking, refresh page                                               | Booking remains saved via localStorage                                           | Works as expected |



## Credits

Project created by Ashley Osborne. Instructor bios and data are fictional.  
Deployed using GitHub Pages.  
