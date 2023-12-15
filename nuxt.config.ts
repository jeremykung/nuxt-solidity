// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // server: {
  //   host: "0.0.0.0", // default: localhost
  // },
  runtimeConfig: {
    BLOG_CONTRACT: "0x2f7C319eDf93364976E548E659f3400d5A511Ff0",
    public: {
      PROJECT_ID: "bf01010b0dbe1ccc528498b6e8dcd161",
      TEST_VARIABLE: "Hello Dotenv",
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  imports: {
    dirs: ["stores"],
  },
  nitro: {
    preset: "vercel-edge",
  },
  ssr: false,
})
