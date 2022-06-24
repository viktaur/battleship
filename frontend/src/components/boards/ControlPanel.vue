<template>
    <div class="panel">
        <div class="board icon-board play-button"><font-awesome-icon class="icon" icon="play" v-on:click="sendMessage()"/></div>
        <div class="board icon-board name"><font-awesome-icon class="icon" icon="pen" /></div>
        <div class="board icon-board about"><font-awesome-icon class="icon" icon="info" /></div>
        <div class="board icon-board sound"><font-awesome-icon class="icon" icon="volume-high" /></div>
        <div class="board icon-board effects"><font-awesome-icon class="icon" icon="bolt" /></div>
        <div class="board icon-board theme"><font-awesome-icon class="icon" icon="moon" /></div>
        <div class="board text-panel prompt-panel"><div class="text-box prompt-box">GAME READY TO START</div></div>
        <div class="board text-panel input-panel"><input class="text-box input-box" /></div>
        <div class="board icon-board ok"><font-awesome-icon class="icon" icon="check" /></div>
        <div class="board icon-board cancel"><font-awesome-icon class="icon" icon="xmark" /></div>
    </div>
</template>

<script>

    import socket from '../../communicator'

    function sendMessage() {
        socket.send("i touched play");
    }

    export default {
        name: 'ControlPanel',
        methods: {
            sendMessage,
        },
        data() {
            return {
                socket,
            }
        }
    }
</script>

<style scoped>

    .panel {
        display: grid;
        grid-template-rows: repeat(6,1fr);
        grid-template-columns: repeat(6, 1fr);
        gap: 15px;
    }

    .icon-board {
        /* padding: 25px; */
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
    }

    .icon {
        color:#ECF0F1;
        height: 25px;
    }

    .icon-board:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    .text-panel {
        padding: 15px;
    }

    .prompt-panel {
        grid-row: 2/5;
        grid-column: 1/7;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text-box {
        color: #ECF0F1;
        font-family: 'Roboto Mono', monospace;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        border-radius: 10px;
        background: rgba(236, 240, 241, 0.1);
    }

    .prompt-box {
        font-size: 40px;
        text-align: center;
    }

    .input-panel {
        grid-row: 5/7;
        grid-column: 1/6;
    }

    .input-box {
        font-size: 36px;
        border-style: none;
        padding-left: 25px;
    }

    .input-box:focus {
        outline: none;
    }

    .ok {
        grid-row: 5/6;
        grid-column: 6/7;
    }

    .cancel {
        grid-row: 6/7;
        grid-column: 6/7;
    }

</style>
