<template>
  <a
    v-if="link !== ''"
    class="custom-btn"
    :class="btnClass"
    :href="link"
    target="_blank"
  >
    <slot />
  </a>
  <nuxt-link
    v-else-if="nuxtLink !==''"
    class="custom-btn"
    :class="btnClass"
    :to="nuxtLink"
  >
    <slot />
  </nuxt-link>
  <button
    v-else
    class="custom-btn"
    :class="btnClass"
    @click="$emit('click')"
  >
    {{ text }}
    <div class="icon-btn_left">
      <slot name="left" />
    </div>
    <slot />
    <div class="icon-btn_right">
      <slot name="right" />
    </div>
  </button>
</template>
<script>
export default {
  name: 'CustomButton',
  props: {
    link: {
      type: String,
      default: '',
    },
    nuxtLink: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    btnClass() {
      const { mode, disabled } = this;
      return [
        { 'custom-btn_disabled': disabled },
        { 'custom-btn_orange': mode === 'orange' },
        { 'custom-btn_white-orange': mode === 'white-orange' },
        { 'custom-btn_black': mode === 'black' },
        { 'custom-btn_black-medium': mode === 'black-medium' },
        { 'custom-btn_black-small': mode === 'black-small' },
        { 'custom-btn_dark': mode === 'dark' },
        { 'custom-btn_clear': mode === 'clear' },
      ];
    },
  },
  mounted(){
    console.log(this.mode)
  },
};
</script>
<style lang="sass" src="/src/assets/custom-button.sass" scoped></style>
