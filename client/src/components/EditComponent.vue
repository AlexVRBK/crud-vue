<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center"><img src="@/assets/user.svg" alt=""> Profile User</h3>
      <form @submit.prevent="handleUpdateForm">
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

       
      

        <br>
        <h3 class="text-center"><img src="@/assets/event.svg" alt=""> Create event</h3>

       
        <div class="form-group">
          <label>Title event</label>
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
          
          <datetime type="datetime" v-model="student.date" format="yyyy-MM-dd HH:mm" required class="theme-orange"></datetime>
        </div>

        <div class="form-group">
          <button class="btn btn-warning my-2 btn-block">Edit</button>
        </div>
      </form>
      <h3 class="text-center">Event</h3>
      <div class="text-warning bg-secondary text-center fs-4">The event is scheduled for {{ student.date | luxon  }}</div>
    </div>

      
       

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {},
      
     
    };
  },
  created() {
    let apiURL = `http://localhost:5000/posts/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.student = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:5000/posts/${this.$route.params.id}`;

      axios
        .put(apiURL, this.student)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.theme-orange{
  margin-top: 5px;
}
.theme-orange .vdatetime-popup__header,
.theme-orange .vdatetime-calendar__month__day--selected > span > span,
.theme-orange .vdatetime-calendar__month__day--selected:hover > span > span {
  background: #FF9800;
}

.theme-orange .vdatetime-year-picker__item--selected,
.theme-orange .vdatetime-time-picker__item--selected,
.theme-orange .vdatetime-popup__actions__button {
  color: #ff9800;
}
</style>