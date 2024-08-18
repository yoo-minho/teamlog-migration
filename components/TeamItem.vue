<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  links: { title: string; imagePath: string }[];
}>();
</script>
<template>
  <div class="p-3 border-y flex flex-col">
    <UAvatarGroup size="sm" :max="8" class="pb-1">
      <template v-for="l in links">
        <UAvatarV2 :src="l.imagePath" :alt="l.title" />
      </template>
    </UAvatarGroup>
    <div class="text-base tracking-tighter font-bold">{{ title }}</div>
    <div class="text-xs tracking-tighter">{{ description }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
