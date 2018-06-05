
	var streakStop;
	var streakStopTwo;  
	

	function startStreak() {

		streakStop = setInterval( function() {
			var savedValue = localStorage.getItem("savedTime");

			var now = Date.now();
			var cd = 24 * 60 * 60 * 1000;

			var dif = now - savedValue;

			var toDays = (dif/cd);



			document.getElementById('time').innerHTML = "<h1>"+toDays.toFixed(6)+" days"+"</h1>"; 
		}, 1);

		

	}

	function resetStreak() {
		clearInterval(streakStop);
		document.getElementById('time').innerHTML = "<h1>"+" Zero Days "+"</h1>";
		localStorage.removeItem('savedTime');

	}

	///////////////////////////Same but first time///////////////////////////

	function startStreakTwo() {

		streakStopTwo = setInterval( function() {

					var userDate = document.getElementById('startDate').value;
					var now = Date.now();

					//console.log(now);
					//console.log(userDate);

					var userDateConverted = new Date(userDate);
					var userDateMiliSeconds = userDateConverted.getTime();
					localStorage.setItem("savedTime", userDateMiliSeconds);

					var cd = 24 * 60 * 60 * 1000;

					var dif = now - userDateMiliSeconds;
					var toDays = (dif/cd);  
					//console.log(toDays);

					document.getElementById('time').innerHTML = "<h1>"+toDays.toFixed(6)+" days"+"</h1>"; 



				},1);

	}

	function resetStreakTwo() {
		clearInterval(streakStopTwo);
		localStorage.removeItem('savedTime');
		document.getElementById('time').innerHTML = "<h1>"+" Zero Days "+"</h1>";

	}

	///////////////////////////END///////////////////////////

	//console.log(localStorage.getItem("savedTime"));

	if (localStorage.getItem("savedTime")) {

		startStreak();	

		var savedValue = localStorage.getItem("savedTime");
		
			var now = Date.now();
			var cd = 24 * 60 * 60 * 1000;

			var dif = now - savedValue;
			var toDays = (dif/cd);


			//TIME LEFT TO FINISH////
			var future =  (parseInt(savedValue) + 8640000000);

			var futureDate = new Date(future);

			document.getElementById('timeLeftTwo').innerHTML  = "You will finish your challenge on: " + futureDate;  

			/*for (var i = 1 ; i <= Math.floor(toDays); i++) {
				document.getElementById('calendar').innerHTML += "<div class='streak'>"+"<p>"+i+"</p>"+"</div>"; 
			}
			*/

			document.getElementById('timeLeft').innerHTML  = 100 - Math.floor(toDays) + " days to finish your challenge.";  

			document.getElementById('StopStreak').onclick = function() {
			resetStreak();
			localStorage.removeItem('savedTime');
			document.getElementById('timeLeft').innerHTML = "";
			console.log("testDif");

		};

	} 




		document.getElementById('checkDate').onclick = function() {

					startStreakTwo();
					var userDate = document.getElementById('startDate').value;
					var now = Date.now();

					//console.log(now);
					//console.log(userDate);

					var userDateConverted = new Date(userDate);
					var userDateMiliSeconds = userDateConverted.getTime();
					localStorage.setItem("savedTime", userDateMiliSeconds);

					var cd = 24 * 60 * 60 * 1000;

					var dif = now - userDateMiliSeconds;
					var toDays = (dif/cd);  
					document.getElementById('timeLeft').innerHTML  = 100 - Math.floor(toDays) + " left.";
					
				
					


		};

		
			if (!localStorage.getItem("savedTime")) {
			document.getElementById('StopStreak').onclick = function() {
				resetStreakTwo();

				document.getElementById('timeLeft').innerHTML = "";


			
				};
			}
		

		
