<template>
<div>
  <div class="card student-list m-2 p-2">
    <h4 class="card-title">Student List</h4>
    <div id="student-table">
      <table class="table">
        <tr>
          <th>Name</th>
          <th>StarID</th>
          <th>Present?</th>
        </tr>
        <tr v-for="student in students" v-bind:key="student.starID" v-bind:class="{present:student.present,absent:!student.present}">
         <!--v-bind:key is used in a loop to associate every generated HTML element with a unique value. Helps Vue re-draw more efficiently when any data changes.
-->
          <td>{{student.name}}</td>
          <td>{{student.starID}}</td>
          <td>
            <input type="checkbox" v-bind:checked="student.present" v-on:change="arrivedOrLeft(student,$event.target.checked)">
          </td>


        </tr>
        <!-- TODO create table rows
        Each row will have a checkbox, bound to the app's data
        When the checkbox is checked/unchecked, the student will be signed in/out -->
        <student-row v-for="student in students"
        v-bind:student="student" v-bind:key="student.starID"
        v-on:student-arrived-or-left="arrivedOrLeft">

        </student-row>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import StudentRow from "@/components/StudentRow";
export default {
  name: "StudentTable",

  components: {StudentRow},
  emits:['student-arrived-or-left'],
  props:{
    students:Array
  },
 methods: {
    arrivedOrLeft(student,present){
    this.$emit('student-arrived-or-left',student,present)
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