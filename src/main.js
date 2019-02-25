'use strict';
const filterContainer = document.querySelector(`.main__filter`);
const range = document.createRange();
const filters = [{
  name: `all`,
  count: 15
},
{
  name: `overdue`,
  count: 0
},
{
  name: `today`,
  count: 0
},
{
  name: `favorites`,
  count: 7
},
{
  name: `repeating`,
  count: 2
},
{
  name: `tags`,
  count: 6
},
{
  name: `archive`,
  count: 115
}
];

const getFilterTemplate = (name, count, isChecked = false) => {
  return `<input
  type="radio"
  id="filter__${name}"
  class="filter__input visually-hidden"
  name="filter"
  ${isChecked ? `checked` : ``}
  ${count > 0 ? `` : `disabled`}
  />
  <label for="filter__${name}" class="filter__label">
  ${name.toUpperCase()} <span class="filter__${name}-count">${count}</span></label
  >
`;
};

const renderFilters = (filterArray) => {
  let filtersString = ``;
  filterArray.forEach((filter) => {
    const filterTemplate = getFilterTemplate(filter.name, filter.count);
    filtersString += filterTemplate;
  });
  const fragment = range.createContextualFragment(filtersString);
  filterContainer.innerHTML = ``;
  filterContainer.appendChild(fragment);
};

renderFilters(filters);
