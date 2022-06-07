<template>
    <div class="board opponent-board wrapper">
        <div class=""></div>
        <div v-for="i in 10" :key="i" class="number">{{i}}</div>
        <template v-for="m in 10" :key="m">
            <div class="letter">{{letters[m - 1]}}</div>
            <div id="{{m-1}}{{n-1}}" class="cell" :class="{ 'bottom-border': m % 10 != 0, 'right-border': n % 10 != 0}" v-for="n in 10" :key="n" @click="cells_clicked[m-1][n-1] = 1">
                <h1 class="letter" v-if="cells_clicked[m-1][n-1] == 1">X</h1>
                <h1 v-else></h1>
                <!-- {{ cells_clicked[m-1][n-1] }} -->
            </div>
        </template>
    </div>
</template>

<script>

    var cells_clicked = Array(10);
    for (var i=0; i<10; i++) {
        cells_clicked[i] = Array(10).fill(0);
    }

    export default {
        name: "OpponentBoard",
        data() {
            return {
                letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
                cells_clicked,
            }
        },
        components: {
        },
        methods: {

        }
    }
</script>

<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        grid-template-rows: repeat(11, 1fr);
        padding-bottom: 30px;
        padding-right: 30px;
    }
    
    .letter, .number {
        font-family: 'Roboto Mono', monospace;
        font-size: 28px;
        text-align: center;
        color: #ECF0F1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .bottom-border {
        border-bottom: 3px solid #ECF0F1;
    }

    .right-border {
        border-right: 3px solid #ECF0F1;
    }

</style>