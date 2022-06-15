<template>
    <div class="board console-board">
      <div class="top title">CONSOLE</div>
      <div class="top console-history">
        <div class="console-input-log">1 + 2 + 3</div>
        <div class="console-output-log">6</div>
      </div>
      <input class="top console-input" type="text" autofocus spellcheck="false">
      <div class="top enter"><font-awesome-icon class="icon" icon="right-to-bracket" /></div>
    </div>
</template>

<script>

    const consoleInput = document.querySelector(".console-input");
    const historyContainer = document.querySelector(".console-history");

    function addResult(inputAsString, output) {
        // const outputAsString = output instanceof Array ? `[${output.join(', ')}]` : output.toString();
        const outputAsString = output.toString();
        const inputLogElement = document.createElement("div");
        const outputLogElement = document.createElement("div");

        inputLogElement.classList.add("console-input-log");
        outputLogElement.classList.add("console-output-log");

        inputLogElement.textContent = `> ${inputAsString}`;
        outputLogElement.textContent = outputAsString;

        historyContainer.append(inputLogElement, outputLogElement);
    };

    // consoleInput.addEventListener("keyup", e => {
    //     const code = consoleInput.value.trim(); // trim removes whitespace from beginning and end
    //     console.log(code);

        // if (code.length === 0) {
        //     return;
        // }
    // });

    export default {
        name: 'Console',
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

    .enter {
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