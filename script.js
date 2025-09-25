// Sample data for classes and instructors
let classes = [
  { name: "Yoga", instructor: "Alice", day: "Monday", time: "10:00", capacity: 5, bookings: [] },
  { name: "Spin", instructor: "Bob", day: "Tuesday", time: "18:00", capacity: 8, bookings: [] },
  { name: "Pilates", instructor: "Charlie", day: "Wednesday", time: "12:00", capacity: 6, bookings: [] }
];

let instructors = [
  { name: "Alice", gender: "Female", years: 5, skills: "Yoga, Pilates", classes: ["Yoga"], bio: "Passionate about holistic fitness." },
  { name: "Bob", gender: "Male", years: 7, skills: "Spin, HIIT", classes: ["Spin"], bio: "Loves high‑energy workouts." },
  { name: "Charlie", gender: "Non‑binary", years: 4, skills: "Pilates, Strength", classes: ["Pilates"], bio: "Focuses on core strength and balance." }
];

// DOM elements
const daySelect = document.getElementById("day-select");
const classSchedule = document.getElementById("class-schedule");
const bookingForm = document.getElementById("booking-form");
const bookingMessage = document.getElementById("booking-message");
const cancelForm = document.getElementById("cancel-form");
const cancelMessage = document.getElementById("cancel-message");
const bookingTime = document.getElementById("booking-time");
const instructorsList = document.getElementById("instructors-list");

// Populate class schedule
function displayClasses(day) {
  classSchedule.innerHTML = "";
  const filtered = classes.filter(c => c.day === day);
  if (filtered.length === 0) {
    classSchedule.innerHTML = "<p>No classes scheduled for this day.</p>";
    return;
  }
  filtered.forEach(c => {
    const spotsLeft = c.capacity - c.bookings.length;
    const div = document.createElement("div");
    div.className = "class-card";
    div.innerHTML = `<strong>${c.name}</strong> with ${c.instructor} at ${c.time} — Spots left: ${spotsLeft}`;
    classSchedule.appendChild(div);
  });

  // Populate booking times
  bookingTime.innerHTML = "";
  filtered.forEach(c => {
    const option = document.createElement("option");
    option.value = c.time;
    option.textContent = `${c.name} (${c.time})`;
    bookingTime.appendChild(option);
  });
}

// Handle booking
bookingForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("user-name").value;
  const email = document.getElementById("user-email").value;
  const date = document.getElementById("booking-date").value;
  const time = bookingTime.value;

  const selectedClass = classes.find(c => c.time === time && c.day === daySelect.value);
  if (!selectedClass) {
    bookingMessage.textContent = "Class not found.";
    return;
  }

  if (selectedClass.bookings.length < selectedClass.capacity) {
    selectedClass.bookings.push({ name, email, date });
    bookingMessage.textContent = `Booking confirmed for ${selectedClass.name} on ${date}.`;
  } else {
    bookingMessage.textContent = `Sorry, ${selectedClass.name} is full.`;
  }

  bookingForm.reset();
});

// Handle cancellation
cancelForm.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("cancel-email").value;
  const date = document.getElementById("cancel-date").value;

  let cancelled = false;
  classes.forEach(c => {
    const index = c.bookings.findIndex(b => b.email === email && b.date === date);
    if (index !== -1) {
      c.bookings.splice(index, 1);
      cancelled = true;
      cancelMessage.textContent = `Booking cancelled for ${c.name} on ${date}.`;
    }
  });

  if (!cancelled) {
    cancelMessage.textContent = "No booking found with that email and date.";
  }

  cancelForm.reset();
});

// Display instructors
function displayInstructors() {
  instructorsList.innerHTML = "";
  instructors.forEach(i => {
    const div = document.createElement("div");
    div.className = "instructor-card";
    div.innerHTML = `
      <h3>${i.name}</h3>
      <p><strong>Gender:</strong> ${i.gender}</p>
      <p><strong>Years of Experience:</strong> ${i.years}</p>
      <p><strong>Skills:</strong> ${i.skills}</p>
      <p><strong>Classes:</strong> ${i.classes.join(", ")}</p>
      <p>${i.bio}</p>
    `;
    instructorsList.appendChild(div);
  });
}

// Event listeners
daySelect.addEventListener("change", () => displayClasses(daySelect.value));

// Initial load
displayClasses(daySelect.value);
displayInstructors();
