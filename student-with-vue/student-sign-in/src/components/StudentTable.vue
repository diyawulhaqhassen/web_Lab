<template>
<div>
  <div class="card student-list m-2 p-2">
    <h4 class="card-title">Student List</h4>

    <div class="edit-table-toggle from-check">
      <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
      <label for="edit-table" class="form-check-lable">Edit table?</label>
    </div >

    <div id="student-table">
      <table class="table">
        <tr>
          <th>Name</th>
          <th>StarID</th>
          <th>Present?</th>
          <th v-show="editTable">Delete</th>
        </tr>
        <!-- TODO create table rows
        Each row will have a checkbox, bound to the app's data
        When the checkbox is checked/unchecked, the student will be signed in/out -->
        <student-row
            v-for="student in students"
            v-bind:student="student" v-bind:key="student.starID"
            v-bind:edit="editTable"
            v-on:student-arrived-or-left="arrivedOrLeft"
            v-on:delete-student="studentDeleted">

        </student-row>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import StudentRow from "@/components/StudentRow.vue";
export default {
  name: "StudentTable",

  components: {StudentRow},
  emits:['student-present','delete-student'],

  data(){
    return{
      editTable:false
    }
  }, props:{
    students:Array,
    //edit:Boolean
  },
 methods: {
    arrivedOrLeft(student,present){
    this.$emit('student-present',student,present)
    },studentDeleted(){
      this.$emit('delete-student',this.student)// delete student
   }
}
}
</script>

<style scoped>
.present{
  color: gray;
  font-style: italic;
}
.absent{
  color: black;
  font-weight: bold;
}
</style>