const data = [
  {
    item: "coffee",
    amount: "40PLN",
    category: "food",
    date: "2022-07-16",
  },
  {
    item: "bread",
    amount: "8PLN",
    category: "food",
    date: "2022-08-03",
  },
  {
    item: "cheese",
    amount: "21PLN",
    category: "food",
    date: "2022-08-03",
  },
  {
    item: "fuel",
    amount: "320PLN",
    category: "car",
    date: "2022-08-14",
  },
  {
    item: "bread",
    amount: "8PLN",
    category: "food",
    date: "2022-09-01",
  },
  {
    item: "ham",
    amount: "14PLN",
    category: "food",
    date: "2022-09-01",
  },
  {
    item: "butter",
    amount: "6PLN",
    category: "food",
    date: "2022-09-10",
  },
  {
    item: "fuel",
    amount: "320PLN",
    category: "car",
    date: "2022-09-10",
  },
  {
    item: "car wash",
    amount: "60PLN",
    category: "car",
    date: "2022-09-10",
  },
  {
    item: "fuel",
    amount: "320PLN",
    category: "car",
    date: "2022-08-14",
  },
  {
    item: "bread",
    amount: "8PLN",
    category: "food",
    date: "2022-09-01",
  },
  {
    item: "ham",
    amount: "14PLN",
    category: "food",
    date: "2022-09-01",
  },
  {
    item: "butter",
    amount: "6PLN",
    category: "food",
    date: "2022-09-10",
  },
  {
    item: "fuel",
    amount: "320PLN",
    category: "car",
    date: "2022-09-10",
  },
  {
    item: "car wash",
    amount: "60PLN",
    category: "car",
    date: "2022-09-10",
  },
  {
    item: "fuel",
    amount: "320PLN",
    category: "car",
    date: "2022-08-14",
  },
  {
    item: "bread",
    amount: "8PLN",
    category: "food",
    date: "2022-09-01",
  },
  {
    item: "ham",
    amount: "14PLN",
    category: "food",
    date: "2022-09-01",
  },
  {
    item: "butter",
    amount: "6PLN",
    category: "food",
    date: "2022-09-10",
  },
  {
    item: "fuel",
    amount: "320PLN",
    category: "car",
    date: "2022-09-10",
  },
  {
    item: "car wash",
    amount: "60PLN",
    category: "car",
    date: "2022-09-10",
  },
];
let itemsPerPage = 5;
let currentPage = 1;

function updateTable() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const tableBody = $("#table-body");
  tableBody.empty();

  for (let i = startIndex; i < Math.min(endIndex, data.length); i++) {
    const transaction = data[i];
    const row = `
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell" scope="row">${transaction.item}</th>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${transaction.amount}</td>
          <td class="mdc-data-table__cell">${transaction.category}</td>
          <td class="mdc-data-table__cell">${transaction.date}</td>
        </tr>
      `;
    tableBody.append(row);
  }
}

function updatePaginationButtons() {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationButtons = $(".mdc-data-table__pagination-navigation");
  paginationButtons.empty();

  const firstButton = `
      <button class="mdc-icon-button material-icons mdc-data-table__pagination-button" data-first-page="true" >
        <div class="mdc-button__icon">first_page</div>
      </button>
    `;

  const prevButton = `
      <button class="mdc-icon-button material-icons mdc-data-table__pagination-button" data-prev-page="true" >
        <div class="mdc-button__icon">chevron_left</div>
      </button>
    `;

  const nextButton = `
      <button class="mdc-icon-button material-icons mdc-data-table__pagination-button" data-next-page="true">
        <div class="mdc-button__icon">chevron_right</div>
      </button>
    `;

  const lastButton = `
      <button class="mdc-icon-button material-icons mdc-data-table__pagination-button" data-last-page="true">
        <div class="mdc-button__icon">last_page</div>
      </button>
    `;

  paginationButtons.append(firstButton, prevButton, nextButton, lastButton);
  const firstPageButton = paginationButtons.find("[data-first-page]");
  const prevPageButton = paginationButtons.find("[data-prev-page]");
  const nextPageButton = paginationButtons.find("[data-next-page]");
  const lastPageButton = paginationButtons.find("[data-last-page]");

  if (currentPage === 1) {
    firstPageButton.prop("disabled", true);
    prevPageButton.prop("disabled", true);
  }

  if (currentPage === totalPages) {
    nextPageButton.prop("disabled", true);
    lastPageButton.prop("disabled", true);
  }

  firstPageButton.on("click", () => {
    currentPage = 1;
    updateTable();
    updatePaginationButtons();
  });

  prevPageButton.on("click", () => {
    currentPage--;
    updateTable();
    updatePaginationButtons();
  });

  nextPageButton.on("click", () => {
    currentPage++;
    updateTable();
    updatePaginationButtons();
  });

  lastPageButton.on("click", () => {
    currentPage = totalPages;
    updateTable();
    updatePaginationButtons();
  });
}

function updateItemsPerPage() {
  itemsPerPage = parseInt($(".mdc-select__selected-text").text(), 10);
  currentPage = 1;
  updateTable();
  updatePaginationButtons();
}

function filterData() {
  const startDate = $("#start-date").val();
  const endDate = $("#end-date").val();
  const category = $("#category").val();
  const itemName = $("#item-name").val().toLowerCase();

  const filteredData = data.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const isDateInRange =
      (!startDate || transactionDate >= new Date(startDate)) &&
      (!endDate || transactionDate <= new Date(endDate));
    const isCategoryMatch = !category || transaction.category === category;

    const isItemNameMatch =
      !itemName || transaction.item.toLowerCase().includes(itemName);

    return isDateInRange && isCategoryMatch && isItemNameMatch;
  });

  return filteredData;
}

function updateTable() {
  const filteredData = filterData();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const tableBody = $("#table-body");
  tableBody.empty();

  for (let i = startIndex; i < Math.min(endIndex, filteredData.length); i++) {
    const transaction = filteredData[i];
    const row = `
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">${transaction.item}</th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${transaction.amount}</td>
        <td class="mdc-data-table__cell">${transaction.category}</td>
        <td class="mdc-data-table__cell">${transaction.date}</td>
      </tr>
    `;
    tableBody.append(row);
  }

  updatePaginationButtons();
}
function calculateSummary() {
  let totalAmount = 0;
  const perPeriodSummary = {};
  const perCategorySummary = {};

  data.forEach((data) => {
    const amount = parseInt(data.amount, 10);
    totalAmount += amount;
    //  period summary
    const period = data.date.slice(0, 7);
    if (perPeriodSummary.hasOwnProperty(period)) {
      perPeriodSummary[period] += amount;
    } else {
      perPeriodSummary[period] = amount;
    }
    //  category summary
    const category = data.category;
    if (perCategorySummary.hasOwnProperty(category)) {
      perCategorySummary[category] += amount;
    } else {
      perCategorySummary[category] = amount;
    }
  });

  const summaryTable = $("tbody.mdc-data-table__content.summary-table__table");

  // Total
  const totalRow = `
    <tr>
      <td class="summary-table__cell">Total:</td>
      <td class="summary-table__cell">${totalAmount} PLN</td>
    </tr>
  `;

  Object.entries(perPeriodSummary).forEach(([period, amount]) => {
    const perPeriodRow = `
      <tr>
        <td class="summary-table__cell">${period}</td>
        <td class="summary-table__cell">${amount} PLN</td>
      </tr>
    `;
    summaryTable.append(perPeriodRow);
  });

  Object.entries(perCategorySummary).forEach(([category, amount]) => {
    const perCategoryRow = `
      <tr>
        <td class="summary-table__cell">${category}</td>
        <td class="summary-table__cell">${amount} PLN</td>
      </tr>
    `;
    summaryTable.append(perCategoryRow);
  });
  summaryTable.append(totalRow);
}
window.onload = function () {
  updateTable();
  updatePaginationButtons();
  calculateSummary();
  $("#start-date, #end-date, #category, #item-name").on("input", () => {
    updateTable();
  });
  $("#clear-filters-button").on("click", () => {
    $("#start-date, #end-date, #category, #item-name").val("");
    updateTable();
  });
  const goBackButton = $(
    "<button class='mdc-icon-button material-icons mdc-data-table__pagination-button' data-go-back='true' disabled><div class='mdc-button__icon'>chevron_left</div></button>"
  );
  $(".mdc-data-table__pagination-navigation").prepend(goBackButton);
  const goBackPageButton = $("[data-go-back]");
  goBackPageButton.on("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateTable();
      updatePaginationButtons();
    }
  });
  $(".mdc-list-item").on("click", () => {
    updateItemsPerPage();
  });
};
