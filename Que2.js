let allRead = false;
let notifications = [
  { message: "Lorem", read: true },
  { message: "Ipsum", read: true },
  { message: "Dolor", read: true },
  { message: "Sit", read: false },
  { message: "Amet", read: true },
];

function allCheck(notification) {
  if (notification.read === false) {
    allRead = true;
  }
  return notification.read === false;
}

console.log(notifications.find(allCheck));
