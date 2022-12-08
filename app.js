// Imports
import { sounds } from "./data.js";

// Query Selectors
const clapSelect = document.querySelector("#clap-select");
const hihatSelect = document.querySelector("#hihat-select");
const kickSelect = document.querySelector("#kick-select");
const percSelect = document.querySelector("#perc-select");
const snareSelect = document.querySelector("#snare-select");
const tomSelect = document.querySelector("#tom-select");
const clapPad = document.querySelector(".clap");
const hihatPad = document.querySelector(".hihat");
const kickPad = document.querySelector(".kick");
const percPad = document.querySelector(".perc");
const snarePad = document.querySelector(".snare");
const tomPad = document.querySelector(".tom");

const types = [
   [clapSelect, clapPad, "clap"],
   [hihatSelect, hihatPad, "hihat"],
   [kickSelect, kickPad, "kick"],
   [percSelect, percPad, "perc"],
   [snareSelect, snarePad, "snare"],
   [tomSelect, tomPad, "tom"],
];

class DrumKit {
   constructor() {
      this.pads = document.querySelectorAll(".pad");
      this.clapAudio = document.querySelector(".clap-sound");
      this.hihatAudio = document.querySelector(".hihat-sound");
      this.kickAudio = document.querySelector(".kick-sound");
      this.percAudio = document.querySelector(".perc-sound");
      this.snareAudio = document.querySelector(".snare-sound");
      this.tomAudio = document.querySelector(".tom-sound");
      this.index = 0;
   }

   repeat() {
      let step = this.index % 8;
   }
}

for (let i = 0; i < types.length; i++) {
   for (let j = 0; j < sounds[i].length; j++) {
      let option = document.createElement("option");
      option.innerText = sounds[i][j].name;
      option.value = sounds[i][j].path;
      types[i][0].appendChild(option);
   }
}

for (let i = 0; i < types.length; i++) {
   for (let j = 0; j < 8; j++) {
      let pad = document.createElement("div");
      pad.classList.add("pad", `${types[i][2]}-pad`, `b${j}`);
      types[i][1].appendChild(pad);
   }
}
