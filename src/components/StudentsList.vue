<template>
  <div class="students-list">
      <h1>List of students</h1>
      <div class="student" v-for="student in studentsArray" v-bind:key="student.id" >
          Name: {{student.name}}, Age: {{student.age}}
      </div>
      <button>Add Student</button>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters(['studentsArray'])
  }

}
</script>

<style lang="scss" scoped>
.student {
    background-color: aquamarine
}

</style>>
