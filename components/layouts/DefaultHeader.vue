<script setup lang="ts">
const toast = useToast();

const copyLink = async () => {
  await navigator.clipboard.writeText(location.href);
  toast.add({
    id: "copyLink",
    title: "링크 복사! 공유를 시작하세요!",
    icon: "i-heroicons-check-circle",
  });
};
</script>

<template>
  <div class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50">
    <div
      class="mx-auto px-4 max-w-7xl flex items-center justify-between gap-3 h-[60px]"
    >
      <div class="flex items-center w-full flex-wrap">
        <div class="flex-1 text-xl font-bold">팀로그</div>
        <div class="flex gap-1">
          <UButton color="gray" variant="ghost" @click="copyLink()">
            <span class="text-sm">공유</span>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
