<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/vars";
#app {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: $text-color;
}
html {
    line-height: 1.46;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

body {
    margin: 0;
    cursor: default;
    background: $primary-1;
}

h1,
h2,
h3,
h4 {
    margin: 0;
}

p {
    margin: 0;
}

ul {
    padding: 0;
    list-style: none;
}

dl,
dd {
    margin: 0;
}

h1 > small,
h1 > time {
    display: block;
}
:root {
    font-size: 0.875rem;
}
@media (min-width: 24em) {
    :root {
        font-size: 0.9375rem;
    }
}
@media (min-width: 48em) {
    :root {
        font-size: 1rem;
    }
}
</style>
