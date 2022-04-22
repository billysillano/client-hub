<template>
  <div class="home">
    <div class="container vd-margin-bottom-20 vd-padding-30">
      <h2 class="vd-h3 vd-light-blue vd-margin-bottom-10">
        Latest Projects
      </h2>
      <div class="grid">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="grid__item grid__item--4 vd-margin-bottom-60">
          <app-video-card
           :title="project.title"
           :thumbnail="project.thumbnail"
           :producer="project.producer"
           :produced-date="project.date"
           @view="$router.push({name: 'View'})">
          </app-video-card>
        </div>
      </div>
    </div>
    
    <div class="container vd-margin-bottom-20 vd-padding-30">
      <app-table
        title="Your Tasks"
        :fields="fields"
        :data-items="tasks">
        <template #name="{item}">
          <span class="vd-black vd-strong">
            {{item.name}}
          </span>
        </template>
        <template #status="{item}">
          <small
            :class="statusClassMap[item.status]"
            class="vd-padding-extra-small vd-padding-left-20 vd-padding-right-20 vd-text-strong vd-border-radius-25">
            {{ item.status }}
          </small>
        </template>
        <template #action="{item}">
          <button
            @click="approveTask(item)"
            :class="item.status === 'Approved' ? 'vd-btn-gray' : 'vd-btn-blue'"
            class="vd-btn-small">
            Approve
          </button>
        </template>
      </app-table>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState } from 'vuex'
import AppTable from '@/components/AppTable'
import AppVideoCard from '@/components/AppVideoCard'

export default {
  name: 'Home',
  
  components: {
    AppTable,
    AppVideoCard
  },

  computed: {
    ...mapState([
      'tasks',
      'projects'
    ])
  },
  data () {
    return {
      fields: [
        { key: 'name', label: 'Name' },
        { key: 'created', label: 'Created' },
        { key: 'due_date', label: 'Due date' },
        { key: 'status', label: 'Status' },
        { key: 'action', label: '' }
      ],

      statusClassMap: {
        'Draft': 'vd-background-light-grey vd-darker-grey',
        'Active': 'vd-background-aqua vd-blue',
        'Pre-production': 'vd-background-light-orange vd-orange',
        'Filming': 'vd-background-light-purple vd-purple',
        'Post-production': 'vd-background-dark-blue vd-darker-blue',
        'Delivered': 'vd-background-aqua vd-blue'
      }
    }
  },
  methods: {
    ...mapActions([
      'getTasks',
      'getProjects',
      'approveTask'
    ])
  },
  created () {
    this.getTasks();
    this.getProjects();
  }
}
</script>
