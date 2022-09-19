setScreen("setting");
var questionrw = 0;
var neg = 1;
var bouncebonus = 1;
var bouncetoss = 1;
var tossup = 0;
var bonus = 0;
var powerplayer;
var powerteam;
var t1p1 = 0;
var t1p2 = 0;
var t1p3 = 0;
var t1p4 = 0;
var t2p1 = 0;
var t2p2 = 0;
var t2p3 = 0;
var t2p4 = 0;
var settingdoneclick = 0;
var teambonuswrong = 0;
var bonust1 = 0;
var bonust2 = 0;
var t1p1name = 0;
var t1p2name = 0;
var t1p3name = 0;
var t1p4name = 0;
var t2p1name = 0;
var t2p2name = 0;
var t2p3name = 0;
var t2p4name = 0;
var t1sub = 0;
var t2sub = 0;
var subt1p1yn = 0;
var subt1p2yn = 0;
var subt1p3yn = 0;
var subt1p4yn = 0;
var subt2p1yn = 0;
var subt2p2yn = 0;
var subt2p3yn = 0;
var subt2p4yn = 0;
//instead of 0, "Type name"
setText("playernamet1p1", "");
setText("playernamet1p2", "");
setText("playernamet1p3", "");
setText("playernamet1p4", "");
setText("playernamet2p1", "");
setText("playernamet2p2", "");
setText("playernamet2p3", "");
setText("playernamet2p4", "");
setText("newplayernamet1p1", "");
setText("newplayernamet1p2", "");
setText("newplayernamet1p3", "");
setText("newplayernamet1p4", "");
setText("newplayernamet2p1", "");
setText("newplayernamet2p2", "");
setText("newplayerdonet2p3", "");
setText("newplayerdonet2p4", "");
var t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
var t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
//subs. Change to 5 if need be
var subt1count = 4;
var subt2count = 4;
//change to 0 if need be
var subt1p1name = "Player 5";
var subt1p2name = "Player 5";
var subt1p3name = "Player 5";
var subt1p4name = "Player 5";
var subt2p1name = "Player 5";
var subt2p2name = "Player 5";
var subt2p3name = "Player 5";
var subt2p4name = "Player 5";
hideElement("subt1p1p1");
hideElement("subt1p2p1");
hideElement("subt1p3p1");
hideElement("subt1p4p1");
hideElement("subt1p1p2");
hideElement("subt1p2p2");
hideElement("subt1p3p2");
hideElement("subt1p4p2");
hideElement("subt1p1p3");
hideElement("subt1p2p3");
hideElement("subt1p3p3");
hideElement("subt1p4p3");
hideElement("subt1p1p4");
hideElement("subt1p2p4");
hideElement("subt1p3p4");
hideElement("subt1p4p4");
hideElement("subt2p1p1");
hideElement("subt2p2p1");
hideElement("subt2p3p1");
hideElement("subt2p4p1");
hideElement("subt2p1p2");
hideElement("subt2p2p2");
hideElement("subt2p3p2");
hideElement("subt2p4p2");
hideElement("subt2p1p3");
hideElement("subt2p2p3");
hideElement("subt2p3p3");
hideElement("subt2p4p3");
hideElement("subt2p1p4");
hideElement("subt2p2p4");
hideElement("subt2p3p4");
hideElement("subt2p4p4");
//settext
setText("subt1p1p1", "Player 1");
setText("subt1p2p1", "Player 1");
setText("subt1p3p1", "Player 1");
setText("subt1p4p1", "Player 1");
setText("subt1p1p2", "Player 2");
setText("subt1p2p2", "Player 2");
setText("subt1p3p2", "Player 2");
setText("subt1p4p2", "Player 2");
setText("subt1p1p3", "Player 3");
setText("subt1p2p3", "Player 3");
setText("subt1p3p3", "Player 3");
setText("subt1p4p3", "Player 3");
setText("subt1p1p4", "Player 4");
setText("subt1p2p4", "Player 4");
setText("subt1p3p4", "Player 4");
setText("subt1p4p4", "Player 4");
setText("subt2p1p1", "Player 1");
setText("subt2p2p1", "Player 1");
setText("subt2p3p1", "Player 1");
setText("subt2p4p1", "Player 1");
setText("subt2p1p2", "Player 2");
setText("subt2p2p2", "Player 2");
setText("subt2p3p2", "Player 2");
setText("subt2p4p2", "Player 2");
setText("subt2p1p3", "Player 3");
setText("subt2p2p3", "Player 3");
setText("subt2p3p3", "Player 3");
setText("subt2p4p3", "Player 3");
setText("subt2p1p4", "Player 4");
setText("subt2p2p4", "Player 4");
setText("subt2p3p4", "Player 4");
setText("subt2p4p4", "Player 4");
//1/12
var ot = 0;
var sd = 0;
setText("teamnamet1", "");
setText("teamnamet2", "");
var team1 = "Team 1";
var team1sc = "Team 1: ";
var team2 = "Team 2";
var team2sc = "Team 2: ";
var team1p = " (" + (team2 + "): ");
var team2p = " (" + (team2 + "): ");
//2/7
var editplayer = 0;
setText("label27", team1);
setText("editscorest1p1", "Player 1");
setText("editscorest1p2", "Player 2");
setText("editscorest1p3", "Player 3");
setText("editscorest1p4", "Player 4");
setText("label28", "text");
setText("editscorest2p1", "Player 1");
setText("editscorest2p2", "Player 2");
setText("editscorest2p3", "Player 3");
setText("editscorest2p4", "Player 4");
//3/16
var t1p5 = 0;
var t1p6 = 0;
var t1p7 = 0;
var t1p8 = 0;
var t2p5 = 0;
var t2p6 = 0;
var t2p7 = 0;
var t2p8 = 0;
var t1p5name = 0;
var t1p6name = 0;
var t1p7name = 0;
var t1p8name = 0;
var t2p5name = 0;
var t2p6name = 0;
var t2p7name = 0;
var t2p8name = 0;
hideElement("subt1p1p5");
hideElement("subt1p2p5");
hideElement("subt1p3p5");
hideElement("subt1p4p5");
hideElement("subt1p1p6");
hideElement("subt1p2p6");
hideElement("subt1p3p6");
hideElement("subt1p4p6");
hideElement("subt1p1p7");
hideElement("subt1p2p7");
hideElement("subt1p3p7");
hideElement("subt1p4p7");
hideElement("subt1p1p8");
hideElement("subt1p2p8");
hideElement("subt1p3p8");
hideElement("subt1p4p8");
hideElement("subt2p1p5");
hideElement("subt2p2p5");
hideElement("subt2p3p5");
hideElement("subt2p4p5");
hideElement("subt2p1p6");
hideElement("subt2p2p6");
hideElement("subt2p3p6");
hideElement("subt2p4p6");
hideElement("subt2p1p7");
hideElement("subt2p2p7");
hideElement("subt2p3p7");
hideElement("subt2p4p7");
hideElement("subt2p1p8");
hideElement("subt2p2p8");
hideElement("subt2p3p8");
hideElement("subt2p4p8");
//settext
setText("subt1p1p1", "Player 5");
setText("subt1p2p1", "Player 5");
setText("subt1p3p1", "Player 5");
setText("subt1p4p1", "Player 5");
setText("subt1p1p2", "Player 6");
setText("subt1p2p2", "Player 6");
setText("subt1p3p2", "Player 6");
setText("subt1p4p2", "Player 6");
setText("subt1p1p3", "Player 7");
setText("subt1p2p3", "Player 7");
setText("subt1p3p3", "Player 7");
setText("subt1p4p3", "Player 7");
setText("subt1p1p4", "Player 8");
setText("subt1p2p4", "Player 8");
setText("subt1p3p4", "Player 8");
setText("subt1p4p4", "Player 8");
setText("subt2p1p1", "Player 5");
setText("subt2p2p1", "Player 5");
setText("subt2p3p1", "Player 5");
setText("subt2p4p1", "Player 5");
setText("subt2p1p2", "Player 6");
setText("subt2p2p2", "Player 6");
setText("subt2p3p2", "Player 6");
setText("subt2p4p2", "Player 6");
setText("subt2p1p3", "Player 7");
setText("subt2p2p3", "Player 7");
setText("subt2p3p3", "Player 7");
setText("subt2p4p3", "Player 7");
setText("subt2p1p4", "Player 8");
setText("subt2p2p4", "Player 8");
setText("subt2p3p4", "Player 8");
setText("subt2p4p4", "Player 8");
onEvent("image2", "click", function( ) {
  hideElement("image2");
  neg = 0;
  showElement("button17");
  console.log(neg);
});
onEvent("image3", "click", function( ) {
  hideElement("image3");
  bouncebonus = 0;
  showElement("button19");
  console.log(bouncebonus);
});
onEvent("image6", "click", function( ) {
  hideElement("image6");
  bouncetoss = 0;
  showElement("button18");
  console.log(bouncetoss);
});
onEvent("button17", "click", function( ) {
  showElement("image2");
  neg = 1;
  hideElement("button17");
  console.log(neg);
});
onEvent("button19", "click", function( ) {
  showElement("image3");
  bouncebonus = 1;
  hideElement("button19");
  console.log(bouncebonus);
});
onEvent("button18", "click", function( ) {
  showElement("image6");
  bouncetoss = 1;
  hideElement("button18");
  console.log(bouncetoss);
});
onEvent("settingdone", "click", function( ) {
  if (settingdoneclick == 0) {
    setScreen("setplayername");
    settingdoneclick = 1;
  } else {
    setScreen("home");
  }
});
onEvent("button51", "click", function( ) {
  setScreen("playert1p1");
});
onEvent("button48", "click", function( ) {
  setScreen("playert1p2");
});
onEvent("button49", "click", function( ) {
  setScreen("playert1p3");
});
onEvent("button50", "click", function( ) {
  setScreen("playert1p4");
});
onEvent("button44", "click", function( ) {
  setScreen("playert2p1");
});
onEvent("button47", "click", function( ) {
  setScreen("playert2p2");
});
onEvent("button46", "click", function( ) {
  setScreen("playert2p3");
});
onEvent("button45", "click", function( ) {
  setScreen("playert2p4");
});
onEvent("playerdonet1p1", "click", function( ) {
  //instead of 0, "Type name"
  if (getText("playernamet1p1") == "") {
    t1p1name = "Player 1";
    setScreen("setplayername");
    setText("playernamet1p1", "Player 1");
    setText("button51", t1p1name);
    setText("t1p1score", t1p1name + ": ");
    setText("team1p1", t1p1name);
    setText("subt1p1", t1p1name);
    setText("subt1p1p1", t1p1name);
    setText("subt1p2p1", t1p1name);
    setText("subt1p3p1", t1p1name);
    setText("subt1p4p1", t1p1name);
    setText("editscorest1p1", t1p1name);
  } else {
    t1p1name = getText("playernamet1p1");
    setText("button51", t1p1name);
    setText("t1p1score", t1p1name + ": ");
    setText("team1p1", t1p1name);
    setScreen("setplayername");
    setText("subt1p1", t1p1name);
    setText("subt1p1p1", t1p1name);
    setText("subt1p2p1", t1p1name);
    setText("subt1p3p1", t1p1name);
    setText("subt1p4p1", t1p1name);
    setText("editscorest1p1", t1p1name);
  }
});
onEvent("playerdonet1p2", "click", function( ) {
  if (getText("playernamet1p2") == "") {
    t1p2name = "Player 2";
    setScreen("setplayername");
    setText("playernamet1p2", "Player 2");
    setText("button48", t1p2name);
    setText("t1p2score", t1p2name + ": ");
    setText("team1p2", t1p2name);
    setText("subt1p2", t1p2name);
    setText("subt1p1p2", t1p2name);
    setText("subt1p2p2", t1p2name);
    setText("subt1p3p2", t1p2name);
    setText("subt1p4p2", t1p2name);
    setText("editscorest1p2", t1p2name);
  } else {
    t1p2name = getText("playernamet1p2");
    setText("button48", t1p2name);
    setText("t1p2score", t1p2name + ": ");
    setText("team1p2", t1p2name);
    setScreen("setplayername");
    setText("subt1p2", t1p2name);
    setText("subt1p1p2", t1p2name);
    setText("subt1p2p2", t1p2name);
    setText("subt1p3p2", t1p2name);
    setText("subt1p4p2", t1p2name);
    setText("editscorest1p2", t1p2name);
  }
});
onEvent("playerdonet1p3", "click", function( ) {
  if (getText("playernamet1p3") == "") {
    t1p3name = "Player 3";
    setScreen("setplayername");
    setText("playernamet1p3", "Player 3");
    setText("button49", t1p3name);
    setText("t1p3score", t1p3name + ": ");
    setText("team1p3", t1p3name);
    setText("subt1p3", t1p3name);
    setText("subt1p1p3", t1p3name);
    setText("subt1p2p3", t1p3name);
    setText("subt1p3p3", t1p3name);
    setText("subt1p4p3", t1p3name);
    setText("editscorest1p3", t1p3name);
  } else {
    t1p3name = getText("playernamet1p3");
    setText("button49", t1p3name);
    setText("t1p3score", t1p3name + ": ");
    setText("team1p3", t1p3name);
    setScreen("setplayername");
    setText("subt1p3", t1p3name);
    setText("subt1p1p3", t1p3name);
    setText("subt1p2p3", t1p3name);
    setText("subt1p3p3", t1p3name);
    setText("subt1p4p3", t1p3name);
    setText("editscorest1p3", t1p3name);
  }
});
onEvent("playerdonet1p4", "click", function( ) {
  if (getText("playernamet1p4") == "") {
    t1p4name = "Player 4";
    setScreen("setplayername");
    setText("playernamet1p4", "Player 4");
    setText("button50", t1p4name);
    setText("t1p4score", t1p4name + ": ");
    setText("team1p4", t1p4name);
    setText("subt1p4", t1p4name);
    setText("subt1p1p4", t1p4name);
    setText("subt1p2p4", t1p4name);
    setText("subt1p3p4", t1p4name);
    setText("subt1p4p4", t1p4name);
    setText("editscorest1p4", t1p4name);
  } else {
    t1p4name = getText("playernamet1p4");
    setText("button50", t1p4name);
    setText("t1p4score", t1p4name + ": ");
    setText("team1p4", t1p4name);
    setScreen("setplayername");
    setText("subt1p4", t1p4name);
    setText("subt1p1p4", t1p4name);
    setText("subt1p2p4", t1p4name);
    setText("subt1p3p4", t1p4name);
    setText("subt1p4p4", t1p4name);
    setText("editscorest1p4", t1p4name);
  }
});
onEvent("playerdonet2p1", "click", function( ) {
  if (getText("playernamet2p1") == "") {
    t2p1name = "Player 1";
    setScreen("setplayername");
    setText("playernamet2p1", "Player 1");
    setText("button44", t2p1name);
    setText("t2p1score", t2p1name + ": ");
    setText("team2p1", t2p1name);
    setText("subt2p1", t2p1name);
    setText("subt2p1p1", t2p1name);
    setText("subt2p2p1", t2p1name);
    setText("subt2p3p1", t2p1name);
    setText("subt2p4p1", t2p1name);
    setText("editscorest2p1", t2p1name);
  } else {
    t2p1name = getText("playernamet2p1");
    setText("button44", t2p1name);
    setText("t2p1score", t2p1name + ": ");
    setText("team2p1", t2p1name);
    setScreen("setplayername");
    setText("subt2p1", t2p1name);
    setText("subt2p1p1", t2p1name);
    setText("subt2p2p1", t2p1name);
    setText("subt2p3p1", t2p1name);
    setText("subt2p4p1", t2p1name);
    setText("editscorest2p1", t2p1name);
  }
});
onEvent("playerdonet2p2", "click", function( ) {
  if (getText("playernamet2p2") == "") {
    t2p2name = "Player 2";
    setScreen("setplayername");
    setText("playernamet2p2", "Player 2");
    setText("button47", t2p2name);
    setText("t2p2score", t2p2name + ": ");
    setText("team2p2", t2p2name);
    setText("subt2p2", t2p2name);
    setText("subt2p1p2", t2p2name);
    setText("subt2p2p2", t2p2name);
    setText("subt2p3p2", t2p2name);
    setText("subt2p4p2", t2p2name);
    setText("editscorest2p2", t2p2name);
  } else {
    t2p2name = getText("playernamet2p2");
    setText("button47", t2p2name);
    setText("t2p2score", t2p2name + ": ");
    setText("team2p2", t2p2name);
    setScreen("setplayername");
    setText("subt2p2", t2p2name);
    setText("subt2p1p2", t2p2name);
    setText("subt2p2p2", t2p2name);
    setText("subt2p3p2", t2p2name);
    setText("subt2p4p2", t2p2name);
    setText("editscorest2p2", t2p2name);
  }
});
onEvent("playerdonet2p3", "click", function( ) {
  if (getText("playernamet2p3") == "") {
    t2p3name = "Player 3";
    setScreen("setplayername");
    setText("playernamet2p3", "Player 3");
    setText("button46", t2p3name);
    setText("t2p3score", t2p3name + ": ");
    setText("team2p3", t2p3name);
    setText("subt2p3", t2p3name);
    setText("subt2p1p3", t2p3name);
    setText("subt2p2p3", t2p3name);
    setText("subt2p3p3", t2p3name);
    setText("subt2p4p3", t2p3name);
    setText("editscorest2p3", t2p3name);
  } else {
    t2p3name = getText("playernamet2p3");
    setText("button46", t2p3name);
    setText("t2p3score", t2p3name + ": ");
    setText("team2p3", t2p3name);
    setScreen("setplayername");
    setText("subt2p3", t2p3name);
    setText("subt2p1p3", t2p3name);
    setText("subt2p2p3", t2p3name);
    setText("subt2p3p3", t2p3name);
    setText("subt2p4p3", t2p3name);
    setText("editscorest2p3", t2p3name);
  }
});
onEvent("playerdonet2p4", "click", function( ) {
  if (getText("playernamet2p4") == "") {
    t2p4name = "Player 4";
    setScreen("setplayername");
    setText("playernamet2p4", "Player 4");
    setText("button45", t2p4name);
    setText("t2p4score", t2p4name + ": ");
    setText("team2p4", t2p4name);
    setText("subt2p4", t2p4name);
    setText("subt2p1p4", t2p4name);
    setText("subt2p2p4", t2p4name);
    setText("subt2p3p4", t2p4name);
    setText("subt2p4p4", t2p4name);
    setText("editscorest2p4", t2p4name);
  } else {
    t2p4name = getText("playernamet2p4");
    setText("button45", t2p4name);
    setText("t2p4score", t2p4name + ": ");
    setText("team2p4", t2p4name);
    setScreen("setplayername");
    setText("subt2p4", t2p4name);
    setText("subt2p1p4", t2p4name);
    setText("subt2p2p4", t2p4name);
    setText("subt2p3p4", t2p4name);
    setText("subt2p4p4", t2p4name);
    setText("editscorest2p4", t2p4name);
  }
});
onEvent("team1btn", "click", function( ) {
  setScreen("team1t1");
});
onEvent("team2btn", "click", function( ) {
  setScreen("team2t2");
});
onEvent("team1done", "click", function( ) {
  if (getText("teamnamet1") == "") {
    team1 = "Team 1";
    team1sc = "Team 1: ";
  } else {
    team1 = getText("teamnamet1");
    team1sc = getText("teamnamet1") + ": ";
  }
  team1p = " (" + (team1 + "): ");
  setText("label27", team1);
  setText("teamnamet1", team1);
  setText("team1btn", team1);
  setText("label6", team1);
  setText("team1score", team1sc);
  setText("team1", team1 + ("\n" + "Correct"));
  setText("team1neg", team1 + " Neg");
  setScreen("setplayername");
});
onEvent("team2done", "click", function( ) {
  if (getText("teamnamet2") == "") {
    team2 = "Team 2";
    team2sc = "Team 2: ";
  } else {
    team2 = getText("teamnamet2");
    team2sc = getText("teamnamet2") + ": ";
  }
  team2p = " (" + (team2 + "): ");
  setText("label28", team2);
  setText("teamnamet2", team2);
  setText("team2btn", team2);
  setText("label7", team1);
  setText("team2score", team2sc);
  setText("team2", team2 + ("\n" + "Correct"));
  setText("team2neg", team2 + " Neg");
  setScreen("setplayername");
});
onEvent("button52", "click", function( ) {
  setScreen("home");
  if (getText("playernamet1p1") == "") {
    t1p1name = "Player 1";
    setText("playernamet1p1", "Player 1");
    setText("button51", t1p1name);
    setText("t1p1score", t1p1name + ": ");
    setText("team1p1", t1p1name);
    setText("subt1p1", t1p1name);
    setText("subt1p1p1", t1p1name);
    setText("subt1p2p1", t1p1name);
    setText("subt1p3p1", t1p1name);
    setText("subt1p4p1", t1p1name);
    setText("editscorest1p1", t1p1name);
  } else {
    t1p1name = getText("playernamet1p1");
    setText("button51", t1p1name);
    setText("t1p1score", t1p1name + ": ");
    setText("team1p1", t1p1name);
    setText("subt1p1", t1p1name);
    setText("subt1p1p1", t1p1name);
    setText("subt1p2p1", t1p1name);
    setText("subt1p3p1", t1p1name);
    setText("subt1p4p1", t1p1name);
    setText("editscorest1p1", t1p1name);
  }
  if (getText("playernamet1p2") == "") {
    t1p2name = "Player 2";
    setText("playernamet1p2", "Player 2");
    setText("button48", t1p2name);
    setText("t1p2score", t1p2name + ": ");
    setText("team1p2", t1p2name);
    setText("subt1p2", t1p2name);
    setText("subt1p1p2", t1p2name);
    setText("subt1p2p2", t1p2name);
    setText("subt1p3p2", t1p2name);
    setText("subt1p4p2", t1p2name);
    setText("editscorest1p2", t1p2name);
  } else {
    t1p2name = getText("playernamet1p2");
    setText("button48", t1p2name);
    setText("t1p2score", t1p2name + ": ");
    setText("team1p2", t1p2name);
    setText("subt1p2", t1p2name);
    setText("subt1p1p2", t1p2name);
    setText("subt1p2p2", t1p2name);
    setText("subt1p3p2", t1p2name);
    setText("subt1p4p2", t1p2name);
    setText("editscorest1p2", t1p2name);
  }
  if (getText("playernamet1p3") == "") {
    t1p3name = "Player 3";
    setText("playernamet1p3", "Player 3");
    setText("button49", t1p3name);
    setText("t1p3score", t1p3name + ": ");
    setText("team1p3", t1p3name);
    setText("subt1p3", t1p3name);
    setText("subt1p1p3", t1p3name);
    setText("subt1p2p3", t1p3name);
    setText("subt1p3p3", t1p3name);
    setText("subt1p4p3", t1p3name);
    setText("editscorest1p3", t1p3name);
  } else {
    t1p3name = getText("playernamet1p3");
    setText("button49", t1p3name);
    setText("t1p3score", t1p3name + ": ");
    setText("team1p3", t1p3name);
    setText("subt1p3", t1p3name);
    setText("subt1p1p3", t1p3name);
    setText("subt1p2p3", t1p3name);
    setText("subt1p3p3", t1p3name);
    setText("subt1p4p3", t1p3name);
    setText("editscorest1p3", t1p3name);
  }
  if (getText("playernamet1p4") == "") {
    t1p4name = "Player 4";
    setText("playernamet1p4", "Player 4");
    setText("button50", t1p4name);
    setText("t1p4score", t1p4name + ": ");
    setText("team1p4", t1p4name);
    setText("subt1p4", t1p4name);
    setText("subt1p1p4", t1p4name);
    setText("subt1p2p4", t1p4name);
    setText("subt1p3p4", t1p4name);
    setText("subt1p4p4", t1p4name);
    setText("editscorest1p4", t1p4name);
  } else {
    t1p4name = getText("playernamet1p4");
    setText("button50", t1p4name);
    setText("t1p4score", t1p4name + ": ");
    setText("team1p4", t1p4name);
    setText("subt1p4", t1p4name);
    setText("subt1p1p4", t1p4name);
    setText("subt1p2p4", t1p4name);
    setText("subt1p3p4", t1p4name);
    setText("subt1p4p4", t1p4name);
    setText("editscorest1p4", t1p4name);
  }
  if (getText("playernamet2p1") == "") {
    t2p1name = "Player 1";
    setText("playernamet2p1", "Player 1");
    setText("button44", t2p1name);
    setText("t2p1score", t2p1name + ": ");
    setText("team2p1", t2p1name);
    setText("subt2p1", t2p1name);
    setText("subt2p1p1", t2p1name);
    setText("subt2p2p1", t2p1name);
    setText("subt2p3p1", t2p1name);
    setText("subt2p4p1", t2p1name);
    setText("editscorest2p1", t2p1name);
  } else {
    t2p1name = getText("playernamet2p1");
    setText("button44", t2p1name);
    setText("t2p1score", t2p1name + ": ");
    setText("team2p1", t2p1name);
    setText("subt2p1", t2p1name);
    setText("subt2p1p1", t2p1name);
    setText("subt2p2p1", t2p1name);
    setText("subt2p3p1", t2p1name);
    setText("subt2p4p1", t2p1name);
    setText("editscorest2p1", t2p1name);
  }
  if (getText("playernamet2p2") == "") {
    t2p2name = "Player 2";
    setText("playernamet2p2", "Player 2");
    setText("button47", t2p2name);
    setText("t2p2score", t2p2name + ": ");
    setText("team2p2", t2p2name);
    setText("subt2p2", t2p2name);
    setText("subt2p1p2", t2p2name);
    setText("subt2p2p2", t2p2name);
    setText("subt2p3p2", t2p2name);
    setText("subt2p4p2", t2p2name);
    setText("editscorest2p2", t2p2name);
  } else {
    t2p2name = getText("playernamet2p2");
    setText("button47", t2p2name);
    setText("t2p2score", t2p2name + ": ");
    setText("team2p2", t2p2name);
    setText("subt2p2", t2p2name);
    setText("subt2p1p2", t2p2name);
    setText("subt2p2p2", t2p2name);
    setText("subt2p3p2", t2p2name);
    setText("subt2p4p2", t2p2name);
    setText("editscorest2p2", t2p2name);
  }
  if (getText("playernamet2p3") == "") {
    t2p3name = "Player 3";
    setText("playernamet2p3", "Player 3");
    setText("button46", t2p3name);
    setText("t2p3score", t2p3name + ": ");
    setText("team2p3", t2p3name);
    setText("subt2p3", t2p3name);
    setText("subt2p1p3", t2p3name);
    setText("subt2p2p3", t2p3name);
    setText("subt2p3p3", t2p3name);
    setText("subt2p4p3", t2p3name);
    setText("editscorest2p3", t2p3name);
  } else {
    t2p3name = getText("playernamet2p3");
    setText("button46", t2p3name);
    setText("t2p3score", t2p3name + ": ");
    setText("team2p3", t2p3name);
    setText("subt2p3", t2p3name);
    setText("subt2p1p3", t2p3name);
    setText("subt2p2p3", t2p3name);
    setText("subt2p3p3", t2p3name);
    setText("subt2p4p3", t2p3name);
    setText("editscorest2p3", t2p3name);
  }
  if (getText("playernamet2p4") == "") {
    t2p4name = "Player 4";
    setText("playernamet2p4", "Player 4");
    setText("button45", t2p4name);
    setText("t2p4score", t2p4name + ": ");
    setText("team2p4", t2p4name);
    setText("subt2p4", t2p4name);
    setText("subt2p1p4", t2p4name);
    setText("subt2p2p4", t2p4name);
    setText("subt2p3p4", t2p4name);
    setText("subt2p4p4", t2p4name);
    setText("editscorest2p3", t2p4name);
  } else {
    t2p4name = getText("playernamet2p4");
    setText("button45", t2p4name);
    setText("t2p4score", t2p4name + ": ");
    setText("team2p4", t2p4name);
    setText("subt2p4", t2p4name);
    setText("subt2p1p4", t2p4name);
    setText("subt2p2p4", t2p4name);
    setText("subt2p3p4", t2p4name);
    setText("subt2p4p4", t2p4name);
    setText("editscorest2p3", t2p4name);
  }
  if (getText("teamnamet1") == "") {
    team1 = "Team 1";
    team1sc = "Team 1: ";
  } else {
    team1 = getText("teamnamet1");
    team1sc = getText("teamnamet1") + ": ";
  }
  team1p = " (" + (team1 + "): ");
  setText("label27", team1);
  setText("teamnamet1", team1);
  setText("team1btn", team1);
  setText("label6", team1);
  setText("team1score", team1sc);
  setText("team1", team1 + ("\n" + "Correct"));
  setText("team1neg", team1 + " Neg");
  if (getText("teamnamet2") == "") {
    team2 = "Team 2";
    team2sc = "Team 2: ";
  } else {
    team2 = getText("teamnamet2");
    team2sc = getText("teamnamet2") + ": ";
  }
  team2p = " (" + (team2 + "): ");
  setText("label28", team2);
  setText("teamnamet2", team2);
  setText("team2btn", team2);
  setText("label7", team1);
  setText("team2score", team2sc);
  setText("team2", team2 + ("\n" + "Correct"));
  setText("team2neg", team2 + " Neg");
});
onEvent("setsetting", "click", function( ) {
  setScreen("setting");
});
onEvent("start", "click", function( ) {
  if (neg == 1 && (bouncebonus == 0 && bouncetoss == 1)) {
    setScreen("tossup");
    tossup = tossup + 1;
    setText("tossupcount", "Toss Up " + tossup);
  } else if ((neg == 1 && (bouncebonus == 1 && bouncetoss == 0))) {
    setScreen("tossup");
    tossup = tossup + 1;
    setText("tossupcount", "Toss Up " + tossup);
  } else if ((neg == 1 && (bouncebonus == 1 && bouncetoss == 1))) {
    setScreen("tossup");
    tossup = tossup + 1;
    setText("tossupcount", "Toss Up " + tossup);
  } else if ((neg == 1 && (bouncebonus == 0 && bouncetoss == 0))) {
    setScreen("tossup");
    tossup = tossup + 1;
    setText("tossupcount", "Toss Up " + tossup);
  } else if ((neg == 0 && (bouncebonus == 0 && bouncetoss == 1))) {
    setScreen("tossup");
    tossup = tossup + 1;
    setText("tossupcount", "Toss Up " + tossup);
    hideElement("team1neg");
    hideElement("team2neg");
  } else if ((neg == 0 && (bouncebonus == 1 && bouncetoss == 0))) {
    setScreen("tossup");
    tossup = tossup + 1;
    setText("tossupcount", "Toss Up " + tossup);
    hideElement("team1neg");
    hideElement("team2neg");
  } else if ((neg == 0 && (bouncebonus == 0 && bouncetoss == 0))) {
    setScreen("tossup");
    tossup = tossup + 1;
    setText("tossupcount", "Toss Up " + tossup);
    hideElement("team1neg");
    hideElement("team2neg");
  } else if ((neg == 0 && (bouncebonus == 1 && bouncetoss == 1))) {
    setScreen("tossup");
    tossup = tossup + 1;
    setText("tossupcount", "Toss Up " + tossup);
    hideElement("team1neg");
    hideElement("team2neg");
  }
  setText("fullrecordtxt", "Tossup 1");
});
onEvent("checkscore", "click", function( ) {
  setScreen("Score");
});
onEvent("backscore", "click", function( ) {
  setScreen("tossup");
});
onEvent("team1", "click", function( ) {
  questionrw = 1;
  setScreen("whoansweredt1");
});
onEvent("team2", "click", function( ) {
  questionrw = 1;
  setScreen("whoansweredt2");
});
onEvent("team1neg", "click", function( ) {
  questionrw = 0;
  setScreen("whoansweredt1");
});
onEvent("team2neg", "click", function( ) {
  questionrw = 0;
  setScreen("whoansweredt2");
});
onEvent("deadtossup", "click", function( ) {
  if (sd == 1) {
    setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
    setScreen("score");
    hideElement("backscore");
  } else if ((ot > 0)) {
    if (ot == 3) {
      if (t1 == t2) {
        setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
        setScreen("suddendeathscreen");
      } else {
        setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
        setScreen("score");
        hideElement("backscore");
      }
    } else {
      ot = ot + 1;
      setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ("Overtime " + ot)));
      setText("tossupscount", "Overtime " + ot);
      setScreen("tossup");
    }
  } else {
    if (tossup == 10) {
      setScreen("substitutes");
      setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
      tossup = tossup + 1;
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ("Toss Up " + tossup)));
    } else if ((tossup == 20)) {
      if (t1 == t2) {
        setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
        setScreen("otscreen");
      } else {
        setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
        setScreen("Score");
        hideElement("backscore");
      }
    } else if (((tossup < 20) + (tossup != 10))) {
      setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
      setScreen("tossup");
      tossup = tossup + 1;
      setText("tossupcount", "Toss Up " + tossup);
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ("Toss Up " + tossup)));
    }
  }
});
onEvent("backt1", "click", function( ) {
  setScreen("tossup");
});
onEvent("backt2", "click", function( ) {
  setScreen("tossup");
});
onEvent("team1p1", "click", function( ) {
  if (questionrw == 1) {
    if (subt1p1yn == 5) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "10")));
      t1p5 = t1p5 + 10;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p1";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p1yn == 2)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "10")));
      t1p2 = t1p2 + 10;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p1";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p1yn == 3)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "10")));
      t1p3 = t1p3 + 10;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p1";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p1yn == 4)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "10")));
      t1p4 = t1p4 + 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p1";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p1yn == 0)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "10")));
      t1p1 = t1p1 + 10;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p1";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p1yn == 6)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "10")));
      t1p6 = t1p6 + 10;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p1";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p1yn == 7)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "10")));
      t1p7 = t1p7 + 10;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p1";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p1yn == 8)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "10")));
      t1p8 = t1p8 + 10;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p1";
      powerteam = "pteam1";
      setScreen("powerteam1");
    }
  } else if ((questionrw == 0)) {
    if ((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 1))) {
      if (subt1p1yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p1yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p1yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p1yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p1yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p1yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p1yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p1yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      if (subt1p1yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      if (subt1p1yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p1yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p1yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p1yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p1yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p1yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p1yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p1yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      }
    } else if (((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      if (subt1p1yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p1yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      }
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 1)))) {
      setScreen("tossup");
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      setScreen("tossup");
    }
  }
});
onEvent("team1p2", "click", function( ) {
  if (questionrw == 1) {
    if (subt1p2yn == 5) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "10")));
      t1p5 = t1p5 + 10;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p2";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p2yn == 1)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "10")));
      t1p1 = t1p1 + 10;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p2";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p2yn == 3)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "10")));
      t1p3 = t1p3 + 10;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p2";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p2yn == 4)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "10")));
      t1p4 = t1p4 + 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p2";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p2yn == 0)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "10")));
      t1p2 = t1p2 + 10;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p2";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p2yn == 6)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "10")));
      t1p6 = t1p6 + 10;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p2";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p2yn == 7)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "10")));
      t1p7 = t1p7 + 10;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p2";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p2yn == 8)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "10")));
      t1p8 = t1p8 + 10;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p2";
      powerteam = "pteam1";
      setScreen("powerteam1");
    }
  } else if ((questionrw == 0)) {
    if ((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 1))) {
      if (subt1p2yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p2yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p2yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p2yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p2yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p2yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p2yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p2yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      if (subt1p2yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      if (subt1p2yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", etam1sc + t1);
        f2();
      } else if ((subt1p2yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", etam1sc + t1);
        f2();
      } else if ((subt1p2yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p2yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p2yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p2yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", etam1sc + t1);
        f2();
      } else if ((subt1p2yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", etam1sc + t1);
        f2();
      } else if ((subt1p2yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", etam1sc + t1);
        f2();
      }
    } else if (((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      if (subt1p2yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p2yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      }
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 1)))) {
      setScreen("tossup");
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      setScreen("tossup");
    }
  }
});
onEvent("team1p3", "click", function( ) {
  if (questionrw == 1) {
    if (subt1p3yn == 5) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "10")));
      t1p5 = t1p5 + 10;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p3";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p3yn == 1)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "10")));
      t1p1 = t1p1 + 10;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p3";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p3yn == 2)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "10")));
      t1p2 = t1p2 + 10;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p3";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p3yn == 4)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "10")));
      t1p4 = t1p4 + 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p3";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p3yn == 0)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "10")));
      t1p3 = t1p3 + 10;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p3";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p3yn == 6)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "10")));
      t1p6 = t1p6 + 10;
      setText("t1p6score", (t1p5name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p3";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p3yn == 7)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "10")));
      t1p7 = t1p7 + 10;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p3";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p3yn == 8)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "10")));
      t1p8 = t1p8 + 10;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p3";
      powerteam = "pteam1";
      setScreen("powerteam1");
    }
  } else if ((questionrw == 0)) {
    if ((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 1))) {
      if (subt1p3yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p3yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p3yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p3yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p3yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p3yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p3yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p3yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      if (subt1p3yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      if (subt1p3yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p3yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p3yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p3yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p3yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p3yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p3yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p3yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      }
    } else if (((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      if (subt1p3yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p3yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      }
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 1)))) {
      setScreen("tossup");
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      setScreen("tossup");
    }
  }
});
onEvent("team1p4", "click", function( ) {
  if (questionrw == 1) {
    if (subt1p4yn == 5) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "10")));
      t1p5 = t1p5 + 10;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p4";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p4yn == 1)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "10")));
      t1p1 = t1p1 + 10;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p4";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p4yn == 2)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "10")));
      t1p4 = t1p4 + 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p4";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p4yn == 3)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "10")));
      t1p4 = t1p4 + 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p4";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p4yn == 0)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "10")));
      t1p4 = t1p4 + 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p4";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p4yn == 6)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "10")));
      t1p6 = t1p6 + 10;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p4";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p4yn == 7)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "10")));
      t1p7 = t1p7 + 10;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p4";
      powerteam = "pteam1";
      setScreen("powerteam1");
    } else if ((subt1p4yn == 8)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "10")));
      t1p8 = t1p8 + 10;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("team1score", team1sc + t1);
      powerplayer = "pt1p4";
      powerteam = "pteam1";
      setScreen("powerteam1");
    }
  } else if ((questionrw == 0)) {
    if ((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 1))) {
      if (subt1p4yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p4yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p4yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p4yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p4yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p4yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p4yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      } else if ((subt1p4yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        setScreen("tossup");
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      if (subt1p4yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p2name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      if (subt1p4yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p4yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p4yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p2score", (t1p4name + ": ") + t1p2);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p4yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p3score", (t1p3name + ": ") + t1p3);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p4yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p4yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p4yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      } else if ((subt1p4yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f2();
      }
    } else if (((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      if (subt1p4yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p5name + team1p) + "-5")));
        t1p5 = t1p5 - 5;
        setText("t1p5score", (t1p5name + ": ") + t1p5);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p1name + team1p) + "-5")));
        t1p1 = t1p1 - 5;
        setText("t1p1score", (t1p1name + ": ") + t1p1);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p2name + team1p) + "-5")));
        t1p2 = t1p2 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p3name + team1p) + "-5")));
        t1p3 = t1p3 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p4name + team1p) + "-5")));
        t1p4 = t1p4 - 5;
        setText("t1p4score", (t1p4name + ": ") + t1p4);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p6name + team1p) + "-5")));
        t1p6 = t1p6 - 5;
        setText("t1p6score", (t1p6name + ": ") + t1p6);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p7name + team1p) + "-5")));
        t1p7 = t1p7 - 5;
        setText("t1p7score", (t1p7name + ": ") + t1p7);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      } else if ((subt1p4yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t1p8name + team1p) + "-5")));
        t1p8 = t1p8 - 5;
        setText("t1p8score", (t1p8name + ": ") + t1p8);
        t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
        setText("team1score", team1sc + t1);
        f1();
      }
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 1)))) {
      setScreen("tossup");
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      setScreen("tossup");
    }
  }
});
onEvent("team2p1", "click", function( ) {
  if (questionrw == 1) {
    if (subt2p1yn == 5) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "10")));
      t2p5 = t2p5 + 10;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p1";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p1yn == 2)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "10")));
      t2p2 = t2p2 + 10;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p1";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p1yn == 3)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "10")));
      t2p3 = t2p3 + 10;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p1";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p1yn == 4)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "10")));
      t2p4 = t2p4 + 10;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p1";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p1yn == 0)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "10")));
      t2p1 = t2p1 + 10;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p1";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p1yn == 6)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "10")));
      t2p6 = t2p6 + 10;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p1";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p1yn == 7)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "10")));
      t2p7 = t2p7 + 10;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p1";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p1yn == 8)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "10")));
      t2p8 = t2p8 + 10;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p1";
      powerteam = "pteam2";
      setScreen("powerteam2");
    }
  } else if ((questionrw == 0)) {
    if ((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 1))) {
      if (subt2p1yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p1yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p1yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p1yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p1yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p1yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p1yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p1yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      if (subt2p1yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      if (subt2p1yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p1yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p1yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p1yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p1yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p1yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p1yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p1yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      }
    } else if (((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      if (subt2p1yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p1yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      }
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 1)))) {
      setScreen("tossup");
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      setScreen("tossup");
    }
  }
});
onEvent("team2p2", "click", function( ) {
  if (questionrw == 1) {
    if (subt2p2yn == 5) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "10")));
      t2p5 = t2p5 + 10;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p2";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p2yn == 1)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "10")));
      t2p1 = t2p1 + 10;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p2";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p2yn == 3)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "10")));
      t2p3 = t2p3 + 10;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p2";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p2yn == 4)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "10")));
      t2p4 = t2p4 + 10;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p2";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p2yn == 0)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "10")));
      t2p2 = t2p2 + 10;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p2";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p2yn == 6)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "10")));
      t2p6 = t2p6 + 10;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p2";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p2yn == 7)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "10")));
      t2p7 = t2p7 + 10;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p2";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p2yn == 8)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "10")));
      t2p8 = t2p8 + 10;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p2";
      powerteam = "pteam2";
      setScreen("powerteam2");
    }
  } else if ((questionrw == 0)) {
    if ((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 1))) {
      if (subt2p2yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p2yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p2yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p2yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p2yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p2yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p2yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p2yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      if (subt2p2yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      if (subt2p2yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p2yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p2yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p2yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p2yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p2yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p2yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p2yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      }
    } else if (((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      if (subt2p2yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p2yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      }
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 1)))) {
      setScreen("tossup");
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      setScreen("tossup");
    }
  }
});
onEvent("team2p3", "click", function( ) {
  if (questionrw == 1) {
    if (subt2p3yn == 5) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "10")));
      t2p5 = t2p5 + 10;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p3";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p3yn == 1)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "10")));
      t2p1 = t2p1 + 10;
      setText("t2p3score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p3";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p3yn == 2)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "10")));
      t2p2 = t2p2 + 10;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p3";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p3yn == 4)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "10")));
      t2p4 = t2p4 + 10;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p3";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p3yn == 0)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "10")));
      t2p3 = t2p3 + 10;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p3";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p3yn == 6)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "10")));
      t2p6 = t2p6 + 10;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p3";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p3yn == 7)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "10")));
      t2p7 = t2p7 + 10;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p3";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p3yn == 8)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "10")));
      t2p8 = t2p8 + 10;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p3";
      powerteam = "pteam2";
      setScreen("powerteam2");
    }
  } else if ((questionrw == 0)) {
    if ((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 1))) {
      if (subt2p3yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p3yn ==1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p3yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p3yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p3yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p3yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p3yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p3yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      if (subt2p3yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      if (subt2p3yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p3yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p3yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p3yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p3yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p3yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p3yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p3yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      }
    } else if (((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      if (subt2p3yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 4)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p3yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      }
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 1)))) {
      setScreen("tossup");
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      setScreen("tossup");
    }
  }
});
onEvent("team2p4", "click", function( ) {
  if (questionrw == 1) {
    if (subt2p4yn == 5) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "10")));
      t2p5 = t2p5 + 10;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p4";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p4yn == 1)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "10")));
      t2p1 = t2p1 + 10;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p4";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p4yn == 2)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "10")));
      t2p2 = t2p2 + 10;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p4";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p4yn == 3)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "10")));
      t2p3 = t2p3 + 10;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p4";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p4yn == 0)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "10")));
      t2p4 = t2p4 + 10;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p4";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p4yn == 6)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "10")));
      t2p6 = t2p6 + 10;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p4";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p4yn == 7)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "10")));
      t2p7 = t2p7 + 10;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p4";
      powerteam = "pteam2";
      setScreen("powerteam2");
    } else if ((subt2p4yn == 8)) {
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "10")));
      t2p8 = t2p8 + 10;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("team2score", team2sc + t2);
      powerplayer = "pt2p4";
      powerteam = "pteam2";
      setScreen("powerteam2");
    }
  } else if ((questionrw == 0)) {
    if ((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 1))) {
      if (subt2p4yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p4yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p4yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p4yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p4yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p4yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p4yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      } else if ((subt2p4yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        setScreen("tossup");
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      if (subt2p4yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      }
    } else if (((neg == 1) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      if (subt2p4yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p4yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p4yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p4yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p3);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p4yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p4yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p4yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      } else if ((subt2p4yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f2();
      }
    } else if (((neg == 1) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      if (subt2p4yn == 5) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p5name + team2p) + "-5")));
        t2p5 = t2p5 - 5;
        setText("t2p5score", (t2p5name + ": ") + t2p5);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 1)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p1name + team2p) + "-5")));
        t2p1 = t2p1 - 5;
        setText("t2p1score", (t2p1name + ": ") + t2p1);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 2)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p2name + team2p) + "-5")));
        t2p2 = t2p2 - 5;
        setText("t2p2score", (t2p2name + ": ") + t2p2);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 3)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p3name + team2p) + "-5")));
        t2p3 = t2p3 - 5;
        setText("t2p3score", (t2p3name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 0)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p4name + team2p) + "-5")));
        t2p4 = t2p4 - 5;
        setText("t2p4score", (t2p4name + ": ") + t2p4);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 6)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p6name + team2p) + "-5")));
        t2p6 = t2p6 - 5;
        setText("t2p6score", (t2p6name + ": ") + t2p6);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 7)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p7name + team2p) + "-5")));
        t2p7 = t2p7 - 5;
        setText("t2p7score", (t2p7name + ": ") + t2p7);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      } else if ((subt2p4yn == 8)) {
        setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ((t2p8name + team2p) + "-5")));
        t2p8 = t2p8 - 5;
        setText("t2p8score", (t2p8name + ": ") + t2p8);
        t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
        setText("team2score", team2sc + t2);
        f1();
      }
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 1)))) {
      setScreen("tossup");
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 0) + (bouncetoss == 0)))) {
      f1();
    } else if (((neg == 0) + ((bouncebonus == 1) + (bouncetoss == 1)))) {
      setScreen("tossup");
    }
  }
});
onEvent("powerteam1yes", "click", function( ) {
  setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + "Power"));
  if (powerplayer == "pt1p1") {
    if (subt1p1yn == 5) {
      t1p5 = t1p5 + 5;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      powert1();
    } else if (subt1p1yn == 2) {
      t1p2 = t1p2 + 5;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      powert1();
    } else if (subt1p1yn == 3) {
      t1p3 = t1p3 + 5;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      powert1();
    } else if (subt1p1yn == 4) {
      t1p4 = t1p4 + 5;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      powert1();
    } else if (subt1p1yn == 0) {
      t1p1 = t1p1 + 5;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      powert1();
    } else if ((subt1p1yn == 6)) {
      t1p6 = t1p6 + 5;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      powert1();
    } else if ((subt1p1yn == 7)) {
      t1p7 = t1p7 + 5;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      powert1();
    } else if ((subt1p1yn == 8)) {
      t1p8 = t1p8 + 5;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      powert1();
    }
  } else if ((powerplayer == "pt1p2")) {
    if (subt1p2yn == 5) {
      t1p5 = t1p5 + 5;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      powert1();
    } else if (subt1p2yn == 1) {
      t1p1 = t1p1 + 5;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      powert1();
    } else if (subt1p2yn == 3) {
      t1p3 = t1p3 + 5;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      powert1();
    } else if (subt1p2yn == 4) {
      t1p4 = t1p4 + 5;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      powert1();
    } else if ((subt1p2yn == 0)) {
      t1p2 = t1p2 + 5;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      powert1();
    } else if ((subt1p2yn == 6)) {
      t1p6 = t1p6 + 5;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      powert1();
    } else if ((subt1p2yn == 7)) {
      t1p7 = t1p7 + 5;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      powert1();
    } else if ((subt1p2yn == 8)) {
      t1p8 = t1p8 + 5;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      powert1();
    }
  } else if ((powerplayer == "pt1p3")) {
    if (subt1p3yn == 5) {
      t1p5 = t1p5 + 5;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      powert1();
    } else if ((subt1p3yn == 1)) {
      t1p1 = t1p1 + 5;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      powert1();
    } else if ((subt1p3yn == 2)) {
      t1p2 = t1p2 + 5;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      powert1();
    } else if ((subt1p3yn == 4)) {
      t1p4 = t1p4 + 5;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      powert1();
    } else if ((subt1p3yn == 0)) {
      t1p3 = t1p3 + 5;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      powert1();
    } else if ((subt1p3yn == 6)) {
      t1p6 = t1p6 + 5;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      powert1();
    } else if ((subt1p3yn == 7)) {
      t1p7 = t1p7 + 5;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      powert1();
    } else if ((subt1p3yn == 8)) {
      t1p8 = t1p8 + 5;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      powert1();
    }
  } else if ((powerplayer == "pt1p4")) {
    if (subt1p4yn == 5) {
      t1p5 = t1p5 + 5;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      powert1();
    } else if ((subt1p4yn == 1)) {
      t1p1 = t1p1 + 5;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      powert1();
    } else if ((subt1p4yn == 2)) {
      t1p2 = t1p2 + 5;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      powert1();
    } else if ((subt1p4yn == 3)) {
      t1p3 = t1p3 + 5;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      powert1();
    } else if ((subt1p4yn == 0)) {
      t1p4 = t1p4 + 5;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      powert1();
    } else if ((subt1p4yn == 6)) {
      t1p6 = t1p6 + 5;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      powert1();
    } else if ((subt1p4yn == 7)) {
      t1p7 = t1p7 + 5;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      powert1();
    } else if ((subt1p4yn == 8)) {
      t1p8 = t1p8 + 5;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      powert1();
    }
  }
});
onEvent("powerteam2yes", "click", function( ) {
  setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + "Power"));
  if (powerplayer == "pt2p1") {
    if (subt2p1yn == 5) {
      t2p5 = t2p5 + 5;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      powert2();
    } else if ((subt2p1yn == 2)) {
      t2p2 = t2p2 + 5;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      powert2();
    } else if ((subt2p1yn == 3)) {
      t2p3 = t2p3 + 5;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      powert2();
    } else if ((subt2p1yn == 4)) {
      t2p4 = t2p4 + 5;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      powert2();
    } else if ((subt2p1yn == 0)) {
      t2p1 = t2p1 + 5;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      powert2();
    } else if ((subt2p1yn == 6)) {
      t2p6 = t2p6 + 5;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      powert2();
    } else if ((subt2p1yn == 7)) {
      t2p7 = t2p7 + 5;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      powert2();
    } else if ((subt2p1yn == 8)) {
      t2p8 = t2p8 + 5;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      powert2();
    }
  } else if ((powerplayer == "pt2p2")) {
    if (subt2p2yn == 5) {
      t2p5 = t2p5 + 5;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      powert2();
    } else if ((subt2p2yn == 1)) {
      t2p1 = t2p1 + 5;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      powert2();
    } else if ((subt2p2yn == 3)) {
      t2p3 = t2p3 + 5;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      powert2();
    } else if ((subt2p2yn == 4)) {
      t2p4 = t2p4 + 5;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      powert2();
    } else if (subt2p2yn == 0) {
      t2p2 = t2p2 + 5;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      powert2();
    } else if ((subt2p2yn == 6)) {
      t2p6 = t2p6 + 5;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      powert2();
    } else if ((subt2p2yn == 7)) {
      t2p7 = t2p7 + 5;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      powert2();
    } else if ((subt2p2yn == 8)) {
      t2p8 = t2p8 + 5;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      powert2();
    }
  } else if ((powerplayer == "pt2p3")) {
    if (subt2p3yn == 5) {
      t2p5 = t2p5 + 5;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      powert2();
    } else if ((subt2p3yn == 1)) {
      t2p1 = t2p1 + 5;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      powert2();
    } else if ((subt2p3yn == 2)) {
      t2p2 = t2p2 + 5;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      powert2();
    } else if ((subt2p3yn == 4)) {
      t2p4 = t2p4 + 5;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      powert2();
    } else if (subt2p3yn == 0) {
      t2p3 = t2p3 + 5;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      powert2();
    } else if ((subt2p3yn == 6)) {
      t2p6 = t2p6 + 5;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      powert2();
    } else if ((subt2p3yn == 7)) {
      t2p7 = t2p7 + 5;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      powert2();
    } else if ((subt2p3yn == 8)) {
      t2p8 = t2p8 + 5;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      powert2();
    }
  } else if ((powerplayer == "pt2p4")) {
    if (subt2p4yn == 5) {
      t2p5 = t2p5 + 5;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      powert2();
    } else if ((subt2p4yn == 1)) {
      t2p1 = t2p1 + 5;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      powert2();
    } else if ((subt2p4yn == 2)) {
      t2p2 = t2p2 + 5;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      powert2();
    } else if ((subt2p4yn == 3)) {
      t2p3 = t2p3 + 5;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      powert2();
    } else if ((subt2p4yn == 0)) {
      t2p4 = t2p4 + 5;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      powert2();
    } else if ((subt2p4yn == 6)) {
      t2p6 = t2p6 + 5;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      powert2();
    } else if ((subt2p4yn == 7)) {
      t2p7 = t2p7 + 5;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      powert2();
    } else if ((subt2p4yn == 8)) {
      t2p8 = t2p8 + 5;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      powert2();
    }
  }
});
onEvent("powerteam1no", "click", function( ) {
  bonus = 1;
  setScreen("bonusnobounceteam1");
  setText("bonusnbt1box", team1 + " Bonus " + bonus);
});
onEvent("powerteam2no", "click", function( ) {
  bonus = 1;
  setScreen("bonusnobounceteam2");
  setText("bonusnbt2box", team2 + " Bonus " + bonus);
});
onEvent("bonusnbt1", "click", function( ) {
  //2/15/20
  teambonuswrong = 0;
  setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Bonus " + (team1 + " question ")) + bonus)));
  bonust1 = bonust1 + 10;
  t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
  setText("team1score", team1sc + t1);
  console.log(powerplayer);
  if (bonus < 3) {
    if (powerteam == "pteam2") {
      setScreen("bonusnobounceteam2");
      bonus = bonus + 1;
      setText("bonusnbt2box", (team2 + " Bonus ") + bonus);
    } else if ((powerteam == "pteam1")) {
      bonus = bonus + 1;
      setText("bonusnbt1box", team1 + " Bonus " + bonus);
    }
  } else if ((bonus == 3)) {
    bonus3();
  }
});
onEvent("bonusnbt2", "click", function( ) {
  teambonuswrong = 0;
  setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Bonus " + (team2 + " question ")) + bonus)));
  bonust2 = bonust2 + 10;
  t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
  setText("team2score", team2sc + t2);
  console.log(powerplayer);
  if (bonus < 3) {
    if (powerteam == "pteam1") {
      setScreen("bonusnobounceteam1");
      bonus = bonus + 1;
      setText("bonusnbt1box", team1 + " Bonus " + bonus);
    } else if ((powerteam == "pteam2")) {
      bonus = bonus + 1;
      setText("bonusnbt2box", team2 + " Bonus " + bonus);
    }
  } else if ((bonus == 3)) {
    bonus3();
  }
});
onEvent("bonusnbt1dead", "click", function( ) {
  if (bouncebonus == 1) {
    if (teambonuswrong == 0) {
      teambonuswrong = 1;
      setText("bonusnbt2box", (team2 + " Steal ") + bonus);
      setScreen("bonusnobounceteam2");
    } else if ((teambonuswrong == 1)) {
      teambonuswrong = 0;
      if (bonus < 3) {
        bonus = bonus + 1;
        //suspicious
        setText("bonusnbt2box", team2 + " Bonus " + bonus);
        setScreen("bonusnobounceteam2");
      } else if ((bonus == 3)) {
        bonus3();
      }
    }
  } else if ((bouncebonus == 0)) {
    if (bonus < 3) {
      bonus = bonus + 1;
      setText("bonusnbt1box", team1 + " Bonus " + bonus);
    } else if ((bonus == 3)) {
      bonus3();
    }
  }
});
onEvent("bonusnbt2dead", "click", function( ) {
  if (bouncebonus == 1) {
    if (teambonuswrong == 0) {
      teambonuswrong = 1;
      setText("bonusnbt1box", (team1 + " Steal ") + bonus);
      setScreen("bonusnobounceteam1");
    } else if ((teambonuswrong == 1)) {
      teambonuswrong = 0;
      if (bonus < 3) {
        //suspicious
        bonus = bonus + 1;
        setText("bonusnbt1box", team1 + " Bonus " + bonus);
        setScreen("bonusnobounceteam1");
      } else if ((bonus == 3)) {
        bonus3();
      }
    }
  } else if ((bouncebonus == 0)) {
    if (bonus < 3) {
      bonus = bonus + 1;
      setText("bonusnbt2box", team2 + " Bonus " + bonus);
    } else if ((bonus == 3)) {
      bonus3();
    }
  }
});
onEvent("reset", "click", function( ) {
  setScreen("setting");
  questionrw = 0;
  neg = 1;
  bouncebonus = 1;
  bouncetoss = 1;
  tossup = 0;
  bonus = 0;
  powerplayer = 0;
  powerteam = 0;
  t1p1 = 0;
  t1p2 = 0;
  t1p3 = 0;
  t1p4 = 0;
  t1sub = 0;
  t2p1 = 0;
  t2p2 = 0;
  t2p3 = 0;
  t2p4 = 0;
  t2sub = 0;
  settingdoneclick = 0;
  teambonuswrong = 0;
  bonust1 = 0;
  bonust2 = 0;
  t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
  setText("team1score", "Team 1: " + t1);
  t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
  setText("team2score", "Team 2: " + t2);
  //instead of 0, "Type name"
  setText("playernamet1p1", "");
  setText("playernamet1p2", "");
  setText("playernamet1p3", "");
  setText("playernamet1p4", "");
  setText("playernamet2p1", "");
  setText("playernamet2p2", "");
  setText("playernamet2p3", "");
  setText("playernamet2p4", "");
  setText("newplayernamet1p1", "");
  setText("newplayernamet1p2", "");
  setText("newplayernamet1p3", "");
  setText("newplayernamet1p4", "");
  setText("newplayernamet2p1", "");
  setText("newplayernamet2p2", "");
  setText("newplayerdonet2p3", "");
  setText("newplayerdonet2p4", "");
  t1p1name = "Player 1";
  t1p2name = "Player 2";
  t1p3name = "Player 3";
  t1p4name = "Player 4";
  t2p1name = "Player 1";
  t2p2name = "Player 2";
  t2p3name = "Player 3";
  t2p4name = "Player 4";
  setText("button51", t1p1name);
  setText("t1p1score", (t1p1name + ": ") + t1p1);
  setText("team1p1", t1p1name);
  setText("subt1p1", t1p1name);
  // 
  setText("button48", t1p2name);
  setText("t1p2score", (t1p2name + ": ") + t1p2);
  setText("team1p2", t1p2name);
  setText("subt1p2", t1p2name);
  // 
  setText("button49", t1p3name);
  setText("t1p3score", (t1p3name + ": ") + t1p3);
  setText("team1p3", t1p3name);
  setText("subt1p3", t1p3name);
  // 
  setText("button50", t1p4name);
  setText("t1p4score", (t1p4name + ": ") + t1p4);
  setText("team1p4", t1p4name);
  setText("subt1p4", t1p4name);
  // 
  setText("button44", t2p1name);
  setText("t2p1score", (t2p1name + ": ") + t2p1);
  setText("team2p1", t2p1name);
  setText("subt2p1", t2p1name);
  // 
  setText("button47", t2p2name);
  setText("t2p2score", (t2p2name + ": ") + t2p2);
  setText("team2p2", t2p2name);
  setText("subt2p2", t2p2name);
  // 
  setText("button46", t2p3name);
  setText("t2p3score", (t2p3name + ": ") + t2p3);
  setText("team2p3", t2p3name);
  setText("subt2p3", t2p3name);
  // 
  setText("button45", t2p4name);
  setText("t2p4score", (t2p4name + ": ") + t2p4);
  setText("team2p4", t2p4name);
  setText("subt2p4", t2p4name);
  // 
  setText("button51", "Player 1");
  setText("button48", "Player 2");
  setText("button49", "Player 3");
  setText("button50", "Player 4");
  setText("button44", "Player 1");
  setText("button47", "Player 2");
  setText("button46", "Player 3");
  setText("button45", "Player 4");
  //subs. Change to 5 if need be
  subt1count = 4;
  subt2count = 4;
  //change to 0 if need be
  subt1p1name = "Player 5";
  subt1p2name = "Player 5";
  subt1p3name = "Player 5";
  subt1p4name = "Player 5";
  subt2p1name = "Player 5";
  subt2p2name = "Player 5";
  subt2p3name = "Player 5";
  subt2p4name = "Player 5";
  subt1p1score = 0;
  subt1p2score = 0;
  subt1p3score = 0;
  subt1p4score = 0;
  subt2p1score = 0;
  subt2p2score = 0;
  subt2p3score = 0;
  subt2p4score = 0;
  subt1text = "Substitutes: ";
  subt2text = "Substitutes: ";
  setText("t1p6score", subt1text);
  setText("t2p6score", subt2text);
  subt1p1yn = 0;
  subt1p2yn = 0;
  subt1p3yn = 0;
  subt1p4yn = 0;
  subt2p1yn = 0;
  subt2p2yn = 0;
  subt2p3yn = 0;
  subt2p4yn = 0;
  hideElement("subt1p1p1");
  hideElement("subt1p2p1");
  hideElement("subt1p3p1");
  hideElement("subt1p4p1");
  hideElement("subt1p1p2");
  hideElement("subt1p2p2");
  hideElement("subt1p3p2");
  hideElement("subt1p4p2");
  hideElement("subt1p1p3");
  hideElement("subt1p2p3");
  hideElement("subt1p3p3");
  hideElement("subt1p4p3");
  hideElement("subt1p1p4");
  hideElement("subt1p2p4");
  hideElement("subt1p3p4");
  hideElement("subt1p4p4");
  hideElement("subt2p1p1");
  hideElement("subt2p2p1");
  hideElement("subt2p3p1");
  hideElement("subt2p4p1");
  hideElement("subt2p1p2");
  hideElement("subt2p2p2");
  hideElement("subt2p3p2");
  hideElement("subt2p4p2");
  hideElement("subt2p1p3");
  hideElement("subt2p2p3");
  hideElement("subt2p3p3");
  hideElement("subt2p4p3");
  hideElement("subt2p1p4");
  hideElement("subt2p2p4");
  hideElement("subt2p3p4");
  hideElement("subt2p4p4");
  //settext
  setText("subt1p1p1", "Player 1");
  setText("subt1p2p1", "Player 1");
  setText("subt1p3p1", "Player 1");
  setText("subt1p4p1", "Player 1");
  setText("subt1p1p2", "Player 2");
  setText("subt1p2p2", "Player 2");
  setText("subt1p3p2", "Player 2");
  setText("subt1p4p2", "Player 2");
  setText("subt1p1p3", "Player 3");
  setText("subt1p2p3", "Player 3");
  setText("subt1p3p3", "Player 3");
  setText("subt1p4p3", "Player 3");
  setText("subt1p1p4", "Player 4");
  setText("subt1p2p4", "Player 4");
  setText("subt1p3p4", "Player 4");
  setText("subt1p4p4", "Player 4");
  setText("subt2p1p1", "Player 1");
  setText("subt2p2p1", "Player 1");
  setText("subt2p3p1", "Player 1");
  setText("subt2p4p1", "Player 1");
  setText("subt2p1p2", "Player 2");
  setText("subt2p2p2", "Player 2");
  setText("subt2p3p2", "Player 2");
  setText("subt2p4p2", "Player 2");
  setText("subt2p1p3", "Player 3");
  setText("subt2p2p3", "Player 3");
  setText("subt2p3p3", "Player 3");
  setText("subt2p4p3", "Player 3");
  setText("subt2p1p4", "Player 4");
  setText("subt2p2p4", "Player 4");
  setText("subt2p3p4", "Player 4");
  setText("subt2p4p4", "Player 4");
  setText("fullrecordtxt", "");
  subt1p1text = ("\n" + (subt1p1name + ": ")) + subt1p1score;
  subt1p2text = ("\n" + (subt1p2name + ": ")) + subt1p2score;
  subt1p3text = ("\n" + (subt1p3name + ": ")) + subt1p3score;
  subt1p4text = ("\n" + (subt1p4name + ": ")) + subt1p4score;
  subt2p1text = ("\n" + (subt2p1name + ": ")) + subt2p1score;
  subt2p2text = ("\n" + (subt2p2name + ": ")) + subt2p2score;
  subt2p3text = ("\n" + (subt2p3name + ": ")) + subt2p3score;
  subt2p4text = ("\n" + (subt2p4name + ": ")) + subt2p4score;
  showElement("team1neg");
  showElement("team2neg");
  ot = 0;
  sd = 0;
  setText("teamnamet1", "");
  setText("teamnamet2", "");
  team1 = "Team 1";
  team1sc = "Team 1: ";
  team2 = "Team 2";
  team2sc = "Team 2: ";
  setText("label27", team1);
  setText("team1btn", team1);
  setText("label6", team1);
  setText("team1score", team1sc);
  setText("team1", team1 + ("\n" + "Correct"));
  setText("team1neg", team1 + " Neg");
  setText("label28", team2);
  setText("team2btn", team2);
  setText("label7", team1);
  setText("team2score", team2sc);
  setText("team2", team2 + ("\n" + "Correct"));
  setText("team2neg", team2 + " Neg");
  team1p = " (" + (team2 + "): ");
  team2p = " (" + (team2 + "): ");
  editplayer = 0;
  setText("label27", team1);
  setText("editscorest1p1", "Player 1");
  setText("editscorest1p2", "Player 2");
  setText("editscorest1p3", "Player 3");
  setText("editscorest1p4", "Player 4");
  setText("label28", "text");
  setText("editscorest2p1", "Player 1");
  setText("editscorest2p2", "Player 2");
  setText("editscorest2p3", "Player 3");
  setText("editscorest2p4", "Player 4");
  //3/16
  t1p5 = 0;
  t1p6 = 0;
  t1p7 = 0;
  t1p8 = 0;
  t2p5 = 0;
  t2p6 = 0;
  t2p7 = 0;
  t2p8 = 0;
  t1p5name = 0;
  t1p6name = 0;
  t1p7name = 0;
  t1p8name = 0;
  t2p5name = 0;
  t2p6name = 0;
  t2p7name = 0;
  t2p8name = 0;
  hideElement("subt1p1p5");
  hideElement("subt1p2p5");
  hideElement("subt1p3p5");
  hideElement("subt1p4p5");
  hideElement("subt1p1p6");
  hideElement("subt1p2p6");
  hideElement("subt1p3p6");
  hideElement("subt1p4p6");
  hideElement("subt1p1p7");
  hideElement("subt1p2p7");
  hideElement("subt1p3p7");
  hideElement("subt1p4p7");
  hideElement("subt1p1p8");
  hideElement("subt1p2p8");
  hideElement("subt1p3p8");
  hideElement("subt1p4p8");
  hideElement("subt2p1p5");
  hideElement("subt2p2p5");
  hideElement("subt2p3p5");
  hideElement("subt2p4p5");
  hideElement("subt2p1p6");
  hideElement("subt2p2p6");
  hideElement("subt2p3p6");
  hideElement("subt2p4p6");
  hideElement("subt2p1p7");
  hideElement("subt2p2p7");
  hideElement("subt2p3p7");
  hideElement("subt2p4p7");
  hideElement("subt2p1p8");
  hideElement("subt2p2p8");
  hideElement("subt2p3p8");
  hideElement("subt2p4p8");
  //settext
  setText("subt1p1p1", "Player 5");
  setText("subt1p2p1", "Player 5");
  setText("subt1p3p1", "Player 5");
  setText("subt1p4p1", "Player 5");
  setText("subt1p1p2", "Player 6");
  setText("subt1p2p2", "Player 6");
  setText("subt1p3p2", "Player 6");
  setText("subt1p4p2", "Player 6");
  setText("subt1p1p3", "Player 7");
  setText("subt1p2p3", "Player 7");
  setText("subt1p3p3", "Player 7");
  setText("subt1p4p3", "Player 7");
  setText("subt1p1p4", "Player 8");
  setText("subt1p2p4", "Player 8");
  setText("subt1p3p4", "Player 8");
  setText("subt1p4p4", "Player 8");
  setText("subt2p1p1", "Player 5");
  setText("subt2p2p1", "Player 5");
  setText("subt2p3p1", "Player 5");
  setText("subt2p4p1", "Player 5");
  setText("subt2p1p2", "Player 6");
  setText("subt2p2p2", "Player 6");
  setText("subt2p3p2", "Player 6");
  setText("subt2p4p2", "Player 6");
  setText("subt2p1p3", "Player 7");
  setText("subt2p2p3", "Player 7");
  setText("subt2p3p3", "Player 7");
  setText("subt2p4p3", "Player 7");
  setText("subt2p1p4", "Player 8");
  setText("subt2p2p4", "Player 8");
  setText("subt2p3p4", "Player 8");
  setText("subt2p4p4", "Player 8");
  showElement("newplayernamet1p1");
  showElement("newplayerdonet1p1");
  showElement("newplayernamet1p2");
  showElement("newplayerdonet1p2");
  showElement("newplayernamet1p3");
  showElement("newplayerdonet1p3");
  showElement("newplayernamet1p4");
  showElement("newplayerdonet1p4");
  showElement("newplayernamet2p1");
  showElement("newplayerdonet2p1");
  showElement("newplayernamet2p2");
  showElement("newplayerdonet2p2");
  showElement("newplayernamet2p3");
  showElement("newplayerdonet2p3");
  showElement("newplayernamet2p4");
  showElement("newplayerdonet2p4");
  showElement("newplayernamet1p1");
  showElement("newplayerdonet1p1");
  showElement("label8");
  showElement("newplayernamet1p2");
  showElement("newplayerdonet1p2");
  showElement("label2");
  showElement("newplayernamet1p3");
  showElement("newplayerdonet1p3");
  showElement("label13");
  showElement("newplayernamet1p4");
  showElement("newplayerdonet1p4");
  showElement("label14");
  showElement("newplayernamet2p1");
  showElement("newplayerdonet2p1");
  showElement("label15");
  showElement("newplayernamet2p2");
  showElement("newplayerdonet2p2");
  showElement("label16");
  showElement("newplayernamet2p3");
  showElement("newplayerdonet2p3");
  showElement("label17");
  showElement("newplayernamet2p4");
  showElement("newplayerdonet2p4");
  showElement("label18");
});
onEvent("more", "click", function( ) {
  setScreen("substitutes");
});
onEvent("subt1p1", "click", function( ) {
  setScreen("newplayert1p1");
});
onEvent("subt1p2", "click", function( ) {
  setScreen("newplayert1p2");
});
onEvent("subt1p3", "click", function( ) {
  setScreen("newplayert1p3");
});
onEvent("subt1p4", "click", function( ) {
  setScreen("newplayert1p4");
});
onEvent("subt2p1", "click", function( ) {
  setScreen("newplayert2p1");
});
onEvent("subt2p2", "click", function( ) {
  setScreen("newplayert2p2");
});
onEvent("subt2p3", "click", function( ) {
  setScreen("newplayert2p3");
});
onEvent("subt2p4", "click", function( ) {
  setScreen("newplayert2p4");
});
onEvent("image15", "click", function( ) {
  setScreen("substitutes");
});
onEvent("image5", "click", function( ) {
  setScreen("substitutes");
});
onEvent("image7", "click", function( ) {
  setScreen("substitutes");
});
onEvent("image8", "click", function( ) {
  setScreen("substitutes");
});
onEvent("image9", "click", function( ) {
  setScreen("substitutes");
});
onEvent("image10", "click", function( ) {
  setScreen("substitutes");
});
onEvent("image11", "click", function( ) {
  setScreen("substitutes");
});
onEvent("image12", "click", function( ) {
  setScreen("substitutes");
});
onEvent("subdone", "click", function( ) {
  setScreen("tossup");
  setText("tossupcount", "Toss Up " + tossup);
});
//t1p1
onEvent("subt1p1p1", "click", function( ) {
  //Thinking point: Why
  if (subt1p1yn == 2) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p1yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p1yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p1yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p1yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p1yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p1yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p1yn = 0;
  setScreen("substitutes");
  setText("newplayernamet1p1", t1p1name);
  setText("team1p1", t1p1name);
  setText("subt1p1", t1p1name);
  setText("editscorest1p1", t1p1name);
  hideElement("subt1p1p1");
  hideElement("subt1p2p1");
  hideElement("subt1p3p1");
  hideElement("subt1p4p1");
});
onEvent("subt1p1p2", "click", function( ) {
  if (subt1p1yn == 0) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p1yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p1yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p1yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p1yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p1yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p1yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p1yn = 2;
  setScreen("substitutes");
  setText("newplayernamet1p1", t1p2name);
  setText("team1p1", t1p2name);
  setText("subt1p1", t1p2name);
  setText("editscorest1p1", t1p2name);
  hideElement("subt1p1p2");
  hideElement("subt1p2p2");
  hideElement("subt1p3p2");
  hideElement("subt1p4p2");
});
onEvent("subt1p1p3", "click", function( ) {
  if (subt1p1yn == 0) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p1yn == 2)) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p1yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p1yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p1yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p1yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p1yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p1yn = 3;
  setScreen("substitutes");
  setText("newplayernamet1p1", t1p3name);
  setText("team1p1", t1p3name);
  setText("subt1p1", t1p3name);
  setText("editscorest1p1", t1p3name);
  hideElement("subt1p1p3");
  hideElement("subt1p2p3");
  hideElement("subt1p3p3");
  hideElement("subt1p4p3");
});
onEvent("subt1p1p4", "click", function( ) {
  if (subt1p1yn == 0) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p1yn == 2)) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p1yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p1yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p1yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p1yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p1yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p1yn = 4;
  setScreen("substitutes");
  setText("newplayernamet1p1", t1p4name);
  setText("team1p1", t1p4name);
  setText("subt1p1", t1p4name);
  setText("editscorest1p1", t1p4name);
  hideElement("subt1p1p4");
  hideElement("subt1p2p4");
  hideElement("subt1p3p4");
  hideElement("subt1p4p4");
});
onEvent("subt1p1p5", "click", function( ) {
  if (subt1p1yn == 2) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p1yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p1yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p1yn == 0)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p1yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p1yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p1yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p1yn = 5;
  setScreen("substitutes");
  setText("newplayernamet1p1", t1p5name);
  setText("team1p1", t1p5name);
  setText("subt1p1", t1p5name);
  setText("editscorest1p1", t1p5name);
  hideElement("subt1p1p5");
  hideElement("subt1p2p5");
  hideElement("subt1p3p5");
  hideElement("subt1p4p5");
});
onEvent("subt1p1p6", "click", function( ) {
  if (subt1p1yn == 2) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p1yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p1yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p1yn == 0)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p1yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p1yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p1yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p1yn = 6;
  setScreen("substitutes");
  setText("newplayernamet1p1", t1p6name);
  setText("team1p1", t1p6name);
  setText("subt1p1", t1p6name);
  setText("editscorest1p1", t1p6name);
  hideElement("subt1p1p6");
  hideElement("subt1p2p6");
  hideElement("subt1p3p6");
  hideElement("subt1p4p6");
});
onEvent("subt1p1p7", "click", function( ) {
  if (subt1p1yn == 2) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p1yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p1yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p1yn == 0)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p1yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p1yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p1yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p1yn = 7;
  setScreen("substitutes");
  setText("newplayernamet1p1", t1p7name);
  setText("team1p1", t1p7name);
  setText("subt1p1", t1p7name);
  setText("editscorest1p1", t1p7name);
  hideElement("subt1p1p7");
  hideElement("subt1p2p7");
  hideElement("subt1p3p7");
  hideElement("subt1p4p7");
});
onEvent("subt1p1p8", "click", function( ) {
  if (subt1p1yn == 2) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p1yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p1yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p1yn == 0)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p1yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p1yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p1yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  }
  subt1p1yn = 8;
  setScreen("substitutes");
  setText("newplayernamet1p1", t1p8name);
  setText("team1p1", t1p8name);
  setText("subt1p1", t1p5name);
  setText("editscorest1p1", t1p8name);
  hideElement("subt1p1p8");
  hideElement("subt1p2p8");
  hideElement("subt1p3p8");
  hideElement("subt1p4p8");
});
onEvent("newplayerdonet1p1", "click", function( ) {
  //instead of 0, "Type name"
  if (getText("newplayernamet1p1") == "") {
    t1p5name = "Player 5";
  } else {
    t1p5name = getText("newplayernamet1p1");
  }
  subt1p1yn = 5;
  //delete powerplayer == "p1t1p1"
  setText("team1p1", t1p5name);
  setText("subt1p1", t1p5name);
  setText("editscorest1p1", t1p5name);
  setScreen("substitutes");
  //Thinking point: Why not include subt1p1yn != 0
  if ((subt1p2yn != 1) && ((subt1p3yn != 1) && (subt1p4yn != 1))) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  }
  hideElement("newplayernamet1p1");
  hideElement("newplayerdonet1p1");
  hideElement("label8");
  //show in reset^
});
//t1p2
onEvent("subt1p2p1", "click", function( ) {
  if (subt1p2yn == 0) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p2yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p2yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p2yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p2yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p2yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p2yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p2yn = 1;
  setScreen("substitutes");
  setText("newplayernamet1p2", t1p1name);
  setText("team1p2", t1p1name);
  setText("subt1p2", t1p1name);
  setText("editscorest1p2", t1p1name);
  hideElement("subt1p1p1");
  hideElement("subt1p2p1");
  hideElement("subt1p3p1");
  hideElement("subt1p4p1");
});
onEvent("subt1p2p2", "click", function( ) {
  if (subt1p2yn == 1) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p2yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p2yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p2yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p2yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p2yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p2yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p2yn = 0;
  setScreen("substitutes");
  setText("newplayernamet1p2", t1p2name);
  setText("team1p2", t1p2name);
  setText("subt1p2", t1p2name);
  setText("editscorest1p2", t1p2name);
  hideElement("subt1p1p2");
  hideElement("subt1p2p2");
  hideElement("subt1p3p2");
  hideElement("subt1p4p2");
});
onEvent("subt1p2p3", "click", function( ) {
  if (subt1p2yn == 0) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p2yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p2yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p2yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p2yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p2yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p2yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p2yn = 3;
  setScreen("substitutes");
  setText("newplayernamet1p2", t1p3name);
  setText("team1p2", t1p3name);
  setText("subt1p2", t1p3name);
  setText("editscorest1p2", t1p3name);
  hideElement("subt1p1p3");
  hideElement("subt1p2p3");
  hideElement("subt1p3p3");
  hideElement("subt1p4p3");
});
onEvent("subt1p2p4", "click", function( ) {
  if (subt1p2yn == 0) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p2yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p2yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p2yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p2yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p2yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p2yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p2yn = 4;
  setScreen("substitutes");
  setText("newplayernamet1p2", t1p4name);
  setText("team1p2", t1p4name);
  setText("subt1p2", t1p4name);
  setText("editscorest1p2", t1p4name);
  hideElement("subt1p1p4");
  hideElement("subt1p2p4");
  hideElement("subt1p3p4");
  hideElement("subt1p4p4");
});
onEvent("subt1p2p5", "click", function( ) {
  if (subt1p2yn == 0) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p2yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p2yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p2yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p2yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p2yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p2yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p2yn = 5;
  setScreen("substitutes");
  setText("newplayernamet1p2", t1p5name);
  setText("team1p2", t1p5name);
  setText("subt1p2", t1p5name);
  setText("editscorest1p2", t1p5name);
  hideElement("subt1p1p5");
  hideElement("subt1p2p5");
  hideElement("subt1p3p5");
  hideElement("subt1p4p5");
});
onEvent("subt1p2p6", "click", function( ) {
  if (subt1p2yn == 0) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p2yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p2yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p2yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p2yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p2yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p2yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p2yn = 6;
  setScreen("substitutes");
  setText("newplayernamet1p2", t1p6name);
  setText("team1p2", t1p6name);
  setText("subt1p2", t1p6name);
  setText("editscorest1p2", t1p6name);
  hideElement("subt1p1p6");
  hideElement("subt1p2p6");
  hideElement("subt1p3p6");
  hideElement("subt1p4p6");
});
onEvent("subt1p2p7", "click", function( ) {
  if (subt1p2yn == 0) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p2yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p2yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p2yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p2yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p2yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p2yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p2yn = 7;
  setScreen("substitutes");
  setText("newplayernamet1p2", t1p7name);
  setText("team1p2", t1p7name);
  setText("subt1p2", t1p7name);
  setText("editscorest1p2", t1p7name);
  hideElement("subt1p1p7");
  hideElement("subt1p2p7");
  hideElement("subt1p3p7");
  hideElement("subt1p4p7");
});
onEvent("subt1p2p8", "click", function( ) {
  if (subt1p2yn == 0) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p2yn == 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p2yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p2yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p2yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p2yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p2yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  }
  subt1p2yn = 8;
  setScreen("substitutes");
  setText("newplayernamet1p2", t1p8name);
  setText("team1p2", t1p8name);
  setText("subt1p2", t1p8name);
  setText("editscorest1p2", t1p8name);
  hideElement("subt1p1p8");
  hideElement("subt1p2p8");
  hideElement("subt1p3p8");
  hideElement("subt1p4p8");
});
onEvent("newplayerdonet1p2", "click", function( ) {
  if (getText("newplayernamet1p2") == "") {
    t1p6name = "Player 6";
  } else {
    t1p6name = getText("newplayernamet1p2");
  }
  //Thinking point: Why
  subt1p2yn = 6;
  setText("team1p2", t1p6name);
  setText("subt1p2", t1p6name);
  setText("editscorest1p2", t1p6name);
  setScreen("substitutes");
  if (subt1p1yn != 2 && (subt1p3yn != 2 && subt1p4yn != 2)) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  }
  hideElement("newplayernamet1p2");
  hideElement("newplayerdonet1p2");
  hideElement("label2");
});
//t1p3
onEvent("subt1p3p1", "click", function( ) {
  if (subt1p3yn == 2) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p3yn == 0)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p3yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p3yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p3yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p3yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p3yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p3yn = 1;
  setScreen("substitutes");
  setText("newplayernamet1p3", t1p1name);
  setText("team1p3", t1p1name);
  setText("subt1p3", t1p1name);
  setText("editscorest1p3", t1p1name);
  hideElement("subt1p1p1");
  hideElement("subt1p2p1");
  hideElement("subt1p3p1");
  hideElement("subt1p4p1");
});
onEvent("subt1p3p2", "click", function( ) {
  if (subt1p3yn == 1) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p3yn == 0)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p3yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p3yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p3yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p3yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p3yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p3yn = 2;
  setScreen("substitutes");
  setText("newplayernamet1p3", t1p2name);
  setText("team1p3", t1p2name);
  setText("subt1p3", t1p2name);
  setText("editscorest1p3", t1p2name);
  hideElement("subt1p1p2");
  hideElement("subt1p2p2");
  hideElement("subt1p3p2");
  hideElement("subt1p4p2");
});
onEvent("subt1p3p3", "click", function( ) {
  if (subt1p3yn == 2) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p3yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p3yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p3yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p3yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p3yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p3yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p3yn = 0;
  setScreen("substitutes");
  setText("newplayernamet1p3", t1p3name);
  setText("team1p3", t1p3name);
  setText("subt1p3", t1p3name);
  setText("editscorest1p3", t1p3name);
  hideElement("subt1p1p3");
  hideElement("subt1p2p3");
  hideElement("subt1p3p3");
  hideElement("subt1p4p3");
});
onEvent("subt1p3p4", "click", function( ) {
  if (subt1p3yn == 2) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p3yn == 0)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p3yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p3yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p3yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p3yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p3yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p3yn = 4;
  setScreen("substitutes");
  setText("newplayernamet1p3", t1p4name);
  setText("team1p3", t1p4name);
  setText("subt1p3", t1p4name);
  setText("editscorest1p3", t1p4name);
  hideElement("subt1p1p4");
  hideElement("subt1p2p4");
  hideElement("subt1p3p4");
  hideElement("subt1p4p4");
});
onEvent("subt1p3p5", "click", function( ) {
  if (subt1p3yn == 2) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p3yn == 0)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p3yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p3yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p3yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p3yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p3yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p3yn = 5;
  setScreen("substitutes");
  setText("newplayernamet1p3", t1p5name);
  setText("team1p3", t1p5name);
  setText("subt1p3", t1p5name);
  setText("editscorest1p3", t1p5name);
  hideElement("subt1p1p5");
  hideElement("subt1p2p5");
  hideElement("subt1p3p5");
  hideElement("subt1p4p5");
});
onEvent("subt1p3p6", "click", function( ) {
  if (subt1p3yn == 2) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p3yn == 0)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p3yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p3yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p3yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p3yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p3yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p3yn = 6;
  setScreen("substitutes");
  setText("newplayernamet1p3", t1p6name);
  setText("team1p3", t1p6name);
  setText("subt1p3", t1p6name);
  setText("editscorest1p3", t1p6name);
  hideElement("subt1p1p6");
  hideElement("subt1p2p6");
  hideElement("subt1p3p6");
  hideElement("subt1p4p6");
});
onEvent("subt1p3p7", "click", function( ) {
  if (subt1p3yn == 2) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p3yn == 0)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p3yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p3yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p3yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p3yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p3yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p3yn = 7;
  setScreen("substitutes");
  setText("newplayernamet1p3", t1p7name);
  setText("team1p3", t1p7name);
  setText("subt1p3", t1p7name);
  setText("editscorest1p3", t1p7name);
  hideElement("subt1p1p7");
  hideElement("subt1p2p7");
  hideElement("subt1p3p7");
  hideElement("subt1p4p7");
});
onEvent("subt1p3p8", "click", function( ) {
  if (subt1p3yn == 2) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p3yn == 0)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p3yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p3yn == 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p3yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p3yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p3yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  }
  subt1p3yn = 8;
  setScreen("substitutes");
  setText("newplayernamet1p3", t1p8name);
  setText("team1p3", t1p8name);
  setText("subt1p3", t1p8name);
  setText("editscorest1p3", t1p8name);
  hideElement("subt1p1p8");
  hideElement("subt1p2p8");
  hideElement("subt1p3p8");
  hideElement("subt1p4p8");
});
onEvent("newplayerdonet1p3", "click", function( ) {
  if (getText("newplayernamet1p3") == "") {
    t1p7name = "Player 7";
  } else {
    t1p7name = getText("newplayernamet1p3");
  }
  subt1p3yn = 7;
  setText("team1p3", t1p7name);
  setText("subt1p3", t1p7name);
  setText("editscorest1p3", t1p7name);
  setScreen("substitutes");
  if (subt1p1yn != 3 && (subt1p2yn != 3 && subt1p4yn != 3)) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  }
  hideElement("newplayernamet1p3");
  hideElement("newplayerdonet1p3");
  hideElement("label13");
});
//t1p4
onEvent("subt1p4p1", "click", function( ) {
  if (subt1p4yn == 3) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p4yn == 2)) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p4yn == 0)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p4yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p4yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p4yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p4yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p4yn = 1;
  setScreen("substitutes");
  setText("newplayernamet1p4", t1p1name);
  setText("team1p4", t1p1name);
  setText("subt1p4", t1p1name);
  setText("editscorest1p4", t1p1name);
  hideElement("subt1p1p1");
  hideElement("subt1p2p1");
  hideElement("subt1p3p1");
  hideElement("subt1p4p1");
});
onEvent("subt1p4p2", "click", function( ) {
  if (subt1p4yn == 3) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p4yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p4yn == 0)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p4yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p4yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p4yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p4yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p4yn = 2;
  setScreen("substitutes");
  setText("newplayernamet1p4", t1p2name);
  setText("team1p4", t1p2name);
  setText("subt1p4", t1p2name);
  setText("editscorest1p4", t1p2name);
  hideElement("subt1p1p2");
  hideElement("subt1p2p2");
  hideElement("subt1p3p2");
  hideElement("subt1p4p2");
});
onEvent("subt1p4p3", "click", function( ) {
  if (subt1p4yn == 1) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p4yn == 2)) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p4yn == 0)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p4yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p4yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p4yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p4yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p4yn = 3;
  setScreen("substitutes");
  setText("newplayernamet1p4", t1p3name);
  setText("team1p4", t1p3name);
  setText("subt1p4", t1p3name);
  setText("editscorest1p4", t1p3name);
  hideElement("subt1p1p3");
  hideElement("subt1p2p3");
  hideElement("subt1p3p3");
  hideElement("subt1p4p3");
});
onEvent("subt1p4p4", "click", function( ) {
  if (subt1p4yn == 3) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p4yn == 2)) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p4yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p4yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p4yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p4yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p4yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p4yn = 0;
  setScreen("substitutes");
  setText("newplayernamet1p4", t1p4name);
  setText("team1p4", t1p4name);
  setText("subt1p4", t1p4name);
  setText("editscorest1p4", t1p4name);
  hideElement("subt1p1p4");
  hideElement("subt1p2p4");
  hideElement("subt1p3p4");
  hideElement("subt1p4p4");
});
onEvent("subt1p4p5", "click", function( ) {
  if (subt1p4yn == 3) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p4yn == 2)) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p4yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p4yn == 0)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p4yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p4yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p4yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p4yn = 5;
  setScreen("substitutes");
  setText("newplayernamet1p4", t1p5name);
  setText("team1p4", t1p5name);
  setText("subt1p4", t1p5name);
  setText("editscorest1p4", t1p5name);
  hideElement("subt1p1p5");
  hideElement("subt1p2p5");
  hideElement("subt1p3p5");
  hideElement("subt1p4p5");
});
onEvent("subt1p4p6", "click", function( ) {
  if (subt1p4yn == 3) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p4yn == 2)) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p4yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p4yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p4yn == 0)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p4yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p4yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p4yn = 6;
  setScreen("substitutes");
  setText("newplayernamet1p4", t1p6name);
  setText("team1p4", t1p6name);
  setText("subt1p4", t1p6name);
  setText("editscorest1p4", t1p6name);
  hideElement("subt1p1p6");
  hideElement("subt1p2p6");
  hideElement("subt1p3p6");
  hideElement("subt1p4p6");
});
onEvent("subt1p4p7", "click", function( ) {
  if (subt1p4yn == 3) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p4yn == 2)) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p4yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p4yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p4yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p4yn == 0)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  } else if ((subt1p4yn == 8)) {
    showElement("subt1p1p8");
    showElement("subt1p2p8");
    showElement("subt1p3p8");
    showElement("subt1p4p8");
  }
  subt1p4yn = 7;
  setScreen("substitutes");
  setText("newplayernamet1p4", t1p7name);
  setText("team1p4", t1p7name);
  setText("subt1p4", t1p7name);
  setText("editscorest1p4", t1p7name);
  hideElement("subt1p1p7");
  hideElement("subt1p2p7");
  hideElement("subt1p3p7");
  hideElement("subt1p4p7");
});
onEvent("subt1p4p8", "click", function( ) {
  if (subt1p4yn == 3) {
    showElement("subt1p1p3");
    showElement("subt1p2p3");
    showElement("subt1p3p3");
    showElement("subt1p4p3");
  } else if ((subt1p4yn == 2)) {
    showElement("subt1p1p2");
    showElement("subt1p2p2");
    showElement("subt1p3p2");
    showElement("subt1p4p2");
  } else if ((subt1p4yn == 1)) {
    showElement("subt1p1p1");
    showElement("subt1p2p1");
    showElement("subt1p3p1");
    showElement("subt1p4p1");
  } else if ((subt1p4yn == 5)) {
    showElement("subt1p1p5");
    showElement("subt1p2p5");
    showElement("subt1p3p5");
    showElement("subt1p4p5");
  } else if ((subt1p4yn == 6)) {
    showElement("subt1p1p6");
    showElement("subt1p2p6");
    showElement("subt1p3p6");
    showElement("subt1p4p6");
  } else if ((subt1p4yn == 7)) {
    showElement("subt1p1p7");
    showElement("subt1p2p7");
    showElement("subt1p3p7");
    showElement("subt1p4p7");
  } else if ((subt1p4yn == 0)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  }
  subt1p4yn = 8;
  setScreen("substitutes");
  setText("newplayernamet1p4", t1p8name);
  setText("team1p4", t1p8name);
  setText("subt1p4", t1p8name);
  setText("editscorest1p4", t1p8name);
  hideElement("subt1p1p8");
  hideElement("subt1p2p8");
  hideElement("subt1p3p8");
  hideElement("subt1p4p8");
});
onEvent("newplayerdonet1p4", "click", function( ) {
  if (getText("newplayernamet1p4") == "") {
    t1p8name = "Player 8";
  } else {
    t1p8name = getText("newplayernamet1p4");
  }
  subt1p4yn = 8;
  setText("team1p4", t1p8name);
  setText("subt1p4", t1p8name);
  setText("editscorest1p4", t1p8name);
  setScreen("substitutes");
  if (subt1p1yn != 4 && (subt1p2yn != 4 && subt1p3yn != 4)) {
    showElement("subt1p1p4");
    showElement("subt1p2p4");
    showElement("subt1p3p4");
    showElement("subt1p4p4");
  }
  hideElement("newplayernamet1p4");
  hideElement("newplayerdonet1p4");
  hideElement("label14");
});
//t2p1
onEvent("subt2p1p1", "click", function( ) {
  if (subt2p1yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p1yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p1yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p1yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p1yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p1yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p1yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p1yn = 0;
  setScreen("substitutes");
  setText("newplayernamet2p1", t2p1name);
  setText("team2p1", t2p1name);
  setText("subt2p1", t2p1name);
  setText("editscorest2p1", t2p1name);
  hideElement("subt2p1p1");
  hideElement("subt2p2p1");
  hideElement("subt2p3p1");
  hideElement("subt2p4p1");
});
onEvent("subt2p1p2", "click", function( ) {
  if (subt2p1yn == 0) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p1yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p1yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p1yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p1yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p1yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p1yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p1yn = 2;
  setScreen("substitutes");
  setText("newplayernamet2p1", t2p2name);
  setText("team2p1", t2p2name);
  setText("subt2p1", t2p2name);
  setText("editscorest2p1", t2p2name);
  hideElement("subt2p1p2");
  hideElement("subt2p2p2");
  hideElement("subt2p3p2");
  hideElement("subt2p4p2");
});
onEvent("subt2p1p3", "click", function( ) {
  if (subt2p1yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p1yn == 0)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p1yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p1yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p1yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p1yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p1yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p1yn = 3;
  setScreen("substitutes");
  setText("newplayernamet2p1", t2p3name);
  setText("team2p1", t2p3name);
  setText("subt2p1", t2p3name);
  setText("editscorest2p1", t2p3name);
  hideElement("subt2p1p3");
  hideElement("subt2p2p3");
  hideElement("subt2p3p3");
  hideElement("subt2p4p3");
});
onEvent("subt2p1p4", "click", function( ) {
  if (subt2p1yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p1yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p1yn == 0)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p1yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p1yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p1yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p1yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p1yn = 4;
  setScreen("substitutes");
  setText("newplayernamet2p1", t2p4name);
  setText("team2p1", t2p4name);
  setText("subt2p1", t2p4name);
  setText("editscorest2p1", t2p4name);
  hideElement("subt2p1p4");
  hideElement("subt2p2p4");
  hideElement("subt2p3p4");
  hideElement("subt2p4p4");
});
onEvent("subt2p1p5", "click", function( ) {
  if (subt2p1yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p1yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p1yn == 0)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p1yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p1yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p1yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p1yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p1yn = 5;
  setScreen("substitutes");
  setText("newplayernamet2p1", t2p5name);
  setText("team2p1", t2p5name);
  setText("subt2p1", t2p5name);
  setText("editscorest2p1", t2p5name);
  hideElement("subt2p1p5");
  hideElement("subt2p2p5");
  hideElement("subt2p3p5");
  hideElement("subt2p4p5");
});
onEvent("subt2p1p6", "click", function( ) {
  if (subt2p1yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p1yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p1yn == 0)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p1yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p1yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p1yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p1yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p1yn = 6;
  setScreen("substitutes");
  setText("newplayernamet2p1", t2p6name);
  setText("team2p1", t2p6name);
  setText("subt2p1", t2p6name);
  setText("editscorest2p1", t2p6name);
  hideElement("subt2p1p6");
  hideElement("subt2p2p6");
  hideElement("subt2p3p6");
  hideElement("subt2p4p6");
});
onEvent("subt2p1p7", "click", function( ) {
  if (subt2p1yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p1yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p1yn == 0)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p1yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p1yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p1yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p1yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p1yn = 7;
  setScreen("substitutes");
  setText("newplayernamet2p1", t2p7name);
  setText("team2p1", t2p7name);
  setText("subt2p1", t2p7name);
  setText("editscorest2p1", t2p7name);
  hideElement("subt2p1p7");
  hideElement("subt2p2p7");
  hideElement("subt2p3p7");
  hideElement("subt2p4p7");
});
onEvent("subt2p1p8", "click", function( ) {
  if (subt2p1yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p1yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p1yn == 0)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p1yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p1yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p1yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p1yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  }
  subt2p1yn = 8;
  setScreen("substitutes");
  setText("newplayernamet2p1", t2p8name);
  setText("team2p1", t2p8name);
  setText("subt2p1", t2p8name);
  setText("editscorest2p1", t2p8name);
  hideElement("subt2p1p8");
  hideElement("subt2p2p8");
  hideElement("subt2p3p8");
  hideElement("subt2p4p8");
});
onEvent("newplayerdonet2p1", "click", function( ) {
  if (getText("newplayernamet2p1") == "") {
    t2p5name = "Player 5";
  } else {
    t2p5name = getText("newplayernamet2p1");
  }
  subt2p1yn = 5;
  setText("team2p1", t2p5name);
  setText("subt2p1", t2p5name);
  setText("editscorest2p1", t2p5name);
  setScreen("substitutes");
  if (subt2p2yn != 1 && (subt2p3yn != 1 && subt2p4yn != 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  }
  hideElement("newplayernamet2p1");
  hideElement("newplayerdonet2p1");
  hideElement("label15");
});
//t2p2
onEvent("subt2p2p1", "click", function( ) {
  if (subt2p2yn == 0) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p2yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p2yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p2yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p2yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p2yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p2yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p2yn = 1;
  setScreen("substitutes");
  setText("newplayernamet2p2", t2p1name);
  setText("team2p2", t2p1name);
  setText("subt2p2", t2p1name);
  setText("editscorest2p2", t2p1name);
  hideElement("subt2p1p1");
  hideElement("subt2p2p1");
  hideElement("subt2p3p1");
  hideElement("subt2p4p1");
});
onEvent("subt2p2p2", "click", function( ) {
  if (subt2p2yn == 1) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p2yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p2yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p2yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p2yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p2yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p2yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p2yn = 0;
  setScreen("substitutes");
  setText("newplayernamet2p2", t2p2name);
  setText("team2p2", t2p2name);
  setText("subt2p2", t2p2name);
  setText("editscorest2p2", t2p2name);
  hideElement("subt2p1p2");
  hideElement("subt2p2p2");
  hideElement("subt2p3p2");
  hideElement("subt2p4p2");
});
onEvent("subt2p2p3", "click", function( ) {
  if (subt2p2yn == 0) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p2yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p2yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p2yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p2yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p2yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p2yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p2yn = 3;
  setScreen("substitutes");
  setText("newplayernamet2p2", t2p3name);
  setText("team2p2", t2p3name);
  setText("subt2p2", t2p3name);
  setText("editscorest2p2", t2p3name);
  hideElement("subt2p1p3");
  hideElement("subt2p2p3");
  hideElement("subt2p3p3");
  hideElement("subt2p4p3");
});
onEvent("subt2p2p4", "click", function( ) {
  if (subt2p2yn == 0) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p2yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p2yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p2yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p2yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p2yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p2yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p2yn = 4;
  setScreen("substitutes");
  setText("newplayernamet2p2", t2p4name);
  setText("team2p2", t2p4name);
  setText("subt2p2", t2p4name);
  setText("editscorest2p2", t2p4name);
  hideElement("subt2p1p4");
  hideElement("subt2p2p4");
  hideElement("subt2p3p4");
  hideElement("subt2p4p4");
});
onEvent("subt2p2p5", "click", function( ) {
  if (subt2p2yn == 0) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p2yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p2yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p2yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p2yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p2yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p2yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p2yn = 5;
  setScreen("substitutes");
  setText("newplayernamet2p2", t2p5name);
  setText("team2p2", t2p5name);
  setText("subt2p2", t2p5name);
  setText("editscorest2p2", t2p5name);
  hideElement("subt2p1p5");
  hideElement("subt2p2p5");
  hideElement("subt2p3p5");
  hideElement("subt2p4p5");
});
onEvent("subt2p2p6", "click", function( ) {
  if (subt2p2yn == 0) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p2yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p2yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p2yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p2yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p2yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p2yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p2yn = 6;
  setScreen("substitutes");
  setText("newplayernamet2p2", t2p6name);
  setText("team2p2", t2p6name);
  setText("subt2p2", t2p6name);
  setText("editscorest2p2", t2p6name);
  hideElement("subt2p1p6");
  hideElement("subt2p2p6");
  hideElement("subt2p3p6");
  hideElement("subt2p4p6");
});
onEvent("subt2p2p7", "click", function( ) {
  if (subt2p2yn == 0) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p2yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p2yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p2yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p2yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p2yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p2yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p2yn = 7;
  setScreen("substitutes");
  setText("newplayernamet2p2", t2p7name);
  setText("team2p2", t2p7name);
  setText("subt2p2", t2p7name);
  setText("editscorest2p2", t2p7name);
  hideElement("subt2p1p7");
  hideElement("subt2p2p7");
  hideElement("subt2p3p7");
  hideElement("subt2p4p7");
});
onEvent("subt2p2p8", "click", function( ) {
  if (subt2p2yn == 0) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p2yn == 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p2yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p2yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p2yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p2yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p2yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  }
  subt2p2yn = 8;
  setScreen("substitutes");
  setText("newplayernamet2p2", t2p8name);
  setText("team2p2", t2p8name);
  setText("subt2p2", t2p8name);
  setText("editscorest2p2", t2p8name);
  hideElement("subt2p1p8");
  hideElement("subt2p2p8");
  hideElement("subt2p3p8");
  hideElement("subt2p4p8");
});
onEvent("newplayerdonet2p2", "click", function( ) {
  if (getText("newplayernamet2p2") == "") {
    t2p6name = "Player 6";
  } else {
    t2p6name = getText("newplayernamet2p2");
  }
  subt2p2yn = 6;
  setText("team2p2", t2p6name);
  setText("subt2p2", t2p6name);
  setText("editscorest2p2", t2p6name);
  setScreen("substitutes");
  if (subt2p1yn != 2 && (subt2p3yn != 2 && subt2p4yn != 2)) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  }
  hideElement("newplayernamet2p2");
  hideElement("newplayerdonet2p2");
  hideElement("label16");
});
//t2p3
onEvent("subt2p3p1", "click", function( ) {
  if (subt2p3yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p3yn == 0)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p3yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p3yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p3yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p3yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p3yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p3yn = 1;
  setScreen("substitutes");
  setText("newplayernamet2p3", t2p1name);
  setText("team2p3", t2p1name);
  setText("subt2p3", t2p1name);
  setText("editscorest2p3", t2p1name);
  hideElement("subt2p1p1");
  hideElement("subt2p2p1");
  hideElement("subt2p3p1");
  hideElement("subt2p4p1");
});
onEvent("subt2p3p2", "click", function( ) {
  if (subt2p3yn == 1) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p3yn == 0)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p3yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p3yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p3yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p3yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p3yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p3yn = 2;
  setScreen("substitutes");
  setText("newplayernamet2p3", t2p2name);
  setText("team2p3", t2p2name);
  setText("subt2p3", t2p2name);
  setText("editscorest2p3", t2p2name);
  hideElement("subt2p1p2");
  hideElement("subt2p2p2");
  hideElement("subt2p3p2");
  hideElement("subt2p4p2");
});
onEvent("subt2p3p3", "click", function( ) {
  if (subt2p3yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p3yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p3yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p3yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p3yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p3yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p3yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p3yn = 0;
  setScreen("substitutes");
  setText("newplayernamet2p3", t2p3name);
  setText("team2p3", t2p3name);
  setText("subt2p3", t2p3name);
  setText("editscorest2p3", t2p3name);
  hideElement("subt2p1p3");
  hideElement("subt2p2p3");
  hideElement("subt2p3p3");
  hideElement("subt2p4p3");
});
onEvent("subt2p3p4", "click", function( ) {
  if (subt2p3yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p3yn == 0)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p3yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p3yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p3yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p3yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p3yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p3yn = 4;
  setScreen("substitutes");
  setText("newplayernamet2p3", t2p4name);
  setText("team2p3", t2p4name);
  setText("subt2p3", t2p4name);
  setText("editscorest2p3", t2p4name);
  hideElement("subt2p1p4");
  hideElement("subt2p2p4");
  hideElement("subt2p3p4");
  hideElement("subt2p4p4");
});
onEvent("subt2p3p5", "click", function( ) {
  if (subt2p3yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p3yn == 0)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p3yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p3yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p3yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p3yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p3yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p3yn = 5;
  setScreen("substitutes");
  setText("newplayernamet2p3", t2p5name);
  setText("team2p3", t2p5name);
  setText("subt2p3", t2p5name);
  setText("editscorest2p3", t2p5name);
  hideElement("subt2p1p5");
  hideElement("subt2p2p5");
  hideElement("subt2p3p5");
  hideElement("subt2p4p5");
});
onEvent("subt2p3p6", "click", function( ) {
  if (subt2p3yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p3yn == 0)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p3yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p3yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p3yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p3yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p3yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p3yn = 6;
  setScreen("substitutes");
  setText("newplayernamet2p3", t2p6name);
  setText("team2p3", t2p6name);
  setText("subt2p3", t2p6name);
  setText("editscorest2p3", t2p6name);
  hideElement("subt2p1p6");
  hideElement("subt2p2p6");
  hideElement("subt2p3p6");
  hideElement("subt2p4p6");
});
onEvent("subt2p3p7", "click", function( ) {
  if (subt2p3yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p3yn == 0)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p3yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p3yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p3yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p3yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p3yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p3yn = 7;
  setScreen("substitutes");
  setText("newplayernamet2p3", t2p7name);
  setText("team2p3", t2p7name);
  setText("subt2p3", t2p7name);
  setText("editscorest2p3", t2p7name);
  hideElement("subt2p1p7");
  hideElement("subt2p2p7");
  hideElement("subt2p3p7");
  hideElement("subt2p4p7");
});
onEvent("subt2p3p8", "click", function( ) {
  if (subt2p3yn == 2) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p3yn == 0)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p3yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p3yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p3yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p3yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p3yn == 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  }
  subt2p3yn = 8;
  setScreen("substitutes");
  setText("newplayernamet2p3", t2p8name);
  setText("team2p3", t2p8name);
  setText("subt2p3", t2p8name);
  setText("editscorest2p3", t2p8name);
  hideElement("subt2p1p8");
  hideElement("subt2p2p8");
  hideElement("subt2p3p8");
  hideElement("subt2p4p8");
});
onEvent("newplayerdonet2p3", "click", function( ) {
  if (getText("newplayernamet2p3") == "") {
    t2p7name = "Player 7";
  } else {
    t2p7name = getText("newplayernamet2p3");
  }
  subt2p3yn = 7;
  setText("team2p3", t2p7name);
  setText("subt2p3", t2p7name);
  setText("editscorest2p3", t2p7name);
  setScreen("substitutes");
  if (subt2p1yn != 3 && (subt2p2yn != 3 && subt2p4yn != 3)) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  }
  hideElement("newplayernamet2p3");
  hideElement("newplayerdonet2p3");
  hideElement("label17");
});
//t2p4
onEvent("subt2p4p1", "click", function( ) {
  if (subt2p4yn == 3) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p4yn == 2)) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p4yn == 0)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p4yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p4yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p4yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p4yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p4yn = 1;
  setScreen("substitutes");
  setText("newplayernamet2p4", t2p1name);
  setText("team2p4", t2p1name);
  setText("subt2p4", t2p1name);
  setText("editscorest2p4", t2p1name);
  hideElement("subt2p1p1");
  hideElement("subt2p2p1");
  hideElement("subt2p3p1");
  hideElement("subt2p4p1");
});
onEvent("subt2p4p2", "click", function( ) {
  if (subt2p4yn == 3) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p4yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p4yn == 0)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p4yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p4yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p4yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p4yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p4yn = 2;
  setScreen("substitutes");
  setText("newplayernamet2p4", t2p2name);
  setText("team2p4", t2p2name);
  setText("subt2p4", t2p2name);
  setText("editscorest2p4", t2p2name);
  hideElement("subt2p1p2");
  hideElement("subt2p2p2");
  hideElement("subt2p3p2");
  hideElement("subt2p4p2");
});
onEvent("subt2p4p3", "click", function( ) {
  if (subt2p4yn == 1) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p4yn == 2)) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p4yn == 0)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p4yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p4yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p4yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p4yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p4yn = 3;
  setScreen("substitutes");
  setText("newplayernamet2p4", t2p3name);
  setText("team2p4", t2p3name);
  setText("subt2p4", t2p3name);
  setText("editscorest2p4", t2p3name);
  hideElement("subt2p1p3");
  hideElement("subt2p2p3");
  hideElement("subt2p3p3");
  hideElement("subt2p4p3");
});
onEvent("subt2p4p4", "click", function( ) {
  if (subt2p4yn == 3) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p4yn == 2)) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p4yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p4yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p4yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p4yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p4yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p4yn = 0;
  setScreen("substitutes");
  setText("newplayernamet2p4", t2p4name);
  setText("team2p4", t2p4name);
  setText("subt2p4", t2p4name);
  setText("editscorest2p4", t2p4name);
  hideElement("subt2p1p4");
  hideElement("subt2p2p4");
  hideElement("subt2p3p4");
  hideElement("subt2p4p4");
});
onEvent("subt2p4p5", "click", function( ) {
  if (subt2p4yn == 3) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p4yn == 2)) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p4yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p4yn == 0)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p4yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p4yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p4yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p4yn = 5;
  setScreen("substitutes");
  setText("newplayernamet2p4", t2p5name);
  setText("team2p4", t2p5name);
  setText("subt2p4", t2p5name);
  setText("editscorest2p4", t2p5name);
  hideElement("subt2p1p5");
  hideElement("subt2p2p5");
  hideElement("subt2p3p5");
  hideElement("subt2p4p5");
});
onEvent("subt2p4p6", "click", function( ) {
  if (subt2p4yn == 3) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p4yn == 2)) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p4yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p4yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p4yn == 0)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p4yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p4yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p4yn = 6;
  setScreen("substitutes");
  setText("newplayernamet2p4", t2p6name);
  setText("team2p4", t2p6name);
  setText("subt2p4", t2p6name);
  setText("editscorest2p4", t2p6name);
  hideElement("subt2p1p6");
  hideElement("subt2p2p6");
  hideElement("subt2p3p6");
  hideElement("subt2p4p6");
});
onEvent("subt2p4p7", "click", function( ) {
  if (subt2p4yn == 3) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p4yn == 2)) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p4yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p4yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p4yn == 0)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p4yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  } else if ((subt2p4yn == 8)) {
    showElement("subt2p1p8");
    showElement("subt2p2p8");
    showElement("subt2p3p8");
    showElement("subt2p4p8");
  }
  subt2p4yn = 7;
  setScreen("substitutes");
  setText("newplayernamet2p4", t2p7name);
  setText("team2p4", t2p7name);
  setText("subt2p4", t2p7name);
  setText("editscorest2p4", t2p7name);
  hideElement("subt2p1p7");
  hideElement("subt2p2p7");
  hideElement("subt2p3p7");
  hideElement("subt2p4p7");
});
onEvent("subt2p4p8", "click", function( ) {
  if (subt2p4yn == 3) {
    showElement("subt2p1p3");
    showElement("subt2p2p3");
    showElement("subt2p3p3");
    showElement("subt2p4p3");
  } else if ((subt2p4yn == 2)) {
    showElement("subt2p1p2");
    showElement("subt2p2p2");
    showElement("subt2p3p2");
    showElement("subt2p4p2");
  } else if ((subt2p4yn == 1)) {
    showElement("subt2p1p1");
    showElement("subt2p2p1");
    showElement("subt2p3p1");
    showElement("subt2p4p1");
  } else if ((subt2p4yn == 5)) {
    showElement("subt2p1p5");
    showElement("subt2p2p5");
    showElement("subt2p3p5");
    showElement("subt2p4p5");
  } else if ((subt2p4yn == 0)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  } else if ((subt2p4yn == 7)) {
    showElement("subt2p1p7");
    showElement("subt2p2p7");
    showElement("subt2p3p7");
    showElement("subt2p4p7");
  } else if ((subt2p4yn == 6)) {
    showElement("subt2p1p6");
    showElement("subt2p2p6");
    showElement("subt2p3p6");
    showElement("subt2p4p6");
  }
  subt2p4yn = 8;
  setScreen("substitutes");
  setText("newplayernamet2p4", t2p8name);
  setText("team2p4", t2p8name);
  setText("subt2p4", t2p8name);
  setText("editscorest2p4", t2p8name);
  hideElement("subt2p1p8");
  hideElement("subt2p2p8");
  hideElement("subt2p3p8");
  hideElement("subt2p4p8");
});
onEvent("newplayerdonet2p4", "click", function( ) {
  if (getText("newplayernamet2p4") == "") {
    t2p8name = "Player 8";
  } else {
    t2p8name = getText("newplayernamet2p4");
  }
  subt2p4yn = 8;
  setText("team2p4", t2p8name);
  setText("subt2p4", t2p8name);
  setText("editscorest2p4", t2p8name);
  setScreen("substitutes");
  if (subt2p1yn != 4 && (subt2p2yn != 4 && subt2p3yn != 4)) {
    showElement("subt2p1p4");
    showElement("subt2p2p4");
    showElement("subt2p3p4");
    showElement("subt2p4p4");
  }
  hideElement("newplayernamet2p4");
  hideElement("newplayerdonet2p4");
  hideElement("label18");
});
onEvent("otyes", "click", function( ) {
  setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + "Overtime 1"));
  ot = ot + 1;
  setText("tossupcount", "Overtime " + ot);
  setScreen("tossup");
});
onEvent("otno", "click", function( ) {
  setScreen("Score");
  hideElement("backscore");
});
onEvent("sdyes", "click", function( ) {
  setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + "Sudden Death"));
  sd = sd + 1;
  setText("tossupcount", "Overtime " + ot);
  setScreen("tossup");
});
onEvent("sdno", "click", function( ) {
  setScreen("Score");
  hideElement("backscore");
});
onEvent("backfr", "click", function( ) {
  setScreen("Score");
});
onEvent("fullrecord", "click", function( ) {
  setScreen("FullRecord");
});
onEvent("editscoresbtn", "click", function( ) {
  setScreen("editscores");
});
onEvent("backeditscores", "click", function( ) {
  setScreen("FullRecord");
});
onEvent("editscores2back", "click", function( ) {
  setScreen("editscores");
});
onEvent("add5", "click", function( ) {
  if (editplayer == "et1") {
    t1sub = t1sub + 5;
    t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
    setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (team1 + (". " + (team1 + " score: ")))) + t1)));
    setText("team1score", team1sc + t1);
    setScreen("FullRecord");
  } else if ((editplayer == "et1p1")) {
    if (subt1p1yn == 5) {
      t1p5 = t1p5 + 5;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 2)) {
      t1p2 = t1p2 + 5;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 3)) {
      t1p3 = t1p3 + 5;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 4)) {
      t1p4 = t1p4 + 5;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 0)) {
      t1p1 = t1p1 + 5;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 6)) {
      t1p6 = t1p6 + 5;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 7)) {
      t1p7 = t1p7 + 5;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 8)) {
      t1p8 = t1p8 + 5;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et1p2")) {
    if (subt1p2yn == 5) {
      t1p5 = t1p5 + 5;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 1)) {
      t1p1 = t1p1 + 5;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 3)) {
      t1p3 = t1p3 + 5;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 4)) {
      t1p4 = t1p4 + 5;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 0)) {
      t1p2 = t1p2 + 5;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 6)) {
      t1p6 = t1p6 + 5;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 7)) {
      t1p7 = t1p7 + 5;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 8)) {
      t1p8 = t1p8 + 5;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et1p3")) {
    if (subt1p3yn == 5) {
      t1p5 = t1p5 + 5;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 1)) {
      t1p1 = t1p1 + 5;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 2)) {
      t1p2 = t1p2 + 5;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 4)) {
      t1p4 = t1p4 + 5;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 0)) {
      t1p3 = t1p3 + 5;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 6)) {
      t1p6 = t1p6 + 5;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 7)) {
      t1p7 = t1p7 + 5;
      setText("t1p7score", (t1p7nam7 + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 8)) {
      t1p8 = t1p8 + 5;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et1p4")) {
    if (subt1p4yn == 5) {
      t1p5 = t1p5 + 5;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 1)) {
      t1p1 = t1p1 + 5;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 2)) {
      t1p2 = t1p2 + 5;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 3)) {
      t1p3 = t1p3 + 5;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 0)) {
      t1p4 = t1p4 + 5;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 6)) {
      t1p6 = t1p6 + 5;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 7)) {
      t1p7 = t1p7 + 5;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 8)) {
      t1p8 = t1p8 + 5;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2")) {
    t2sub = t2sub + 5;
    t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
    setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (team2 + (". " + (team2 + " score: ")))) + t2)));
    setText("team2score", team2sc + t2);
    setScreen("FullRecord");
  } else if ((editplayer == "et2p1")) {
    if (subt2p1yn == 5) {
      t2p5 = t2p5 + 5;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 2)) {
      t2p2 = t2p2 + 5;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 3)) {
      t2p3 = t2p3 + 5;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 4)) {
      t2p4 = t2p4 + 5;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 0)) {
      t2p1 = t2p1 + 5;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 6)) {
      t2p6 = t2p6 + 5;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 7)) {
      t2p7 = t2p7 + 5;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 8)) {
      t2p8 = t2p8 + 5;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2p2")) {
    if (subt2p2yn == 5) {
      t2p5 = t2p5 + 5;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 1)) {
      t2p1 = t2p1 + 5;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 3)) {
      t2p3 = t2p3 + 5;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 4)) {
      t2p4 = t2p4 + 5;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 0)) {
      t2p2 = t2p2 + 5;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 6)) {
      t2p6 = t2p6 + 5;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 7)) {
      t2p7 = t2p7 + 5;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 8)) {
      t2p8 = t2p8 + 5;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2p3")) {
    if (subt2p3yn == 5) {
      t2p5 = t2p5 + 5;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 1)) {
      t2p1 = t2p1 + 5;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 2)) {
      t2p2 = t2p2 + 5;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 4)) {
      t2p4 = t2p4 + 5;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 0)) {
      t2p3 = t2p3 + 5;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 6)) {
      t2p6 = t2p6 + 5;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 7)) {
      t2p7 = t2p7 + 5;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 8)) {
      t2p8 = t2p8 + 5;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2p4")) {
    if (subt2p4yn == 5) {
      t2p5 = t2p5 + 5;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 1)) {
      t2p1 = t2p1 + 5;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 2)) {
      t2p2 = t2p2 + 5;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 3)) {
      t2p3 = t2p3 + 5;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 0)) {
      t2p4 = t2p4 + 5;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 6)) {
      t2p6 = t2p6 + 5;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 7)) {
      t2p7 = t2p7 + 5;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 8)) {
      t2p8 = t2p8 + 5;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 5 points to " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  }
});
onEvent("add10", "click", function( ) {
  if (editplayer == "et1") {
    t1sub = t1sub + 10;
    t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
    setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (team1 + (". " + (team1 + " score: ")))) + t1)));
    setText("team1score", team1sc + t1);
    setScreen("FullRecord");
  } else if ((editplayer == "et1p1")) {
    if (subt1p1yn == 5) {
      t1p5 = t1p5 + 10;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 2)) {
      t1p2 = t1p2 + 10;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 3)) {
      t1p3 = t1p3 + 10;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 4)) {
      t1p4 = t1p4 + 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 0)) {
      t1p1 = t1p1 + 10;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 6)) {
      t1p6 = t1p6 + 10;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 7)) {
      t1p7 = t1p7 + 10;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 8)) {
      t1p8 = t1p8 + 10;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et1p2")) {
    if (subt1p2yn == 5) {
      t1p5 = t1p5 + 10;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 1)) {
      t1p1 = t1p1 + 10;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 3)) {
      t1p3 = t1p3 + 10;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 4)) {
      t1p4 = t1p4 + 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 0)) {
      t1p2 = t1p2 + 10;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 6)) {
      t1p6 = t1p6 + 10;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 7)) {
      t1p7 = t1p7 + 10;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 8)) {
      t1p8 = t1p8 + 10;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et1p3")) {
    if (subt1p3yn == 5) {
      t1p5 = t1p5 + 10;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 1)) {
      t1p1 = t1p1 + 10;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 2)) {
      t1p2 = t1p2 + 10;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 4)) {
      t1p4 = t1p4 + 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 0)) {
      t1p3 = t1p3 + 10;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 6)) {
      t1p6 = t1p6 + 10;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 7)) {
      t1p7 = t1p7 + 10;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 8)) {
      t1p8 = t1p8 + 10;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et1p4")) {
    if (subt1p4yn == 5) {
      t1p5 = t1p5 + 10;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 1)) {
      t1p1 = t1p1 + 10;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 2)) {
      t1p2 = t1p2 + 10;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 3)) {
      t1p3 = t1p3 + 10;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 0)) {
      t1p4 = t1p4 + 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 6)) {
      t1p6 = t1p6 + 10;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 7)) {
      t1p7 = t1p7 + 10;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 8)) {
      t1p8 = t1p8 + 10;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2")) {
    t2sub = t2sub + 10;
    t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
    setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (team2 + (". " + (team2 + " score: ")))) + t2)));
    setText("team2score", team2sc + t2);
    setScreen("FullRecord");
  } else if ((editplayer == "et2p1")) {
    if (subt2p1yn == 5) {
      t2p5 = t2p5 + 10;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 2)) {
      t2p2 = t2p2 + 10;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 3)) {
      t2p3 = t2p3 + 10;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 4)) {
      t2p4 = t2p4 + 10;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 0)) {
      t2p1 = t2p1 + 10;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 6)) {
      t2p6 = t2p6 + 10;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 7)) {
      t2p7 = t2p7 + 10;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 8)) {
      t2p8 = t2p8 + 10;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2p2")) {
    if (subt2p2yn == 5) {
      t2p5 = t2p5 + 10;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 1)) {
      t2p1 = t2p1 + 10;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 3)) {
      t2p3 = t2p3 + 10;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 4)) {
      t2p4 = t2p4 + 10;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 0)) {
      t2p2 = t2p2 + 10;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 6)) {
      t2p6 = t2p6 + 10;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 7)) {
      t2p7 = t2p7 + 10;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 8)) {
      t2p8 = t2p8 + 10;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2p3")) {
    if (subt2p3yn == 5) {
      t2p5 = t2p5 + 10;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 1)) {
      t2p1 = t2p1 + 10;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 2)) {
      t2p2 = t2p2 + 10;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 4)) {
      t2p4 = t2p4 + 10;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 0)) {
      t2p3 = t2p3 + 10;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 6)) {
      t2p6 = t2p6 + 10;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 7)) {
      t2p7 = t2p7 + 10;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 8)) {
      t2p8 = t2p8 + 10;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2p4")) {
    if (subt2p4yn == 5) {
      t2p5 = t2p5 + 10;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 1)) {
      t2p1 = t2p1 + 10;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 2)) {
      t2p2 = t2p2 + 10;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 3)) {
      t2p3 = t2p3 + 10;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 0)) {
      t2p4 = t2p4 + 10;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 6)) {
      t2p6 = t2p6 + 10;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 7)) {
      t2p8 = t2p8 + 10;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 8)) {
      t2p8 = t2p8 + 10;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Added 10 points to " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  }
});
onEvent("minus5", "click", function( ) {
  if (editplayer == "et1") {
    t1sub = t1sub - 5;
    t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
    setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (team1 + (". " + (team1 + " score: ")))) + t1)));
    setText("team1score", team1sc + t1);
    setScreen("FullRecord");
  } else if ((editplayer == "et1p1")) {
    if (subt1p1yn == 5) {
      t1p5 = t1p5 - 5;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 2)) {
      t1p2 = t1p2 - 5;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 3)) {
      t1p3 = t1p3 - 5;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 4)) {
      t1p4 = t1p4 - 5;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 0)) {
      t1p1 = t1p1 - 5;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 6)) {
      t1p6 = t1p6 - 5;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 7)) {
      t1p7 = t1p7 - 5;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 8)) {
      t1p8 = t1p8 - 5;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et1p2")) {
    if (subt1p2yn == 5) {
      t1p5 = t1p5 - 5;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 1)) {
      t1p1 = t1p1 - 5;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 3)) {
      t1p3 = t1p3 - 5;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 4)) {
      t1p4 = t1p4 - 5;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 0)) {
      t1p2 = t1p2 - 5;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 6)) {
      t1p6 = t1p6 - 5;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 7)) {
      t1p7 = t1p7 - 5;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 8)) {
      t1p8 = t1p8 - 5;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et1p3")) {
    if (subt1p3yn == 5) {
      t1p5 = t1p5 - 5;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 1)) {
      t1p1 = t1p1 - 5;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 2)) {
      t1p2 = t1p2 - 5;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 4)) {
      t1p4 = t1p4 - 5;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 0)) {
      t1p3 = t1p3 - 5;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 6)) {
      t1p6 = t1p6 - 5;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 7)) {
      t1p7 = t1p7 - 5;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 8)) {
      t1p8 = t1p8 - 5;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et1p4")) {
    if (subt1p4yn == 5) {
      t1p5 = t1p5 - 5;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 1)) {
      t1p1 = t1p1 - 5;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 2)) {
      t1p2 = t1p2 - 5;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 3)) {
      t1p3 = t1p3 - 5;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 0)) {
      t1p4 = t1p4 - 5;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 6)) {
      t1p6 = t1p6 - 5;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 7)) {
      t1p7 = t1p7 - 5;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 8)) {
      t1p8 = t1p8 - 5;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2")) {
    t2sub = t2sub - 5;
    t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
    setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (team2 + (". " + (team2 + " score: ")))) + t2)));
    setText("team2score", team2sc + t2);
    setScreen("FullRecord");
  } else if ((editplayer == "et2p1")) {
    if (subt2p1yn == 5) {
      t2p5 = t2p5 - 5;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 2)) {
      t2p2 = t2p2 - 5;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 3)) {
      t2p3 = t2p3 - 5;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 4)) {
      t2p4 = t2p4 - 5;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 0)) {
      t2p1 = t2p1 - 5;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 6)) {
      t2p6 = t2p6 - 5;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 7)) {
      t2p7 = t2p7 - 5;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 8)) {
      t2p8 = t2p8 - 5;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2p2")) {
    if (subt2p2yn == 5) {
      t2p5 = t2p5 - 5;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 1)) {
      t2p1 = t2p1 - 5;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 3)) {
      t2p3 = t2p3 - 5;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 4)) {
      t2p4 = t2p4 - 5;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 0)) {
      t2p2 = t2p2 - 5;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 6)) {
      t2p6 = t2p6 - 5;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 7)) {
      t2p7 = t2p7 - 5;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 8)) {
      t2p8 = t2p8 - 5;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2p3")) {
    if (subt2p3yn == 5) {
      t2p5 = t2p5 - 5;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 1)) {
      t2p1 = t2p1 - 5;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 2)) {
      t2p2 = t2p2 - 5;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 4)) {
      t2p4 = t2p4 - 5;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 0)) {
      t2p3 = t2p3 - 5;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 6)) {
      t2p6 = t2p6 - 5;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 7)) {
      t2p7 = t2p7 - 5;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 8)) {
      t2p8 = t2p8 - 5;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2p4")) {
    if (subt2p4yn == 5) {
      t2p5 = t2p5 - 5;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 1)) {
      t2p1 = t2p1 - 5;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 2)) {
      t2p2 = t2p2 - 5;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 3)) {
      t2p3 = t2p3 - 5;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 0)) {
      t2p4 = t2p4 - 5;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 6)) {
      t2p6 = t2p6 - 5;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 7)) {
      t2p7 = t2p7 - 5;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 8)) {
      t2p8 = t2p8 - 5;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 5 points from " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  }
});
onEvent("minus10", "click", function( ) {
  if (editplayer == "et1") {
    t1sub = t1sub - 10;
    t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
    setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (team1 + (". " + (team1 + " score: ")))) + t1)));
    setText("team1score", team1sc + t1);
    setScreen("FullRecord");
  } else if ((editplayer == "et1p1")) {
    if (subt1p1yn == 5) {
      t1p5 = t1p5 - 10;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 2)) {
      t1p2 = t1p2 - 10;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 3)) {
      t1p3 = t1p3 - 10;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 4)) {
      t1p4 = t1p4 - 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 0)) {
      t1p1 = t1p1 - 10;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 6)) {
      t1p6 = t1p6 - 10;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 7)) {
      t1p7 = t1p7 - 10;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p1yn == 8)) {
      t1p8 = t1p8 - 10;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et1p2")) {
    if (subt1p2yn == 5) {
      t1p5 = t1p5 - 10;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 1)) {
      t1p1 = t1p1 - 10;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 3)) {
      t1p3 = t1p3 - 10;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 4)) {
      t1p4 = t1p4 - 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 0)) {
      t1p2 = t1p2 - 10;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 6)) {
      t1p6 = t1p6 - 10;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 7)) {
      t1p7 = t1p7 - 10;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p2yn == 8)) {
      t1p8 = t1p8 - 10;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et1p3")) {
    if (subt1p3yn == 5) {
      t1p5 = t1p5 - 10;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 1)) {
      t1p1 = t1p1 - 10;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 2)) {
      t1p2 = t1p2 - 10;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 4)) {
      t1p4 = t1p4 - 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 0)) {
      t1p3 = t1p3 - 10;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 6)) {
      t1p6 = t1p6 - 10;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 7)) {
      t1p7 = t1p7 - 10;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p3yn == 8)) {
      t1p8 = t1p8 - 10;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et1p4")) {
    if (subt1p4yn == 5) {
      t1p5 = t1p5 - 10;
      setText("t1p5score", (t1p5name + ": ") + t1p5);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p5name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 1)) {
      t1p1 = t1p1 - 10;
      setText("t1p1score", (t1p1name + ": ") + t1p1);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p1name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 2)) {
      t1p2 = t1p2 - 10;
      setText("t1p2score", (t1p2name + ": ") + t1p2);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p2name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 3)) {
      t1p3 = t1p3 - 10;
      setText("t1p3score", (t1p3name + ": ") + t1p3);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p3name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 0)) {
      t1p4 = t1p4 - 10;
      setText("t1p4score", (t1p4name + ": ") + t1p4);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p4name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 6)) {
      t1p6 = t1p6 - 10;
      setText("t1p6score", (t1p6name + ": ") + t1p6);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p6name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 7)) {
      t1p7 = t1p7 - 10;
      setText("t1p7score", (t1p7name + ": ") + t1p7);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p7name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    } else if ((subt1p4yn == 8)) {
      t1p8 = t1p8 - 10;
      setText("t1p8score", (t1p8name + ": ") + t1p8);
      t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t1p8name + (". " + (team1 + " score: ")))) + t1)));
      setText("team1score", team1sc + t1);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2")) {
    t2sub = t2sub - 10;
    t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
    setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (team2 + (". " + (team2 + " score: ")))) + t2)));
    setText("team2score", team2sc + t2);
    setScreen("FullRecord");
  } else if ((editplayer == "et2p1")) {
    if (subt2p1yn == 5) {
      t2p5 = t2p5 - 10;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 2)) {
      t2p2 = t2p2 - 10;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 3)) {
      t2p3 = t2p3 - 10;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 4)) {
      t2p4 = t2p4 - 10;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 0)) {
      t2p1 = t2p1 - 10;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 6)) {
      t2p6 = t2p6 - 10;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 7)) {
      t2p7 = t2p7 - 10;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p1yn == 8)) {
      t2p8 = t2p8 - 10;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2p2")) {
    if (subt2p2yn == 5) {
      t2p5 = t2p5 - 10;
      setText("t2p2score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 1)) {
      t2p1 = t2p1 - 10;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 3)) {
      t2p3 = t2p3 - 10;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 4)) {
      t2p4 = t2p4 - 10;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 0)) {
      t2p2 = t2p2 - 10;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 6)) {
      t2p6 = t2p6 - 10;
      setText("t2p2score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 7)) {
      t2p7 = t2p7 - 10;
      setText("t2p2score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p2yn == 8)) {
      t2p8 = t2p8 - 10;
      setText("t2p2score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2p3")) {
    if (subt2p3yn == 5) {
      t2p5 = t2p5 - 10;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 1)) {
      t2p1 = t2p1 - 10;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 2)) {
      t2p2 = t2p2 - 10;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 4)) {
      t2p4 = t2p4 - 10;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 0)) {
      t2p3 = t2p3 - 10;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 6)) {
      t2p6 = t2p6 - 10;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 7)) {
      t2p7 = t2p7 - 10;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p3yn == 8)) {
      t2p8 = t2p8 - 10;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  } else if ((editplayer == "et2p4")) {
    if (subt2p4yn == 5) {
      t2p5 = t2p5 - 10;
      setText("t2p5score", (t2p5name + ": ") + t2p5);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p5name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 1)) {
      t2p1 = t2p1 - 10;
      setText("t2p1score", (t2p1name + ": ") + t2p1);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p1name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 2)) {
      t2p2 = t2p2 - 10;
      setText("t2p2score", (t2p2name + ": ") + t2p2);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p2name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 3)) {
      t2p3 = t2p3 - 10;
      setText("t2p3score", (t2p3name + ": ") + t2p3);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p3name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 0)) {
      t2p4 = t2p4 - 10;
      setText("t2p4score", (t2p4name + ": ") + t2p4);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p4name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 6)) {
      t2p6 = t2p6 - 10;
      setText("t2p6score", (t2p6name + ": ") + t2p6);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p6name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 7)) {
      t2p7 = t2p7 - 10;
      setText("t2p7score", (t2p7name + ": ") + t2p7);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p7name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    } else if ((subt2p4yn == 8)) {
      t2p8 = t2p8 - 10;
      setText("t2p8score", (t2p8name + ": ") + t2p8);
      t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + (("Subtracted 10 points from " + (t2p8name + (". " + (team2 + " score: ")))) + t2)));
      setText("team2score", team2sc + t2);
      setScreen("FullRecord");
    }
  }
});
onEvent("label27", "click", function( ) {
  editplayer = "et1";
  setScreen("editscores2");
});
onEvent("editscorest1p1", "click", function( ) {
  editplayer = "et1p1";
  setScreen("editscores2");
});
onEvent("editscorest1p2", "click", function( ) {
  editplayer = "et1p2";
  setScreen("editscores2");
});
onEvent("editscorest1p3", "click", function( ) {
  editplayer = "et1p3";
  setScreen("editscores2");
});
onEvent("editscorest1p4", "click", function( ) {
  editplayer = "et1p4";
  setScreen("editscores2");
});
onEvent("label28", "click", function( ) {
  editplayer = "et2";
  setScreen("editscores2");
});
onEvent("editscorest2p1", "click", function( ) {
  editplayer = "et2p1";
  setScreen("editscores2");
});
onEvent("editscorest2p2", "click", function( ) {
  editplayer = "et2p2";
  setScreen("editscores2");
});
onEvent("editscorest2p3", "click", function( ) {
  editplayer = "et2p3";
  setScreen("editscores2");
});
onEvent("editscorest2p4", "click", function( ) {
  editplayer = "et2p4";
  setScreen("editscores2");
});
function nexttossup() {
  if (tossup == 10) {
    setScreen("substitutes");
    setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
    tossup = tossup + 1;
    setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ("Toss Up " + tossup)));
  } else if ((tossup == 20)) {
    if (t1 == t2) {
      setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
      setScreen("otscreen");
    } else {
      setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
      setScreen("Score");
      hideElement("backscore");
    }
  } else if (((tossup < 20) + (tossup != 10))) {
    setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
    setScreen("tossup");
    tossup = tossup + 1;
    setText("tossupcount", "Toss Up " + tossup);
    setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ("Toss Up " + tossup)));
  }
}
function bonus3() {
  if (sd == 1) {
    setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
    setScreen("Score");
    hideElement("backscore");
  } else if ((ot > 0)) {
    if (ot == 3) {
      if (t1 == t2) {
        setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
        setScreen("suddendeathscreen");
      } else {
        setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
        setScreen("Score");
        hideElement("backscore");
      }
    } else {
      setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
      ot = ot + 1;
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ("Overtime " + ot)));
      setText("tossupscount", "Overtime " + ot);
      setScreen("tossup");
    }
  } else {
    nexttossup();
  }
}
function powert1() {
  t1 = bonust1 + (t1p1 + (t1p2 + (t1p3 + (t1p4 + (t1p5 + (t1p6 + (t1p7 + (t1p8 + t1sub))))))));
  setText("team1score", team1sc + t1);
  bonus = 1;
  setScreen("bonusnobounceteam1");
  setText("bonusnbt1box", team1 + " Bonus " + bonus);
}
function powert2() {
  t2 = bonust2 + (t2p1 + (t2p2 + (t2p3 + (t2p4 + (t2p5 + (t2p6 + (t2p7 + (t2p8 + t2sub))))))));
  setText("team2score", team2sc + t2);
  bonus = 1;
  setScreen("bonusnobounceteam2");
  setText("bonusnbt2box", team2 + " Bonus " + bonus);
}
function f2() {
  if (sd == 1) {
    setText("tossupscount", "Sudden Death");
    setScreen("tossup");
  } else if ((ot > 0)) {
    setText("tossupscount", "Overtime " + ot);
    setScreen("tossup");
  } else {
    setText("tossupcount", "Toss Up " + tossup);
    setScreen("tossup");
  }
}
function f1() {
  if (sd == 1) {
    setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
    setScreen("score");
    hideElement("backscore");
  } else if ((ot > 0)) {
    if (ot == 3) {
      if (t1 == t2) {
        setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
        setScreen("suddendeathscreen");
      } else {
        setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
        setScreen("score");
        hideElement("backscore");
      }
    } else {
      ot = ot + 1;
      setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
      setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ("Overtime " + ot)));
      setText("tossupscount", "Overtime " + ot);
      setScreen("tossup");
    }
  } else {
    tossup = tossup + 1;
    setText("fullrecordtxt", getText("fullrecordtxt") + (("\n" + (team1sc + t1)) + ("\n" + (team2sc + t2))));
    setText("fullrecordtxt", getText("fullrecordtxt") + ("\n" + ("Toss Up " + tossup)));
    setText("tossupcount", "Toss Up " + tossup);
    setScreen("tossup");
  }
}
