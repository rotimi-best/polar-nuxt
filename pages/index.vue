<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-8">Available Courses</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="course in courses"
        :key="course.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img
          :src="course.image"
          :alt="course.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold mb-2">{{ course.title }}</h2>
          <p class="text-gray-600 mb-4">{{ course.description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-blue-600"
              >${{ course.price }}</span
            >
            <button
              @click="handlePurchase(course)"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = ref([
  {
    id: 1,
    title: "Web Development Fundamentals",
    description:
      "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
    price: 99.99,
    image: "https://picsum.photos/seed/web/400/300",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master advanced JavaScript concepts and modern frameworks.",
    price: 149.99,
    image: "https://picsum.photos/seed/js/400/300",
  },
  {
    id: 3,
    title: "Full Stack Development",
    description:
      "Build complete web applications with front-end and back-end technologies.",
    price: 199.99,
    image: "https://picsum.photos/seed/fullstack/400/300",
  },
]);

const handlePurchase = (course) => {
  console.log(`Purchasing course: ${course.title}`);
  // Add purchase logic here

  const checkoutURL = new URL("/api/checkout", window.location.href);

  checkoutURL.searchParams.set(
    "productId",
    "f8a0ad5e-bc7c-4a35-a15a-51dc30e5f0ac"
  );

  window.location.href = checkoutURL.toString();
};
</script>
