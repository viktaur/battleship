<template>
  <div class="main-grid">
    <OwnBoard/>
    <OpponentBoard/>
    <div class="board boats own-boats" data-tilt>
      <h1 class="boats-text">OWN BOATS</h1>
      <PurpleBoat class="boat"/>
      <RedBoat class="boat"/>
      <RedBoat class="boat"/>
      <OrangeBoat class="boat"/>
      <YellowBoat class="boat"/>
    </div>
    <div class="board boats opponent-boats">
      <h1 class="boats-text">OPPONENT BOATS</h1>
      <PurpleBoat class="boat"/>
      <RedBoat class="boat"/>
      <RedBoat class="boat"/>
      <OrangeBoat class="boat"/>
      <YellowBoat class="boat"/>
    </div>
    <div class="panel">
      <div class="board"></div>
      <div class="board" data-tilt data-tilt-glare></div>
      <div class="board"></div>
      <div class="board"></div>
    </div>
  </div>
</template>

<script>
  import OwnBoard from './components/OwnBoard.vue'
  import OpponentBoard from './components/OpponentBoard.vue'
  import PurpleBoat from './components/PurpleBoat.vue'
  import OrangeBoat from './components/OrangeBoat.vue'
  import RedBoat from './components/RedBoat.vue'
  import YellowBoat from './components/YellowBoat.vue'
  import VanillaTilt from 'vanilla-tilt';

  export default {
    name: 'App',
    components: {
      OwnBoard,
      OpponentBoard,
      PurpleBoat,
      RedBoat,
      OrangeBoat,
      YellowBoat,
      // VanillaTilt,
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
  gap: 50px;
}

.board {
  background: rgba(236, 240, 241, 0.2);
  /* backdrop-filter: blur(100px); */
  border-radius: 20px;
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

.boats {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
}

.boats-text {
  font-family: 'Roboto Mono', monospace;
  font-size: 36px;
  text-align: center;
  color: #ECF0F1;
}

.own-boats {
  grid-column: 1/2;
  grid-row: 2/3;
  align-items: baseline;
}

.opponent-boats {
  grid-column: 2/3;
  grid-row: 2/3;
  align-items: end;
  /* padding-right: 30px; */
}

.boat {
  /* height: 30px; */
  width: auto;
}

.panel {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

a, .green {
  text-decoration: none;
  color: rgb(148, 189, 0);
  transition: 0.4s;
}
</style>
