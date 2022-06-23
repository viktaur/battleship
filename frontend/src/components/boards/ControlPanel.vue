<template>
    <div class="panel">
      <div class="board icon-board play-button"><font-awesome-icon class="icon" icon="play" v-on:click="sendMessage()"/></div>
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
          data () {
    return {
      textarea: '',
      message: '',
      count: 0
    }
  },
        sockets: {
            connect () {
            console.log('connected to chat server')
            },
            count (val) {
            this.count = val.count
            },
            message (data) { // this function gets triggered once a socket event of `message` is received
            this.textarea += data + '\n' // append each new message to the textarea and add a line break
            }
        },
        methods: {
            sendMessage() {
                // this will emit a socket event of type `function`
                this.$socket.emit('message', this.message) // send the content of the message bar to the server
                this.message = '' // empty the message bar
            }
        }
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
