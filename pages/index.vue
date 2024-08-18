<script setup lang="ts">
const { data } = await useFetch("/api/teams");
</script>
<template>
  <div>
    <template v-for="v in data">
      <TeamItem
        :title="v.title"
        :description="v.description || ''"
        :links="v.links.map((v) => ({ ...v, imagePath: v.imagePath || '' }))"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
