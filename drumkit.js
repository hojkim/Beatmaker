export class DrumKit {
   constructor() {
      this.pads = document.querySelectorAll(".pad");
      this.playBtn = document.querySelector(".play");
      this.currentClap = "sounds/clap-808.wav";
      this.currentHihat = "sounds/hihat-808.wav";
      this.currentKick = "sounds/kick-808.wav";
      this.currentPerc = "sounds/perc-808.wav";
      this.currentSnare = "sounds/snare-808.wav";
      this.currentTom = "sounds/tom-808.wav";
      this.clapAudio = document.querySelector(".clap-sound");
      this.hihatAudio = document.querySelector(".hihat-sound");
      this.kickAudio = document.querySelector(".kick-sound");
      this.percAudio = document.querySelector(".perc-sound");
      this.snareAudio = document.querySelector(".snare-sound");
      this.tomAudio = document.querySelector(".tom-sound");
      this.selects = document.querySelectorAll("select");
      this.muteBtns = document.querySelectorAll(".mute");
      this.tempoSlider = document.querySelector(".tempo-slider");
      this.index = 0;
      this.bpm = 100;
      this.isPlaying = null;
   }

   activePad() {
      this.classList.toggle("active");
   }

   repeat() {
      let step = this.index % 8;
      const activeBars = document.querySelectorAll(`.b${step}`);
      activeBars.forEach((bar) => {
         bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
         if (bar.classList.contains("active")) {
            if (bar.classList.contains("clap-pad")) {
               this.clapAudio.currentTime = 0;
               this.clapAudio.play();
            } else if (bar.classList.contains("hihat-pad")) {
               this.hihatAudio.currentTime = 0;
               this.hihatAudio.play();
            } else if (bar.classList.contains("kick-pad")) {
               this.kickAudio.currentTime = 0;
               this.kickAudio.play();
            } else if (bar.classList.contains("perc-pad")) {
               this.percAudio.currentTime = 0;
               this.percAudio.play();
            } else if (bar.classList.contains("snare-pad")) {
               this.snareAudio.currentTime = 0;
               this.snareAudio.play();
            } else if (bar.classList.contains("tom-pad")) {
               this.tomAudio.currentTime = 0;
               this.tomAudio.play();
            }
         }
      });
      this.index++;
   }

   start() {
      const interval = (60 / this.bpm) * 1000;
      // If this.isPlaying is equal to null
      if (!this.isPlaying) {
         this.isPlaying = setInterval(() => {
            this.repeat();
         }, interval);
      } else {
         clearInterval(this.isPlaying);
         this.isPlaying = null;
      }
   }

   updateBtn() {
      if (!this.isPlaying) {
         this.playBtn.innerText = "Stop";
         this.playBtn.classList.add("active");
      } else {
         this.playBtn.innerText = "Play";
         this.playBtn.classList.remove("active");
      }
   }

   changeSound(event) {
      const soundName = event.target.name;
      const soundValue = event.target.value;
      switch (soundName) {
         case "clap-select":
            this.clapAudio.src = soundValue;
            break;
         case "hihat-select":
            this.hihatAudio.src = soundValue;
            break;
         case "kick-select":
            this.kickAudio.src = soundValue;
            break;
         case "perc-select":
            this.percAudio.src = soundValue;
            break;
         case "snare-select":
            this.snareAudio.src = soundValue;
            break;
         case "tom-select":
            this.tomAudio.src = soundValue;
            break;
      }
   }

   mute(event) {
      const muteIndex = event.target.getAttribute("data-track");
      event.target.classList.toggle("active");
      if (event.target.classList.contains("active")) {
         switch (muteIndex) {
            case "0":
               this.clapAudio.volume = 0;
               break;
            case "1":
               this.hihatAudio.volume = 0;
               break;
            case "2":
               this.kickAudio.volume = 0;
               break;
            case "3":
               this.percAudio.volume = 0;
               break;
            case "4":
               this.snareAudio.volume = 0;
               break;
            case "5":
               this.tomAudio.volume = 0;
               break;
         }
      } else {
         switch (muteIndex) {
            case "0":
               this.clapAudio.volume = 1;
               break;
            case "1":
               this.hihatAudio.volume = 1;
               break;
            case "2":
               this.kickAudio.volume = 1;
               break;
            case "3":
               this.percAudio.volume = 1;
               break;
            case "4":
               this.snareAudio.volume = 1;
               break;
            case "5":
               this.tomAudio.volume = 1;
               break;
         }
      }
      return muteIndex;
   }

   changeTempo(event) {
      const tempoText = document.querySelector(".tempo-num");
      tempoText.innerText = event.target.value;
   }

   updateTempo(event) {
      this.bpm = event.target.value;
      clearInterval(this.isPlaying);
      this.isPlaying = null;
      if (this.playBtn.classList.contains("active")) {
         this.start();
      }
   }
}
