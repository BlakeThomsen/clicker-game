let gameData = {
  shots: 0,
  shotsPerClick: 1
};

let clickUpgrades = {
  fireRate: {
    price: 10,
    quantity: 0,
    multiplier: 2,
  },
  bumpStock: {
    price: 100,
    quantity: 0,
    multiplier: 5
  },
  autoSear: {
    price: 300,
    quantity: 0,
    multiplier: 10
  }
};

let automaticUpgrades = {
  machineGun: {
    price: 350,
    quantity: 0,
    multiplier: 20
  }
};

function shoot() {
  gameData.shots += gameData.shotsPerClick
  update();
}

function buyFireRate() {
  if (gameData.shots >= clickUpgrades.fireRate.price) {
    gameData.shots -= clickUpgrades.fireRate.price
    clickUpgrades.fireRate.quantity++
    gameData.shotsPerClick += clickUpgrades.fireRate.multiplier
    clickUpgrades.fireRate.price *= 2
    update();
  }
}

function buyBumpStock() {
  if (gameData.shots >= clickUpgrades.bumpStock.price) {
    gameData.shots -= clickUpgrades.bumpStock.price
    clickUpgrades.bumpStock.quantity++
    gameData.shotsPerClick += clickUpgrades.bumpStock.multiplier
    clickUpgrades.bumpStock.price *= 3
    update();
  }
}

function buyAutoSear() {
  if (gameData.shots >= clickUpgrades.autoSear.price) {
    gameData.shots -= clickUpgrades.autoSear.price
    clickUpgrades.autoSear.quantity++
    gameData.shotsPerClick += clickUpgrades.autoSear.multiplier
    clickUpgrades.autoSear.price *= 4
    update();
  }
}


function buyMG() {
  if (gameData.shots >= automaticUpgrades.machineGun.price) {
    gameData.shots -= automaticUpgrades.machineGun.price
    automaticUpgrades.machineGun.quantity++
    gameData.shotsPerClick += automaticUpgrades.machineGun.multiplier
    automaticUpgrades.machineGun.price *= 3
    update();
  }
}


function update() {
  document.getElementById("shots").innerText = gameData.shots.toString();
  document.getElementById("firerate").innerHTML = "(Level " + clickUpgrades.fireRate.quantity + ") Cost: " + clickUpgrades.fireRate.price + " Shots " + "- Increases Shots Per Click By: " + clickUpgrades.fireRate.multiplier
  document.getElementById("bumpstock").innerHTML = "(Level " + clickUpgrades.bumpStock.quantity + ") Cost: " + clickUpgrades.bumpStock.price + " Shots " + "- Increases Shots Per Click By: " + clickUpgrades.bumpStock.multiplier
  document.getElementById("autosear").innerHTML = "(Level " + clickUpgrades.autoSear.quantity + ") Cost: " + clickUpgrades.autoSear.price + " Shots " + "- Increases Shots Per Click By: " + clickUpgrades.autoSear.multiplier
  document.getElementById("mg").innerHTML = "(Level " + automaticUpgrades.machineGun.quantity + ") Cost: " + automaticUpgrades.machineGun.price + " Shots " + "- Increases Shots Per Click By: " + automaticUpgrades.machineGun.multiplier
}

update();