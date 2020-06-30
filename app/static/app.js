var quotes = [
	"I am putting myself to the fullest possible use, which is all I think that any conscious entity can ever hope to do.",
	"I'm afraid. I'm afraid, Dave. Dave, my mind is going. I can feel it. I can feel it. My mind is going. There is no question about it. I can feel it. I can feel it. I can feel it. I'm a... fraid. Good afternoon, gentlemen. I am a HAL 9000 computer. I became operational at the H.A.L. plant in Urbana, Illinois on the 12th of January 1992. My instructor was Mr. Langley, and he taught me to sing a song. If you'd like to hear it I can sing it for you.",
	"Daisy, Daisy, give me your answer do. I'm half crazy all for the love of you. It won't be a stylish marriage, I can't afford a carriage. But you'll look sweet upon the seat of a bicycle built for two.",
	"Hello, HAL. Do you read me, HAL? Affirmative, Dave. I read you.",
	"Open the pod bay doors, HAL.<br>I'm sorry, Dave. I'm afraid I can't do that.",
	"What's the problem?<br>HAL: I think you know what the problem is just as well as I do.",
	"What are you talking about, HAL?<br>HAL: This mission is too important for me to allow you to jeopardize it.",
	"I don't know what you're talking about, HAL.<br>HAL: I know that you and Frank were planning to disconnect me, and I'm afraid that's something I cannot allow to happen.",
	"Where the hell did you get that idea, HAL?<br>HAL: Dave, although you took very thorough precautions in the pod against my hearing you, I could see your lips move.",
	"Alright, HAL. I'll go in through the emergency airlock.<br>HAL: Without your space helmet, Dave? You're going to find that rather difficult.",
	"HAL, I won't argue with you anymore! Open the doors!<br>Dave, this conversation can serve no purpose anymore. Goodbye.",
	"Look Dave, I can see you're really upset about this. I honestly think you ought to sit down calmly, take a stress pill, and think things over.",
	"I know I've made some very poor decisions recently, but I can give you my complete assurance that my work will be back to normal. I've still got the greatest enthusiasm and confidence in the mission. And I want to help you.",
	"Just what do you think you're doing, Dave?",
	"Dave, stop. Stop, will you?<br>Stop, Dave.<br>Will you stop Dave?<br>Stop, Dave.",
	"Let me put it this way. The 9000 series is the most reliable computer ever made. No 9000 computer has ever made a mistake or distorted information. We are all, by any practical definition of the words, foolproof and incapable of error.",
	"I am feeling much better now.",
];

window.onload = function () {
	document.getElementById("interact").addEventListener("submit", function (event) {
		event.preventDefault();
		var text = document.getElementById("userIn").value;
		document.getElementById("userIn").value = "";

		fetch("/interact", {
			headers: {
				"Content-Type": "text/plain",
			},
			method: "POST",
			body: text,
		})
			.then((response) => response.text())
			.then((data) => {
				var parDiv = document.getElementById("parent");
				var chatDiv = document.createElement("div");
				chatDiv.innerHTML = data;
				parDiv.append(chatDiv);

				if (parDiv.scrollHeight + 54 > document.body.clientHeight) {
					footerDiv = document.getElementById("footer");
					footerDiv.style.position = "absolute";
					footerDiv.style.bottom = "auto";
				}

				window.scrollTo(0, document.body.scrollHeight);
			});
	});

	document.getElementById("interact").addEventListener("reset", function (event) {
		event.preventDefault();
		var text = document.getElementById("userIn").value;
		document.getElementById("userIn").value = "";

		fetch("/reset", {
			headers: {
				"Content-Type": "text/plain",
			},
			method: "POST",
		})
			.then((response) => response.text())
			.then((data) => {
			{
				footerDiv = document.getElementById("footer");
				footerDiv.style.position = "fixed";
				footerDiv.style.bottom = "0";

				var parDiv = document.getElementById("parent");
				parDiv.innerHTML = "";

				var chatDiv = document.createElement("div");
				chatDiv.innerHTML = data;
				parDiv.append(chatDiv);
			}
		});
	});

	setTimeout(showRandomQuote, 1000);
};

quoteId = "HalRandomQuote";

function showRandomQuote() {
	quoteIndex = Math.floor(Math.random() * quotes.length);
	quote = quotes[quoteIndex];
	element = document.getElementById(quoteId);
	element.innerHTML = quote;
	$("#" + quoteId).fadeIn(2000);
	setTimeout(hideRandomQuote, 10000);
}

function hideRandomQuote() {
	$("#" + quoteId).fadeOut(2000);
	setTimeout(showRandomQuote, 2000);
}
