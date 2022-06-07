<template>
    <div class="board own-board wrapper">
        <div class=""></div>
        <div v-for="i in 10" :key="i" class="number">{{i}}</div>
        <template v-for="m in 10" :key="m">
            <div class="letter">{{letters[m - 1]}}</div>
            <div id="{{m-1}}{{n-1}}" class="cell" :class="{ 'bottom-border': m % 10 != 0, 'right-border': n % 10 != 0}" v-for="n in 10" :key="n">
                <!-- <h1 class="letter" v-if="cells_clicked[m-1][n-1] == 1">X</h1>
                <h1 v-else></h1> -->
                <!-- {{ cells_clicked[m-1][n-1] }} -->
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "OwnBoard",
        data() {
            return {
                letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            }
        },
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