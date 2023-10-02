<script setup lang="ts">
interface IError {
  statusCode: number;
  statusMessage: string;
  message: string;
}
defineProps<{
  error: IError;
}>();
</script>

<template>
  <v-layout class="h-screen w-100">
    <v-main class="d-flex align-center justify-center flex-column">
      <h1 class="text-h1">{{ error.statusCode }}</h1>
      <strong>{{ error?.message }}</strong>
      <p>Sorry, that page doesn't exist.</p>
      <v-btn rounded-sm
             border
             class="mt-9"
             @click="clearError({ redirect: '/' })"
             text="Back to Home" />
    </v-main>
  </v-layout>
</template>