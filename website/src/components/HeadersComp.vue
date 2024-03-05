<template>
   <div class="header-container">
      <i></i>
      <i>
         <div>
            <h2 :id="ids" class="header-titles header-titles-margin" :style="{ textColor: textColor, borderBottomColor: underline, borderBottomStyle: 'solid', borderBottomWidth: '1px'}">
               {{ text  }}
            </h2>
         </div>
      </i>
      <i></i>
   </div>
</template>

<script>
export default {
   props: {
      text: {
         type: String,
         default: "Title"
      },
      underline: {
         type: String,
         default: "d8dee9"
      },
      textColor: {
         type: String,
         default: "#2e3440"
      },
      ids: {
         type: String,
         default: ""
      }
   }
}
</script>

<style lang="scss" scoped>
@import url("../assets/base.css");

a {
   text-decoration: none;
   color: inherit;
}

* {
   width: 100%;
}

.header-container {
   display: grid;
   height: inherit;
   grid-template-columns: 2fr 1fr 2fr;
   grid-template-rows: 100px;
   text-align: center;
   align-items: center;
}

.header-titles-margin {
   margin-top: 80px
}
</style>