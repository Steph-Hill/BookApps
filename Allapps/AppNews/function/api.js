import axios from "axios"
//url de mon API
const urlApi = 'https://newsapi.org/v2/everything'
// Clé de mon API
const apiKey = '09b7594134dd4540b0623605304b380f'


export const apiNews = async ( page ) => {

    //Parametres de mon API
    const params ={

        q : 'Apple' ,
        from : '2022-08-24' ,
        sortBy : 'popularity' ,
        apiKey : apiKey,
        page : page,
        pageSize : 10
    }

    const { data } = await axios.get(urlApi,{params:params})

    console.log('api News', data.articles)

    return data.articles

 }