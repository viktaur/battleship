<template>
    <div class="board own-board wrapper">
        <div class=""></div>
            <div class="letter">A</div>
            <div class="letter">B</div>
            <div class="letter">C</div>
            <div class="letter">D</div>
            <div class="letter">E</div>
            <div class="letter">F</div>
            <div class="letter">G</div>
            <div class="letter">H</div>
            <div class="letter">I</div>
            <div class="letter">J</div>
        <template v-for="m in 10" :key="m">
            <div class="number">{{m}}</div>
                <div class="cell" :class="{ 'bottom-border': m % 10 != 0, 'right-border': n % 10 != 0}" v-for="n in 10" :key="n"></div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "OwnBoard",
        components: {
        }
    }
</script>

<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        grid-template-rows: repeat(11, 1fr);
        padding-top: 5px;
        padding-left: 5px;
        padding-bottom: 20px;
        padding-right: 20px;
    }
    
    .letter, .number {
        font-family: 'Roboto Mono', monospace;
        font-size: 16px;
        text-align: center;
        color: #BDC3C7;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .bottom-border {
        border-bottom: 2px solid #BDC3C7;
    }

    .right-border {
        border-right: 2px solid #BDC3C7;
    }

</style>