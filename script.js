const indianTime = function () {
  document.getElementById("india").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Asia/kolkata",
      timeStyle: "long",
      hourCycle: "h12",
    }
  );
};
setInterval(indianTime, 1000);

const ParisTime = function () {
  document.getElementById("Paris").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Europe/Paris",
      timeStyle: "long",
      hourCycle: "h12",
    }
  );
};
setInterval(ParisTime, 1000);

const newYork = function () {
  document.getElementById("newYork").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "America/New_York",
      timeStyle: "long",
      hourCycle: "h12",
    }
  );
};

setInterval(newYork, 1000);

const londonTime = function () {
  document.getElementById("londonTime").innerHTML = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "Europe/London",
      timeStyle: "long",
      hourCycle: "h12",
    }
  );
};
londonTime();
setInterval(londonTime, 1000);

function updateDayAndDate() {
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();

  document.getElementById(
    "day"
  ).textContent = `${dayName}, ${monthName} ${date}, ${year}`;
}

updateDayAndDate();

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const hoursStr = hours.toString().padStart(2, "0");

  document.getElementById(
    "indiaTime"
  ).textContent = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateTime, 1000);
updateTime();
