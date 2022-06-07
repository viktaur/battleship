<template>
    <div class="board opponent-board wrapper">
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
        name: "OpponentBoard",
        components: {
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