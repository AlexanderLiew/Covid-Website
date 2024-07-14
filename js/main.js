$sceneMgr.setStage('.scene');
/* SHARED */
function doButton(evt) {
	var eventType = evt.type;
	var eventTgt = evt.currentTarget;

	if (eventType === "mouseenter") {
		gsap.to(eventTgt, {
			duration: .1,
			scale: 1.1
		});
	} else {
		gsap.to(eventTgt, {
			duration: .1,
			scale: 1
		});
	}
}

function doHover(evt) {
	var eventType = evt.type;
	var eventTgt = evt.currentTarget;
	let texttarget = evt.currentTarget.firstElementChild;

	if (eventType === "mouseenter") {
		gsap.to(eventTgt, {
			duration: .1,
			autoAlpha: 1
		});
		
		gsap.to(texttarget, {
			y: -10,
			autoAlpha: 1,

		});
	} else {
		gsap.to(eventTgt, {
			duration: .1,
			autoAlpha: 0.6
		});
		gsap.to(texttarget, {
			y: 0,
			autoAlpha: 0,

		});
	}
}
/* Home Scene */
function startHome() {
	gsap.set('.start', { // initialise
		clearProps: "all"
	});
	gsap.set('.graphic1', {
		clearProps: "all"
	});
	gsap.set('.graphic2', {
		clearProps: "all"
	});
	gsap.from('.graphic1', {
		rotation: 180,
		repeat: -1,
		yoyo: true,
		duration: 1
	});
	gsap.from('.graphic2', {
		rotation: -180,
		repeat: -1,
		yoyo: true,
		duration: 1
	});
	gsap.to('.start', {
		yoyo: true,
		y: 10,
		repeat: -1
	});
	$('.start').on("mouseenter", doButton);
	$('.start').on("mouseleave", doButton);
	
	$('.start').on("click", () => {
		$sceneMgr.gotoScene("menu", "fade")
	});
}
function endHome() {
	$('.start').off("click");
	gsap.killTweensOf(".start");
	gsap.killTweensOf(".graphic1");
	gsap.killTweensOf(".graphic2");
}
$sceneMgr.addScene("#home-scene", 1, "home", {
	startScene: startHome,
	endScene: endHome,
});
/* MENU SCENE */
function startmenu() {
	gsap.set('.graphic1', {
		clearProps: "all"
	});
	gsap.set('.graphic2', {
		clearProps: "all"
	});
	gsap.set('.whatiscovid', {
		clearProps: "all"
	});
	gsap.set('.symptoms', {
		clearProps: "all"
	});
	gsap.set('.fightingcovid', {
		clearProps: "all"
	});
	gsap.from('.graphic1', {
		rotation: 180,
		repeat: -1,
		yoyo: true,
		duration: 1
	});
	gsap.from('.graphic2', {
		rotation: -180,
		repeat: -1,
		yoyo: true,
		duration: 1
	});
	var tl = gsap.timeline();
	tl.from('.whatiscovid', {top: 215, left: 115, duration: 2})
	tl.from('.whatiscovid', {yoyo: true, y: 10, repeat: -1});
	
	var tl = gsap.timeline();
	tl.from('.symptoms', {top: 215, left: 115, duration: 2})
	tl.from('.symptoms', {yoyo: true, y: 10, repeat: -1});
	
	var tl = gsap.timeline();
	tl.from('.fightingcovid', {top: 215, left: 115, duration: 2})
	tl.from('.fightingcovid', {yoyo: true, y: 10, repeat: -1});
	
	$('.whatiscovid').on("mouseenter", doButton);
	$('.whatiscovid').on("mouseleave", doButton);
	$('.symptoms').on("mouseenter", doButton);
	$('.symptoms').on("mouseleave", doButton);
	$('.fightingcovid').on("mouseenter", doButton);
	$('.fightingcovid').on("mouseleave", doButton);

	$('.whatiscovid').on("click", () => {
		$sceneMgr.gotoScene("sect-1", "fade")
	});
	$('.symptoms').on("click", () => {
		$sceneMgr.gotoScene("sect-2", "fade")
	});
	$('.fightingcovid').on("click", () => {
		$sceneMgr.gotoScene("sect-3", "fade")
	});

	$('.arrow').on("click", () => {
		$sceneMgr.gotoScene("home", "fade")
	});
}
function endMenu() {
	$('.whatiscovid').off("click");
	$('.symptoms').off("click");
	$('.fightingcovid').off("click");
	$('.arrow').off("click");
	gsap.killTweensOf(".whatiscovid");
	gsap.killTweensOf(".symptoms");
	gsap.killTweensOf(".fightingcovid");
	gsap.killTweensOf(".graphic1");
	gsap.killTweensOf(".graphic2");
}

$sceneMgr.addScene("#menu-scene", 2, "menu", {
	startScene: startmenu,
	endScene: endMenu,
});

/* What Is Covid Sect 1*/
function startSect1() {
	gsap.set('.graphic1', {
		clearProps: "all"
	});
	gsap.from('.graphic1', {
		rotation: 180,
		repeat: -1,
		yoyo: true,
		duration: 1
	});
	var tl = gsap.timeline();
	tl.to(".body-sect > p",{autoAlpha: 1, duration: 1})
	tl.from(".map",{opacity: 0, y: 10, duration: 1},)
	tl.from('.location',{opacity: 0});
	tl.from('.location',{yoyo:true, y: 5, repeat: -1});

	$('.arrow').on("click", () => {
		$sceneMgr.gotoScene("menu", "fade")
	});
}

function endSect1() {
	gsap.killTweensOf(".body-sect > p");
	gsap.killTweensOf(".map");
	gsap.killTweensOf(".location");
	gsap.killTweensOf(".graphic1");
	$('.arrow').off("click");
}

$sceneMgr.addScene("#sect1", 3, "sect-1", {
	startScene: startSect1,
	endScene: endSect1,
});
// Symptoms Sect 2 //
function startSect2() {
	gsap.set('.graphic1', {
		clearProps: "all"
	});
	gsap.from('.graphic1', {
		rotation: 180,
		repeat: -1,
		yoyo: true,
		duration: 1
	});
	$('.logo1').on("mouseenter", doHover);
	$('.logo1').on("mouseleave", doHover);
	$('.logo2').on("mouseenter", doHover);
	$('.logo2').on("mouseleave", doHover);
	$('.logo3').on("mouseenter", doHover);
	$('.logo3').on("mouseleave", doHover);
	
	$('.arrow').on("click", () => {
		$sceneMgr.gotoScene("menu", "fade")
	});
}
function endSect2() {
	gsap.killTweensOf(".graphic1");

	$('.arrow').off("click");
}
$sceneMgr.addScene("#sect2", 4, "sect-2", {
	startScene: startSect2,
	endScene: endSect2,
});

// How to fight Covid19 Sect-3 //
function startSect3() {
	gsap.set('.graphic1', {
		clearProps: "all"
	});
	gsap.from('.graphic1', {
		rotation: 180,
		repeat: -1,
		yoyo: true,
		duration: 1
	});
	$('.logo4').on("mouseenter", doHover);
	$('.logo4').on("mouseleave", doHover);
	$('.logo5').on("mouseenter", doHover);
	$('.logo5').on("mouseleave", doHover);
	$('.logo6').on("mouseenter", doHover);
	$('.logo6').on("mouseleave", doHover);
	
	$('.arrow').on("click", () => {
		$sceneMgr.gotoScene("menu", "fade")
	});
}
function endSect3() {
	gsap.killTweensOf(".graphic1");
	$('.arrow').off("click");

}
$sceneMgr.addScene("#sect3", 5, "sect-3", {
	startScene: startSect3,
	endScene: endSect3,
});

// page ready function
$sceneMgr.ready(function () {
	$sceneMgr.start("home");
	
	

	// $('.n-button').on("click", () => {
	// 	$sceneMgr.goNext("wipe-left");
	// });

	// $('.p-button').on("click", () => {
	// 	$sceneMgr.goPrev("wipe-right");
	// });

	// $('.n-button').on("mouseenter", doButton);
	// $('.n-button').on("mouseleave", doButton);
	// $('.p-button').on("mouseenter", doButton);
	// $('.p-button').on("mouseleave", doButton);
});
