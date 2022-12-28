
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
          <template:icons>
            <span class="page__icon" :class="item.icon" />
          </template:icons>
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
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "secondary",
          text: "send message",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "warning",
          text: "send message",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "disabled",
          text: "send message",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "info",
          text: "send message",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "danger",
          text: "send message",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "action",
          text: "send message",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "timer",
          text: "repeat letter",
          time: "03:00",
          id: Math.random().toString(36).substring(2),
        },
      ],
      smallButtons: [
        {
          mode: "primary",
          icon: "icon-cross",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "danger",
          icon: "icon-exit",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "quest",
          icon: "icon-quest",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "primary",
          icon: "icon-arrow",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "danger",
          icon: "icon-google",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "info",
          icon: "icon-vk",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "action",
          icon: "icon-social",
          id: Math.random().toString(36).substring(2),
        },
        {
          mode: "primary",
          icon: "icon-edit",
          id: Math.random().toString(36).substring(2),
        },
      ],
    };
  },
};
</script>

<style lang="sass" src="/src/assets/page.scss" scoped></style>
