const AudioContext = window.AudioContext || window.webkitAudioContext;

export const AudioContextManager = {
  context: new AudioContext({ latencyHint: "playback" }),
  sources: [],
  pedals: [],
  lastInLine: null,

  toggleOnOff(dry, wet) {
    return on => {
      const active = on === undefined ? !!dry.gain.value : on;
      if (active) {
        wet.gain.value = 1;
        dry.gain.value = 0;
      } else {
        wet.gain.value = 0;
        dry.gain.value = 1;
      }
    };
  },

  createSwitch(input, output, active = false) {
    const dry = this.context.createGain();
    const wet = this.context.createGain();
    const out = this.context.createGain();

    const toggle = this.toggleOnOff(dry, wet);
    toggle(active);

    input.connect(dry);
    output.connect(wet);

    dry.connect(out);
    wet.connect(out);

    return [out, toggle];
  },

  addPedal(pedal) {
    this.pedals.push(pedal);
  },

  sealPedalBoard() {
    const sum = this.context.createGain();
    for (let source of this.sources) {
      let node;
      const { name } = source.constructor;

      if (name === "HTMLAudioElement") {
        node = this.context.createMediaElementSource(source);
      }
      if (name === "LocalMediaStream" || name === "MediaStream") {
        node = this.context.createMediaStreamSource(source);
      }

      node.connect(sum);
    }

    const output = this.pedals.reduce((input, pedal) => {
      return pedal(input);
    }, sum);
    this.lastInLine = output;
    output.connect(this.context.destination);
  }
};
