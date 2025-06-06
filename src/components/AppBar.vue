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

  <!-- <v-navigation-drawer v-model="drawer" :clipped="$vuetify.display.mdAndUp" :permanent="$vuetify.display.mdAndUp">
    <v-list class="mt-10" density="compact" nav>
    </v-list>
  </v-navigation-drawer> -->

  <v-container fluid>
    <router-view />
  </v-container>
</template>

<script setup lang="ts">
import vuetify from '@/plugins/vuetify';

function toggleTheme() {
  vuetify.theme.global.name.value = vuetify.theme.current.value.dark ? 'light' : 'dark';
}
</script>