
<template>
  <div class="header">
      <span class="header-icon user-picture" v-bind:style="{backgroundImage: `url(${GetUserPicture})`}">
        <nav class="user-nav">
          <ul class="user-nav-list">
            <li class="user-nav-list-item" v-on:click="Logout">
              Cerrar sesión
            </li>
          </ul>
        </nav>
      </span>
      <nav class="header-nav">
        <ul class="nav-list">
          <li class="nav-list-item"><router-link to="/news" class="nav-link" href="#">Noticias</router-link ></li>
          <li class="nav-list-item"><router-link to="/updates" class="nav-link" href="#">Actualizaciones</router-link ></li>
          <li class="nav-list-item"><router-link to="/profile" class="nav-link" href="#">Perfil</router-link ></li>
          <li class="nav-list-item"><router-link to="/scores" class="nav-link" href="#">Puntuaciones</router-link ></li>
        </ul>
      </nav>
  </div>
</template>

<script>
  
  export default {
    name: 'Header',
    methods: {
      Logout(){
        console.log('logout')
        localStorage.clear();
        window.location.replace('/')
      }
    },
    computed: {
        GetUserPicture(){
          return JSON.parse(localStorage.getItem('token')).picture_url
        }
    }
  }
</script>
