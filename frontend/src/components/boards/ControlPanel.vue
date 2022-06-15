<template>
    <div class="panel">
      <div class="board icon-board play-button"><font-awesome-icon class="icon" icon="play" /></div>
      <div class="board icon-board name"><font-awesome-icon class="icon" icon="pen" /></div>
      <div class="board icon-board about"><font-awesome-icon class="icon" icon="info" /></div>
      <div class="prompt-panel board"><div class="prompt-box">GAME READY TO START</div></div>
      <div class="board icon-board sound"><font-awesome-icon class="icon" icon="volume-high" /></div>
      <div class="board icon-board effects"><font-awesome-icon class="icon" icon="bolt" /></div>
      <div class="board icon-board theme"><font-awesome-icon class="icon" icon="moon" /></div>
    </div>
</template>

<script>
    export default {
        name: 'ControlPanel',
    }
</script>

<style scoped>

    .panel {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
    }

    .prompt-panel {
        grid-row: 3/4;
        grid-column: 1/4;
        font-family: 'Roboto Mono', monospace;
        font-size: 24px;
        color: #ECF0F1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
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
        height: 50px;
    }

    .icon-board:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    .prompt-box {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        border-radius: 10px;
        background: rgba(236, 240, 241, 0.1);
    }
</style>
