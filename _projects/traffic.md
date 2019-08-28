---
title: Traffic
description: A visual simulation of the effects of braking on Traffic.
text: This is a visual simulation of the effects of braking on traffic. Each cross represents a car.  Press any key to cause the lead cars to brake. Cars further away from the center brake earlier and less aggressively.
year: 2017
images: 0

wide: <img src="images/traffic/wide.png">

background: "#334cfb"
dark: true
order: 10
---

<script src="traffic.js"></script>
<style>
  .car {
      position: absolute;
  }

  .car::after {
      content: '+';
  }
</style>
