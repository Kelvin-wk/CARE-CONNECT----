// Open one section at a time
function openSection(sectionId) {
  const sections = document.querySelectorAll('.card');
  sections.forEach(sec => {
    if (sec.id === sectionId) {
      sec.classList.toggle('hidden'); // toggle clicked one
    } else {
      sec.classList.add('hidden'); // close others
    }
  });
}

// Appointment booking logic
const appointmentForm = document.getElementById('appointmentForm');
const appointmentsList = document.getElementById('appointmentsList');
let appointments = [];

appointmentForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('apptName').value;
  const date = document.getElementById('apptDate').value;
  const time = document.getElementById('apptTime').value;
  const reason = document.getElementById('apptReason').value;

  const appt = { name, date, time, reason };
  appointments.push(appt);
  renderAppointments();
  appointmentForm.reset();
});

function renderAppointments() {
  appointmentsList.innerHTML = '';
  if (appointments.length === 0) {
    appointmentsList.innerHTML = '<li class="no-items">No appointments yet.</li>';
    return;
  }
  appointments.forEach(appt => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${appt.name}</strong> &mdash; ${appt.date} at ${appt.time}<br>
      <span style="color:#185a9d;">Reason:</span> ${appt.reason}`;
    appointmentsList.appendChild(li);
  });
}

// Medical Records logic
const recordForm = document.getElementById('recordForm');
const recordsList = document.getElementById('recordsList');
let records = [];

recordForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('recordName').value;
  const date = document.getElementById('recordDate').value;
  const details = document.getElementById('recordDetails').value;

  const record = { name, date, details };
  records.push(record);
  renderRecords();
  recordForm.reset();
});

function renderRecords() {
  recordsList.innerHTML = '';
  if (records.length === 0) {
    recordsList.innerHTML = '<li class="no-items">No records yet.</li>';
    return;
  }
  records.forEach(rec => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${rec.name}</strong> &mdash; ${rec.date}<br>
      <span style="color:#185a9d;">Details:</span> ${rec.details}`;
    recordsList.appendChild(li);
  });
}

// Prescription Management logic
const prescriptionForm = document.getElementById('prescriptionForm');
const prescriptionsList = document.getElementById('prescriptionsList');
let prescriptions = [];

prescriptionForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('prescName').value;
  const date = document.getElementById('prescDate').value;
  const medication = document.getElementById('prescMedication').value;
  const dosage = document.getElementById('prescDosage').value;

  const prescription = { name, date, medication, dosage };
  prescriptions.push(prescription);
  renderPrescriptions();
  prescriptionForm.reset();
});

function renderPrescriptions() {
  prescriptionsList.innerHTML = '';
  if (prescriptions.length === 0) {
    prescriptionsList.innerHTML = '<li class="no-items">No prescriptions yet.</li>';
    return;
  }
  prescriptions.forEach(presc => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${presc.name}</strong> &mdash; ${presc.date}<br>
      <span style="color:#185a9d;">Medication:</span> ${presc.medication} | <span style="color:#185a9d;">Dosage:</span> ${presc.dosage}`;
    prescriptionsList.appendChild(li);
  });
}

// Billing logic
const billingForm = document.getElementById('billingForm');
const billingList = document.getElementById('billingList');
let bills = [];

billingForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('billName').value;
  const date = document.getElementById('billDate').value;
  const amount = document.getElementById('billAmount').value;
  const desc = document.getElementById('billDesc').value;

  const bill = { name, date, amount, desc };
  bills.push(bill);
  renderBills();
  billingForm.reset();
});

function renderBills() {
  billingList.innerHTML = '';
  if (bills.length === 0) {
    billingList.innerHTML = '<li class="no-items">No billing records yet.</li>';
    return;
  }
  bills.forEach(bill => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${bill.name}</strong> &mdash; ${bill.date}<br>
      <span style="color:#185a9d;">Amount:</span> $${bill.amount} | <span style="color:#185a9d;">Description:</span> ${bill.desc}`;
    billingList.appendChild(li);
  });
}

// Chatbot logic
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

function appendMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `chatbot-message ${sender}`;
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = text;
  msgDiv.appendChild(bubble);
  chatbotMessages.appendChild(msgDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function aiChatbotResponse(message) {
  message = message.toLowerCase();
  if (message.includes('appointment')) {
    return "To book an appointment, click the Appointments icon and fill in the form.";
  } else if (message.includes('record')) {
    return "You can add or view medical records in the Records section.";
  } else if (message.includes('prescription')) {
    return "Manage prescriptions in the Prescriptions section.";
  } else if (message.includes('bill') || message.includes('payment')) {
    return "Billing records can be managed in the Billing section.";
  } else if (message.includes('hello') || message.includes('hi')) {
    return "Hello! How can I assist you with your health, appointments, records, prescriptions, or billing today?";
  } else {
    return "I'm here to help with health, appointments, records, prescriptions, and billing questions. Please ask!";
  }
}

function handleChatbotSend() {
  const userMsg = chatbotInput.value.trim();
  if (!userMsg) return;
  appendMessage('user', userMsg);
  chatbotInput.value = '';
  setTimeout(() => {
    const aiMsg = aiChatbotResponse(userMsg);
    appendMessage('ai', aiMsg);
  }, 600);
}

chatbotSend.addEventListener('click', handleChatbotSend);
chatbotInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') handleChatbotSend();
});