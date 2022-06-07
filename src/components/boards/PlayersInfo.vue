<template>
    <div class="board boats-board">
      <div class="own-boats boats">
        <h1 class="boats-text">Player1</h1>
        <FiveBoat class="boat"/>
        <FourBoat class="boat"/>
        <ThreeBoat class="boat"/>
        <ThreeBoat class="boat"/>
        <TwoBoat class="boat"/>
      </div>
      <div class="opponent-boats boats">
        <h1 class="boats-text">Player2</h1>
        <FiveBoat class="boat"/>
        <FourBoat class="boat"/>
        <ThreeBoat class="boat"/>
        <ThreeBoat class="boat"/>
        <TwoBoat class="boat"/>
      </div>
    </div>
</template>

<script>

    import FiveBoat from '../boats/FiveBoat.vue'
    import FourBoat from '../boats/FourBoat.vue'
    import ThreeBoat from '../boats/ThreeBoat.vue'
    import TwoBoat from '../boats/TwoBoat.vue'


    export default {
        name:'PlayersInfo',
        components: {
            FiveBoat,
            FourBoat,
            ThreeBoat,
            TwoBoat
        }
    }
</script>
