(function(){
	let infoPane1 = document.getElementById("info1");
	let infoPane2 = document.getElementById("info2");
	let infoPane3 = document.getElementById("info3");
	let pastMain = document.getElementById("pastMain");
	let presentMain = document.getElementById("presentMain");
	let futureMain = document.getElementById("futureMain");

	infoPane1.style.cursor = "pointer";
	infoPane2.style.cursor = "pointer";
	infoPane3.style.cursor = "auto";

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

	infoPane1.addEventListener("click",  function(){toggleInfoPane(infoPane1)});
	infoPane2.addEventListener("click",  function(){toggleInfoPane(infoPane2)});
	infoPane3.addEventListener("click",  function(){toggleInfoPane(infoPane3)});

}());