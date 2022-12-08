export class DrumKit {
   constructor() {
      this.pads = document.querySelectorAll(".pad");
      this.playBtn = document.querySelector(".play");
      this.clapAudio = document.querySelector(".clap-sound");
      this.hihatAudio = document.querySelector(".hihat-sound");
      this.kickAudio = document.querySelector(".kick-sound");
      this.percAudio = document.querySelector(".perc-sound");
      this.snareAudio = document.querySelector(".snare-sound");
      this.tomAudio = document.querySelector(".tom-sound");
      this.index = 0;
      this.bpm = 100;
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
      setInterval(() => {
         this.repeat();
      }, interval);
   }
}
