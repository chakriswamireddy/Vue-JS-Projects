<template>
  
    <div ref="calendarContainer" id="calendar"></div>

</template>

<script>
import React from "react";
import ReactDOM from "react-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default {
  name: "MyCalendar",
  mounted() {
    this.renderCalendar();
  },
  methods: {
    renderCalendar() {
      const calendarComponent = React.createElement(Calendar, {
        value: this.value,
        onChange: this.handleChange,
      });

      ReactDOM.render(calendarComponent, this.$refs.calendarContainer);
    },
    handleChange(date) {
      this.value = date;
    },
  },
  data() {
    return {
      value: new Date(),
    };
  },
  beforeUnmount() {
    ReactDOM.unmountComponentAtNode(this.$refs.calendarContainer);
  },
};
</script>
