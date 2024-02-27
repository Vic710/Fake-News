function addNews() {
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;

  if (content.toLowerCase().includes("hi")) {
    showPopup('fakePopup');
    document.body.insertAdjacentHTML('beforeend', '<div class="red-line"></div>');
  } else if (content.toLowerCase().includes("bye")) {
    showPopup('realPopup');
    document.body.insertAdjacentHTML('beforeend', '<div class="blue-line"></div>');
  }

  // Uncomment this section to save news to history.html using localStorage
  /*
  var news = JSON.parse(localStorage.getItem('news')) || [];
  news.push({ title: title, content: content });
  localStorage.setItem('news', JSON.stringify(news));
  */

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

function showPopup(id) {
  document.getElementById(id).style.display = "block";
  document.getElementById("popSound").play();
  setTimeout(function() {
    document.getElementById(id).style.display = "none";
  }, 3000);
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}
