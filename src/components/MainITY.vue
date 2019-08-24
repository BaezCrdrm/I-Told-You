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
    data: () => {
        return {
            message: {
                main: "Te dije que haría la aplicación",
                comp: "Le veo bastante utilidad 😬",
                msg: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sit vitae aliquam mollitia eius, animi ipsam, perspiciatis repellendus repudiandae totam earum maxime repellat consectetur, eligendi iste itaque! Ullam, mollitia architecto.",

                emoji1: "😁",
                emoji2: "😎"
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