import firestore from "@react-native-firebase/firestore";

class Firebase {


    firestore;

        constructor(){

            this.firestore = firestore();



        }
//lire dans la collection Categorie
        getCategories = () => this.firestore.collection("Categories").get();

}

export default Firebase