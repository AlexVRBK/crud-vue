<template>
  <div>
    <nav
      class="navbar navbar-dark bg-secondary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left">MEVN</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link rounded text-black mx-3 px-3 bg-info" to="/"
              >Create User</router-link>
          </li>
          <li class="nav-item">
            <router-link class="header-btn  nav-link rounded text-black mx-3 px-3 bg-info" to="/view">View Users</router-link>
          </li>
        </ul>
      </div>
    </nav>

  
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>

</style>
