function Murphean(list) {
	var values = list;
	var value;
	var selectedIndex;
	
	this.shoot = this.flip = this.roll = this.spin = this.shake = this.draw = function() {
		selectedIndex = Math.floor(Math.random()*values.length);
		return values[selectedIndex];
	};
	
	this.set = function() {
		value = this.flip();
	};
	
	this.get = function() {
		if (value == undefined) this.set();
		return value;
	};
	
	this.getSelectedIndex = function() {
		if (selectedIndex == undefined) this.set();
		return selectedIndex;
	};
}

//Slots, Cherry (1:21), Strawberry (2:21), Apple (3:21), 
//Grape (4:21), Watermelon (5:21), Banana (6:21) 
var tumbler = [
	'watermelon','banana','grape','watermelon',
    'banana','watermelon','banana','strawberry',
	'apple','grape','watermelon','banana','apple',
	'grape','cherry','strawberry','apple','banana',
	'grape','watermelon','banana'
];
/*The repeated options are to increase odds, thus
decrease the value of the repeated option
One Cherry = 1:21 odds, 6 Bananas = 6:21 odds*/

var tumblers = [];
var score;

function onLoad() {
    score = 100;
    for (var i = 0; i < 3; i++) {
        tumblers[i] = new Murphean(tumbler);
        tumblers[i].set();
        document.getElementById("tblr" + i).innerHTML = "<img src='slots/" + tumblers[i].get() + ".png' alt='" + tumblers[i].get() + "'>";
    }
    document.getElementById("score").innerHTML = score;
}

function onClick() {
    score--;
    if (score <= 0) score = 100;

    for (var i = 0; i < 3; i++) {
        tumblers[i].set();
        document.getElementById("tblr" + i).innerHTML = "<img src='slots/" + tumblers[i].get() + ".png' alt='" + tumblers[i].get() + "'>";
    }
    payout();
    document.getElementById("score").innerHTML = score;
}

function payout() {
    if (tumblers[0].get() == tumblers[1].get() && tumblers[1].get() == tumblers[2].get()) {
        switch (tumblers[0].get()) {
            case "cherry":
                score += 250;
                break;
            case "strawberry":
                score += 125;
                break;
            case "apple":
                score += 100;
                break;
            case "grape":
                score += 75;
                break;
            case "watermelon":
                score += 50;
                break;
            default:
                score += 25;
        }
    }
}

function addClass(element, myClass) {
    element.className += ' ' + myClass; 
}

function removeClass(element, myClass) {
    var reg = new RegExp('(^| )'+myClass+'($| )','g');
    element.className = element.className.replace(reg,' ');
}