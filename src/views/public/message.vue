<template>
    <div>
        <v-col>
            <v-btn @click="sendMessage">プッシュ通知</v-btn>
        </v-col>
    </div>
</template>

<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export default {
    data() {
        return {

        }
    },
    methods: {
        sendMessage(){
                const db = getFirestore()
                const docRef = addDoc(collection(db, 'users'), {
                name: "快眠"
            })
            console.log('Document written with ID: ', docRef.id)
        }
    }
}
</script>
