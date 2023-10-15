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