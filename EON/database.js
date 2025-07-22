var data = {
"Hero":{
    "Force":{
        "Brave Heart":{
            "Usage": "Force Boost",
            "Description": "Increases Afterimage creation chance, and increases the damage dealt by Afterimages.",
            "Max Level": "4",
            "Levels": ["1~79", "80~98", "99~117", "118~130"],
            "Data": {
                "Creation Rate↑": ["+50%", "+50%", "+50%", "+50%"],
                "Damage Dealt↑": ["x2.3", "x2.35", "x2.4", "x2.45"],
            }
        },
        "Miracle Edge":{
            "Usage": "Force Break (Arms, STR, WIS)",
            "Description": "Deal melee Cut damage to all enemies, then restore HP to the whole party. Excess healing increases Max HP until the end of the turn.",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["700%", "1100%", "1500%"],
                "Healing Power": ["75%", "75%", "75%"],
                "Max. Overheal": ["+75%", "+75%", "+75%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Afterimage":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Attack skills gain a chance to create an Afterimage when they hit. Afterimages are clones of the user with their same stats and passive skills, but decreased HP and without their buffs/debuffs. After the turn where they are created, Afterimages use the skill that created them then vanish at the end of the turn.",
            "Max Level": "10",
            "Data": {
                "Creation Rate": ["13%", "16%", "19%", "22%", "25%", "28%", "31%", "34%", "37%", "50%"],
                "HP Modifier": ["30%", "35%", "40%", "45%", "50%", "55%", "60%", "65%", "70%", "100%"],
            }
        },
        "Mirage Sword":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Afterimage (Lv 1)",
            "Description": "Sword: Deal melee Cut damage to one enemy. This attack has an increased chance to create an Afterimage.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "7"],
                "Attack Power": ["180%", "187%", "194%", "201%", "208%", "245%"],
                "Creation Rate↑": ["+40%", "+40%", "+40%", "+40%", "+40%", "+65%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["110%", "110%", "110%", "110%", "110%", "110%"],
            }
        },
        "Wide Bravery":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Sword: Deal melee Cut damage to one enemy. If this is performed before the target acts (or if their action was prevented), hit all enemies instead.",
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
            "Max Level": "8",
            "Data": {
                "HP Gain": ["6+2%", "7+2%", "8+2%", "10+4%", "11+4%", "12+4%", "13+4%", "15+6%"],
            }
        },
        "Heroic Bonds":{
            "Usage": "Passive",
            "Unlock": "Encourage (Lv 1)",
            "Description": "When the HP of every party member is above a certain threshold, increases all damage dealt and action speed.",
            "Max Level": "6",
            "Data": {
                "HP Threshold": ["90%", "88%", "86%", "84%", "82%", "75%"],
                "Damage Dealt↑": ["+10%", "+11%", "+12%", "+13%", "+14%", "+20%"],
                "Speed↑": ["x1.15", "x1.17", "x1.19", "x1.21", "x1.23", "x1.35"],
            }
        },
        "Physical Shield":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Shield: Deal melee Bash damage to one enemy. Decrease physical damage taken by the party until the attack activates. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "15"],
                "Attack Power": ["200%", "205%", "210%", "215%", "240%", "245%", "250%", "255%", "260%", "300%"],
                "Damage Taken↓": ["-15%", "-16%", "-17%", "-18%", "-21%", "-22%", "-23%", "-24%", "-25%", "-30%"],
                "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
                "Action Speed": ["3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%"],
            }
        },
        "Clear Mind":{
            "Usage": "Active (No parts)",
            "Unlock": "N/A",
            "Description": "Remove binds and ailments on yourself. If successful, recover TP.",
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
            "Description": "Obtain additional materials when gathering from Chop points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Charge Image":{
            "Usage": "Active (Head)",
            "Unlock": "Mirage Sword (Lv 2)",
            "Description": "Dispel your Afterimages to enter a charge state until the end of next turn, which increases all damage dealt and chance to create Afterimages.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "7"],
                "Damage Dealt↑": ["x1.35", "x1.38", "x1.41", "x1.45", "x1.49", "x1.7"],
                "Creation Rate↑": ["+35%", "+38%", "+41%", "+45%", "+49%", "+70%"],
                "Action Speed": ["200%", "150%", "100%", "70%", "40%", "1%"],
            }
        },
        "Graceful Image":{
            "Usage": "Passive",
            "Unlock": "Charge Image (Lv 2)",
            "Description": "If you use a skill while there's an Afterimage, recover part of the TP used by the skill.",
            "Max Level": "8",
            "Data": {
                "TP Refund": ["20%", "23%", "26%", "29%", "32%", "35%", "38%", "50%"],
            }
        },
        "Spark Blade":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Frigid Slash (Lv 2)",
            "Description": "Sword: Deal melee Cut damage to one enemy, then ranged Volt damage to all enemies. The Volt attack becomes stronger if the initial target was resistant to Cut: Damage dealt is multiplied by 4 if the target had 50% vulnerability, or by 6 if it was lower.",
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
            "Description": "When the HP of every party member is below a certain threshold, decreases your damage taken and increases enemy aggro.",
            "Max Level": "6",
            "Data": {
                "HP Threshold": ["30%", "32%", "34%", "36%", "38%", "50%"],
                "Damage Taken↓": ["-15%", "-17%", "-19%", "-21%", "-23%", "-30%"],
                "Aggro↑": ["+6%", "+8%", "+10%", "+12%", "+14%", "+20%"],
            }
        },
        "Great Bravery":{
            "Usage": "Passive",
            "Unlock": "Heroic Steel (Lv 1)",
            "Description": "If an ally below a certain HP threshold is hit, there's a chance to take damage in their place. (If you and an Afterimage trigger this effect at the same time, the Afterimage takes priority)",
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
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "15"],
                "Attack Power": ["200%", "205%", "210%", "215%", "240%", "245%", "250%", "255%", "260%", "300%"],
                "Damage Taken↓": ["-15%", "-16%", "-17%", "-18%", "-21%", "-22%", "-23%", "-24%", "-25%", "-30%"],
                "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
                "Action Speed": ["3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%", "3%"],
            }
        },
        "Fervor":{
            "Usage": "Active (No parts)",
            "Unlock": "Clear Mind (Lv 1)",
            "Description": "Transfer ailments and binds from other allies in your line onto you. If successful, fill your Force Gauge.",
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
            "Max Level": "6",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "2", "5"],
                "Battles": ["1~3", "1~4", "1~5", "1~6", "1~7", "3~10"],
                "Rare Chance↑": ["+1%", "+2%", "+3%", "+4%", "+5%", "+10%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Dark Image":{
            "Usage": "Passive",
            "Unlock": "Graceful Image (Lv 3)",
            "Description": "Afterimages have a chance to not disappear at the end of their attack turn.",
            "Max Level": "10",
            "Data": {
                "Remain Chance": ["11%", "12%", "14%", "15%", "17%", "18%", "20%", "21%", "23%", "34%"],
            }
        },
        "Act Breaker":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Burst Blade (Lv 2)",
            "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Stun. Infliction chance is multiplied by the target's <b>(CurrentHP/MaxHP)<sup>2</sup></b>.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["14", "14", "14", "18", "18", "18", "18", "24"],
                "Attack Power": ["290%", "302%", "314%", "354%", "366%", "378%", "390%", "470%"],
                "Infliction Rate": ["60%", "60%", "60%", "75%", "75%", "75%", "75%", "100%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Regiment Rave":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Act Breaker (Lv 3)",
            "Description": "Sword: Deal melee Cut+Fire damage to one enemy at the end of turn. Also repeats up to 40% of the damage your allies have done this turn, capped at a certain percentage of this attack's own damage.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["18", "18", "18", "25", "25", "25", "25", "32"],
                "Attack Power": ["250%", "260%", "270%", "300%", "310%", "320%", "330%", "400%"],
                "Added Damage Cap": ["100%", "103%", "106%", "116%", "119%", "122%", "125%", "150%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["-1000%", "-1000%", "-1000%", "-1000%", "-1000%", "-1000%", "-1000%", "-1000%"],
            }
        },
        "Force Gift":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Sword: Deal melee Cut damage to one enemy. If it lands, restore Force to other allies in your line.",
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
            "Max Level": "4",
            "Data": {
                "Force Gain": ["5%", "10%", "15%", "25%"],
            }
        },
        "Guard Rush":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Elemental Shield (Lv 3)",
            "Description": "Shield: Deal melee Bash damage to one enemy. Decreases all damage taken by the party until the attack activates, and this attack's damage dealt increases by 20% each time the damage reduction triggers (capped at +200%), however the attack is cancelled if the reduction never triggers. If the attack lands, this skill becomes disabled for several turns. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["25", "25", "25", "25", "32", "32", "32", "32", "32", "40"],
                "Attack Power": ["250%", "275%", "300%", "325%", "325%", "350%", "375%", "400%", "425%", "425%"],
                "Damage Taken↓": ["-20%", "-22%", "-24%", "-26%", "-26%", "-28%", "-30%", "-32%", "-34%", "-34%"],
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
            "Description": "When a Guard skill decreases damage to a party member, apply an additional damage reduction.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Taken↓": ["x0.5"],
            }
        },
        "Painless":{
            "Usage": "Force Break (Arms)",
            "Description": "Nullify all attacks to the party for this turn.",
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
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "9"],
                "Damage Taken↓": ["-30%", "-33%", "-36%", "-39%", "-42%", "-55%"],
            }
        },
        "Rear Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Front Guard (Lv 2)",
            "Description": "(Guard) Shield: Protect the back line for this turn, which decreases physical damage taken.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["3", "3", "3", "6"],
                "Damage Taken↓": ["-35%", "-42%", "-49%", "-65%"],
            }
        },
        "Ally Shield":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect one ally for this turn, which makes you take attacks in their place. Decrease damage taken from those redirected attacks.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["3", "3", "3", "5", "5", "5", "5", "7"],
                "Damage Taken↓": ["-5%", "-8%", "-11%", "-19%", "-22%", "-25%", "-28%", "-35%"],
            }
        },
        "Fortify":{
            "Usage": "Active (Arms)",
            "Unlock": "Ally Shield (Lv 2)",
            "Description": "Place a buff on yourself for several turns, which decreases physical/elemental damage taken.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "7", "7", "7", "7", "12"],
                "Damage Taken↓": ["-21%", "-24%", "-27%", "-27%", "-29%", "-31%", "-33%", "-33%"],
                "Action Speed": ["100%", "100%", "100%", "130%", "130%", "130%", "130%", "160%"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
            }
        },
        "Shield Smite":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Shield: Deal melee Bash damage to one enemy, with a chance to inflict Arm Bind. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "10", "10", "10", "10", "10", "16"],
                "Attack Power": ["230%", "240%", "250%", "260%", "295%", "305%", "315%", "325%", "335%", "400%"],
                "Infliction Rate": ["35%", "35%", "35%", "35%", "42%", "42%", "42%", "42%", "42%", "50%"],
                "Accuracy": ["-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Taunt":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for several turns, which increases enemy aggro and slightly decreases all damage taken.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["3", "3", "3", "5", "5", "5", "5", "9"],
                "Aggro↑": ["+250%", "+300%", "+350%", "+350%", "+400%", "+450%", "+500%", "+500%"],
                "Damage Taken↓": ["-3%", "-4%", "-6%", "-6%", "-7%", "-9%", "-10%", "-10%"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["120%", "120%", "120%", "150%", "150%", "150%", "150%", "200%"],
            }
        },
        "Preemptive Taunt":{
            "Usage": "Passive",
            "Unlock": "Taunt (Lv 2)",
            "Description": "Chance to automatically cast Taunt at the start of battle.",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["25%", "30%", "35%", "42%", "49%", "65%"],
            }
        },
        "Healing Wall":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "When you Defend, restore HP to all allies in your line. Healing is based on your Max HP.",
            "Max Level": "6",
            "Data": {
                "HP Gain": ["7+4%", "8+5%", "9+6%", "10+7%", "11+8%", "15+12%"],
            }
        },
        "Chop":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Chop points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Recovery Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Rear Guard (Lv 1)",
            "Description": "(Guard) Shield: Protect an ally line for this turn, which removes binds and decreases physical damage taken.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["15", "15", "15", "20"],
                "Damage Taken↓": ["-25%", "-30%", "-35%", "-50%"],
            }
        },
        "Aegis":{
            "Usage": "Passive",
            "Unlock": "Fortify (Lv 1)",
            "Description": "Chance to survive lethal damage with 1 HP. (Max once per battle)",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["10%", "11%", "12%", "13%", "18%", "19%", "20%", "21%", "22%", "30%"],
            }
        },
        "Shield Bash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Shield Smite (Lv 3)",
            "Description": "Shield: Deal melee Bash damage to all enemies. Places a debuff on the targets for 3 turns, which decreases physical damage dealt. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "15", "15", "15", "15", "15", "20"],
                "Attack Power": ["180%", "187%", "194%", "201%", "226%", "233%", "240%", "247%", "254%", "300%"],
                "Damage Dealt↓": ["-8%", "-8%", "-8%", "-8%", "-11%", "-11%", "-11%", "-11%", "-11%", "-15%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Keep Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect one ally until the end of next turn, which decreases physical/elemental damage taken. While active, you cannot use Guard skills.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "7"],
                "Damage Taken↓": ["-25%", "-28%", "-31%", "-34%", "-37%", "-50%"],
            }
        },
        "Phys DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decreases physical damage taken.",
            "Max Level": "8",
            "Data": {
                "Damage Taken↓": ["-4%", "-5%", "-6%", "-9%", "-10%", "-11%", "-12%", "-15%"],
            }
        },
        "Elem DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decreases elemental damage taken.",
            "Max Level": "8",
            "Data": {
                "Damage Taken↓": ["-4%", "-5%", "-6%", "-9%", "-10%", "-11%", "-12%", "-15%"],
            }
        },
        "Fire Wall":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases Fire damage taken (max once per ally). At high levels it absorbs damage instead of decreasing it. (From level 4 onward it nullifies secondary effects from attacks)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "13", "13", "13"],
                "Damage Taken↓": ["-50%", "-65%", "-80%", "-100%", "N/A", "N/A"],
                "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "40%", "150%"],
            }
        },
        "Ice Wall":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases Ice damage taken (max once per ally). At high levels it absorbs damage instead of decreasing it. (From level 4 onward it nullifies secondary effects from attacks)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "13", "13", "13"],
                "Damage Taken↓": ["-50%", "-65%", "-80%", "-100%", "N/A", "N/A"],
                "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "40%", "150%"],
            }
        },
        "Volt Wall":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases Volt damage taken (max once per ally). At high levels it absorbs damage instead of decreasing it. (From level 4 onward it nullifies secondary effects from attacks)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "13", "13", "13"],
                "Damage Taken↓": ["-50%", "-65%", "-80%", "-100%", "N/A", "N/A"],
                "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "40%", "150%"],
            }
        },
    },
    "Master (Lv 40)":{
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Max Level": "8",
            "Data": {
                "Max HP↑": ["+5%", "+6%", "+7%", "+11%", "+12%", "+13%", "+14%", "+20%"],
            }
        },
        "Heal Guard":{
            "Usage": "Active (Arms, WIS)",
            "Unlock": "Recovery Guard (Lv 2)",
            "Description": "(Guard) Shield: Protect an ally line for this turn, which restores HP and decreases physical damage taken.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "20", "25"],
                "Damage Taken↓": ["-25%", "-28%", "-31%", "-34%", "-37%", "-50%"],
                "Healing Power": ["90%", "100%", "110%", "120%", "130%", "180%"],
            }
        },
        "Line Shield":{
            "Usage": "Active (Arms)",
            "Unlock": "Aegis (Lv 3)",
            "Description": "(Guard) Shield: Protect an ally line for this turn, which makes you take attacks in their place. Decrease damage taken from those redirected attacks.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "11", "11", "11", "11", "15"],
                "Damage Taken↓": ["-5%", "-8%", "-11%", "-19%", "-22%", "-25%", "-28%", "-35%"],
            }
        },
        "En Garde":{
            "Usage": "Passive",
            "Unlock": "Line Shield (Lv 3)",
            "Description": "Chance to automatically halve damage taken any time you're hit. (Does not activate while Defending)",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["12%", "14%", "16%", "18%", "20%", "22%", "24%", "26%", "28%", "40%"],
            }
        },
        "Shield Flare":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Shield Bash (Lv 3)",
            "Description": "Shield: Prepare to counterattack each time you're hit until the end of next turn. On each activation, deal ranged Fire damage to the attacker. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "16"],
                "Attack Power": ["250%", "265%", "280%", "295%", "310%", "400%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            }
        },
        "Full Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Fire Wall (Lv 2), Ice Wall (Lv 2), Volt Wall (Lv 2)",
            "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases all attack damage taken. Afterwards, this skill becomes disabled for several turns.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "26", "26", "26", "26", "26", "35"],
                "Damage Taken↓": ["-25%", "-29%", "-33%", "-37%", "-37%", "-41%", "-46%", "-50%", "-55%", "-55%"],
                "Cooldown": ["6", "6", "6", "6", "5", "5", "5", "5", "5", "3"],
            }
        },
    },
},
"Medic":{
    "Force":{
        "Intensive Care":{
            "Usage": "Force Boost",
            "Description": "Increases action speed, increases HP restored by First Aid skills and decreases their TP costs. (Also powers up TP restoration from items)",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Speed↑": ["x1.7"],
                "Healing↑": ["x1.7"],
                "TP Cost↓": ["x0.5"],
            }
        },
        "Healing Touch":{
            "Usage": "Force Break (Head, WIS)",
            "Description": "Restore HP, revive, and remove binds/ailments/debuffs for the whole party.",
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
            "Description": "(First Aid) Revive one ally, restoring a fixed amount of HP.",
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
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "7", "7", "7", "7", "12"],
                "Attack Power": ["200%", "210%", "220%", "255%", "265%", "275%", "285%", "330%"],
                "Infliction Rate": ["35%", "35%", "35%", "42%", "42%", "42%", "42%", "50%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Patch Up":{
            "Usage": "Passive (WIS)",
            "Unlock": "N/A",
            "Description": "Restore HP to the whole party after each battle. (Does not stack)",
            "Max Level": "8",
            "Data": {
                "Healing Power": ["45%", "55%", "65%", "75%", "85%", "95%", "105%", "150%"],
            }
        },
        "Antibodies":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases natural bind/ailment recovery rate.",
            "Max Level": "6",
            "Data": {
                "Recovery Rate↑": ["+15%", "+20%", "+25%", "+30%", "+35%", "+50%"],
            }
        },
        "Scavenge":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases enemy drop rates.",
            "Max Level": "4",
            "Data": {
                "Drop Rate↑": ["+5%", "+8%", "+12%", "+20%"],
            }
        },
        "Take":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Take points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Delayed Heal":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Line Heal (Lv 2)",
            "Description": "(First Aid) Prepare a heal that will activate at the start of the next turn, restoring HP to the whole party.",
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
            "Description": "Place a buff on yourself for several turns, which increases the area of effect (Single → Line → Party) of First Aid skills but decreases their action speed and HP restored.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["15", "15", "15", "20", "20", "20", "20", "25"],
                "Speed↓": ["-35%", "-29%", "-23%", "-23%", "-17%", "-11%", "-5%", "-5%"],
                "Healing↓": ["-35%", "-29%", "-23%", "-23%", "-17%", "-11%", "-5%", "-5%"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Final Gift":{
            "Usage": "Passive (WIS)",
            "Unlock": "Revive (Lv 3)",
            "Description": "Upon dying, restore HP to the whole party.",
            "Max Level": "4",
            "Data": {
                "Healing Power": ["100%", "140%", "180%", "350%"],
            }
        },
        "Auto-Revive":{
            "Usage": "Passive (Head)",
            "Unlock": "Final Gift (Lv 2)",
            "Description": "Chance to automatically revive allies when they die.",
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
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7", "13"],
                "Attack Power": ["240%", "255%", "270%", "285%", "300%", "370%"],
                "Damage Taken↑": ["+10%", "+12%", "+14%", "+16%", "+18%", "+25%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Medical Rod":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Star Drop (Lv 2)",
            "Description": "Staff: Deal melee Bash damage to one enemy. Places a debuff on the target for 3 turns, which increases elemental damage taken.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7", "13"],
                "Attack Power": ["240%", "255%", "270%", "285%", "300%", "370%"],
                "Damage Taken↑": ["+15%", "+17%", "+19%", "+21%", "+23%", "+30%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Safe Passage":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily nullify the effect of damaging tiles and muddy tiles. Additionally, damage taken from attacks out of battle is decreased to 1.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Duration (Steps)": ["60", "70", "80", "90", "100", "255"],
            }
        },
        "Elem DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decreases elemental damage taken.",
            "Max Level": "8",
            "Data": {
                "Damage Taken↓": ["-4%", "-5%", "-6%", "-9%", "-10%", "-11%", "-12%", "-15%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Heal-All":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Delayed Heal (Lv 3)",
            "Description": "(First Aid) Restore HP to the whole party.",
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
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "14", "14", "14", "14", "20"],
                "Healing Power": ["60%", "72%", "84%", "84%", "96%", "108%", "120%", "120%"],
                "Chance Fadeout": ["40%", "40%", "40%", "25%", "25%", "25%", "25%", "15%"],
                "Limit per Ally": ["2", "2", "2", "3", "3", "3", "3", "4"],
            }
        },
        "Overheal":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "During battle, excess healing from First Aid skills increases the target's Max HP (up to a certain cap) until the end of the turn.",
            "Max Level": "6",
            "Data": {
                "Max. Overheal": ["+10%", "+13%", "+16%", "+19%", "+22%", "+34%"],
            }
        },
        "Deja Vu":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on the whole party for several turns, which at the end of each turn repeats the effect (with decreased healing power) of the last First Aid skill each target has received since this buff was applied.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["9", "9", "9", "12", "12", "12", "12", "15"],
                "Repeat Power": ["x0.2", "x0.26", "x0.32", "x0.32", "x0.38", "x0.44", "x0.5", "x0.5"],
                "Duration": ["5", "5", "5", "7", "7", "7", "7", "9"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Heavy Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Medical Rod (Lv 3)",
            "Description": "Staff: Deal melee Bash damage to one enemy.",
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
            "Description": "Increases Max TP and physical damage dealt if you have a Staff equipped.",
            "Max Level": "8",
            "Data": {
                "Max TP↑": ["+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%", "+15%"],
                "Damage Dealt↑": ["+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%", "+15%"],
            }
        },
    },
},
"Survivalist":{
    "Force":{
        "Illusory Formation":{
            "Usage": "Force Boost",
            "Description": "Increases evasion and action speed for the whole party.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Evasion↑": ["+35%"],
                "Speed↑": ["x3.0"],
            }
        },
        "Mirage Arrow":{
            "Usage": "Force Break (Arms, STR)",
            "Description": "Deal ranged Stab damage to one enemy. Places a debuff on the target for 3 turns, which decreases accuracy and makes them act last.",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["500%", "1200%", "1800%"],
                "Accuracy↓": ["-35%", "-35%", "-35%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Power Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Bow: Deal ranged Stab damage to one enemy, with pierce effect.",
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
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "7", "7", "7", "7", "10"],
                "Attack Power": ["150%", "158%", "166%", "186%", "194%", "202%", "210%", "240%"],
                "Infliction Rate": ["40%", "40%", "40%", "50%", "50%", "50%", "50%", "65%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Chain Dance":{
            "Usage": "Active (Legs)",
            "Unlock": "Blind Arrow (Lv 3)",
            "Description": "Increase your evasion and enemy aggro until the end of the turn.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "9"],
                "Evasion↑": ["+20%", "+20%", "+20%", "+20%", "+27%", "+27%", "+27%", "+27%", "+27%", "+35%"],
                "Aggro↑": ["+250%", "+265%", "+280%", "+295%", "+350%", "+370%", "+390%", "+410%", "+430%", "+500%"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "Safe Passage":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily nullify the effect of damaging tiles and muddy tiles. Additionally, damage taken from attacks out of battle is decreased to 1.",
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
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["35%", "41%", "47%", "53%", "59%", "75%"],
            }
        },
        "Resuscitate":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Restore HP to one ally. From level 4 onward can also revive.",
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
            "Description": "Increases the size of the inventory.",
            "Max Level": "10",
            "Data": {
                "Item Slots↑": ["+4", "+5", "+6", "+7", "+10", "+11", "+12", "+13", "+14", "+20"],
            }
        },
        "Natural Instinct":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Take, Chop or Mine points. Maximum possible yield grows from 1 to 3 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Flank Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Flame Arrow (Lv 3)",
            "Description": "Bow: Deal ranged Stab damage to an enemy line.",
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
            "Description": "Place a debuff on an enemy line for several turns, which decreases accuracy.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "11", "11", "11", "11", "11", "17"],
                "Accuracy↓": ["-9.5%", "-11%", "-12.5%", "-14%", "-14%", "-15.5%", "-17%", "-18.5%", "-20%", "-20%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
            }
        },
        "Cautious Steps":{
            "Usage": "Active (Field)",
            "Unlock": "Risk Perception (Lv 1)",
            "Description": "Temporarily decrease the enemy encounter rate.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "8", "14"],
                "Encounters↓": ["x0.5", "x0.45", "x0.4", "x0.35", "x0.3", "x0.15"],
                "Duration (Steps)": ["80", "100", "120", "140", "160", "255"],
            }
        },
        "Efficiency":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 5 turns, which increases the effect of Medica-type items and makes them affect a full line.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "5", "5", "10"],
                "Healing↑": ["+5%", "+10%", "+15%", "+100%"],
                "Action Speed": ["90%", "90%", "90%", "90%"],
            }
        },
        "Speed Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases accuracy, evasion and action speed.",
            "Max Level": "8",
            "Data": {
                "Accuracy↑": ["+2.5%", "+3.1%", "+3.7%", "+5.7%", "+6.3%", "+6.9%", "+7.5%", "+10%"],
                "Evasion↑": ["+2.5%", "+3.1%", "+3.7%", "+5.7%", "+6.3%", "+6.9%", "+7.5%", "+10%"],
                "Speed↑": ["x1.06", "x1.08", "x1.10", "x1.16", "x1.18", "x1.2", "x1.22", "x1.30"],
            }
        },
        "Quick Step":{
            "Usage": "Active (Legs)",
            "Unlock": "Speed Up (Lv 2)",
            "Description": "Make one ally act at the start of this turn.",
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
            "Max Level": "8",
            "Data": {
                "Infliction Rate": ["7%", "9%", "11%", "13%", "15%", "17%", "19%", "25%"],
            }
        },
        "Sagittarius Shot":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Drop Shot (Lv 3)",
            "Description": "Bow: Prepare an attack that will hit in 2 more turns, at the start of the turn. Deals ranged Stab damage to one enemy, with a chance to inflict Stun.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "20", "20", "20", "20", "20", "27"],
                "Attack Power": ["500%", "520%", "540%", "560%", "620%", "640%", "660%", "680%", "700%", "800%"],
                "Infliction Rate": ["40%", "40%", "40%", "40%", "55%", "55%", "55%", "55%", "55%", "70%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Hazy Arrow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Trickery (Lv 3)",
            "Description": "Bow: Deal ranged Stab damage to one enemy. Cannot miss. Only usable if you dodged an attack last turn.",
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
            "Description": "Chance to get additional, rare materials from gathering spots.",
            "Max Level": "4",
            "Data": {
                "Max. Extra Items": ["1", "2", "3", "4"],
            }
        },
        "Scapegoat":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Select one ally to protect the rest of the party for this turn, which makes the target take attacks in place of their allies a certain amount of times. Target takes decreased damage from those redirected attacks.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "12", "12", "12", "18"],
                "Max. Activations": ["1", "1", "2", "2", "2", "3"],
                "Damage Taken↓": ["-5%", "-7%", "-13%", "-15%", "-17%", "-25%"],
            }
        },
        "Sneak Attack":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily gain an additional chance of getting a preemptive attack.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "15"],
                "Ambush Chance": ["6%", "7%", "8%", "9%", "10%", "20%"],
                "Duration (Steps)": ["60", "70", "80", "90", "100", "255"],
            }
        },
    },
},
"Ronin":{
    "Force":{
        "Musou":{
            "Usage": "Force Boost",
            "Description": "Grants the effects of the 3 Stances at level 1, on top of your active Stance. Prevents your active Stance's duration from going down, and your skills cannot remove it.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Issen":{
            "Usage": "Force Break (Arms, STR, LUC)",
            "Description": "Deal ranged Cut damage to all enemies, with a chance to inflict Instant Death.",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["450%", "900%", "1300%"],
                "Infliction Rate": ["65%", "65%", "65%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Upper Stance":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Stance that increases all damage dealt. Activated by Upward Slash. (If you have a Katana equipped, activate your highest-level Stance at the start of battle. Ties for highest level will choose a Stance at random)",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["x1.1", "x1.12", "x1.14", "x1.14", "x1.16", "x1.18", "x1.2", "x1.2"],
                "Duration (Start)": ["4", "4", "4", "5", "5", "5", "5", "6"],
            }
        },
        "Upward Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Upper Stance (Lv 1)",
            "Description": "Katana: Deal melee Cut damage (critical during Upper Stance) to one enemy. Activates/extends Upper Stance for a certain amount of turns.",
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
            "Description": "Stance that decreases all damage taken and increases bind/ailment infliction rates for Ronin skills. Activated by Charging Thrust. (If you have a Katana equipped, activate your highest-level Stance at the start of battle. Ties for highest level will choose a Stance at random)",
            "Max Level": "8",
            "Data": {
                "Damage Taken↓": ["x0.9", "x0.87", "x0.84", "x0.84", "x0.81", "x0.78", "x0.75", "x0.75"],
                "Inflictions↑": ["x1.25", "x1.30", "x1.35", "x1.35", "x1.40", "x1.45", "x1.50", "x1.50"],
                "Duration (Start)": ["4", "4", "4", "5", "5", "5", "5", "6"],
            }
        },
        "Charging Thrust":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Clear Stance (Lv 1)",
            "Description": "Katana: Deal melee Stab damage (critical during Clear Stance) to one enemy. Activates/extends Clear Stance for a certain amount of turns.",
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
            "Description": "Stance that increases accuracy, evasion and action speed. Activated by Sheath Strike. (If you have a Katana equipped, activate your highest-level Stance at the start of battle. Ties for highest level will choose a Stance at random)",
            "Max Level": "8",
            "Data": {
                "Accuracy↑": ["+10%", "+12%", "+14%", "+14%", "+16%", "+18%", "+20%", "+20%"],
                "Evasion↑": ["+10%", "+12%", "+14%", "+14%", "+16%", "+18%", "+20%", "+20%"],
                "Speed↑": ["x1.35", "x1.43", "x1.51", "x1.51", "x1.59", "x1.67", "x1.75", "x1.75"],
                "Duration (Start)": ["4", "4", "4", "5", "5", "5", "5", "6"],
            }
        },
        "Sheath Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Swift Stance (Lv 1)",
            "Description": "Katana: Deal melee Bash damage (critical during Swift Stance) to one enemy. Activates/extends Swift Stance for a certain amount of turns.",
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
            "Description": "Katana: Deal ranged Cut damage (critical during any Stance) to one enemy.",
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
            "Description": "Katana: Deal melee Cut damage (critical during any Stance) to one enemy, with a chance to inflict Arm Bind.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "8", "8", "8", "8", "12"],
                "Attack Power": ["120%", "124%", "128%", "143%", "147%", "151%", "155%", "180%"],
                "Infliction Rate": ["25%", "25%", "25%", "30%", "30%", "30%", "30%", "35%"],
                "Accuracy": ["-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Breath":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Restore HP to yourself and your adjacent allies. Healing is based on your Max HP.",
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
            "Description": "Obtain additional materials when gathering from Mine points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Helm Splitter":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Upward Slash (Lv 1)",
            "Description": "Katana, Stance: Deal melee Cut damage (critical during Upper Stance) to one enemy. Highly innacurate but ignores Cut vulnerability. Decreases Stance duration by 2 turns.",
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
            "Description": "Katana: Deal melee Cut+Fire damage (critical during Upper Stance) to one enemy.",
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
            "Description": "Katana, Stance: Deal melee Cut damage (critical during Clear Stance) to one enemy, with a chance to inflict Sleep. Decreases Stance duration by 2 turns.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "13", "13", "13", "13", "13", "18"],
                "Attack Power": ["200%", "206%", "212%", "218%", "238%", "245%", "252%", "259%", "266%", "310%"],
                "Infliction Rate": ["30%", "30%", "30%", "30%", "40%", "40%", "40%", "40%", "40%", "50%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%"],
            }
        },
        "Lightning Stab":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Haze Slash (Lv 3)",
            "Description": "Katana: Deal melee Stab+Volt damage (critical during Clear Stance) to one enemy.",
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
            "Description": "Katana, Stance: Deal melee Cut damage (critical during Swift Stance) to an enemy line. Decreases Stance duration by 2 turns.",
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
            "Description": "Katana: Deal melee Cut+Ice damage (critical during Swift Stance) to one enemy.",
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
            "Description": "Increases all damage dealt when attacking enemies that you also attacked on the previous turn.",
            "Max Level": "6",
            "Data": {
                "Damage Dealt↑": ["+8%", "+10%", "+12%", "+14%", "+16%", "+25%"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt.",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Swallow Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Flame Grater (Lv 3)",
            "Description": "Katana, Stance: Deal multiple hits of melee Cut damage (critical during Upper Stance) to one enemy. Removes your Stance, and disables skills on the next turn.",
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
            "Description": "Katana, Stance: Deal melee Stab damage (critical during Clear Stance) to one enemy, with a chance to inflict Petrify. Removes your Stance, and disables skills on the next turn.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["17", "17", "17", "17", "17", "24"],
                "Attack Power": ["330%", "345%", "360%", "375%", "390%", "480%"],
                "Infliction Rate": ["25%", "28%", "31%", "34%", "37%", "50%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["25%", "25%", "25%", "25%", "25%", "25%"],
            }
        },
        "Petal Scatter":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Frigid Slash (Lv 3)",
            "Description": "Katana, Stance: Deal ranged Cut damage (critical during Swift Stance) to all enemies. Damage dealt is divided by <b>√Targets</b>. Removes your Stance, and disables skills on the next turn.",
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
            "Max Level": "10",
            "Data": {
                "Damage↑ (Upper)": ["x1.02", "x1.03", "x1.04", "x1.05", "x1.06", "x1.07", "x1.08", "x1.09", "x1.1", "x1.12"],
                "Damage↓ (Clear)": ["x0.98", "x0.97", "x0.96", "x0.95", "x0.94", "x0.93", "x0.92", "x0.91", "x0.9", "x0.88"],
                "Inflictions↑ (Clear)": ["x1.04", "x1.05", "x1.07", "x1.08", "x1.1", "x1.11", "x1.13", "x1.14", "x1.16", "x1.20"],
                "Accuracy↑ (Swift)": ["+2%", "+2.4%", "+2.8%", "+3.2%", "+3.6%", "+4%", "+4.4%", "+4.8%", "+5.2%", "+7%"],
                "Evasion↑ (Swift)": ["+2%", "+2.4%", "+2.8%", "+3.2%", "+3.6%", "+4%", "+4.4%", "+4.8%", "+5.2%", "+7%"],
                "Speed↑ (Swift)": ["x1.04", "x1.05", "x1.07", "x1.08", "x1.1", "x1.11", "x1.13", "x1.14", "x1.16", "x1.20"],
            }
        },
        "Rouse Spirits":{
            "Usage": "Passive",
            "Unlock": "Full Proficiency (Lv 2)",
            "Description": "At the end of each turn, if you have a Stance (or Musou) active, recover TP.",
            "Max Level": "4",
            "Data": {
                "TP Gain": ["1", "2", "3", "5"],
            }
        },
        "Speed Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases accuracy, evasion and action speed.",
            "Max Level": "8",
            "Data": {
                "Accuracy↑": ["+2.5%", "+3.1%", "+3.7%", "+5.7%", "+6.3%", "+6.9%", "+7.5%", "+10%"],
                "Evasion↑": ["+2.5%", "+3.1%", "+3.7%", "+5.7%", "+6.3%", "+6.9%", "+7.5%", "+10%"],
                "Speed↑": ["x1.06", "x1.08", "x1.10", "x1.16", "x1.18", "x1.2", "x1.22", "x1.30"],
            }
        },
    },
},
"War Magus":{
    "Force":{
        "War Edge Power":{
            "Usage": "Force Boost",
            "Description": "War Edge skills will apply their secondary effect even if the target doesn't have an ailment.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Fairy Robe":{
            "Usage": "Force Break (Head, WIS)",
            "Description": "Restore HP and remove binds/ailments for the whole party. Until the end of turn, prevent all types of negative inflictions (bind/ailment/stun/instakill/debuff) to the party.",
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
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "10", "10", "10", "10", "10", "15"],
                "Healing Power": ["40%", "43%", "46%", "49%", "60%", "63%", "66%", "69%", "72%", "95%"],
            }
        },
        "Random Disease":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "N/A",
            "Description": "Attempt to randomly inflict one of Blind, Poison, Paralysis, Sleep or Curse to one enemy.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["3", "3", "3", "6", "6", "6", "6", "10"],
                "Infliction Rate": ["45%", "46%", "48%", "53%", "54%", "56%", "57%", "65%"],
                "Poison Power": ["20", "23", "26", "35", "38", "41", "44", "55"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Strength Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Random Disease (Lv 1)",
            "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, place a debuff on them for 7 turns, which decreases physical/elemental damage dealt.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Attack Power": ["160%", "170%", "180%", "190%", "200%", "250%"],
                "Damage Dealt↓": ["-10%", "-11%", "-12%", "-13%", "-14%", "-20%"],
                "Accuracy": ["+15%", "+15%", "+15%", "+15%", "+15%", "+15%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Guard Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Random Disease (Lv 1)",
            "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, place a debuff on them for 7 turns, which increases physical/elemental damage taken.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Attack Power": ["160%", "170%", "180%", "190%", "200%", "250%"],
                "Damage Taken↑": ["+15%", "+17%", "+19%", "+21%", "+23%", "+30%"],
                "Accuracy": ["+15%", "+15%", "+15%", "+15%", "+15%", "+15%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Displace":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "N/A",
            "Description": "Remove binds and ailments on one ally, then attempt to inflict them onto one enemy.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["8", "8", "8", "12"],
                "Infliction Rate": ["20%", "25%", "30%", "50%"],
                "Action Speed": ["80%", "80%", "80%", "80%"],
            }
        },
        "Vampire":{
            "Usage": "Passive (WIS)",
            "Unlock": "N/A",
            "Description": "If you deal damage to an enemy with an ailment, restore HP to your line. (Max once per turn)",
            "Max Level": "6",
            "Data": {
                "Fixed HP Gain": ["11", "14", "17", "20", "23", "34"],
                "Healing Power": ["50%", "55%", "60%", "65%", "70%", "100%"],
            }
        },
        "War Edge Master":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Enables using Sword skills with a Staff. Increases Max TP if you have a Sword equipped. Increases all damage dealt if you have a Staff equipped.",
            "Max Level": "8",
            "Data": {
                "Max TP↑": ["+6%", "+8%", "+10%", "+12%", "+14%", "+16%", "+18%", "+25%"],
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+15%"],
            }
        },
        "Take":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Take points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "War Revive":{
            "Usage": "Active (Head)",
            "Unlock": "War Heal Line (Lv 3)",
            "Description": "Revive one ally at the start of the turn, then there's a chance to revive them again at the end of the turn.",
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
            "Description": "Place a buff on all the whole party for 3 turns, which restores HP to the holder upon acting (max once per turn).",
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
            "Description": "Place a debuff on one enemy for 3 turns, which restores HP to the party when the holder acts (max once per turn).",
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
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "11", "11", "11", "11", "16"],
                "Attack Power": ["190%", "198%", "206%", "230%", "238%", "246%", "254%", "300%"],
                "Infliction Rate": ["55%", "57%", "59%", "66%", "69%", "72%", "75%", "85%"],
                "Accuracy": ["+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Armcut":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Guard Slash (Lv 2)",
            "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, attempt to inflict Arm Bind.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "11", "11", "11", "11", "16"],
                "Attack Power": ["190%", "198%", "206%", "230%", "238%", "246%", "254%", "300%"],
                "Infliction Rate": ["55%", "57%", "59%", "66%", "69%", "72%", "75%", "85%"],
                "Accuracy": ["+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Legcut":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Headcut (Lv 2), Armcut (Lv 2)",
            "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, attempt to inflict Leg Bind.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "11", "11", "11", "11", "16"],
                "Attack Power": ["190%", "198%", "206%", "230%", "238%", "246%", "254%", "300%"],
                "Infliction Rate": ["55%", "57%", "59%", "66%", "69%", "72%", "75%", "85%"],
                "Accuracy": ["+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Rouse":{
            "Usage": "Passive",
            "Unlock": "Vampire (Lv 2)",
            "Description": "Increases Force gains for each enemy that's afflicted with a bind.",
            "Max Level": "4",
            "Data": {
                "Force Gain↑": ["+2%", "+3%", "+4%", "+6%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Max Level": "8",
            "Data": {
                "Max HP↑": ["+5%", "+6%", "+7%", "+11%", "+12%", "+13%", "+14%", "+20%"],
            }
        },
        "Status DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases resistance to bind/ailment inflictions.",
            "Max Level": "8",
            "Data": {
                "Inflictions↓": ["x0.92", "x0.91", "x0.9", "x0.85", "x0.84", "x0.83", "x0.82", "x0.75"],
            }
        },
    },
    "Master (Lv 40)":{
        "War Heal All":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Artery (Lv 2), War Response (Lv 2)",
            "Description": "Restore HP to the whole party at the start of the turn, then again at the end of the turn.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "21", "21", "21", "21", "21", "30"],
                "Healing Power": ["35%", "37%", "39%", "41%", "48%", "50%", "52%", "54%", "56%", "70%"],
            }
        },
        "Barrier":{
            "Usage": "Active (Arms)",
            "Unlock": "War Heal All (Lv 3)",
            "Description": "Protect the whole party for this turn, which gives them a chance to nullify bind/ailment/debuff inflictions received.",
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
            "Max Level": "4",
            "Data": {
                "Infliction Rate": ["1%", "2%", "3%", "4%"],
                "Poison Power": ["20", "25", "30", "45"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt.",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
    },
},
"Highlander":{
    "Force":{
        "Hero Battle":{
            "Usage": "Force Boost",
            "Description": "Increases damage dealt with Spear skills. Restore HP to the party based on your damage dealt.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt↑": ["x1.4"],
                "HP Drain": ["15%"],
            }
        },
        "Gae Bolg":{
            "Usage": "Force Break (Arms, STR)",
            "Description": "Deal ranged Stab damage to all enemies. Recover TP based on your damage dealt.",
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
            "Max Level": "6",
            "Data": {
                "HP Gain": ["10+10%", "12+12%", "14+14%", "16+16%", "18+18%", "25+25%"],
            }
        },
        "Draining Thrust":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Turning Tide (Lv 2)",
            "Description": "Spear: Spend part of your current HP to deal melee Stab damage to the enemy front line.",
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
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "5", "5", "9"],
                "HP Cost": ["20%", "20%", "20%", "34%"],
                "Damage Taken↓": ["-20%", "-22%", "-24%", "-30%"],
                "Action Speed": ["150%", "150%", "150%", "150%"],
            }
        },
        "Bloody Veil":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "When you first lose HP from any source during a turn, decrease all attack damage taken until the end of the turn.",
            "Max Level": "6",
            "Data": {
                "Damage Taken↓": ["-20%", "-22%", "-24%", "-26%", "-28%", "-34%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Max Level": "8",
            "Data": {
                "Max HP↑": ["+5%", "+6%", "+7%", "+11%", "+12%", "+13%", "+14%", "+20%"],
            }
        },
        "Mine":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Mine points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Head Pierce":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Spear Assist (Lv 3)",
            "Description": "Spear: Deal melee Stab damage to one enemy, with a chance to inflict Head Bind or Instant Death.",
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
            "Description": "Spear: Spend part of your current HP to prepare an attack that will hit in several more turns, at the end of the turn. When activated, deal ranged Stab damage to one enemy. Using Cross Charge activates it early, but damage is multiplied by 0.75 for each remaining charge turn.",
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
            "Description": "Spend part of the whole party's current HP to place a buff on the whole party for several turns, which increases bind/ailment infliction rates.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "12", "12", "12", "12", "18"],
                "HP Cost": ["15%", "15%", "15%", "25%", "25%", "25%", "25%", "35%"],
                "Inflictions↑": ["x1.1", "x1.13", "x1.16", "x1.16", "x1.19", "x1.22", "x1.25", "x1.25"],
                "Duration (Turns)": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Battle Instinct":{
            "Usage": "Passive",
            "Unlock": "Blood Fortune (Lv 2)",
            "Description": "At the start of battle there's a chance to place a buff on the whole party for 3 turns, which nullifies one ailment infliction received. (Buff is consumed when activated)",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["15%", "20%", "25%", "30%", "35%", "50%"],
            }
        },
        "Bloody Offense":{
            "Usage": "Active (Head)",
            "Unlock": "Bloody Veil (Lv 2)",
            "Description": "Place a buff on an ally line for several turns, which increases physical/elemental damage dealt but makes them lose HP when they act.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "9", "9", "9", "9", "14"],
                "Damage Dealt↑": ["+20%", "+25%", "+30%", "+30%", "+35%", "+40%", "+45%", "+45%"],
                "HP Loss": ["10%", "12%", "14%", "14%", "16%", "18%", "20%", "20%"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Bloodlust":{
            "Usage": "Passive (STR)",
            "Unlock": "Bloody Offense (Lv 2)",
            "Description": "Chance to attack a random enemy each time you lose HP.",
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
            "Description": "Decreases physical damage taken.",
            "Max Level": "8",
            "Data": {
                "Damage Taken↓": ["-4%", "-5%", "-6%", "-9%", "-10%", "-11%", "-12%", "-15%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Spear Reversal":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Head Pierce (Lv 3)",
            "Description": "Spear: Deal melee Stab damage to one enemy. Increase damage dealt by 200% if the target's remaining HP% is higher than yours.",
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
            "Description": "Spear: Spend part of your current HP to deal melee Stab damage to one enemy. If Delayed Charge is preparing against the same target, activate it and increase this skill's damage dealt by 150%.",
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
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "14", "14", "14", "14", "14", "20"],
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
            "Max Level": "4",
            "Data": {
                "TP Gain": ["2+1%", "3+1%", "4+1%", "6+2%"],
            }
        },
        "Black Sabbath":{
            "Usage": "Active (Head, STR)",
            "Unlock": "Bloodlust (Lv 3)",
            "Description": "Deal ranged Almighty damage to all enemies. The party recovers HP based on your damage dealt.",
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
            "Description": "Increases physical damage dealt.",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
    },
},
"Gunner":{
    "Force":{
        "Double Action":{
            "Usage": "Force Boost",
            "Description": "Gun skills are performed twice. The second instance has decreased attack/healing power.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Skill Power↓": ["x0.4"],
            }
        },
        "Riot Gun":{
            "Usage": "Force Break (Arms, STR, LUC)",
            "Description": "Deal ranged Stab damage and inflict Stun to one enemy.",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["400%", "800%", "1200%"],
                "Infliction Rate": ["1000%", "1000%", "1000%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Rapid Fire":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Gun: Deal 3 hits of ranged Stab damage to one enemy. Fast but inaccurate.",
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
            "Description": "Gun: Deal ranged Stab damage to one enemy, with splash effect.",
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
            "Description": "Gun: Deal ranged Stab damage to one enemy, with a chance to inflict Leg Bind. Slow but cannot miss.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Attack Power": ["160%", "166%", "172%", "178%", "198%", "204%", "210%", "216%", "222%", "260%"],
                "Infliction Rate": ["40%", "40%", "40%", "40%", "50%", "50%", "50%", "50%", "50%", "60%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Arm Snipe":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Leg Snipe (Lv 2)",
            "Description": "Gun: Deal ranged Stab damage to one enemy, with a chance to inflict Arm Bind. Slow but cannot miss.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Attack Power": ["160%", "166%", "172%", "178%", "198%", "204%", "210%", "216%", "222%", "260%"],
                "Infliction Rate": ["40%", "40%", "40%", "40%", "50%", "50%", "50%", "50%", "50%", "60%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Cover Support":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "When you Defend in the back line, restore HP to the front line. Healing is based on each unit's Max HP.",
            "Max Level": "6",
            "Data": {
                "HP Gain": ["8+5%", "9+6%", "10+7%", "11+8%", "12+9%", "15+15%"],
            }
        },
        "Shell Shock":{
            "Usage": "Active (Arms, LUC)",
            "Unlock": "Cover Support (Lv 2)",
            "Description": "Weaken the enemy back line for this turn, which decreases their offense, defense, accuracy and evasion, and attempts to inflict Stun.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["4", "4", "4", "7"],
                "Damage Dealt↓": ["-15%", "-17%", "-19%", "-25%"],
                "Damage Taken↑": ["+15%", "+18%", "+21%", "+30%"],
                "Accuracy↓": ["-10%", "-11%", "-12%", "-15%"],
                "Evasion↓": ["-15%", "-18%", "-21%", "-30%"],
                "Infliction Rate": ["40%", "45%", "50%", "65%"],
                "Action Speed": ["300%", "300%", "300%", "300%"],
            }
        },
        "Medic Bullet":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Gun: Restore HP and remove ailments for one ally.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6", "10"],
                "HP Gain": ["15+10%", "19+14%", "23+18%", "27+22%", "31+26%", "50+40%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "250%"],
            }
        },
        "Pop Flare":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Place a buff on the whole party for 3 turns, which increases accuracy.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "7"],
                "Accuracy↑": ["+15%", "+16.5%", "+18%", "+19.5%", "+21%", "+30%"],
                "Action Speed": ["40%", "60%", "80%", "100%", "120%", "200%"],
            }
        },
        "Mine":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Mine points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Feint Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Splash Shot (Lv 2)",
            "Description": "Gun: Deal ranged Stab damage to an enemy line. Places a debuff on the targets for 3 turns, which decreases evasion.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "17"],
                "Attack Power": ["150%", "158%", "166%", "174%", "182%", "220%"],
                "Evasion↓": ["-10%", "-11.5%", "-13%", "-14.5%", "-16%", "-25%"],
                "Accuracy": ["+0%", "+15%", "+30%", "+45%", "+50%", "+100%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Scattershot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Feint Shot (Lv 2)",
            "Description": "Gun: Deal ranged Stab damage to all enemies.",
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
            "Description": "Gun: Deal ranged Stab damage to one enemy, with a chance to inflict Head Bind. Slow but cannot miss.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Attack Power": ["160%", "166%", "172%", "178%", "198%", "204%", "210%", "216%", "222%", "260%"],
                "Infliction Rate": ["40%", "40%", "40%", "40%", "50%", "50%", "50%", "50%", "50%", "60%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Act Quick":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Enter a charge state until the end of next turn, which increases action speed and decreases TP costs.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["2", "2", "2", "2"],
                "Speed↑": ["x10.0", "x10.0", "x10.0", "x10.0"],
                "TP Cost↓": ["x0.9", "x0.6", "x0.45", "0.25"],
                "Action Speed": ["50%", "50%", "50%", "50%"],
            }
        },
        "Charged Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Act Quick (Lv 2)",
            "Description": "Gun: Deal ranged Stab damage to one enemy. Increases damage taken by 100% until it activates.",
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
            "Description": "Chance to automatically cast Shell Shock at the start of battle.",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["20%", "26%", "32%", "38%", "44%", "67%"],
            }
        },
        "Preemptive Flare":{
            "Usage": "Passive",
            "Unlock": "Pop Flare (Lv 2)",
            "Description": "Chance to automatically cast Pop Flare at the start of battle.",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["15%", "20%", "25%", "30%", "35%", "50%"],
            }
        },
        "Penetrator":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Single-hit, single-target attacks have a chance to gain pierce effect. (Valid attacks will let you choose the possible pierce target)",
            "Max Level": "8",
            "Data": {
                "Activation Chance": ["18%", "23%", "28%", "33%", "38%", "43%", "48%", "66%"],
            }
        },
        "TP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max TP.",
            "Max Level": "8",
            "Data": {
                "Max TP↑": ["+7%", "+9%", "+11%", "+17%", "+19%", "+21%", "+23%", "+30%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Ricochet":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Scattershot (Lv 2)",
            "Description": "Gun: Deal multiple hits of ranged Stab damage to random enemies. Highly innacurate.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "27", "27", "27", "27", "27", "35"],
                "Attack Power": ["134%", "140%", "146%", "152%", "152%", "159%", "166%", "173%", "180%", "180%"],
                "Hits": ["2~5", "2~5", "2~5", "2~5", "2~6", "2~6", "2~6", "2~6", "2~6", "3~7"],
                "Accuracy": ["-60%", "-60%", "-60%", "-60%", "-60%", "-60%", "-60%", "-60%", "-60%", "-60%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Charged Fire":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Charged Shot (Lv 3)",
            "Description": "Gun: Deal ranged Stab+Fire damage to one enemy. Increases damage taken by 100% until it activates.",
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
            "Description": "Gun: Deal ranged Stab+Ice damage to one enemy. Increases damage taken by 100% until it activates.",
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
            "Description": "Gun: Deal ranged Stab+Volt damage to one enemy. Increases damage taken by 100% until it activates.",
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
            "Description": "Increases physical damage dealt.",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
        "Multi-Shot":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Chance for attack skills to be activated an additional time. (Max once per turn)",
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
            "Description": "Increases the area of effect of Order skills (Line → Party), and halves their TP cost.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Proof of Nobility":{
            "Usage": "Force Break (Head)",
            "Description": "For this turn, buffs cannot be lost and their effect is doubled.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
    },
    "Novice (Lv 1)":{
        "Attack Order":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(Order) Place a buff on an ally line for several turns, which increases physical/elemental damage dealt.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "8", "8", "8", "8", "13"],
                "Damage Dealt↑": ["+17%", "+20%", "+23%", "+23%", "+27%", "+31%", "+35%", "+35%"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Fire Arms":{
            "Usage": "Active (Head)",
            "Unlock": "Attack Order (Lv 2)",
            "Description": "Place a buff on an ally line for several turns, which increases Fire damage dealt and imbues their weapons with Fire damage.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "11", "11", "11", "11", "17"],
                "Damage Dealt↑": ["x1.05", "x1.1", "x1.15", "x1.15", "x1.2", "x1.25", "x1.3", "x1.3"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Freeze Arms":{
            "Usage": "Active (Head)",
            "Unlock": "Attack Order (Lv 2)",
            "Description": "Place a buff on an ally line for several turns, which increases Ice damage dealt and imbues their weapons with Ice damage.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "11", "11", "11", "11", "17"],
                "Damage Dealt↑": ["x1.05", "x1.1", "x1.15", "x1.15", "x1.2", "x1.25", "x1.3", "x1.3"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Shock Arms":{
            "Usage": "Active (Head)",
            "Unlock": "Attack Order (Lv 2)",
            "Description": "Place a buff on an ally line for several turns, which increases Volt damage dealt and imbues their weapons with Volt damage.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "11", "11", "11", "11", "17"],
                "Damage Dealt↑": ["x1.05", "x1.1", "x1.15", "x1.15", "x1.2", "x1.25", "x1.3", "x1.3"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Guard Order":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(Order) Place a buff on an ally line for several turns, which decreases physical/elemental damage taken.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "8", "8", "8", "8", "13"],
                "Damage Taken↓": ["-15%", "-17%", "-19%", "-19%", "-21%", "-23%", "-25%", "-25%"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Reinforce":{
            "Usage": "Passive (WIS)",
            "Unlock": "Guard Order (Lv 2)",
            "Description": "Restore HP to allies when you place a buff on them.",
            "Max Level": "10",
            "Data": {
                "Healing Power": ["40%", "44%", "48%", "52%", "64%", "68%", "72%", "76%", "80%", "100%"],
            }
        },
        "Royal Veil":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "At the end of each turn, if your HP is full, restore HP to all allies. Healing is based on each unit's Max HP. (Does not stack)",
            "Max Level": "4",
            "Data": {
                "HP Gain": ["6+5%", "8+6%", "10+7%", "15+10%"],
            }
        },
        "Monarch March":{
            "Usage": "Passive (Field)",
            "Unlock": "Royal Veil (Lv 2)",
            "Description": "Restore HP to the whole party for every 3 steps taken.",
            "Max Level": "4",
            "Data": {
                "HP Gain": ["2", "3", "5", "10"],
            }
        },
        "Negotiation":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Dispel 1 buff and 1 debuff from one ally. Restore HP and TP to the target for each modifier removed.",
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
            "Description": "Obtain additional materials when gathering from Take points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Royal Dignity":{
            "Usage": "Passive (WIS)",
            "Unlock": "N/A",
            "Description": "Once per turn, if you have a buff, recover HP when attacked.",
            "Max Level": "6",
            "Data": {
                "Healing Power": ["40%", "50%", "60%", "70%", "80%", "120%"],
            }
        },
        "Royal Lineage":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Recover TP each time you receive a buff. (Does not activate if the buff cancelled a debuff)",
            "Max Level": "6",
            "Data": {
                "TP Gain": ["2", "3", "4", "5", "6", "8"],
            }
        },
        "Element Bomb I":{
            "Usage": "Active (Arms, INT)",
            "Unlock": "Fire/Freeze/Shock Arms (Lv 1)",
            "Description": "Dispel an elemental imbue on one ally to deal ranged damage of that element to all enemies. If this removed an Arms buff, apply its damage bonus to the attack. (Ignores Arms buffs on the user)",
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
            "Description": "(Order) Place a buff on an ally line for several turns, which increases Max HP.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "11", "11", "11", "11", "17"],
                "Max HP↑": ["+20%", "+25%", "+30%", "+30%", "+35%", "+40%", "+45%", "+45%"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Protect Order":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Reinforce (Lv 2)",
            "Description": "(Order) Place a buff on an ally line for several turns, which restores HP at the end of each turn.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "13", "13", "13", "13", "20"],
                "Healing Power": ["35%", "44%", "53%", "53%", "62%", "71%", "80%", "80%"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Prevent Order":{
            "Usage": "Active (Head)",
            "Unlock": "Rally Order (Lv 2), Protect Order (Lv 2)",
            "Description": "(Order) Place a buff on an ally line for several turns, which has a chance to block bind/ailment inflictions received. (Buff is consumed when activated)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "17", "17", "17", "17", "24"],
                "Activation Chance": ["60%", "62%", "64%", "71%", "73%", "75%", "77%", "85%"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Tactical Decree":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Empower allies with buffs for this turn, which makes them recover TP based on their damage taken.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "6"],
                "Damage Drain": ["6%", "7%", "8%", "9%", "10%", "15%"],
            }
        },
        "Healing Decree":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Empower allies with buffs for this turn, which makes them recover HP based on their damage dealt.",
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
            "Description": "Increases resistance to bind/ailment inflictions.",
            "Max Level": "8",
            "Data": {
                "Inflictions↓": ["x0.92", "x0.91", "x0.9", "x0.85", "x0.84", "x0.83", "x0.82", "x0.75"],
            }
        },
        "Element Bomb II":{
            "Usage": "Active (Arms, INT)",
            "Unlock": "Element Bomb I (Lv 3)",
            "Description": "Dispel an elemental imbue on one ally to deal 3 ranged hits of that element to random enemies. If this removed an Arms buff, apply its damage bonus to the attack. (Ignores Arms buffs on the user)",
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
            "Description": "Dispel all ally buffs, ally debuffs, enemy buffs and enemy debuffs, then restore HP and TP to the whole party based on the amount of individual buffs/debuffs removed:<br>-1 to 20 removals: Multiply the effect by <b>Removals<sup>2</sup></b>.<br>-Over 20 removals: Multiply the effect by <b>Removals*20.</b>",
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
            "Description": "(Order) Place a buff on an ally line for several turns, which gives them a chance to survive lethal damage, restoring HP if it activates. (Buff is consumed when activated)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["15", "15", "15", "22", "22", "22", "22", "30"],
                "Activation Chance": ["40%", "43%", "46%", "53%", "56%", "59%", "62%", "70%"],
                "HP Gain": ["1", "20", "40", "100", "120", "140", "160", "250"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["125%", "125%", "125%", "175%", "175%", "175%", "175%", "250%"],
            }
        },
        "Final Decree":{
            "Usage": "Active (Head)",
            "Unlock": "Tactical Decree (Lv 2), Healing Decree (Lv 2)",
            "Description": "Only usable if you have 3 buffs. Dispel all buffs on yourself to empower the party for this turn, which increases physical/elemental damage dealt and decreases physical/elemental damage taken.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "20", "35"],
                "Damage Dealt↑": ["x1.22", "x1.24", "x1.26", "x1.28", "x1.3", "x1.4"],
                "Damage Taken↓": ["x0.78", "x0.76", "x0.74", "x0.72", "x0.7", "x0.6"],
            }
        },
        "Renew":{
            "Usage": "Passive",
            "Unlock": "Final Decree (Lv 3)",
            "Description": "When you dispel buffs on yourself, they have a chance to be reapplied.",
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
            "Description": "Increases evasion and enemy aggro.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Evasion↑": ["+65%"],
                "Aggro↑": ["+400%"],
            }
        },
        "Ninpo: Toxic Mist":{
            "Usage": "Force Break (Head, LUC)",
            "Description": "Inflict Poison to all enemies. (For reference, <i>Poison Damage = (PoisonPower + Level/6 + Random1)*(1 + Level/25) + Random2</i>, where each Random is a number from 0 to 5)",
            "Max Level": "3",
            "Levels": ["1~59", "60~98", "99~130"],
            "Data": {
                "Infliction Rate": ["1000%", "1000%", "1000%"],
                "Poison Power": ["100", "200", "300"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Ninpo: Daggers":{
            "Usage": "Active (Head, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Deal multiple hits of ranged Stab damage to random enemies (max once each), with a chance to inflict Sleep.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "10"],
                "Attack Power": ["60%", "65%", "70%", "75%", "95%", "100%", "105%", "110%", "115%", "150%"],
                "Infliction Rate": ["35%", "35%", "35%", "35%", "45%", "45%", "45%", "45%", "45%", "55%"],
                "Hits": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["-6%", "-6%", "-6%", "-6%", "-6%", "-6%", "-6%", "-6%", "-6%", "-6%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Ninpo: Caltrops":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Ninpo:Daggers (Lv 3)",
            "Description": "Target an ally line and prepare to counterattack each time it takes physical damage. On each activation, deal ranged Cut damage to the attacker, with a chance to inflict Poison.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "9"],
                "Attack Power": ["35%", "35%", "35%", "35%", "35%", "35%"],
                "Infliction Rate": ["60%", "65%", "70%", "75%", "80%", "100%"],
                "Poison Power": ["25", "33", "41", "49", "57", "90"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "Shadow Bind":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Knife: Deal melee Cut damage to one enemy, with a chance to inflict Leg Bind.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "7", "7", "7", "7", "12"],
                "Attack Power": ["150%", "155%", "160%", "185%", "190%", "195%", "200%", "230%"],
                "Infliction Rate": ["45%", "45%", "45%", "55%", "55%", "55%", "55%", "70%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Bone Crusher":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Shadow Bind (Lv 3)",
            "Description": "Knife: Deal melee Bash damage to one enemy. Places a debuff on the target for 3 turns, which increases physical damage taken.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["5", "5", "5", "8", "8", "8", "8", "13"],
                "Attack Power": ["200%", "210%", "220%", "250%", "260%", "270%", "280%", "340%"],
                "Damage Taken↑": ["+10%", "+10%", "+10%", "+17%", "+17%", "+17%", "+17%", "+25%"],
                "Accuracy": ["-3%", "-3%", "-3%", "-3%", "-3%", "-3%", "-3%", "-3%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Reflexes":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Recover TP each time you evade an attack.",
            "Max Level": "4",
            "Data": {
                "TP Gain": ["2+1%", "3+1%", "4+1%", "5+2%"],
            }
        },
        "Concealment":{
            "Usage": "Passive",
            "Unlock": "Reflexes (Lv 2)",
            "Description": "Increases evasion.",
            "Max Level": "10",
            "Data": {
                "Evasion↑": ["+5%", "+6%", "+7%", "+8%", "+11%", "+12%", "+13%", "+14%", "+15%", "+20%"],
            }
        },
        "Ninpo: Mirage":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Summon a Decoy copy of yourself with modified stats. This Decoy cannot act and has increased evasion and enemy aggro.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "10"],
                "Decoy HP": ["30%", "40%", "50%", "60%", "70%", "100%"],
                "Decoy Stats": ["50%", "60%", "70%", "80%", "90%", "120%"],
                "Evasion↑": ["+1%", "+4%", "+7%", "+10%", "+13%", "+25%"],
                "Aggro↑": ["+500%", "+500%", "+500%", "+500%", "+500%", "+500%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
       "Proficiency":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases all damage dealt. At max level, removes the backline penalty for melee attacks.",
            "Max Level": "4",
            "Data": {
                "Damage Dealt↑": ["+4%", "+6%", "+8%", "+10%"],
            }
        },
        "Chop":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Chop points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Ninpo: Mirror":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Ninpo:Caltrops (Lv 2)",
            "Description": "Target one enemy afflicted with an ailment, then attempt to inflict that ailment on all other enemies.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6", "10"],
                "Infliction Rate": ["40%", "44%", "48%", "52%", "56%", "70%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Izuna":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Bone Crusher (Lv 2)",
            "Description": "Knife: Deal melee Cut damage to one enemy, with a chance to inflict Petrify.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "11", "11", "11", "11", "16"],
                "Attack Power": ["170%", "178%", "186%", "211%", "219%", "227%", "235%", "280%"],
                "Infliction Rate": ["25%", "25%", "25%", "32%", "32%", "32%", "32%", "40%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Hawk Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Izuna (Lv 3)",
            "Description": "Knife: Deal multiple hits of melee Cut damage to random enemies.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "13", "13", "13", "13", "20"],
                "Attack Power": ["120%", "126%", "132%", "132%", "138%", "144%", "150%", "150%"],
                "Hits": ["2~3", "2~3", "2~3", "2~4", "2~4", "2~4", "2~4", "3~5"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Revenge Bomb":{
            "Usage": "Passive (STR)",
            "Unlock": "N/A",
            "Description": "Once per battle, when killed, deal ranged Fire damage to your attacker.",
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
            "Max Level": "8",
            "Data": {
                "Infliction Rate": ["2%", "3%", "4%", "5%", "6%", "7%", "8%", "10%"],
            }
        },
        "Ninpo: Flight":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Drastically increase evasion against physical attacks until the end of turn. Bonus goes down each time you evade an attack.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "7", "7", "7", "7", "7", "13"],
                "Evasion↑": ["+50%", "+55%", "+60%", "+65%", "+84%", "+90%", "+96%", "+102%", "+108%", "+140%"],
                "Evasion Fadeout": ["10%", "11%", "12%", "13%", "16.8%", "18%", "19.2%", "20.4%", "21.6%", "28%"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "Auto-Mirage":{
            "Usage": "Passive",
            "Unlock": "Ninpo:Mirage (Lv 2)",
            "Description": "Chance to automatically activate Ninpo: Mirage at the start of battle.",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["25%", "30%", "35%", "40%", "45%", "67%"],
            }
        },
        "Status ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases bind/ailment infliction rates.",
            "Max Level": "8",
            "Data": {
                "Inflictions↑": ["x1.04", "x1.05", "x1.06", "x1.09", "x1.1", "x1.11", "x1.12", "x1.15"],
            }
        },
    },
    "Master (Lv 40)":{
        "Ninpo: Panic":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Ninpo:Mirror (Lv 2)",
            "Description": "Attempt to inflict Panic on all enemies.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["13", "13", "13", "13", "13", "20"],
                "Infliction Rate": ["28%", "30%", "32%", "34%", "36%", "45%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Return Malice":{
            "Usage": "Passive",
            "Unlock": "Ninpo:Panic (Lv 2)",
            "Description": "When you evade an attack, increase ailment infliction rates on the next turn.",
            "Max Level": "6",
            "Data": {
                "Inflictions↑": ["x1.1", "x1.13", "x1.16", "x1.19", "x1.22", "x1.35"],
            }
        },
        "Dominance":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Hawk Strike (Lv 2)",
            "Description": "Knife: Deal melee Cut damage to one enemy. Cannot miss. If the target has an ailment, recover Force.",
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
            "Description": "Knife: Deal multiple hits of melee Cut damage to random enemies. Damage is doubled for each clone, but dispels all clones. (Damage is divided by 4 if there's no clones)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["20", "20", "20", "27", "27", "27", "27", "35"],
                "Attack Power": ["120%", "126%", "132%", "132%", "138%", "144%", "150%", "150%"],
                "Hits": ["2~3", "2~3", "2~3", "2~4", "2~4", "2~4", "2~4", "3~5"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "Ninpo: Smoke":{
            "Usage": "Active (Legs)",
            "Unlock": "Ninpo: Flight (Lv 2)",
            "Description": "Spend part of current HP to place a buff on yourself for 3 turns, which increases evasion.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20"],
                "HP Cost": ["10%", "10%", "10%", "10%", "30%", "30%", "30%", "30%", "30%", "50%"],
                "Evasion↑": ["+20%", "+20.8%", "+21.6%", "+22.4%", "+27%", "+27.8%", "+28.6%", "+29.4%", "+30.2%", "+40%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Mystic Calm":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decreases the TP cost of skills. (Costs have a minimum cap of 1)",
            "Max Level": "4",
            "Data": {
                "TP Cost↓": ["-1", "-2", "-3", "-4"],
            }
        },
    },
},
"Zodiac":{
    "Force":{
        "Divination":{
            "Usage": "Force Boost",
            "Description": "Increases damage dealt with Astrology skills, and refunds part of their spent TP.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt↑": ["x1.4"],
                "TP Refund": ["50%"],
            }
        },
        "Astrosign":{
            "Usage": "Force Break (Head, INT)",
            "Description": "Deal ranged Fire+Ice+Volt damage to all enemies. For this turn, skills from your allies spend 0 TP.",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["300%", "550%", "800%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Etheric Gleam":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on an ally line for several turns, which increases elemental damage dealt.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "10", "10", "10", "10", "16"],
                "Damage Dealt↑": ["+15%", "+19%", "+23%", "+23%", "+27%", "+31%", "+35%", "+35%"],
                "Duration": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Fire Star":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Etheric Gleam (Lv 1)",
            "Description": "(Astrology) Deal ranged Fire damage to one enemy, with splash effect.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "13", "13", "13", "13", "13", "18"],
                "Attack Power": ["100%", "103%", "106%", "109%", "118%", "121%", "124%", "127%", "130%", "150%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Ice Star":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Etheric Gleam (Lv 1)",
            "Description": "(Astrology) Deal ranged Ice damage to one enemy, with pierce effect.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "13", "13", "13", "13", "13", "18"],
                "Attack Power": ["90%", "93%", "95%", "98%", "106%", "109%", "112%", "115%", "118%", "135%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Volt Star":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Etheric Gleam (Lv 1)",
            "Description": "(Astrology) Deal ranged Volt damage to an enemy line.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "13", "13", "13", "13", "13", "18"],
                "Attack Power": ["80%", "82%", "84%", "86%", "92%", "95%", "98%", "101%", "104%", "120%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
            }
        },
        "Singularity":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase damage dealt when you hit a weakness. (Additionally, attacks that hit a weakness will show a message and make a special sound effect)",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["+6%", "+7%", "+9%", "+10%", "+12%", "+13%", "+15%", "+20%"],
            }
        },
        "Etheric Charge":{
            "Usage": "Active (Head)",
            "Unlock": "Singularity (Lv 3)",
            "Description": "Enter a charge state until the end of next turn, which strongly increases damage dealt with Astrology skills but turns them into single-target attacks.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "15"],
                "Damage Dealt↑": ["x1.8", "x1.9", "x2.0", "x2.15", "x2.3", "x3.0"],
                "Action Speed": ["30%", "30%", "30%", "30%", "30%", "30%"],
            }
        },
        "Etheric Return":{
            "Usage": "Passive",
            "Unlock": "Singularity (Lv 3)",
            "Description": "Recover TP each time you kill an enemy.",
            "Max Level": "4",
            "Data": {
                "TP Gain": ["1%", "1+1%", "2+1%", "3+2%"],
            }
        },
        "Horoscope":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily decrease the enemy encounter rate.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6", "10"],
                "Encounters↓": ["x0.6", "x0.55", "x0.5", "x0.45", "x0.4", "x0.25"],
                "Duration": ["50", "75", "100", "125", "150", "255"],
            }
        },
        "Mine":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Mine points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Ether Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases damage dealt with Astrology skills.",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%", "+15%"],
            }
        },
        "TP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max TP.",
            "Max Level": "8",
            "Data": {
                "Max TP↑": ["+7%", "+9%", "+11%", "+17%", "+19%", "+21%", "+23%", "+30%"],
            }
        },
        "Binary Fire":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Fire Star (Lv 3)",
            "Description": "(Astrology) Deal ranged Fire damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "27", "27", "27", "27", "27", "35"],
                "Attack Power": ["110%", "113%", "116%", "119%", "129%", "132%", "136%", "139%", "143%", "165%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Binary Ice":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Ice Star (Lv 3)",
            "Description": "(Astrology) Deal ranged Ice damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "27", "27", "27", "27", "27", "35"],
                "Attack Power": ["110%", "113%", "116%", "119%", "129%", "132%", "136%", "139%", "143%", "165%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Binary Volt":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Volt Star (Lv 3)",
            "Description": "(Astrology) Deal ranged Volt damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "27", "27", "27", "27", "27", "35"],
                "Attack Power": ["110%", "113%", "116%", "119%", "129%", "132%", "136%", "139%", "143%", "165%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Etheric Boon":{
            "Usage": "Passive",
            "Unlock": "Etheric Charge (Lv 2)",
            "Description": "Increases all damage dealt based on how much TP you spent last turn. This skill has a base damage bonus which is then multiplied by <b>SpentTP<sup>1.5</sup>/100</b> and rounded down. (Cheat Sheet: 15TP → x0.58; 25TP → x1.25; 35TP → x2.07; 45TP → x3.01)",
            "Max Level": "6",
            "Data": {
                "Damage Dealt↑": ["+3%", "+4%", "+5%", "+6%", "+7%", "+10%"],
            }
        },
        "Anti-Ether":{
            "Usage": "Passive",
            "Unlock": "Etheric Boon (Lv 2)",
            "Description": "Chance to nullify elemental attacks against party members in your line.",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["3%", "4%", "5%", "6%", "7%", "10%"],
            }
        },
        "Dark Ether":{
            "Usage": "Active (Head)",
            "Unlock": "Etheric Return (Lv 2)",
            "Description": "Empower one ally line for this turn, which decreases their TP spent.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "20", "30"],
                "TP Spent↓": ["x0.7", "x0.67", "x0.64", "x0.61", "x0.58", "x0.4"],
                "Action Speed": ["300%", "300%", "300%", "300%", "300%", "300%"],
            }
        },
        "Ether Shot":{
            "Usage": "Active (Arms, INT)",
            "Unlock": "Dark Ether (Lv 2)",
            "Description": "(Astrology) Deal ranged weapon-based damage to one enemy.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["2", "2", "2", "4", "4", "4", "4", "7"],
                "Attack Power": ["80%", "83%", "86%", "96%", "99%", "102%", "105%", "130%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Fire Prophecy":{
            "Usage": "Active (Head)",
            "Unlock": "Binary Fire (Lv 2)",
            "Description": "Target one enemy and prepare to nullify any Fire attack they might use this turn. If this activates, enter a charge state until the end of next turn, which increases all damage dealt.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["25", "25", "25", "25"],
                "Damage Dealt↑": ["x1.1", "x1.35", "x1.6", "x2.5"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Ice Prophecy":{
            "Usage": "Active (Head)",
            "Unlock": "Binary Ice (Lv 2)",
            "Description": "Target one enemy and prepare to nullify any Ice attack they might use this turn. If this activates, enter a charge state until the end of next turn, which increases all damage dealt.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["25", "25", "25", "25"],
                "Damage Dealt↑": ["x1.1", "x1.35", "x1.6", "x2.5"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Volt Prophecy":{
            "Usage": "Active (Head)",
            "Unlock": "Binary Volt (Lv 2)",
            "Description": "Target one enemy and prepare to nullify any Volt attack they might use this turn. If this activates, enter a charge state until the end of next turn, which increases all damage dealt.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["25", "25", "25", "25"],
                "Damage Dealt↑": ["x1.1", "x1.35", "x1.6", "x2.5"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Free Energy":{
            "Usage": "Passive",
            "Unlock": "Fire Prophecy (Lv 1), Ice Prophecy (Lv 1), Volt Prophecy (Lv 1)",
            "Description": "Chance to not spend TP when using skills.",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["10%", "12%", "14%", "16%", "18%", "25%"],
            }
        },
        "Multi-Strike Ether":{
            "Usage": "Active (Head)",
            "Unlock": "Anti-Ether (Lv 2)",
            "Description": "Enter a charge state until the end of next turn, which decreases damage dealt with Astrology skills but turns them into random-target multi-hit attacks (2~5 hits). In the case of Meteor, instead of changing target type it triples the minimum and maximum hits.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "35"],
                "Damage Dealt↓": ["x0.6", "x0.64", "x0.68", "x0.72", "x0.76", "x0.95"],
                "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%"],
            }
        },
        "Meteor":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Ether Shot (Lv 2), Horoscope (Lv 3)",
            "Description": "(Astrology) Deal 2~5 hits of ranged Bash damage to random enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["27", "27", "27", "27", "35", "35", "35", "35", "35", "45"],
                "Attack Power": ["50%", "52%", "53%", "55%", "61%", "62%", "64%", "65%", "67%", "80%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
    },
},
"Farmer":{
    "Force":{
        "Item Echo":{
            "Usage": "Force Boost",
            "Description": "Items used will activate their effect twice.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Final Secret":{
            "Usage": "Force Break (Head)",
            "Description": "Fill the Force Gauges of the whole party to 100%. Also has a 33% chance to restore broken Force Gauges.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
    },
    "Novice (Lv 1)":{
        "Sympathy Pain":{
            "Usage": "Active (Arms, LUC)",
            "Unlock": "N/A",
            "Description": "If you're afflicted with binds and/or an ailment, attempt to inflict them on all enemies.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "9"],
                "Infliction Rate": ["40%", "42%", "45%", "47%", "50%", "60%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Strange Seeds":{
            "Usage": "Active (Arms, LUC)",
            "Unlock": "Sympathy Pain (Lv 1)",
            "Description": "Plant seeds on all enemies, which will attempt to inflict a random bind on each one at the end of turn.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "14"],
                "Infliction Rate": ["25%", "27%", "28%", "30%", "35%", "36%", "38%", "39%", "41%", "50%"],
                "Action Speed": ["300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%"],
            }
        },
        "Play Possum":{
            "Usage": "Active (Arms)",
            "Unlock": "Sympathy Pain (Lv 1)",
            "Description": "Place a buff on an ally for 3 turns, which decreases enemy aggro.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "5"],
                "Aggro↓": ["-60%", "-65%", "-70%", "-75%", "-80%", "-95%"],
                "Action Speed": ["300%", "300%", "300%", "300%", "300%", "300%"],
            }
        },
        "Keen Eye":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily display treasure, shortcuts, stairs, FOEs and gathering points on the whole floor.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "8"],
                "Duration (Steps)": ["1", "5", "15", "30", "50", "255"],
            }
        },
        "Excavation":{
            "Usage": "Passive (Field)",
            "Unlock": "Keen Eye (Lv 2)",
            "Description": "Chance to obtain materials on every 20 steps taken. Maximum amount of items gained and the chance of obtaining higher amounts increases with skill level. Normal maximum level is 8, but gets added to other instances of this skill.",
            "Max Level": "0",
            "Data": ""
        },
        "Flee":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Attempt to escape the battle and teleport to the point where you entered the floor. If successful, spend part of the whole party's HP.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["3", "3", "3", "7"],
                "HP Cost": ["75%", "60%", "40%", "5%"],
                "Base Success Rate": ["65%", "70%", "80%", "100%"],
            }
        },
        "Slap Awake":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Revive an ally.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["7", "7", "7", "10"],
                "HP Gain": ["1", "20", "50", "300"],
            }
        },
        "Earth's Bounty":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "If you're alive at the end of a battle, increase EXP earned by the party.",
            "Max Level": "10",
            "Data": {
                "EXP↑": ["+9%", "+10%", "+12%", "+13%", "+15%", "+16%", "+18%", "+19%", "+21%", "+30%"],
            }
        },
        "Harvestry":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Take, Chop or Mine points. Maximum possible yield grows from 1 to 3 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Rotten Egg":{
            "Usage": "Active (Arms)",
            "Unlock": "Strange Seeds (Lv 3), Play Possum (Lv 1)",
            "Description": "Place a debuff on all enemies for 3 turns, which decreases damage dealt. Stronger while targets are afflicted with an ailment.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6", "10"],
                "Damage Dealt↓\n(Normal)": ["-4%", "-5%", "-6%", "-7%", "-8%", "-10%"],
                "Damage Dealt↓\n(Ailment)": ["-11%", "-13%", "-15%", "-17%", "-19%", "-25%"],
                "Action Speed": ["40%", "60%", "80%", "100%", "120%", "200%"],
            }
        },
        "Persistence":{
            "Usage": "Passive",
            "Unlock": "Rotten Egg (Lv 2)",
            "Description": "If you're dead, there's a chance to automatically revive with 1 HP at the end of each turn.",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["3%", "4%", "5%", "6%", "8%", "9%", "10%", "11%", "12%", "15%"],
            }
        },
        "Waste Not":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases enemy drop rates.", 
            "Max Level": "4",
            "Data": {
                "Drop Rate↑": ["+5%", "+8%", "+12%", "+20%"],
            }
        },
        "Godsend":{
            "Usage": "Passive (Field)",
            "Unlock": "Excavation (Lv 3)",
            "Description": "Chance to obtain consumable items on every 20 steps taken. Maximum amount of items gained and the chance of obtaining higher amounts increases with skill level. Normal maximum level is 8, but gets added to other instances of this skill.",
            "Max Level": "0",
            "Data": ""
        },
        "Rain or Shine":{
            "Usage": "Active (Field)",
            "Unlock": "Flee (Lv 1)",
            "Description": "Temporarily nullify the effect of damaging tiles and muddy tiles. Additionally, damage taken from attacks out of battle is decreased to 1.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Duration (Steps)": ["60", "70", "80", "90", "100", "255"],
            }
        },
        "Safe Stroll":{
            "Usage": "Active (Field)",
            "Unlock": "Rain or Shine (Lv 2)",
            "Description": "Temporarily decrease the enemy encounter rate.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "8", "14"],
                "Encounters↓": ["x0.5", "x0.45", "x0.4", "x0.35", "x0.3", "x0.15"],
                "Duration (Steps)": ["80", "100", "120", "140", "160", "255"],
            }
        },
        "Share the Wealth":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Restore TP to other allies in your line.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "14", "18", "22", "26", "30", "34", "50"],
                "TP Gain": ["5", "7", "9", "11", "13", "15", "17", "25"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Fearless":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "At the end of each turn, if you're in the front line and have full HP, recover TP.",
            "Max Level": "4",
            "Data": {
                "TP Gain": ["1+1%", "2+1%", "3+1%", "4+2%"],
            }
        },
        "Survival Wisdom":{
            "Usage": "Passive (Field)",
            "Unlock": "Earth's Bounty (Lv 3)",
            "Description": "Restore HP and TP to the party when using a gathering spot. Healing is based on each unit's Max HP and Max TP.",
            "Max Level": "6",
            "Data": {
                "HP Gain": ["10+25%", "15+27%", "20+29%", "25+31%", "30+33%", "50+50%"],
                "TP Gain": ["3+3%", "4+4%", "5+5%", "6+6%", "7+7%", "10+10%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Lullaby":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Persistence (Lv 2)",
            "Description": "Inflict Sleep on yourself, then attempt to inflict it on all enemies.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "9", "14"],
                "Infliction Rate": ["50%", "52%", "55%", "57%", "60%", "75%"],
                "Action Speed": ["20%", "20%", "20%", "20%", "20%", "200%"],
            }
        },
        "Fruitful Song":{
            "Usage": "Passive (Field)",
            "Unlock": "Lullaby (Lv 3)",
            "Description": "Restore TP to the party for every certain amount of steps taken. Healing is based on each unit's Max TP.",
            "Max Level": "8",
            "Data": {
                "Steps to Heal": ["12", "11", "10", "9", "8", "7", "6", "3"],
                "TP Gain": ["1+1%", "1+1%", "1+1%", "1+1%", "1+1%", "1+1%", "1+1%", "1+1%"],
            }
        },
        "Blessed Remains":{
            "Usage": "Passive",
            "Unlock": "Waste Not (Lv 2)",
            "Description": "Restore Force to the whole party each time you kill an enemy.",
            "Max Level": "6",
            "Data": {
                "Force Gain": ["3%", "4%", "5%", "6%", "7%", "10%"],
            }
        },
        "Harvest Festival":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Deal melee Cut damage to all enemies. On targets with binds, increase damage dealt by 250% and attempt to inflict Instant Death.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "18", "18", "18", "18", "18", "28"],
                "Attack Power": ["125%", "129%", "133%", "137%", "152%", "160%", "168%", "176%", "184%", "250%"],
                "Infliction Rate": ["25%", "26%", "27%", "28%", "32%", "34%", "36%", "38%", "40%", "50%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Nature's Blessing":{
            "Usage": "Passive (Field)",
            "Unlock": "Survival Wisdom (Lv 2)",
            "Description": "Chance to get additional, rare materials from gathering spots.",
            "Max Level": "4",
            "Data": {
                "Max. Extra Items": ["1", "2", "3", "4"],
            }
        },
        "Double Crop":{
            "Usage": "Passive (Field)",
            "Unlock": "Nature's Blessing (Lv 2)",
            "Description": "Chance to gather a second time when using a gathering spot. (Max once per gather, even with multiple instances of this skill)",
            "Max Level": "8",
            "Data": {
                "Activation Chance": ["16%", "19%", "22%", "25%", "28%", "31%", "34%", "50%"],
            }
        },
    },
},
"Shogun":{
    "Force":{
        "Unified Effort":{
            "Usage": "Force Boost",
            "Description": "Increases Max HP and all damage dealt for the whole party.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Max HP↑": ["+40%"],
                "Damage Dealt↑": ["x1.15"],
            }
        },
        "Decoy Party":{
            "Usage": "Force Break (Head)",
            "Description": "Empower all party members for this turn, which lets them block the first enemy action (attack or any infliction type) that targets them.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
    },
    "Novice (Lv 1)":{
        "Second Sword":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Allows you to equip a sub-weapon (uses an armor slot). Decreases damage taken if you have two weapons equipped. (Skills that can use both weapons will prioritize the strongest one)",
            "Max Level": "10",
            "Data": {
                "Damage Taken↓": ["-5%", "-6%", "-7%", "-8%", "-12%", "-13%", "-14%", "-15%", "-16%", "-20%"],
            }
        },
        "Echoing Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Second Sword (Lv 2)",
            "Description": "Katana: Deal weapon-based damage to one enemy at the start of turn. If you have a sub-weapon, perform a second hit with it after the target acts.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "9"],
                "Attack Power\n(First Hit)": ["120%", "123%", "126%", "129%", "141%", "145%", "149%", "153%", "157%", "180%"],
                "Attack Power\n(Second Hit)": ["100%", "103%", "106%", "109%", "120%", "123%", "126%", "129%", "132%", "150%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            }
        },
        "Front Command":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Target one ally and prepare to command a counterattack when they're first hit this turn. If it activates, all party members in the front line will deal weapon-based damage to the attacker.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4", "8"],
                "Attack Power": ["125%", "133%", "141%", "149%", "157%", "200%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Bolt Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Katana: Deal melee Cut+Volt damage to one enemy.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "10", "10", "10", "10", "15"],
                "Attack Power": ["160%", "168%", "176%", "196%", "204%", "212%", "220%", "260%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Avidya Sight":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases all damage dealt if it's nighttime or you're afflicted by Blind.",
            "Max Level": "4",
            "Data": {
                "Damage Dealt↑": ["+8%", "+10%", "+12%", "+20%"],
            }
        },
        "Great Warrior":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on one ally for 3 turns, which increases physical damage dealt and enemy aggro.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "9"],
                "Damage Dealt↑": ["+20%", "+25%", "+30%", "+35%", "+40%", "+60%"],
                "Aggro↑": ["+200%", "+220%", "+240%", "+260%", "+280%", "+400%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Taunt Assassins":{
            "Usage": "Active (Field)",
            "Unlock": "Great Warrior (Lv 2)",
            "Description": "Temporarily increase the enemy encounter rate and EXP gained from battle.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "15"],
                "Encounters↑": ["x2.5", "x3.25", "x4.0", "x4.75", "x5.5", "x10.0"],
                "EXP Gain↑": ["+20%", "+30%", "+40%", "+50%", "+60%", "+100%"],
                "Duration (Steps)": ["100", "100", "100", "100", "100", "100"],
            }
        },
        "Morale Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "If you're revived during battle, restore HP to all allies.",
            "Max Level": "4",
            "Data": {
                "HP Gain": ["25", "30", "35", "50"],
            }
        },
        "Take":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Take points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Twin Swallows":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Echoing Slash (Lv 3)",
            "Description": "Katana: Deal weapon-based damage to one enemy. If you have a sub-weapon, perform a second hit with it.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "11", "11", "11", "11", "11", "17"],
                "Attack Power": ["140%", "144%", "148%", "152%", "168%", "172%", "176%", "180%", "184%", "225%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Endure Command":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Front Command (Lv 2)",
            "Description": "Prepare to command a counterattack when you're first hit this turn. If it activates, all other allies will deal weapon-based damage to the attacker.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Attack Power": ["110%", "116%", "123%", "129%", "136%", "175%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Blitz Command":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Endure Command (Lv 2)",
            "Description": "Command all other allies to deal weapon-based damage to one enemy.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "22"],
                "Attack Power": ["75%", "78%", "81%", "84%", "93%", "96%", "99%", "102%", "105%", "120%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Morning Star":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Bolt Slash (Lv 3)",
            "Description": "Deal melee Cut damage to an enemy line. Deals 50% more damage during daytime.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "12", "18"],
                "Attack Power": ["130%", "138%", "146%", "154%", "162%", "200%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Twilight Hour":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Avidya Sight (Lv 2)",
            "Description": "Deal melee Cut damage to one enemy. Deals 50% more damage during nighttime.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7", "12"],
                "Attack Power": ["160%", "172%", "184%", "196%", "208%", "265%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["125%", "125%", "125%", "125%", "125%", "125%"],
            }
        },
        "Bloody Lance":{
            "Usage": "Passive",
            "Unlock": "Twilight Hour (Lv 2)",
            "Description": "Gain an increase to damage dealt each time you kill a unit. (Capped at 9 stacks. Resets if you die)",
            "Max Level": "6",
            "Data": {
                "Damage Dealt↑": ["+6%", "+8%", "+10%", "+12%", "+14%", "+20%"],
            }
        },
        "Reincarnation":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "At the end of a turn where you died, there's a chance to automatically revive with 1 HP.",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["5%", "6%", "7%", "8%", "11%", "12%", "13%", "14%", "15%", "20%"],
            }
        },
        "Peerless Demon":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase damage dealt based on how many hits you have performed this turn.",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+4%", "+4%", "+4%", "+4%", "+7%", "+7%", "+7%", "+7%", "+7%", "+10%"],
                "Max. Stacks": ["2", "3", "4", "5", "5", "6", "7", "8", "9", "9"],
            }
        },
        "Seppuku":{
            "Usage": "Active (Arms, WIS)",
            "Unlock": "N/A",
            "Description": "User dies to restore HP to all other allies, with a chance to revive them. (<b>Bug</b>: Revive chance is rolled twice and must pass both to activate)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "15", "25"],
                "Healing Power": ["100%", "115%", "130%", "145%", "160%", "250%"],
                "Revive Chance": ["34%", "38%", "42%", "46%", "50%", "67%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
    },
    "Master (Lv 40)":{
        "5-Ring Sword":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Twin Swallows (Lv 4)",
            "Description": "Katana: Deal multiple hits of weapon-based damage to random enemies. If you have a sub-weapon, the maximum hits are doubled and hits will alternate between both weapons.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "22", "22", "22", "22", "22", "30"],
                "Attack Power": ["61%", "63%", "65%", "67%", "67%", "69%", "71%", "73%", "75%", "75%"],
                "Hits": ["2~4", "2~4", "2~4", "2~4", "3~4", "3~4", "3~4", "3~4", "3~4", "3~5"],
                "Accuracy": ["-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "-7%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Shot Command":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Blitz Command (Lv 3)",
            "Description": "Target one ally line and prepare to command a counterattack when it's first hit this turn. If it activates, all party members with a Bow or a Gun will deal weapon-based damage to the attacker.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7", "12"],
                "Attack Power": ["125%", "133%", "141%", "149%", "157%", "200%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Warrior Might":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Shot Command (Lv 2)",
            "Description": "Prepare to follow up all ally attacks this turn, dealing weapon-based damage to the same targets. Each activation will cost HP.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20"],
                "Attack Power": ["100%", "103%", "106%", "109%", "119%", "122%", "125%", "128%", "131%", "150%"],
                "HP Loss": ["45", "45", "45", "45", "55", "55", "55", "55", "55", "70"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            }
        },
        "Curse Strike":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Bloody Lance (Lv 2)",
            "Description": "Katana: Deal melee Bash damage to one enemy, with a chance to inflict Curse and Arm Bind.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["9", "9", "9", "13", "13", "13", "13", "18"],
                "Attack Power": ["220%", "230%", "240%", "270%", "280%", "290%", "300%", "350%"],
                "Infliction Rate": ["25%", "25%", "25%", "32%", "32%", "32%", "32%", "40%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Execution":{
            "Usage": "Passive (Arms)",
            "Unlock": "Curse Strike (Lv 3)",
            "Description": "Chance to automatically kill allies and enemies that are below a certain HP threshold after being hit. (Ignores Instant Death resistance and immunity, except on the final boss and superboss)",
            "Max Level": "4",
            "Data": {
                "HP Threshold": ["5%", "7%", "9%", "15%"],
                "Activation Chance": ["25%", "30%", "35%", "60%"],
            }
        },
        "Swift Justice":{
            "Usage": "Active (Head)",
            "Unlock": "Reincarnation (Lv 2)",
            "Description": "Place a buff on one ally for 3 turns, which increases physical damage dealt and action speed but also increases physical damage taken.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "16"],
                "Damage Dealt↑": ["+20%", "+22%", "+25%", "+27%", "+30%", "+40%"],
                "Speed↑": ["x3.5", "x4.25", "x5.0", "x5.75", "x6.50", "x10.0"],
                "Damage Taken↑": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
    },
},
"Landsknecht":{
    "Force":{
        "Trinity":{
            "Usage": "Force Boost",
            "Description": "Increases all damage dealt, accuracy and action speed.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt↑": ["x1.4"],
                "Accuracy↑": ["+50%"],
                "Speed↑": ["x3.0"],
            }
        },
        "Full Charge":{
            "Usage": "Force Break (Arms)",
            "Description": "Become immune to attacks and inflictions until the end of this turn, and enter a charge state until the end of the next turn, which drastically increases all damage dealt and action speed.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt↑": ["x3.3"],
                "Speed↑": ["x40.0"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Proficiency":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "After you perform an attack, all party members deal more damage and have more accuracy against its targets until the end of turn.",
            "Max Level": "4",
            "Data": {
                "Damage Dealt↑": ["+3%", "+4%", "+5%", "+10%"],
                "Accuracy↑": ["+5%", "+6%", "+7%", "+10%"],
            }
        },
        "Falcon Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Sword/Rapier: Deal weapon-based damage to one enemy. Hits at the start of turn.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "7", "7", "7", "7", "15"],
                "Attack Power": ["150%", "155%", "160%", "195%", "200%", "205%", "210%", "280%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            }
        },
        "Blazing Link":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Sword/Rapier: Deal melee Cut/Stab+Fire damage to one enemy and mark them with a Link for this turn. Subsequent hits by allies will activate the Link (max 4 times), dealing additional Cut/Stab+Fire damage. Activation chance starts at 100% and goes down with each activation.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "14"],
                "Attack Power\n(Main Hit)": ["80%", "85%", "90%", "95%", "95%", "100%", "105%", "110%", "115%", "115%"],
                "Attack Power\n(Link Hits)": ["30%", "31%", "33%", "34%", "34%", "36%", "37%", "39%", "40%", "40%"],
                "Chance Fadeout": ["30%", "30%", "30%", "30%", "25%", "25%", "25%", "25%", "25%", "20%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%"],
            }
        },
        "Freezing Link":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Sword/Rapier: Deal melee Cut/Stab+Ice damage to one enemy and mark them with a Link for this turn. Subsequent hits by allies will activate the Link (max 4 times), dealing additional Cut/Stab+Ice damage. Activation chance starts at 100% and goes down with each activation.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "14"],
                "Attack Power\n(Main Hit)": ["80%", "85%", "90%", "95%", "95%", "100%", "105%", "110%", "115%", "115%"],
                "Attack Power\n(Link Hits)": ["30%", "31%", "33%", "34%", "34%", "36%", "37%", "39%", "40%", "40%"],
                "Chance Fadeout": ["30%", "30%", "30%", "30%", "25%", "25%", "25%", "25%", "25%", "20%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%"],
            }
        },
        "Electric Link":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Sword/Rapier: Deal melee Cut/Stab+Volt damage to one enemy and mark them with a Link for this turn. Subsequent hits by allies will activate the Link (max 4 times), dealing additional Cut/Stab+Volt damage. Activation chance starts at 100% and goes down with each activation.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "14"],
                "Attack Power\n(Main Hit)": ["80%", "85%", "90%", "95%", "95%", "100%", "105%", "110%", "115%", "115%"],
                "Attack Power\n(Link Hits)": ["30%", "31%", "33%", "34%", "34%", "36%", "37%", "39%", "40%", "40%"],
                "Chance Fadeout": ["30%", "30%", "30%", "30%", "25%", "25%", "25%", "25%", "25%", "20%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%"],
            }
        },
        "Vanguard":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 5 turns, which increases physical damage dealt and action speed but also increases physical damage taken.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "7"],
                "Damage Dealt↑": ["+10%", "+12%", "+15%", "+17%", "+20%", "+30%"],
                "Speed↑": ["x4", "x5", "x6", "x7", "x8", "x20"],
                "Damage Taken↑": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Power Break":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Shield: Deal melee Bash damage to one enemy. Places a debuff on the target for 3 turns, which decreases physical/elemental damage dealt. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Attack Power": ["150%", "160%", "170%", "180%", "190%", "240%"],
                "Damage Dealt↓": ["-7%", "-8%", "-9%", "-10%", "-11%", "-15%"],
                "Accuracy": ["-8%", "-8%", "-8%", "-8%", "-8%", "-8%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Phys DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decreases physical damage taken.",
            "Max Level": "8",
            "Data": {
                "Damage Taken↓": ["-4%", "-5%", "-6%", "-9%", "-10%", "-11%", "-12%", "-15%"],
            }
        },
        "Mine":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Mine points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Double Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Falcon Slash (Lv 2)",
            "Description": "Sword/Rapier: Deal 2 hits of weapon-based damage to one enemy.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "12", "12", "12", "12", "16"],
                "Attack Power": ["140%", "145%", "150%", "165%", "170%", "175%", "180%", "210%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Spiral Slice":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Double Strike (Lv 3)",
            "Description": "Sword: Deal melee Cut damage to one enemy, with splash effect.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "15", "15", "15", "15", "20"],
                "Attack Power": ["240%", "248%", "256%", "286%", "294%", "302%", "310%", "360%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Penetrate":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Double Strike (Lv 3)",
            "Description": "Rapier: Deal melee Stab damage to one enemy, with pierce effect.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "10", "10", "10", "10", "14"],
                "Attack Power": ["255%", "264%", "273%", "303%", "312%", "321%", "330%", "385%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%"],
            }
        },
        "Improved Link":{
            "Usage": "Active (Head)",
            "Unlock": "Blazing Link (Lv 3), Freezing Link (Lv 3), Electric Link (Lv 3)",
            "Description": "Place a buff on yourself for 3 turns, which increases maximum Link activations and diminishes the chance decrease per activation.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["7", "7", "7", "12"],
                "Links↑": ["+3", "+3", "+3", "+5"],
                "Fadeout↓": ["-6%", "-8%", "-10%", "-15%"],
                "Action Speed": ["80%", "80%", "80%", "80%"],
            }
        },
        "Smash Link":{
            "Usage": "Passive",
            "Unlock": "Improved Link (Lv 1)",
            "Description": "Link activations can make Critical Hits, with increased Critical rate. (If a multi-hit attack triggers multiple Link activations, when one of those becomes Critical the remaining ones will also be Critical)",
            "Max Level": "10",
            "Data": {
                "Crit Rate↑": ["+7%", "+8%", "+9%", "+10%", "+14%", "+15%", "+16%", "+17%", "+18%", "+25%"],
            }
        },
        "Guard Break":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Power Break (Lv 2)",
            "Description": "Shield: Deal melee Bash damage to one enemy. Places a debuff on the target for 3 turns, which increases physical/elemental damage taken. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Attack Power": ["150%", "160%", "170%", "180%", "190%", "240%"],
                "Damage Taken↑": ["+10%", "+12%", "+14%", "+16%", "+18%", "+25%"],
                "Accuracy": ["-8%", "-8%", "-8%", "-8%", "-8%", "-8%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Speed Break":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Guard Break (Lv 2)",
            "Description": "Shield: Deal melee Bash damage to one enemy. Places a debuff on the target for 3 turns, which decreases evasion and action speed. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Attack Power": ["150%", "158%", "166%", "174%", "182%", "220%"],
                "Evasion↓": ["-10%", "-11%", "-12%", "-13%", "-14%", "-20%"],
                "Speed↓": ["-15%", "-17.5%", "-20%", "-22.5%", "-25%", "-50%"],
                "Accuracy": ["+0%", "+10%", "+25%", "+35%", "+45%", "+70%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Initiative":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases all damage dealt and accuracy when you attack before any enemy has acted.",
            "Max Level": "4",
            "Data": {
                "Damage Dealt↑": ["+7%", "+10%", "+13%", "+20%"],
                "Accuracy↑": ["+4%", "+5%", "+6%", "+10%"],
            }
        },
        "Status DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases resistance to bind/ailment inflictions.",
            "Max Level": "8",
            "Data": {
                "Inflictions↓": ["x0.92", "x0.91", "x0.9", "x0.85", "x0.84", "x0.83", "x0.82", "x0.75"],
            }
        },
    },
    "Master (Lv 40)":{
        "Sword Tempest":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Spiral Slice (Lv 2)",
            "Description": "Sword: Deal melee Cut damage to one enemy.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["13", "13", "13", "18", "18", "18", "18", "24"],
                "Attack Power": ["350%", "363%", "376%", "426%", "439%", "452%", "465%", "560%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Swift Stab":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Penetrate (Lv 2)",
            "Description": "Rapier: Deal multiple hits of melee Stab damage randomly to an enemy line.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["9", "9", "9", "14", "14", "14", "14", "21"],
                "Attack Power": ["135%", "141%", "147%", "147%", "153%", "159%", "165%", "165%"],
                "Hits": ["2~3", "2~3", "2~3", "2~4", "2~4", "2~4", "2~4", "3~4"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Link Mastery":{
            "Usage": "Passive",
            "Unlock": "Smash Link (Lv 2)",
            "Description": "Increases damage dealt by a Link's activations for each time it has been activated this turn. (Stacks up to +99%)",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
        "Link Finale":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Link Mastery (Lv 2)",
            "Description": "Sword/Rapier: Deal weapon-based damage to one enemy. If you used a Link on the previous turn, increase damage dealt by 30% for each time it was activated.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "16"],
                "Attack Power": ["130%", "138%", "146%", "154%", "162%", "200%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Full Break":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Speed Break (Lv 2)",
            "Description": "Shield: Deal melee Bash damage to one enemy. Increase damage dealt by 125% if the target has a Break skill debuff. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "18"],
                "Attack Power": ["160%", "170%", "180%", "190%", "200%", "250%"],
                "Accuracy": ["-15%", "-15%", "-15%", "-15%", "-15%", "-15%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Single Devotion":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases all damage dealt. Bonus is greater the less damage types the attack has.",
            "Max Level": "6",
            "Data": {
                "Damage Dealt↑ (1 Type)": ["+6%", "+8%", "+10%", "+12%", "+14%", "+20%"],
                "Damage Dealt↑ (2 Types)": ["+2%", "+3%", "+3%", "+4%", "+4%", "+6%"],
                "Damage Dealt↑ (3 Types)": ["+1%", "+1%", "+1%", "+1%", "+1%", "+2%"],
            }
        },
    },
},
"Nightseeker":{
    "Force":{
        "Killing Intent":{
            "Usage": "Force Boost",
            "Description": "Increases all damage dealt and ailment infliction rates.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt↑": ["x1.4"],
                "Inflictions↑": ["x1.4"],
            }
        },
        "Disaster":{
            "Usage": "Force Break (Arms, STR)",
            "Description": "Deal melee Cut damage to one enemy. If the target has an ailment, prevent it from being healed this turn.",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["500%", "950%", "1400%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Sand Throw":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "(Throw) Deal ranged Cut damage to one enemy, with a chance to inflict Blind.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "5"],
                "Attack Power": ["125%", "125%", "125%", "125%", "125%", "150%"],
                "Infliction Rate": ["35%", "38%", "41%", "44%", "47%", "60%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Sleep Throw":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Sand Throw (Lv 2)",
            "Description": "(Throw) Deal ranged Cut damage to one enemy, with a chance to inflict Sleep.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "5"],
                "Attack Power": ["125%", "125%", "125%", "125%", "125%", "150%"],
                "Infliction Rate": ["40%", "43%", "46%", "49%", "52%", "65%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Shadow Cloak":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Enter the Shadow Cloak state for 3 turns. If you take physical damage, the Cloak gets consumed to nullify it.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["4", "4", "4", "4"],
                "Action Speed": ["20%", "50%", "80%", "200%"],
            }
        },
        "Biding Slice":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Shadow Cloak (Lv 1)",
            "Description": "Sword/Knife: Deal melee Cut damage to one enemy. At the end of turn, if you were not hit, attack a second time.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "7", "7", "7", "7", "10"],
                "Attack Power": ["165%", "171%", "177%", "197%", "203%", "209%", "215%", "250%"],
                "Accuracy": ["+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%", "+15%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
            }
        },
        "Ice Knife":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Sword/Knife: Deal melee Cut+Ice damage to one enemy.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["5", "5", "5", "8", "8", "8", "8", "12"],
                "Attack Power": ["160%", "167%", "174%", "199%", "206%", "213%", "220%", "260%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Proficiency":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases all damage dealt to enemies with ailments.",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+12%", "+14%", "+16%", "+18%", "+20%", "+23%", "+26%", "+29%", "+32%", "+50%"],
            }
        },
        "Decoy Sign":{
            "Usage": "Active (No Parts)",
            "Unlock": "N/A",
            "Description": "Place a buff on one ally for 3 turns, which increases enemy aggro.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["4", "4", "4", "6"],
                "Aggro↑": ["+200%", "+250%", "+300%", "+500%"],
                "Action Speed": ["150%", "150%", "150%", "150%"],
            }
        },
        "Blade Flurry":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Allows you to equip a sub-weapon (uses an armor slot). If you have two weapons equipped, normal attacks will perform a second hit with your sub-weapon.",
            "Max Level": "8",
            "Data": {
                "Attack Power\n(Second Hit)": ["30%", "33%", "36%", "39%", "42%", "45%", "48%", "60%"],
            }
        },
        "Chop":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Chop points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Curse Throw":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Sleep Throw (Lv 3)",
            "Description": "(Throw) Deal ranged Cut damage to one enemy, with a chance to inflict Curse.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "5"],
                "Attack Power": ["125%", "125%", "125%", "125%", "125%", "150%"],
                "Infliction Rate": ["40%", "44%", "48%", "52%", "56%", "70%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Nerve Throw":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Curse Throw (Lv 2)",
            "Description": "(Throw) Deal ranged Cut damage to one enemy, with a chance to inflict Paralysis.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "5"],
                "Attack Power": ["125%", "125%", "125%", "125%", "125%", "150%"],
                "Infliction Rate": ["35%", "38%", "41%", "44%", "47%", "60%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Shadow Bite":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Sleep Throw (Lv 3)",
            "Description": "Sword/Knife: Deal melee Cut damage to one enemy. Deals double damage to enemies with ailments.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "16"],
                "Attack Power": ["200%", "207%", "214%", "221%", "246%", "253%", "260%", "267%", "274%", "315%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Auto-Cloak":{
            "Usage": "Passive",
            "Unlock": "Biding Slice (Lv 2)",
            "Description": "Chance to automatically cast Shadow Cloak at the start of battle.",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["25%", "30%", "35%", "40%", "45%", "67%"],
            }
        },
        "Backstab":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Auto-Cloak (Lv 3)",
            "Description": "Sword/Knife: Deal melee Cut damage to one enemy, with a chance to inflict Head Bind. If Shadow Cloak is active, damage dealt is doubled and becomes Almighty type.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "15"],
                "Attack Power": ["160%", "168%", "176%", "184%", "209%", "217%", "225%", "233%", "241%", "285%"],
                "Infliction Rate": ["25%", "25%", "25%", "25%", "35%", "35%", "35%", "35%", "35%", "45%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Sneak Attack":{
            "Usage": "Active (Field)",
            "Unlock": "Proficiency (Lv 2)",
            "Description": "Temporarily gain an additional chance of getting a preemptive attack.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "15"],
                "Ambush Chance": ["6%", "7%", "8%", "9%", "10%", "20%"],
                "Duration (Steps)": ["60", "70", "80", "90", "100", "255"],
            }
        },
        "Foul Mastery":{
            "Usage": "Passive",
            "Unlock": "Sneak Attack (Lv 2)",
            "Description": "Gain a bonus to all damage dealt each time you inflict an ailment, stacking up to a certain limit. (Resets upon dying)",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+7%", "+8%", "+10%", "+11%", "+13%", "+14%", "+20%"],
                "Max. Bonus": ["+10%", "+12%", "+15%", "+17%", "+20%", "+25%", "+27%", "+32%", "+35%", "+50%"],
            }
        },
        "Speed Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases accuracy, evasion and action speed.",
            "Max Level": "8",
            "Data": {
                "Accuracy↑": ["+2.5%", "+3.1%", "+3.7%", "+5.7%", "+6.3%", "+6.9%", "+7.5%", "+10%"],
                "Evasion↑": ["+2.5%", "+3.1%", "+3.7%", "+5.7%", "+6.3%", "+6.9%", "+7.5%", "+10%"],
                "Speed↑": ["x1.06", "x1.08", "x1.10", "x1.16", "x1.18", "x1.2", "x1.22", "x1.30"],
            }
        },
        "Spread Throw":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Enter a charge state until the end of next turn, which makes Throw skills hit all enemies and increases their infliction rate.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "5", "5", "7"],
                "Inflictions↑": ["x1.05", "x1.1", "x1.15", "x1.35"],
            }
        },
    },
    "Master (Lv 40)":{
        "Venom Throw":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Nerve Throw (Lv 2)",
            "Description": "(Throw) Deal ranged Cut damage to one enemy, with a chance to inflict Poison.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "5"],
                "Attack Power": ["125%", "125%", "125%", "125%", "125%", "150%"],
                "Infliction Rate": ["35%", "38%", "41%", "44%", "47%", "60%"],
                "Poison Power": ["50", "60", "70", "80", "90", "130"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Swift Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Shadow Bite (Lv 3)",
            "Description": "Sword/Knife: Deal 3~5 hits of melee Cut damage to one enemy. Maximum hits are doubled against enemies with ailments.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["14", "14", "14", "14", "19", "19", "19", "19", "19", "25"],
                "Attack Power": ["80%", "82%", "84%", "86%", "94%", "96%", "99%", "101%", "104%", "120%"],
                "Accuracy": ["-20%", "-20%", "-20%", "-20%", "-20%", "-20%", "-20%", "-20%", "-20%", "-20%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Assassinate":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Backstab (Lv 3)",
            "Description": "Sword/Knife: Deal melee Cut damage to one enemy. If Shadow Cloak is active, also attempts to inflict Instant Death.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "15", "15", "15", "15", "20"],
                "Attack Power": ["310%", "320%", "330%", "380%", "390%", "400%", "410%", "500%"],
                "Infliction Rate": ["25%", "25%", "25%", "32%", "32%", "32%", "32%", "40%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Enduring Cloak":{
            "Usage": "Passive",
            "Unlock": "Assassinate (Lv 3)",
            "Description": "Chance to automatically reapply Shadow Cloak when it's consumed.",
            "Max Level": "8",
            "Data": {
                "Activation Chance": ["8%", "11%", "14%", "17%", "20%", "23%", "26%", "34%"],
            }
        },
        "Follow Trace":{
            "Usage": "Passive",
            "Unlock": "Blade Flurry (Lv 4)",
            "Description": "When using an attack skill against an enemy with an ailment, there's a chance to perform it a second time.",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["6%", "8%", "10%", "12%", "14%", "17%", "20%", "23%", "26%", "35%"],
            }
        },
        "Auto-Spread":{
            "Usage": "Passive",
            "Unlock": "Spread Throw (Lv 2)",
            "Description": "Chance to automatically cast Spread Throw at the start of battle.",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["6%", "8%", "10%", "12%", "14%", "17%", "20%", "23%", "26%", "35%"],
            }
        },
    },
},
"Arcanist":{
    "Force":{
        "Circle Paradise":{
            "Usage": "Force Boost",
            "Description": "Increases bind/ailment infliction chances. Prevents Circle duration from going down, and using Dismiss skills won't actually remove them.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Inflictions↑": ["x1.4"],
            }
        },
        "Releasal Spell":{
            "Usage": "Force Break (Head)",
            "Description": "Remove all buffs on one enemy and reset their accumulative resistance.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
    },
    "Novice (Lv 1)":{
        "Circle Boon":{
            "Usage": "Passive (WIS)",
            "Unlock": "N/A",
            "Description": "At the end of each turn, restore HP to the whole party if a Circle is active.",
            "Max Level": "4",
            "Data": {
                "Healing Power": ["15%", "20%", "25%", "40%"],
            }
        },
        "Dismiss Heal":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Circle Boon (Lv 1)",
            "Description": "(Dismiss) Remove the active Circle to restore HP to the whole party.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "12", "12", "12", "12", "12", "24"],
                "Healing Power": ["80%", "84%", "88%", "92%", "135%", "140%", "145%", "150%", "155%", "220%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Chain Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "N/A",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Arm Bind on all enemies at the end of each turn. (Overrides other Circles)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "12", "12", "12", "12", "18"],
                "Infliction Rate": ["20%", "21%", "22%", "26%", "27%", "28%", "29%", "35%"],
                "Action Speed": ["10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"],
            }
        },
        "Snare Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Chain Circle (Lv 2)",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Leg Bind on all enemies at the end of each turn. (Overrides other Circles)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "12", "12", "12", "12", "18"],
                "Infliction Rate": ["20%", "21%", "22%", "26%", "27%", "28%", "29%", "35%"],
                "Action Speed": ["10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"],
            }
        },
        "Nerve Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "N/A",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Paralysis on all enemies at the end of each turn. (Overrides other Circles)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "10", "10", "10", "10", "15"],
                "Infliction Rate": ["25%", "26%", "27%", "31%", "32%", "33%", "34%", "40%"],
                "Action Speed": ["10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"],
            }
        },
        "Curse Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Nerve Circle (Lv 2)",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Curse on all enemies at the end of each turn. (Overrides other Circles)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "10", "10", "10", "10", "15"],
                "Infliction Rate": ["35%", "36%", "38%", "43%", "44%", "46%", "47%", "55%"],
                "Action Speed": ["10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"],
            }
        },
        "Bracing Walk":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Restore HP to the whole party for every 3 steps taken.",
            "Max Level": "4",
            "Data": {
                "HP Gain": ["2", "3", "5", "10"],
            }
        },
        "Proficiency":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Recover TP when one of your Circles wears off by time or is dismissed.",
            "Max Level": "6",
            "Data": {
                "TP Gain": ["1+1%", "2+1%", "3+1%", "4+1%", "5+1%", "6+2%"],
            }
        },
        "Chop":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Chop points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Dismiss Revive":{
            "Usage": "Active (Head)",
            "Unlock": "Dismiss Heal (Lv 2)",
            "Description": "(Dismiss) Remove the active Circle for a chance to revive an ally line. (<b>Bug</b>: Revive chance is rolled twice and must pass both to activate)",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "20", "20", "20", "20", "20", "35"],
                "Revive Chance": ["65%", "67%", "68%", "70%", "76%", "77%", "79%", "80%", "82%", "92%"],
                "HP Gain": ["1", "10", "20", "30", "70", "80", "90", "100", "110", "200"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Dismiss Blow":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Dismiss Revive (Lv 3)",
            "Description": "(Dismiss) Remove the active Circle to deal ranged Almighty damage to one enemy.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "13", "13", "13", "13", "13", "30"],
                "Attack Power": ["250%", "260%", "270%", "280%", "350%", "360%", "370%", "380%", "390%", "500%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Hood Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Snare Circle (Lv 2)",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Head Bind on all enemies at the end of each turn. (Overrides other Circles)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "12", "12", "12", "12", "18"],
                "Infliction Rate": ["20%", "21%", "22%", "26%", "27%", "28%", "29%", "35%"],
                "Action Speed": ["10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"],
            }
        },
        "Sleep Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Curse Circle (Lv 2)",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Sleep on all enemies at the end of each turn. (Overrides other Circles)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "7", "7", "10", "10", "10", "10", "15"],
                "Infliction Rate": ["30%", "31%", "33%", "38%", "39%", "41%", "42%", "50%"],
                "Action Speed": ["10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"],
            }
        },
        "Charm Eye":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a debuff on all enemies for 3 turns, which decreases physical/elemental damage dealt.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7", "12"],
                "Damage Dealt↓": ["-8%", "-9%", "-10%", "-11%", "-12%", "-15%"],
                "Action Speed": ["40%", "60%", "80%", "100%", "120%", "200%"],
            }
        },
        "Atrophic Eye":{
            "Usage": "Active (Head)",
            "Unlock": "Charm Eye (Lv 2)",
            "Description": "Place a debuff on all enemies for 3 turns, which increases physical/elemental damage taken.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7", "12"],
                "Damage Taken↑": ["+10%", "+12%", "+14%", "+16%", "+18%", "+25%"],
                "Action Speed": ["40%", "60%", "80%", "100%", "120%", "200%"],
            }
        },
        "Status ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases bind/ailment infliction rates.",
            "Max Level": "8",
            "Data": {
                "Inflictions↑": ["x1.04", "x1.05", "x1.06", "x1.09", "x1.1", "x1.11", "x1.12", "x1.15"],
            }
        },
        "Tame Ground":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily nullify the effect of damaging tiles and muddy tiles. Additionally, damage taken from attacks out of battle is decreased to 1.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "10"],
                "Duration (Steps)": ["60", "70", "80", "90", "100", "255"],
            }
        },
        "Warding Mist":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Chance to nullify bind/ailment/stun inflictions towards your line.",
            "Max Level": "4",
            "Data": {
                "Activation Chance": ["4%", "5%", "6%", "10%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Dismiss Blast":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Dismiss Blow (Lv 2)",
            "Description": "(Dismiss) Remove an active Circle to deal ranged Almighty damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "24", "24", "24", "24", "24", "40"],
                "Attack Power": ["160%", "167%", "174%", "181%", "231%", "241%", "251%", "261%", "271%", "360%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Circle Mastery":{
            "Usage": "Active (Head)",
            "Unlock": "Dismiss Blast (Lv 3)",
            "Description": "Increases the effect of Dismiss skills.",
            "Max Level": "6",
            "Data": {
                "Healing↑\n(D. Heal)": ["x1.08", "x1.11", "x1.14", "x1.17", "x1.2", "x1.3"],
                "Healing↑\n(D. Revive)": ["+10", "+15", "+20", "+25", "+30", "+50"],
                "Chance↑\n(D. Revive)": ["+2%", "+3%", "+4%", "+5%", "+6%", "+8%"],
                "Damage↑\n(D. Blow)": ["x1.08", "x1.11", "x1.14", "x1.17", "x1.2", "x1.3"],
                "Damage↑\n(D. Blast)": ["x1.08", "x1.11", "x1.14", "x1.17", "x1.2", "x1.3"],
                "Infliction↑\n(D. Quake)": ["x1.08", "x1.11", "x1.14", "x1.17", "x1.2", "x1.3"],
            }
        },
        "Poison Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Sleep Circle (Lv 2)",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Poison on all enemies at the end of each turn. (Overrides other Circles)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "15", "15", "15", "15", "21"],
                "Infliction Rate": ["30%", "31%", "32%", "36%", "37%", "38%", "39%", "45%"],
                "Poison Power": ["40", "43", "46", "58", "61", "64", "67", "90"],
                "Action Speed": ["10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"],
            }
        },
        "Chaos Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Sleep Circle (Lv 2)",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Panic on all enemies at the end of each turn. (Overrides other Circles)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "15", "15", "15", "15", "21"],
                "Infliction Rate": ["14%", "15%", "16%", "18%", "19%", "20%", "21%", "25%"],
                "Action Speed": ["10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"],
            }
        },
        "Dismiss Quake":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Poison Circle (Lv 3), Chaos Circle (Lv 3)",
            "Description": "(Dismiss) Remove the active Circle to attempt to inflict Stun on all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "12", "12", "12", "12", "12", "20"],
                "Infliction Rate": ["40%", "41%", "42%", "43%", "47%", "48%", "49%", "50%", "51%", "60%"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "TP Return":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Recover TP when one of your skills inflicts a bind/ailment/stun on one or more enemies.",
            "Max Level": "4",
            "Data": {
                "TP Gain": ["1+1%", "2+1%", "3+1%", "4+2%"],
            }
        },
    },
},
"Imperial":{
    "Force":{
        "Ignition":{
            "Usage": "Force Boost",
            "Description": "Drive skills won't trigger the Overheat state.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Conversion":{
            "Usage": "Force Break (Head, WIS)",
            "Description": "Recover a massive amount of TP. Excess healing increases Max TP until you die or the battle ends.",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Healing Power": ["300%", "550%", "800%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Sharp Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "(Starter) Drive Blade: Deal melee Cut damage to one enemy. Decreases Overheat time by 1 turn.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "5", "5", "7"],
                "Attack Power": ["120%", "130%", "140%", "180%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%"],
            }
        },
        "Natural Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "(Starter) Drive Blade: Deal weapon-based damage to one enemy.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["3", "3", "3", "5", "5", "5", "5", "7"],
                "Attack Power": ["155%", "161%", "167%", "187%", "193%", "199%", "205%", "240%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Blood Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Sharp Edge (Lv 2), Natural Edge (Lv 2)",
            "Description": "(Combo) Drive Blade: Deal melee Cut damage to one enemy. Recover HP based on damage dealt. (Only usable right after a Starter skill)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "7", "7", "7", "7", "12"],
                "Attack Power": ["200%", "208%", "216%", "246%", "254%", "262%", "270%", "320%"],
                "Damage Drain": ["35%", "35%", "35%", "35%", "35%", "35%", "35%", "35%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Heavy Guard":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on one ally for 3 turns, which decreases damage taken but makes them act last.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "7"],
                "Damage Taken↓": ["-15%", "-18%", "-21%", "-24%", "-27%", "-40%"],
                "Action Speed": ["250%", "250%", "250%", "250%", "250%", "250%"],
            }
        },
        "Assault Drive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "(Drive) Drive Blade: Deal melee Cut damage to one enemy, then enter Overheat state for 7 turns. Increases damage taken by 100% until it activates. (Not usable during Overheat)",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "30", "30", "30", "30", "30", "40"],
                "Attack Power": ["450%", "470%", "490%", "510%", "610%", "640%", "670%", "700%", "730%", "900%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["25%", "25%", "25%", "25%", "25%", "25%", "25%", "25%", "25%", "25%"],
            }
        },
        "Heat Sink":{
            "Usage": "Active (Head)",
            "Unlock": "Assault Drive (Lv 3)",
            "Description": "Decrease remaining Overheat time.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "6", "3", "15", "10", "7", "25", "15"],
                "Duration↓": ["2", "2", "2", "3", "3", "3", "4", "4"],
                "Action Speed": ["30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"],
            }
        },
        "Heat Shield":{
            "Usage": "Passive",
            "Unlock": "Assault Drive (Lv 3)",
            "Description": "Decreases physical/elemental damage taken during Overheat.",
            "Max Level": "6",
            "Data": {
                "Damage Taken↓": ["-7%", "-9%", "-11%", "-13%", "-15%", "-20%"],
            }
        },
        "Avenger":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Recover HP each time an ally dies.",
            "Max Level": "4",
            "Data": {
                "HP Gain": ["30+10%", "40+15%", "50+20%", "100+40%"],
            }
        },
        "Mine":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Mine points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Massive Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Blood Edge (Lv 3)",
            "Description": "(Starter) Drive Blade: Deal melee Cut damage to one enemy, with splash effect.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "12", "12", "12", "12", "16"],
                "Attack Power": ["170%", "177%", "184%", "209%", "216%", "223%", "230%", "280%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Cool Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Massive Edge (Lv 2)",
            "Description": "(Combo) Drive Blade: Deal melee Cut damage to one enemy. Decreases Overheat time by 2 turns. (Only usable right after a Starter skill)",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["9", "9", "9", "14"],
                "Attack Power": ["200%", "215%", "230%", "300%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["80%", "80%", "80%", "80%"],
            }
        },
        "Trip Edge":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Blood Edge (Lv 3)",
            "Description": "(Starter) Drive Blade: Deal melee Cut damage to one enemy, with a chance to inflict Leg Bind.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "9", "9", "9", "9", "12"],
                "Attack Power": ["160%", "167%", "174%", "199%", "206%", "213%", "220%", "265%"],
                "Infliction Rate": ["30%", "30%", "30%", "40%", "40%", "40%", "40%", "50%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Impulse Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Trip Edge (Lv 2)",
            "Description": "(Combo) Drive Blade: Deal melee Cut damage to one enemy, and recover TP. (Only usable right after a Starter skill)",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
                "Attack Power": ["100%", "103%", "106%", "109%", "119%", "122%", "125%", "128%", "131%", "150%"],
                "TP Gain": ["10", "11", "12", "13", "18", "19", "20", "21", "22", "30"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Intercooler":{
            "Usage": "Passive",
            "Unlock": "Heat Sink (Lv 1), Heat Shield (Lv 1)",
            "Description": "Increases damage dealt with Drive skills and decreases Overheat duration.",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+3%", "+4%", "+5%", "+6%", "+6%", "+7%", "+8%", "+9%", "+10%", "+10%"],
                "Duration↓": ["0", "0", "0", "0", "1", "1", "1", "1", "1", "2"],
            }
        },
        "Flame Drive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Intercooler (Lv 3)",
            "Description": "(Drive) Drive Blade: Deal melee Cut+Fire damage to one enemy, then enter Overheat state for 8 turns. Increases damage taken by 100% until it activates. (Not usable during Overheat)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["25", "25", "25", "37", "37", "37", "37", "50"],
                "Attack Power": ["335%", "355%", "375%", "445%", "475%", "505%", "535%", "670%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["25%", "25%", "25%", "25%", "25%", "25%", "25%", "25%"],
            }
        },
        "Freeze Drive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Intercooler (Lv 3)",
            "Description": "(Drive) Drive Blade: Deal melee Cut+Ice damage to one enemy, then enter Overheat state for 8 turns. Increases damage taken by 100% until it activates. (Not usable during Overheat)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["25", "25", "25", "37", "37", "37", "37", "50"],
                "Attack Power": ["335%", "355%", "375%", "445%", "475%", "505%", "535%", "670%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["25%", "25%", "25%", "25%", "25%", "25%", "25%", "25%"],
            }
        },
        "Shock Drive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Intercooler (Lv 3)",
            "Description": "(Drive) Drive Blade: Deal melee Cut+Volt damage to one enemy, then enter Overheat state for 8 turns. Increases damage taken by 100% until it activates. (Not usable during Overheat)",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["25", "25", "25", "37", "37", "37", "37", "50"],
                "Attack Power": ["335%", "355%", "375%", "445%", "475%", "505%", "535%", "670%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["25%", "25%", "25%", "25%", "25%", "25%", "25%", "25%"],
            }
        },
        "Status DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases resistance to bind/ailment inflictions.",
            "Max Level": "8",
            "Data": {
                "Inflictions↓": ["x0.92", "x0.91", "x0.9", "x0.85", "x0.84", "x0.83", "x0.82", "x0.75"],
            }
        },
    },
    "Master (Lv 40)":{
        "Charge Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Cool Edge (Lv 2)",
            "Description": "(Final) Drive Blade: Deal melee Cut damage to one enemy. Enter a charge state until the end of next turn, which increases all damage dealt. (Only usable right after a Starter or Combo skill)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "20", "40"],
                "Attack Power": ["145%", "165%", "185%", "205%", "225%", "225%"],
                "Damage Dealt↑": ["x1.5", "x1.5", "x1.5", "x1.5", "x1.5", "x2.0"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["30%", "30%", "30%", "30%", "30%", "30%"],
            }
        },
        "Force Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Impulse Edge (Lv 2)",
            "Description": "(Final) Drive Blade: Deal melee Cut damage to one enemy, and gain Force. (Only usable right after a Starter or Combo skill)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["14", "14", "14", "14", "14", "21"],
                "Attack Power": ["220%", "235%", "250%", "265%", "280%", "350%"],
                "Force Gain": ["10%", "10%", "10%", "10%", "10%", "20%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Max Level": "8",
            "Data": {
                "Max HP↑": ["+5%", "+6%", "+7%", "+11%", "+12%", "+13%", "+14%", "+20%"],
            }
        },
        "Accel Drive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Flame Drive (Lv 1), Freeze Drive (Lv 1), Shock Drive (Lv 1)",
            "Description": "(Drive) Drive Blade: Deal melee Cut+Almighty damage to one enemy, then enter Overheat state for 9 turns. Increases damage taken by 100% until it activates. (Not usable during Overheat)",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["30", "30", "30", "30", "45", "45", "45", "45", "45", "60"],
                "Attack Power": ["600%", "630%", "660%", "690%", "820%", "855%", "890%", "925%", "960%", "1200%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["25%", "25%", "25%", "25%", "25%", "25%", "25%", "25%", "25%", "25%"],
            }
        },
        "Absorber":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Recover TP when one of your attacks hits the weakness of at least one enemy.",
            "Max Level": "4",
            "Data": {
                "TP Gain": ["2", "3", "4", "5+1%"],
            }
        },
        "Element Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases elemental damage dealt.",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
    },
},
"Pugilist":{
    "Force":{
        "Bind Rush":{
            "Usage": "Force Boost",
            "Description": "Increases bind infliction rate. For each attack that you land against an enemy afflicted by a bind/ailment/stun, perform a follow up attack.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Inflictions↑": ["x1.3"],
                "Attack Power\n(Follow Ups)": ["50%"],
            }
        },
        "Final Blow":{
            "Usage": "Force Break (Arms, STR, LUC)",
            "Description": "Deal melee Bash damage to one enemy, with a chance to inflict Head Bind, Arm Bind and Leg Bind.",
            "Max Level": "3",
            "Levels": ["1", "60", "130"],
            "Data": {
                "Attack Power": ["400%", "800%", "1200%"],
                "Infliction Chances": ["60%", "60%", "60%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Concussion":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Fist: Deal melee Bash damage to one enemy, with a chance to inflict Head Bind. If performed during One-Two Punch, there's a chance to follow up with Arm Breaker or Low Blow.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["3", "3", "3", "6", "6", "6", "6", "10"],
                "Attack Power": ["115%", "120%", "125%", "140%", "145%", "150%", "155%", "180%"],
                "Infliction Rate": ["30%", "30%", "30%", "37%", "37%", "37%", "37%", "45%"],
                "Follow Up Chance": ["40%", "43%", "46%", "55%", "58%", "61%", "64%", "75%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["65%", "65%", "65%", "65%", "65%", "65%", "65%", "65%"],
            }
        },
        "Arm Breaker":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Fist: Deal melee Bash damage to one enemy, with a chance to inflict Arm Bind. If performed during One-Two Punch, there's a chance to follow up with Low Blow.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["3", "3", "3", "6", "6", "6", "6", "10"],
                "Attack Power": ["115%", "120%", "125%", "140%", "145%", "150%", "155%", "180%"],
                "Infliction Rate": ["30%", "30%", "30%", "37%", "37%", "37%", "37%", "45%"],
                "Follow Up Chance": ["40%", "43%", "46%", "55%", "58%", "61%", "64%", "75%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["65%", "65%", "65%", "65%", "65%", "65%", "65%", "65%"],
            }
        },
        "Low Blow":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Fist: Deal melee Bash damage to one enemy, with a chance to inflict Leg Bind.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["3", "3", "3", "6", "6", "6", "6", "10"],
                "Attack Power": ["115%", "120%", "125%", "140%", "145%", "150%", "155%", "180%"],
                "Infliction Rate": ["30%", "30%", "30%", "37%", "37%", "37%", "37%", "45%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["65%", "65%", "65%", "65%", "65%", "65%", "65%", "65%"],
            }
        },
        "One-Two Punch":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Concussion (Lv 2), Arm Breaker (Lv 2), Low Blow (Lv 2)",
            "Description": "Fist: Deal melee Bash damage to one enemy, with a chance to follow up with Concussion, Arm Breaker and/or Low Blow (with decreased damage and infliction rate) if the target does not have the corresponding bind. (This skill's follow up chance is only for the first successful follow up, after which the chance will depend on the level of the latest follow up skill performed)",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "16"],
                "Attack Power": ["100%", "103%", "106%", "109%", "121%", "124%", "127%", "130%", "133%", "150%"],
                "Follow Up Chance": ["40%", "42%", "44%", "46%", "54%", "56%", "58%", "60%", "62%", "75%"],
                "Follow Up Effect": ["x0.5", "x0.5", "x0.5", "x0.5", "x0.5", "x0.5", "x0.5", "x0.5", "x0.5", "x0.5"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Corkscrew":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Fist: Deal melee Bash damage to one enemy, with a chance to inflict Paralysis.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["3", "3", "3", "6", "6", "6", "6", "10"],
                "Attack Power": ["115%", "120%", "125%", "140%", "145%", "150%", "155%", "180%"],
                "Infliction Rate": ["30%", "30%", "30%", "37%", "37%", "37%", "37%", "45%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["65%", "65%", "65%", "65%", "65%", "65%", "65%", "65%"],
            }
        },
        "Adrenaline":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Recover TP when one of your skills inflicts a bind/ailment/stun on one or more enemies.",
            "Max Level": "4",
            "Data": {
                "TP Gain": ["1+1%", "2+1%", "3+1%", "4+2%"],
            }
        },
        "Double Punch":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "When a single-hit Fist skill fails to inflict its bind/ailment, there's a chance to perform it a second time. (Works with Cross Counter despite the in-game description. Does not work on One-Two Punch follow ups. Does not work if infliction fails because the target was already afllicted)",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["13%", "16%", "19%", "22%", "25%", "28%", "31%", "34%", "37%", "50%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Max Level": "8",
            "Data": {
                "Max HP↑": ["+5%", "+6%", "+7%", "+11%", "+12%", "+13%", "+14%", "+20%"],
            }
        },
        "Chop":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Chop points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Devil's Fist":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Fist: Spent part of your current HP to deal melee Bash damage to one enemy, with splash effect.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["12", "12", "12", "16", "16", "16", "16", "20"],
                "HP Cost": ["10%", "10%", "10%", "20%", "20%", "20%", "20%", "30%"],
                "Attack Power": ["200%", "206%", "212%", "257%", "263%", "269%", "275%", "350%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Fighting Spirit":{
            "Usage": "Passive",
            "Unlock": "Devil's Fist (Lv 3)",
            "Description": "Increases all damage dealt if you lost HP on the previous turn.",
            "Max Level": "6",
            "Data": {
                "Damage Dealt↑": ["+10%", "+12%", "+14%", "+16%", "+18%", "+30%"],
            }
        },
        "Following Strike":{
            "Usage": "Passive (Arms)",
            "Unlock": "One-Two Punch (Lv 2), Corkscrew (Lv 2)",
            "Description": "Chance to follow up with Corkscrew when you inflict a bind.",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["13%", "16%", "19%", "22%", "25%", "28%", "31%", "34%", "37%", "50%"],
            }
        },
        "Leading Blow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Following Strike (Lv 2)",
            "Description": "Fist: Deal melee Bash damage to one enemy, then follow up with Concussion, Arm Breaker, Low Blow and/or Corkscrew (with decreased damage) if the target is afflicted by the corresponding bind/ailment. (Corkscrew activates for any ailment)",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["14", "14", "14", "14", "19", "19", "19", "19", "19", "25"],
                "Attack Power": ["100%", "103%", "106%", "109%", "121%", "124%", "127%", "130%", "133%", "150%"],
                "Follow Up Effect": ["x0.65", "x0.67", "x0.69", "x0.71", "x0.79", "x0.81", "x0.83", "x0.85", "x0.87", "x1.0"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Breather":{
            "Usage": "Active (No Parts)",
            "Unlock": "N/A",
            "Description": "Only usable if afflicted with a bind/ailment. Remove binds and ailment on yourself, then enter a charge state until the end of next turn, which increases all damage dealt.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["3", "3", "3", "8"],
                "Binds Removed": ["1", "1", "1", "3"],
                "Damage Dealt↑": ["x1.2", "x1.25", "x1.3", "x1.5"],
                "Action Speed": ["30%", "30%", "30%", "30%"],
            }
        },
        "Fault Blocker":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Place a buff on your line for 3 turns, which increases resistance to binds/ailment inflictions.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["8", "8", "8", "14"],
                "Inflictions↓": ["x0.75", "x0.71", "x0.67", "x0.5"],
                "Action Speed": ["30%", "30%", "30%", "30%"],
            }
        },
        "Clinch":{
            "Usage": "Active (No Parts, LUC)",
            "Unlock": "Breather (Lv 1), Fault Blocker (Lv 1)",
            "Description": "Attempt to inflict the 3 binds on one enemy and yourself.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["8", "8", "8", "14", "14", "14"],
                "Infliction Chance\n(Enemy)": ["20%", "22%", "24%", "26%", "28%", "35%"],
                "Infliction Chance\n(Self)": ["50%", "50%", "50%", "50%", "50%", "50%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Status ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases bind/ailment infliction rates.",
            "Max Level": "8",
            "Data": {
                "Inflictions↑": ["x1.04", "x1.05", "x1.06", "x1.09", "x1.1", "x1.11", "x1.12", "x1.15"],
            }
        },
        "Cross Counter":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Fist: Prepare to counterattack when your line is first hit by a physical attack this turn. If it activates, deal melee Bash damage to the attacker, with a chance to bind the part that was used to attack. (For normal attacks, attempts to inflict Arm Bind)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5", "9"],
                "Attack Power": ["300%", "325%", "350%", "375%", "400%", "500%"],
                "Infliction Rate": ["40%", "43%", "46%", "49%", "52%", "65%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Thunder Fist":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Fighting Spirit (Lv 2)",
            "Description": "Fist: Deal melee Bash+Volt damage to one enemy. If it doesn't kill, lose part of your current HP.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "10", "10", "10", "10", "14"],
                "Attack Power": ["200%", "210%", "220%", "270%", "280%", "290%", "300%", "400%"],
                "HP Loss": ["20%", "20%", "20%", "35%", "35%", "35%", "35%", "50%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
            }
        },
        "Lash Out":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Leading Blow (Lv 3)",
            "Description": "Fist: Deal multiple hits of melee Bash damage to one enemy. Hits as many times as the amount of hits you landed last turn. (Max 9 hits. Counts itself as a single hit regardless of how many were performed)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "10", "10", "10"],
                "Attack Power": ["50%", "54%", "58%", "62%", "66%", "85%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Meditation":{
            "Usage": "Active (Head)",
            "Unlock": "Clinch (Lv 3)",
            "Description": "Enter a charge state until the end of next turn, which increases bind/ailment infliction rate.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["5", "5", "5", "10"],
                "Inflictions↑": ["x1.35", "x1.4", "x1.45", "x1.7"],
                "Action Speed": ["30%", "30%", "30%", "30%"],
            }
        },
        "Raging Billows":{
            "Usage": "Passive",
            "Unlock": "Meditation (Lv 2)",
            "Description": "Increases all damage dealt to enemies with binds/ailments. Stronger the more afflictions the target has: Bonus is multiplied by 2 for 2 afflictions, by 3 for 3 afflictions, and by 5 for 4 afflictions.",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+6%", "+7%", "+8%", "+9%", "+10%", "+11%", "+12%", "+13%", "+14%", "+20%"],
            }
        },
        "Million Rush":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Allows you to equip a sub-weapon (uses an armor slot). If you have two weapons equipped, normal attacks have a chance to hit 2~4 times.",
            "Max Level": "8",
            "Data": {
                "Activation Chance": ["11%", "13%", "15%", "17%", "19%", "21%", "23%", "34%"],
            }
        },
        "Resonance Blow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Million Rush (Lv 3)",
            "Description": "Fist: Deal multiple hits of melee Bash damage to one enemy. Starts at 1 hit, and increases by 1 with each turn that passes. (Capped at 9 extra hits. Resets to 1 hit upon use)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["25", "25", "25", "25", "25", "35"],
                "Attack Power": ["60%", "64%", "68%", "72%", "76%", "100%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
    },
},
"Harbinger":{
    "Force":{
        "Endless Armor":{
            "Usage": "Force Boost",
            "Description": "Miasma Armor's duration does not go down and your skills do not remove it.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Miasma Tsunami":{
            "Usage": "Force Break (Head)",
            "Description": "Weaken all enemies for this turn, which decreases all offense, all defense, evasion, speed, and bind/ailment resistance.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt↓": ["x0.65"],
                "Damage Taken↑": ["x1.35"],
                "Evasion↓": ["-100%"],
                "Speed↓": ["-6000%"],
                "Inflictions↑": ["x1.4"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Eroding Miasma":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a debuff on all enemies for several turns, which increases physical/elemental damage taken.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "15"],
                "Damage Taken↑": ["+11%", "+13%", "+15%", "+17%", "+17%", "+19%", "+21%", "+23%", "+25%", "+25%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Stifling Miasma":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a debuff on all enemies for several turns, which decreases physical/elemental damage dealt.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "15"],
                "Damage Dealt↓": ["-8%", "-9%", "-10%", "-11%", "-11%", "-12%", "-13%", "-14%", "-15%", "-15%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Sluggish Miasma":{
            "Usage": "Active (Head)",
            "Unlock": "Eroding Miasma (Lv 2), Stifling Miasma (Lv 2)",
            "Description": "Place a debuff on all enemies for several turns, which decreases evasion and action speed.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "10"],
                "Evasion↓": ["-9%", "-12%", "-15%", "-18%", "-18%", "-21%", "-24%", "-27%", "-30%", "-30%"],
                "Speed↓": ["-15%", "-20%", "-25%", "-30%", "-30%", "-35%", "-40%", "-45%", "-50%", "-50%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Paralyzing Reap":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Scythe: Deal melee Cut damage to an enemy line. If Miasma Armor is active, has a chance to inflict Paralysis.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6", "13"],
                "Attack Power": ["180%", "190%", "200%", "210%", "220%", "280%"],
                "Infliction Rate": ["30%", "30%", "30%", "30%", "30%", "40%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Toxic Reap":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Paralyzing Reap (Lv 2)",
            "Description": "Scythe: Deal melee Cut damage to an enemy line. If Miasma Armor is active, has a chance to inflict Poison.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6", "13"],
                "Attack Power": ["180%", "190%", "200%", "210%", "220%", "280%"],
                "Infliction Rate": ["35%", "35%", "35%", "35%", "35%", "45%"],
                "Poison Power": ["25", "30", "35", "40", "45", "75"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Miasma Armor":{
            "Usage": "Active (Arms)",
            "Unlock": "Paralyzing Reap (Lv 2)",
            "Description": "Enter the Miasma Armor state for 3 turns, which increases action speed. Miasma Armor will activate automatically at the start of battle.",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["3", "3", "3", "5"],
                "Speed↑": ["x1.2", "x1.35", "x1.5", "x2.0"],
                "Action Speed": ["50%", "50%", "50%", "50%"],
            }
        },
        "Endless Shroud":{
            "Usage": "Passive",
            "Unlock": "Miasma Armor (Lv 2)",
            "Description": "When you use a debuff skill, there's a chance to activate/extend Miasma Armor.",
            "Max Level": "8",
            "Data": {
                "Activation Speed": ["26%", "34%", "42%", "50%", "58%", "66%", "74%", "100%"],
            }
        },
        "Atonement":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Miasma Armor (Lv 2)",
            "Description": "Dispel your Miasma Armor to restore HP to all allies, with a chance to remove ailments.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["9", "9", "9", "15", "15", "15", "15", "24"],
                "Healing Power": ["100%", "105%", "110%", "140%", "145%", "150%", "155%", "200%"],
                "Remove Chance": ["50%", "52%", "54%", "64%", "66%", "68%", "70%", "85%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Take":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Obtain additional materials when gathering from Take points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Wilting Miasma":{
            "Usage": "Active (Head)",
            "Unlock": "Sluggish Miasma (Lv 3)",
            "Description": "Place a debuff on all enemies for several turns, which decreases ailment resistance and natural recovery rate.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "14", "14", "14", "14", "14", "20"],
                "Inflictions↑": ["x1.12", "x1.14", "x1.16", "x1.18", "x1.18", "x1.21", "x1.24", "x1.27", "x1.3", "x1.3"],
                "Recovery↓": ["-7%", "-9%", "-11%", "-13%", "-13%", "-16%", "-19%", "-22%", "-25%", "-25%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Binding Miasma":{
            "Usage": "Active (Head)",
            "Unlock": "Wilting Miasma (Lv 3)",
            "Description": "Place a debuff on all enemies for several turns, which decreases bind resistance and natural recovery rate.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "14", "14", "14", "14", "14", "20"],
                "Inflictions↑": ["x1.12", "x1.14", "x1.16", "x1.18", "x1.18", "x1.21", "x1.24", "x1.27", "x1.3", "x1.3"],
                "Recovery↓": ["-7%", "-9%", "-11%", "-13%", "-13%", "-16%", "-19%", "-22%", "-25%", "-25%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Darkness Reap":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Toxic Reap (Lv 2)",
            "Description": "Scythe: Deal melee Cut damage to an enemy line. If Miasma Armor is active, has a chance to inflict Blind.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6", "13"],
                "Attack Power": ["180%", "190%", "200%", "210%", "220%", "280%"],
                "Infliction Rate": ["35%", "35%", "35%", "35%", "35%", "45%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Chaos Reap":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Darkness Reap (Lv 3)",
            "Description": "Scythe: Deal melee Cut damage to an enemy line. If Miasma Armor is active, has a chance to inflict Panic.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "18"],
                "Attack Power": ["200%", "215%", "230%", "245%", "260%", "340%"],
                "Infliction Rate": ["23%", "23%", "23%", "23%", "23%", "30%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Black Shroud":{
            "Usage": "Passive",
            "Unlock": "Endless Shroud (Lv 1)",
            "Description": "While Miasma Armor is active, decrease physical/elemental damage taken.",
            "Max Level": "8",
            "Data": {
                "Damage Taken↓": ["-10%", "-11%", "-13%", "-14%", "-16%", "-17%", "-19%", "-25%"],
            }
        },
        "Soul Transfer":{
            "Usage": "Active (Head)",
            "Unlock": "Atonement (Lv 3)",
            "Description": "Dispel your Miasma Armor for a chance to revive all allies. (<b>Bug</b>: Revive chance is rolled twice and must pass both to activate)",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "25"],
                "Revive Chance": ["50%", "53%", "56%", "59%", "62%", "75%"],
                "HP Gain": ["1", "30", "60", "90", "120", "250"],
                "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%"],
            }
        },
        "Black Wave":{
            "Usage": "Passive",
            "Unlock": "Soul Transfer (Lv 1)",
            "Description": "At the end of each turn, if Miasma Armor is active, recover TP.",
            "Max Level": "4",
            "Data": {
                "TP Gain": ["1", "2", "3", "5"],
            }
        },
        "Spirit Absorb":{
            "Usage": "Passive (WIS)",
            "Unlock": "N/A",
            "Description": "Recover HP each time you inflict a debuff on one or more targets. Excess healing increases your Max HP until the end of turn.",
            "Max Level": "6",
            "Data": {
                "Healing Power": ["80%", "95%", "110%", "125%", "140%", "220%"],
                "Max. Overheal": ["+15%", "+18%", "+21%", "+24%", "+27%", "+40%"],
            }
        },
        "Status ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases bind/ailment infliction rates.",
            "Max Level": "8",
            "Data": {
                "Inflictions↑": ["x1.04", "x1.05", "x1.06", "x1.09", "x1.1", "x1.11", "x1.12", "x1.15"],
            }
        },
    },
    "Master (Lv 40)":{
        "Death Tolerance":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Chance to nullify debuffs and ailments received.",
            "Max Level": "8",
            "Data": {
                "Activation Chance": ["7%", "9%", "11%", "13%", "15%", "17%", "19%", "25%"],
            }
        },
        "Ephemeral Reap":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Scythe: Deal multiple hits of melee Cut damage (cannot miss) to one enemy. Hits once per debuff on the target.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["16", "16", "16", "16", "22", "22", "22", "22", "22", "30"],
                "Attack Power": ["170%", "177%", "184%", "191%", "212%", "219%", "226%", "233%", "240%", "280%"],
                "Action Speed": ["30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"],
            }
        },
        "Fatal Reap":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Chaos Reap (Lv 2)",
            "Description": "Scythe: Deal melee Cut damage to one enemy, with a chance to inflict Instant Death.",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["13", "13", "13", "17", "17", "17", "17", "23"],
                "Attack Power": ["320%", "330%", "340%", "380%", "395%", "410%", "425%", "500%"],
                "Infliction Rate": ["15%", "15%", "15%", "20%", "20%", "20%", "20%", "25%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"],
            }
        },
        "Miasma Wall":{
            "Usage": "Active (Head)",
            "Unlock": "Black Wave (Lv 1)",
            "Description": "Dispel your Miasma Armor to protect the whole party for this turn, which gives them a chance to nullify bind/ailment inflictions received.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "15", "30"],
                "Activation Chance": ["75%", "77%", "80%", "82%", "85%", "95%"],
                "Max. Activations": ["4", "4", "4", "4", "4", "5"],
            }
        },
        "Spirit Barrier":{
            "Usage": "Active (Head)",
            "Unlock": "Black Wave (Lv 1)",
            "Description": "Dispel your Miasma Armor to protect the whole party for this turn, which gives them a chance to nullify Instant Death/Stun/debuff inflictions received.",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "15", "30"],
                "Activation Chance": ["75%", "77%", "80%", "82%", "85%", "95%"],
                "Max. Activations": ["4", "4", "4", "4", "4", "5"],
            }
        },
        "Enduring Armor":{
            "Usage": "Passive",
            "Unlock": "Miasma Wall (Lv 2), Spirit Barrier (Lv 2)",
            "Description": "Skills that dispel Miasma Armor will instead decrease its remaining duration.",
            "Max Level": "4",
            "Data": {
                "Duration Down": ["7", "6", "5", "3"],
            }
        },
    },
},
"Vampire":{
    "Force":{
        "Undying Soul":{
            "Usage": "Force Boost",
            "Description": "Survive all lethal damage with 1 HP.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Ghastly March":{
            "Usage": "Force Break (Head)",
            "Description": "Revive all dead allies (with 1 HP), then deal 2 hits of ranged Almighty damage to one enemy, increased by 1 hit for every revived ally. (Damage does not depend on the user's stats or equipment, as this skill uses its own ATK value that scales from 36 to 350 based on user's level)",
            "Max Level": "2",
            "Levels": ["1", "130"],
            "Data": {
                "Attack Power": ["400%", "600%"],
            }
        },
    },
    "Innate Passives":{
        "Sunlight Damage":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "During daytime, take damage at the end of each turn, and for every 10 steps taken. (This can kill during battle)",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "HP Loss": ["1+5%"],
            }
        },
        "Night Heal":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "During nighttime, recover HP at the end of each turn, and for every 10 steps taken.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "HP Gain": ["1+5%"],
            }
        },
    },
},
"Weapon Skills":{
    "Sword":{
        "Whirlwind":{
            "Usage": "Active (Arms, LUC)",
            "Unlock": "Wyvern's Wing",
            "Description": "Attempt to inflict Leg Bind on all enemies.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["5"],
                "Infliction Rate": ["50%"],
                "Action Speed": ["100%"],
            }
        },
        "Mind Vigor":{
            "Usage": "Active (Arms)",
            "Unlock": "Cheer Blade",
            "Description": "Place a buff on the whole party for 3 turns, which increases resistance against binds/ailments.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7"],
                "Resistance↑": ["+20%", "+23%", "+26%", "+29%", "+33%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Destructive Tusk":{
            "Usage": "Active (Head, STR)",
            "Unlock": "Seabeast's Tusk",
            "Description": "Deal melee Stab damage to one enemy line. Place a debuff on the targets for 3 turns, which decreases all damage dealt.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "15"],
                "Attack Power": ["180%", "195%", "210%", "225%", "240%"],
                "Damage Dealt↓": ["-11%", "-12%", "-13%", "-14%", "-15%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Wide Spark":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Lighting Blade",
            "Description": "Deal melee Cut+Volt damage to one enemy, with splash effect.",
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
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10"],
                "Damage Dealt↑": ["+20%", "+22%", "+25%", "+27%", "+30%"],
                "Speed↑": ["x3.5", "x4.25", "x5.0", "x5.75", "x6.50"],
                "Damage Taken↑": ["+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Queen's Verdict":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Queen's Sabre",
            "Description": "Deal 4~6 hits of ranged Bash damage to random enemies.",
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
            "Max Level": "5",
            "Data": {
                "TP Cost": ["14", "14", "14", "14", "14"],
                "Damage Dealt↑": ["+22%", "+24%", "+26%", "+28%", "+30%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Bite":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Caladbolg",
            "Description": "Deal melee Bash damage to one enemy, with splash effect and a chance to inflict Arm Bind.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["22"],
                "Attack Power": ["400%"],
                "Infliction Rate": ["30%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["60%"],
            }
        },
    },
    "Bow":{
        "Breaking Arrow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Kamatha",
            "Description": "Deal ranged Stab damage to one enemy. Places a debuff on the target for 3 turns, which increases physical damage taken.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5"],
                "Attack Power": ["200%", "210%", "220%", "230%", "240%"],
                "Damage Taken↑": ["+15%", "+16%", "+17%", "+18%", "+20%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Volt Barrage":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Reseph's Bow",
            "Description": "Deal ranged Stab+Volt damage to all enemies.",
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
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5"],
                "Resistance↑": ["+30%", "+32%", "+35%", "+37%", "+40%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Pop Flare":{
            "Usage": "Active (Arms)",
            "Unlock": "Coral Bow",
            "Description": "Place a buff on the whole party for 3 turns, which increases accuracy.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "4"],
                "Accuracy↑": ["+15%", "+16.5%", "+18%", "+19.5%", "+21%"],
                "Action Speed": ["40%", "60%", "80%", "100%", "120%"],
            }
        },
        "Hellish Pinwheel":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Flamerat Bow",
            "Description": "Deal ranged Bash+Fire damage to one enemy, with splash effect.",
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
            "Max Level": "1",
            "Data": {
                "TP Cost": ["9"],
                "Damage Taken↑": ["+20%"],
                "Action Speed": ["100%"],
            }
        },
        "Calamity Arrows":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Infection Bow",
            "Description": "Deal ranged Stab damage to an enemy line, with a chance to inflict Curse or Petrify.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["14", "14", "14", "14", "14"],
                "Attack Power": ["220%", "230%", "240%", "250%", "260%"],
                "Infliction Rate": ["20%", "21%", "22%", "23%", "25%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Alluring Body":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Failnaught",
            "Description": "Place a debuff on all enemies for 3 turns, which decreases bind resistance. Also attempts to inflict Panic on all enemies.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["25"],
                "Inflictions↑": ["x1.25"],
                "Infliction Rate": ["30%"],
                "Action Speed": ["70%"],
            }
        },
    },
    "Katana":{
        "Claw Sever":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Dangosashi",
            "Description": "Deal melee Cut damage to one enemy. Place a debuff on the target for 3 turns, which decreases all damage dealt.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["5"],
                "Attack Power": ["200%"],
                "Damage Dealt↓": ["-10%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["70%"],
            }
        },
        "Hilt Strike":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Mijinmaru",
            "Description": "Deal melee Bash damage to one enemy, with a chance to inflict Stun.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["7"],
                "Attack Power": ["280%"],
                "Infliction Rate": ["50%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["70%"],
            }
        },
        "Rage Fangs":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Nikkari",
            "Description": "Deal melee Bash damage to one enemy, with splash effect and a chance to inflict Panic.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "9"],
                "Attack Power": ["200%", "210%", "220%", "230%", "240%"],
                "Infliction Rate": ["25%", "27%", "30%", "32%", "35%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Foot Sweep":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Mikaeri",
            "Description": "Deal melee Cut damage to an enemy line. Place a debuff on the targets for 3 turns, which decreases evasion.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "12"],
                "Attack Power": ["220%", "230%", "240%", "250%", "260%"],
                "Evasion↓": ["-15%", "-16.2%", "-17.4%", "-18.7%", "-20%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Boulder Toss":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Kamui Ranketam",
            "Description": "Deal melee Bash damage to one enemy, with splash effect.",
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
            "Max Level": "1",
            "Data": {
                "TP Cost": ["21"],
                "Attack Power": ["75%"],
                "Infliction Rate": ["20%"],
                "Accuracy": ["-15%"],
                "Action Speed": ["150%"],
            }
        },
        "Black Flash":{
            "Usage": "Active (Legs, STR, LUC)",
            "Unlock": "Ameno Habakiri",
            "Description": "Deal melee Stab damage to one enemy at the start of turn, with pierce effect and a chance to inflict Sleep. Recover HP based on damage dealt.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["21"],
                "Attack Power": ["330%"],
                "Infliction Rate": ["35%"],
                "Damage Drain": ["15%"],
                "Accuracy": ["+20%"],
            }
        },
    },
    "Staff":{
        "Volt Strike":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Owl Staff",
            "Description": "Deal ranged Volt damage to one enemy.",
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
            "Max Level": "1",
            "Data": {
                "TP Cost": ["16"],
                "Attack Power": ["140%"],
                "Infliction Rate": ["35%"],
                "Accuracy": ["+15%"],
                "Action Speed": ["70%"],
            }
        },
        "Leg Zapper":{
            "Usage": "Active (Head, INT, LUC)",
            "Unlock": "Tanuki Staff",
            "Description": "Deal ranged Volt damage to one enemy, with pierce effect and a chance to inflict Leg Bing.",
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
            "Max Level": "1",
            "Data": {
                "TP Cost": ["30"],
                "Attack Power": ["120%"],
                "Damage Taken↑": ["+15%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["40%"],
            }
        },
        "Coiling Vine":{
            "Usage": "Active (Arms, LUC)",
            "Unlock": "Pumpkin Bat",
            "Description": "Attempt to inflict Head Bind and Arm Bind on all enemies.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["12"],
                "Infliction Rate": ["30%"],
                "Action Speed": ["75%"],
            }
        },
        "Curse Strike":{
            "Usage": "Active (Head, STR)",
            "Unlock": "Kerykeion",
            "Description": "Deal melee Cut damage to one enemy, with pierce effect. Recover HP based on damage dealt.",
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
            "Max Level": "5",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3"],
                "Infliction Rate": ["30%", "32%", "35%", "37%", "40%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Infernal Barrier":{
            "Usage": "Active (Arms)",
            "Unlock": "Flame Lance",
            "Description": "Place a buff on an ally line for 3 turns, which increases Fire resistance.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["5"],
                "Resistance↑": ["+40%"],
                "Action Speed": ["100%"],
            }
        },
        "Chrono Gatling":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Roar of the Sea",
            "Description": "Deal 3~8 hits of ranged Stab damage to one enemy.",
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
            "Max Level": "1",
            "Data": {
                "TP Cost": ["13"],
                "Attack Power": ["380%"],
                "Infliction Rate": ["7%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["40%"],
            }
        },
        "Halloween":{
            "Usage": "Active (Head, INT, LUC)",
            "Unlock": "Halloween Barrel",
            "Description": "Deal ranged Fire damage to one enemy, with a chance to inflict Head, Arm and Leg Bind.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["25"],
                "Attack Power": ["200%"],
                "Infliction Rate": ["25%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["50%"],
            }
        },
        "Sonic Scream":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Agneyastra",
            "Description": "Place a debuff on all enemies for 3 turns, which increases physical damage taken. Also attempts to inflict Sleep on all enemies.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["20"],
                "Damage Taken↑": ["+20%"],
                "Infliction Rate": ["45%"],
                "Action Speed": ["150%"],
            }
        },
    },
    "Spear":{
        "Flame Rush":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Horn Spear",
            "Description": "Deal ranged Fire damage to one enemy, with pierce effect.",
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
            "Description": "Deal ranged Stab damage to one enemy. Low accuracy but ignores Stab vulnerability.",
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
            "Max Level": "1",
            "Data": {
                "TP Cost": ["5"],
                "Resistance↑": ["+40%"],
                "Action Speed": ["100%"],
            }
        },
        "Vertigo Slash":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Vertigo Pike",
            "Description": "Deal melee Cut damage to one enemy, with a chance to inflict Blind and Stun.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "8"],
                "Attack Power": ["260%", "270%", "280%", "290%", "300%"],
                "Infliction Rate": ["40%", "40%", "40%", "40%", "40%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Tri-Death":{
            "Usage": "Active (Head, STR, LUC)",
            "Unlock": "Sansageki",
            "Description": "Deal melee Stab damage to one enemy, with a chance to inflict Instant Death.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["10"],
                "Attack Power": ["350%"],
                "Infliction Rate": ["30%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["50%"],
            }
        },
        "Biting Flurry":{
            "Usage": "Active (Head, STR)",
            "Unlock": "Fangtianhuaji",
            "Description": "Deal melee Cut damage to all enemies.",
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
            "Max Level": "1",
            "Data": {
                "TP Cost": ["18"],
                "Attack Power": ["340%"],
                "Infliction Rate": ["50%"],
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
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6"],
                "Attack Power": ["160%", "170%", "180%", "190%", "200%"],
                "Infliction Rate": ["35%", "37%", "40%", "42%", "45%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Vertigo Lash":{
            "Usage": "Active (Head, STR, LUC)",
            "Unlock": "Piercing Tongue",
            "Description": "Deal melee Stab damage to one enemy, with pierce effect and a chance to inflict Blind.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["8"],
                "Attack Power": ["230%"],
                "Infliction Rate": ["40%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["150%"],
            }
        },
        "Full Thrust":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Moralltach",
            "Description": "Consume 40% of current HP to deal melee Stab damage to one enemy.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["17", "17", "17", "17", "17"],
                "Attack Power": ["360%", "380%", "400%", "420%", "440%"],
                "Infliction Rate": ["35%", "37%", "40%", "42%", "45%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["250%", "250%", "250%", "250%", "250%"],
            }
        },
        "Rest":{
            "Usage": "Active (Arms)",
            "Unlock": "Steelbug's Piercer",
            "Description": "Recover HP. Healing is based on your Max HP.",
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
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "8"],
                "Evasion↑": ["+12%", "+12.7%", "+13.5%", "+14.2%", "+15%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Delta Block":{
            "Usage": "Active (Arms)",
            "Unlock": "Warped Mechablade",
            "Description": "Place a buff on an ally line for 3 turns, which increases physical resistances.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["12"],
                "Resistance↑": ["+20%"],
                "Action Speed": ["100%"],
            }
        },
        "Deathbringer":{
            "Usage": "Active (Head, STR, LUC)",
            "Unlock": "The Answerer",
            "Description": "Deal melee Bash damage to one enemy, with splash effect and a chance to inflict Petrify.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["17"],
                "Attack Power": ["380%"],
                "Infliction Rate": ["25%"],
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
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5"],
                "Attack Power": ["200%", "210%", "220%", "230%", "240%"],
                "Infliction Rate": ["27%", "29%", "31%", "33%", "35%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Phantom Swords":{
            "Usage": "Active (Legs)",
            "Unlock": "Rose Knife",
            "Description": "Place a debuff on all enemies for 3 turns, which decreases accuracy.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7"],
                "Accuracy↓": ["-8%", "-9%", "-10%", "-11%", "-12%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Venomous Stab":{
            "Usage": "Active (Legs, STR, LUC)",
            "Unlock": "Shadow Piercer",
            "Description": "Deal melee Stab damage to one enemy, with pierce effect and a chance to inflict Poison.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["10"],
                "Attack Power": ["340%"],
                "Infliction Rate": ["40%"],
                "Poison Power": ["60"],
                "Accuracy": ["+0%"],
                "Action Speed": ["60%"],
            }
        },
        "Malice Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Phurba",
            "Description": "Deal melee Cut damage to one enemy. Places a debuff on the target for 3 turns, which decreases ailment resistance.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "12"],
                "Attack Power": ["240%", "255%", "270%", "285%", "300%"],
                "Inflictions↑": ["x1.15", "x1.17", "x1.2", "x1.22", "x1.25"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Limb Crusher":{
            "Usage": "Active (Legs, STR, LUC)",
            "Unlock": "Metalfoot Knife",
            "Description": "Deal melee Bash damage to one enemy, with splash effect and a chance to inflict Arm Bind and Leg Bind.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "12"],
                "Attack Power": ["300%", "315%", "330%", "345%", "360%"],
                "Infliction Rate": ["20%", "21%", "22%", "23%", "25%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["65%", "65%", "65%", "65%", "65%"],
            }
        },
        "Pierce":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Futsuno Mitama",
            "Description": "Deal melee Stab damage to one enemy, with pierce effect. Places a debuff on the targets for 3 turns, which decreases accuracy.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["20"],
                "Attack Power": ["450%"],
                "Accuracy↓": ["-15%"],
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
            "Max Level": "1",
            "Data": {
                "TP Cost": ["7"],
                "Attack Power": ["180%"],
                "Infliction Rate": ["40%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["100%"],
            }
        },
        "Snail Dance":{
            "Usage": "Active (Legs, LUC)",
            "Unlock": "Snailblade",
            "Description": "Attempt to inflict Sleep on all enemies.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7"],
                "Infliction Rate": ["50%", "53%", "57%", "61%", "65%"],
                "Action Speed": ["20%", "20%", "20%", "20%", "20%"],
            }
        },
        "Multi-Blast":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Peacemaker",
            "Description": "Deal ranged Stab damage to all enemies.",
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
            "Max Level": "1",
            "Data": {
                "TP Cost": ["3"],
                "Attack Power": ["150%"],
                "Infliction Rate": ["30%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["100%"],
            }
        },
        "Boomerang Hook":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Loose Fist",
            "Description": "Deal melee Bash damage to an enemy line.",
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
            "Max Level": "1",
            "Data": {
                "TP Cost": ["8"],
                "Inflictions↑": ["x1.2"],
                "Action Speed": ["100%"],
            }
        },
        "Breath":{
            "Usage": "Active (Head)",
            "Unlock": "Zaftfaust",
            "Description": "Restore HP to yourself and your adjacent allies. Healing is based on your Max HP.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "5"],
                "HP Gain": ["20+12%", "25+14%", "30+16%", "35+18%", "40+20%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%"],
            }
        },
        "New Challenger":{
            "Usage": "Active (Field)",
            "Unlock": "Jeweled Fist",
            "Description": "Start multiple enemy encounters in a row, with an increased chance of Rare Breeds appearing.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "2"],
                "Min. Battles": ["1", "1", "1", "1", "1"],
                "Max. Battles": ["3", "4", "5", "6", "7"],
                "Rare Chance↑": ["+1%", "+2%", "+3%", "+4%", "+5%"],
            }
        },
        "Sky Dive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Gryphbreaker",
            "Description": "Deal melee Cut damage to all enemies. Places a debuff on the targets for 3 turns, which decreases physical damage dealt.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["21"],
                "Attack Power": ["200%"],
                "Damage Dealt↓": ["-10%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["40%"],
            }
        },
        "Reverse Slash":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Demon Fist",
            "Description": "Deal melee Cut damage to an enemy line.",
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
            "Max Level": "1",
            "Data": {
                "TP Cost": ["15"],
                "Attack Power": ["200%"],
                "Infliction Rate": ["40%"],
                "Poison Power": ["60"],
                "Accuracy": ["-5%"],
                "Action Speed": ["70%"],
            }
        },
        "Death Pile":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Blast Piledriver",
            "Description": "Deal ranged Stab damage to one enemy, with a chance to inflict Instant Death.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["13"],
                "Attack Power": ["280%"],
                "Infliction Rate": ["20%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["40%"],
            }
        },
        "Hurricane Punch":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Polydeuces",
            "Description": "Deal melee Bash damage to all enemies, with a chance to inflict Paralysis.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["25"],
                "Attack Power": ["300%"],
                "Infliction Rate": ["35%"],
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
            "Max Level": "1",
            "Data": {
                "TP Cost": ["5"],
                "Attack Power": ["200%"],
                "Infliction Rate": ["30%"],
                "Accuracy": ["+0%"],
                "Action Speed": ["100%"],
            }
        },
        "Guard Dance":{
            "Usage": "Active (Legs)",
            "Unlock": "Fossil Scythe",
            "Description": "Place a buff on the whole party for 3 turns, which decreases physical damage taken.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "7"],
                "Damage Taken↓": ["-10%", "-11%", "-12%", "-13%", "-15%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Rending Claw":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Vogeljagd",
            "Description": "Deal melee Cut damage to one enemy. Has very low accuracy.",
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
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10"],
                "Attack Power": ["240%", "255%", "270%", "285%", "300%"],
                "Infliction Rate": ["25%", "27%", "30%", "32%", "35%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Frozen Fury":{
            "Usage": "Active (Arms, INT)",
            "Unlock": "Frigid Scythe",
            "Description": "Deal 3~5 hits of ranged Ice damage to random enemies. Has very low accuracy.",
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
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10"],
                "Damage Dealt↑": ["+10%", "+11%", "+12%", "+13%", "+15%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Feast":{
            "Usage": "Active (Legs, STR, LUC)",
            "Unlock": "Cradle Edge",
            "Description": "Deal 2~4 hits of melee Cut damage to random enemies (max once each), with a chance to inflict Head, Arm and Leg Bind.",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["28"],
                "Attack Power": ["400%"],
                "Infliction Rate": ["20%"],
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
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Laudanum":{
            "Usage": "2.500 en",
            "Unlock": "Nasturtium",
            "Description": "Removes all buffs and debuffs on one enemy.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Unihorn":{
            "Usage": "2.500 en",
            "Unlock": "Matricaria",
            "Description": "Removes all buffs and debuffs on the whole party.",
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
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt↑": ["+40%"],
            }
        },
        "Stonard":{
            "Usage": "350 en",
            "Unlock": "Longan",
            "Description": "Places a buff on one ally for 5 turns, which decreases physical damage taken.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Taken↓": ["-30%"],
            }
        },
        "Axcela":{
            "Usage": "2.000 en",
            "Unlock": "Scarlet Sugar",
            "Description": "Restores Force to one ally.",
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
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Fire/Ice/Volt Mist":{
            "Usage": "800 en",
            "Unlock": "Mist Flower",
            "Description": "Places a buff on all allies for 5 turns, which increases resistance to Fire/Ice/Volt.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Resistance↑": ["+35%"],
            }
        },
        "All Mist":{
            "Usage": "3.000 en",
            "Unlock": "Oleander",
            "Description": "Places a buff on all allies for 5 turns, which increases resistance to Fire, Ice and Volt.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Resistance↑": ["+25%"],
            }
        },
    },
    "Attack (INT)":{
        "Fire/Ice/Volt Talisman":{
            "Usage": "200 en",
            "Unlock": "Spewing Peapod",
            "Description": "Deals ranged Fire/Ice/Volt damage to one enemy.",
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
            "Max Level": "7",
            "Levels": ["Poi", "Bli", "Par", "Sle", "Cur", "Pan", "Pet"],
            "Data": {
                "Infliction Rate": ["45%", "40%", "40%", "50%", "50%", "30%", "30%"],
                "Poison Power": ["50", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Head/Arm/Leg Binder":{
            "Usage": "250 en",
            "Unlock": "Faerie Wings",
            "Description": "Respectively attempts to inflict Head Bind, Arm Bind or Leg Bind on all enemies.",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Infliction Rate": ["30%"],
                "Action Speed": ["80%"],
            }
        },
    },
    "Rewards":{
        "Formaldehyde":{
            "Usage": "5.000 en",
            "Unlock": "Screaming Snout",
            "Description": "Until the end of turn, enemies killed will drop all their materials.",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Heavenly Gift":{
            "Usage": "3.000 en",
            "Unlock": "Sea Grapes",
            "Description": "Increases EXP earned this battle. (Repeated uses do not stack)",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "EXP↑": ["+100%"],
            }
        },
    }
},
}

//End of database

var descriptions = {
    "Hero":       "Brave knights of Sword and Shield. They fight as more than one person to attack and defend at once.",
    "Protector":  "Sturdy knights of unmatched durability. They block and divert attacks to keep allies in good condition.",
    "Medic":      "Healers that effectively treat any kind of injury. Their careful Staff strikes leave the enemy vulnerable.",
    "Survivalist":"Archers skilled in careful exploration. Their agility and sharp senses turn the tide in and out of battle.",
    "Ronin":      "Katana users focused on strong offense. They change to different Stances to adjust their combat style.",
    "War Magus":  "Witch doctors trained in combat and healing. They switch between treating and aggravating afflictions.",
    "Highlander": "Warriors from a clan skilled in combat with Spears. They control life force and convert it into power.",
    "Gunner":     "Versatile marksmen with a large variety of attack types. They can attack, immobilize or heal as needed.",
    "Sovereign":  "Commanders whose orders grant and control buffs, using them to strengthen, protect and heal the party.",
    "Ninja":      "Assassins proficient in diversion and ailments. They can create shadow clones to boost their capabilities.",
    "Zodiac":     "Offensive casters with high control of energy. They use elemental magic to exploit the enemy's weakness.",
    "Farmer":     "Specialists in exploration and resource gathering. Their battle skills can be awkward but quite effective.",
    "Shogun":     "Warrior generals wielding dual Katanas. They coordinate the offensive through buffs and commands.",
    "Landsknecht":"Frontline warriors with solid offense and defense. They lead the charge, encouraging others to follow up.",
    "Nightseeker":"Assassins who throw poisoned daggers from the shadows, closing in for the kill once the enemy is ailing.",
    "Arcanist":   "Spellcasters that summon magic circles onto the field, using them to restrain enemies and heal the party.",
    "Imperial":   "Knights wielding mechanical Drive Blades. Their devastating attacks put a heavy strain on the weapon.",
    "Pugilist":   "Brawlers who fight with their own Fists. They use combos of precise punches to quickly disable enemies.",
    "Harbinger":  "Reapers who summon noxious Miasma, spreading it to weaken enemies and ward off against afflictions.",
    "Vampire":    "Night-dwellers with control over life and death. This pseudo-class overrides Force skills and grants passive effects.",

    "Weapon Skills":"Skills borrowed from certain weapons.",
    "Battle Items":"Consumable items meant to aid you in battle.",
}

function toggle_data(table_id){
    document.getElementById(table_id).classList.toggle("show_table");
}

function reset_list(skill_list, class_name){
    //Remove all elements in the list container
    skill_list.focus()
    skill_list.blur()
    while(skill_list.hasChildNodes()){
        skill_list.removeChild(skill_list.firstChild)
    }

    //Add class name at the top
    name_banner = document.createElement("h2")
    name_banner.style.margin = "20px"
    name_banner.innerText = class_name
    skill_list.appendChild(name_banner)

    //Add class description below its name
    class_description = document.createElement("p")
    class_description.style.marginLeft = "10px"
    class_description.innerText = descriptions[class_name]
    skill_list.appendChild(class_description)
}

function add_skill_entry(skill_list, current_class, skill){
    var current_skill = current_class[skill]
    skill_table = document.createElement("table")
    skill_table.classList.add("skill_entry")
    //Separator for more visual clarity
    if (current_skill.hasOwnProperty("Starter")){
        skill_table.style.marginTop = "15px"
    }
    skill_list.appendChild(skill_table)
    
    //Row for name
    first_row = document.createElement("tr")
    skill_table.appendChild(first_row)

    skill_name = document.createElement("th")
    first_row.appendChild(skill_name)
    skill_name.classList.add("skill_name")
    skill_name.innerText = skill
    skill_name.colSpan = 2

    //Row for usage type and unlock condition
    second_row = document.createElement("tr")
    skill_table.appendChild(second_row)

    if (current_skill.hasOwnProperty("Usage")){
        usage = document.createElement("td")
        second_row.appendChild(usage)
        usage.innerText = current_skill["Usage"]

        if (current_skill.hasOwnProperty("Unlock")){
            usage.width = "30%"
            unlock = document.createElement("td")
            second_row.appendChild(unlock)
            unlock.innerText = "Unlock: "+current_skill["Unlock"]
        }
    }

    //Row for the description and level up table
    third_row = document.createElement("tr")
    skill_table.appendChild(third_row)
    data_block = document.createElement("td")
    third_row.appendChild(data_block)

    //Make toggable
    data_block.classList.add("hide_table")
    data_block.style.textAlign = "left"
    data_block.colSpan = 2
    data_block.id = skill
    first_row.addEventListener("click", function(){
        toggle_data(skill)
    })

    //Add text description
    description = document.createElement("p")
    data_block.appendChild(description)
    description.innerHTML = current_skill["Description"]

    //Table with level up data
    levels_table = document.createElement("table")
    data_block.appendChild(levels_table)
    levels_table.classList.add("levels_table")
    levels_row = document.createElement("tr")
    levels_table.appendChild(levels_row)
    //If there's no data, leave table empty
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
    //Add each row of skill data
    var latest_row
    for (const effect in current_skill["Data"]){
        if (effect == "Separator"){
            latest_row.style.borderBottom = "4px solid"
            continue
        }
        effect_row = document.createElement("tr")
        latest_row = effect_row
        levels_table.appendChild(effect_row)

        effect_name = document.createElement("th")
        effect_name.innerText = effect
        effect_row.appendChild(effect_name)
        current_effect = current_skill["Data"][effect]
        var latest = ""
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

function populate_list_categorized(class_name){
    var skill_list = document.getElementById("skill_list")
    //Clear list and reset class name and description
    reset_list(skill_list, class_name)

    //Add category headers
    var current_class = data[class_name]
    for (const category in current_class){
        category_name = document.createElement("h3")
        category_name.innerText = category
        skill_list.appendChild(category_name)

        //Fill in the skill entries
        for (const skill in current_class[category]){
            add_skill_entry(skill_list, current_class[category], skill)
        }
    }
    final_line = document.createElement("p")
    skill_list.appendChild(final_line)
}

//Initiate page with the first class on the list
populate_list_categorized("Hero")
