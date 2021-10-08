<html>

<head>
    <title>Java Script Things</title>
</head>
<style>
    title {
        color: blue;
    }

    p {
        color: blue;
        background: whitesmoke;
    }
</style>
<script>

    var result = add(4, 5);

    var data = {
        name: "Samarpit",
        age=22,
        talk: function () {
            alert("Hello....Hi....bye");
        }
    }
    alert(data.name);
    var person = {
        age: 122
    };

    person.name = {
        first: "Jeanne",
        last: "Calment"
    };

    var myList = ["html", "css", "java script"];
    myList = myList + "bootstrap";

    myList.push("Spring");
    myList.pop();
    var t1 = document.getElementById('t1');
    var t2 = document.getElementById('t2');
    var add1=t1+t2;

    var add = function (a, b) {
        return a + b;
    }

    var pagePara = document.querySelector('#p');

    //EVENT
    var handleClick = function (event) {
        // do ...
    }
    var handleUnclick=function(event)
    {
      // do some operations
    }
    var button = document.querySelector('bigButton');
    button.addEventListener('click', handleClick);

    // AJAX
    var req = new XMLHttpRequest();
    req.onload = function (event) {

    };
    req.open('get', 'textFile.txt', true);
    req.send();

    //jQuery
    $('.btn').click(function () {
        // write ...
    });

    $('.note').css('background', 'red').height(100);

    // JSON
    var jsonString = JSON.stringify({ make: "McLaren", model: "MP4-12C", miles: 5023 });
    var car = JSON.parse(jsonString);

    car = JSON.parse.car;
    car.model = "P1";
    //Getter and Setters

    var currentHeight = $('.note').height(),
        currentColor = $('.note').css('color');

    var $header = $('header'),
        $headerBoxes = $('.note', $header);

    // jQuery AJAX
    $.ajax({
        url: '/data.json',
        method: 'GET',
        success: function (data) {
            console.log(data);
        }
    });

    $.get('/data.json', function (data) {
        console.log(data);
    });

    // .get
    $.get('/data.json', function (data) {
        console.log(data);
    }).fail(function () {

    });

    $.post('/save', { username: 'sam' }, function (data) {
        console.log(data);
    }).fail(function () {

    });

    //when DOM is loaded then only JS can run
    var doThis = function (event) {

    };
    window.addEventListener('DOMContentLoaded', doThis);

    //same thing with jQuery
    ////when DOM is loaded then only JS can run

    $(window).ready(doThis);

    // Same thing in 
    $(doThis);

    // In other situations it’s better to wait for the page to
    // fully load - that is, when all stylesheets and images have been downloaded.

    // with js
    window.addEventListener('load', doThis);
    // with jQuery
    $(window).load(doThis);

    // Type Checking
    $.isArray([1, 2, 3]);

    $.isFunction(function () { });

    $.isNumeric(10);
    $.isPlainObject({ name: 'Tom' });

    // Java Script Advanced

    var person = function (name) {
        this.name = name;
    }
    // create object using new 
    var sam = new person('samarpit')
    // Above line output
    // {
    //     name:"samarpit"
    // }

    // Constructor function
    person.prototype.say = function (words) {
        alert(this.name + 'says"' + words + '"');
    }

    var sam = new person("samarpit");
    sam.say("hello world");

    //creating elements using HTML
    var div = document.createElement('div');
    div.textContent = "Hello world";
    div.setAttribute('class', 'note');
    document.body.appendChild(div);

    // equivalent to 
    //  <div class="note">Hello world</div>

    var span = document.createElement('span');
    if (span.textContent) {
        span.textContent = "Hello";
    }
    else if (span.innerText) {
        span.innerText = "Hello!";
    }

    // removing an element
    div.parentNode.removeChild(div);

    //creating with jQuery
    var div = $('<div/>').text("Hello world").appendTo(document.body);
    $('<span/>').text('Hello!').appendTo(div);

    //Canvas
    var Canvas = document.querySelector('canvas'), ctx = Canvas.getContext('2d');
    ctx.fillRect(10, 10, 10, 10);

    // Canvas Animation
    var canvas = document.querySelector('canvas'), ctx = canvas.getContext('2d');

    var resize = function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('load', function () {
        resize();
        var pos, vel;
        pos = {
            x: 10,
            y: 10
        };
        vel = {
            x: 1, y: 1
        };

        var loop = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pos.x += vel.x;
            pos.y += vel.y;

            if (pos.x < 5 || pos.x > canvas.width - 5) {
                vel.x *= -1;
            }
            if (pos.y < 5 || pos.y > canvas.height - 5) {
                vel.y *= -1;
            }
            ctx.fillRect(pos.x - 5, pos.y - 5, 10, 10);
        };

        setInterval(loop, 1000 / 60);
    });

    // Local storage and cookies

    localStorage.setItem('name', 'samarpit');
    localStorage.getItem('name');

    // example
    localStorage.setItem('user', JSON.stringify({
        username: 'samar@tarento',
        api_key: 'abc123xyz'
    }));

    var user = JSON.parse(localStorage.getItem('user'));

    //Exception
    try {
        JSON.parse("a"); //Produces a syntaxError
    }
    catch (error) {
        // Handle the error
        alert(error.message);
    }

    //Creating error

   // throw new Error("That's empty, Please enter something");

    // Regular Expression

    var regex=/^[a-z\s]+$/;
    // $ end of the string
    // ^ the start of the string
    // \s whitespace

    var lowerCaseString ='hey there';
    if(lowerCaseString.match(regex))
    {
        alert('Yes, all lowercase');
    }

    //var text=lowerCaseString.replace(/(Yes | all) lowercase,"something");

    // Closures
    // A closure is a function that returns a function. The function that is 
    // returned (the inner function) is created inside the called function
    //  (the outer) so - due to the scoping rules we’ve seen - the inner has 
    //access to the variables and arguments of the outer.
    var saver=function(value)
    {
        return function()
        {
            return value;
        };
    };
    var retriever=saver(10);
    alert(retriever());

    var add=function(a)
    {
        return function(b)
        {
            return a+b;
        }
    }
    var addFive=add(5);
    alert(addFive(10));

</script>

<body>
    <input type="text" id="t1" /><br>
    <input type="text" id="t2" /><br>
    <input type="button" id="btn1" onclick="data" value="add" /><br>
    <input value="" />
</body>

</html>
