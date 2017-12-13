(function(){
	let infoPane1 = document.getElementById("info1");
	let infoPane2 = document.getElementById("info2");
	let infoPane3 = document.getElementById("info3");
	infoPane1.style.cursor = "pointer";
	infoPane2.style.cursor = "pointer";
	infoPane3.style.cursor = "auto";

	function toggleInfoPane(pane) {
		if (pane.id == 'info1' && pane.style.width != "80%") {
			setInfoWidths(infoPane1, infoPane2, infoPane3);
			setCursorStyle(infoPane1, infoPane2, infoPane3);
		}
		else if (pane.id == 'info2' && pane.style.width != "80%") {
			setInfoWidths(infoPane2, infoPane1, infoPane3);
			setCursorStyle(infoPane2, infoPane1, infoPane3);
		}
		else if (pane.id == 'info3' && pane.style.width != "80%") {
			setInfoWidths(infoPane3, infoPane1, infoPane2);
			setCursorStyle(infoPane3, infoPane1, infoPane2);
		}

	}

	function setInfoWidths(widePane, smallPane1, smallPane2) {
		widePane.style.width = "80%";
		smallPane1.style.width = "10%";
		smallPane2.style.width = "10%";
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