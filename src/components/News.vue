<template>
        <div id="home">
            {{msg}}  -- {{this.$store.state.count}}
            <br>
            <button @click="intCount()">增加数量+</button>
            <br />
        <br />
        <ul>
            <li v-for="item in list">
                {{item.title}}
            </li>
        </ul>
        </div>
    </template>
    <script>
        import store from '../vuex/store.js';
        export default {
            data(){
                return {
                    msg: '我是new组件',
                    list: []
                }
            },
            store,
            mounted(){
                if(store.state.newList.length == 0){
                    this.getNews();
                }else{
                    this.list = store.state.newList;
                }
            },
            methods: {
                intCount(){
                    this.$store.commit('intCount');
                },
                getNews(){
                    var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                    this.$http.get(api).then((response)=>{
                        this.list=response.body.result;
                        this.$store.commit('setNews', response.body.result);
                    },function(err){
                        console.log(err);
                    })
                }
            }
        }
    </script>