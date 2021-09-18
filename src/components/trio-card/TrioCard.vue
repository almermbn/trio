<template>
  <div class="card-container">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="description">
      <slot name="description"></slot>
    </div>
    <div>
      <multiselect
        class="contacts"
        select-label=""
        selected-label=""
        deselect-label=""
        :custom-label="customLabel"
        v-model="contact"
        :options="contacts"
        placeholder=""
        :multiple="true"
        track-by="name"
        :close-on-select="false"
        @select="onSelect($event)"
        @remove="onRemove($event)"
      >
        <div class="placeholder" slot="placeholder">
          <img src="../../assets/check.png" class="check" />{{
            $t('trio.components.contactSync.allContacts')
          }}
        </div>
        <span class="checkbox-label" slot="option" slot-scope="scope">
          <input
            class="test"
            type="checkbox"
            v-model="scope.option.checked"
            @focus.prevent
          />
          {{ scope.option.name }}
        </span>
      </multiselect>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrioCard',
  props: {
    contacts: Array
  },
  data() {
    return {
      contact: []
    }
  },
  methods: {
    customLabel(option) {
      return `${option.name}`
    },
    onSelect(option) {
      let index = this.contacts.findIndex((item) => item.name == option.name)
      this.contacts[index].checked = true
    },

    onRemove(option) {
      let index = this.contacts.findIndex((item) => item.name == option.name)
      this.contacts[index].checked = false
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
.card-container {
  font-family: 'Noto Sans';
  font-style: normal;
  border: 2px solid #dfe3eb;
  color: #dfe3eb;
  width: 273.4px;
  min-height: 355.51px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  .title {
    color: #374a5e;
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    margin: 7.22px 0 14px 0;
  }
  .description {
    color: #33475b;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    max-width: 216.72px;
  }
  .icon {
    width: 66.13px;
    height: 66.13px;
    border: 1px solid #d1dbe6;
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
  }
  .check {
    width: 15.55px;
    height: 11.65px;
    display: flex;
  }
  .contacts {
    width: 216.72px;
    background: #f5f8fa;
    border: 1px solid #cbd6e2;
    box-sizing: border-box;
    border-radius: 2px;
    margin-top: 25px;
    cursor: pointer;
  }
  .placeholder {
    display: flex;
    font-size: 16px;
    line-height: 22px;
    color: #33475b;
    align-items: center;
    img {
      margin: 0 1rem 0 0.5rem;
    }
  }
}
.multiselect.multiselect__tags {
  background: green;
}
</style>

<style lang="scss">
.multiselect__tags,
.multiselect__select,
.multiselect__content-wrapper {
  background: #f5f8fa;
}
</style>
