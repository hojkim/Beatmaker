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
      this.bpm = 60;
   }

   activePad() {
      this.classList.toggle("active");
   }

   repeat() {
      let step = this.index % 8;
      const activeBars = document.querySelectorAll(`.b${step}`);
      console.log(activeBars);
      this.index++;
   }

   start() {
      const interval = (60 / this.bpm) * 1000;
      setInterval(() => {
         this.repeat();
      }, interval);
   }
}
