const GH_green_one = "#216e39";
const GH_green_two = "#30a14e";
const GH_green_three = "#9be9a8";
const GH_OFF = "#ebedf0";

const columns = Array.from(
  document.querySelectorAll(".js-calendar-graph > svg > g > g")
).map((grp) => Array.from(grp.querySelectorAll("rect")));

columns[50][0].style.fill = GH_green_one;
columns[50][1].style.fill = GH_green_one;
columns[50][2].style.fill = GH_green_one;

columns.forEach((col) => {
  col.forEach((rect) => {
    rect.style.fill = GH_green_one;
  });
});

console.log(columns);
