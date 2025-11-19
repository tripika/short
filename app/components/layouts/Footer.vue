<script setup>
const { title } = useAppConfig()
</script>

<template>
  <section class="md:pt-6">
    <div
      class="
        container flex flex-col items-center py-8
        sm:flex-row
      "
    >
      <a
        href="https://kerko.xyz"
        class="
          text-xl leading-none font-black text-gray-900 select-none
          dark:text-gray-100
        "
        :title="title"
      >{{ title }}</a>
      <a
        class="
          mt-4 text-sm text-gray-500
          sm:mt-0 sm:ml-4 sm:border-l sm:border-gray-200 sm:pl-4
        "
        href="https://html.zone"
        target="_blank"
        title="HTML.ZONE"
      >
        &copy; {{ new Date().getFullYear() }} Products of HTML.ZONE
      </a>
      <span
        class="
          mt-4 inline-flex items-center space-x-4
          sm:mt-0 sm:ml-auto sm:justify-start
        "
      >
        <a
          href="https://kerko.xyz/instagram"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-gray-700 text-sm"
        >
          Instagram
        </a>
        <a
          href="https://kerko.xyz/linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-gray-700 text-sm"
        >
          Linkedin
        </a>
        <a
          href="https://kerko.xyz/facebook"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-gray-700 text-sm"
        >
          Facebook
        </a>
      </span>
    </div>
  </section>
</template>
