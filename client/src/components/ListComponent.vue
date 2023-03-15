<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          
          <tr>
            <th @click="sortBy()" class="sort"><img src="@/assets/sort.svg" alt=""> Name </th>
            <th>Email</th>
            <th>Phone</th>
            <th>Events title</th>
            <th>Events description</th>
            <th>Events date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in Students" :key="student._id">
            <td>{{ student.name }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.phone }}</td>
            <td>{{ student.title }}</td>
            <td>{{ student.description }}</td>
            <td>{{ student.date | luxon  }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: student._id } }"
                class="btn btn-info"
                >Profile
              </router-link>
              <button
                @click.prevent="deleteStudent(student._id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Students: [],
    };
  },
  
  created() {
    let apiURL = "http://localhost:5000/posts";
    axios
      .get(apiURL)
      .then((res) => {
        this.Students = res.data;
        
      })
      .catch((error) => {
        console.log(error);
      });
  },
  
  methods: {
     sortBy() {
      this.Students.sort((a,b) => a.name.localeCompare(b.name))
    },
    deleteStudent(id) {
      let apiURL = `http://localhost:5000/posts/${id}`;
      let indexOfArrayItem = this.Students.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Students.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
   
  },
};
</script>

<style>
.btn-info {
  margin-right: 10px;
}
.sort:hover {
    background-color: #0DCAF0;
    cursor: pointer;
}
</style>
