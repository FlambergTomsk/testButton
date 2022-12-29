
<template>
  <div class="page">
    <h2 class="page__subtitle">Большие кнопки</h2>
    <div class="page__block block">
      <div v-for="item in bigButtons" :key="item.id" class="block__array">
        <custom-button
          :mode="item.mode"
          class="block__button"
          :time="item.time"
        >
          {{ item.text }}
        </custom-button>
      </div>
    </div>
    <h2 class="page__subtitle">Малые кнопки</h2>
    <div class="page__block">
      <div v-for="item in smallButtons" :key="item.id" class="block__array">
        <custom-button
          :mode="item.mode"
          class="block__button"
          :time="item.time"
          :is-small="true"
        >
          <span class="page__icon" :class="item.icon" />
        </custom-button>
      </div>
    </div>
    <h2 class="page__subtitle">Ссылка</h2>
    <div class="page__link">
      <custom-button class="block__button" :link="'https://t.me/AndreyT0msk'">
        Напомнить PIN-код
      </custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from "./ui/CustomButton.vue";

export default {
  components: { CustomButton },
  name: "Buttons",
  data() {
    return {
      bigButtons: [
        {
          mode: "primary",
          text: "send message",
          id: this.generateId(),
        },
        {
          mode: "secondary",
          text: "send message",
          id: this.generateId(),
        },
        {
          mode: "warning",
          text: "send message",
          id: this.generateId(),
        },
        {
          mode: "disabled",
          text: "send message",
          id: this.generateId(),
        },
        {
          mode: "info",
          text: "send message",
          id: this.generateId(),
        },
        {
          mode: "danger",
          text: "send message",
          id: this.generateId(),
        },
        {
          mode: "action",
          text: "send message",
          id: this.generateId(),
        },
        {
          mode: "timer",
          text: "repeat letter",
          time: "03:00",
          id: this.generateId(),
        },
      ],
      smallButtons: [
        {
          mode: "primary",
          icon: "icon-cross",
          id: this.generateId(),
        },
        {
          mode: "danger",
          icon: "icon-exit",
          id: this.generateId(),
        },
        {
          mode: "quest",
          icon: "icon-quest",
          id: this.generateId(),
        },
        {
          mode: "primary",
          icon: "icon-arrow",
          id: this.generateId(),
        },
        {
          mode: "danger",
          icon: "icon-google",
          id: this.generateId(),
        },
        {
          mode: "info",
          icon: "icon-vk",
          id: this.generateId(),
        },
        {
          mode: "action",
          icon: "icon-social",
          id: this.generateId(),
        },
        {
          mode: "primary",
          icon: "icon-edit",
          id: this.generateId(),
        },
      ],
    };
  },
  methods: {
    generateId() {
      return Math.random().toString(36).substring(2);
    },
  },
};
</script>

<style lang="sass" src="/src/assets/page.scss" scoped></style>
