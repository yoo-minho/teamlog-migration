<script setup lang="ts">
const props = defineProps<{ src: string; alt: string }>();
let src = props.src;
if (src === "https://images.velog.io/velog.png") {
  src = "";
}
if (
  src.includes(
    encodeURIComponent("tistory_admin/static/manage/images/r3/default_L.png")
  )
) {
  src = "";
}
let [t1, t2] = props.alt;
let alt = `${t1} ${t2}`;
</script>
<template>
  <ClientOnly>
    <template #default>
      <UAvatar
        ref="avatar"
        :src="src"
        :alt="alt"
        class="rounded mr-1 border avatar"
        imgClass="object-cover rounded"
      />
    </template>
    <template #placeholder>
      <UAvatar
        ref="avatar"
        :alt="alt"
        class="rounded mr-1 border avatar"
        imgClass="object-cover rounded"
      />
    </template>
  </ClientOnly>
</template>

<style scoped></style>
