<template>
  <div>
      <h2 class="vd-h3 vd-light-blue vd-margin-bottom-10">{{title}}</h2>
      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th
                v-for="field in fields"
                :key="field.key"
                :class="field.key"
                class="vd-grey vd-padding-small vd-text-align-left">
                {{ field.label }}  
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(item, index) in dataItems"
              :key="index"
            >
              <td
                v-for="field in fields"
                :key="field.key"
                :class="field.key"
                class="vd-padding-small vd-text-align-left vd-dark-grey">
                <slot
                  :name="field.key"
                  :item="item">
                    {{ item[field.key] }}
                </slot>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  name: "AppTable",
  props: {
    title: {
      type: String,
      default: ''
    },
    fields: {
      type: Array,
      required: true
    },
    dataItems: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
.table-wrapper {
  width: 100%;
  overflow: auto;
}

.table {
  min-width: 100%;

  th,
  td{
    border-bottom: 2px solid #f3f3f3;
    min-width: 100px;
  }
}
</style>