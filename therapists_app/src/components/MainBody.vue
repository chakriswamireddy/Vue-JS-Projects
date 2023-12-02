<script >


    import Therapists from "./Therapists.vue";
    import BookSession from "./BookSession.vue"
    import { ref } from 'vue';

    import '../css_files/mainbody.css'

    export default {
  components: {
    Therapists,
    BookSession,
  },
  setup() {
    const sharedUser = ref(""); 
    const searchedName = ref(''); 


    // Method to update sharedData
    function updateSharedData(newUser) {
      sharedUser.value = newUser;
    }

    return {
      sharedUser,
      updateSharedData,
      searchedName,
    };
  },
};
    

</script>

<template>
<div id="mainbody">
    
            <div id="user-area">
                <h1>Therapists</h1>
                <div>
                    <span class="material-symbols-outlined">tune</span>
                    <div>
                        <span class="material-symbols-outlined">search</span>
                        <input type="text" name="" id="" v-model="searchedName" placeholder="search for session"  >

                    </div>
                    <i class="fa fa-bell" aria-hidden="true"> </i>
                     <img src="../assets/images/OIG.jpeg" alt="" />
                </div>
                
            </div>
            <div id="therapynbooking">
                <Therapists :dataFromA="sharedUser" @updateData="updateSharedData" :searchedName="searchedName" />
                <BookSession :selectedUser="sharedUser" />
                
            </div>


</div>
</template>

<style>

</style>