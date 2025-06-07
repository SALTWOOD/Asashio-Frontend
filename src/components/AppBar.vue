<template>
  <v-app-bar app color="appbar">
    <v-toolbar-title>Asashio</v-toolbar-title>
    <v-spacer />
    <v-btn icon @click="toggleTheme">
      <v-icon>
        {{
          !vuetify.theme.global.current.value.dark
            ? 'mdi-weather-night'
            : 'mdi-weather-sunny'
        }}
      </v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import vuetify from '@/plugins/vuetify';

function toggleTheme() {
  vuetify.theme.global.name.value = vuetify.theme.current.value.dark ? 'light' : 'dark';
}
</script>