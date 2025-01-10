<script setup>
const route = useRoute();

onMounted(() => {
  // Get all query parameters
  const queryParams = { ...route.query };

  // Store checkout details in localStorage
  localStorage.setItem("checkoutComplete", "true");
  localStorage.setItem("checkoutDetails", JSON.stringify(queryParams));
});
</script>

<template>
  <div class="max-w-2xl mx-auto px-8 py-16 text-center">
    <h1 class="text-3xl font-bold text-green-500 mb-4">Payment Successful!</h1>
    <p class="text-gray-600 mb-8">
      Thank you for your purchase. You now have access to the course.
    </p>
    <div>
      <NuxtLink
        to="/"
        class="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
      >
        Return to Home
      </NuxtLink>
    </div>
  </div>
</template>
