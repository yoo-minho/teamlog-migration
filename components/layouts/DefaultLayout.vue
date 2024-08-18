<script setup lang="ts">
import DefaultFooter from "./DefaultFooter.vue";
import DefaultHeader from "./DefaultHeader.vue";
</script>
<template>
  <div class="flex justify-center">
    <div class="min-w-xs max-w-[430px] w-full border flex flex-col h-dvh">
      <UNotifications />
      <DefaultHeader />
      <div class="flex-1 overflow-y-auto">
        <slot />
      </div>
      <DefaultFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
