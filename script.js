// ---------- Instructor data ----------
const instructors = {
  jake: { name: "Jake Thompson", gender: "Male", years: 7, skills: "Strength training, kettlebell technique, HIIT", classes: ["Kettlebell Blast","Kettlebell Core"], bio: "Jake is a high-energy trainer who specializes in functional strength and kettlebell workouts." },
  maya: { name: "Maya Patel", gender: "Female", years: 10, skills: "Yoga flow, mindfulness, flexibility coaching", classes: ["Yoga Flow","Yoga Restore","Yoga Sunrise"], bio: "Maya blends traditional yoga with modern mindfulness, creating a calm, inclusive environment." },
  liam: { name: "Liam O’Connor", gender: "Male", years: 5, skills: "Functional fitness, endurance circuits, motivational coaching", classes: ["Circuit Training","Circuit Burn","Circuit Challenge"], bio: "Liam’s circuit sessions push limits while keeping workouts fun and accessible." },
  ella: { name: "Ella Roberts", gender: "Female", years: 8, skills: "Spin endurance, cardio intervals, music-driven workouts", classes: ["Spin Express","Spin & Stretch","Spin Endurance"], bio: "Ella’s spin classes are legendary for their playlists and intensity." },
  sofia: { name: "Sofia Martinez", gender: "Non-binary", years: 6, skills: "Dance fitness, Latin-inspired cardio, group energy", classes: ["Zumba Energy","Zumba Party","Zumba Chill"], bio: "Sofia brings the party to the gym floor with joyful, inclusive Zumba sessions." }
};

// ---------- Default schedule ----------
const defaultSchedule = {
  Monday: [
    { name:"Kettlebell Blast", time:"08:00", instructorId:"jake", capacity:10, booked:0, bookings:[], waitlist:[] },
    { name:"Yoga Flow", time:"18:00", instructorId:"maya", capacity:12, booked:0, bookings:[], waitlist:[] }
  ],
  Tuesday: [
    { name:"Circuit Training", time:"07:30", instructorId:"liam", capacity:8, booked:0, bookings:[], waitlist:[] },
    { name:"Spin Express", time:"19:00", instructorId:"ella", capacity:10, booked:0, bookings:[], waitlist:[] }
  ],
  Wednesday: [
    { name:"Zumba Energy", time:"09:00", instructorId:"sofia", capacity:15, booked:0, bookings:[], waitlist:[] },
    { name:"Yoga Restore", time:"17:30", instructorId:"maya", capacity:12, booked:0, bookings:[], waitlist:[] }
  ],
  Thursday: [
    { name:"Kettlebell Core", time:"08:30", instructorId:"jake", capacity:10, booked:0, bookings:[], waitlist:[] },
    { name:"Circuit Burn", time:"18:00", instructorId:"liam", capacity:8, booked:0, bookings:[], waitlist:[] }
  ],
  Friday: [
    { name:"Spin & Stretch", time:"07:00", instructorId:"ella", capacity:10, booked:0, bookings:[], waitlist:[] },
    { name:"Zumba Party", time:"17:00", instructorId:"sofia", capacity:15, booked:0, bookings:[], waitlist:[] }
  ],
  Saturday: [
    { name:"Yoga Sunrise", time:"09:00", instructorId:"maya", capacity:12, booked:0, bookings:[], waitlist:[] },
    { name:"Circuit Challenge", time:"11:00", instructorId:"liam", capacity:8, booked:0, bookings:[], waitlist:[] }
  ],
  Sunday: [
    { name:"Spin Endurance", time:"10:00", instructorId:"ella", capacity:10, booked:0, bookings:[], waitlist:[] },
    { name:"Zumba Chill", time:"16:00", instructorId:"sofia", capacity:15, booked:0, bookings:[], waitlist:[] }
  ]
};

// ---------- DOM elements ----------
const daySelect = document.getElementById("day-select");
const classSchedule = document.getElementById("class-schedule");
const bookingForm = document.getElementById("booking-form");
const bookingDate = document.getElementById("booking-date");
const bookingTime = document.getElementById("booking-time");
const bookingMessage = document.getElementById("booking-message");
const cancelForm = document.getElementById("cancel-form");
const cancelMessage = document.getElementById("cancel-message");
const adminForm = document.getElementById("admin-form");
const adminMessage = document.getElementById("admin-message");
const instructorSelect = document.getElementById("instructor-select");
const instructorsList = document.getElementById("instructors-list");

// ---------- Storage helpers ----------
function getSchedule() {
  return JSON.parse(localStorage.getItem("weeklyClasses")) || defaultSchedule;
}
function saveSchedule(schedule) {
  localStorage.setItem("weeklyClasses", JSON.stringify(schedule));
}

// ---------- Utilities ----------
function weekdayFromDateStr(dateStr) {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", { weekday: "long" });
}
function spotsLeft(cls) {
  return Math.max(0, cls.capacity - cls.booked);
}
function getInstructor(id) {
  return instructors[id];
}

// ---------- Render weekly classes ----------
function displayClasses(day) {
  classSchedule.innerHTML = "";
  const schedule = getSchedule();
  const classes = schedule[day] || [];

  classes.forEach((cls, index) => {
    const instructor = getInstructor(cls.instructorId);
    const div = document.createElement("div");
    div.className = "card";

    const availability = spotsLeft(cls) > 0
      ? `<span class="spots-left">${spotsLeft(cls)} spots left</span>`
      : `<span class="full">Full</span>`;

    div.innerHTML = `
      <h3>${cls.name}</h3>
      <div class="meta">
        <div><strong>Day:</strong> ${day}</div>
        <div><strong>Time:</strong> ${cls.time}</div>
        <div class="capacity"><strong>Capacity:</strong> ${cls.capacity}</div>
        <div class="capacity"><strong>Availability:</strong> ${availability}</div>
      </div>
      <p><strong>Instructor:</strong> ${instructor.name}</p>
      <small>${instructor.gender}, ${instructor.years} years experience</small>
      <div style="margin:6px 0;">
        <span class="spots-left">${instructor.skills}</span>
      </div>
    `;
    classSchedule.appendChild(div);
  });
}

// ---------- Instructors directory ----------
function renderInstructors() {
  instructorsList.innerHTML = "";
  Object.values(instructors).forEach(inst => {
    const card = document.createElement("div");
    card.className = "card instructor";
    card.innerHTML = `
      <h3>${inst.name}</h3>
      <div class="meta">
        <div><strong>Gender:</strong> ${inst.gender}</div>
        <div><strong>Experience:</strong> ${inst.years} years</div>
        <div style="grid-column: span 2;"><strong>Skills:</strong> ${inst.skills}</div>
      </div>
      <p><strong>Leads:</strong> ${inst.classes.join(", ")}</p>
      <p>${inst.bio}</p>
    `;
    instructorsList.appendChild(card);
  });
}

// ---------- Booking: populate times by date ----------
function populateBookingTimes() {
  bookingTime.innerHTML = "";
  const weekday = weekdayFromDateStr(bookingDate.value);
  if (!weekday) return;

  const schedule = getSchedule();
  const classes = schedule[weekday] || [];

  classes.forEach((cls, index) => {
    const instructor = getInstructor(cls.instructorId);
    const option = document.createElement("option");
    option.value = `${weekday}:${index}`;
    option.textContent = `${cls.name} at ${cls.time} — ${instructor.name}`;
    option.disabled = spotsLeft(cls) === 0;
    bookingTime.appendChild(option);
  });
}

// ---------- Booking submit ----------
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("user-name").value.trim();
  const email = document.getElementById("user-email").value.trim();
  const date = bookingDate.value;
  const selected = bookingTime.value;

  if (!selected || !date) {
    bookingMessage.textContent = "Please choose a valid date and session time.";
    return;
  }

  const [day, indexStr] = selected.split(":");
  const index = parseInt(indexStr, 10);
  const schedule = getSchedule();
  const cls = schedule[day][index];

  if (spotsLeft(cls) > 0) {
    cls.bookings.push({ name, email, date });
    cls.booked++;
    bookingMessage.textContent = "Booking confirmed!";
  } else {
    cls.waitlist.push({ name, email, date });
    booking
