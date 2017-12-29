(function(){
	let jsonObj = JSON.parse(jsonPlanets);

	// the image of the planet displayed when the screen < 650px
	let smallScreenPlanet = document.getElementById("smallPlanet");

	// the three information panes & their cursor styles
	let infoPane1 = document.getElementById("info1");
	infoPane1.style.cursor = "pointer";
	let infoPane2 = document.getElementById("info2");
	infoPane2.style.cursor = "pointer";
	let infoPane3 = document.getElementById("info3");
	infoPane3.style.cursor = "auto";

	// the information within the panes (excluding the title)
	let pastMain = document.getElementById("pastMain");
	let presentMain = document.getElementById("presentMain");
	let futureMain = document.getElementById("futureMain");

	// the individual parts of the information
	let pastImage = document.getElementById("pastImage");
	let pastFact1 = document.getElementById("pastFact1");
	let pastFact2 = document.getElementById("pastFact2");
	let pastFact3 = document.getElementById("pastFact3");
	let presentImage = document.getElementById("presentImage");
	let presentFact1 = document.getElementById("presentFact1");
	let presentFact2 = document.getElementById("presentFact2");
	let presentFact3 = document.getElementById("presentFact3");
	let futureImage = document.getElementById("futureImage");
	let futureFact1 = document.getElementById("futureFact1");
	let futureFact2 = document.getElementById("futureFact2");
	let futureFact3 = document.getElementById("futureFact3");

	function toggleInfoPane(pane) {
		if (pane.id == 'info1' && pane.style.width != "84%") {
			setInfoWidths(infoPane1, infoPane2, infoPane3);
			toggleDisplay(pastMain, presentMain, futureMain);
			setCursorStyle(infoPane1, infoPane2, infoPane3);
		}
		else if (pane.id == 'info2' && pane.style.width != "84%") {
			setInfoWidths(infoPane2, infoPane1, infoPane3);
			toggleDisplay(presentMain, pastMain, futureMain);
			setCursorStyle(infoPane2, infoPane1, infoPane3);
		}
		else if (pane.id == 'info3' && pane.style.width != "84%") {
			setInfoWidths(infoPane3, infoPane1, infoPane2);
			toggleDisplay(futureMain, pastMain, presentMain);
			setCursorStyle(infoPane3, infoPane1, infoPane2);
		}
	}

	function setInfoWidths(widePane, smallPane1, smallPane2) {
		widePane.style.width = "84%";
		smallPane1.style.width = "8%";
		smallPane2.style.width = "8%";
	}

	function toggleDisplay(shownPane, hiddenPane1, hiddenPane2) {
		shownPane.style.opacity = "1";
		hiddenPane1.style.opacity = "0";
		hiddenPane2.style.opacity = "0";
	}

	function setCursorStyle(autoPane, pointerPane1, pointerPane2) {
		autoPane.style.cursor = "auto";
		pointerPane1.style.cursor = "pointer";
		pointerPane2.style.cursor = "pointer";
	}

	function switchPlanetInfo(planet) {
		smallScreenPlanet.src = jsonObj[planet].present.image;

		pastImage.src = jsonObj[planet].past.image;
		pastFact1.innerHTML = jsonObj[planet].past.fact1;
		pastFact2.innerHTML = jsonObj[planet].past.fact2;
		pastFact3.innerHTML = jsonObj[planet].past.fact3;

		presentImage.src = jsonObj[planet].present.image;
		presentFact1.innerHTML = jsonObj[planet].present.fact1;
		presentFact2.innerHTML = jsonObj[planet].present.fact2;
		presentFact3.innerHTML = jsonObj[planet].present.fact3;

		futureImage.src = jsonObj[planet].future.image;
		futureFact1.innerHTML = jsonObj[planet].future.fact1;
		futureFact2.innerHTML = jsonObj[planet].future.fact2;
		futureFact3.innerHTML = jsonObj[planet].future.fact3;
	}

	infoPane1.addEventListener("click",  function(){toggleInfoPane(infoPane1)});
	infoPane2.addEventListener("click",  function(){toggleInfoPane(infoPane2)});
	infoPane3.addEventListener("click",  function(){toggleInfoPane(infoPane3)});

	// navigation Menu buttons
	navSun.addEventListener("click", function(){switchPlanetInfo('sun')});
	navMercury.addEventListener("click", function(){switchPlanetInfo('mercury')});
	navVenus.addEventListener("click", function(){switchPlanetInfo('venus')});
	navEarth.addEventListener("click", function(){switchPlanetInfo('earth')});
	navMars.addEventListener("click", function(){switchPlanetInfo('mars')});
	navJupiter.addEventListener("click", function(){switchPlanetInfo('jupiter')});
	navSaturn.addEventListener("click", function(){switchPlanetInfo('saturn')});
	navUranus.addEventListener("click", function(){switchPlanetInfo('uranus')});
	navNeptune.addEventListener("click", function(){switchPlanetInfo('neptune')});
	navPluto.addEventListener("click", function(){switchPlanetInfo('pluto')});

	// planet buttons
	sun.addEventListener("click", function(){switchPlanetInfo('sun')});
	mercury.addEventListener("click", function(){switchPlanetInfo('mercury')});
	venus.addEventListener("click", function(){switchPlanetInfo('venus')});
	earth.addEventListener("click", function(){switchPlanetInfo('earth')});
	mars.addEventListener("click", function(){switchPlanetInfo('mars')});
	jupiter.addEventListener("click", function(){switchPlanetInfo('jupiter')});
	saturn.addEventListener("click", function(){switchPlanetInfo('saturn')});
	uranus.addEventListener("click", function(){switchPlanetInfo('uranus')});
	neptune.addEventListener("click", function(){switchPlanetInfo('neptune')});
	pluto.addEventListener("click", function(){switchPlanetInfo('pluto')});

}());