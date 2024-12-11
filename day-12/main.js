import "./styles.css";

const tabsData = [
  {
    title: "New events",
    data: {
      items: [
        {
          title: "Event 1",
          date: "2021-12-01",
          location: "Location 1",
          description: "Description 1",
        },
        {
          title: "Event 2",
          date: "2021-12-02",
          location: "Location 2",
          description: "Description 2",
        },
      ],
    },
  },
  {
    title: "Popular events",
    data: {
      items: [
        {
          title: "Event 3",
          date: "2021-12-01",
          location: "Location 1",
          description: "Description 1",
        },
        {
          title: "Event 4",
          date: "2021-12-02",
          location: "Location 2",
          description: "Description 2",
        },
        {
          title: "Event 5",
          date: "2021-12-02",
          location: "Location 2",
          description: "Description 2",
        },
      ],
    },
  },
  {
    title: "Free events",
    data: {
      items: [
        {
          title: "Event 6",
          date: "2021-12-01",
          location: "Location 1",
          description: "Description 1",
        },
      ],
    },
  },
];

const tabs = document.querySelector("#tabs");

function init() {
  tabsData.forEach((tab, index) => {
    const tabButton = document.createElement("button");
    tabButton.textContent = tab.title;

    if (index === 0) {
      tabButton.classList.add("active");
      updateView(tab);
    }

    tabs.appendChild(tabButton);

    tabButton.addEventListener("click", () => {
      document
        .querySelectorAll("#tabs button")
        .forEach((btn) => btn.classList.remove("active"));
      tabButton.classList.add("active");

      updateView(tab);
    });
  });
}

const updateTabView = (event) => {
  const items = event.data.items;
  const content = document.querySelector("#content");

  content.innerHTML = "";

  items.forEach((item) => {
    const tabItem = document.createElement("div");
    tabItem.classList.add("tab-item");
    tabItem.innerHTML = `
      <p>${item.title}</p>
      <p>${item.date}</p>
      <p>${item.location}</p>
      <p>${item.description}</p>
    `;
    content.appendChild(tabItem);
  });
};

function updateView(event) {}

init();
