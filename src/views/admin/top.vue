<template>
    <div>
        <v-btn @click="getUsersDB">読み取り(ログ出力)</v-btn>
        <p>{{ username }}</p>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDatabase, ref, child, get } from "firebase/database"

export default {
    name: 'Home',
    components: {
    
    },
    data () {
        return {
            username:""
        }
    },
    methods: {
        getUsersDB(){
            onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    const dbRef = ref(getDatabase());
                    get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val())
                        this.username = snapshot.val().username
                    } else {
                        console.log("No data available")
                    }
                    }).catch((error) => {
                        console.error(error)
                    })
                }
            })
        }
    },
    created:function(){
        this.getUsersDB()
    }
}
</script>
