function newElement() {
    var inputValue = document.getElementById("task").value.trim();
    var list = document.getElementById("list");
  
    if (inputValue === "") {
      $(".toast.error").toast("show");
    } else {
      var li = document.createElement("li");
      li.textContent = inputValue;
      const span = document.createElement("span");
      span.textContent = "×";
      span.className = "close";
      span.onclick = function () {
        this.parentElement.remove();
      };
  
      li.appendChild(span);
      list.appendChild(li);
  
      $(".toast.success").toast("show");
  
      document.getElementById("task").value = "";
    }
  }
  