<template>
  <div class="content">
    <a v-if="link" target="_blanck" :href="link" class="link"><slot /></a>
    <button v-else class="custom-btn" :class="btnClass" @click="$emit('click')">
      {{ text }}
      <slot />
      <span class="custom-btn__time" v-if="time && countDown !== 0">
        {{ normalizeMinutes() }}
        :
        {{ normalizeSeconds() }}
      </span>
    </button>
  </div>
</template>
<script>
export default {
  name: "CustomButton",
  data() {
    return {
      countDown: 0,
    };
  },
  props: {
    link: {
      type: String,
      default: "",
    },
    nuxtLink: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (this.time) {
      this.startCoutDownClock();
    }
  },
  computed: {
    btnClass() {
      const { mode } = this;
      return [
        { "custom-btn_primary": mode === "primary" },
        { "custom-btn_secondary": mode === "secondary" },
        { "custom-btn_warning": mode === "warning" },
        { "custom-btn_disabled": mode === "disabled" },
        { "custom-btn_info": mode === "info" },
        { "custom-btn_danger": mode === "danger" },
        { "custom-btn_action": mode === "action" },
        { "custom-btn_timer": mode === "timer" },
        { "custom-btn_quest": mode === "quest" },
        { "custom-btn_small": this.isSmall === true },
      ];
    },
  },
  methods: {
    startCoutDownClock() {
      this.countDown = 20;
      let arr = this.time.split(":");
      this.countDown = Number(arr[0]) * 60 + Number(arr[1]);
      this.countDownTimer();
    },

    countDownTimer() {
      if (this.countDown === 0) {
        this.isTimeToSend = false;
      }
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },

    normalizeMinutes() {
      return `0${Math.trunc(this.countDown / 60)}`;
    },
    normalizeSeconds() {
      const num = Math.trunc(this.countDown % 60);
      let result = null;
      num < 10 ? (result = `0${num}`) : (result = num);
      return result;
    },
  },
};
</script>
<style lang="sass" src="/src/assets/ui/custom-button.scss" scoped></style>
