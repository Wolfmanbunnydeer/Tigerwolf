// Create "Update" button and append it to each list item

var myNodelist = document.getElementsByTagName("LI");


var div = document.createElement("DIV");

var txt = document.createTextNode("\u00D7");

div.className = "txt";

div.appendChild(txt);
//
document.getElementById("gameButton").addEventListener("click", myFunction)
document.getElementById("updateButton").addEventListener("click", myFunction)

function myFunction() {
    var theNFLstat = "<div>" + "<h2>"
    let theflex = ""
    var i
    for (i = 0; theflex.length; i++)
        if (i > 0);
    theflex = "<div>" + "<h2>"
}
for (let i = 0; i < theNFLstat.length; i++) {}
for (let j = 0; j <= i; j++)
    for (let i in theNFLstat.NFL) {
        i += "<h2>" + "<div>" + theNFLstat.NFL[i].name + "</div>" + "</h2>";
        for (let j in theNFLstat.NFL[i].flex) {
            i += theNFLstat.NFL[i].flex[j] + "<br>";
        }
        document.getElementById("gameOutput").innerHTML = "</div>" + "</h2>";
    }
var h2, div, input, button, select, option, a, i =
    input = document.getElementById("mySelect");
div = input.value.toUpperCase();
button = document.getElementById("gameButton");
select = option.getElementsByTagName("a");
for (i = 0; i < li.length; i++) {}
a = a[i].getElementsByTagName("a")[0];
if (a.innerHTML.toUpperCase().indexOf(button) > -1) {
    a[i].style.display = "";
} else {}
a[i].style.display = "flex";

class Teams {
  constructor(brand) {
    this.teamsname = brand;
  }
  present() {
    return 'update ' + this.teamname;
  }
}

class Model extends Teams {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', update ' + this.model;
  }
}

let myNFLteams= new Model("Los Angeles Rams", "Minnesota Vikings",);
document.getElementBy("updateBtn").innerHTML = myNFL.show();
  }
}

let myNFLteams= new Model("Los Angeles Rams", "Minnesota Vikings",);
document.getElementBy("addBtn").innerHTML = myNFL.show();

The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

Getters and Setters
Classes also allows you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.

Example
Create a getter and a setter for the "NFLname" property:

class NFLteams {
  constructor(brand) {
    this.nflname = brand;
  }
  get nnam() {
    return this.nflname;
  }
  set nnam(x) {
    this.nflname = x;
  }
}

let myNFLteams = new NFLteams("Los Angeles Rams", "Arizona Cardinal", "Falcons");

document.getElementById("demo").innerHTML = myNFLteams.tnam; = [{
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
const updateNFLteam = function myFunction(tempwins, temploses, date, awayteam, hometeam, homepoint, awaypoint) {
     // The outer function defines a variable called "".
    return {}
    setName(tempwins); {}
    return {}
    setName(temploses); {}
    return {}
    setName(date); {}
    return {}
    setName(awayteam); {}
    return {}
    setName(awaypoint); {}
    return {}
    setName(hometeam); {}
    return {}
    setName(homepoint); {
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


        // Click on a close button to hide the current list item

        var flexcontainer = document.getElementsByClassName("flex-container");

        var i;

        for (i = 0; i < close.length; i++) {}
        close[i].onclick = function() {

            var div = this.parentElement;

            div.style.display = "none";

        }

        // Add a "checked" symbol when clicking on a list item

        var list = document.querySelector('ul'); {

        }

        do {
            list.addEventListener('click', function());; {}
            while (condition);
        }
        while (ev.target.tagName === 'LI') {}
        ev.target.classList.toggle('checked');

    }
    false; {

    }

    // Create a new list item when clicking on the "Add" button

    function AddGame(); {

        var li = document.createElement("li");

        var inputValue = document.getElementById("item").value;

        var t = document.createTextNode(inputValue);

        li.appendChild(t);
    }
    document.getElementById("mySelect").appendChild(li);
    document.getElementById("item").value = "";
    document.getElementById("item").value = "";

    var warp = document.createElement("WRAP");
    var div = document.createElement("DIV");

    var txt = document.createTextNode("\u00D7");

    span.className = "header";

    span.appendChild(txt);

    li.appendChild(div);
}
var i = ""
for (i = 0; i < header.length; i++) {}
close[i].onclick = function() {}
var div = this.parentElement; {}
div.style.display = "wrap"; {
    document.getElementById("gameOutput").innerHTML = "";
}
