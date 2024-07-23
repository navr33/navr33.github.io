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
            "Description": "Shield: Deal melee Bash damage to one enemy. Decrease physical damage taken by the party until the attack activates. (Damage is based on 3 times your Shield's DEF instead of your weapon)",
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
            "Description": "Shield: Deal melee Bash damage to one enemy. Decrease elemental damage taken by the party until the attack activates. (Damage is based on 3 times your Shield's DEF instead of your weapon)",
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
            "Usage": "Active (Arms, STR)",
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
            "Description": "Shield: Deal melee Bash damage to one enemy. Decrease all damage taken by the party until the attack activates, and this attack's damage increases by 20% each time the damage reduction triggers (max +200%), but the attack is cancelled if the reduction never triggers. If the attack lands, this skill becomes disabled for several turns. (Damage is based on 3 times your Shield's DEF instead of your weapon)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["25", "25", "25", "25", "32", "32", "32", "32", "32", "40"],
                "Attack Power": ["250%", "275%", "300%", "325%", "325%", "350%", "375%", "400%", "425%", "425%"],
                "Damage Taken": ["-20%", "-22%", "-24%", "-26%", "-26%", "-28%", "-30%", "-32%", "-34%", "-34%"],
                "Accuracy": ["+150%", "+150%", "+150%", "+150%", "+150%", "+150%", "+150%", "+150%", "+150%", "+150%"],
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
            "Description": "When one of your protection skills decreases damage to a party member, apply an additional damage reduction.",
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

    },
    "Veteran":{

    },
    "Master":{

    },
},
"Medic":{
    "Force":{
        "Intensive Care":{
            "Usage": "Force Boost",
            "Unlock": "N/A",
            "Description": "Increase HP restored and action speed for your healing skills, and decrease their TP costs. (Also powers up TP restoration from items)",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "HP Restored": ["+70%"],
                "Speed Up": ["+70%"],
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

    },
    "Veteran":{

    },
    "Master":{

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
    "Weapon":{

    },
},
}

//End of database

var descriptions = {
    "Hero":"Knights of Sword and Shield who leave afterimages as they move, letting them cover offense and defense simultaneously.",
    "Protector":"Durable knights who use their Shield to decrease damage dealt to the party.",
    "Medic":"Experts in treating all kinds of injuries. Their Staff attacks lack power but leave the enemy vulnerable.",
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
    "Weapon Skills":"Skills borrowed from certain weapons when forged.",
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



