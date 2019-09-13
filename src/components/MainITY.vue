<template>
    <!-- https://developer.microsoft.com/en-us/fabric#/styles/web/layout -->
    <div class="ms-Grid" dir="ltr">
        <div class="ms-Grid-row">
            <div class="emoji item ms-Grid-col ms-hiddenSm ms-md3 ms-lg2">{{ message.emoji1 }}</div>

            <div class="main-content item ms-Grid-col ms-sm12 ms-md6 ms-lg8">
                <div class="i-told-you">
                    <h1 class="main-message">{{ message.main }}</h1>
                    <h2 class="comp-message">{{ message.comp }}</h2>

                    <div class="opt-message">
                        <p>{{ message.msg }}</p>
                    </div>
                </div>
            </div>

            <div class="emoji item ms-Grid-col ms-hiddenMdUp ms-sm6">{{ message.emoji1 }}</div>
            <div class="emoji item ms-Grid-col ms-sm6 ms-md3 ms-lg2">{{ message.emoji2 }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainITY",
    props: ['pv', 'pmsg'],
    data: () => {
        return {
            message: {
                main: '',
                comp: '',
                msg: '',

                emoji1: '',
                emoji2: ''
            }
        }
    },
    created: function() {
        // http://localhost:8080/#/ity?q=%7B%22main%22%3A%22Hola%22,%22comp%22%3A%22Mundo%22,%22msg%22%3A%22Lorem%20ipsum,%20dolor%20sit%20amet%20consectetur%20adipisicing%20elit.%20Alias%20sit%20vitae%20aliquam%20mollitia%20eius,%20animi%20ipsam,%20perspiciatis%20repellendus%20repudiandae%20totam%20earum%20maxime%20repellat%20consectetur,%20eligendi%20iste%20itaque%21%20Ullam,%20mollitia%20architecto.%22,%22emoji1%22%3A%22%F0%9F%98%81%22,%22emoji2%22%3A%22%F0%9F%98%8E%22%7D
        let p = '';
        if(this.pv !== undefined) p = this.pv;
        else p = window.location.href.split('q=')[1];

        if(p) this.message = JSON.parse(decodeURIComponent(p));
    },
    watch: {
        pmsg: function() {
            if(this.pmsg !== undefined) {
                this.message = JSON.parse(this.pmsg);
            } else {
                console.log("No message");
            }
        }
    }
}
</script>

<style>
.item {
    /* background-color: gray; */
}

.main-message {

}

.comp-message {

}

.emoji {
    padding-top:35px;
    font-size: 60px;
}

.opt-message > p {
    text-align: justify;
    margin-left: 10px;
    margin-right: 10px;
}
</style>