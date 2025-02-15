function scheduleAppointment() {
  var doctor = document.getElementById("doctor").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  
  console.log("Consulta agendada com sucesso!");
  console.log("Médico: " + doctor);
  console.log("Data: " + date);
  console.log("Horário: " + time);
}
