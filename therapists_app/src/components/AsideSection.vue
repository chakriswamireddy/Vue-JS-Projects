<script >
  import '../css_files/navbar.css'
</script>

<template>
  <main id="nav-bar">
    <div >
     
         <img src="../assets/images/logo.png" alt="" />
    </div>
    <div>
      <ul>
        <li>
            <span class="material-symbols-outlined">house</span>
            <span>Home</span>
        </li>
        <li>
            <span class="material-symbols-outlined">calendar_month</span>
             <span>My Sessions</span>
        </li>
        <router-link to='/therapists' class="route-li" >
        <li id="therapist-route">
            
            <span class="material-symbols-outlined">psychology</span>
           <span>Therapist </span>

           
        </li>
        </router-link>
        <li>
            <span class="material-symbols-outlined">crossword</span>
            <span>Quizzes</span>
        </li>
        <li>
            <span class="material-symbols-outlined">bubble</span>
            <span>Webinars</span>
        </li>
        <li>
            <span class="material-symbols-outlined">mood</span>
            <span>Profile</span>
        </li>
      </ul>
    </div>
    
        <img src="../assets/images/OIG.jpeg" alt="" />

  </main>
</template>