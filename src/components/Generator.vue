<template>
    <div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <div class="ms-Grid" dir="ltr">
            <div class="ms-Grid-row">
                <div class="setup-content ms-Grid-col ms-sm12 ms-md6">
                    <h1>Generator</h1>
                    <div>
                        <input label="Title" v-model="message.main" placeholder="I told you..." /><br>
                        <input label="Complementary" v-model="message.comp" placeholder="Complementary information" /><br>
                        <input label="Optional message" v-model="message.msg" multiline rows="3" placeholder="Optional message to give a little more of context..." /><br>
                        <input v-if="exists" type="text" id="preview_link" v-model="preview" /><br>
                        <button @click="updateQuery">Generate</button>
                    </div>
                </div>

                <div class="preview-content ms-Grid-col ms-sm12 ms-md6">
                    <MainITY :pmsg="objToString()" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainITY from '@/components/MainITY.vue'

export default {
    name: 'Generator',
    data: () => {
        return {
            message: {
                main: '',
                comp: '',
                msg: '',

                emoji1: '',
                emoji2: ''
            },
            query: '',
            preview: '',
            exists: false
        }
    },
    components: {
        MainITY
    },
    methods: {
        getQuery: function() {
            let str = JSON.stringify(this.message);
            return encodeURIComponent(str);
        },
        updateQuery: function() {
            this.preview = window.location.href + "ity?q=" + this.getQuery();
            this.copy(this.preview);
            this.exists = true;
        },
        objToString: function() {
            return JSON.stringify(this.message);
        },
        copy: function(preview_url) {
            console.log("Custom I told you URL.");
            console.log(preview_url);
            alert("URL copied to clipboard");
        }
    }
}
</script>