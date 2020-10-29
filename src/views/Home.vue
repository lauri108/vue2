<template>
  <div class="home">
    <StudentsList />
  </div>
</template>

<script>
// @ is an alias to /src
import StudentsList from '@/components/StudentsList.vue'

export default {
  name: 'Home',
  components: {
    StudentsList
  }
}
</script>
