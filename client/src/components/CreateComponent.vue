<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center"><img src="@/assets/user.svg" alt=""> Create User</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="student.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="student.email"
            required
          />
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input
            type="number"
            class="form-control"
            v-model="student.phone"
            required
          />
        </div>

        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            class="form-control"
            v-model="student.title"
            required
          />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            v-model="student.description"
            required
          />
        </div>
        <div class="form-group">
          <label>Date</label>
          
         <datetime type="datetime" v-model="student.date" required class="theme-orange"></datetime>
        </div>

        <div class="form-group">
          <button class="btn btn-success my-3 btn-block">Create</button>
        </div>
      </form>
      
     
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {
        name: "",
        mail: "",
        phone: "",
        title: "",
        description: "",
        date: ""
      },
    };
  },
  methods: {
    handleSubmitForm() {
            let apiURL = 'http://localhost:5000/posts';
            axios.post(apiURL, this.student).then(() => {
                this.$router.push('/view');
                this.student = {
                    name: '',
                    email: '',
                    phone: '',
                    title: "",
                    description: "",
                    date: ""
                }
            }).catch(error => {
                console.log(error);
            })
        },
  },
};
</script>
