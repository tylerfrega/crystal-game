var currentScore = 0;
var goal; 
var btnOneValue;
var btnTwoValue;
var btnThreeValue;
var btnFourValue;


function setValues(){
//gets necessary random numbers
	goal =  Math.floor(Math.random() * (120 - 19) + 19);
	btnOneValue = Math.floor(Math.random() * (12 - 1) + 1);
	btnTwoValue = Math.floor(Math.random() * (12 - 1) + 1);
	btnThreeValue = Math.floor(Math.random() * (12 - 1) + 1);
	btnFourValue = Math.floor(Math.random() * (12 - 1) + 1);

//sets value to buttons
	$('#one').val(btnOneValue);
	console.log($('#one').attr('value'));

	$('#two').val(btnTwoValue);
	console.log($('#two').attr('value'));

	$('#three').val(btnThreeValue);
	console.log($('#three').attr('value'));

	$('#four').val(btnFourValue);
	console.log($('#four').attr('value'));

	console.log('the goal is ' + goal);


};

//on click, adds button value to current score 
$('#one').on('click', function(){
	currentScore = btnOneValue + currentScore;
	checkScore();

	$('#score').html('Current Score is:    ' + currentScore);
});

$('#two').on('click', function(){
	currentScore = btnTwoValue + currentScore;
	checkScore();

	$('#score').html('Current Score is:    ' + currentScore);
});

$('#three').on('click', function(){
	currentScore = btnThreeValue + currentScore;
	checkScore();

	$('#score').html('Current Score is:    ' + currentScore);
});

$('#four').on('click', function(){
	currentScore = btnFourValue + currentScore;
	checkScore();

	$('#score').html('Current Score is:    ' + currentScore);
});


function checkScore(){
	if (currentScore > goal){
		console.log('you lose');
	}else if(currentScore === goal){
		console.log('you win');
	}else{ return
	}

};













setValues();
