<template>
  <div id="app">
    <div class="languagesNav">
      <a id="ptBr" @click="setLanguage('ptBr')">
        <div class="label">
          {{ $t('trio.languages.ptBr') }} <img src="./assets/br.png" />
        </div>
      </a>
      <a id="en" @click="setLanguage('en')">
        <div class="label">
          {{ $t('trio.languages.en') }} <img src="./assets/en.png" />
        </div>
      </a>
    </div>
    <trio-contact-sync />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    setLanguage(_lang) {
      this._i18n.locale = _lang
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Noto Sans, Helvetica, Arial, sans-serif;
  text-align: center;
}

.label {
  display: flex;
  justify-content: space-around;
  cursor: pointer;
}

.languagesNav {
  display: flex;
  img {
    width: 1rem;
    height: 1rem;
    margin-left: 2.5rem;
  }
}

.languagesNav a {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 15%;
  width: 100px;
  left: -80px;
  color: #374a5e;
  font-weight: bold;
  border-radius: 0 5px 5px 0;
  transition: 0.3s;
  padding: 15px;
  text-decoration: none;
  font-size: 1rem;
}

.languagesNav a:hover {
  left: 0;
}

#ptBr {
  top: 20px;
  padding: 0.5rem;
  background-color: #f5f8fa;
}
#en {
  top: 60px;
  padding: 0.5rem;
  background-color: #f5f8fa;
}
</style>
