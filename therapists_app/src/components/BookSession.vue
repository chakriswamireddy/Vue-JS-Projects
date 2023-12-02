<template>
    <div id="book-session" v-if="selectedUser">

        <div id="profile" >
            <img :src="selectedUser.photoUrl" alt="" />
            <div>
              <h3> {{selectedUser.firstname}} username </h3>
              <p> {{selectedUser.profileHeadline}} profile headline </p>
              <button @click="openLinkedInProfile(selectedUser.linkedInURL)" class="primary-btn">  ViewProfile </button>
            </div>


        </div>
        <Calendar />
        <div id="session-period" >
          <h3>Session Period</h3>
          <p>60 min</p>
          <span>Note: *Session period will be of 60min</span>
        </div>
        <div id="session-time" >
          <h3>Select Time</h3>
          <div>
            <label><input type="radio" checked name="amORpm" value="am" @click="chooseAmorPM($event.target.value)" class="ampmbtn">AM</label>
            <label><input type="radio" name="amORpm" id="" value="pm"  @click="chooseAmorPM($event.target.value)" class="ampmbtn">PM</label>
          </div>
            <div>
              <label ><input type="radio" name="time" id=""><span>10:00 {{AMorPMValue}}</span></label>
              <label ><input type="radio" name="time" id=""><span>11:00 {{AMorPMValue}}</span></label>
              <label ><input type="radio" name="time" id=""><span>12:00 {{AMorPMValue}}</span></label>
              <label ><input type="radio" name="time" id=""><span>10:30 {{AMorPMValue}}</span></label>
              <label ><input type="radio" name="time" id=""><span>11:30 {{AMorPMValue}}</span></label>
              <label ><input type="radio" name="time" id=""><span>12:30 {{AMorPMValue}}</span></label>
            </div>
            
          
        </div>
        <button class="primary-btn">Book Session</button>
    </div>
    
</template>

<script>
import Calendar from './Calendar.vue';
import '../css_files/booksession.css'
 import { ref } from 'vue';

export default {


  components: { Calendar },
  props: {
    selectedUser: {
      type: Object, 
      default: null, 
    },

  },
  setup() {
    const AMorPMValue = ref("am"); 


    function chooseAmorPM(value) {
      AMorPMValue.value = value;
    }

    function openLinkedInProfile(url) {
      console.log(url)

    const correctedURL = "https://www." +url;
      window.open(correctedURL, '_blank');
    }
  
    return {
      AMorPMValue,
      chooseAmorPM,
      openLinkedInProfile,
    };
  },
};
</script>