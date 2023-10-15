function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}

window.addEventListener('scroll', function() {
  const menu = document.getElementById('menu');
  const isScrolled = window.scrollY > menu.offsetTop;

  if (isScrolled) {
      menu.classList.add('scrolled');
  } else {
      menu.classList.remove('scrolled');
  }
});

// for the searchbar
function searchToggle(obj, evt) {
  var container = $(obj).closest('.search-wrapper');
  if (!container.hasClass('active')) {
    container.addClass('active');
    evt.preventDefault();
  } else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
    container.removeClass('active');
    // clear input
    container.find('.search-input').val('');
    container.find('.suggestions').hide();
  }
}

function showSuggestions(input) {
  var container = $(input).closest('.search-wrapper');
  var suggestions = container.find('.suggestions');
  var inputValue = input.value.toLowerCase();
  var suggestionList = suggestions.find('li');

  if (inputValue === "") {
    suggestions.hide();
  } else {
    // Hide all suggestions by default
    suggestionList.hide();
    // Show suggestions that match the input
    suggestionList.filter(function() {
      return $(this).text().toLowerCase().includes(inputValue);
    }).show();

    suggestions.show();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var scrollLinks = document.querySelectorAll('[data-scroll]');

  for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener("click", function(e) {
          e.preventDefault();
          var targetId = this.getAttribute("href").substring(1); // Get the target ID without the '#' symbol
          var targetElement = document.getElementById(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
          }
      });
  }
});

//time


function updateTime() {
  const philippineTimeElement = document.getElementById("philippine-time");
  const timeZone = "Asia/Manila"; 
  const options = { timeZone: timeZone, timeStyle: "medium" };
  const philippineTime = new Date().toLocaleTimeString([], options);
  philippineTimeElement.textContent = "Time in Philippines: " + philippineTime;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

// popup
window.addEventListener("load", function () {
  setTimeout(function () {
    const popupOverlay = document.querySelector(".popup-overlay");
    const popup = document.querySelector(".popup");

    popupOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.0)"; // Start with a transparent background
    popup.style.opacity = 1;
    popupOverlay.style.display = "flex";

    // Fade in the background
    setTimeout(function () {
      popupOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }, 100);
  }, 1000);
});

document.querySelector("#close").addEventListener("click", function (e) {
  e.stopPropagation();
  const popupOverlay = document.querySelector(".popup-overlay");
  const popup = document.querySelector(".popup");

  popup.style.opacity = 0;

  // Fade out the background
  popupOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  
  setTimeout(function () {
    popupOverlay.style.display = "none";
  }, 300);
});

document.querySelector(".popup-overlay").addEventListener("click", function (e) {
  const popup = document.querySelector(".popup");
  const popupOverlay = document.querySelector(".popup-overlay");
  if (e.target === popupOverlay) {
    popup.style.opacity = 0;

    // Fade out the background
    popupOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    
    setTimeout(function () {
      popupOverlay.style.display = "none";
    }, 300);
  }
});


function updateDate() {
  const dateElement = document.getElementById("current-date");
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentDate = new Date().toLocaleDateString("en-US", options);
  dateElement.textContent = currentDate;
}

updateDate(); // Update the date initially

// Update the date every second (you can adjust the interval)
setInterval(updateDate, 1000);



//TESTING SEARCH

