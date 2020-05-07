"use strict";
(function() {
    let currentCategory;

    window.onload = function() {
        document.getElementById("view-all").onclick = fetchCategories;
        document.getElementById("next").onclick = questionOrAnswer;
        document.getElementById("show").onclick = showAnswer;
    };

    // My code printed twice everythig, I came up with this boolean idea
    // that allows me to prevent the function from doing twice everythig
    var b = true;

    // A random function I wrote to help later
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function fetchCategories() {

        // My code printed twice everythig, I came up with this boolean idea
        // that allows me to prevent the function from doing twice everythig
        var b = true;

        // Requesting the JSON from my php file
        let hrx = new XMLHttpRequest()
        var trivia;
        hrx.open("GET", "trivia.php", true);
        hrx.send();

        hrx.onreadystatechange = function() {

          // My code printed twice everythig, I came up with this boolean idea
          // that allows me to prevent the function from doing twice everythig
            if (b) {

                // We parse the JSON
                trivia = JSON.parse(this.responseText);

                var list = document.getElementById("categories");

                for (var i = 0; i < trivia.length; i++) {
                  // We create a li with the category name and add it to the Category
                  // list area
                    var category = document.createElement("LI");
                    var res = document.createTextNode(trivia[i].CategoryName);
                    category.appendChild(res);
                    list.appendChild(category);
                    category.classList.add("category");
                }
                // My code printed twice everythig, I came up with this boolean idea
                // that allows me to prevent the function from doing twice everythig
                b = false;
            }
        }
        // I disable the button in order to prevent a mess
        document.getElementById("view-all").disabled = 'true';
    }

    function questionOrAnswer() {

        // My code printed twice everythig, I came up with this boolean idea
        // that allows me to prevent the function from doing twice everythig
        var b = true;

        // Requesting the JSON from my php file
        let hrx = new XMLHttpRequest()
        var trivia;
        hrx.open("GET", "trivia.php", true);
        hrx.send();

        hrx.onreadystatechange = function() {

          // My code printed twice everythig, I came up with this boolean idea
          // that allows me to prevent the function from doing twice everythig
            if (b) {

                // We parse the JSON
                trivia = JSON.parse(this.responseText);

                // Before doing anything we clear the area of any posible previous
                // answers that cold be present before
                while (document.getElementsByClassName('q&a')[0]) {
                    document.getElementsByClassName('q&a')[0].remove();
                }

                var list = document.getElementById("card");

                // We get a random category
                var random = getRandom(0, trivia.length);

                // We add a li with the Question
                var category = document.createElement("LI");
                // We get a random question out of all the posible Q&As
                var randomQ = getRandom(0, trivia[random].Question.length);
                var res = document.createTextNode(trivia[random].Question[randomQ].Question);
                category.appendChild(res);
                list.appendChild(category);
                category.classList.add("q&a");

                // We add a li with the answer in a hidden way
                var category = document.createElement("LI");
                // We get a random answer out of all the posible Q&As that matches
                var res = document.createTextNode(trivia[random].Answer[randomQ].Answer);
                category.appendChild(res);
                list.appendChild(category);
                category.classList.add("q&a");
                category.classList.add("hidden");

                // My code printed twice everythig, I came up with this boolean idea
                // that allows me to prevent the function from doing twice everythig
                b = false;
            }
        }
    }

    // This function shows the answer
    function showAnswer() {
        // While there is an element with the class "hidden", remove that class
        // from the element
        while (document.getElementsByClassName('hidden')[0]) {
            document.getElementsByClassName('hidden')[0].classList.remove("hidden");
        }
    }

    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300 ||
            response.status == 0) {
            return response.text();
        } else {
            return Promise.reject(
                new Error(response.status + ": " + response.statusText));
        }
    }
})();
