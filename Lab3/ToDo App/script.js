const form = document.querySelector("#form"); // DOM objects
const input = document.querySelector("#item");
const list = document.querySelector("#list");
form.addEventListener("submit", function(event) { // anonymous function
  event.preventDefault(); // When a form is submitted, the default behavior is for the page to refresh.
  addItem(input.value);
  input.value = "";
});

function addItem(text) {
  const item = document.createElement("li");
  item.classList.add("item"); //  sets its class to item
  item.innerHTML = ` 
    ${text}
    <input type="checkbox">
    <button class="delete">DELETE</button>`; // HTML code of item element

    const checkbox = item.querySelector("input[type='checkbox']");
    checkbox.addEventListener("click", function() {
      item.classList.toggle("done"); // (переключать) This method adds the done class to the item element
      //if it is not already present,
      // or removes it if it is already present.
    });
      
    const deleteButton = item.querySelector(".delete");
    deleteButton.addEventListener("click", function() {
        list.removeChild(item);
    });
  
    list.appendChild(item);
}