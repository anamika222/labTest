// Greeting & Date
window.onload = function() {
  const greeting = document.getElementById('greeting');
  const currentDate = document.getElementById('currentDate');
  const hour = new Date().getHours();

  let greetText = "Hello";
  if (hour < 12) greetText = "Good Morning";
  else if (hour < 18) greetText = "Good Afternoon";
  else greetText = "Good Evening";

  greeting.textContent = `${greetText}, Club Member!`;
  currentDate.textContent = new Date().toLocaleDateString();
};

// Initial Events Array
let events = [
  { name: "Tech Talk", date: "2025-08-01", desc: "Seminar on AI trends" },
  { name: "CodeFest", date: "2025-08-15", desc: "24hr Hackathon" }
];

function renderEvents() {
  const eventsList = document.getElementById('eventsList');
  eventsList.innerHTML = "";
  events.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `<h3>${ev.name}</h3><p><strong>Date:</strong> ${ev.date}</p><p>${ev.desc}</p>`;
    eventsList.appendChild(card);
  });
}

renderEvents();

// Form Handling
document.getElementById('eventForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('eventName').value.trim();
  const date = document.getElementById('eventDate').value;
  const desc = document.getElementById('eventDescription').value.trim();
  const msg = document.getElementById('formMessage');

  // Validation
  if (name.length < 3) {
    msg.textContent = "Event name must be at least 3 characters.";
    msg.style.color = "red";
    return;
  }
  if (!date) {
    msg.textContent = "Please enter a valid date.";
    msg.style.color = "red";
    return;
  }
  if (desc.length === 0) {
    msg.textContent = "Description cannot be empty.";
    msg.style.color = "red";
    return;
  }

  // Add event
  events.push({ name, date, desc });
  renderEvents();
  msg.textContent = "Event added successfully!";
  msg.style.color = "green";

  // Reset form
  this.reset();
});
