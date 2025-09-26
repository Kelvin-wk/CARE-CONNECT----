const API_BASE = "http://localhost:8080/api";

document.getElementById('checkBtn').addEventListener('click', async () => {
  const age = parseInt(document.getElementById('age').value) || 30;
  const gender = document.getElementById('gender').value || 'unknown';
  const symptoms = document.getElementById('symptoms').value.split(',').map(s => s.trim()).filter(Boolean);

  const payload = { age, gender, symptoms };
  const res = await fetch(`${API_BASE}/triage`, {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  document.getElementById('triageResult').textContent = JSON.stringify(data, null, 2);
});

document.getElementById('predBtn').addEventListener('click', async () => {
  const payload = {
    age: parseInt(document.getElementById('r_age').value) || 50,
    lengthOfStay: parseInt(document.getElementById('r_los').value) || 3,
    comorbidityCount: parseInt(document.getElementById('r_com').value) || 0,
    priorAdmissions: parseInt(document.getElementById('r_prior').value) || 0,
    dischargeConditionScore: parseFloat(document.getElementById('r_score').value) || 0.5
  };
  const res = await fetch(`${API_BASE}/readmission`, {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  document.getElementById('predResult').textContent = JSON.stringify(data, null, 2);
});
