<template>
  <div class="main-grid">
    <OwnBoard/>
    <PlayersInfo/>
    <ControlPanel/>
    <Console/>
    <OpponentBoard/>
  </div>
</template>

<script>
  import OwnBoard from './components/boards/OwnBoard.vue'
  import PlayersInfo from './components/boards/PlayersInfo.vue'
  import ControlPanel from './components/boards/ControlPanel.vue'
  import Console from './components/boards/Console.vue'
  import OpponentBoard from './components/boards/OpponentBoard.vue'

  export default {
    name: 'App',
    components: {
      OwnBoard,
      PlayersInfo,
      ControlPanel,
      Console,
      OpponentBoard,
    },
  }
</script>


<style>
@import './assets/base.css';

#app {
  padding: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-grid {
  display: grid;
  grid-template-rows: repeat(2, 400px);
  grid-template-columns: repeat(4, 400px);
  gap: 30px;
}

.board {
  background: rgba(236, 240, 241, 0.2);
  /* backdrop-filter: blur(100px); */
  border-radius: 15px;
}

.own-board {
  grid-column: 1/2;
  grid-row: 1/2;
  /* height: 400px; */
  /* width: 400px; */
}

.opponent-board {
  grid-column: 3/5;
  grid-row: 1/3;
  /* height: 800px; */
  /* width: 800px; */
}

.boats-board {
  grid-column: 1/2;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
}

.boats {
  display: flex;
  flex-direction: column;
  gap: 30px;

}

.boats-text {
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  text-align: center;
  color: #ECF0F1;
}

.own-boats {
  /* grid-column: 1/2;
  grid-row: 2/3; */
  align-items: baseline;
}

.opponent-boats {
  /* grid-column: 2/3;
  grid-row: 2/3; */
  align-items: end;
  /* padding-right: 30px; */
}

.boat {
  height: 26px;
  width: auto;
}

a, .green {
  text-decoration: none;
  color: rgb(148, 189, 0);
  transition: 0.4s;
}
</style>
