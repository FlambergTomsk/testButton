

<template>
<div>
  Hello
  <custom-button
  mode='orange'
  >
  123
  </custom-button>
</div>
</template>

<script>

import CustomButton from './ui/CustomButton.vue';

export default{
  components: { CustomButton },
  name: 'Hello',
};
</script>

