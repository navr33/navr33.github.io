var data = {
"Hero":{
    "Force":{
        "Brave Heart":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase Afterimage creation chance, and increase the damage dealt by Afterimages.",
            "Starter": "0",
            "Max Level": "4",
            "Levels": ["1~79", "80~98", "99~117", "118~130"],
            "Data": {
                "Creation Up": ["+50%", "+50%", "+50%", "+50%"],
                "Damage Dealt": ["x1.3", "x1.35", "x1.4", "x1.45"],
            }
        },
        "Miracle Edge":{
            "Usage": "Force Break (Arms, STR, WIS)",
            "Unlock": "N/A",
            "Description": "Deal melee Cut damage to all enemies, then restore HP to the whole party. Excess healing increases Max HP until the end of the turn.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["700%", "1100%", "1500%"],
                "Healing Power": ["75%", "75%", "75%"],
                "Max Overheal": ["+75%", "+75%", "+75%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Afterimage":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Your attack skills gain a chance to create an Afterimage if they hit. Afterimages are clones of you with your same stats and passives, but decreased HP and without your buffs/debuffs. On the turn after being created they use the skill that created them, then vanish at the end of the turn.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Creation Chance": ["13%", "16%", "19%", "22%", "25%", "28%", "31%", "34%", "37%", "50%"],
                "HP Modifier": ["30%", "35%", "40%", "45%", "50%", "55%", "60%", "65%", "70%", "100%"],
            }
        },
        "Mirage Sword":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Afterimage (Lv 1)",
            "Description": "Sword: Deal melee Cut damage to one enemy. This attack has an increased chance to create an Afterimage.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "7"],
                "Attack Power": ["180%", "187%", "194%", "201%", "208%", "245%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["110%", "110%", "110%", "110%", "110%", "110%"],
                "Creation Up": ["+40%", "+40%", "+40%", "+40%", "+40%", "+65%"],
            }
        },
        "Wide Bravery":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Sword: Deal melee Cut damage to one enemy. If this is performed before the target acts (or their action was prevented), hit all enemies instead.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["5", "5", "5", "9", "9", "9", "9", "14"],
                "Attack Power": ["240%", "247%", "254%", "284%", "291%", "298%", "305%", "360%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Frigid Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Wide Bravery (Lv 1)",
            "Description": "Sword: Deal melee Cut+Ice damage to one enemy, with splash effect.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6", "13"],
                "Attack Power": ["220%", "230%", "240%", "250%", "260%", "330%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Encourage":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Restore HP to the whole party each time you use an attack skill. Healing is based on your Max HP.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "HP Gain": ["6+2%", "7+2%", "8+2%", "10+4%", "11+4%", "12+4%", "13+4%", "15+6%"],
            }
        },
        "Heroic Bonds":{
            "Usage": "Passive",
            "Unlock": "Encourage (Lv 1)",
            "Description": "When the HP of every party member is above a certain threshold, increase your damage dealt and action speed.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "HP Threshold": ["90%", "88%", "86%", "84%", "82%", "75%"],
                "Damage Dealt": ["+10%", "+11%", "+12%", "+13%", "+14%", "+20%"],
                "Speed Up": ["x1.15", "x1.17", "x1.19", "x1.21", "x1.23", "x1.35"],
            }
        },
        "Physical Shield":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Shield: Deal melee Bash damage to one enemy. Decrease physical damage taken by the party until the attack activates. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "15"],
                "Attack Power": ["200%", "205%", "210%", "215%", "240%", "245%", "250%", "255%", "260%", "300%"],
                "Damage Taken": ["-15%", "-16%", "-17%", "-18%", "-21%", "-22%", "-23%", "-24%", "-25%", "-30%"],
                "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
                "Action Speed": ["3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%"],
            }
        },
        "Clear Mind":{
            "Usage": "Active (No parts)",
            "Unlock": "N/A",
            "Description": "Remove binds and ailments on yourself. If successful, recover TP.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["2", "2", "2", "5"],
                "Binds Cured": ["1", "1", "1", "3"],
                "TP Gain": ["2+2%", "5+2%", "8+2%", "15+5%"],
            }
        },
        "Chop":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Chop points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Charge Image":{
            "Usage": "Active (Head)",
            "Unlock": "Mirage Sword (Lv 2)",
            "Description": "Dispell your Afterimages to enter a charge state until the end of next turn, which increases damage dealt and chance to create Afterimages.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "7"],
                "Damage Dealt": ["x1.35", "x1.38", "x1.41", "x1.45", "x1.49", "x1.7"],
                "Creation Up": ["+35%", "+38%", "+41%", "+45%", "+49%", "+70%"],
                "Action Speed": ["200%", "150%", "100%", "70%", "40%", "1%"],
            }
        },
        "Graceful Image":{
            "Usage": "Passive",
            "Unlock": "Charge Image (Lv 2)",
            "Description": "If you use a skill while there's an Afterimage, recover part of the TP used by the skill.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Gain": ["20%", "23%", "26%", "29%", "32%", "35%", "38%", "50%"],
            }
        },
        "Spark Blade":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Frigid Slash (Lv 2)",
            "Description": "Sword: Deal melee Cut damage to one enemy, then ranged Volt damage to all enemies. Damage of the second attack grows with the Cut resistance of the first attack's target. (Second attack gets a damage multiplier of 6 - 5*CutVulnerability)",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["9", "9", "9", "13", "13", "13", "13", "17"],
                "Attack Power\n(Cut attack)": ["125%", "130%", "135%", "150%", "155%", "160%", "165%", "200%"],
                "Attack Power\n(Volt attack)": ["100%", "103%", "106%", "118%", "121%", "124%", "127%", "150%"],
                "Accuracy (Cut)": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Accuracy (Volt)": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Burst Blade":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Spark Blade (Lv 2)",
            "Description": "Sword: Deal 2~3 hits of melee Cut damage to one enemy. Maximum hits increase by 1 per enemy in the battle (including the target).",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "14", "14", "14", "14", "18"],
                "Attack Power": ["125%", "129%", "133%", "145%", "149%", "153%", "157%", "185%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Heroic Steel":{
            "Usage": "Passive",
            "Unlock": "Heroic Bonds (Lv 2)",
            "Description": "When the HP of every party member is below a certain threshold, decrease your damage taken and increase enemy aggro.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "HP Threshold": ["30%", "32%", "34%", "36%", "38%", "50%"],
                "Damage Taken": ["-15%", "-17%", "-19%", "-21%", "-23%", "-30%"],
                "Aggro Up": ["+6%", "+8%", "+10%", "+12%", "+14%", "+20%"],
            }
        },
        "Great Bravery":{
            "Usage": "Passive",
            "Unlock": "Heroic Steel (Lv 1)",
            "Description": "If an ally below a certain HP threshold is hit, there's a chance to take damage in their place. (If you and an Afterimage trigger this effect at the same time, the Afterimage takes priority)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "HP Threshold": ["11%", "13%", "15%", "17%", "19%", "21%", "23%", "34%"],
                "Activation Chance": ["5%", "7%", "10%", "12%", "15%", "17%", "20%", "30%"],
            }
        },
        "Elemental Shield":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Physical Shield (Lv 2)",
            "Description": "Shield: Deal melee Bash damage to one enemy. Decrease elemental damage taken by the party until the attack activates. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "15"],
                "Attack Power": ["200%", "205%", "210%", "215%", "240%", "245%", "250%", "255%", "260%", "300%"],
                "Damage Taken": ["-15%", "-16%", "-17%", "-18%", "-21%", "-22%", "-23%", "-24%", "-25%", "-30%"],
                "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
                "Action Speed": ["3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%"],
            }
        },
        "Fervor":{
            "Usage": "Active (No parts)",
            "Unlock": "Clear Mind (Lv 1)",
            "Description": "Transfer ailments and binds from allies in your line onto you. If successful, fill your Force Gauge.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["3", "3", "3", "5"],
                "Force Gain": ["10%", "13%", "16%", "25%"],
                "Action Speed": ["50%", "50%", "50%", "50%"],
            }
        },
        "New Challenger":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Start multiple enemy encounters in a row, with an increased chance of Rare Breeds appearing.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "2", "5"],
                "Min. Battles": ["1", "1", "1", "1", "1", "3"],
                "Max. Battles": ["3", "4", "5", "6", "7", "10"],
                "Rare Chance Up": ["+1%", "+2%", "+3%", "+4%", "+5%", "+10%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Dark Image":{
            "Usage": "Passive",
            "Unlock": "Graceful Image (Lv 3)",
            "Description": "Afterimages have a chance to not disappear at the end of their attack turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Remain Chance": ["11%", "12%", "14%", "15%", "17%", "18%", "20%", "21%", "23%", "34%"],
            }
        },
        "Act Breaker":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Burst Blade (Lv 2)",
            "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Stun. Infliction chance goes down as the target's missing HP goes up.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["14", "14", "14", "18", "18", "18", "18", "24"],
                "Attack Power": ["290%", "302%", "314%", "354%", "366%", "378%", "390%", "470%"],
                "Infliction Chance": ["60%", "60%", "60%", "75%", "75%", "75%", "75%", "100%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Regiment Rave":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Act Breaker (Lv 3)",
            "Description": "Sword: Deal melee Cut+Fire damage to one enemy at the end of turn. Up to 40% of the damage your allies have done this turn is added to this attack's own calculated damage, capped at a certain percentage of said calculated value.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["18", "18", "18", "25", "25", "25", "25", "32"],
                "Attack Power": ["250%", "260%", "270%", "300%", "310%", "320%", "330%", "400%"],
                "Added Damage Cap": ["200%", "203%", "206%", "216%", "219%", "222%", "225%", "250%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["-1000%", "-1000%", "-1000%", "-1000%", "-1000%", "-1000%", "-1000%", "-1000%"],
            }
        },
        "Force Gift":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Sword: Deal melee Cut damage to one enemy. If it lands, restore Force to other allies in your line.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "12", "20"],
                "Attack Power": ["200%", "215%", "230%", "245%", "260%", "320%"],
                "Force Gain": ["7%", "7%", "7%", "7%", "7%", "14%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Retain Force":{
            "Usage": "Passive",
            "Unlock": "Force Gift (Lv 3)",
            "Description": "If your Force Boost ends during battle, recover some Force.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "Force Gain": ["5%", "10%", "15%", "25%"],
            }
        },
        "Guard Rush":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Elemental Shield (Lv 3)",
            "Description": "Shield: Deal melee Bash damage to one enemy. Decrease all damage taken by the party until the attack activates, and this attack's damage increases by 20% each time the damage reduction triggers (max +200%), but the attack is cancelled if the reduction never triggers. If the attack lands, this skill becomes disabled for several turns. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["25", "25", "25", "25", "32", "32", "32", "32", "32", "40"],
                "Attack Power": ["250%", "275%", "300%", "325%", "325%", "350%", "375%", "400%", "425%", "425%"],
                "Damage Taken": ["-20%", "-22%", "-24%", "-26%", "-26%", "-28%", "-30%", "-32%", "-34%", "-34%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["1%", "1%", "1%", "1%", "1%", "1%", "1%", "1%", "1%", "1%"],
                "Cooldown": ["9", "9", "9", "9", "8", "8", "8", "8", "8", "6"],
            }
        },
    },
},
"Protector":{
    "Force":{
        "Shield Protect":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "When a Guard skill decreases damage to a party member, apply an additional damage reduction.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Taken": ["x0.5"],
            }
        },
        "Painless":{
            "Usage": "Force Break (Arms)",
            "Unlock": "N/A",
            "Description": "Nullify all attacks to the party for this turn.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
    },
    "Novice (Lv 1)":{
        "Front Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect the front line for this turn, which decreases physical damage taken.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "9"],
                "Damage Taken": ["-30%", "-33%", "-36%", "-39%", "-42%", "-55%"],
            }
        },
        "Rear Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Front Guard (Lv 2)",
            "Description": "(Guard) Shield: Protect the back line for this turn, which decreases physical damage taken.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["3", "3", "3", "6"],
                "Damage Taken": ["-35%", "-42%", "-49%", "-65%"],
            }
        },
        "Ally Shield":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect one ally for this turn, which makes you take attacks in their place. Decrease damage taken from those redirected attacks.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["3", "3", "3", "5", "5", "5", "5", "7"],
                "Damage Taken": ["-5%", "-8%", "-11%", "-19%", "-22%", "-25%", "-28%", "-35%"],
            }
        },
        "Fortify":{
            "Usage": "Active (Arms)",
            "Unlock": "Ally Shield (Lv 2)",
            "Description": "Place a buff on yourself for 3~5 turns, which decreases physical/elemental damage taken.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "7", "7", "7", "7", "12"],
                "Damage Taken": ["-21%", "-24%", "-27%", "-27%", "-29%", "-31%", "-33%", "-33%"],
                "Action Speed": ["100%", "100%", "100%", "130%", "130%", "130%", "130%", "160%"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
            }
        },
        "Shield Smite":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Shield: Deal melee Bash damage to one enemy, with a chance to inflict Arm Bind. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "10", "10", "10", "10", "10", "16"],
                "Attack Power": ["230%", "240%", "250%", "260%", "295%", "305%", "315%", "325%", "335%", "400%"],
                "Infliction Chance": ["35%", "35%", "35%", "35%", "42%", "42%", "42%", "42%", "42%", "50%"],
                "Accuracy": ["-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Taunt":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 3~5 turns, which increases enemy aggro and slightly decreases physical damage taken.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["3", "3", "3", "5", "5", "5", "5", "9"],
                "Aggro Bonus": ["+25%", "+30%", "+35%", "+35%", "+40%", "+45%", "+50%", "+50%"],
                "Damage Taken": ["-3%", "-4%", "-6%", "-6%", "-7%", "-9%", "-10%", "-10%"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["120%", "120%", "120%", "150%", "150%", "150%", "150%", "200%"],
            }
        },
        "Preemptive Taunt":{
            "Usage": "Passive",
            "Unlock": "Taunt (Lv 2)",
            "Description": "Chance to automatically use Taunt at the start of battle.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Activation chance": ["25%", "30%", "35%", "42%", "49%", "65%"],
            }
        },
        "Healing Wall":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "When you Defend, restore HP to all allies in your line. Healing is based on your Max HP.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "HP Gain": ["7+4%", "8+5%", "9+6%", "10+7%", "11+8%", "15+12%"],
            }
        },
        "Chop":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Chop points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Recovery Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Rear Guard (Lv 1)",
            "Description": "(Guard) Shield: Protect an ally line for this turn, which removes binds and decreases physical damage taken.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["15", "15", "15", "20"],
                "Damage Taken": ["-25%", "-30%", "-35%", "-50%"],
            }
        },
        "Aegis":{
            "Usage": "Passive",
            "Unlock": "Fortify (Lv 1)",
            "Description": "Chance to survive lethal damage with 1 HP (max once per battle).",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["10%", "11%", "12%", "13%", "18%", "19%", "20%", "21%", "22%", "30%"],
            }
        },
        "Shield Bash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Shield Smite (Lv 3)",
            "Description": "Shield: Deal melee Bash damage to all enemies. Places a debuff on the targets for 3 turns, which decreases physical damage dealt. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "15", "15", "15", "15", "15", "20"],
                "Attack Power": ["180%", "187%", "194%", "201%", "226%", "233%", "240%", "247%", "254%", "300%"],
                "Damage Dealt": ["-8%", "-8%", "-8%", "-8%", "-11%", "-11%", "-11%", "-11%", "-11%", "-15%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Keep Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect one ally until the end of next turn, which decreases physical/elemental damage taken. While active, you cannot use other Guard skills.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "7"],
                "Damage Taken": ["-25%", "-28%", "-31%", "-34%", "-37%", "-50%"],
            }
        },
        "Phys DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decrease physical damage taken.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Damage Taken": ["-4%", "-5%", "-6%", "-9%", "-10%", "-11%", "-12%", "-15%"],
            }
        },
        "Elem DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decrease elemental damage taken.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Damage Taken": ["-4%", "-5%", "-6%", "-9%", "-10%", "-11%", "-12%", "-15%"],
            }
        },
        "Fire Wall":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases Fire damage taken (max once per ally). At high levels it absorbs damage instead of decreasing it. (From level 4 onward it nullifies secondary effects from attacks)",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "13", "13", "13"],
                "Damage Taken": ["-50%", "-65%", "-80%", "-100%", "N/A", "N/A"],
                "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "40%", "150%"],
            }
        },
        "Ice Wall":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases Ice damage taken (max once per ally). At high levels it absorbs damage instead of decreasing it. (From level 4 onward it nullifies secondary effects from attacks)",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "13", "13", "13"],
                "Damage Taken": ["-50%", "-65%", "-80%", "-100%", "N/A", "N/A"],
                "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "40%", "150%"],
            }
        },
        "Volt Wall":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases Volt damage taken (max once per ally). At high levels it absorbs damage instead of decreasing it. (From level 4 onward it nullifies secondary effects from attacks)",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "13", "13", "13"],
                "Damage Taken": ["-50%", "-65%", "-80%", "-100%", "N/A", "N/A"],
                "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "40%", "150%"],
            }
        },
    },
    "Master (Lv 40)":{
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase Max HP.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "HP Up": ["+5%", "+6%", "+7%", "+11%", "+12%", "+13%", "+14%", "+20%"],
            }
        },
        "Heal Guard":{
            "Usage": "Active (Arms, WIS)",
            "Unlock": "Recovery Guard (Lv 2)",
            "Description": "(Guard) Shield: Protect an ally line for this turn, which restores HP and decreases physical damage taken.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "20", "25"],
                "Damage Taken": ["-25%", "-28%", "-31%", "-34%", "-37%", "-50%"],
                "Healing Power": ["90%", "100%", "110%", "120%", "130%", "180%"],
            }
        },
        "Line Shield":{
            "Usage": "Active (Arms)",
            "Unlock": "Aegis (Lv 3)",
            "Description": "(Guard) Shield: Protect an ally line for this turn, which makes you take attacks in their place. Decrease damage taken from those redirected attacks.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "11", "11", "11", "11", "15"],
                "Damage Taken": ["-5%", "-8%", "-11%", "-19%", "-22%", "-25%", "-28%", "-35%"],
            }
        },
        "En Garde":{
            "Usage": "Passive",
            "Unlock": "Line Shield (Lv 3)",
            "Description": "Chance to automatically halve damage taken any time you're attacked.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["12%", "14%", "16%", "18%", "20%", "22%", "24%", "26%", "28%", "40%"],
            }
        },
        "Shield Flare":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Shield Bash (Lv 3)",
            "Description": "Shield: Prepare to counterattack each time you're hit until the end of next turn. Counters deal ranged Fire damage to the attacker. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "16"],
                "Attack Power": ["250%", "265%", "280%", "295%", "310%", "400%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["1500%", "1500%", "1500%", "1500%", "1500%", "1500%"],
            }
        },
        "Full Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Fire Wall (Lv 2), Ice Wall (Lv 2), Volt Wall (Lv 2)",
            "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases all attack damage taken. Afterwards, this skill becomes disabled for several turns.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "26", "26", "26", "26", "26", "35"],
                "Damage Taken": ["-25%", "-29%", "-33%", "-37%", "-37%", "-41%", "-46%", "-50%", "-55%", "-55%"],
                "Cooldown": ["6", "6", "6", "6", "5", "5", "5", "5", "5", "3"],
            }
        },
    },
},
"Medic":{
    "Force":{
        "Intensive Care":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase action speed, increase HP restored by First Aid skills and decrease their TP costs. (Also powers up TP restoration from items)",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Speed Up": ["x1.7"],
                "HP Restored": ["+70%"],
                "TP Cost Down": ["-50%"],
            }
        },
        "Healing Touch":{
            "Usage": "Force Break (Head, WIS)",
            "Unlock": "N/A",
            "Description": "Restore HP, revive, and remove binds/ailments/debuffs for the whole party.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Healing Power": ["300%", "600%", "900%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Healing":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "N/A",
            "Description": "(First Aid) Restore HP to one ally.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8"],
                "Healing Power": ["130%", "145%", "160%", "175%", "225%", "240%", "255%", "270%", "285%", "370%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Line Heal":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Healing (Lv 3)",
            "Description": "(First Aid) Restore HP to an ally line.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "10", "10", "10", "10", "10", "15"],
                "Healing Power": ["110%", "120%", "130%", "140%", "170%", "180%", "190%", "200%", "210%", "270%"],
                "Action Speed": ["125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%"],
            }
        },
        "Refresh":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(First Aid) Remove ailments from target allies.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "2", "12", "6"],
                "Targets": ["Single", "Single", "Line", "Line"],
                "Action Speed": ["100%", "100%", "100%", "100%"],
            }
        },
        "Revive":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(First Aid) Revive one ally, restoring a certain amount of HP.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "12", "12", "12", "12", "16"],
                "HP Gain": ["1", "20", "40", "120", "145", "170", "200", "400"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Head Bash":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Staff: Deal melee Bash damage to one enemy, with a chance to inflict Head Bind.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "7", "7", "7", "7", "12"],
                "Attack Power": ["200%", "210%", "220%", "255%", "265%", "275%", "285%", "330%"],
                "Infliction Chance": ["35%", "35%", "35%", "42%", "42%", "42%", "42%", "50%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Patch Up":{
            "Usage": "Passive (WIS)",
            "Unlock": "N/A",
            "Description": "Restore HP to the whole party after each battle. (Does not stack)",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Healing Power": ["45%", "55%", "65%", "75%", "85%", "95%", "105%", "150%"],
            }
        },
        "Antibodies":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase chance of ailments/binds on yourself being naturally healed at the end of turn.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "Recovery Rate": ["+15%", "+20%", "+25%", "+30%", "+35%", "+50%"],
            }
        },
        "Scavenge":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase enemy drop rates.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "Drop Rate Up": ["+5%", "+8%", "+12%", "+20%"],
            }
        },
        "Take":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Take points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Delayed Heal":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Line Heal (Lv 2)",
            "Description": "(First Aid) Prepare yourself to restore HP to the whole party at the start of the next turn. (Cannot use it again while it's in preparation)",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "14", "14", "14", "14", "18"],
                "Healing Power": ["80%", "85%", "90%", "115%", "120%", "125%", "130%", "170%"],
            }
        },
        "Unbind":{
            "Usage": "Active (Head)",
            "Unlock": "Refresh (Lv 2)",
            "Description": "(First Aid) Remove all binds from target allies.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "2", "12", "6"],
                "Targets": ["Single", "Single", "Line", "Line"],
                "Action Speed": ["100%", "100%", "100%", "100%"],
            }
        },
        "Group Therapy":{
            "Usage": "Active (Head)",
            "Unlock": "Unbind (Lv 1)",
            "Description": "Place a buff on yourself for 3~5 turns, which increases the area of effect (Single → Line → Party) of First Aid skills but decreases their action speed and HP restored.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["15", "15", "15", "20", "20", "20", "20", "25"],
                "Speed Down": ["-35%", "-29%", "-23%", "-23%", "-17%", "-11%", "-5%", "-5%"],
                "HP Restored": ["-35%", "-29%", "-23%", "-23%", "-17%", "-11%", "-5%", "-5%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
            }
        },
        "Final Gift":{
            "Usage": "Passive (WIS)",
            "Unlock": "Revive (Lv 3)",
            "Description": "Upon dying, restore HP to the whole party.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "Healing Power": ["100%", "140%", "180%", "350%"],
            }
        },
        "Auto-Revive":{
            "Usage": "Passive (Head)",
            "Unlock": "Final Gift (Lv 2)",
            "Description": "Chance to automatically revive allies when they die.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["4%", "5%", "6%", "7%", "8%", "9%", "10%", "11%", "12%", "16%"],
                "HP Gain": ["1", "20", "40", "60", "80", "110", "140", "170", "200", "300"],
            }
        },
        "Star Drop":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Head Bash (Lv 3)",
            "Description": "Staff: Deal melee Bash damage to one enemy. Places a debuff on the target for 3 turns, which increases physical damage taken.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7", "13"],
                "Attack Power": ["240%", "255%", "270%", "285%", "300%", "370%"],
                "Damage Taken": ["+10%", "+12%", "+14%", "+16%", "+18%", "+25%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Medical Rod":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Star Drop (Lv 2)",
            "Description": "Staff: Deal melee Bash damage to one enemy. Places a debuff on the target for 3 turns, which increases elemental damage taken.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7", "13"],
                "Attack Power": ["240%", "255%", "270%", "285%", "300%", "370%"],
                "Damage Taken": ["+10%", "+12%", "+14%", "+16%", "+18%", "+25%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Safe Passage":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily nullify the effect of damaging tiles and muddy tiles.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Duration (Steps)": ["60", "70", "80", "90", "100", "255"],
            }
        },
        "Elem DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decrease elemental damage taken.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Damage Taken": ["-4%", "-5%", "-6%", "-9%", "-10%", "-11%", "-12%", "-15%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Heal-All":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Delayed Heal (Lv 3)",
            "Description": "(First Aid) Restore HP to the whole party.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "21", "21", "21", "21", "21", "30"],
                "Healing Power": ["90%", "96%", "102%", "108%", "132%", "138%", "144%", "150%", "156%", "200%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Chase Heal":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Delayed Heal (Lv 3)",
            "Description": "(First Aid) Prepare to heal allies each time they're hit this turn. Activation chance starts at 100% but goes down with each activation. There's a limit on how many times it can activate on each ally.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "14", "14", "14", "14", "20"],
                "Healing Power": ["60%", "72%", "84%", "84%", "96%", "108%", "120%", "120%"],
                "Chance Decrease": ["-40%", "-40%", "-40%", "-25%", "-25%", "-25%", "-25%", "-15%"],
                "Limit per Ally": ["2", "2", "2", "3", "3", "3", "3", "4"],
                "Action Speed": ["300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%"],
            }
        },
        "Overheal":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "During battle, excess healing from First Aid skills increases the target's Max HP (up to a certain cap) until the end of the turn.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "Max Overheal": ["+10%", "+13%", "+16%", "+19%", "+22%", "+34%"],
            }
        },
        "Deja Vu":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on the whole party for 5~9 turns, which at the end of each turn repeats the effect (with decreased potency) of the last First Aid skill they have received since this buff was applied.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["9", "9", "9", "12", "12", "12", "12", "15"],
                "HP Restored": ["-80%", "-74%", "-68%", "-68%", "-62%", "-56%", "-50%", "-50%"],
                "Duration (Turns)": ["5", "5", "5", "7", "7", "7", "7", "9"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Heavy Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Medical Rod (Lv 3)",
            "Description": "Staff: Deal melee Bash damage to one enemy.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["25", "25", "25", "25", "35", "35", "35", "35", "35", "50"],
                "Attack Power": ["350%", "365%", "380%", "395%", "455%", "480%", "505%", "530%", "555%", "700%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Staff Mastery":{
            "Usage": "Passive",
            "Unlock": "Heavy Strike (Lv 1)",
            "Description": "If a Staff is equipped, increase Max TP and physical damage dealt.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Up": ["+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%", "+15%"],
                "Damage Dealt": ["+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%", "+15%"],
            }
        },
    },
},
"Survivalist":{
    "Force":{
        "Illusory Formation":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase evasion and action speed for the whole party.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Evasion Up": ["+35%"],
                "Speed Up": ["x3.0"],
            }
        },
        "Mirage Arrow":{
            "Usage": "Force Break (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Deal ranged Stab damage to one enemy. Places a debuff on the target for 3 turns, which decreases accuracy and makes them act last.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["500%", "1200%", "1800%"],
                "Accuracy Down": ["-35%", "-35%", "-35%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Power Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Bow: Deal ranged Stab damage to one enemy, with pierce effect.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "9", "9", "9", "9", "14"],
                "Attack Power": ["240%", "250%", "260%", "300%", "310%", "320%", "330%", "400%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Flame Arrow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Power Shot (Lv 3)",
            "Description": "Bow: Deal ranged Stab+Fire damage to one enemy.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["5", "5", "5", "9", "9", "9", "9", "13"],
                "Attack Power": ["230%", "241%", "252%", "287%", "298%", "309%", "320%", "380%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Blind Arrow":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Bow: Deal ranged Stab damage to one enemy, with a chance to inflict Blind.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "7", "7", "7", "7", "10"],
                "Attack Power": ["150%", "158%", "166%", "186%", "194%", "202%", "210%", "240%"],
                "Infliction Chance": ["40%", "40%", "40%", "50%", "50%", "50%", "50%", "65%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Chain Dance":{
            "Usage": "Active (Legs)",
            "Unlock": "Blind Arrow (Lv 3)",
            "Description": "Increase your evasion and enemy aggro until the end of the turn.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "9"],
                "Evasion Up": ["+20%", "+20%", "+20%", "+20%", "+27%", "+27%", "+27%", "+27%", "+27%", "+35%"],
                "Aggro Bonus": ["+25%", "+26.5%", "+28%", "+29.5%", "+35%", "+37%", "+39%", "+41%", "+43%", "+50%"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "Safe Passage":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily nullify the effect of damaging tiles and muddy tiles.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Duration (Steps)": ["60", "70", "80", "90", "100", "255"],
            }
        },
        "Risk Perception":{
            "Usage": "Passive",
            "Unlock": "Safe Passage (Lv 2)",
            "Description": "Chance to nullify enemy ambushes.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["35%", "41%", "47%", "53%", "59%", "75%"],
            }
        },
        "Resuscitate":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Restore HP to one ally. From level 4 onward can also revive.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "2", "3"],
                "HP Gain (Heal)": ["50", "60", "70", "80", "90", "200"],
                "HP Gain (Revive)": ["N/A", "N/A", "N/A", "1", "50", "150"],
            }
        },
        "Sorting Skill":{
            "Usage": "Passive",
            "Unlock": "Resuscitate (Lv 3)",
            "Description": "Increase the size of the inventory.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Item Slots": ["+4", "+5", "+6", "+7", "+10", "+11", "+12", "+13", "+14", "+20"],
            }
        },
        "Natural Instinct":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Take, Chop or Mine points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Flank Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Flame Arrow (Lv 3)",
            "Description": "Bow: Deal ranged Stab damage to an enemy line.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["9", "9", "9", "13", "13", "13", "13", "18"],
                "Attack Power": ["215%", "223%", "231%", "266%", "274%", "282%", "290%", "350%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Finishing Shot":{
            "Usage": "Passive (STR)",
            "Unlock": "Flank Shot (Lv 3)",
            "Description": "After attacking an enemy, if their HP is below a certain threshold, perform a follow up attack.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "HP Threshold": ["10%", "12%", "14%", "16%", "18%", "20%", "22%", "30%"],
                "Attack Power": ["70%", "73%", "76%", "79%", "82%", "85%", "88%", "100%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            }
        },
        "Multi-Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Flame Arrow (Lv 3)",
            "Description": "Bow: Deal 2 hits of ranged Stab damage to one enemy.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "13", "13", "13", "13", "13", "20"],
                "Attack Power": ["150%", "155%", "160%", "165%", "190%", "195%", "200%", "205%", "210%", "265%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
            }
        },
        "Drop Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Multi-Shot (Lv 3)",
            "Description": "Bow: Deal ranged Stab damage to one enemy. Deals triple damage against enemies in the back line.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "9", "9", "9", "9", "13"],
                "Attack Power": ["180%", "188%", "196%", "221%", "231%", "241%", "251%", "300%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Trickery":{
            "Usage": "Active (Legs)",
            "Unlock": "Chain Dance (Lv 2)",
            "Description": "Place a debuff on an enemy line for 3~5 turns, which decreases accuracy.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "11", "11", "11", "11", "11", "17"],
                "Accuracy Down": ["-9.5%", "-11%", "-12.5%", "-14%", "-14%", "-15.5%", "-17%", "-18.5%", "-20%", "-20%"],
                "Duration (Turns)": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
            }
        },
        "Cautious Steps":{
            "Usage": "Active (Field)",
            "Unlock": "Risk Perception (Lv 1)",
            "Description": "Temporarily decrease the enemy encounter rate.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "8", "14"],
                "Encounters Down": ["-50%", "-55%", "-60%", "-65%", "-70%", "-85%"],
                "Duration (Steps)": ["80", "100", "120", "140", "160", "255"],
            }
        },
        "Efficiency":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 5 turns, which increases the recovery of Medica-type items and makes them affect a full line.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "5", "5", "10"],
                "HP Restored": ["+5%", "+10%", "+15%", "+100%"],
                "Action Speed": ["90%", "90%", "90%", "90%"],
            }
        },
        "Speed Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase accuracy, evasion and action speed.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Accuracy Up": ["+2.5%", "+3.1%", "+3.7%", "+5.7%", "+6.3%", "+6.9%", "+7.5%", "+10%"],
                "Evasion Up": ["+2.5%", "+3.1%", "+3.7%", "+5.7%", "+6.3%", "+6.9%", "+7.5%", "+10%"],
                "Speed Up": ["x1.06", "x1.08", "x1.10", "x1.16", "x1.18", "x1.2", "x1.22", "x1.30"],
            }
        },
        "Quick Step":{
            "Usage": "Active (Legs)",
            "Unlock": "Speed Up (Lv 2)",
            "Description": "Target one ally, make them act first this turn.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["35", "30", "25", "15"],
            }
        },
    },
    "Master (Lv 40)":{
        "Disabling Shot":{
            "Usage": "Passive (LUC)",
            "Unlock": "Finishing Shot (Lv 1)",
            "Description": "Bow skills gain a chance to inflict Leg Bind.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Infliction Chance": ["+7%", "+9%", "+11%", "+13%", "+15%", "+17%", "+19%", "+25%"],
            }
        },
        "Sagittarius Shot":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Drop Shot (Lv 3)",
            "Description": "Bow: Prepare an attack that will hit in 2 more turns, at the start of the turn. Deals ranged Stab damage to one enemy, with a chance to inflict Stun. (Can't use again while preparing. Cancelled if you die while preparing)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "20", "20", "20", "20", "20", "27"],
                "Attack Power": ["500%", "520%", "540%", "560%", "620%", "640%", "660%", "680%", "700%", "800%"],
                "Infliction Chance": ["40%", "40%", "40%", "40%", "55%", "55%", "55%", "55%", "55%", "70%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Hazy Arrow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Trickery (Lv 3)",
            "Description": "Bow: Deal ranged Stab damage to one enemy. Cannot miss. Only usable if you dodged an attack last turn.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Attack Power": ["600%", "660%", "720%", "780%", "840%", "1200%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Nature's Blessing":{
            "Usage": "Passive (Field)",
            "Unlock": "Cautious Steps (Lv 2)",
            "Description": "Chance to get additional rare materials from gathering spots.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "Max. Extra Items": ["1", "2", "3", "4"],
            }
        },
        "Scapegoat":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Select one ally to protect the rest of the party for this turn, which makes the target take attacks in place of their allies a certain amount of times. Target takes decreased damage from those redirected attacks.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "12", "12", "12", "18"],
                "Max. Activations": ["1", "1", "2", "2", "2", "3"],
                "Damage Taken": ["-5%", "-7%", "-13%", "-15%", "-17%", "-25%"],
            }
        },
        "Sneak Attack":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily increase the chance of ambushing enemies.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "15"],
                "Ambush Up": ["+6%", "+7%", "+8%", "+9%", "+10%", "+20%"],
                "Duration (Steps)": ["60", "70", "80", "90", "100", "255"],
            }
        },
    },
},
"Ronin":{
    "Force":{
        "Musou":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Gain the effects of the 3 stances at level 1 (affected by Full Proficiency), on top of your active stance. Your active stance's duration does not go down, and your skills don't decrease its duration nor dispell it.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Issen":{
            "Usage": "Force Break (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Deal ranged Cut damage to all enemies, with a chance to inflict Instant Death. (Infliction chance allegedly higher on low-HP targets, but could not reproduce in testing)",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["450%", "900%", "1300%"],
                "Infliction Chance": ["65%", "65%", "65%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Upper Stance":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Stance that increases damage dealt. If a Katana is equipped, trigger your highest-level Stance at the start of battle. (Ties for highest level will choose a Stance at random)",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Damage Dealt": ["x1.1", "x1.12", "x1.14", "x1.14", "x1.16", "x1.18", "x1.2", "x1.2"],
                "Duration (Turns)": ["4", "4", "4", "5", "5", "5", "5", "6"],
            }
        },
        "Upward Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Upper Stance (Lv 1)",
            "Description": "Katana: Deal melee Cut damage to one enemy. Makes a Critical Hit if you're in Upper Stance. Activates/extends Upper Stance for a certain amount of turns.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "5", "5", "7"],
                "Attack Power": ["105%", "108%", "111%", "125%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["50%", "50%", "50%", "50%"],
                "Stance Duration": ["3", "3", "3", "4"],
            }
        },
        "Clear Stance":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Stance that decreases damage taken and increases bind/ailment infliction rates for Ronin skills. If a Katana is equipped, trigger your highest-level Stance at the start of battle. (Ties for highest level will choose a Stance at random)",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Damage Taken": ["x0.9", "x0.87", "x0.84", "x0.84", "x0.81", "x0.78", "x0.75", "x0.75"],
                "Infliction Up": ["x1.25", "x1.30", "x1.35", "x1.35", "x1.40", "x1.45", "x1.50", "x1.50"],
                "Duration (Turns)": ["4", "4", "4", "5", "5", "5", "5", "6"],
            }
        },
        "Charging Thrust":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Clear Stance (Lv 1)",
            "Description": "Katana: Deal melee Stab damage to one enemy. Makes a Critical Hit if you're in Clear Stance. Activates/extends Clear Stance for a certain amount of turns.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "5", "5", "7"],
                "Attack Power": ["105%", "108%", "111%", "125%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["50%", "50%", "50%", "50%"],
                "Stance Duration": ["3", "3", "3", "4"],
            }
        },
        "Swift Stance":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Stance that increases accuracy, evasion and action speed. If a Katana is equipped, trigger your highest-level Stance at the start of battle. (Ties for highest level will choose a Stance at random)",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Accuracy Up": ["+10%", "+12%", "+14%", "+14%", "+16%", "+18%", "+20%", "+20%"],
                "Evasion Up": ["+10%", "+12%", "+14%", "+14%", "+16%", "+18%", "+20%", "+20%"],
                "Speed Up": ["x1.3%", "x1.43", "x1.51", "x1.51", "x1.59", "x1.67", "x1.75", "x1.75"],
                "Duration (Turns)": ["4", "4", "4", "5", "5", "5", "5", "6"],
            }
        },
        "Sheath Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Swift Stance (Lv 1)",
            "Description": "Katana: Deal melee Bash damage to one enemy. Makes a Critical Hit if you're in Swift Stance. Activates/extends Swift Stance for a certain amount of turns.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "5", "5", "7"],
                "Attack Power": ["105%", "108%", "111%", "125%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["50%", "50%", "50%", "50%"],
                "Stance Duration": ["3", "3", "3", "4"],
            }
        },
        "Air Blade":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Katana: Deal ranged Cut damage to one enemy. Makes a Critical Hit if you're in any Stance.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "10"],
                "Attack Power": ["140%", "145%", "150%", "155%", "170%", "176%", "182%", "188%", "194%", "230%"],
                "Accuracy": ["-8%", "-8%", "-8%", "-8%", "-8%", "-8%", "-8%", "-8%", "-8%", "-8%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Arm Strike":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Katana: Deal melee Cut damage to one enemy, with a chance to inflict Arm Bind. Makes a Critical Hit if you're in any Stance.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "8", "8", "8", "8", "12"],
                "Attack Power": ["120%", "124%", "128%", "143%", "147%", "151%", "155%", "180%"],
                "Infliction Chance": ["25%", "25%", "25%", "30%", "30%", "30%", "30%", "35%"],
                "Accuracy": ["-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Breath":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Restore HP to yourself and your adjacent allies. Healing is based on your Max HP.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "HP Gain": ["20+12%", "25+14%", "30+16%", "35+18%", "40+20%", "60+25%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Mine":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Mine points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },

    },
    "Veteran (Lv 20)":{
        "Helm Splitter":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Upward Slash (Lv 1)",
            "Description": "Katana: Deal melee Cut damage to one enemy. Low accuracy but ignores Cut resistance. Requires a Stance, and makes a Critical Hit during Upper Stance. Decreases remaining Stance duration by 2 turns.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "15", "15", "15", "15", "15", "20"],
                "Attack Power": ["270%", "278%", "286%", "294%", "319%", "327%", "335%", "343%", "351%", "400%"],
                "Accuracy": ["-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Flame Grater":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Helm Splitter (Lv 3)",
            "Description": "Katana: Deal melee Cut+Fire damage to one enemy. Makes a Critical Hit if you're in Upper Stance.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["5", "5", "5", "9", "9", "9", "9", "13"],
                "Attack Power": ["110%", "114%", "118%", "133%", "137%", "141%", "145%", "175%"],
                "Accuracy": ["-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%"],
                "Action Speed": ["65%", "65%", "65%", "65%", "65%", "65%", "65%", "65%"],
            }
        },
        "Haze Slash":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Charging Thrust (Lv 1)",
            "Description": "Katana: Deal melee Cut damage to one enemy, with a chance to inflict Sleep. Requires a Stance, and makes a Critical Hit during Clear Stance. Decreases remaining Stance duration by 2 turns.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "13", "13", "13", "13", "13", "18"],
                "Attack Power": ["200%", "206%", "212%", "218%", "238%", "245%", "252%", "259%", "266%", "310%"],
                "Infliction Chance": ["30%", "30%", "30%", "30%", "40%", "40%", "40%", "40%", "40%", "50%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%"],
            }
        },
        "Lightning Stab":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Haze Slash (Lv 3)",
            "Description": "Katana: Deal melee Stab+Volt damage to one enemy. Makes a Critical Hit if you're in Clear Stance.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["5", "5", "5", "9", "9", "9", "9", "13"],
                "Attack Power": ["110%", "114%", "118%", "133%", "137%", "141%", "145%", "175%"],
                "Accuracy": ["-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%"],
                "Action Speed": ["65%", "65%", "65%", "65%", "65%", "65%", "65%", "65%"],
            }
        },
        "Horizontal Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Sheath Strike (Lv 1)",
            "Description": "Katana: Deal melee Cut damage to an enemy line. Requires a Stance, and makes a Critical Hit during Swift Stance. Decreases remaining Stance duration by 2 turns.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "20", "20", "20", "20", "20", "27"],
                "Attack Power": ["150%", "155%", "160%", "165%", "180%", "185%", "190%", "195%", "200%", "230%"],
                "Accuracy": ["-15%", "-15%", "-15%", "-15%", "-15%", "-15%", "-15%", "-15%", "-15%", "-15%"],
                "Action Speed": ["65%", "65%", "65%", "65%", "65%", "65%", "65%", "65%", "65%", "65%"],
            }
        },
        "Frigid Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Horizontal Slash (Lv 3)",
            "Description": "Katana: Deal melee Cut+Ice damage to one enemy. Makes a Critical Hit if you're in Swift Stance.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["5", "5", "5", "9", "9", "9", "9", "13"],
                "Attack Power": ["110%", "114%", "118%", "133%", "137%", "141%", "145%", "175%"],
                "Accuracy": ["-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%"],
                "Action Speed": ["65%", "65%", "65%", "65%", "65%", "65%", "65%", "65%"],
            }
        },
        "Duel":{
            "Usage": "Passive",
            "Unlock": "Air Blade (Lv 2), Arm Strike (Lv 2)",
            "Description": "Increase damage dealt when attacking enemies that you also attacked on the previous turn.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "Damage Dealt": ["+8%", "+10%", "+12%", "+14%", "+16%", "+25%"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase physical damage dealt.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Damage Dealt": ["+4%", "+5%", "+6%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Swallow Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Flame Grater (Lv 3)",
            "Description": "Katana: Deal multiple hits of melee Cut damage to one enemy. Requires a Stance, and makes a Critical Hit during Upper Stance. Removes your Stance and disables skills on the next turn.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "20", "28"],
                "Attack Power": ["180%", "195%", "210%", "225%", "240%", "180%"],
                "Hits": ["2", "2", "2", "2", "2", "3"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Stone Thrust":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Lightning Stab (Lv 3)",
            "Description": "Katana: Deal melee Stab damage to one enemy, with a chance to inflict Petrify. Requires a Stance, and makes a Critical Hit during Clear Stance. Removes your Stance and disables skills on the next turn.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["17", "17", "17", "17", "17", "24"],
                "Attack Power": ["330%", "345%", "360%", "375%", "390%", "480%"],
                "Infliction Chance": ["25%", "28%", "31%", "34%", "37%", "50%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["25%", "25%", "25%", "25%", "25%", "25%"],
            }
        },
        "Petal Scatter":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Frigid Slash (Lv 3)",
            "Description": "Katana: Deal ranged Slash damage to all enemies. Deals less damage the more enemies there are. Requires a Stance, and makes a Critical Hit during Swift Stance. Removes your Stance and disables skills on the next turn.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["25", "25", "25", "25", "25", "34"],
                "Attack Power": ["270%", "285%", "300%", "315%", "330%", "410%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Full Proficiency":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases the effect of Stances by applying a second modifier while they're active.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage (Upper)": ["x1.02", "x1.03", "x1.04", "x1.05", "x1.06", "x1.07", "x1.08", "x1.09", "x1.1", "x1.12"],
                "Damage (Clear)": ["x0.98", "x0.97", "x0.96", "x0.95", "x0.94", "x0.93", "x0.92", "x0.91", "x0.9", "x0.88"],
                "Infliction (Clear)": ["x1.04", "x1.05", "x1.07", "x1.08", "x1.1", "x1.11", "x1.13", "x1.14", "x1.16", "x1.20"],
                "Accuracy (Swift)": ["+2%", "+2.4%", "+2.8%", "+3.2%", "+3.6%", "+4%", "+4.4%", "+4.8%", "+5.2%", "+7%"],
                "Evasion (Swift)": ["+2%", "+2.4%", "+2.8%", "+3.2%", "+3.6%", "+4%", "+4.4%", "+4.8%", "+5.2%", "+7%"],
                "Speed (Swift)": ["x1.04", "x1.05", "x1.07", "x1.08", "x1.1", "x1.11", "x1.13", "x1.14", "x1.16", "x1.20"],
            }
        },
        "Rouse Spirits":{
            "Usage": "Passive",
            "Unlock": "Full Proficiency (Lv 2)",
            "Description": "At the end of each turn, if you have a Stance (or Force Boost) active, recover TP.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Gain": ["1", "2", "3", "5"],
            }
        },
        "Speed Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase accuracy, evasion and action speed.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Accuracy Up": ["+2.5%", "+3.1%", "+3.7%", "+5.7%", "+6.3%", "+6.9%", "+7.5%", "+10%"],
                "Evasion Up": ["+2.5%", "+3.1%", "+3.7%", "+5.7%", "+6.3%", "+6.9%", "+7.5%", "+10%"],
                "Speed Up": ["x1.06", "x1.08", "x1.10", "x1.16", "x1.18", "x1.2", "x1.22", "x1.30"],
            }
        },
    },
},
"War Magus":{
    "Force":{
        "War Edge Power":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "War Edge skills will apply their secondary effect even if the target doesn't have an ailment.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Fairy Robe":{
            "Usage": "Force Break (Head, WIS)",
            "Unlock": "N/A",
            "Description": "Restore HP and remove binds/ailments for the whole party. Until the end of turn, prevent all types of negative inflictions (bind/ailment/stun/instakill/debuff) to the party.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Healing Power": ["160%", "230%", "300%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "War Heal":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "N/A",
            "Description": "Restore HP to one ally at the start of the turn, then again at the end of the turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8"],
                "Healing Power": ["45%", "49%", "53%", "57%", "75%", "80%", "85%", "90%", "95%", "125%"],
            }
        },
        "War Heal Line":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "War Heal (Lv 2)",
            "Description": "Restore HP to an ally line at the start of the turn, then again at the end of the turn.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "10", "10", "10", "10", "10", "15"],
                "Healing Power": ["40%", "43%", "46%", "49%", "60%", "63%", "66%", "69%", "72%", "95%"],
            }
        },
        "Random Disease":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "N/A",
            "Description": "Attempt to inflict one of Blind, Poison, Paralysis, Sleep or Curse to one enemy",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["3", "3", "3", "6", "6", "6", "6", "10"],
                "Infliction Chance": ["45%", "46%", "48%", "53%", "54%", "56%", "57%", "65%"],
                "Poison Damage": ["20", "23", "26", "35", "38", "41", "44", "55"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Strength Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Random Disease (Lv 1)",
            "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, place a debuff on them for 7 turns, which decreases all damage dealt.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Attack Power": ["160%", "170%", "180%", "190%", "200%", "250%"],
                "Damage Dealt": ["-10%", "-11%", "-12%", "-13%", "-14%", "-20%"],
                "Accuracy": ["+15%", "+15%", "+15%", "+15%", "+15%", "+15%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Guard Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Random Disease (Lv 1)",
            "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, place a debuff on them for 7 turns, which increases all damage taken.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Attack Power": ["160%", "170%", "180%", "190%", "200%", "250%"],
                "Damage Taken": ["+15%", "+17%", "+19%", "+21%", "+23%", "+30%"],
                "Accuracy": ["+15%", "+15%", "+15%", "+15%", "+15%", "+15%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Displace":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "N/A",
            "Description": "Remove binds and ailments on one ally, then attempt to inflict them onto one enemy.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["8", "8", "8", "12"],
                "Infliction Chance": ["20%", "25%", "30%", "50%"],
                "Action Speed": ["80%", "80%", "80%", "80%"],
            }
        },
        "Vampire":{
            "Usage": "Passive (WIS)",
            "Unlock": "N/A",
            "Description": "If you deal damage to an enemy with an ailment, restore HP to your line. (Max once per turn)",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "Fixed HP Gain": ["11", "14", "17", "20", "23", "34"],
                "Healing Power": ["50%", "55%", "60%", "65%", "70%", "100%"],
            }
        },
        "War Edge Master":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Allows you to also use War Edge skills with a Staff. If a Sword is equipped, increase Max TP. If a Staff is equipped, increase damage dealt.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Up": ["+6%", "+8%", "+10%", "+12%", "+14%", "+16%", "+18%", "+25%"],
                "Damage Dealt": ["+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+15%"],
            }
        },
        "Take":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Take points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "War Revive":{
            "Usage": "Active (Head)",
            "Unlock": "War Heal Line (Lv 3)",
            "Description": "Revive one ally at the start of the turn, then there's a chance to revive them again at the end of the turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "16", "16", "16", "16", "16", "25"],
                "HP Gain": ["1", "10", "20", "30", "70", "80", "90", "100", "110", "200"],
                "Repeat Chance": ["25%", "29%", "33%", "37%", "52%", "57%", "62%", "67%", "72%", "100%"],
            }
        },
        "Artery":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "War Revive (Lv 2)",
            "Description": "Place a buff on all allies for 3 turns, which restores HP to them when they act (max once per turn).",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "8", "15"],
                "Healing Power": ["25%", "27%", "30%", "32%", "35%", "50%"],
                "Action Speed": ["40%", "60%", "80%", "100%", "120%", "200%"],
            }
        },
        "War Response":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "War Revive (Lv 2)",
            "Description": "Place a debuff on one enemy for 3 turns, which restores HP to the party when the target acts (max once per turn).",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7", "13"],
                "Healing Power": ["20%", "22%", "24%", "26%", "28%", "40%"],
                "Action Speed": ["40%", "60%", "80%", "100%", "120%", "200%"],
            }
        },
        "Headcut":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Strength Slash (Lv 2)",
            "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, attempt to inflict Head Bind.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "11", "11", "11", "11", "16"],
                "Attack Power": ["190%", "198%", "206%", "230%", "238%", "246%", "254%", "300%"],
                "Infliction Chance": ["55%", "57%", "59%", "66%", "69%", "72%", "75%", "85%"],
                "Accuracy": ["+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Armcut":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Guard Slash (Lv 2)",
            "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, attempt to inflict Arm Bind.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "11", "11", "11", "11", "16"],
                "Attack Power": ["190%", "198%", "206%", "230%", "238%", "246%", "254%", "300%"],
                "Infliction Chance": ["55%", "57%", "59%", "66%", "69%", "72%", "75%", "85%"],
                "Accuracy": ["+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Legcut":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Headcut (Lv 2), Armcut (Lv 2)",
            "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, attempt to inflict Leg Bind.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "11", "11", "11", "11", "16"],
                "Attack Power": ["190%", "198%", "206%", "230%", "238%", "246%", "254%", "300%"],
                "Infliction Chance": ["55%", "57%", "59%", "66%", "69%", "72%", "75%", "85%"],
                "Accuracy": ["+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Rouse":{
            "Usage": "Passive",
            "Unlock": "Vampire (Lv 2)",
            "Description": "Increase Force Gauge gains for each enemy that's afflicted with a bind.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "Force Up": ["+2%", "+3%", "+4%", "+6%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase Max HP.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "HP Up": ["+5%", "+6%", "+7%", "+11%", "+12%", "+13%", "+14%", "+20%"],
            }
        },
        "Status DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase resistance to bind/ailment inflictions.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Infliction Vulnerability": ["x0.92", "x0.91", "x0.9", "x0.85", "x0.84", "x0.83", "x0.82", "x0.75"],
            }
        },
    },
    "Master (Lv 40)":{
        "War Heal All":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Artery (Lv 2), War Response (Lv 2)",
            "Description": "Restore HP to the whole party at the start of the turn, then again at the end of the turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "21", "21", "21", "21", "21", "30"],
                "Healing Power": ["35%", "37%", "39%", "41%", "48%", "50%", "52%", "54%", "56%", "70%"],
            }
        },
        "Barrier":{
            "Usage": "Active (Arms)",
            "Unlock": "War Heal All (Lv 3)",
            "Description": "Chance to nullify bind/ailment/debuff inflictions to party members this turn.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20"],
                "Activation Chance": ["70%", "71%", "72%", "73%", "79%", "81%", "82%", "84%", "85%", "90%"],
                "Max. Activations": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3"],
            }
        },
        "Ailing Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Legcut (Lv 3)",
            "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, increase damage dealt by 150%.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "15", "24"],
                "Attack Power": ["170%", "180%", "190%", "200%", "210%", "260%"],
                "Accuracy": ["+15%", "+15%", "+15%", "+15%", "+15%", "+15%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Mind Drain":{
            "Usage": "Passive (WIS)",
            "Unlock": "Rouse (Lv 2)",
            "Description": "If you damage an enemy afflicted by a bind and an ailment, restore TP to your line.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "Fixed TP Gain": ["1", "2", "3", "4", "5", "6"],
                "Healing Power": ["2%", "3%", "4%", "5%", "6%", "10%"],
            }
        },
        "Epidemic":{
            "Usage": "Passive (LUC)",
            "Unlock": "Mind Drain (Lv 3)",
            "Description": "Normal attacks gain a chance to inflict Blind, Poison, Paralysis, Sleep or Curse.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "Infliction Chance": ["1%", "2%", "3%", "4%"],
                "Poison Damage": ["20", "25", "30", "45"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase physical damage dealt.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Damage Dealt": ["+4%", "+5%", "+6%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
    },
},
"Highlander":{
    "Force":{
        "Hero Battle":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase damage dealt with Spear skills. Restore HP to the party based on your damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt": ["x1.4"],
                "HP Drain": ["15%"],
            }
        },
        "Gae Bolg":{
            "Usage": "Force Break (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Deal ranged Stab damage to all enemies. Recover TP based on your damage dealt.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["450%", "900%", "1350%"],
                "TP Drain": ["3%", "3%", "3%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Long Thrust":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Spear: Deal ranged Stab damage to one enemy.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["3", "3", "3", "5", "5", "5", "5", "8"],
                "Attack Power": ["160%", "168%", "176%", "211%", "219%", "227%", "235%", "280%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
            }
        },
        "Spear Assist":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Long Thrust (Lv 2)",
            "Description": "Spear: Deal melee Stab damage to one enemy at the end of turn. If any allies have used elemental attacks this turn, add the element of the most recent one and increase damage dealt by 100%.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "16"],
                "Attack Power": ["110%", "113%", "116%", "119%", "133%", "136%", "139%", "142%", "145%", "170%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            }
        },
        "Turning Tide":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Restore HP to the whole party each time you kill an enemy. Healing is based on each unit's Max HP.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "HP Gain": ["10+10%", "12+12%", "14+14%", "16+16%", "18+18%", "25+25%"],
            }
        },
        "Draining Thrust":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Turning Tide (Lv 2)",
            "Description": "Spear: Spend part of your current HP to deal melee Stab damage to the enemy front line.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "HP Cost": ["25%", "25%", "25%", "25%", "25%", "40%"],
                "Attack Power": ["125%", "135%", "145%", "155%", "165%", "270%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Legion Thrust":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Turning Tide (Lv 2)",
            "Description": "Spear: Spend part of other allies' current HP to deal melee Stab damage to the enemy front line.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6", "12"],
                "HP Cost": ["15%", "15%", "15%", "15%", "15%", "25%"],
                "Attack Power": ["160%", "170%", "180%", "190%", "200%", "300%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Spirit Shield":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Spend part of your current HP to place a buff on an ally line for 3 turns, which decreases elemental damage taken.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "5", "5", "9"],
                "HP Cost": ["20%", "20%", "20%", "34%"],
                "Damage Taken": ["-20%", "-22%", "-24%", "-30%"],
                "Action Speed": ["150%", "150%", "150%", "150%"],
            }
        },
        "Bloody Veil":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "When you loss HP from any source, decrease all attack damage taken until the end of the turn.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "Damage Taken": ["-20%", "-22%", "-24%", "-26%", "-28%", "-34%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase Max HP.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "HP Up": ["+5%", "+6%", "+7%", "+11%", "+12%", "+13%", "+14%", "+20%"],
            }
        },
        "Mine":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Mine points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Head Pierce":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Spear Assist (Lv 3)",
            "Description": "Spear: Deal melee Stab damage to one enemy, with a chance to inflict Head Bind or Instant Death.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7", "13"],
                "Attack Power": ["180%", "195%", "210%", "225%", "240%", "300%"],
                "Bind Chance": ["25%", "27%", "29%", "31%", "33%", "40%"],
                "Death Chance": ["6%", "7%", "8%", "9%", "10%", "13%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Delayed Charge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Spear: Spend part of your current HP to prepare an attack that will hit in 2~4 more turns, at the end of the turn. Deals ranged Stab damage to one enemy. Using Cross Charge activates it early, but damage is multiplied by 0.75 for each remaining charge turn. (Can't use again while preparing. Cancelled if you die while preparing)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "14", "14", "14", "14", "14", "20"],
                "HP Cost": ["15%", "15%", "15%", "15%", "20%", "20%", "20%", "20%", "20%", "25%"],
                "Turn Delay": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "4"],
                "Attack Power": ["340%", "350%", "360%", "370%", "500%", "515%", "530%", "545%", "560%", "780%"],
                "Accuracy": ["+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%"],
            }
        },
        "Draining Burst":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Draining Thrust (Lv 2)",
            "Description": "Spear: Spend part of your current HP to deal melee Stab damage to all enemies.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "12", "12", "12", "12", "17"],
                "HP Cost": ["35%", "35%", "35%", "50%", "50%", "50%", "50%", "65%"],
                "Attack Power": ["120%", "130%", "140%", "200%", "210%", "220%", "230%", "320%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Legion Burst":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Legion Thrust (Lv 2)",
            "Description": "Spear: Spend part of other allies' current HP to deal melee Stab damage to all enemies.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "14", "14", "14", "14", "20"],
                "HP Cost": ["25%", "25%", "25%", "30%", "30%", "30%", "30%", "35%"],
                "Attack Power": ["180%", "192%", "204%", "244%", "256%", "268%", "280%", "350%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Blood Fortune":{
            "Usage": "Active (Head)",
            "Unlock": "Spirit Shield (Lv 1)",
            "Description": "Spend part of the whole party's current HP to place a buff on the whole party for 3~5 turns, which increases bind/ailment infliction rate.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "12", "12", "12", "12", "18"],
                "HP Cost": ["15%", "15%", "15%", "25%", "25%", "25%", "25%", "35%"],
                "Infliction Up": ["x1.1", "x1.13", "x1.16", "x1.16", "x1.19", "x1.22", "x1.25", "x1.25"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Battle Instinct":{
            "Usage": "Passive",
            "Unlock": "Blood Fortune (Lv 2)",
            "Description": "At the start of battle there's a chance to place a buff on the whole party for 3 turns, which nullifies one ailment infliction. (Buff is consumed when activated)",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["15%", "20%", "25%", "30%", "35%", "50%"],
            }
        },
        "Bloody Offense":{
            "Usage": "Active (Head)",
            "Unlock": "Bloody Veil (Lv 2)",
            "Description": "Place a buff on an ally line for 3~5 turns, which increases all damage dealt but makes them lose HP when they act.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "9", "9", "9", "9", "14"],
                "Damage Dealt": ["+20%", "+25%", "+30%", "+30%", "+35%", "+40%", "+45%", "+45%"],
                "HP Loss": ["10%", "12%", "14%", "14%", "16%", "18%", "20%", "20%"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Bloodlust":{
            "Usage": "Passive (STR)",
            "Unlock": "Bloody Offense (Lv 2)",
            "Description": "Chance to attack a random enemy each time you lose HP.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["10%", "13%", "16%", "19%", "28%", "31%", "34%", "37%", "40%", "50%"],
                "Attack Power": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
            }
        },
        "Phys DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decrease physical damage taken.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Damage Taken": ["-4%", "-5%", "-6%", "-9%", "-10%", "-11%", "-12%", "-15%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Spear Reversal":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Head Pierce (Lv 3)",
            "Description": "Spear: Deal melee Stab damage to one enemy. Increase damage dealt by 200% if the target's remaining HP% is higher than yours.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "9", "14"],
                "Attack Power": ["170%", "180%", "190%", "200%", "210%", "270%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Cross Charge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Delayed Charge (Lv 2)",
            "Description": "Spear: Spend part of your current HP to deal melee Stab damage to one enemy. If Delayed Charge is preparing, activate it and increase this skill's damage dealt by 150%.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["13", "13", "13", "13", "13", "17"],
                "HP Cost": ["20%", "20%", "20%", "20%", "20%", "20%"],
                "Attack Power": ["200%", "210%", "220%", "230%", "240%", "300%"],
                "Accuracy (Solo)": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Accuracy (Combo)": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Legion Charge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Legion Burst (Lv 3)",
            "Description": "Spear: Spend part of other allies' current HP to deal melee Stab damage to one enemy.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["13", "13", "13", "13", "13", "17", "17", "17", "17", "17"],
                "HP Cost": ["15%", "15%", "15%", "15%", "30%", "30%", "30%", "30%", "30%", "50%"],
                "Attack Power": ["350%", "365%", "380%", "395%", "500%", "515%", "530%", "545%", "560%", "700%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Allied Bonds":{
            "Usage": "Passive",
            "Unlock": "Legion Charge (Lv 2)",
            "Description": "If one of your skills consumes HP of other allies in your line, restore TP to them at the end of turn.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Gain": ["2+1%", "3+1%", "4+1%", "6+2%"],
            }
        },
        "Black Sabbath":{
            "Usage": "Active (Head, STR)",
            "Unlock": "Bloodlust (Lv 3)",
            "Description": "Deal ranged Almighty damage to all enemies. The party recovers HP based on your damage dealt.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["15", "15", "15", "22", "22", "22", "22", "30"],
                "Attack Power": ["150%", "155%", "160%", "185%", "190%", "195%", "200%", "250%"],
                "Damage Drain": ["15%", "15%", "15%", "15%", "15%", "15%", "15%", "15%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase physical damage dealt.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Damage Dealt": ["+4%", "+5%", "+6%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
    },
},
"Gunner":{
    "Force":{
        "Double Action":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Gun skills are performed twice. The second instance has decreased attack/healing power.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Effect Down": ["x0.4"],
            }
        },
        "Riot Gun":{
            "Usage": "Force Break (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Deal ranged Stab damage and inflict Stun to one enemy.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["400%", "800%", "1200%"],
                "Infliction Chance": ["1000%", "1000%", "1000%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Rapid Fire":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Deal 3 hits of ranged Stab damage to one enemy. Fast but inaccurate.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "8", "8", "8", "8", "12"],
                "Attack Power": ["75%", "79%", "83%", "95%", "99%", "103%", "107%", "130%"],
                "Accuracy": ["-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Splash Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Rapid Fire (Lv 3)",
            "Description": "Deal ranged Stab damage to one enemy, with splash effect.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "11", "11", "11", "11", "15"],
                "Attack Power": ["180%", "188%", "196%", "226%", "234%", "242%", "250%", "300%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Leg Snipe":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Deal ranged Stab damage to one enemy, with a chance to inflict Leg Bind. Slow but cannot miss.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Attack Power": ["160%", "166%", "172%", "178%", "198%", "204%", "210%", "216%", "222%", "260%"],
                "Infliction Chance": ["40%", "40%", "40%", "40%", "50%", "50%", "50%", "50%", "50%", "60%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Arm Snipe":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Leg Snipe (Lv 2)",
            "Description": "Deal ranged Stab damage to one enemy, with a chance to inflict Arm Bind. Slow but cannot miss.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Attack Power": ["160%", "166%", "172%", "178%", "198%", "204%", "210%", "216%", "222%", "260%"],
                "Infliction Chance": ["40%", "40%", "40%", "40%", "50%", "50%", "50%", "50%", "50%", "60%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Cover Support":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "When you Defend in the back line, restore HP to the front line. Healing is based on each unit's Max HP.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "HP Gain": ["8+5%", "9+6%", "10+7%", "11+8%", "12+9%", "15+15%"],
            }
        },
        "Shell Shock":{
            "Usage": "Active (Arms, LUC)",
            "Unlock": "Cover Support (Lv 2)",
            "Description": "Weaken the enemy back line for this turn, which decreases their offense, defense, accuracy and evasion. Also attempts to inflict Stun.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["4", "4", "4", "7"],
                "Damage Dealt": ["-15%", "-17%", "-19%", "-25%"],
                "Damage Taken": ["+15%", "+18%", "+21%", "+30%"],
                "Accuracy": ["-10%", "-11%", "-12%", "-15%"],
                "Evasion": ["-15%", "-18%", "-21%", "-30%"],
                "Infliction Chance": ["40%", "45%", "50%", "65%"],
                "Action Speed": ["300%", "300%", "300%", "300%"],
            }
        },
        "Medic Bullet":{
            "Usage": "Active (Arms, WIS)",
            "Unlock": "N/A",
            "Description": "Gun: Restore HP and remove ailments for one ally.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6", "10"],
                "Fixed HP Gain": ["15", "19", "23", "27", "31", "50"],
                "Healing Power": ["10%", "14%", "18%", "22%", "26%", "40%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "250%"],
            }
        },
        "Pop Flare":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Place a buff on the whole party for 3 turns, which increases accuracy.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "7"],
                "Accuracy Up": ["+15%", "+16.5%", "+18%", "+19.5%", "+21%", "+30%"],
                "Action Speed": ["40%", "60%", "80%", "100%", "120%", "200%"],
            }
        },
        "Mine":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Mine points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Feint Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Splash Shot (Lv 2)",
            "Description": "Deal ranged Stab damage to an enemy line. Places a debuff on the targets for 3 turns, which decreases evasion.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "17"],
                "Attack Power": ["150%", "158%", "166%", "174%", "182%", "220%"],
                "Evasion Down": ["-10%", "-11.5%", "-13%", "-14.5%", "-16%", "-25%"],
                "Accuracy": ["+0%", "+15%", "+30%", "+45%", "+50%", "+100%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Scattershot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Feint Shot (Lv 2)",
            "Description": "Deal ranged Stab damage to all enemies.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["12", "12", "12", "18", "18", "18", "18", "24"],
                "Attack Power": ["170%", "178%", "186%", "211%", "219%", "227%", "235%", "275%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Head Snipe":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Deal ranged Stab damage to one enemy, with a chance to inflict Head Bind. Slow but cannot miss.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Attack Power": ["160%", "166%", "172%", "178%", "198%", "204%", "210%", "216%", "222%", "260%"],
                "Infliction Chance": ["40%", "40%", "40%", "40%", "50%", "50%", "50%", "50%", "50%", "60%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Act Quick":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Enter a charge state until the end of next turn, which increases action speed and decreases TP costs.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["2", "2", "2", "2"],
                "Speed Up": ["x10.0", "x10.0", "x10.0", "x10.0"],
                "TP Costs Down": ["x0.9", "x0.6", "x0.45", "0.25"],
                "Action Speed": ["50%", "50%", "50%", "50%"],
            }
        },
        "Charged Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Act Quick (Lv 2)",
            "Description": "Deal ranged Stab damage to one enemy. Increase damage taken by 100% until it activates.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "19", "19", "19", "19", "19", "24"],
                "Attack Power": ["500%", "515%", "530%", "545%", "605%", "625%", "645%", "665%", "685%", "820%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"],
            }
        },
        "Preemptive Fire":{
            "Usage": "Passive",
            "Unlock": "Shell Shock (Lv 1)",
            "Description": "Chance to automatically activate Shell Shock at the start of battle.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "Action Speed": ["20%", "26%", "32%", "38%", "44%", "67%"],
            }
        },
        "Preemptive Flare":{
            "Usage": "Passive",
            "Unlock": "Pop Flare (Lv 2)",
            "Description": "Chance to automatically activate Pop Flare at the start of battle.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "Action Speed": ["15%", "20%", "25%", "30%", "35%", "50%"],
            }
        },
        "Penetrator":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Single-hit, single-target attacks have a chance to gain pierce effect.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Action Speed": ["18%", "23%", "28%", "33%", "38%", "43%", "48%", "66%"],
            }
        },
        "TP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase Max HP.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "HP Up": ["+7%", "+9%", "+11%", "+17%", "+19%", "+21%", "+23%", "+30%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Ricochet":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Scattershot (Lv 2)",
            "Description": "Deal multiple hits of ranged Stab damage to random enemies. Very innacurate.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "27", "27", "27", "27", "27", "35"],
                "Attack Power": ["134%", "140%", "146%", "152%", "152%", "159%", "166%", "173%", "180%", "180%"],
                "Min. Hits": ["2", "2", "2", "2", "2", "2", "2", "2", "2", "3"],
                "Max. Hits": ["5", "5", "5", "5", "6", "6", "6", "6", "6", "7"],
                "Accuracy": ["-60%", "-60%", "-60%", "-60%", "-60%", "-60%", "-60%", "-60%", "-60%", "-60%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Charged Fire":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Charged Shot (Lv 3)",
            "Description": "Deal ranged Stab+Fire damage to one enemy. Increase damage taken by 100% until it activates.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["18", "18", "18", "18", "18", "30"],
                "Attack Power": ["400%", "425%", "450%", "475%", "500%", "640%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["30%", "30%", "30%", "30%", "30%", "30%"],
            }
        },
        "Charged Ice":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Charged Shot (Lv 3)",
            "Description": "Deal ranged Stab+Ice damage to one enemy. Increase damage taken by 100% until it activates.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["18", "18", "18", "18", "18", "30"],
                "Attack Power": ["400%", "425%", "450%", "475%", "500%", "640%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["30%", "30%", "30%", "30%", "30%", "30%"],
            }
        },
        "Charged Volt":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Charged Shot (Lv 3)",
            "Description": "Deal ranged Stab+Volt damage to one enemy. Increase damage taken by 100% until it activates.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["18", "18", "18", "18", "18", "30"],
                "Attack Power": ["400%", "425%", "450%", "475%", "500%", "640%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["30%", "30%", "30%", "30%", "30%", "30%"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase physical damage dealt.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Damage Dealt": ["+4%", "+5%", "+6%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
        "Multi-Shot":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Chance for attack skills to be activated an additional time.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Activation Chance": ["4%", "5%", "6%", "7%", "8%", "9%", "10%", "15%"],
            }
        },
    },
},
"Sovereign":{
    "Force":{
        "Victory Vow":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Order skills affect the whole party, and their TP cost is cut in half.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Proof of Nobility":{
            "Usage": "Force Break (Head)",
            "Unlock": "N/A",
            "Description": "For this turn, buffs cannot be lost and their effect is doubled.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
    },
    "Novice (Lv 1)":{
        "Attack Order":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(Order) Place a buff on an ally line for 3~5 turns, which increases damage dealt.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "8", "8", "8", "8", "13"],
                "Damage Dealt": ["+17%", "+20%", "+23%", "+23%", "+27%", "+31%", "+35%", "+35%"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Fire Arms":{
            "Usage": "Active (Head)",
            "Unlock": "Attack Order (Lv 2)",
            "Description": "Place a buff on an ally line for 3~5 turns, which increases Fire damage dealt and imbues their weapons with Fire damage.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "11", "11", "11", "11", "17"],
                "Damage Dealt": ["x1.05", "x1.1", "x1.15", "x1.15", "x1.2", "x1.25", "x1.3", "x1.3"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Freeze Arms":{
            "Usage": "Active (Head)",
            "Unlock": "Attack Order (Lv 2)",
            "Description": "Place a buff on an ally line for 3~5 turns, which increases Ice damage dealt and imbues their weapons with Ice damage.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "11", "11", "11", "11", "17"],
                "Damage Dealt": ["x1.05", "x1.1", "x1.15", "x1.15", "x1.2", "x1.25", "x1.3", "x1.3"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Shock Arms":{
            "Usage": "Active (Head)",
            "Unlock": "Attack Order (Lv 2)",
            "Description": "Place a buff on an ally line for 3~5 turns, which increases Volt damage dealt and imbues their weapons with Volt damage.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "11", "11", "11", "11", "17"],
                "Damage Dealt": ["x1.05", "x1.1", "x1.15", "x1.15", "x1.2", "x1.25", "x1.3", "x1.3"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Guard Order":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(Order) Place a buff on an ally line for 3~5 turns, which decreases damage taken.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "8", "8", "8", "8", "13"],
                "Damage Taken": ["-15%", "-17%", "-19%", "-19%", "-21%", "-23%", "-25%", "-25%"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Reinforce":{
            "Usage": "Passive (WIS)",
            "Unlock": "Guard Order (Lv 2)",
            "Description": "Restore HP to allies when you place a buff on them.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Healing Power": ["40%", "44%", "48%", "52%", "64%", "68%", "72%", "76%", "80%", "100%"],
            }
        },
        "Royal Veil":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "At the end of each turn, if your HP is full, restore HP to all allies. Healing is based on each unit's Max HP. (Does not stack)",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "HP Gain": ["6+5%", "8+6%", "10+7%", "15+10%"],
            }
        },
        "Monarch March":{
            "Usage": "Passive (Field)",
            "Unlock": "Royal Veil (Lv 2)",
            "Description": "Restore HP to the whole party for every 3 steps taken.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "HP Gain": ["2", "3", "5", "10"],
            }
        },
        "Negotiation":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Dispel 1 buff and 1 debuff from one ally. Restore HP and TP to them if one effect type was dispelled, doubled if both.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "2", "2"],
                "HP Gain": ["45+22.5%", "52.5+30%", "60+37.5%", "67.5+45%", "75+52.5%", "112.5+90%"],
                "TP Gain": ["1.5+1.5%", "3+1.5%", "4.5+1.5%", "6+1.5%", "7.5+1.5%", "12+4.5%"],
                "Action Speed": ["300%", "300%", "300%", "300%", "300%", "300%"],
            }
        },
        "Take":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Take points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Royal Dignity":{
            "Usage": "Passive (WIS)",
            "Unlock": "N/A",
            "Description": "Once per turn, if you have a buff, recover HP when attacked.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "Healing Power": ["40%", "50%", "60%", "70%", "80%", "120%"],
            }
        },
        "Royal Lineage":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Recover TP each time you receive a buff. (Does not activate if the buff cancelled a debuff)",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Gain": ["2", "3", "4", "5", "6", "8"],
            }
        },
        "Element Bomb I":{
            "Usage": "Active (Arms, INT)",
            "Unlock": "Fire/Freeze/Shock Arms (Lv 1)",
            "Description": "Dispel an elemental imbue on one ally. If successful, deal ranged damage of that element to all enemies.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "23"],
                "Attack Power": ["150%", "155%", "160%", "165%", "180%", "186%", "192%", "198%", "204%", "235%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Rally Order":{
            "Usage": "Active (Head)",
            "Unlock": "Reinforce (Lv 2)",
            "Description": "(Order) Place a buff on an ally line for 3~5 turns, which increases Max HP.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "11", "11", "11", "11", "17"],
                "HP Up": ["+20%", "+25%", "+30%", "+30%", "+35%", "+40%", "+45%", "+45%"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Protect Order":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Reinforce (Lv 2)",
            "Description": "(Order) Place a buff on an ally line for 3~5 turns, which restores HP at the end of each turn.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "13", "13", "13", "13", "20"],
                "Healing Power": ["35%", "44%", "53%", "53%", "62%", "71%", "80%", "80%"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Prevent Order":{
            "Usage": "Active (Head)",
            "Unlock": "Rally Order (Lv 2), Protect Order (Lv 2)",
            "Description": "(Order) Place a buff on an ally line for 3~5 turns, which has a chance to block bind/ailment inflictions. (Buff is consumed when activated)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "17", "17", "17", "17", "24"],
                "Activation Chance": ["60%", "62%", "64%", "71%", "73%", "75%", "77%", "85%"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Tactical Decree":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "For this turn, allies with buffs will recover TP based on their damage taken.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "6"],
                "Damage Drain": ["6%", "7%", "8%", "9%", "10%", "15%"],
            }
        },
        "Healing Decree":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "For this turn, allies with buffs will recover HP based on their damage dealt.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "5"],
                "Damage Drain": ["20%", "22%", "24%", "26%", "28%", "40%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Status DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase resistance to bind/ailment inflictions.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Infliction Vulnerability": ["x0.92", "x0.91", "x0.9", "x0.85", "x0.84", "x0.83", "x0.82", "x0.75"],
            }
        },
        "Element Bomb II":{
            "Usage": "Active (Arms, INT)",
            "Unlock": "Element Bomb I (Lv 3)",
            "Description": "Dispel an elemental imbue on one ally. If successful, deal 3 ranged hits of that element to random enemies.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "23"],
                "Attack Power": ["70%", "72%", "75%", "77%", "85%", "88%", "90%", "93%", "95%", "110%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Clearance":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Dispel all ally buffs, ally debuffs, enemy buffs and enemy debuffs, then restore HP and TP to the whole party based on the amount of buffs/debuffs dispelled. (Base healing is multiplied by amount of dispells squared. This caps at x400 at 20 dispells, and each dispell beyond that instead adds 20 to this multiplier)",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["20", "20", "20", "20"],
                "HP Gain": ["0.75", "1", "1.25", "2"],
                "TP Gain": ["0.0375", "0.05", "0.0625", "0.1"],
            }
        },
        "Dauntless Order":{
            "Usage": "Active (Head)",
            "Unlock": "Prevent Order (Lv 1)",
            "Description": "(Order) Place a buff on an ally line for 3~5 turns, which gives them a chance to survive lethal damage, restoring HP if it activates. (Buff is consumed when activated)",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["15", "15", "15", "22", "22", "22", "22", "30"],
                "Activation Chance": ["40%", "43%", "46%", "53%", "56%", "59%", "62%", "70%"],
                "HP Gain": ["1", "20", "40", "100", "120", "140", "160", "250"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Final Decree":{
            "Usage": "Active (Head)",
            "Unlock": "Tactical Decree (Lv 2), Healing Decree (Lv 2)",
            "Description": "Can only be used if you have 3 buffs. Dispell all buffs on yourself, then increase damage dealt and decrease damage taken by the party this turn.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "20", "35"],
                "Damage Dealt": ["x1.22", "x1.24", "x1.26", "x1.28", "x1.3", "x1.4"],
                "Damage Taken": ["x0.78", "x0.76", "x0.74", "x0.72", "x0.7", "x0.6"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "Renew":{
            "Usage": "Passive",
            "Unlock": "Final Decree (Lv 3)",
            "Description": "When you dispell buffs on yourself, they have a chance to be reapplied.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["12%", "14%", "16%", "18%", "20%", "22%", "24%", "26%", "28%", "40%"],
            }
        },
    },
},
"Ninja":{
    "Force":{
        "Diversion Gambit":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase evasion and enemy aggro. (Cannot be used while Ninpo: Double is active, and vice versa)",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Evasion Up": ["+65%"],
                "Aggro Up": ["+40%"],
            }
        },
        "Ninpo: Toxic Mist":{
            "Usage": "Force Break (Head, LUC)",
            "Unlock": "N/A",
            "Description": "Inflict Poison to all enemies. (For reference, <i>Final Poison Damage = (Base Poison Damage + Level/6 + Random1)*(1 + Level/25) + Random2</i>, where each Random is a number from 0 to 5)",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1~59", "60~98", "99~130"],
            "Data": {
                "Infliction Chance": ["1000%", "1000%", "1000%"],
                "Poison Damage": ["100", "200", "300"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Ninpo: Daggers":{
            "Usage": "Active (Head, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Deal 3~5 hits of ranged Stab damage to random enemies (max once each), with a chance to inflict Sleep.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "10"],
                "Attack Power": ["60%", "65%", "70%", "75%", "95%", "100%", "105%", "110%", "115%", "150%"],
                "Infliction Chance": ["35%", "35%", "35%", "35%", "45%", "45%", "45%", "45%", "45%", "55%"],
                "Hits": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["-6%", "-6%", "-6%", "-6%", "-6%", "-6%", "-6%", "-6%", "-6%", "-6%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Ninpo: Caltrops":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Ninpo:Daggers (Lv 3)",
            "Description": "Prepare to counterattack when target ally line takes physical damage. Deals ranged Cut damage, with a chance to inflict Poison.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "9"],
                "Attack Power": ["35%", "35%", "35%", "35%", "35%", "35%"],
                "Infliction Chance": ["60%", "65%", "70%", "75%", "80%", "100%"],
                "Poison Damage": ["25", "33", "41", "49", "57", "90"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "Shadow Bind":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Knife: Deal melee Cut damage to one enemy, with a chance to inflict Leg Bind.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "7", "7", "7", "7", "12"],
                "Attack Power": ["150%", "155%", "160%", "185%", "190%", "195%", "200%", "230%"],
                "Infliction Chance": ["45%", "45%", "45%", "55%", "55%", "55%", "55%", "70%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Bone Crusher":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Shadow Bind (Lv 3)",
            "Description": "Knife: Deal melee Bash damage to one enemy. Places a debuff on the target for 3 turns, which increases physical damage taken.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["5", "5", "5", "8", "8", "8", "8", "13"],
                "Attack Power": ["200%", "210%", "220%", "250%", "260%", "270%", "280%", "340%"],
                "Damage Taken": ["+10%", "+10%", "+10%", "+17%", "+17%", "+17%", "+17%", "+25%"],
                "Accuracy": ["-3%", "-3%", "-3%", "-3%", "-3%", "-3%", "-3%", "-3%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Reflexes":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Recover TP each time you evade an attack.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Gain": ["2+1%", "3+1%", "4+1%", "5+2%"],
            }
        },
        "Concealment":{
            "Usage": "Passive",
            "Unlock": "Reflexes (Lv 2)",
            "Description": "Increase evasion.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Evasion Up": ["+5%", "+6%", "+7%", "+8%", "+11%", "+12%", "+13%", "+14%", "+15%", "+20%"],
            }
        },
        "Ninpo: Mirage":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Summon a decoy copy of yourself with modified stats. This copy cannot act and has increased evasion and enemy aggro.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "10"],
                "Decoy HP": ["30%", "40%", "50%", "60%", "70%", "100%"],
                "Decoy Stats": ["50%", "60%", "70%", "80%", "90%", "120%"],
                "Evasion Up": ["+1%", "+4%", "+7%", "+10%", "+13%", "25%"],
                "Aggro Bonus": ["+500%", "+500%", "+500%", "+500%", "+500%", "+500%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
       "Proficiency":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase physical/elemental damage dealt. At max level, removes the backline penalty for melee attacks.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "Damage Dealt": ["+4%", "+6%", "+8%", "+10%"],
            }
        },
        "Chop":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Chop points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Ninpo: Mirror":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Ninpo:Caltrops (Lv 2)",
            "Description": "Target one enemy afflicted with an ailment, then attempt to inflict that ailment on all other enemies.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6", "10"],
                "Infliction Chance": ["40%", "44%", "48%", "52%", "56%", "70%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Izuna":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Bone Crusher (Lv 2)",
            "Description": "Knife: Deal melee Cut damage to one enemy, with a chance to inflict Petrify.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "11", "11", "11", "11", "16"],
                "Attack Power": ["170%", "178%", "186%", "211%", "219%", "227%", "235%", "280%"],
                "Infliction Chance": ["25%", "25%", "25%", "32%", "32%", "32%", "32%", "40%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Hawk Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Izuna (Lv 3)",
            "Description": "Knife: Deal multiple hits of melee Cut damage to random enemies.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "13", "13", "13", "13", "20"],
                "Attack Power": ["120%", "126%", "132%", "132%", "138%", "144%", "150%", "150%"],
                "Min. Hits": ["2", "2", "2", "2", "2", "2", "2", "3"],
                "Max. Hits": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Revenge Bomb":{
            "Usage": "Active (STR)",
            "Unlock": "N/A",
            "Description": "Once per battle, upon dying, deal ranged Fire damage to your killer.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "Attack Power": ["500%", "560%", "620%", "680%", "740%", "1000%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
            }
        },
        "Ninpo: Double":{
            "Usage": "Active (Head)",
            "Unlock": "Revenge Bomb (Lv 2)",
            "Description": "Spend part of your current HP and TP, then summon a fully controllable clone of yourself. (Cannot be used while Force Boost is active, and vice versa)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "HP/TP Cost": ["70%", "69%", "68%", "67%", "63%", "62%", "61%", "60%", "59%", "55%"],
                "Action Speed": ["300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%"],
            }
        },
        "Beheading":{
            "Usage": "Passive (LUC)",
            "Unlock": "Concealment (Lv 3)",
            "Description": "Normal attacks gain a chance to inflict Instant Death.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Infliction Chance": ["2%", "3%", "4%", "5%", "6%", "7%", "8%", "10%"],
            }
        },
        "Ninpo: Flight":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Drastically increase evasion against physical attacks until the end of turn. Bonus goes down each time you evade an attack.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "7", "7", "7", "7", "7", "13"],
                "Evasion Up": ["+50%", "+55%", "+60%", "+65%", "+84%", "+90%", "+96%", "+102%", "+108%", "+140%"],
                "Effect Down": ["-10%", "-11%", "-12%", "-13%", "-16.8%", "-18%", "-19.2%", "-20.4%", "-21.6%", "-28%"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "Auto-Mirage":{
            "Usage": "Passive",
            "Unlock": "Ninpo:Mirage (Lv 2)",
            "Description": "Chance to automatically activate Ninpo: Mirage at the start of battle.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["25%", "30%", "35%", "40%", "45%", "67%"],
            }
        },
        "Status ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase chance to successfully inflict binds/ailments.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "Infliction Up": ["x1.04", "x1.05", "x1.06", "x1.09", "x1.1", "x1.11", "x1.12", "x1.15"],
            }
        },
    },
    "Master (Lv 40)":{
        "Ninpo: Panic":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Ninpo:Mirror (Lv 2)",
            "Description": "Attempt to inflict Panic on all enemies.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["13", "13", "13", "13", "13", "20"],
                "Infliction Chance": ["28%", "30%", "32%", "34%", "36%", "45%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Return Malice":{
            "Usage": "Passive",
            "Unlock": "Ninpo:Panic (Lv 2)",
            "Description": "When you evade an attack, increase ailment infliction chance on the next turn.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Infliction Up": ["x1.1", "x1.13", "x1.16", "x1.19", "x1.22", "x1.35"],
            }
        },
        "Dominance":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Hawk Strike (Lv 2)",
            "Description": "Knife: Deal melee Cut damage to one enemy. Cannot miss. If the target has an ailment, recover Force.",
            "Starter": "1",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["12", "12", "12", "17", "17", "17", "17", "24"],
                "Attack Power": ["220%", "230%", "240%", "275%", "285%", "295%", "305%", "360%"],
                "Force Gain": ["10%", "11%", "12%", "15%", "16%", "17%", "18%", "25%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Drawing Slice":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Dominance (Lv 2), Ninpo:Double (Lv 2)",
            "Description": "Knife: Deal multiple hits of melee Cut damage to random enemies. Damage is doubled for each clone, but dispells all clones. (Damage is divided by 4 if there's no clones)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["20", "20", "20", "27", "27", "27", "27", "35"],
                "Attack Power": ["120%", "126%", "132%", "132%", "138%", "144%", "150%", "150%"],
                "Min. Hits": ["2", "2", "2", "2", "2", "2", "2", "3"],
                "Max. Hits": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "Ninpo: Smoke":{
            "Usage": "Active (Legs)",
            "Unlock": "Ninpo: Flight (Lv 2)",
            "Description": "Spend part of current HP to place a buff on yourself for 3 turns, which increases evasion.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20"],
                "HP Cost": ["10%", "10%", "10%", "10%", "30%", "30%", "30%", "30%", "30%", "50%"],
                "Evasion Up": ["+20%", "+20.8%", "+21.6%", "+22.4%", "+27%", "+27.8%", "+28.6%", "+29.4%", "+30.2%", "+40%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Mystic Calm":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decrease the TP cost of skills. (Costs have a minimum cap of 1)",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost Down": ["-1", "-2", "-3", "-4"],
            }
        },
    },
},
"Zodiac":{
    "Force":{
        "Divination":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase damage dealt with Zodiac's attack skills, and recover part of their spent TP.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt": ["x1.4"],
                "TP Refund": ["50%"],
            }
        },
        "Astrosign":{
            "Usage": "Force Break (Head, INT)",
            "Unlock": "N/A",
            "Description": "Deal ranged Fire+Ice+Volt damage to all enemies. For this turn, skills from your allies spend 0 TP.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["300%", "550%", "800%"],
            }
        },
    },
    "Novice (Lv 1)":{

    },
    "Veteran (Lv 20)":{

    },
    "Master (Lv 40)":{

    },
},
"Farmer":{
    "Force":{
        "Item Echo":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Items used activate their effect twice.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Final Secret":{
            "Usage": "Force Break (Head)",
            "Unlock": "N/A",
            "Description": "Fill the Force Gauges of the whole party to 100%. Also has a 33% chance to restore broken Force Gauges.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
    },
    "Novice (Lv 1)":{

    },
    "Veteran (Lv 20)":{

    },
    "Master (Lv 40)":{

    },
},
"Shogun":{
    "Force":{
        "Unified Effort":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase Max HP and damage dealt for the whole party.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "HP Up": ["+40%"],
                "Damage Dealt": ["x1.15"],
            }
        },
        "Decoy Party":{
            "Usage": "Force Break (Head)",
            "Unlock": "N/A",
            "Description": "For this turn, each ally will block the first enemy action (attack or any infliction type) that targets them.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
    },
    "Novice (Lv 1)":{

    },
    "Veteran (Lv 20)":{

    },
    "Master (Lv 40)":{

    },
},
"Landsknecht":{
    "Force":{
        "Trinity":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase damage dealt, accuracy and action speed.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt": ["x1.4"],
                "Accuracy Up": ["+50%"],
                "Speed Up": ["x3.0"],
            }
        },
        "Full Charge":{
            "Usage": "Force Break (Arms)",
            "Unlock": "N/A",
            "Description": "Become immune to attacks and inflictions until the end of this turn, and enter a charge state until the end of the next turn, which drastically increases damage dealt and action speed.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt": ["x3.3"],
                "Speed Up": ["x40.0"],
            }
        },
    },
    "Novice (Lv 1)":{

    },
    "Veteran (Lv 20)":{

    },
    "Master (Lv 40)":{

    },
},
"Nightseeker":{
    "Force":{
        "Killing Intent":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase damage dealt and ailment infliction chances.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt": ["x1.4"],
                "Infliction Up": ["x1.4"],
            }
        },
        "Disaster":{
            "Usage": "Force Break (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Deal melee Cut damage to one enemy. If the target has an ailment, force it to last 1 more turn.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["500%", "950%", "1400%"],
            }
        },
    },
    "Novice (Lv 1)":{

    },
    "Veteran (Lv 20)":{

    },
    "Master (Lv 40)":{

    },
},
"Arcanist":{
    "Force":{
        "Circle Paradise":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase bind/ailment infliction chances. Circle duration does not go down, and they don't get dispelled by your skills.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Infliction Up": ["x1.4"],
            }
        },
        "Releasal Spell":{
            "Usage": "Force Break (Head)",
            "Unlock": "N/A",
            "Description": "Remove all buffs on one enemy, and reset their accumulative resistance.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
    },
    "Novice (Lv 1)":{

    },
    "Veteran (Lv 20)":{

    },
    "Master (Lv 40)":{

    },
},
"Imperial":{
    "Force":{
        "Ignition":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Drive Skills won't trigger the Overheated state.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Conversion":{
            "Usage": "Force Break (Head, WIS)",
            "Unlock": "N/A",
            "Description": "Recover a massive amount of TP. Excess healing increases Max TP until you die or the battle ends.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Healing Power": ["300%", "550%", "800%"],
            }
        },
    },
    "Novice (Lv 1)":{

    },
    "Veteran (Lv 20)":{

    },
    "Master (Lv 40)":{

    },
},
"Pugilist":{
    "Force":{
        "Bind Rush":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase bind infliction chance. For each attack you land against an enemy afflicted by a bind/ailment/stun, perform a follow up attack.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Infliction Up": ["x1.3"],
                "Attack Power\n(Follow Ups)": ["50%"],
            }
        },
        "Final Blow":{
            "Usage": "Force Break (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Deal melee Bash damage to one enemy, with a chance to inflict Head Bind, Arm Bind and Leg Bind.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["400%", "800%", "1200%"],
                "Infliction Chances": ["60%", "60%", "60%"],
            }
        },
    },
    "Novice (Lv 1)":{

    },
    "Veteran (Lv 20)":{

    },
    "Master (Lv 40)":{

    },
},
"Harbinger":{
    "Force":{
        "Endless Armor":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Miasma Armor's duration does not go down and your skills do not dispell it.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Miasma Tsunami":{
            "Usage": "Force Break (Head)",
            "Unlock": "N/A",
            "Description": "Weaken all enemies for this turn, which decreases their offense, defense, evasion, speed, and infliction resistance.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt": ["x0.65"],
                "Damage Taken": ["x1.35"],
                "Evasion Down": ["-100%"],
                "Speed Down": ["-60000%"],
                "Infliction Vulnerability": ["x1.4"],
            }
        },
    },
    "Novice (Lv 1)":{

    },
    "Veteran (Lv 20)":{

    },
    "Master (Lv 40)":{

    },
},
"Weapon Skills":{
    "Sword":{
        "Whirlwind":{
            "Usage": "Active (Arms, LUC)",
            "Unlock": "Wyvern's Wing",
            "Description": "Attempt to inflict Leg Bind on all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["5"],
                "Infliction Chance": ["50%"],
                "Action Speed": ["100%"],
            }
        },
        "Mind Vigor":{
            "Usage": "Active (Arms)",
            "Unlock": "Cheer Blade",
            "Description": "Place a buff on the whole party for 3 turns, which increases resistance against binds/ailments.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7"],
                "Infliction Resistance": ["+20%", "+23%", "+26%", "+29%", "+33%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Destructive Tusk":{
            "Usage": "Active (Head, STR)",
            "Unlock": "Seabeast's Tusk",
            "Description": "Deal melee Stab damage to one enemy line. Place a debuff on the targets for 3 turns, which decreases all damage dealt.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "15"],
                "Attack Power": ["180%", "195%", "210%", "225%", "240%"],
                "Damage Dealt": ["-11%", "-12%", "-13%", "-14%", "-15%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Wide Spark":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Lighting Blade",
            "Description": "Deal melee Cut+Volt damage to one enemy, with splash effect.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "12"],
                "Attack Power": ["200%", "210%", "220%", "230%", "240%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Swift Justice":{
            "Usage": "Active (Head)",
            "Unlock": "Sapling Sword",
            "Description": "Place a buff on one ally for 3 turns, which increases physical damage dealt and action speed but also increases physical damage taken.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "16"],
                "Damage Dealt": ["+20%", "+22%", "+25%", "+27%", "+30%", "+40%"],
                "Speed Up": ["x2.5", "x3.25", "x4.0", "x4.75", "x5.50", "x9.0"],
                "Damage Taken": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Queen's Verdict":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Queen's Sabre",
            "Description": "Deal 4~6 hits of ranged Bash damage to random enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["18"],
                "Attack Power": ["100%"],
                "Accuracy": ["-15%"],
                "Action Speed": ["60%"],
            }
        },
        "Massacre Wave":{
            "Usage": "Active (Head)",
            "Unlock": "Balmung",
            "Description": "Place a buff on the whole party for 3 turns, which increases physical/elemental damage dealt.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["14", "14", "14", "14", "14"],
                "Damage Dealt": ["+22%", "+24%", "+26%", "+28%", "+30%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Bite":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Caladbolg",
            "Description": "Deal melee Bash damage to one enemy, with splash effect and a chance to inflict Arm Bind.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["22"],
                "Attack Power": ["400%"],
                "Infliction Chance": ["30%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["60%"],
            }
        },
    },
    "Bow":{
        "Breaking Arrow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Kamatha",
            "Description": "Deal ranged Stab damage to one enemy. Place a debuff on the target for 3 turns, which increases physical damage taken.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5"],
                "Attack Power": ["200%", "210%", "220%", "230%", "240%"],
                "Damage Taken": ["+15%", "+16%", "+17%", "+18%", "+20%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Volt Barrage":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Reseph's Bow",
            "Description": "Deal ranged Stab+Volt damage to all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["10"],
                "Attack Power": ["200%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["70%"],
            }
        },
        "Thunder Wall":{
            "Usage": "Active (Head)",
            "Unlock": "Lightning Bow",
            "Description": "Place a buff on an ally line for 3 turns, which increases Volt resistance.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5"],
                "Resistance Up": ["+30%", "+32%", "+35%", "+37%", "+40%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Pop Flare":{
            "Usage": "Active (Arms)",
            "Unlock": "Coral Bow",
            "Description": "Place a buff on the whole party for 3 turns, which increases accuracy.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "7"],
                "Accuracy Up": ["+15%", "+16.5%", "+18%", "+19.5%", "+21%", "+30%"],
                "Action Speed": ["40%", "60%", "80%", "100%", "120%", "200%"],
            }
        },
        "Hellish Pinwheel":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Flamerat Bow",
            "Description": "Deal ranged Bash+Fire damage to one enemy, with splash effect.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "9"],
                "Attack Power": ["260%", "270%", "280%", "290%", "300%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Lick":{
            "Usage": "Active (Head)",
            "Unlock": "Leopardfrog Bow",
            "Description": "Place a debuff on all enemies for 3 turns, which increases physical/elemental damage taken.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["9"],
                "Damage Taken": ["+20%"],
                "Action Speed": ["100%"],
            }
        },
        "Calamity Arrows":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Infection Bow",
            "Description": "Deal ranged Stab damage to an enemy line, with a chance to inflict Curse or Petrify.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["14", "14", "14", "14", "14"],
                "Attack Power": ["220%", "230%", "240%", "250%", "260%"],
                "Infliction Chance": ["20%", "21%", "22%", "23%", "25%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Alluring Body":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Failnaught",
            "Description": "Place a debuff on all enemies for 3 turns, which decreases bind resistance. Also attempts to inflict Panic on all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["25"],
                "Bind Vulnerability": ["x1.25"],
                "Infliction Chance": ["30%"],
                "Action Speed": ["70%"],
            }
        },
    },
    "Katana":{
        "Claw Sever":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Dangosashi",
            "Description": "Deal melee Cut damage to one enemy. Place a debuff on the target for 3 turns, which decreases all damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["5"],
                "Attack Power": ["200%"],
                "Damage Dealt": ["-10%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["70%"],
            }
        },
        "Hilt Strike":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Mijinmaru",
            "Description": "Deal melee Bash damage to one enemy, with a chance to inflict Stun.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["7"],
                "Attack Power": ["280%"],
                "Infliction Chance": ["50%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["70%"],
            }
        },
        "Rage Fangs":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Nikkari",
            "Description": "Deal melee Bash damage to one enemy, with splash effect and a chance to inflict Panic.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "9"],
                "Attack Power": ["200%", "210%", "220%", "230%", "240%"],
                "Infliction Chance": ["25%", "27%", "30%", "32%", "35%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Foot Sweep":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Mikaeri",
            "Description": "Deal melee Cut damage to an enemy line. Place a debuff on the targets for 3 turns, which decreases evasion.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "12"],
                "Attack Power": ["220%", "230%", "240%", "250%", "260%"],
                "Evasion Down": ["-15%", "-16.2%", "-17.4%", "-18.7%", "-20%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Boulder Toss":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Kamui Ranketam",
            "Description": "Deal melee Bash damage to one enemy, with splash effect.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["10"],
                "Attack Power": ["360%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["60%"],
            }
        },
        "Bloodthirsty Blade":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Nihil Youtou",
            "Description": "Deal melee Cut damage to all enemies. Recover HP based on damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["8"],
                "Attack Power": ["350%"],
                "Damage Drain": ["35%"],
                "Accuracy": ["+10%"],
                "Action Speed": ["200%"],
            }
        },
        "Rend":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Jizoumaru",
            "Description": "Deal 3~5 hits of melee Cut damage to random enemies.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "20"],
                "Attack Power": ["80%", "85%", "90%", "95%", "100%"],
                "Accuracy": ["-30%", "-30%", "-30%", "-30%", "-30%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Dragon Smash":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Kurikara",
            "Description": "Deal 4~6 hits of melee Bash damage to random enemies, with a chance to inflict Stun.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["21"],
                "Attack Power": ["75%"],
                "Infliction Chance": ["20%"],
                "Accuracy": ["-15%"],
                "Action Speed": ["150%"],
            }
        },
        "Black Flash":{
            "Usage": "Active (Legs, STR, LUC)",
            "Unlock": "Ameno Habakiri",
            "Description": "Deal melee Stab damage to one enemy, with pierce effect and a chance to inflict Sleep. Recover HP based on damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["21"],
                "Attack Power": ["330%"],
                "Infliction Chance": ["35%"],
                "Damage Drain": ["15%"],
                "Accuracy": ["+20%"],
                "Action Speed": ["1000%"],
            }
        },
    },
    "Staff":{
        "Volt Strike":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Owl Staff",
            "Description": "Deal ranged Volt damage to one enemy.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3"],
                "Attack Power": ["64%", "68%", "72%", "76%", "80%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Torch Smash":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Palm Zhezl",
            "Description": "Deal ranged Fire damage to one enemy.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4"],
                "Attack Power": ["90%", "95%", "100%", "105%", "110%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Sumu Kasi":{
            "Usage": "Active (Arms, INT)",
            "Unlock": "Aqua Mace",
            "Description": "Deal ranged Bash+Ice damage to one enemy.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5"],
                "Attack Power": ["100%", "106%", "112%", "118%", "125%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Smoke Cannon":{
            "Usage": "Active (Head, INT, LUC)",
            "Unlock": "Serpentflame Staff",
            "Description": "Deal 2~5 hits of ranged Fire damage to random enemies, with a chance to inflict Blind.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["16"],
                "Attack Power": ["140%"],
                "Infliction Chance": ["35%"],
                "Accuracy": ["+15%"],
                "Action Speed": ["70%"],
            }
        },
        "Leg Zapper":{
            "Usage": "Active (Head, INT, LUC)",
            "Unlock": "Tanuki Staff",
            "Description": "Deal ranged Volt damage to one enemy, with pierce effect and a chance to inflict Leg Bing.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10"],
                "Attack Power": ["124%", "128%", "132%", "136%", "140%"],
                "Accuracy": ["+25%", "+25%", "+25%", "+25%", "+25%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Enchanted Eyes":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Madness Staff",
            "Description": "Deal ranged Fire damage to all enemies. Places a debuff on the targets for 3 turns, which increases physical/elemental damage taken.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["30"],
                "Attack Power": ["120%"],
                "Damage Taken": ["+15%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["40%"],
            }
        },
        "Coiling Vine":{
            "Usage": "Active (Arms, LUC)",
            "Unlock": "Pumpkin Bat",
            "Description": "Attempt to inflict Head Bind and Arm Bind on all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["12"],
                "Infliction Chance": ["30%"],
                "Action Speed": ["75%"],
            }
        },
        "Curse Strike":{
            "Usage": "Active (Head, STR)",
            "Unlock": "Kerykeion",
            "Description": "Deal melee Cut damage to one enemy, with pierce effect. Recover HP based on damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["25"],
                "Attack Power": ["500%"],
                "Damage Drain": ["15%"],
                "Accuracy": ["+50%"],
                "Action Speed": ["150%"],
            }
        },
    },
    "Gun":{
        "Harsh Buzz":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Butterfly Barrel",
            "Description": "Attempt to inflict Head Bind to an enemy line.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3"],
                "Infliction Chance": ["30%", "32%", "35%", "37%", "40%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Infernal Barrier":{
            "Usage": "Active (Arms)",
            "Unlock": "Flame Lance",
            "Description": "Place a buff on an ally line for 3 turns, which increases Fire resistance.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["5"],
                "Resistance Up": ["+40%"],
                "Action Speed": ["100%"],
            }
        },
        "Chrono Gatling":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Roar of the Sea",
            "Description": "Deal 3~8 hits of ranged Stab damage to one enemy.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["12"],
                "Attack Power": ["80%"],
                "Accuracy": ["-10%"],
                "Action Speed": ["60%"],
            }
        },
        "Barrage":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Shiyanqiang",
            "Description": "Deal 2~5 hits of ranged Stab damage to random enemies (max once each).",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10"],
                "Attack Power": ["200%", "210%", "220%", "230%", "240%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["250%", "250%", "250%", "250%", "250%"],
            }
        },
        "Calamity Cannon":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Calamity Cannon",
            "Description": "Deal ranged Bash damage to one enemy, with a chance to inflict Petrify, Curse, Paralysis and Panic.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["13"],
                "Attack Power": ["380%"],
                "Infliction Chance": ["7%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["40%"],
            }
        },
        "Halloween":{
            "Usage": "Active (Head, INT, LUC)",
            "Unlock": "Halloween Barrel",
            "Description": "Deal ranged Fire damage to one enemy, with a chance to inflict Head, Arm and Leg Bind.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["25"],
                "Attack Power": ["200%"],
                "Infliction Chance": ["25%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["50%"],
            }
        },
        "Sonic Scream":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Agneyastra",
            "Description": "Place a debuff on all enemies for 3 turns, which increases physical damage taken. Also attempts to inflict Sleep on all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["20"],
                "Damage Taken": ["+20%"],
                "Infliction Chance": ["45%"],
                "Action Speed": ["150%"],
            }
        },
    },
    "Spear":{
        "Flame Rush":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Horn Spear",
            "Description": "Deal ranged Fire damage to one enemy, with pierce effect.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["5"],
                "Attack Power": ["160%"],
                "Accuracy": ["+10%"],
                "Action Speed": ["100%"],
            }
        },
        "Silver Thrust":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Gae Dearg",
            "Description": "Deal ranged Stab damage to one enemy. Low accuracy but ignores Stab resistance.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["5"],
                "Attack Power": ["400%"],
                "Accuracy": ["-50%"],
                "Action Speed": ["100%"],
            }
        },
        "Leaping Rush":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Leaf Javelin",
            "Description": "Deal 2~5 hits of ranged Stab damage to random enemies.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "8"],
                "Attack Power": ["66%", "69%", "73%", "76%", "80%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Snow Windmill":{
            "Usage": "Active (Head)",
            "Unlock": "Snow Spear",
            "Description": "Place a buff on an ally line for 3 turns, which increases Ice resistance.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["5"],
                "Resistance Up": ["+40%"],
                "Action Speed": ["100%"],
            }
        },
        "Vertigo Slash":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Vertigo Pike",
            "Description": "Deal melee Cut damage to one enemy, with a chance to inflict Blind and Stun.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "8"],
                "Attack Power": ["260%", "270%", "280%", "290%", "300%"],
                "Infliction Chance": ["40%", "40%", "40%", "40%", "40%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Tri-Death":{
            "Usage": "Active (Head, STR, LUC)",
            "Unlock": "Sansageki",
            "Description": "Deal melee Stab damage to one enemy, with a chance to inflict Instant Death.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["10"],
                "Attack Power": ["350%"],
                "Infliction Chance": ["30%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["50%"],
            }
        },
        "Biting Flurry":{
            "Usage": "Active (Head, STR)",
            "Unlock": "Fangtianhuaji",
            "Description": "Deal melee Cut damage to all enemies.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "20"],
                "Attack Power": ["240%", "255%", "270%", "285%", "300%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Sleep Tail":{
            "Usage": "Active (Legs, STR, LUC)",
            "Unlock": "Rhongomyniad",
            "Description": "Deal melee Bash damage to an enemy line, with a chance to inflict Sleep.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["18"],
                "Attack Power": ["340%"],
                "Infliction Chance": ["50%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["120%"],
            }
        },
    },
    "Rapier":{
        "Hanging":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Choking Rapier",
            "Description": "Deal melee Stab damage to one enemy, with a chance to inflict Head Bind.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6"],
                "Attack Power": ["160%", "170%", "180%", "190%", "200%"],
                "Infliction Chance": ["35%", "37%", "40%", "42%", "45%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Vertigo Lash":{
            "Usage": "Active (Head, STR, LUC)",
            "Unlock": "Piercing Tongue",
            "Description": "Deal melee Stab damage to one enemy, with pierce effect and a chance to inflict Blind.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["8"],
                "Attack Power": ["230%"],
                "Infliction Chance": ["40%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["150%"],
            }
        },
        "Full Thrust":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Moralltach",
            "Description": "Consume 40% of current HP to deal melee Stab damage to one enemy.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["17", "17", "17", "17", "17"],
                "Attack Power": ["360%", "380%", "400%", "420%", "440%"],
                "Infliction Chance": ["35%", "37%", "40%", "42%", "45%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["250%", "250%", "250%", "250%", "250%"],
            }
        },
        "Rest":{
            "Usage": "Active (Arms)",
            "Unlock": "Steelbug's Piercer",
            "Description": "Recover HP. Healing is based on your Max HP.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["2"],
                "HP Gain": ["100+50%"],
                "Action Speed": ["500%"],
            }
        },
        "Hammerhead":{
            "Usage": "Active (Head, STR)",
            "Unlock": "Sauro Pallasch",
            "Description": "Deal melee Bash damage to all enemies.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "15"],
                "Attack Power": ["220%", "230%", "240%", "250%", "260%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Devourer Needle":{
            "Usage": "Active (Head, STR)",
            "Unlock": "Dune Needle",
            "Description": "Deal 4~6 hits of ranged Stab damage to random enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["15"],
                "Attack Power": ["80%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["80%"],
            }
        },
        "Fear Glint":{
            "Usage": "Active (Arms)",
            "Unlock": "Gorm Glas",
            "Description": "Place a buff on an ally line for 3 turns, which increases evasion.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "8"],
                "Evasion Up": ["+12%", "+12.7%", "+13.5%", "+14.2%", "+15%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Delta Block":{
            "Usage": "Active (Arms)",
            "Unlock": "Warped Mechablade",
            "Description": "Place a buff on an ally line for 3 turns, which increases physical resistances.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["12"],
                "Resistance Up": ["+20%"],
                "Action Speed": ["100%"],
            }
        },
        "Deathbringer":{
            "Usage": "Active (Head, STR, LUC)",
            "Unlock": "The Answerer",
            "Description": "Deal melee Bash damage to one enemy, with splash effect and a chance to inflict Petrify.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["17"],
                "Attack Power": ["380%"],
                "Infliction Chance": ["25%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["100%"],
            }
        },
    },
    "Knife":{
        "Fake-Out Stab":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Cross Knife",
            "Description": "Deal melee Stab damage to one enemy, with a chance to inflict Panic.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5"],
                "Attack Power": ["200%", "210%", "220%", "230%", "240%"],
                "Infliction Chance": ["27%", "29%", "31%", "33%", "35%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Phantom Swords":{
            "Usage": "Active (Legs)",
            "Unlock": "Rose Knife",
            "Description": "Place a debuff on all enemies for 3 turns, which decreases accuracy.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7"],
                "Accuracy Down": ["-8%", "-9%", "-10%", "-11%", "-12%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Venomous Stab":{
            "Usage": "Active (Legs, STR, LUC)",
            "Unlock": "Shadow Piercer",
            "Description": "Deal melee Stab damage to one enemy, with pierce effect and a chance to inflict Poison.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["10"],
                "Attack Power": ["340%"],
                "Infliction Chance": ["40%"],
                "Poison Damage": ["60"],
                "Accuracy": ["+0%"],
                "Action Speed": ["60%"],
            }
        },
        "Malice Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Phurba",
            "Description": "Deal melee Cut damage to one enemy. Places a debuff on the target for 3 turns, which decreases ailment resistance.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "12"],
                "Attack Power": ["240%", "255%", "270%", "285%", "300%"],
                "Infliction Vulnerability": ["x1.15", "x1.17", "x1.2", "x1.22", "x1.25"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Limb Crusher":{
            "Usage": "Active (Legs, STR, LUC)",
            "Unlock": "Metalfoot Knife",
            "Description": "Deal melee Bash damage to one enemy, with splash effect and a chance to inflict Arm Bind and Leg Bind.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "12"],
                "Attack Power": ["300%", "315%", "330%", "345%", "360%"],
                "Infliction Chance": ["20%", "21%", "22%", "23%", "25%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["65%", "65%", "65%", "65%", "65%"],
            }
        },
        "Pierce":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Futsuno Mitama",
            "Description": "Deal melee Stab damage to one enemy, with pierce effect. Places a debuff on the targets for 3 turns, which decreases accuracy.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["20"],
                "Attack Power": ["450%"],
                "Accuracy Down": ["-15%"],
                "Accuracy": ["+10%"],
                "Action Speed": ["80%"],
            }
        },
    },
    "Drive Blade":{
        "Gale Flash":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Shiden",
            "Description": "Deal ranged Cut damage to one enemy. Activates at the start of the turn.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5"],
                "Attack Power": ["200%", "210%", "220%", "230%", "240%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%"],
            }
        },
        "Darkness Rend":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Whirlwind",
            "Description": "Deal melee Cut damage to an enemy line, with a chance to inflict Curse.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["7"],
                "Attack Power": ["180%"],
                "Infliction Chance": ["40%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["100%"],
            }
        },
        "Snail Dance":{
            "Usage": "Active (Legs, LUC)",
            "Unlock": "Snailblade",
            "Description": "Attempt to inflict Sleep on all enemies.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7"],
                "Infliction Chance": ["50%", "53%", "57%", "61%", "65%"],
                "Action Speed": ["20%", "20%", "20%", "20%", "20%"],
            }
        },
        "Multi-Blast":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Peacemaker",
            "Description": "Deal ranged Stab damage to all enemies.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["14", "14", "14", "14", "14"],
                "Attack Power": ["180%", "190%", "200%", "210%", "220%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["175%", "175%", "175%", "175%", "175%"],
            }
        },
        "Blade Barrage":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Terminator",
            "Description": "Deal 3~5 hits of ranged Bash damage to random enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["15"],
                "Attack Power": ["80%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["80%"],
            }
        },
        "Ocean Rave":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Great Mountain",
            "Description": "Deal melee Bash damage to all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["30"],
                "Attack Power": ["400%"],
                "Accuracy": ["-35%"],
                "Action Speed": ["70%"],
            }
        },
    },
    "Fist":{
        "Thumb Jab":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Kakushu",
            "Description": "Deal melee Stab damage to one enemy, with a chance to inflict Blind.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["3"],
                "Attack Power": ["150%"],
                "Infliction Chance": ["30%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["100%"],
            }
        },
        "Boomerang Hook":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Loose Fist",
            "Description": "Deal melee Bash damage to an enemy line.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["9"],
                "Attack Power": ["240%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["75%"],
            }
        },
        "Chaos Scream":{
            "Usage": "Active (Head)",
            "Unlock": "Nicothoe Duster",
            "Description": "Place a debuff on all enemies for 3 turns, which decreases bind/ailment resistance.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["8"],
                "Infliction Vulnerability": ["x1.2"],
                "Action Speed": ["100%"],
            }
        },
        "Breath":{
            "Usage": "Active (Head)",
            "Unlock": "Zaftfaust",
            "Description": "Restore HP to yourself and your adjacent allies. Healing is based on your Max HP.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "HP Gain": ["20+12%", "25+14%", "30+16%", "35+18%", "40+20%", "60+25%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "New Challenger":{
            "Usage": "Active (Field)",
            "Unlock": "Jeweled Fist",
            "Description": "Start multiple enemy encounters in a row, with an increased chance of Rare Breeds appearing.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "2", "5"],
                "Min. Battles": ["1", "1", "1", "1", "1", "3"],
                "Max. Battles": ["3", "4", "5", "6", "7", "10"],
                "Rare Chance Up": ["+1%", "+2%", "+3%", "+4%", "+5%", "+10%"],
            }
        },
        "Sky Dive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Gryphbreaker",
            "Description": "Deal melee Cut damage to all enemies. Places a debuff on the targets for 3 turns, which decreases physical damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["21"],
                "Attack Power": ["200%"],
                "Damage Dealt": ["-10%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["40%"],
            }
        },
        "Reverse Slash":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Demon Fist",
            "Description": "Deal melee Cut damage to an enemy line.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["9"],
                "Attack Power": ["280%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["80%"],
            }
        },
        "Toxic Comet":{
            "Usage": "Active (Head, STR, LUC)",
            "Unlock": "Crawler Knuckles",
            "Description": "Deal 4~6 hits of melee Cut damage to random enemies (max once each), with a chance to inflict Poison.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["15"],
                "Attack Power": ["200%"],
                "Infliction Chance": ["40%"],
                "Poison Damage": ["60"],
                "Accuracy": ["-5%"],
                "Action Speed": ["70%"],
            }
        },
        "Death Pile":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Blast Piledriver",
            "Description": "Deal ranged Stab damage to one enemy, with a chance to inflict Instant Death.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["13"],
                "Attack Power": ["280%"],
                "Infliction Chance": ["20%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["40%"],
            }
        },
        "Hurricane Punch":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Polydeuces",
            "Description": "Deal melee Bash damage to all enemies, with a chance to inflict Paralysis.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["25"],
                "Attack Power": ["300%"],
                "Infliction Chance": ["35%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["40%"],
            }
        },
    },
    "Scythe":{
        "Vine Grab: Arm":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Thorn Scythe",
            "Description": "Deal melee Cut damage to an enemy line, with a chance to inflict Arm Bind.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["5"],
                "Attack Power": ["200%"],
                "Infliction Chance": ["30%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["100%"],
            }
        },
        "Guard Dance":{
            "Usage": "Active (Legs)",
            "Unlock": "Fossil Scythe",
            "Description": "Place a buff on the whole party for 3 turns, which decreases physical damage taken.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7"],
                "Damage Taken": ["-10%", "-11%", "-12%", "-13%", "-15%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Rending Claw":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Vogeljagd",
            "Description": "Deal melee Cut damage to one enemy. Has very low accuracy.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["7"],
                "Attack Power": ["600%"],
                "Accuracy": ["-50%"],
                "Action Speed": ["50%"],
            }
        },
        "Immobilizing Cut":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Silent Scythe",
            "Description": "Deal melee Cut damage to one enemy, with a chance to inflict Petrify.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10"],
                "Attack Power": ["240%", "255%", "270%", "285%", "300%"],
                "Infliction Chance": ["25%", "27%", "30%", "32%", "35%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Frozen Fury":{
            "Usage": "Active (Arms, INT)",
            "Unlock": "Frigid Scythe",
            "Description": "Deal 3~5 hits of ranged Ice damage to random enemies. Has very low accuracy.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["12"],
                "Attack Power": ["80%"],
                "Accuracy": ["-50%"],
                "Action Speed": ["60%"],
            }
        },
        "Evil Cry":{
            "Usage": "Active (Head)",
            "Unlock": "Lunar Scraper",
            "Description": "Place a buff on the whole party for 3 turns, which increases physical damage dealt.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10"],
                "Damage Dealt": ["+10%", "+11%", "+12%", "+13%", "+15%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Feast":{
            "Usage": "Active (Legs, STR, LUC)",
            "Unlock": "Cradle Edge",
            "Description": "Deal 2~4 hits of melee Cut damage to random enemies (max once each), with a chance to inflict Head, Arm and Leg Bind.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["28"],
                "Attack Power": ["400%"],
                "Infliction Chance": ["20%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["50%"],
            }
        },
    },
},
"Battle Items":{
    "Healing":{
        "Medica / Medica II / Medica III / Medica IV":{
            "Usage": "20 / 80 / 200 / 1.000 en",
            "Unlock": "N/A / Mint / Crabapple / Milkvetch",
            "Description": "Restores HP to one ally.",
            "Starter": "0",
            "Max Level": "4",
            "Levels": ["1", "2", "3", "4"],
            "Data": {
                "HP Gain": ["50", "100", "200", "500"],
            }
        },
        "Soma / Soma Prime":{
            "Usage": "800 / 4.000 en",
            "Unlock": "Melted Ice Core / Madhuca",
            "Description": "Restores HP to all allies.",
            "Starter": "0",
            "Max Level": "2",
            "Levels": ["1", "2"],
            "Data": {
                "HP Gain": ["100", "200"],
            }
        },
        "Amrita / Amrita II":{
            "Usage": "1.200 / 8.000 en",
            "Unlock": "Tranquilized Gel / Pineapple Syrup",
            "Description": "Restores TP to one ally.",
            "Starter": "0",
            "Max Level": "2",
            "Levels": ["1", "2"],
            "Data": {
                "TP Gain": ["40", "100"],
            }
        },
        "Hamao / Hamao Prime":{
            "Usage": "250 / 3.000 en",
            "Unlock": "Anra Fruit / Grenada",
            "Description": "Restores HP and TP to one ally.",
            "Starter": "0",
            "Max Level": "2",
            "Levels": ["1", "2"],
            "Data": {
                "HP Gain": ["100", "250"],
                "TP Gain": ["20", "50"],
            }
        },
        "Nectar / Nectar II":{
            "Usage": "300 / 5.000 en",
            "Unlock": "Culantro / Ambrosia",
            "Description": "Revives one ally.",
            "Starter": "0",
            "Max Level": "2",
            "Levels": ["1", "2"],
            "Data": {
                "HP Gain": ["20", "200"],
            }
        },
    },
    "Status":{
        "Theriaca α / Theriaca β":{
            "Usage": "100 en",
            "Unlock": "Forest Aloe / Small Flower",
            "Description": "Respectively removes binds or ailments from one ally.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Laudanum":{
            "Usage": "2.500 en",
            "Unlock": "Nasturtium",
            "Description": "Removes all buffs and debuffs on one enemy.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Unihorn":{
            "Usage": "2.500 en",
            "Unlock": "Matricaria",
            "Description": "Removes all buffs and debuffs on the whole party.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
    },
    "Power Up":{
        "Bravant":{
            "Usage": "350 en",
            "Unlock": "Sweet Leaf",
            "Description": "Places a buff on one ally for 5 turns, which increases physical damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt": ["+40%"],
            }
        },
        "Stonard":{
            "Usage": "350 en",
            "Unlock": "Longan",
            "Description": "Places a buff on one ally for 5 turns, which decreases physical damage taken.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Taken": ["-30%"],
            }
        },
        "Axcela":{
            "Usage": "2.000 en",
            "Unlock": "Scarlet Sugar",
            "Description": "Restores Force to one ally.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Force Gain": ["25%"],
            }
        },
        "Blaze/Freeze/Shock Oil":{
            "Usage": "30 en",
            "Unlock": "Burst Stink Gland",
            "Description": "Places a buff on one ally for 5 turns, which imbues their weapon with Fire/Ice/Volt damage.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Fire/Ice/Volt Mist":{
            "Usage": "800 en",
            "Unlock": "Mist Flower",
            "Description": "Places a buff on all allies for 5 turns, which increases resistance to Fire/Ice/Volt.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Resistance Up": ["+35%"],
            }
        },
        "All Mist":{
            "Usage": "3.000 en",
            "Unlock": "Oleander",
            "Description": "Places a buff on all allies for 5 turns, which increases resistance to Fire, Ice and Volt.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Resistance Up": ["+25%"],
            }
        },
    },
    "Attack (INT)":{
        "Fire/Ice/Volt Talisman":{
            "Usage": "200 en",
            "Unlock": "Spewing Peapod",
            "Description": "Deals ranged Fire/Ice/Volt damage to one enemy.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Attack Power": ["125%"],
                "Action Speed": ["90%"],
            }
        },
        "Flame/Freeze/Shock Talisman":{
            "Usage": "1.000 en",
            "Unlock": "Dried Stalk",
            "Description": "Deals ranged Fire/Ice/Volt damage to all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Attack Power": ["140%"],
                "Action Speed": ["90%"],
            }
        },
        "Cut/Bash/Stab Talisman":{
            "Usage": "700 en",
            "Unlock": "Conical Fruit",
            "Description": "Deals ranged Cut/Bash/Stab damage to all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Attack Power": ["140%"],
                "Action Speed": ["80%"],
            }
        },
    },
    "Infliction (LUC)":{
        "Poison/Blind/Stun/Sleep/Curse/Confuse/Petrify Gas":{
            "Usage": "250 en",
            "Unlock": "Poison Ferrule / Green Thorn / Big Shell / Sticky Goo /\nSpherical Bone / Caterpillar Fang / Cockatrice Tail",
            "Description": "Respectively attempts to inflict Poison, Blind, Paralysis, Sleep, Curse, Panic or Petrify on all enemies.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["Poi", "Bli", "Par", "Sle", "Cur", "Pan", "Pet"],
            "Data": {
                "Infliction Chance": ["45%", "40%", "40%", "50%", "50%", "30%", "30%"],
                "Poison Damage": ["50", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Head/Arm/Leg Binder":{
            "Usage": "250 en",
            "Unlock": "Faerie Wings",
            "Description": "Respectively attempts to inflict Head Bind, Arm Bind or Leg Bind on all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Infliction Chance": ["30%"],
                "Action Speed": ["80%"],
            }
        },
    },
    "Rewards":{
        "Formaldehyde":{
            "Usage": "5.000 en",
            "Unlock": "Screaming Snout",
            "Description": "Until the end of turn, enemies killed will drop all their materials.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Heavenly Gift":{
            "Usage": "3.000 en",
            "Unlock": "Sea Grapes",
            "Description": "Increases EXP earned this battle. (Repeated uses do not stack)",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "EXP Up": ["+100%"],
            }
        },
    }
},
}

//End of database

var descriptions = {
    "Hero":"Knights of Sword and Shield who leave afterimages as they move, letting them cover offense and defense simultaneously.",
    "Protector":"Durable knights who use their Shield to decrease damage dealt to the party.",
    "Medic":"Healers that effectively treat every kind of injury. Their Staff strikes assist by leaving the enemy vulnerable.",
    "Survivalist":"Rangers who fight with Bows. Their agility and sharp senses safeguard the party in and out of battle.",
    "Ronin":"Katana-users who favor offense over defense. They adopt different Stances to adjust to the situation.",
    "War Magus":"A dual-purpose class that switches between treating the party's afflictions and aggravating the enemy's.",
    "Highlander":"Offensive specialists who fight with Spears. They sacrifice their life force to carry out powerful attacks.",
    "Gunner":"A versatile backline class that uses Guns to cover offense, binding and support.",
    "Sovereign":"A support class that strenghtens and protects the party by granting and spending buffs.",
    "Ninja":"Stealthy assassins proficient in techniques of Knife-wielding, afflictions and diversion.",
    "Zodiac":"A magical attacker who uses elemental skills to hit the enemy's weakness.",
    "Farmer":"Specialists in exploration and resource gathering. Their combat skills can be awkward but surprisingly effective.",
    "Shogun":"Generals who lead the party through buffs and attack commands, or by fighting directly with dual Katanas.",
    "Landsknecht":"Frontline warriors with solid offense and defense. They lead the charge, encouraging their allies to follow up.",
    "Nightseeker":"Assassins who throw poisoned daggers from the shadows, going for the kill once the enemy is weak.",
    "Arcanist":"Support casters that summon magic circles to restrain the enemy and protect the party.",
    "Imperial":"Knights who wield mechanical Drive Blades. Their attacks are devastating but put a heavy strain in the weapon and wielder.",
    "Pugilist":"Brawlers who fight with their own Fists. They use combos of precise punches to quickly disable the enemy.",
    "Harbinger":"Reapers who summon noxious Miasma, spreading it to weaken the enemy or to ward off their attacks.",
    "Weapon Skills":"Skills borrowed from certain weapons.",
    "Battle Items":"Consumable items meant to aid you in battle.",
}

function toggle_data(table_id){
    document.getElementById(table_id).classList.toggle("show_table");
}

function populate(class_name){
    var skill_list = document.getElementById("skill_list")
    while (skill_list.hasChildNodes()){
        skill_list.removeChild(skill_list.firstChild)
    }
    var current_class = data[class_name]
    name_banner = document.createElement("h2")
    name_banner.style.margin = "20px"
    name_banner.innerText = class_name
    skill_list.appendChild(name_banner)

    class_decription = document.createElement("p")
    class_decription.style.marginLeft = "10px"
    class_decription.innerText = descriptions[class_name]
    skill_list.appendChild(class_decription)
    for (const category in current_class){
        category_name = document.createElement("h3")
        category_name.innerText = category
        skill_list.appendChild(category_name)
        for (const skill in current_class[category]){
            var current_skill = current_class[category][skill]
            skill_table = document.createElement("table")
            skill_table.classList.add("skill_entry")
            if (current_skill["Starter"] == "2"){
                skill_table.style.marginTop = "15px"
            }
            skill_list.appendChild(skill_table)
            
            first_row = document.createElement("tr")
            skill_table.appendChild(first_row)

            skill_name = document.createElement("th")
            first_row.appendChild(skill_name)
            skill_name.classList.add("skill_name")
            skill_name.innerText = skill
            skill_name.colSpan = 2

            second_row = document.createElement("tr")
            skill_table.appendChild(second_row)

            usage = document.createElement("td")
            second_row.appendChild(usage)
            usage.width = "30%"
            usage.innerText = current_skill["Usage"]

            unlock = document.createElement("td")
            second_row.appendChild(unlock)
            unlock.innerText = "Unlock: "+current_skill["Unlock"]
            
            third_row = document.createElement("tr")
            skill_table.appendChild(third_row)

            data_block = document.createElement("td")
            third_row.appendChild(data_block)
            data_block.classList.add("hide_table")
            data_block.style.textAlign = "left"
            data_block.colSpan = 2
            data_block.id = skill
            first_row.addEventListener("click", function(){
                toggle_data(skill)
            })

            description = document.createElement("p")
            data_block.appendChild(description)
            description.innerHTML = current_skill["Description"]

            levels_table = document.createElement("table")
            data_block.appendChild(levels_table)
            levels_table.classList.add("levels_table")
            levels_row = document.createElement("tr")
            levels_table.appendChild(levels_row)
            if (current_skill["Data"] !== ""){
                start_level = document.createElement("th")
                start_level.innerText = "Level"
                levels_row.appendChild(start_level)
            }
            for (let i = 1; i <= current_skill["Max Level"]; i++){
                level = document.createElement("th")
                levels_row.appendChild(level)
                if (current_skill.hasOwnProperty("Levels")){
                    level.innerText = current_skill["Levels"][i-1]
                }
                else{
                    level.innerText = i
                }
                
            }
            for (const effect in current_skill["Data"]){
                effect_row = document.createElement("tr")
                levels_table.appendChild(effect_row)

                effect_name = document.createElement("th")
                effect_name.innerText = effect
                effect_row.appendChild(effect_name)
                current_effect = current_skill["Data"][effect]
                latest = current_effect
                var latest
                for (const value in current_effect){
                    if (current_effect[value] == latest.innerText) {
                        latest.colSpan = latest.colSpan+1
                        continue
                    }
                    effect_value = document.createElement("td")
                    effect_value.innerText = current_effect[value]
                    effect_row.appendChild(effect_value)
                    latest = effect_value
                }
            }
        }
    }
}

populate("Hero")



