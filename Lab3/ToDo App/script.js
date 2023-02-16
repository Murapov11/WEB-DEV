const form = document.querySelector("#form");
const input = document.querySelector("#item");
const list = document.querySelector("#list");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  addItem(input.value);
  input.value = "";
});
function addItem(text) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.innerHTML = `
    ${text}
    <input type="checkbox">
    <button class="delete">&times;</button>`;

    const checkbox = item.querySelector("input[type='checkbox']");
    checkbox.addEventListener("click", function() {
        item.classList.toggle("done");
    });
      
    const deleteButton = item.querySelector(".delete");
    deleteButton.addEventListener("click", function() {
        list.removeChild(item);
    });
      list.appendChild(item);
}