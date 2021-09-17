<template>
  <div>
    <div class="ellipse" @click="spin = !spin">
      <img src="../../assets/sync.png" :class="spin ? 'sync spin' : 'sync'" />
    </div>
    <span class="label" v-show="!spin" :class="spin ? 'fade-out' : 'fade-in'">{{
      $t('trio.components.contactSync.syncContacts')
    }}</span>
    <span class="label" v-show="spin" :class="spin ? 'fade-in' : 'fade-out'">{{
      $t('trio.components.contactSync.allDone')
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'TrioSync',
  data() {
    return {
      spin: false
    }
  }
}
</script>
<style lang="scss" scoped>
.ellipse {
  width: 132px;
  height: 133px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
}
.sync {
  width: 70px;
  height: 60px;
  margin-top: calc(calc(133px - 60px) / 2px) + px;
  transition: all 0.25s;
  transform: rotate(0);
}

.label {
  color: #374a5e;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  position: relative;
  top: 9px;
}

.spin {
  transform: rotate(-180deg);
}

.fade-in {
  animation: fadeIn 0.25s;
}
.fade-out {
  animation: fadeIn 0.25s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
