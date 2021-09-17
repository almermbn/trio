<template>
  <div class="sync-container">
    <section id="gmail">
      <trio-card :contacts="contacts">
        <template v-slot:icon>
          <img src="../../assets/gmail.png" />
        </template>

        <template v-slot:title>
          {{ $t('trio.components.contactSync.gmail.title') }}
        </template>
        <template v-slot:description>
          {{ $t('trio.components.contactSync.gmail.description') }}
        </template>
      </trio-card>
    </section>

    <section id="ellipse">
      <trio-sync></trio-sync>
    </section>

    <section id="mailchimp">
      <trio-card :contacts="contacts">
        <template v-slot:icon>
          <img src="../../assets/mailchimp.png" />
        </template>

        <template v-slot:title>
          {{ $t('trio.components.contactSync.mailChimp.title') }}
        </template>
        <template v-slot:description>
          {{ $t('trio.components.contactSync.mailChimp.description') }}
        </template>
      </trio-card>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TrioContactSync',
  data() {
    return {
      contacts: [
        {
          name: 'Family',
          id: 1,
          checked: false
        },
        {
          name: 'Work Friends',
          id: 2,
          checked: false
        },
        {
          name: 'Another',
          id: 3,
          checked: false
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.sync-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 16px);
  background: url('../../assets/bg.png') no-repeat;
  background-position: center center;
  background-size: 539px 522px;
}

#ellipse {
  margin: 0 28.63px;
}
</style>
