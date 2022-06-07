<template>
    <div class="board console-board">
      <div class="top text">CONSOLE</div>
      <div class="top screen">
        <p>$ cd </p>
        <p>$ ls </p>
        <p>total 1996
drwxr-xr-x    3 viktaur viktaur    4096 Mar 16 16:38  Applications
drwxr-xr-x    4 viktaur viktaur    4096 May 18 23:09 'Calibre Library'
drwxr-xr-x    3 viktaur viktaur    4096 May 18 23:33  CLionProjects
drwxr-xr-x    3 viktaur viktaur    4096 May  9 10:24  DataGripProjects
drwxr-xr-x   25 viktaur viktaur    4096 May 18 19:25  Desktop
drwxr-xr-x   31 viktaur viktaur    4096 May 22 19:03  Documents</p>
        <p>$ </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Console',
    }
</script>

<style scoped>
    .console-board {
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        gap: 20px;
        padding: 15px;
    }

    .top {
        background: rgba(236, 240, 241, 0.1);
        border-radius: 10px;
    }

    .text {
        grid-row: 1/2;
        font-family: 'Roboto Mono', monospace;
        font-size: 24px;
        color: #ECF0F1;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .screen {
        grid-row: 2/7;
        font-family: 'Roboto Mono', monospace;
        font-size: 16px;
        color: #ECF0F1;
        padding: 10px;
        /* overflow: scroll; */
    }

</style>