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
                "Damage Dealt": ["+130%", "+135%", "+140%", "+145%"],
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
    "Novice":{
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
            "Description": "Restore HP tp the whole party each time you use an attack skill. Healing is based on your Max HP.",
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
                "Speed Up": ["+15%", "+17%", "+19%", "+21%", "+23%", "+35%"],
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
            "Description": "Obtain additional materials when gathering from Chop Points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran":{
        "Charge Image":{
            "Usage": "Active (Head)",
            "Unlock": "Mirage Sword (Lv 2)",
            "Description": "Dispell your Afterimages to enter a charge state until the end of next turn, which increases damage dealt and chance to create Afterimages.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "7"],
                "Damage Dealt": ["+35%", "+38%", "+41%", "+45%", "+49%", "+70%"],
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
            "Description": "Transfer ailments and binds from allies in your row onto you. If successful, fill your Force Gauge.",
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
    "Master":{
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
            "Description": "Sword: Deal melee Cut damage to one enemy. If it lands, fill the Force Gauge of other allies in your row.",
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
            "Description": "If your Force Boost ends during battle, fill your Force Gauge.",
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
            "Description": "When your class protection skills decrease damage to a party member, apply an additional damage reduction.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Taken": ["-50%"],
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
    "Novice":{
        "Front Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Shield: Protect the front row for this turn, which decreases physical damage taken.",
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
            "Description": "Shield: Protect the back row for this turn, which decreases physical damage taken.",
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
            "Description": "Shield: Protect one ally for this turn, which makes you take attacks in their place. Decrease damage taken from those redirected attacks.",
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
                "Action Speed": ["120%", "120%", "120%", "150%", "150%", "150%", "150%", "200%"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
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
            "Description": "When you Defend, restore HP to all allies in your row. Healing is based on your Max HP.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "HP Gain": ["7+4%", "8+5%", "9+6%", "10+7%", "11+8%", "15+12%"],
            }
        },
        "Chop":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Chop Points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran":{
        "Recovery Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Rear Guard (Lv 1)",
            "Description": "Shield: Protect an ally row for this turn, which removes binds and decreases physical damage taken.",
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
            "Description": "Shield: Protect one ally until the end of next turn, which decreases physical/elemental damage taken. While active, you cannot use other protection skills.",
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
            "Description": "Shield: Protect the whole party for this turn, which decreases Fire damage taken (max once per ally). At high levels it absorbs damage instead of decreasing it. (From level 4 onward it nullifies secondary effects from attacks)",
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
            "Description": "Shield: Protect the whole party for this turn, which decreases Ice damage taken (max once per ally). At high levels it absorbs damage instead of decreasing it. (From level 4 onward it nullifies secondary effects from attacks)",
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
            "Description": "Shield: Protect the whole party for this turn, which decreases Volt damage taken (max once per ally). At high levels it absorbs damage instead of decreasing it. (From level 4 onward it nullifies secondary effects from attacks)",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "13", "13", "13"],
                "Damage Taken": ["-50%", "-65%", "-80%", "-100%", "N/A", "N/A"],
                "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "40%", "150%"],
            }
        },
    },
    "Master":{
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
            "Description": "Shield: Protect an ally row for this turn, which restores HP and decreases physical damage taken.",
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
            "Description": "Shield: Protect an ally row for this turn, which makes you take attacks in their place. Decrease damage taken from those redirected attacks.",
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
            "Description": "Shield: Protect the whole party for this turn, which decreases all attack damage taken. Afterwards, this skill becomes disabled for several turns.",
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
            "Description": "Increase action speed, increase HP restored by your class healing skills and decrease their TP costs. (Also powers up TP restoration from items)",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Speed Up": ["+70%"],
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
    "Novice":{
        "Healing":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "N/A",
            "Description": "Restore HP to one ally.",
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
            "Description": "Restore HP to an ally row.",
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
            "Description": "Remove ailments from target allies.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "2", "12", "6"],
                "Targets": ["Single", "Single", "Row", "Row"],
                "Action Speed": ["100%", "100%", "100%", "100%"],
            }
        },
        "Revive":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Revive one ally, restoring a certain amount of HP.",
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
            "Description": "Obtain additional materials when gathering from Take Points.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran":{
        "Delayed Heal":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Line Heal (Lv 2)",
            "Description": "Prepare yourself to restore HP to the whole party at the start of the next turn. (Cannot use it again while it's in preparation)",
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
            "Description": "Remove all binds from target allies.",
            "Starter": "1",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "2", "12", "6"],
                "Targets": ["Single", "Single", "Row", "Row"],
                "Action Speed": ["100%", "100%", "100%", "100%"],
            }
        },
        "Group Therapy":{
            "Usage": "Active (Head)",
            "Unlock": "Unbind (Lv 1)",
            "Description": "Place a buff on yourself for 3~5 turns, which increases the area of effect (Single → Row → Party) of your class healing skills but decreases their action speed and HP restored.",
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
    "Master":{
        "Heal-All":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Delayed Heal (Lv 3)",
            "Description": "Restore HP to the whole party.",
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
            "Description": "Prepare to heal allies each time they're hit this turn. Activation chance starts at 100% but goes down with each activation. There's a limit on how many times it can activate on each ally.",
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
            "Description": "During battle, excess healing from your class skills increases the target's Max HP (up to a certain cap) until the end of the turn.",
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "Max Overheal": ["+10%", "+13%", "+16%", "+19%", "+22%", "+34%"],
            }
        },
        "Deja Vu":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on the whole party for 5~9 turns, which at the end of each turn repeats the effect (with decreased potency) of the last Medic healing skill they have received since this buff was applied.",
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
            "Description": "Increase action speed and evasion for the whole party.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Speed Up": ["+200%"],
                "Evasion Up": ["+35%"],
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
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

    },
},
"Ronin":{
    "Force":{
        "Musou":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Gain the effect of the 3 stances at level 1 (affected by Full Proficiency). Your active stance's duration does not go down, and your skills don't decrease its duration nor dispell it.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Issen":{
            "Usage": "Force Break (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Deal ranged Cut damage to all enemies, with a chance to inflict Instant Death. Drastically higher infliction chance on enemies at low HP.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["450%", "900%", "1300%"],
                "Infliction Chance\n(Normal)": ["65%", "65%", "65%"],
                "Infliction Chance\n(Low HP)": ["999%", "999%", "999%"],
            }
        },
    },
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

    },
},
"War Magus":{
    "Force":{
        "War Edge Power":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "War Edge skills can apply their secondary effect even if the target doesn't have an ailment.",
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
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

    },
},
"Highlander":{
    "Force":{
        "Hero Battle":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase damage dealt with Spears. The party recovers HP based on your damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt": ["+40%"],
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
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

    },
},
"Gunner":{
    "Force":{
        "Double Action":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Gun skills are performed twice. For attack skills, the second instance deals reduced damage.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt\n(Second Attack)": ["-60%"],
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
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

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
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

    },
},
"Ninja":{
    "Force":{
        "Diversion Gambit":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase evasion and enemy aggro.",
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
            "Description": "Inflict Poison to all enemies.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Infliction Chance": ["1000%", "1000%", "1000%"],
                "Poison Damage": ["100", "200", "300"],
            }
        },
    },
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

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
                "Damage Dealt": ["+40%"],
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
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

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
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

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
                "Damage Dealt": ["+15%"],
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
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

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
                "Damage Dealt": ["+40%"],
                "Accuracy Up": ["+50%"],
                "Speed Up": ["+200%"],
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
                "Damage Dealt": ["+230%"],
                "Speed Up": ["+3900%"],
            }
        },
    },
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

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
                "Damage Dealt": ["+40%"],
                "Infliction Up": ["+40%"],
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
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

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
                "Infliction Up": ["+40%"],
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
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

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
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

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
                "Infliction Up": ["+30%"],
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
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

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
                "Damage Dealt": ["-35%"],
                "Damage Taken": ["+35%"],
                "Evasion Down": ["-100%"],
                "Speed Down": ["-60000%"],
                "Infliction Chance": ["+40%"],
            }
        },
    },
    "Novice":{

    },
    "Veteran":{

    },
    "Master":{

    },
},
"Weapon Skills":{
    "Sword":{
        "Whirlwind":{
            "Usage": "Active (Arms, LUC)",
            "Unlock": "Wyvern's Wing",
            "Description": "Attempt to inflict Leg Bind on all enemies.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Description": "Deal melee Stab damage to one enemy row. Place a debuff on the targets for 3 turns, which decreases all damage dealt.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "16"],
                "Damage Dealt": ["+20%", "+22%", "+25%", "+27%", "+30%", "+40%"],
                "Speed Up": ["+250%", "+325%", "+400%", "+475%", "+550%", "+900%"],
                "Damage Taken": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Queen's Verdict":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Queen's Sabre",
            "Description": "Deal 4~6 hits of ranged Bash damage to random enemies.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Description": "Place a buff on an ally row for 3 turns, which increases Volt resistance.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Description": "Deal ranged Stab damage to an enemy row, with a chance to inflict Curse or Petrify.",
            "Starter": "1",
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
            "Starter": "1",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["25"],
                "Infliction Resistance": ["-25%"],
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Description": "Deal melee Cut damage to an enemy row. Place a debuff on the targets for 3 turns, which decreases evasion.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Description": "Attempt to inflict Head Bind to an enemy row.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Description": "Deal ranged Stab damage to one enemy. Very low accuracy but ignores resistances.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Description": "Deal melee Bash damage to an enemy row, with a chance to inflict Sleep.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Description": "Place a buff on an ally row for 3 turns, which increases evasion.",
            "Starter": "1",
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
            "Description": "Place a buff on an ally row for 3 turns, which increases physical resistances.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "12"],
                "Attack Power": ["240%", "255%", "270%", "285%", "300%"],
                "Infliction Resistance": ["-15%", "-17%", "-20%", "-22%", "-25%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Limb Crusher":{
            "Usage": "Active (Legs, STR, LUC)",
            "Unlock": "Metalfoot Knife",
            "Description": "Deal melee Bash damage to one enemy, with splash effect and a chance to inflict Arm Bind and Leg Bind.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Description": "Deal melee Cut damage to an enemy row, with a chance to inflict Curse.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Description": "Deal melee Bash damage to an enemy row.",
            "Starter": "1",
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
            "Starter": "1",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["8"],
                "Infliction Resistance": ["-20%"],
                "Action Speed": ["100%"],
            }
        },
        "Breath":{
            "Usage": "Active (Head)",
            "Unlock": "Zaftfaust",
            "Description": "Restore HP to yourself and your adjacent allies. Healing is based on your Max HP.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Description": "Deal melee Cut damage to an enemy row.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Description": "Deal melee Cut damage to an enemy row, with a chance to inflict Arm Bind.",
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
            "Starter": "1",
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
}

//End of database

var descriptions = {
    "Hero":"Knights of Sword and Shield who leave afterimages as they move, letting them cover offense and defense simultaneously.",
    "Protector":"Durable knights who use their Shield to decrease damage dealt to the party.",
    "Medic":"Healers that effectively treat every kind of injury. Their Staff strikes assist by leaving the enemy vulnerable.",
    "Survivalist":"Rangers who fight with a Bow. Their agility and sharp senses safeguard the party in and out of battle.",
    "Ronin":"Katana-users who favor offense over defense. They adopt different Stances to adjust to the situation.",
    "War Magus":"A dual-purpose class that switches between treating the party's afflictions and aggravating the enemy's.",
    "Highlander":"Offensive specialists who fight with Spears. They sacrifice their life force to carry out powerful attacks.",
    "Gunner":"A versatile backline class that uses Guns to cover offense, binding and support.",
    "Sovereign":"A support class that strenghtens and protects the party by granting and spending buffs.",
    "Ninja":"Stealthy assassins proficient in techniques of Knife-wielding, afflictions and diversion.",
    "Zodiac":"A magical attacker who uses elemental skills to hit the enemy's weakness.",
    "Farmer":"Specialists in improving exploration and resource gathering. Their combat skills can be awkward but surprisingly effective.",
    "Shogun":"Generals who lead the party through buffs and attack commands, or by fighting directly with dual Katanas.",
    "Landsknecht":"Frontline warriors with solid offense and defense. They lead the charge, encouraging their allies to follow up.",
    "Nightseeker":"Assassins who throw poisoned daggers from the shadows, going for the kill once the enemy is weak.",
    "Arcanist":"Support casters that summon magic circles to restrain the enemy and protect the party.",
    "Imperial":"Knights who wield mechanical Drive Blades. Their attacks are devastating but put a heavy strain in the weapon and wielder.",
    "Pugilist":"Brawlers who use combos of precise punches to quickly disable the enemy.",
    "Harbinger":"Reapers who summon noxious Miasma to weaken the enemy with their attacks, or even use it as a barrier to protect the party.",
    "Weapon Skills":"Skills borrowed from certain weapons.",
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
            console.log("test")
            var current_skill = current_class[category][skill]
            skill_table = document.createElement("table")
            skill_table.classList.add("skill_entry")
            if (current_skill["Starter"] == "1"){
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
            description.innerText = current_skill["Description"]

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
                if (category == "Force"){
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



