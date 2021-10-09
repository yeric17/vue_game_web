<template>
  <div class="news-container">
      <div class="news-list">
            <div class="news-card add" v-if="addNewsActive">
                <div class="news-header">
                    <div class="news-userpost">
                        <div class="userpost-img"><img :src="userPicture" alt="user photo"></div>
                    </div>
                    <label>
                        <input type="text" class="input-text" placeholder="Titulo de la noticia" required v-model="newObject.title">
                    </label>
                    
                    <span class="close-add-option" v-on:click="ToggleAddOption">x</span>
                </div>
                <div class="news-content">
                       <textarea id="" cols="30" rows="10" placeholder="contenido de la noticia..." required v-model="newObject.content"></textarea>
                       <button class="input-submit" v-on:click="AddElement">Crear Noticia</button>
                </div>
            </div>
            <span v-else class="add-news" >
                <span class="add-news-button" v-on:click="ToggleAddOption">+</span>
            </span>
            <div v-if="loading"></div>
            <div v-else class="news-card" v-for="newItem in news" :key="newItem.news_id">
                <div class="news-header">
                    <div class="news-userpost">
                        <div class="userpost-img"><img :src="newItem.picture_url" alt="user photo"></div>
                    </div>
                    <h6 class="news-title">{{newItem.title}}</h6><span class="news-date">{{newItem.date}}</span>
                </div>
                <div class="news-content">
                    <p>
                    {{newItem.content}}
                    </p>
                </div>
                <div class="news-bottom">
                    <div class="userpost-name"><span>{{newItem.user_name}}</span></div>
                    <div class="news-timeelapsed">{{ElapseTime(newItem.date)}}</div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>

import moment from 'moment'
import useNews from '../api/useNews'

moment.locale('es-mx')
export default {
    name: 'NewsList',
    setup(){
        const {getAllNews, loading, news,AddNew} = useNews()

        getAllNews()

        return{
            news,
            loading,
            AddNew,
            getAllNews
        }
    },
    methods: {
        ElapseTime(timeString){
            let startDate = moment(timeString);
            let finishDate = moment();
            let duration = moment.duration(finishDate.diff(startDate))
        
            return duration.humanize();
        },
        ToggleAddOption(){
            this.addNewsActive = !this.addNewsActive
        },
        async AddElement(){
            if(this.newObject.title === "" && this.newObject.content === "") return;

            let response = await this.AddNew(this.newObject)

            if(response.status === 200){
                this.getAllNews()
                this.ToggleAddOption()
            }
        }
    },
    data(){
        return{
            addNewsActive: false,
            userPicture: JSON.parse(localStorage.getItem('token')).picture_url,
            newObject: {
                title: "",
                content: "",
                user_id: JSON.parse(localStorage.getItem('token')).user_id
            }
        }
    }
}
</script>

<style>

</style>