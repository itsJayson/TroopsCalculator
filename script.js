var infantry = {
  tier1: {
    Wood: 50,
    Food: 100,
  },
  tier2: {
    Wood: 100,
    Food: 200,
  },
  tier3: {
    Wood: 200,
    Food: 400,
  },
  tier4: {
    Wood: 400,
    Food: 800,
  },
  tier5: {
    Wood: 800,
    Food: 1600,
  },
};

var archers = {
  tier1: {
    Wood: 80,
    Food: 120,
  },
  tier2: {
    Wood: 160,
    Food: 240,
  },
  tier3: {
    Wood: 320,
    Food: 480,
  },
  tier4: {
    Wood: 640,
    Food: 960,
  },
  tier5: {
    Wood: 1280,
    Food: 1920,
  },
};
var cavalry = {
  tier1: {
    Wood: 60,
    Food: 140,
    gold: 10,
  },
  tier2: {
    Wood: 120,
    Food: 280,
    gold: 20,
  },
  tier3: {
    Wood: 240,
    Food: 560,
    gold: 40,
  },
  tier4: {
    Wood: 480,
    Food: 1120,
    gold: 80,
  },
  tier5: {
    Wood: 960,
    Food: 2240,
    gold: 160,
  },
};

var siege = {
  tier1: {
    Wood: 100,
    Food: 80,
  },
  tier2: {
    Wood: 200,
    Food: 160,
  },
  tier3: {
    Wood: 400,
    Food: 320,
  },
  tier4: {
    Wood: 800,
    Food: 640,
  },
  tier5: {
    Wood: 1600,
    Food: 1280,
  },
};

var speedMultiplierInfantry = {
  tier1: 10,
  tier2: 20,
  tier3: 40,
  tier4: 80,
  tier5: 160,
};
var speedMultiplierArchers = {
  tier1: 12,
  tier2: 24,
  tier3: 48,
  tier4: 96,
  tier5: 192,
};
var speedMultiplierCavalry = {
  tier1: 15,
  tier2: 30,
  tier3: 60,
  tier4: 120,
  tier5: 240,
};
var speedMultiplierSiege = {
  tier1: 18,
  tier2: 36,
  tier3: 72,
  tier4: 144,
  tier5: 288,
};

var troopType = document.getElementById("troopType");
var tier = document.getElementById("troopTier");
var numberofTroops = document.getElementById("numTroops");
var speedMultiplier = document.getElementById("multiplier");
var calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {
  var type = troopType.value;
  var tierValue = tier.value;
  var numTroops = numberofTroops.value;
  var speed = speedMultiplier.value;

  var resources = {};
  var timeTroops = {};
  if (type === "Infantry") {
    resources = infantry["tier" + tierValue];
    timeTroops = speedMultiplierInfantry["tier" + tierValue];
  } else if (type === "Archers") {
    resources = archers["tier" + tierValue];
    timeTroops = speedMultiplierArchers["tier" + tierValue];
  } else if (type === "Cavalry") {
    resources = cavalry["tier" + tierValue];
    timeTroops = speedMultiplierCavalry["tier" + tierValue];
  } else if (type === "Siege") {
    resources = siege["tier" + tierValue];
    timeTroops = speedMultiplierSiege["tier" + tierValue];
  } else {
    alert("Try Again!");
    return;
  }

  if (!resources) {
    alert("Invalid Tier");
    return;
  }

  var totalResources = {};
  for (var resource in resources) {
    totalResources[resource] = resources[resource] * numTroops;
  }

  var resultResources = "";
  var totalTime = timeTroops * numTroops;
  var adjustedTime = totalTime * (1 - speed / 100);
  for (var resource in totalResources) {
    resultResources +=
      resource +
      ": " +
      totalResources[resource]
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      " ";
  }

  document.getElementById("totalResourcesRequired").innerHTML = resultResources;
  document.getElementById("baseTrainingTime").innerHTML =
    totalTime.toLocaleString() + " seconds";
  document.getElementById("adjustedTrainingTime").innerHTML =
    adjustedTime.toLocaleString() + " seconds";
});

var openInfantry = document.getElementById("infantryimg");
var openArchers = document.getElementById("archerimg");
var openCavalry = document.getElementById("cavalryimg");
var openSiege = document.getElementById("siegeimg");

openInfantry.addEventListener("click", function () {
  var modal = document.getElementById("stats");
  var bootstrapModal = new bootstrap.Modal(modal);

  var troopType = document.getElementById("typeModal");
  troopType.innerHTML = "Infantry";

  bootstrapModal.show();

  var submit = document.getElementById("submitModal");
  var foodModalPercent = document.querySelector(".foodModalPercent");
  var woodModalPercent = document.querySelector(".woodModalPercent");
  var goldModalPercent = document.querySelector(".goldModalPercent");
  var progressBarGold = document.querySelector(".progress-barGold");
  var progressBarWood = document.querySelector(".progress-barWood");
  var progressBarFood = document.querySelector(".progress-barFood");

  progressBarWood.style.width = "6.25%";
  progressBarFood.style.width = "6.25%";
  progressBarGold.style.width = "0%";
  woodModalPercent.textContent = "50";
  foodModalPercent.textContent = "100";
  goldModalPercent.textContent = "0";
  submit.addEventListener("click", function () {
    var progressBarWood = document.querySelector(".progress-barWood");

    var troopTier = document.getElementById("troopTierModal");

    if (troopTier.value === "1") {
      progressBarWood.style.width = "6.25%";
      woodModalPercent.textContent = "50";
      progressBarFood.style.width = "6.25%";
      foodModalPercent.textContent = "100";
      goldModalPercent.textContent = "0";
      progressBarGold.style.width = "0%";
    } else if (troopTier.value === "2") {
      progressBarWood.style.width = "12.5%";
      woodModalPercent.textContent = "100";
      progressBarFood.style.width = "12.5%";
      foodModalPercent.textContent = "200";
      goldModalPercent.textContent = "0";
      progressBarGold.style.width = "0%";
    } else if (troopTier.value === "3") {
      progressBarWood.style.width = "25%";
      woodModalPercent.textContent = "200";
      progressBarFood.style.width = "25%";
      foodModalPercent.textContent = "400";
      goldModalPercent.textContent = "0";
      progressBarGold.style.width = "0%";
    } else if (troopTier.value === "4") {
      progressBarWood.style.width = "50%";
      woodModalPercent.textContent = "400";
      progressBarFood.style.width = "50%";
      foodModalPercent.textContent = "800";
      goldModalPercent.textContent = "0";
      progressBarGold.style.width = "0%";
    } else if (troopTier.value === "5") {
      progressBarWood.style.width = "100%";
      woodModalPercent.textContent = "800";
      progressBarFood.style.width = "100%";
      foodModalPercent.textContent = "1600";
      goldModalPercent.textContent = "0";
      progressBarGold.style.width = "0%";
    }
  });
});

openArchers.addEventListener("click", function () {
  var modal = document.getElementById("stats");
  var bootstrapModal = new bootstrap.Modal(modal);

  var troopType = document.getElementById("typeModal");
  troopType.innerHTML = "Archers";

  bootstrapModal.show();

  var submit = document.getElementById("submitModal");
  var foodModalPercent = document.querySelector(".foodModalPercent");
  var woodModalPercent = document.querySelector(".woodModalPercent");
  var progressBarGold = document.querySelector(".progress-barGold");
  var goldModalPercent = document.querySelector(".goldModalPercent");
  var progressBarWood = document.querySelector(".progress-barWood");
  var progressBarFood = document.querySelector(".progress-barFood");

  progressBarWood.style.width = "6.25%";
  progressBarFood.style.width = "6.25%";
  goldModalPercent.textContent = "0";
  progressBarGold.style.width = "0%";
  woodModalPercent.textContent = "80";
  foodModalPercent.textContent = "120";
  submit.addEventListener("click", function () {
    var progressBarWood = document.querySelector(".progress-barWood");

    var troopTier = document.getElementById("troopTierModal");
    var progressBarWood = document.querySelector(".progress-barWood");
    var progressBarFood = document.querySelector(".progress-barFood");

    if (troopTier.value === "1") {
      progressBarWood.style.width = "6.25%";
      woodModalPercent.textContent = "80";
      progressBarFood.style.width = "6.25%";
      foodModalPercent.textContent = "120";
      goldModalPercent.textContent = "0";
      progressBarGold.style.width = "0%";
    } else if (troopTier.value === "2") {
      progressBarWood.style.width = "12.5%";
      woodModalPercent.textContent = "160";
      progressBarFood.style.width = "12.5%";
      foodModalPercent.textContent = "240";
      goldModalPercent.textContent = "0";
      progressBarGold.style.width = "0%";
    } else if (troopTier.value === "3") {
      progressBarWood.style.width = "25%";
      woodModalPercent.textContent = "320";
      progressBarFood.style.width = "25%";
      foodModalPercent.textContent = "480";
      goldModalPercent.textContent = "0";
      progressBarGold.style.width = "0%";
    } else if (troopTier.value === "4") {
      progressBarWood.style.width = "50%";
      woodModalPercent.textContent = "640";
      progressBarFood.style.width = "50%";
      foodModalPercent.textContent = "960";
      goldModalPercent.textContent = "0";
      progressBarGold.style.width = "0%";
    } else if (troopTier.value === "5") {
      progressBarWood.style.width = "100%";
      woodModalPercent.textContent = "1280";
      progressBarFood.style.width = "100%";
      foodModalPercent.textContent = "1920";
      goldModalPercent.textContent = "0";
      progressBarGold.style.width = "0%";
    }
  });
});

openCavalry.addEventListener("click", function () {
  var modal = document.getElementById("stats");
  var bootstrapModal = new bootstrap.Modal(modal);

  var troopType = document.getElementById("typeModal");
  troopType.innerHTML = "Cavalry";

  bootstrapModal.show();

  var submit = document.getElementById("submitModal");
  var foodModalPercent = document.querySelector(".foodModalPercent");
  var woodModalPercent = document.querySelector(".woodModalPercent");
  var goldModalPercent = document.querySelector(".goldModalPercent");
  var progressBarGold = document.querySelector(".progress-barGold");
  var progressBarWood = document.querySelector(".progress-barWood");
  var progressBarFood = document.querySelector(".progress-barFood");

  progressBarWood.style.width = "6.25%";
  progressBarFood.style.width = "6.25%";
  woodModalPercent.textContent = "60";
  foodModalPercent.textContent = "140";
  goldModalPercent.textContent = "10";
  progressBarGold.style.width = "6.25%";
  submit.addEventListener("click", function () {
    var progressBarWood = document.querySelector(".progress-barWood");

    var troopTier = document.getElementById("troopTierModal");
    var progressBarWood = document.querySelector(".progress-barWood");
    var progressBarFood = document.querySelector(".progress-barFood");
    if (troopTier.value === "1") {
      progressBarWood.style.width = "6.25%";
      woodModalPercent.textContent = "60";
      progressBarFood.style.width = "6.25%";
      foodModalPercent.textContent = "140";
      progressBarGold.style.width = "6.25%";
      goldModalPercent.textContent = "10";
    } else if (troopTier.value === "2") {
      progressBarWood.style.width = "12.5%";
      woodModalPercent.textContent = "120";
      progressBarFood.style.width = "12.5%";
      foodModalPercent.textContent = "280";
      progressBarGold.style.width = "12.5%";
      goldModalPercent.textContent = "20";
    } else if (troopTier.value === "3") {
      progressBarWood.style.width = "25%";
      woodModalPercent.textContent = "240";
      progressBarFood.style.width = "25%";
      foodModalPercent.textContent = "560";
      progressBarGold.style.width = "25%";
      goldModalPercent.textContent = "40";
    } else if (troopTier.value === "4") {
      progressBarWood.style.width = "50%";
      woodModalPercent.textContent = "480";
      progressBarFood.style.width = "50%";
      foodModalPercent.textContent = "1120";
      progressBarGold.style.width = "50%";
      goldModalPercent.textContent = "80";
    } else if (troopTier.value === "5") {
      progressBarWood.style.width = "100%";
      woodModalPercent.textContent = "960";
      progressBarFood.style.width = "100%";
      foodModalPercent.textContent = "2240";
      progressBarGold.style.width = "100%";
      goldModalPercent.textContent = "160";
    }
  });
});

openSiege.addEventListener("click", function () {
  var modal = document.getElementById("stats");
  var bootstrapModal = new bootstrap.Modal(modal);

  var troopType = document.getElementById("typeModal");
  troopType.innerHTML = "Siege";

  bootstrapModal.show();

  var submit = document.getElementById("submitModal");
  var foodModalPercent = document.querySelector(".foodModalPercent");
  var woodModalPercent = document.querySelector(".woodModalPercent");
  var goldModalPercent = document.querySelector(".goldModalPercent");
  var progressBarGold = document.querySelector(".progress-barGold");
  var progressBarWood = document.querySelector(".progress-barWood");
  var progressBarFood = document.querySelector(".progress-barFood");

  progressBarWood.style.width = "6.25%";
  progressBarFood.style.width = "6.25%";
  woodModalPercent.textContent = "100";
  foodModalPercent.textContent = "80";
  goldModalPercent.textContent = "0";
  progressBarGold.style.width = "0%";
  submit.addEventListener("click", function () {
    var progressBarWood = document.querySelector(".progress-barWood");

    var troopTier = document.getElementById("troopTierModal");
    var progressBarWood = document.querySelector(".progress-barWood");
    var progressBarFood = document.querySelector(".progress-barFood");
    if (troopTier.value === "1") {
      progressBarWood.style.width = "6.25%";
      woodModalPercent.textContent = "100";
      progressBarFood.style.width = "6.25%";
      foodModalPercent.textContent = "80";
      progressBarGold.style.width = "0%";
      goldModalPercent.textContent = "0";
    } else if (troopTier.value === "2") {
      progressBarWood.style.width = "12.5%";
      woodModalPercent.textContent = "200";
      progressBarFood.style.width = "12.5%";
      foodModalPercent.textContent = "160";
      progressBarGold.style.width = "0%";
      goldModalPercent.textContent = "0";
    } else if (troopTier.value === "3") {
      progressBarWood.style.width = "25%";
      woodModalPercent.textContent = "400";
      progressBarFood.style.width = "25%";
      foodModalPercent.textContent = "320";
      progressBarGold.style.width = "0%";
      goldModalPercent.textContent = "0";
    } else if (troopTier.value === "4") {
      progressBarWood.style.width = "50%";
      woodModalPercent.textContent = "800";
      progressBarFood.style.width = "50%";
      foodModalPercent.textContent = "640";
      progressBarGold.style.width = "0%";
      goldModalPercent.textContent = "0";
    } else if (troopTier.value === "5") {
      progressBarWood.style.width = "100%";
      woodModalPercent.textContent = "1600";
      progressBarFood.style.width = "100%";
      foodModalPercent.textContent = "1280";
      progressBarGold.style.width = "0%";

      goldModalPercent.textContent = "0";
    }
  });
});

var legendaryExp = [0, 500, 1200, 2000, 3500, 6000, 10000, 15000, 23000, 35000];
var eliteExp = [0, 250, 600, 1000, 1750, 3000, 5000, 7500, 11500, 17500];

var expBook = 250;

var startingLevel = document.getElementById("startingLevel");
var targetLevel = document.getElementById("targetLevel");
var heroType = document.getElementById("heroType");
var calculateExperience = document.getElementById("calculateExperience");

calculateExperience.addEventListener("click", function () {
  var starting = parseInt(startingLevel.value);
  var target = parseInt(targetLevel.value);
  var hero = heroType.value;

  if (starting < 0 || target < 0) {
    alert("Starting Level is 1");
    return;
  }

  if (starting >= target) {
    alert("The Target Level must be higher!");
    return;
  }
  if (starting === target) {
    alert("The Level must not match!");
    return;
  }
  if (target > 10 || starting > 10) {
    alert("Max level is 10");
    return;
  }

  if (starting === 0 || target === 0) {
    alert("Must enter a value");
    return;
  }

  if (hero === "Legendary") {
    var totalExp = 0;
    for (var i = starting; i < target; i++) {
      totalExp += legendaryExp[i];
    }
  } else if (hero === "Elite") {
    var totalExp = 0;
    for (var i = starting; i < target; i++) {
      totalExp += eliteExp[i];
    }
  } else {
    alert("Try Again!");
    return;
  }

  var expBooks = Math.round(totalExp / expBook);
  var resultExp = totalExp.toLocaleString();
  var resultBooks = expBooks.toLocaleString();

  document.getElementById("totalExperience").innerHTML = resultExp;
  document.getElementById("totalBooks").innerHTML = resultBooks + " Books";
});
