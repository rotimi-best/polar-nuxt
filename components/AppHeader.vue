<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold text-blue-600">
            Course Platform
          </NuxtLink>
        </div>
        <div class="flex gap-4">
          <NuxtLink
            to="/"
            class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md"
          >
            Home
          </NuxtLink>

          <a
            href="/api/portal?customerId=10dbdbfe-41ac-48d9-a8ca-c192dc5e8722"
            class="text-gray-600 ml-3 hover:text-blue-600 px-3 py-2 rounded-md"
          >
            Customer Portal
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { getAll } from "~/shared/utils/stores/kv";

onMounted(() => {
  console.log("Items from KV store:", getAll());
});
</script>
