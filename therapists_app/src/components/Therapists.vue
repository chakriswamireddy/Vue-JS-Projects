<template>
  <div id="therapists">

    <div id="filters">
      <label>
      <input type="radio" checked name="filter" @change="clearFilter">
      <span>
      <i class="fa fa-filter" aria-hidden="true"></i>
      Tags</span>
    </label>
    <label>
      <input type="radio" name="filter" @change="filtering('Depression')">
      <span> Depression </span>
     
    </label>
    <label>
      <input type="radio" name="filter" @change="filtering('OCD')">
        <span> OCD</span>
    </label>
    <label>
      <input type="radio" name="filter" @change="filtering('Addiction')">
      <span> Addiction  </span>
    </label>
    <label>
      <input type="radio" name="filter" @change="filtering('Finances')">
       <span> Finances </span>
    </label>
    <label>
      <input type="radio" name="filter" @change="filtering('ADHD')">
       <span> ADHD </span>
    </label>
    </div>
    <ul v-if="filteredData.length" id="grid">
      <li v-for="item in filteredData" :key="item.id">
        <img :src="item.photoUrl" alt="" />
        <span class="rate"> {{ item.hourlyRate }} /hr </span>
        <div>

       
        <h3>
          {{ item.firstname ? item.firstname : "Mizuru Chizuhara" }}
        </h3>
        <span v-if="item.isExpert == 1">
          <img
            src="https://cdn3.emoji.gg/emojis/2055-verified.png"
            alt="Verified" width="18"
          />
          
        </span>
         </div>
        <span class="text-ellipsis2" > {{ item.status }} </span>
        <ul>
          <li>
            🏅 <span class="experience">{{ item.expertExperience }} years of experience </span>
          </li>
          <li class="text-ellipsis">
            🏵️ {{ item.expertFocusArea.join(", ") }}
          </li>

          <li class="text-ellipsis">🎓 {{ item.profileHeadline }}</li>
        </ul>
        <div class="book-buttons">
          <button @click="() => updateParentData(item)">Book Session</button>
          <i class="fa fa-commenting-o" aria-hidden="true"></i>
        </div>
      </li>
    </ul>

    <div v-else>No data available</div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import '../css_files/therapists.css'

export default {

  props:{
    searchedName : {
    type : String,
    default : '',
    }
  },
  data() {
    return {
      data: [],
      keyword: '',
    };
  },
  
  computed: {
     filteredData() {
      if (this.searchedName !== '') {
      console.log('searchedName filter applied');
      return this.data.filter(item => item.firstname.includes(this.searchedName));
      }
      else if (this.keyword === '') {
        console.log('no filter')
        return this.data;
        
      }
      else {
        console.log('filter applied')
        return this.data.filter(item => item.expertFocusArea.includes(this.keyword));
      }
  },
  },

  created() {
    // Make an API request when the component is created
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://api-container-ph3rhhnyiq-uc.a.run.app/therapists") 
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },


    filtering(value) {
      this.keyword = value; 
    },

    clearFilter() {
      this.keyword = '';
    },

    updateParentData(selectedItem) {
      console.log(selectedItem);
      this.$emit("updateData", selectedItem);
    },
  },
}
</script>

<style>

</style>
