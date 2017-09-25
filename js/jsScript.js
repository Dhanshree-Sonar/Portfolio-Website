var workSection, divTag, bubbles;
var randomTop, randomLeft, randomWidthHeight;

/*
  This function gets called onload event of boby element of protfolioPage.html.
  It adds events to elements.
*/
function addEventsToElements(){
  var menuOptions = document.getElementsByClassName("menuOptions");

  for (var item = 0; item < menuOptions.length; item++){
    menuOptions[item].addEventListener("mouseover", function(){
        this.style.background = "white";
        this.style.color = "#400080";
      });
  }

  for (var item = 0; item < menuOptions.length; item++){
    menuOptions[item].addEventListener("mouseout", function(){
      this.style.background = "linear-gradient(#400080, #8c1aff)";
      this.style.color = "white";
      });
  }

  var aboutButton = document.getElementById("about")
  aboutButton.addEventListener("click", function(){
      setSectionDisplayStyle("block", "none", "none", "none", "none");
    });

  var skillsButton = document.getElementById("skills")
  skillsButton.addEventListener("click", function(){
      setSectionDisplayStyle("none", "block", "none", "none", "none");
    });

  var workButton = document.getElementById("work")
  workButton.addEventListener("click", function(){
      setSectionDisplayStyle("none", "none", "block", "none", "none");
    });

  var hobbiesButton = document.getElementById("hobbies")
  hobbiesButton.addEventListener("click", function(){
      setSectionDisplayStyle("none", "none", "none", "block", "none");
    });

  var contactButton = document.getElementById("contact")
  contactButton.addEventListener("click", function(){
      setSectionDisplayStyle("none", "none", "none", "none", "block");
    });
}

//This function is set display style for all menu options.
function setSectionDisplayStyle(about, skills, work, hobbies, contact){
  document.getElementById("aboutSection").style.display = about;
  document.getElementById("skillsSection").style.display = skills;
  document.getElementById("workSection").style.display = work;
  document.getElementById("hobbiesSection").style.display = hobbies;
  document.getElementById("contactSection").style.display = contact;
}



function drawCircles(){
  //  Creating circles at random positions.
  for (var item = 0; item < 100; item++){
    divTag = document.createElement('div');
    workSection = document.getElementById('workPanelSection');

    randomTop = Math.floor(Math.random() * window.innerHeight);
    randomLeft = Math.floor(Math.random() *  window.innerWidth);
    randomWidthHeight = getRndInteger(55,70);
    randomTop = randomTop + "px";
    randomLeft = randomLeft + "px";
    randomWidthHeight = randomWidthHeight + "px";

    divTag.style.setProperty("top", randomTop)
    divTag.style.setProperty("left", randomLeft)
    divTag.style.width = randomWidthHeight;
    divTag.style.height = randomWidthHeight;
    divTag.className = "bubbles"
    workSection.appendChild(divTag);
  }

  bubbles =  document.getElementsByClassName("bubbles");

  // Adding mouseover event to all bubble for hiding the respective bubble
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener("mouseover", function(){
        this.style.display = "none"
      });
  }

  // Adding mouseout event to all bubble for making visible the respective bubble
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener("mouseout", function(){
        this.style.display = "inline"
      });
  }

}

// Generating random no between min and max value
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
