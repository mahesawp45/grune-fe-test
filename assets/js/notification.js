const notifications = document.getElementById("notifications");

class NotificationData {
  constructor(date, message) {
    this.date = date;
    this.message = message;
  }
}

const notificationsData = [
  new NotificationData(
    "2017/01/01",
    "タイトルが入ります。ダミーテキストダミーテキストダミーテキスト"
  ),
  new NotificationData(
    "2017/01/01",
    "タイトルが入ります。ダミーテキストダミーテキストダミーテキスト"
  ),
  new NotificationData(
    "2017/01/01",
    "タイトルが入ります。ダミーテキストダミーテキストダミーテキスト"
  ),
];

// mapping the assets and create the element
notificationsData.forEach((notif, index) => {
  const slideElement = document.createElement("div");
  slideElement.className =
    "flex justify-between items-center border-b-2 border-b-navbar p-2 px-1 hover:bg-gray-100";
  slideElement.id = `notification-${index}`;
  slideElement.innerHTML = `
                 
                        <div class="border-l-4 border-l-navbar px-4">
                            <p class="text-xs text-gray-500 mb-1">${notif.date}</p>
                            <p class="text-sm text-gray-500">
                               ${notif.message}
                            </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-primary" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    `;
  notifications.appendChild(slideElement);
});
