document.getElementById("gameButton").addEventListener("click", myFunction);
document.getElementByClassName("addBtn").addEventListener("click", myFunction);
document.getElementsByClassName("updateBtn").addEventListener("click", myFunction);

function UPDATE() {
    let theflex = ""
    var i
    for (i = 0; theflex.length; i++)
        if (i > 0);
    theflex = "<option>"
}
document.getElementByClassName("updateBtn").addEventListener("click", NFLFunction);

function AddGame() {
    let theflex = ""
    var i
    for (i = 0; theflex.length; i++)
        if (i > 0);
    theflex = "<option>"
}
document.getElementById("addBtn").addEventListener("click", NFLFunction); {
    var tempwins = document.createElement("wins");
    var temploses = document.createElement("loses");
}
var tempdate = document.querySelector("date");
var hometeam = document.querySelector("Hometeam");
var awayteam = document.querySelector("awayteam");
var homepoint = document.querySelector("homepoint");
var awaypoint = document.querySelector(".awaypoint");

var NFL = document.createElement("game").innerHTML = [{
    thisDate: tempdate,
    AwayTeam: awayteam,
    Hometeam: hometeam,
    Homepoint: homepoint,
    AwayPoint: awaypoint
}]
let el;
let userInput;
let input = document.getElementById("date");
let id = 0;
let nums = [];

function AddGame() {
    id++;
    el = document.createElement("li");
    el.style.listStyle = "none";
    el.id = id;
    list.appendChild(el);
    el.innerHTML = input.value;
    nums.push(id);
    console.log(nums);
    console.log(el);
    input.value = "";
    input.focus();
}
document.getElementById("Game")

function AddGame() {
    id++;
    el = document.createElement("li");
    el.style.listStyle = "none";
    el.id = id;
    list.append(el);
    el.innerHTML = input.value;

    nums.push(id);
    console.log(nums);
    console.log(el);
    input.value = "";
    input.focus();
}

function update() {
    id++;
    el = document.createElement("li");
    el.style.listStyle = "none";
    el.id = id;
    list.appendChild(el);
    el.innerHTML = input.value;
    nums.push(id);
    console.log(nums);
    console.log(el);
    input.value = "";
    input.focus();
}

let link;
document.getElementById("Game");
let mylist = document.getElementById("list");
let theid = 0;
let thenums = [];

function update() {
    id++;
    el = document.createElement("li");
    el.style.listStyle = "none";
    el.id = id;
    list.append(el);
    el.innerHTML = input.value;

    nums.push(id);
    console.log(nums);
    console.log(el);
    input.value = "";
    input.focus();
}

//try another way to add starting with an existing li
//then create other li dynamically
// function addEl() {
//   let dest = document.querySelector("li");
// }

function deleteItem() {
    el.remove();
    console.log("Element:" + el + " removed")
    input.focus();
}


// Create a "close" button and append it to each list item

var myNodelist = document.getElementsByTagName("LI");

var i;
for (i = 0; i < flex - container.length; i++); {}
flex - container[i].onclick;

function AddGame(); {

    var div = this.parentElement;

    div.style.display = "flex";
    div.style.flex - direction;
    "column";
}


// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

    if (ev.target.tagName === 'LI') {

        ev.target.classList.toggle('checked');

    }

}, false);

// Create a new list item when clicking on the "Add" button

function newElement() {}
var li = document.createElement("li");

var inputValue = document.getElementById("item").value;

var t = document.createTextNode(inputValue);

li.appendChild(t);

if (inputValue === '') {

} else {

    document.getElementById("list").appendChild(li);

}

document.getElementById("item").value = "";


var div = document.createElement("DIV");

var txt = document.createTextNode("\u00D7");

div.className = "flex-container";

div.appendChild(txt);

li.appendChild(div);


// Click on a close button to hide the current list item

var close = document.getElementsByClassName("close");

var i;

for (i = 0; i < close.length; i++) {

    close[i].onclick = function() {

        var div = this.parentElement;

        div.style.display = "none";

    }

}



// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

    if (ev.target.tagName === 'LI') {

        ev.target.classList.toggle('checked');

    }

}, false);



// Create a new list item when clicking on the "Add" button

function newElement() {}
var li = document.createElement("li");

var inputValue = document.getElementById("item").value;

var t = document.createTextNode(inputValue);

li.appendChild(t);

if (inputValue === '') {

    alert("This field cannot be empty!");

} else {

    document.getElementById("list").appendChild(li);

}

document.getElementById("item").value = "";



var span = document.createElement("SPAN");

var txt = document.createTextNode("\u00D7");

span.className = "close";

span.appendChild(txt);

li.appendChild(span);



for (i = 0; i < close.length; i++) {}
close[i].onclick = function() {}
var div = this.parentElement;

div.style.display = "none";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
$('#MinimumToday').attr('min', today);

var NFLteam =
    document.getElementById("hometeam");

function myFunction() {
    var x = document.getElementById("mySelect");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + x.options[i].text + "<br>";
    }

    document.getElementById("gameOutput").innerHTML = txt;
}

let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://wolfmanbunnydeer.github.io/NFLgames-team3/");
    req.onload = function() {
        if (req.status == 200) {
            myResolve(req.response);
        } else {
            myFunction
                ("url:https://wolfmanbunnydeer.github.io/NFLgames-team3/");
        }
    };
    req.send();
});

myPromise.then(
    function(value) { myDisplayer(value); },
    function(error) { myDisplayer(error); }
);

function myFunction() {

    // Create a p element:
    const para = document.createElement("p");

    // Create a text node:
    const node = document.createTextNode("This is a paragraph.");

    // Append text node to the p element:
    para.appendChild(node);

    // Append the p element to the body:
    document.getElementById("gameDIV").innerHTML(para);
}

function createNFLItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

// add NFL item

function AddGame() {
    const frame = document.getElementById("myFrame");
    const h2 = frame.contentWindow.document.getElementsByTagName("H2")[0];
    const node = document.importNode(h2, true);
    document.body.appendChild(node);
}
document.getElementById("gameButton").addEventListener("click", myFunction);

function UPDATE() {
    let theflex = ""
    var i
    for (i = 0; theflex.length; i++)
        if (i > 0);
    theflex = "<option>"
}
document.getElementById("gameButton").addEventListener("click", NFLFunction);

function NFLFunction() {
    var theNFLstat = ""
    for (let i = 0; i < theNFLstat.length; i++) {
        for (let j = 0; j <= i; j++) {
            var theNFLstat = [{
                    City: "Arizona",
                    Name: "Arizona Cardinal",
                    Date: "March 7",
                    AwayTeam: "Falcon",
                    Hometeam: "Cardinals",
                    Homepoint: "78",
                    AwayPoint: "45"
                },
                {
                    City: "Atlanta",
                    Name: "Falcons",
                    Date: "March 7",
                    AwayTeam: "Minnesota Vikings",
                    Hometeam: "Falcons",
                    Homepoint: "23",
                    AwayPoint: "8"
                },
                {
                    City: "N/S Carolinas",
                    Name: "Carolina Panther",
                    Date: "March 7",
                    AwayTeam: "Minnesota Vikings",
                    Hometeam: "Panther",
                    Homepoint: "45",
                    AwayPoint: "8"
                },
                {
                    City: "Chicago",
                    Name: "Chicago Bears",
                    Date: "March 7",
                    AwayTeam: "Dallas Cowboys",
                    Hometeam: "Chicago Bears",
                    Homepoint: "78",
                    AwayPoint: "8"
                },
                {
                    City: "Dallas",
                    Name: "Dallas Cowboys",
                    Date: "March 7",
                    AwayTeam: "Chicago Bears",
                    Hometeam: "Dallas Cowboys",
                    Homepoint: "90",
                    AwayPoint: "87"
                },
                {
                    City: "Detroits",
                    Name: "Detroit Lions",
                    Date: "March 7",
                    AwayTeam: "Chicago Bears",
                    Hometeam: "Detroit Lions",
                    Homepoint: "90",
                    AwayPoint: "87"
                },
                {
                    City: "Jacksonville",
                    Name: "Jacksonville Jaguars",
                    Date: "March 7",
                    AwayTeam: "Chicago Bears",
                    Hometeam: "Jacksonville Jaguars",
                    Homepoint: "90",
                    AwayPoint: "87"
                },

                {
                    City: "GreenBay",
                    Name: "Green Bay Packers",
                    Date: "March 7",
                    AwayTeam: "Detroit Lions",
                    Hometeam: "Green Bay Packers",
                    Homepoint: "90",
                    AwayPoint: "87"
                },

                {
                    City: " Los Angeles",
                    Name: " Los Angeles Rams",
                    Date: "March 7",
                    AwayTeam: "Detroit Lions",
                    Hometeam: " Los Angeles Rams",
                    Homepoint: "90",
                    AwayPoint: "87"
                },
                {
                    City: " Los Angeles",
                    Name: " Los Angeles Rams",
                    Date: "March 7",
                    AwayTeam: "Detroit Lions",
                    Hometeam: " Los Angeles Rams",
                    Homepoint: "90",
                    AwayPoint: "87"
                },
                {
                    City: "Minnesota",
                    Name: "Minnesota Vikings",
                    Date: "March 7",
                    AwayTeam: "Detroit Lions",
                    Hometeam: "Minnesota",
                    Homepoint: "90",
                    AwayPoint: "87"
                },
                {
                    City: "New Orleans",
                    Name: "New Orleans Saints",
                    Date: "March 7",
                    AwayTeam: "Detroit Lions",
                    Hometeam: "New Orleans Saints",
                    Homepoint: "90",
                    AwayPoint: "87"
                },
                {
                    City: "New York",
                    Name: "New York Giants",
                    Date: "March 7",
                    AwayTeam: "Detroit Lions",
                    Hometeam: "New York Giants",
                    Homepoint: "90",
                    AwayPoint: "87"
                },
                {
                    City: "Denver",
                    Name: "Denver Broncos",
                    Date: "March 7",
                    AwayTeam: "Detroit Lions",
                    Hometeam: "Denver Broncos",
                    Homepoint: "90",
                    AwayPoint: "87"
                },
                {
                    City: "Houston ",
                    Name: "Houston Texan",
                    Date: "March 7",
                    AwayTeam: "Detroit Lions",
                    Hometeam: "Houston Texan",
                    Homepoint: "90",
                    AwayPoint: "87"
                },
                {
                    City: "Miami ",
                    Name: " Miami Dolphins ",
                    Date: "March 7",
                    AwayTeam: "Detroit Lions",
                    Hometeam: " Miami Dolphins ",
                    Homepoint: "90",
                    AwayPoint: "87"
                },
                {
                    City: "Tennessee",
                    Name: " Tennessee Titans",
                    Date: "March 7",
                    AwayTeam: "Detroit Lions",
                    Hometeam: " Tennessee Titans",
                    Homepoint: "90",
                    AwayPoint: "87"
                },
                {
                    City: "Buffalo",
                    Name: " Buffalo Bills",
                    Date: "March 7",
                    AwayTeam: "Miami Dolphins",
                    Hometeam: "Buffalo Bills",
                    Homepoint: "90",
                    AwayPoint: "87"
                }
            ]
            theNFLstat = theNFLstat + "The Date is " + ".<br> The Hometeam is" +
                ".<br> The Awayteam is" + ".<br> The Awaypoint is" + ".<br>the Homepoint is" + ".";
        }
        document.getElementById("gameOutput").innerHTML = theNFLstat;
    }
    document.getElementByTagName("h2", "div", "flex-container", "option");
}
var stat =
    document.getElementById("gameButton").addEventListener("click", gameFunction);

function gameFunction() {
    let MyArray = document.getElementById("gameDiv").value;
    var i
}
for (i = 0; i < MyArray; i++) {
    MyArray += "&myArray=" + MyArray[i];
}
var flex = document.createElement("mySelect");

var StatinputValue = document.getElementById("mySelect").value;

var teamStat = ""
for (i = 0; i < teamStat.length; i++) {
    StatinputValue = ""
}
document.getElementById("gameDiv").value = "";


// The enclosed function also defines a variable called "name".
City = City;
Name = Name;
Date = Date;
Awayteam = Awayteam;
Awaypoint = Awaypoint;
Homepoint = Homepoint;
Hometeam = Hometeam; {}
var NFL = (temploses, tempwins, date, hometeam, homepoint, awaypoint, awayteam);
forEach(element => updateNFLteam);
for (let index = 0; index < array.length; index++)
    document.getElementsByTagName = array[index];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
while (condition);
(forEachelement);
updateNFLapp.use(express.static('public')); {
    index: flex
};
var i = 0;
const element = array[index]; {}
// The outer function defines a variable called "".
return {}
setName(tempwins)
return {}
setName(temploses)
return {}
setName(date)
return {}
setName(awayteam)
return {}
setName(awaypoint)
return {}
setName(hometeam)
return {}
setName(homepoint)
return {}
// The enclosed function also defines a variable called "name".
tempwins = tempwins;
temploses = temploses;
date = date;
awayteam = awayteam;
awaypoint = awaypoint;
homepoint = homepoint;
hometeam = hometeam;
// How do we access the "name" defined by the outer function?
const NFL = updateNFL('team');
NFL.tempwins();
NFL.temploses();
NFL.getDate(); // Set date
NFL.setDate('mm/dd/yyyy');
NFL.setHometeam('male');
NFL.getHometeam(); // male
NFL.setAwayteam(); // Set team
NFL.getAwayteam(); // male
NFL.setAwaypoint(); //Set points//
NFL.getAwaypoint();
var updateNFL = [{
    tempwins: any,
    templose: any,
    date: any,
    hometeam: any,
    awayteam: any,
    awaypoint: any,
    homepoint: any,
}, ]
var updateWinsLoses = {
    tempwins: number,
    templose: number,
}
updateNFL.inputValue;

function AddGame(); {
    div.getElementsByClassName("flex-container").addEventListener("click", AddGame);

    function Update();
    div.getElementsByClassName("flex-container").addEventListener("click", update);
}
var tempwins = document.getElementById('mySelect').input.onclick('addbtn');
var tempwins = document.getElementById('mySelect').input.onclick('updatebtn');
var templose = document.getElementById('mySelect').input.onclick('updatebtn');
var templose = document.getElementById('mySelect').input.onclick('addbtn');
var date = document.getElementById('mySelect').input.onclick('updatebtn');
var date = document.getElementById('mySelect').input.onclick('addbtn');
var hometeam = document.getElementById('mySelect').input.onclick('updatebtn');
var hometeam = document.getElementById('mySelect').input.onclick('addbtn');
var awayteam = document.getElementById('mySelect').input.onclick('updatebtn');
var awayteam = document.getElementById('mySelect').input.onclick('addbtn');
var homepoint = document.getElementById('mySelect').input.onclick('updatebtn');
var homepoint = document.getElementById('mySelect').input.onclick('addbtn');
var awaypoint = document.getElementById('mySelect').input.onclick('updatebtn');
var awaypoint = document.getElementById('mySelect').input.onclick('addbtn');
function openGrid(flex) {
    var i, x;
    x = document.getElementsByClassName("flex-container");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "wrap";
    }
    document.getElementById(flex).style.display = "flex";
}
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
    }
}

// Grid View
function gridView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
    }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementByClassName("flex-container");
var btns = container.getElementsByClassName("flex-container");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
//Get the elements with class="column"
var elements = document.getElementsByTagName("column");

// Declare a loop variable
var i;

// List View
function listView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
    }
}

// Grid View
function gridView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
    }
}
