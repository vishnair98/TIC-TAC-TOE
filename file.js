var counter=1; //counter for moves, for odd numbered moves 'x' and 'o' for even numbered moves is displayed on the buttons
var imgvar;
var x,y;
var gameover=0;	//checks if game is over; gamover=1 implies game over
//flag variables for buttons - impllying whether they have been clicked or not
var check1=0,check2=0,check3=0,check4=0,check5=0,check6=0,check7=0,check8=0,check9=0;won=0;  
function inc()								//increments counter - for no.of moves and loads button with image (X/O);
{
	if(counter%2==0)
	{imgvar="<img src=\"img2.jpg\" width=\"35px\" height=\"25px\">";}
	else
	{imgvar="<img src=\"unnamed.png\" width=\"35px\" height=\"35px\">";}
}
function f1()													//increments counter only if button is clicked
{
	if(check1==0){												//for double or more clicks on a button, counter(moves) is'nt incremented;
	document.getElementById('1').style.fontSize="20px";
	document.getElementById('1').innerHTML=imgvar;
	counter++;
	}
	check1=1;
}
function f2()
{
	if(check2==0){
	counter++;
	document.getElementById('2').style.fontSize="20px";
	document.getElementById('2').innerHTML=imgvar;}
	check2=1;
	}
function f3()
{
	if(check3==0){
	counter++;
	document.getElementById('3').style.fontSize="20px";
	document.getElementById('3').innerHTML=imgvar;}
	check3=1;
	}
function f4()
{
	if(check4==0){
		counter++;
	document.getElementById('4').style.fontSize="20px";
	document.getElementById('4').innerHTML=imgvar;}
	check4=1;
	}
function f5()
{
	if(check5==0){
		counter++;
	document.getElementById('5').style.fontSize="20px";
	document.getElementById('5').innerHTML=imgvar;}
	check5=1;
	}
function f6()
{
	if(check6==0){
		counter++;
	document.getElementById('6').style.fontSize="20px";
	document.getElementById('6').innerHTML=imgvar;}
	check6=1;
	}
function f7()
{
	if(check7==0){counter++;
	document.getElementById('7').style.fontSize="20px";
	document.getElementById('7').innerHTML=imgvar;}
	check7=1;
	}
function f8()
{
	if(check8==0){
		counter++;
	document.getElementById('8').style.fontSize="20px";
	document.getElementById('8').innerHTML=imgvar;}
	check8=1;
}
function f9()
{
	if(check9==0){
		counter++;
	document.getElementById('9').style.fontSize="20px";
	document.getElementById('9').innerHTML=imgvar;}
	check9=1;
}
function check()						//checks if game is over ; sets won=1 if game is not drawn ;sets gameover=1;
{
	if(document.getElementById('1').innerHTML==document.getElementById('2').innerHTML
	&& document.getElementById('1').innerHTML==document.getElementById('3').innerHTML)
	{won=1;gameover=1;}
	else if(document.getElementById('1').innerHTML==document.getElementById('4').innerHTML
	&& document.getElementById('1').innerHTML==document.getElementById('7').innerHTML)
	{won=1;gameover=1;}
	else if(document.getElementById('1').innerHTML==document.getElementById('5').innerHTML
	&& document.getElementById('1').innerHTML==document.getElementById('9').innerHTML)
	{won=1;gameover=1;}
	else if(document.getElementById('4').innerHTML==document.getElementById('5').innerHTML
	&& document.getElementById('4').innerHTML==document.getElementById('6').innerHTML)
	{won=1;gameover=1;}
	else if(document.getElementById('7').innerHTML==document.getElementById('8').innerHTML
	&& document.getElementById('7').innerHTML==document.getElementById('9').innerHTML)
		{won=1;gameover=1;}
	else if(document.getElementById('2').innerHTML==document.getElementById('5').innerHTML
	&& document.getElementById('2').innerHTML==document.getElementById('8').innerHTML)
		{won=1;gameover=1;}
	else if(document.getElementById('3').innerHTML==document.getElementById('6').innerHTML
	&&	document.getElementById('3').innerHTML==document.getElementById('9').innerHTML)
	{won=1;gameover=1;}
	else if(document.getElementById('3').innerHTML==document.getElementById('5').innerHTML
	&&	document.getElementById('3').innerHTML==document.getElementById('7').innerHTML)
		{won=1;gameover=1;}		
}
function cleardefault()										//clears buttons which previously were loaded with images and clears all variables
{
	document.getElementById('1').style.color="white";
	document.getElementById('2').style.color="white";
	document.getElementById('3').style.color="white";
	document.getElementById('4').style.color="white";
	document.getElementById('5').style.color="white";
	document.getElementById('6').style.color="white";
	document.getElementById('7').style.color="white";
	document.getElementById('8').style.color="white";
	document.getElementById('9').style.color="white";
	document.getElementById('1').innerHTML="1";
	document.getElementById('2').innerHTML="2";
	document.getElementById('3').innerHTML="3";
	document.getElementById('4').innerHTML="4";
	document.getElementById('5').innerHTML="5";
	document.getElementById('6').innerHTML="6";
	document.getElementById('7').innerHTML="7";
	document.getElementById('8').innerHTML="8";
	document.getElementById('9').innerHTML="9";
	check1=0;check2=0;check3=0;check4=0;check5=0;check6=0;check7=0;check8=0;check9=0;won=0;
	gameover=0;
	counter=1;
	counter2=0;
	document.getElementById('player1').innerHTML="PLAYER 1 WINS";
}
function newgame()							//hides the play again and exit game buttons when play again is clicked
{
	hide('player1');
	hide('player2');
	hide('playagain');
	hide('exitgame');
}
function showplay()							//checks if game is over and displays result if so
{
	if(gameover==1||counter==10)			//if game is either won or players have used up all their moves
	{
		show('playagain');
		show('exitgame');
		if(won==1)
		{
			if(counter%2==0)
			show('player1');
			else
			show('player2');
		}
		else if(won==0)
		{
			document.getElementById('player1').innerHTML="GAME DRAWN";
			show('player1');
		}
		
	}
	
}
function visib()
{
	document.getElementById('img').remove();
	document.getElementById('game').remove();
	show('1');
	show('2');
	show('3');
	show('4');
	show('5');
	show('6');
	show('7');
	show('8');
	show('9');
	show('l1');
	show('l2');
	show('l3');
	show('l4');
}
function show(x)
{
	document.getElementById(x).style.display="block";
}
function visib2()
{ 
	hide('1');
	hide('2');
	hide('3');
	hide('4');
	hide('5');
	hide('6');
	hide('7');
	hide('8');
	hide('9');
	hide('l1');
	hide('l2');
	hide('l3');
	hide('l4');
	hide('playagain');
	hide('exitgame');
	hide('player1');
	hide('player2');
}
function hide(y)
{
	document.getElementById(y).style.display="none";
}