<template>
    <div class="ms-Grid" dir="ltr">
        <div class="ms-Grid-row">
            <div class="setup-content ms-Grid-col ms-sm12 ms-md6">
                <h1>Generator</h1>
                <div>
                    <!-- <TextField label="Title" placeholder="I told you..." />
                    <TextField label="Complementary" placeholder="Complementary information" />
                    <TextField label="Optional message" multiline rows="3" placeholder="Optional message to give a little more of context..." />
                    <TextField label="Standard" multiline rows={3} /> -->

                    <input label="Title" v-model="message.main" placeholder="I told you..." @input="updateQuery" /><br>
                    <input label="Complementary" v-model="message.comp" placeholder="Complementary information" @input="updateQuery" /><br>
                    <input label="Optional message" v-model="message.msg" multiline rows="3" placeholder="Optional message to give a little more of context..." @input="updateQuery" /><br>
                    <!-- <input label="Standard" multiline rows={3} /> -->
                    <p>{{ preview }}</p>
                </div>
            </div>

            <div class="preview-content ms-Grid-col ms-sm12 ms-md6">
                <iframe id="iframe-preview" :src="preview" />
                <button @click="reloadPreview">Reload preview</button>
            </div>
        </div>
    </div>
</template>

<script>
import Fabric from '@johannes-z/office-ui-fabric-vue';
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
            preview: ''
        }
    },
    components: {
        Fabric
    },
    methods: {
        getQuery: function() {
            let str = JSON.stringify(this.message);
            return encodeURIComponent(str);
        },
        updateQuery: function() {
            this.preview = window.location.href + "ity?q=" + this.getQuery();
            document.getElementById('iframe-preview').contentWindow.location.reload(true);
        },
        reloadPreview: function() {
            document.getElementById('iframe-preview').contentWindow.location.reload(true);
        }
    }
}
</script>