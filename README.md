# Local Gym Class Booking System

A responsive web application that allows users to browse, book, and cancel gym classes. The system also supports waitlists, automatically promoting users when spots become available. Built with HTML, CSS, and JavaScript, and deployed via GitHub Pages and Heroku.

---

## Features

- Browse weekly classes by day and see live availability with total capacity, spots left, and waitlist length.  
- Book classes by selecting a specific date and time.  
- Cancel bookings easily, with automatic waitlist promotion.  
- Instructor profiles include bios, skills, and years of experience.  
- Responsive design works on both desktop and mobile.  
- Data is stored in localStorage for persistence across sessions.

---

## User Stories

- As a user, I want to see which classes are available on each day so I can plan my week.  
- As a user, I want to know how many spots are left in a class so I can decide quickly.  
- As a user, I want to book a class by selecting a date and time so I can secure my place.  
- As a user, I want to cancel a booking easily so I can free up my spot if I cannot attend.  
- As a user, I want to be added to a waitlist if a class is full so I still have a chance to attend.  
- As a user, I want to be promoted from the waitlist automatically if a spot opens up.  
- As a visitor, I want to view instructor profiles so I know who is leading the classes.

---

## User Experience (UX)

- Clear navigation with links to Classes, Booking, Cancellation, and Instructors.  
- Consistent layout and easy-to-follow forms.  
- Responsive design adapts to smaller screens.  
- Accessible forms with clear labels.  
- Instructor profiles add trust and personality.

---

## Wireframes

The following wireframes were created to plan the layout and user flow of the Gym Class Booking System. They illustrate the structure of the homepage, booking form, cancellation form, and instructor profiles before development began.

### Homepage / Navigation
- Header with site title and navigation links (Classes, Book, Cancel, Instructors).
- Clear, consistent navigation across all pages.
- Responsive layout for desktop and mobile.

![Homepage Wireframe](assets/wireframes/homepage.png)

---

### Classes Page
- Dropdown to select a day of the week.
- Dynamic display of classes with name, instructor, time, capacity, spots left, and waitlist length.

![Classes Wireframe](assets/wireframes/classes.png)

---

### Booking Form
- Input fields for name, email, and date.
- Dropdown populated with available classes for the selected date.
- Confirmation message displayed after booking.

![Booking Wireframe](assets/wireframes/booking.png)

---

### Cancellation Form
- Input fields for email and date.
- Confirmation message displayed after successful cancellation.
- Automatic waitlist promotion if applicable.

![Cancellation Wireframe](assets/wireframes/cancellation.png)

---

### Instructor Profiles
- Grid of instructor cards with name, gender, years of experience, skills, classes taught, and bio.
- Responsive design for mobile view.

![Instructors Wireframe](assets/wireframes/instructors.png)

---

> **Note:** Wireframes were created using [your chosen tool, e.g., Figma, Balsamiq, or hand‑drawn scans]. They served as a guide for building the final responsive layout.

---

## Technologies Used

- **HTML5** for structure  
- **CSS3** for styling and responsiveness  
- **JavaScript (ES6)** for interactivity and logic  
- **localStorage** for client-side persistence  
- **Heroku** and **GitHub Pages** for deployment

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
| Instructor Profiles     | Scroll to instructor section                                              | Instructor cards display with name, gender, years, skills, classes, and bio     | Works as expected |
| Responsiveness          | Open site on mobile view in Chrome DevTools                               | Layout adapts, navigation stacks, cards resize for smaller screens              | Works as expected |
| Data Persistence        | Refresh page after making a booking                                       | Bookings remain saved via localStorage                                          | Works as expected |

### Additional Notes
- Tested on Chrome, Firefox, and Edge  
- Tested on desktop and mobile screen sizes  
- No critical bugs remain  

### Bugs Fixed
- Booking dropdown not populating after selecting a date — fixed by mapping date → weekday.  
- Cancelling did not update spots left — resolved.  

### Remaining Issues
- Data is stored only in localStorage (cleared if browser cache is reset).  
- No backend or database integration.  
- No automated testing implemented.

---

## Heroku Deployment Testing

| Feature / Area          | Test Steps                                                                 | Expected Result                                                                 | Actual Result |
|--------------------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------------|---------------|
| Deployment               | Open the Heroku app URL in browser                                         | Homepage loads with header, navigation, and sections visible                     | Works as expected |
| Static Assets            | Inspect page source and network tab                                        | CSS and JS files load correctly without 404 errors                               | Works as expected |
| Browse Classes           | Select a day from dropdown                                                 | Classes for that day display with correct details                                | Works as expected |
| Booking Form             | Enter name, email, date, select time, submit                              | Booking confirmed, spots left decreases                                          | Works as expected |
| Full Class Booking       | Fill all spots, attempt another booking                                    | User added to waitlist, confirmation message shown                               | Works as expected |
| Cancellation             | Enter email and date of existing booking, submit                          | Booking removed, spots left increases                                            | Works as expected |
| Waitlist Promotion       | Cancel a booking when waitlist has users                                   | First waitlisted user promoted to booked                                         | Works as expected |
| Instructor Profiles      | Scroll to instructor section                                               | Instructor cards display with correct info                                       | Works as expected |
| Responsiveness           | Open site in mobile view (DevTools)                                       | Layout adapts, navigation stacks, cards resize                                   | Works as expected |
| Data Persistence         | Make a booking, refresh page                                               | Booking remains saved via localStorage                                           | Works as expected |

---

## Deployment

### GitHub Pages
1. Go to **Settings → Pages**.  
2. Set **Branch = main** and **Folder = /(root)**.  
3. Save and wait for the site to build.  
4. Access at: `https://<username>.github.io/<repo-name>/`

### Heroku
1. Create a new Heroku app.  
2. Push your repo to Heroku:  
   ```bash
   git push heroku main
