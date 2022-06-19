<template>
    <div class="board console-board">
      <div class="top title">CONSOLE</div>
      <div class="top console-history">
        <!-- <div class="console-input-log">1 + 2 + 3</div>
        <div class="console-output-log">6</div> -->
      </div>
      <input class="top console-input" type="text" autofocus spellcheck="false" v-on:keyup.enter="submit">
      <div class="top enter-button" @click="submit"><font-awesome-icon class="icon" icon="right-to-bracket" /></div>
    </div>
</template>

<script>
    export default {
        name: 'Console',
        methods: {
            submit() {
                const input = this.$el.querySelector(".console-input"); // the input box
                const historyContainer = this.$el.querySelector(".console-history"); // the div containing an input and an output (if received)
                
                const inputLogElement = document.createElement("div"); // the div containing the formatted input
                const outputLogElement = document.createElement("div"); // the div containing the output received from the server (if received)

                // We add to both elements their respective classes
                inputLogElement.classList.add("console-input-log"); 
                outputLogElement.classList.add("console-output-log");

                inputLogElement.textContent = `> ${input.value}`; // formatted input
                outputLogElement.textContent = "HAHAHAHHA"; // TODO: output that will come from the server

                historyContainer.append(inputLogElement, outputLogElement); // we append an input and an output to the history container

                console.log(input.value);
                input.value = ""; // we clear the input box
                input.focus(); // we keep it focused
                historyContainer.scrollTop = historyContainer.scrollHeight;
            }
        }
    }
</script>

<style scoped>
    .console-board {
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: repeat(6, 1fr);
        gap: 15px;
        padding: 15px;
    }

    .top {
        background: rgba(236, 240, 241, 0.1);
        border-radius: 10px;
        font-family: 'Roboto Mono', monospace;
        color: #ECF0F1;
    }

    .title {
        grid-row: 1/2;
        grid-column: 1/7;
        font-size: 24px;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .console-history {
        grid-row: 2/6;
        grid-column: 1/7;
        font-family: 'Roboto Mono', monospace;
        font-size: 16px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow-y: auto;
    }

    .console-input {
        grid-row: 6/7;
        grid-column: 1/6;
        border-style: none;
        font-size: 16px;
        padding-left: 20px;
    }

    .console-input:focus {
        outline: none;
    }

    .enter-button {
        grid-row: 6/7;
        grid-column: 6/7;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        height: 20px;
    }

    .console-input-log,
    .console-output-log {
        box-sizing: border-box;
        padding-top: 6px;
    }

    .console-input-log:hover,
    .console-output-log:hover {
        background: rgba(255, 255, 255, 0.03);
    }

</style>