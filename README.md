# Local Gym Class Booking System

A responsive web application that allows users to browse, book, and cancel gym classes. The system also supports waitlists, automatically promoting users when spots become available. Built with HTML, CSS, and JavaScript, and deployed via GitHub Pages.

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

The following wireframes illustrate the planned layout and user flow. PNG files are saved in the repository root and will render inline in GitHub.

### Homepage / Navigation

![Homepage Wireframe](homepage.png)

---

### Classes Page

![Classes Wireframe](classes.png)

---

### Booking Form

![Booking Wireframe](booking.png)

---

### Cancellation Form

![Cancellation Wireframe](cancellation.png)

---

### Instructor Profiles

![Instructors Wireframe](instructors.png)

---

## Technologies Used

- **HTML5** for structure  
- **CSS3** for styling and responsiveness  
- **JavaScript (ES6)** for interactivity and logic  
- **localStorage** for client-side persistence  
- **GitHub Pages** for deployment

---

## Testing

The following table outlines the main features tested, steps taken, expected results, and actual results.

| Feature               | Test Steps                                                      | Expected Result                                                        | Actual Result     |
|-----------------------|-----------------------------------------------------------------|------------------------------------------------------------------------|-------------------|
| Browse Weekly Classes | Select a day from the dropdown                                  | Classes for that day display with name, time, instructor, capacity, spots | Works as expected |
| Booking a Class       | Enter name, email, select date and time, submit form            | Booking is confirmed; spots left decreases by one                     | Works as expected |
| Booking Full Class    | Fill a class to capacity, attempt another booking               | User is added to waitlist; message confirms waitlist status            | Works as expected |
| Cancellation          | Enter email and date of an existing booking, submit cancellation | Booking is removed; spots left increases by one                       | Works as expected |
| Waitlist Promotion    | Cancel a booking when waitlist has users                        | First waitlisted user is promoted to booked; confirmation shown       | Works as expected |
| Instructor Profiles   | Scroll to instructor section                                     | Instructor cards display with correct details                         | Works as expected |
| Responsiveness        | Open site on mobile view (DevTools)                             | Layout adapts; navigation stacks; cards resize                         | Works as expected |
| Data Persistence      | Refresh page after making a booking                             | Bookings remain saved via localStorage                                 | Works as expected |

---

## Deployment

### GitHub Pages

1. Pushed my code to the `main` branch.  
2. In the repository’s **Settings → Pages**, Iset **Branch** to `main` and **Folder** to `/ (root)`.  
3. Save and waited for the site to build.  
4. Visited `https://MrAshleyOsborne.github.io/localgymclasses/`.

---

## Future Improvements

- **User Accounts**: Allow users to log in, manage profiles, and view booking history.  
- **Email / SMS Notifications**: Send reminders and confirmations on booking, cancellation, and waitlist promotion.  
- **Calendar View**: Offer a weekly/monthly calendar interface for easier browsing.  
- **Search and Filters**: Enable filtering by instructor, class type, or difficulty.  
- **Accessibility Enhancements**: Improve ARIA labels, keyboard navigation, and color contrast.  
- **Automated Testing**: Add unit and integration tests for reliability.  
- **CI/CD Pipeline**: Explore Netlify, Vercel, or GitHub Actions for continuous deployment.

---

## Credits

- Built by Ashley Osborne as part of Code Institute coursework.  
- Inspired by real-world gym booking systems.  
- Instructor data and class examples are fictional.  
