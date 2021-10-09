import {ref} from 'vue'


const news = ref([])
const useNews = () =>{
    let loading = ref(true)
    
    const getAllNews = async(limit=50)=>{
        let url = `http://localhost/Ejercicios/public/api/news.php`
        let headers = new Headers()
        headers.set('Content-Type','application/json')
        let fetchOptions = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default'
        }
        let response = await fetch(url, fetchOptions)
        
        let resJson = await response.json()
        
        
        news.value = resJson.data


        loading.value = false
    }
    const AddNew = async(newObject)=>{
        let url = `http://localhost/Ejercicios/public/api/news.php`

        let response = await fetch(url,{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(newObject)
        })

        let data = await response.json()

        return data

    }
    return {
        news,
        getAllNews,
        loading,
        AddNew
    }
}

export default useNews