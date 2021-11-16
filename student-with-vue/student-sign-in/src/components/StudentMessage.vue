<template>
<div>

    <div v-show="student.name" ></div>
      <div v-if="student.present" class="alert alert-info">
        Welcome, {{student.name}}
      </div>
      <div v-else class="alert alert-success">
        Goodbye, {{student.name}} see you later!
      </div>
  </div>

</template>

<script>
export default {
  name: "StudentMessage",
  props:{
    student:Object
  }

}
</script>

<style scoped>

</style>