// Change text content and style
document.getElementById("change-text").addEventListener("click", function () {
    const desc = document.getElementById("description");
    desc.textContent = "The paragraph content has been updated!";
    desc.classList.add("highlight");
  });
  
  // Add a new list item
  document.getElementById("add-item").addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "A new item was added!";
    document.getElementById("list").appendChild(newItem);
  });
  
  // Remove an element (the button itself)
  document.getElementById("remove-button").addEventListener("click", function () {
    this.remove();
  });
  