<template>
   <div class="page1" >
       <div class="content" :style="{'background': bgColor}"></div>
       <button @click="changeColor">
           一健换肤
       </button>
   </div>
</template>

<script>
// import axios from 'axios';
import themeColor from './theme-color';

export default {
    name: 'page1',
    data() {
        return {
            bgColor: 'red',
        };
    },
    // computed() {
    //     styles: function(){
    //         return {
    //             'background': this.bgColor,
    //         };
    //     }
    // },
    created() {
        console.log(themeColor);
    },
    methods: {
        changeColor() {
            this.bgColor = 'blue';
        },
    },
};
</script>

<style lang="less">
.content {
  width: 100%;
  height: 200px;
}
</style>

