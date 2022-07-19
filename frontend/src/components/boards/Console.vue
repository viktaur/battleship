<template>
    <div class="board console-board">
      <div class="top title">CONSOLE</div>
      <div class="top console-history"></div>
      <input class="top console-input" type="text" autofocus spellcheck="false" v-on:keyup.enter="submit">
      <div class="top enter-button" @click="submit"><font-awesome-icon class="icon" icon="right-to-bracket" /></div>
    </div>
</template>

<script>
    import { communicate, newMessageEvent } from '../../communicator';

    var inputBox; // the input box
    var historyContainer; // the div containing an input and an output (if received)

    window.addEventListener(newMessageEvent.type, (event) => {
        displayOutput(event.detail);
    })

    // We add to both elements their respective classes

    function displayInput(inputStr) {
        const inputLogElement = document.createElement("div");
        inputLogElement.classList.add("console-input-log"); 

        inputLogElement.textContent = `> ${inputStr}`;
        historyContainer.append(inputLogElement);
    }

    function displayOutput(outputStr) {
        const outputLogElement = document.createElement("div");
        outputLogElement.classList.add("console-output-log");

        outputLogElement.textContent = `> ${outputStr}`;
        historyContainer.append(outputLogElement);
    }

    function clearBox() {
        inputBox.value = "";
    }

    function clearHistory() {
        while (historyContainer.hasChildNodes()) {
            historyContainer.removeChild(historyContainer.firstChild);
        }
    }

    function submit() {
        inputBox = this.$el.querySelector(".console-input");
        historyContainer = this.$el.querySelector(".console-history");

        if (inputBox.value.toUpperCase() === "CLEAR") {
            clearHistory();
        // if the input is empty
        } else if (inputBox.value.toUpperCase() === "") {
            displayInput("");
        } else {
            execute(inputBox.value);
            displayInput(inputBox.value);
        }
        
        clearBox();
        inputBox.focus();
        historyContainer.scrollTop = historyContainer.scrollHeight;
    }

    async function execute(message) {
        return communicate("EX " + message);
    }

    export default {
        name: 'Console',
        methods: {
            submit,
            displayInput,
            displayOutput
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