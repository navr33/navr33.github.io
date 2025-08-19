var data = {
"Landsknecht":{
    "Sword Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if you have a Sword equipped. (On level up, if this unlocked a skill, grant one level to it)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+5%", "+6%", "+8%", "+9%", "+11%", "+12%", "+13%", "+15%"],
        }
    },
    "Raging Edge":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": "Sword: Deal melee Cut damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "16", "16", "16", "16", "16", "16"],
            "Attack Power": ["140%", "146%", "152%", "158%", "195%", "205%", "215%", "225%", "235%", "320%", "330%", "340%", "350%", "360%", "430%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+10%", "+10%", "+10%", "+10%", "+10%", "+30%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Tornado":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 3)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with splash effect.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "17", "17", "17", "17", "17", "17"],
            "Attack Power": ["170%", "176%", "182%", "188%", "219%", "225%", "231%", "237%", "243%", "274%", "280%", "286%", "293%", "299%", "330%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Blinding Slap":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 5)",
        "Description": "Sword: Deal melee Cut damage to one enemy. If it misses, attempt to inflict Blind on all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20", "20", "20", "20", "20", "20"],
            "Attack Power": ["230%", "238%", "246%", "255%", "320%", "330%", "340%", "350%", "360%", "370%", "460%", "470%", "480%", "490%", "600%"],
            "Infliction Rate": ["55%", "55%", "55%", "55%", "70%", "70%", "70%", "70%", "70%", "85%", "85%", "85%", "85%", "85%", "100%"],
            "Accuracy": ["-30%", "-30%", "-30%", "-30%", "-50%", "-50%", "-50%", "-50%", "-50%", "-70%", "-70%", "-70%", "-70%", "-70%", "-70%"],
            "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
        }
    },
    "Falcon Slash":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Sword Mastery (Lv 10)",
        "Description": "Sword: Deal multiple hits of melee Cut damage to random enemies (max once each).",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["16", "16", "16", "16", "21", "21", "21", "21", "21", "26", "26", "26", "26", "26", "26"],
            "Attack Power": ["200%", "210%", "220%", "230%", "250%", "260%", "270%", "280%", "290%", "310%", "320%", "330%", "340%", "350%", "370%"],
            "Hits": ["2~3", "2~3", "2~3", "2~3", "2~4", "2~4", "2~4", "2~4", "2~4", "3~4", "3~4", "3~4", "3~4", "3~4", "4"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
        }
    },
    "Axe Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if you have an Axe equipped. (On level up, if this unlocked a skill, grant one level to it. Stacks with its own Grimoire)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+5%", "+6%", "+8%", "+9%", "+11%", "+12%", "+13%", "+15%"],
        }
    },
    "Boomerang Axe":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Axe Mastery (Lv 1)",
        "Description": "Axe: Deal ranged Bash damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "12", "12", "12", "12", "12", "12"],
            "Attack Power": ["130%", "135%", "140%", "145%", "170%", "177%", "184%", "191%", "198%", "250%", "258%", "266%", "274%", "282%", "330%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+10%", "+10%", "+10%", "+10%", "+10%", "+50%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "120%", "120%", "120%", "120%", "120%", "150%", "150%", "150%", "150%", "150%", "200%"],
        }
    },
    "Head Bash":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Axe Mastery (Lv 3)",
        "Description": "Axe: Deal melee Bash damage to one enemy, with a chance to inflict Head Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "16", "16", "16", "16", "16", "16"],
            "Attack Power": ["170%", "177%", "185%", "192%", "215%", "222%", "230%", "237%", "245%", "267%", "275%", "282%", "290%", "297%", "320%"],
            "Infliction Rate": ["35%", "35%", "35%", "35%", "50%", "50%", "50%", "50%", "50%", "65%", "65%", "65%", "65%", "65%", "80%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Stunning Smash":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Axe Mastery (Lv 5)",
        "Description": "Axe: Deal melee Bash damage to one enemy, with a chance to inflict Stun.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["9", "9", "9", "9", "14", "14", "14", "14", "14", "19", "19", "19", "19", "19", "19"],
            "Attack Power": ["180%", "188%", "196%", "204%", "230%", "238%", "246%", "254%", "262%", "292%", "300%", "308%", "316%", "324%", "355%"],
            "Infliction Rate": ["40%", "40%", "40%", "40%", "50%", "50%", "50%", "50%", "50%", "60%", "60%", "60%", "60%", "60%", "80%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["120%", "120%", "120%", "120%", "160%", "160%", "160%", "160%", "160%", "200%", "200%", "200%", "200%", "200%", "250%"],
        }
    },
    "Power Crush":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Axe Mastery (Lv 10)",
        "Description": "Axe: Deal melee Bash damage to one enemy, with pierce effect.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["14", "14", "14", "14", "18", "18", "18", "18", "18", "22", "22", "22", "22", "22", "22"],
            "Attack Power": ["200%", "209%", "218%", "227%", "264%", "273%", "282%", "291%", "300%", "340%", "350%", "360%", "370%", "380%", "420%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Double Strike":{
        "Usage": "Passive",
        "Unlock": "Blinding Slap (Lv 3), Head Bash (Lv 3)",
        "Description": "Normal attacks have a chance to be performed a second time.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["22%", "25%", "28%", "31%", "34%", "37%", "40%", "43%", "46%", "50%"],
        }
    },
    "Fire Chaser":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Tornado (Lv 5), Stunning Smash (Lv 5)",
        "Description": "Sword/Axe: Prepare to follow up after your allies' Fire attacks this turn, dealing Cut/Bash+Fire damage to the same targets. Activation chance starts at 100% and goes down with each hit performed.",
        "Starter": "1",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "12", "12", "17", "17", "17", "17", "17", "22", "22", "22", "22", "22", "22"],
            "Attack Power": ["130%", "137%", "144%", "151%", "151%", "159%", "166%", "173%", "180%", "180%", "188%", "195%", "202%", "210%", "230%"],
            "Chance Fadeout": ["35%", "35%", "35%", "35%", "25%", "25%", "25%", "25%", "25%", "15%", "15%", "15%", "15%", "15%", "10%"],
            "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "6"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
        }
    },
    "Ice Chaser":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Tornado (Lv 5), Stunning Smash (Lv 5)",
        "Description": "Sword/Axe: Prepare to follow up after your allies' Ice attacks this turn, dealing Cut/Bash+Ice damage to the same targets. Activation chance starts at 100% and goes down with each hit performed.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "12", "12", "17", "17", "17", "17", "17", "22", "22", "22", "22", "22", "22"],
            "Attack Power": ["130%", "137%", "144%", "151%", "151%", "159%", "166%", "173%", "180%", "180%", "188%", "195%", "202%", "210%", "230%"],
            "Chance Fadeout": ["35%", "35%", "35%", "35%", "25%", "25%", "25%", "25%", "25%", "15%", "15%", "15%", "15%", "15%", "10%"],
            "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "6"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
        }
    },
    "Volt Chaser":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Tornado (Lv 5), Stunning Smash (Lv 5)",
        "Description": "Sword/Axe: Prepare to follow up after your allies' Volt attacks this turn, dealing Cut/Bash+Volt damage to the same targets. Activation chance starts at 100% and goes down with each hit performed.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "12", "12", "17", "17", "17", "17", "17", "22", "22", "22", "22", "22", "22"],
            "Attack Power": ["130%", "137%", "144%", "151%", "151%", "159%", "166%", "173%", "180%", "180%", "188%", "195%", "202%", "210%", "230%"],
            "Chance Fadeout": ["35%", "35%", "35%", "35%", "25%", "25%", "25%", "25%", "25%", "15%", "15%", "15%", "15%", "15%", "10%"],
            "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "6"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
        }
    },
    "DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decreases physical damage taken.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Taken↓": ["-2%", "-4%", "-6%", "-8%", "-10%", "-12%", "-14%", "-16%", "-18%", "-20%"],
        }
    },
    "Recover":{
        "Usage": "Active (No Parts)",
        "Unlock": "DEF Up (Lv 3)",
        "Description": "Remove binds on yourself. If this successfully removes any binds, place a buff on yourself (lasts indefinitely), which increases Max HP. The Max HP bonus is multiplied by the amount of binds that were removed.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "5", "5", "5", "5", "5", "10", "10", "10", "10", "10", "10"],
            "Binds Removed": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3"],
            "Max HP↑": ["+10%", "+12%", "+14%", "+16%", "+22%", "+24%", "+26%", "+28%", "+30%", "+36%", "+38%", "+40%", "+42%", "+44%", "+50%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Savage Cry":{
        "Usage": "Active (Head)",
        "Unlock": "Recover (Lv 3)",
        "Description": "Place a buff on yourself and a debuff on all enemies for several turns. The buff increases enemy aggro, while the debuff increases physical damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13", "13", "13", "13", "13", "13"],
            "Base Aggro↑\n(Self)": ["+50", "+52", "+54", "+56", "+74", "+76", "+78", "+80", "+82", "+100", "+110", "+120", "+130", "+140", "+150"],
            "Damage Taken↑\n(Enemies)": ["+18%", "+20%", "+22%", "+23%", "+23%", "+25%", "+26%", "+27%", "+28%", "+28%", "+30%", "+32%", "+33%", "+34%", "+38%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max HP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max TP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Triple Charge":{
        "Usage": "Active (Arms)",
        "Unlock": "HP Up (Lv 2), TP Up (Lv 2)",
        "Description": "Enter a charge state until the end of next turn, which increases damage dealt, accuracy and ailment infliction rates.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "5", "5", "5", "5", "5", "8", "8", "8", "8", "8", "8"],
            "Damage Dealt↑": ["+50%", "+50%", "+50%", "+50%", "+60%", "+60%", "+60%", "+60%", "+60%", "+70%", "+75%", "+80%", "+85%", "+90%", "+100%"],
            "Accuracy↑": ["+10%", "+13.6%", "+17.2%", "+20.9%", "+28.2%", "+31.8%", "+35.5%", "+39.1%", "+42.8%", "+50%", "+53.7%", "+57.4%", "+61%", "+64.7%", "+72%"],
            "Inflictions↑": ["x1.1", "x1.14", "x1.18", "x1.22", "x1.31", "x1.35", "x1.39", "x1.43", "x1.47", "x1.55", "x1.6", "x1.65", "x1.7", "x1.75", "x1.9"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+4%", "+6%", "+8%", "+10%", "+12%", "+14%", "+16%", "+18%", "+20%"],
        }
    },
    "War Cry":{
        "Usage": "Active (Head)",
        "Unlock": "ATK Up (Lv 3)",
        "Description": "Spend part of your line's current HP to place a buff on it for several turns, which increases physical/elemental damage dealt and taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2"],
            "HP Cost": ["5%", "5%", "5%", "5%", "10%", "10%", "10%", "10%", "10%", "15%", "15%", "15%", "15%", "15%", "15%"],
            "Damage Dealt↑": ["+30%", "+32%", "+34%", "+37%", "+39%", "+42%", "+44%", "+46%", "+48%", "+50%", "+52%", "+54%", "+56%", "+58%", "+70%"],
            "Damage Taken↑": ["+10%", "+10%", "+10%", "+10%", "+15%", "+15%", "+15%", "+15%", "+15%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Strike Chaser":{
        "Usage": "Active (Head)",
        "Unlock": "Triple Charge (Lv 3), War Cry (Lv 5)",
        "Description": "Enter a charge state for next turn, which gives your allies a chance to follow up on your attacks, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each follow up. If an ally's follow up uses a different damage type than your triggering attack, damage dealt is increased but activation chance goes down faster.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["16", "16", "16", "16", "21", "21", "21", "21", "21", "28", "28", "28", "28", "28", "28"],
            "Attack Power": ["110%", "117%", "124%", "131%", "131%", "139%", "146%", "153%", "160%", "160%", "168%", "175%", "182%", "190%", "190%"],
            "Power Bonus\n(Diff. Type)": ["x1.8", "x1.9", "x2.0", "x2.12", "x2.12", "x2.23", "x2.34", "x2.45", "x2.56", "x2.56", "x2.67", "x2.78", "x2.89", "x3.0", "x3.0"],
            "Chance Fadeout\n(Same Type)": ["35%", "35%", "35%", "35%", "25%", "25%", "25%", "25%", "25%", "15%", "15%", "15%", "15%", "15%", "10%"],
            "Chance Fadeout\n(Diff. Type)": ["95%", "95%", "95%", "95%", "70%", "70%", "70%", "70%", "70%", "55%", "55%", "55%", "55%", "55%", "40%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Mine points. Higher yields have a lower chance of appearing.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
},
"Survivalist":{
    "Bow Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if you have a Bow equipped. (On level up, if this unlocked a skill, grant one level to it. Stacks with its own Grimoire)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+5%", "+6%", "+8%", "+9%", "+11%", "+12%", "+13%", "+15%"],
        }
    },
    "Power Shot":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Bow Mastery (Lv 1)",
        "Description": "Bow: Deal ranged Stab damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "12", "12", "12", "12", "12", "12"],
            "Attack Power": ["140%", "146%", "152%", "158%", "182%", "188%", "194%", "200%", "206%", "255%", "263%", "271%", "279%", "287%", "330%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "Disabling Shot":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Bow Mastery (Lv 5)",
        "Description": "Bow: Deal ranged Stab damage to one enemy, with a chance to inflict Leg Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "12", "12", "12", "12", "12", "12"],
            "Attack Power": ["120%", "127%", "134%", "141%", "148%", "155%", "162%", "170%", "177%", "185%", "192%", "199%", "207%", "215%", "225%"],
            "Infliction Rate": ["50%", "50%", "50%", "50%", "62%", "62%", "62%", "62%", "62%", "75%", "75%", "75%", "75%", "75%", "90%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "Multi-Shot":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Power Shot (Lv 5), Disabling Shot (Lv 3)",
        "Description": "Bow: Deal 2 hits of ranged Stab damage to random enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["13", "13", "13", "13", "18", "18", "18", "18", "18", "23", "23", "23", "23", "23", "23"],
            "Attack Power": ["120%", "125%", "130%", "135%", "150%", "155%", "160%", "165%", "170%", "185%", "190%", "195%", "200%", "205%", "220%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Sagittarius Shot":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Bow Mastery (Lv 10)",
        "Description": "Bow: Prepare an attack that will hit in 2 more turns, at the start of the turn. On activation, deal ranged Stab damage to one enemy, with a chance to inflict Stun.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["16", "16", "16", "16", "21", "21", "21", "21", "21", "26", "26", "26", "26", "26", "26"],
            "Attack Power": ["350%", "364%", "378%", "393%", "450%", "464%", "479%", "493%", "507%", "565%", "579%", "593%", "608%", "622%", "680%"],
            "Infliction Rate": ["30%", "30%", "30%", "30%", "45%", "45%", "45%", "45%", "45%", "60%", "62%", "64%", "66%", "68%", "80%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "AGI Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases action speed and evasion.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Speed↑": ["x1.02", "x1.03", "x1.04", "x1.06", "x1.07", "x1.09", "x1.1", "x1.12", "x1.13", "x1.15"],
            "Evasion↑": ["+3%", "+4%", "+4.9%", "+5.7%", "+6.5%", "+7.3%", "+8%", "+8.7%", "+9.4%", "+10%"],
        }
    },
    "Hasten":{
        "Usage": "Active (Legs)",
        "Unlock": "AGI Up (Lv 1)",
        "Description": "Place a buff on one ally for several turns, which increases action speed.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "7", "7", "7", "7", "7", "7"],
            "Speed↑": ["x1.25", "x1.3", "x1.34", "x1.38", "x1.4", "x1.45", "x1.49", "x1.53", "x1.57", "x1.6", "x1.64", "x1.68", "x1.72", "x1.76", "x1.82"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "Trickery":{
        "Usage": "Active (Legs)",
        "Unlock": "AGI Up (Lv 2)",
        "Description": "Place a debuff on one enemy for several turns, which decreases accuracy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "7", "7", "7", "7", "7", "7"],
            "Accuracy↓": ["-18%", "-19%", "-20%", "-21%", "-21%", "-22%", "-23%", "-24%", "-25%", "-25%", "-26%", "-27%", "-28%", "-29%", "-30%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "Sure Shot":{
        "Usage": "Active (Legs)",
        "Unlock": "AGI Up (Lv 3)",
        "Description": "Place a buff on one ally line for several turns, which increases accuracy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "12", "12", "12", "12", "12", "12"],
            "Accuracy↑": ["+22%", "+23%", "+24%", "+25%", "+26%", "+27%", "+28%", "+29%", "+30%", "+31%", "+32%", "+33%", "+34%", "+35%", "+40%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "Chain Dance":{
        "Usage": "Active (Legs)",
        "Unlock": "Hasten (Lv 2), Trickery (Lv 2), Sure Shot (Lv 2)",
        "Description": "Place a buff on yourself for several turns, which increases evasion and enemy aggro.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "14", "14", "14", "14", "14", "20", "20", "20", "20", "20", "20"],
            "Evasion↑": ["+23%", "+24%", "+25%", "+26%", "+26%", "+27%", "+28%", "+29%", "+30%", "+30%", "+31.5%", "+33%", "+33.5%", "+35%", "+38%"],
            "Aggro Priority↑": ["+0", "+0", "+0", "+0", "+1", "+1", "+1", "+1", "+1", "+2", "+2", "+2", "+2", "+2", "+2"],
            "Base Aggro↑": ["+100", "+110", "+120", "+130", "+10", "+20", "+30", "+40", "+50", "+10", "+20", "+30", "+40", "+50", "+60"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Endorphins":{
        "Usage": "Passive",
        "Unlock": "Chain Dance (Lv 5)",
        "Description": "Recover TP each time you evade a hit.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Gain": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Act First":{
        "Usage": "Passive",
        "Unlock": "AGI Up (Lv 5)",
        "Description": "Chance to act at the start of turn, disregarding action speed.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["25%", "30%", "35%", "40%", "45%", "49%", "53%", "57%", "61%", "65%"],
        }
    },
    "Quick Step":{
        "Usage": "Active (Legs)",
        "Unlock": "AGI Up (Lv 10)",
        "Description": "Make one ally act at the start of this turn. Before level 10 it has a chance to fail.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "8", "6", "14", "12", "10", "18", "16", "14", "20", "20", "20", "20", "20", "20"],
            "Success Chance": ["50%", "50%", "50%", "70%", "70%", "70%", "90%", "90%", "90%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Predator":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Gain an additional chance of getting a preemptive attack.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Ambush Chance": ["2.3%", "3.1%", "3.8%", "4.5%", "5.2%", "5.8%", "6.4%", "7.0%", "7.5%", "8.0%"],
        }
    },
    "Owl-Eye":{
        "Usage": "Active (Field)",
        "Unlock": "Predator (Lv 1)",
        "Description": "Temporarily show the location of all FOEs within a square centered around you.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "6"],
            "Square Side": ["23", "23", "23", "23", "27", "27", "27", "27", "27", "31"],
            "Duration (Steps)": ["16", "18", "20", "22", "30", "32", "34", "36", "38", "50"],
        }
    },
    "Awareness":{
        "Usage": "Passive",
        "Unlock": "Predator (Lv 3)",
        "Description": "Chance to nullify enemy ambushes.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["25%", "30%", "35%", "40%", "45%", "49%", "53%", "57%", "61%", "65%"],
        }
    },
    "Stalker":{
        "Usage": "Active (Field)",
        "Unlock": "Predator (Lv 5)",
        "Description": "Temporarily decrease the enemy encounter rate.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "9", "9", "9", "9", "9", "12"],
            "Encounters↓": ["x0.8", "x0.77", "x0.74", "x0.71", "x0.57", "x0.54", "x0.51", "x0.48", "x0.45", "x0.3"],
            "Duration (Steps)": ["30", "30", "30", "30", "60", "60", "60", "60", "60", "100"],
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max HP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Efficiency":{
        "Usage": "Passive",
        "Unlock": "HP Up (Lv 3)",
        "Description": "Increases the HP and TP restored by healing items used by you in battle.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Healing↑": ["+28%", "+36%", "+44%", "+52%", "+60%", "+68%", "+76%", "+84%", "+92%", "+100%"],
        }
    },
    "Resuscitate":{
        "Usage": "Active (Field)",
        "Unlock": "Efficiency (Lv 5)",
        "Description": "Chance to revive a dead ally.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "5", "5", "5", "5", "5", "12"],
            "Success Chance": ["25%", "25%", "25%", "25%", "50%", "50%", "50%", "50%", "50%", "100%"],
            "HP Gain": ["1", "5", "15", "30", "50", "80", "120", "170", "250", "999"],
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max TP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Take":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Take points. Higher yields have a lower chance of appearing.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Chop":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Chop points. Higher yields have a lower chance of appearing.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Mine points. Higher yields have a lower chance of appearing.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
},
"Protector":{
    "Shield Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decrease physical damage taken if you have a Shield equipped. (On level up, if this unlocked a skill, grant one level to it)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Taken↓": ["-5%", "-6%", "-7%", "-8%", "-9%", "-10%", "-11%", "-12%", "-13%", "-15%"],
        }
    },
    "Front Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 1)",
        "Description": "Shield: Protect the front line for this turn, which decreases physical damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "6", "6", "6", "6", "6", "6"],
            "Damage Taken↓": ["-20%", "-22%", "-24%", "-25%", "-30%", "-32%", "-34%", "-35%", "-36%", "-40%", "-45%", "-50%", "-55%", "-60%", "-80%"],
        }
    },
    "Rear Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 1)",
        "Description": "Shield: Protect the back line for this turn, which decreases physical damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "6", "6", "6", "6", "6", "6"],
            "Damage Taken↓": ["-20%", "-22%", "-24%", "-25%", "-30%", "-32%", "-34%", "-35%", "-36%", "-40%", "-45%", "-50%", "-55%", "-60%", "-80%"],
        }
    },
    "Defender":{
        "Usage": "Active (Head)",
        "Unlock": "Front/Rear Guard (Lv 5)",
        "Description": "Place a buff on the whole party for several turns, which decreases physical damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "14", "14", "14", "14", "14", "14"],
            "Damage Taken↓": ["-15%", "-17%", "-19%", "-20%", "-20%", "-22%", "-23%", "-24%", "-25%", "-25%", "-26%", "-27%", "-28%", "-29%", "-32%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
        }
    },
    "Fire Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 3)",
        "Description": "Shield: Protect the whole party for this turn, which decreases Fire damage taken (max once per ally). From level 10 onward it absorbs damage instead of decreasing it. (From level 5 onward it nullifies secondary effects from attacks)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "16", "14", "12", "10", "8", "12", "12", "12", "12", "12", "12"],
            "Damage Taken↓": ["-25%", "-50%", "-75%", "-85%", "-100%", "-100%", "-100%", "-100%", "-100%", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"],
            "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "50%", "100%", "150%", "200%", "250%", "500%"],
        }
    },
    "Ice Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 3)",
        "Description": "Shield: Protect the whole party for this turn, which decreases Ice damage taken (max once per ally). From level 10 onward it absorbs damage instead of decreasing it. (From level 5 onward it nullifies secondary effects from attacks)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "16", "14", "12", "10", "8", "12", "12", "12", "12", "12", "12"],
            "Damage Taken↓": ["-25%", "-50%", "-75%", "-85%", "-100%", "-100%", "-100%", "-100%", "-100%", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"],
            "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "50%", "100%", "150%", "200%", "250%", "500%"],
        }
    },
    "Volt Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 3)",
        "Description": "Shield: Protect the whole party for this turn, which decreases Volt damage taken (max once per ally). From level 10 onward it absorbs damage instead of decreasing it. (From level 5 onward it nullifies secondary effects from attacks)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "16", "14", "12", "10", "8", "12", "12", "12", "12", "12", "12"],
            "Damage Taken↓": ["-25%", "-50%", "-75%", "-85%", "-100%", "-100%", "-100%", "-100%", "-100%", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"],
            "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "50%", "100%", "150%", "200%", "250%", "500%"],
        }
    },
    "Shield Smite":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Shield Mastery (Lv 7)",
        "Description": "Shield: Deal melee Bash damage to one enemy, with a chance to inflict Arm Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "22", "22", "22", "22", "22", "22"],
            "Attack Power": ["190%", "200%", "210%", "220%", "270%", "280%", "290%", "300%", "310%", "360%", "370%", "380%", "390%", "400%", "450%"],
            "Infliction Rate": ["15%", "15%", "15%", "15%", "25%", "25%", "25%", "25%", "25%", "35%", "40%", "45%", "50%", "55%", "65%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
        }
    },
    "Shield Rush":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Shield Smite (Lv 5)",
        "Description": "Shield: Deal melee Bash damage to all enemies. Places a debuff on the targets for 3 turns, which decreases physical damage dealt.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "15", "15", "15", "21", "21", "21", "21", "21", "27", "27", "27", "27", "27", "27"],
            "Attack Power": ["180%", "188%", "196%", "204%", "221%", "229%", "237%", "245%", "254%", "270%", "278%", "287%", "295%", "303%", "320%"],
            "Damage Dealt↓": ["-10%", "-10%", "-10%", "-10%", "-15%", "-15%", "-15%", "-15%", "-15%", "-20%", "-20%", "-20%", "-20%", "-20%", "-20%"],
            "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Bravery's Gift":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 10)",
        "Description": "Increase your Max HP (also healing you by the amount of HP you gained) and protect the whole party for this turn, which makes you take attacks in their place.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["25", "25", "25", "25", "30", "30", "30", "30", "30", "35", "35", "35", "35", "35", "35"],
            "Max HP↑": ["+5%", "+9%", "+13%", "+17%", "+25%", "+29%", "+33%", "+37%", "+42%", "+50%", "+57%", "+64%", "+72%", "+80%", "+100%"],
        }
    },
    "DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decreases physical damage taken.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Taken↓": ["-2%", "-4%", "-6%", "-8%", "-10%", "-12%", "-14%", "-16%", "-18%", "-20%"],
        }
    },
    "Provoke":{
        "Usage": "Active (Head)",
        "Unlock": "DEF Up (Lv 1)",
        "Description": "Place a buff on yourself for several turns, which increases enemy aggro and slightly decreases damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "5", "5", "5", "5", "5", "9", "9", "9", "9", "9", "9"],
            "Aggro Priority↑": ["+1", "+1", "+1", "+1", "+1", "+1", "+1", "+1", "+1", "+2", "+2", "+2", "+2", "+2", "+2"],
            "Base Aggro↑": ["+10", "+25", "+40", "+55", "+70", "+85", "+100", "+115", "+130", "+10", "+50", "+100", "+150", "+200", "+250"],
            "Damage Taken↓": ["-0%", "-0%", "-0%", "-0%", "-5%", "-5%", "-5%", "-5%", "-5%", "-10%", "-11%", "-12%", "-13%", "-14%", "-15%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
        }
    },
    "Parry":{
        "Usage": "Active (Arms)",
        "Unlock": "Provoke (Lv 5)",
        "Description": "Chance to nullify physical hits towards your line this turn. Activation chance goes down with each activation.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["7", "7", "7", "7", "14", "14", "14", "14", "14", "22", "22", "22", "22", "22", "22"],
            "Initial Chance": ["60%", "70%", "80%", "90%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            "Chance Fadeout": ["100%", "100%", "100%", "100%", "100%", "80%", "70%", "60%", "50%", "35%", "30%", "25%", "20%", "15%", "10%"],
            "Max. Activations": ["1", "1", "1", "1", "1", "2", "2", "2", "2", "3", "3", "3", "3", "3", "4"],
            "Action Speed": ["800%", "800%", "800%", "800%", "800%", "800%", "800%", "800%", "800%", "800%", "800%", "800%", "800%", "800%", "800%"],
        }
    },
    "Fortify":{
        "Usage": "Active (Head)",
        "Unlock": "DEF Up (Lv 3)",
        "Description": "Place a buff on yourself for several turns, which decreases physical damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "6", "6", "6", "6", "6", "8", "8", "8", "8", "8", "8"],
            "Damage Taken↓": ["-20%", "-23%", "-25%", "-26%", "-26%", "-28%", "-30%", "-31%", "-32%", "-32%", "-33%", "-34%", "-35%", "-36%", "-40%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
        }
    },
    "Aegis":{
        "Usage": "Passive",
        "Unlock": "DEF Up (Lv 5)",
        "Description": "Chance to survive lethal damage with 1 HP.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["10%", "13%", "15%", "17%", "19%", "21%", "23%", "25%", "27%", "30%"],
        }
    },
    "En Garde":{
        "Usage": "Passive",
        "Unlock": "Fortify (Lv 5), Aegis (Lv 5)",
        "Description": "Chance to automatically Defend against any hit received.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["6%", "8%", "10%", "12%", "14%", "16%", "18%", "20%", "22%", "25%"],
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max HP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Safe Passage":{
        "Usage": "Active (Field)",
        "Unlock": "HP Up (Lv 1)",
        "Description": "Temporarily decrease damage taken from damaging floors.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8"],
            "Damage Taken↓": ["x0.5", "x0.45", "x0.4", "x0.35", "x0.3", "x0.25", "x0.2", "x0.15", "x0.1", "x0.01"],
            "Duration (Steps)": ["25", "25", "25", "25", "45", "45", "45", "45", "45", "70"],
        }
    },
    "Flee":{
        "Usage": "Active (Legs)",
        "Unlock": "Safe Passage (Lv 3)",
        "Description": "Attempt to escape the battle at the start of the turn and teleport to the point where you entered the floor. If successful, spend part of the whole party's current HP.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "7", "7", "7", "7", "7", "7"],
            "Success Chance": ["50%", "55%", "60%", "65%", "70%", "75%", "80%", "85%", "90%", "100%", "100%", "100%", "100%", "100%", "100%"],
            "HP Loss": ["50%", "50%", "50%", "50%", "25%", "25%", "25%", "25%", "25%", "10%", "8%", "6%", "4%", "2%", "1%"],
        }
    },
    "Cure":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 3)",
        "Description": "Restore HP to one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8", "8", "8", "8", "8", "8"],
            "Healing Power": ["25", "27", "29", "31", "50", "53", "56", "59", "62", "98", "101", "104", "107", "110", "250"],
            "Action Speed": ["100%", "100%", "100%", "100%", "120%", "120%", "120%", "120%", "120%", "150%", "150%", "150%", "150%", "150%", "250%"],
        }
    },
    "Party Cure":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 5)",
        "Description": "Restore HP to the whole party.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "12", "12", "20", "20", "20", "20", "20", "30", "30", "30", "30", "30", "30"],
            "Healing Power": ["30", "32", "34", "36", "58", "61", "64", "67", "70", "110", "114", "118", "122", "126", "280"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Prayer":{
        "Usage": "Passive",
        "Unlock": "Cure (Lv 5), Party Cure (Lv 3)",
        "Description": "Restore HP and TP to the whole party after each battle. Healing is based on each unit's Max HP. (Doesn't stack)",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "HP Gain (Fixed)": ["7", "9", "11", "13", "15", "17", "19", "21", "23", "35"],
            "HP Gain (Max HP)": ["1%", "2%", "2%", "3%", "3%", "4%", "4%", "5%", "5%", "6%"],
            "TP Gain": ["2", "3", "3", "4", "4", "5", "5", "6", "6", "7"],
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max TP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Mine points. Higher yields have a lower chance of appearing.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
},
"Dark Hunter":{
    "Whip Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if you have a Whip equipped. (On level up, if this unlocked a skill, grant one level to it. Stacks with its own Grimoire)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+5%", "+6%", "+8%", "+9%", "+11%", "+12%", "+13%", "+15%"],
        }
    },
    "Gag":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whip Mastery (Lv 1)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Head Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["120%", "127%", "134%", "141%", "155%", "163%", "171%", "179%", "187%", "240%", "248%", "256%", "264%", "272%", "300%"],
            "Infliction Rate": ["50%", "50%", "50%", "50%", "62%", "62%", "62%", "62%", "62%", "75%", "75%", "75%", "75%", "75%", "90%"],
            "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "Shackles":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whip Mastery (Lv 1)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Leg Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["120%", "127%", "134%", "141%", "155%", "163%", "171%", "179%", "187%", "240%", "248%", "256%", "264%", "272%", "300%"],
            "Infliction Rate": ["50%", "50%", "50%", "50%", "62%", "62%", "62%", "62%", "62%", "75%", "75%", "75%", "75%", "75%", "90%"],
            "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "Cuffs":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whip Mastery (Lv 1)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Arm Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["120%", "127%", "134%", "141%", "155%", "163%", "171%", "179%", "187%", "240%", "248%", "256%", "264%", "272%", "300%"],
            "Infliction Rate": ["50%", "50%", "50%", "50%", "62%", "62%", "62%", "62%", "62%", "75%", "75%", "75%", "75%", "75%", "90%"],
            "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "Ecstasy":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gag (Lv 7), Shackles (Lv 7), Cuffs (Lv 7)",
        "Description": "Whip: Deal melee Cut damage to one enemy. Stronger for each bind on the target: Damage dealt is multiplied by 2 for 1 bind, by 3.15 for 2 binds, and by 5.6225 for all 3 binds. (<b>Bug</b>: The 0-bind version is receiving a damage multiplier that grows with the skill's level)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "14", "14", "14", "14", "14", "18", "18", "18", "18", "18", "18"],
            "Attack Power": ["150%", "155%", "160%", "165%", "190%", "195%", "200%", "205%", "210%", "240%", "245%", "250%", "255%", "260%", "290%"],
            "0-Bind Bonus": ["x1.2", "x1.24", "x1.28", "x1.32", "x1.58", "x1.63", "x1.67", "x1.71", "x1.76", "x2.0", "x2.06", "x2.1", "x2.14", "x2.19", "x2.55"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "Viper":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whip Mastery (Lv 5)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Poison.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "17", "17", "17", "17", "17", "17"],
            "Attack Power": ["140%", "146%", "152%", "158%", "170%", "176%", "182%", "188%", "194%", "206%", "212%", "218%", "224%", "230%", "242%"],
            "Infliction Rate": ["70%", "70%", "70%", "70%", "80%", "80%", "80%", "80%", "80%", "90%", "90%", "90%", "90%", "90%", "110%"],
            "Poison Power": ["20", "30", "40", "50", "80", "95", "110", "125", "140", "300", "320", "340", "360", "380", "650"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "Climax":{
        "Usage": "Active (Arms)",
        "Unlock": "Whip Mastery (Lv 10), Viper (Lv 3)",
        "Description": "Whip: Attempt to instantly kill one enemy. Only works on non-boss enemies at 40% HP or less. If successful, heal by a percentage of the target's remaining HP. (Does not count as Instant Death, but it is affected by Instant Death resistance)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "15", "15", "15", "19", "19", "19", "19", "19", "24", "24", "24", "24", "24", "24"],
            "Success Rate": ["100%", "100%", "100%", "100%", "200%", "200%", "200%", "200%", "200%", "350%", "370%", "400%", "440%", "500%", "999%"],
            "Damage Drain": ["120%", "130%", "140%", "150%", "190%", "200%", "210%", "220%", "230%", "270%", "280%", "290%", "300%", "310%", "350%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "Sword Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if you have a Sword equipped. (On level up, if this unlocked a skill, grant one level to it)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+5%", "+6%", "+8%", "+9%", "+11%", "+12%", "+13%", "+15%"],
        }
    },
    "Hypno Bite":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Sleep.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["120%", "127%", "134%", "141%", "155%", "163%", "171%", "179%", "187%", "240%", "248%", "256%", "264%", "272%", "300%"],
            "Infliction Rate": ["50%", "50%", "50%", "50%", "62%", "62%", "62%", "62%", "62%", "75%", "75%", "75%", "75%", "75%", "90%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Nerve Bite":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Paralysis.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["120%", "127%", "134%", "141%", "155%", "163%", "171%", "179%", "187%", "240%", "248%", "256%", "264%", "272%", "300%"],
            "Infliction Rate": ["50%", "50%", "50%", "50%", "62%", "62%", "62%", "62%", "62%", "75%", "75%", "75%", "75%", "75%", "90%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Mirage Bite":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Panic.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["120%", "127%", "134%", "141%", "155%", "163%", "171%", "179%", "187%", "240%", "248%", "256%", "264%", "272%", "300%"],
            "Infliction Rate": ["50%", "50%", "50%", "50%", "62%", "62%", "62%", "62%", "62%", "75%", "75%", "75%", "75%", "75%", "90%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Soul Liberator":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Hypno/Nerve/Mirage Bite (Lv 7)",
        "Description": "Sword: Deal melee Cut damage to one enemy. Damage dealt is multiplied by 4 if the target has an ailment, but removes the ailment.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "14", "14", "14", "14", "14", "18", "18", "18", "18", "18", "18"],
            "Attack Power": ["125%", "130%", "135%", "140%", "165%", "170%", "175%", "180%", "185%", "215%", "220%", "225%", "230%", "235%", "265%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Drain Bite":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 5)",
        "Description": "Sword: Deal melee Cut damage to one enemy. Recover HP based on damage dealt.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "17", "17", "17", "17", "17", "17"],
            "Attack Power": ["140%", "148%", "156%", "164%", "188%", "196%", "204%", "212%", "220%", "244%", "252%", "260%", "268%", "276%", "300%"],
            "Damage Drain": ["50%", "50%", "50%", "50%", "75%", "75%", "75%", "75%", "75%", "100%", "125%", "125%", "125%", "125%", "150%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Catastrophe":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 10), Drain Bite (Lv 3)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Petrify. If the infliction misses, increase your ailment infliction rates on the next turn.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "15", "15", "15", "19", "19", "19", "19", "19", "24", "24", "24", "24", "24", "24"],
            "Attack Power": ["200%", "208%", "217%", "225%", "251%", "259%", "268%", "276%", "285%", "310%", "319%", "327%", "336%", "344%", "370%"],
            "Infliction Rate": ["35%", "35%", "35%", "35%", "45%", "45%", "45%", "45%", "45%", "55%", "55%", "55%", "55%", "55%", "55%"],
            "Inflictions↑": ["x1.15", "x1.15", "x1.15", "x1.15", "x1.25", "x1.25", "x1.25", "x1.25", "x1.25", "x1.35", "x1.5", "x1.5", "x1.5", "x1.5", "x1.7"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+4%", "+6%", "+8%", "+10%", "+12%", "+14%", "+16%", "+18%", "+20%"],
        }
    },
    "Boost Up":{
        "Usage": "Passive",
        "Unlock": "ATK Up (Lv 3)",
        "Description": "Increases Boost Gauge gains. (For reference, normal gain is a random value between 5 and 15)",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Min. Boost Gain↑": ["+2", "+2.6", "+3.1", "+3.6", "+4.1", "+4.6", "+5", "+5.4", "+5.7", "+6"],
            "Max. Boost Gain↑": ["+1", "+1.3", "+1.55", "+1.8", "+2.05", "+2.3", "+2.5", "+2.7", "+2.85", "+3"],
        }
    },
    "Wrath's Might":{
        "Usage": "Passive",
        "Unlock": "ATK Up (Lv 5)",
        "Description": "Increases physical/elemental damage dealt if your HP is below a certain threshold. (Stacks with its own Grimoire)",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "HP Threshold": ["30%", "30%", "30%", "30%", "40%", "40%", "40%", "40%", "40%", "50%"],
            "Damage Dealt↑": ["+15%", "+20%", "+24%", "+27%", "+30%", "+32%", "+34%", "+36%", "+38%", "+40%"],
        }
    },
    "Bait":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Boost Up (Lv 3), Wrath's Might (Lv 3)",
        "Description": "Sword/Whip: Prepare to counterattack each time you or your adjacent allies are hit with physical damage this turn, dealing weapon-based damage to the attacker. Stronger when countering attacks against yourself. Activation chance starts at 100% and goes down with each activation.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["14", "14", "14", "14", "18", "18", "18", "18", "18", "22", "22", "22", "22", "22", "22"],
            "Attack Power\n(Self)": ["180%", "188%", "196%", "204%", "228%", "236%", "244%", "252%", "260%", "284%", "292%", "300%", "308%", "316%", "340%"],
            "Attack Power\n(Others)": ["120%", "125%", "130%", "135%", "150%", "155%", "160%", "165%", "170%", "185%", "190%", "195%", "200%", "205%", "220%"],
            "Chance Fadeout": ["30%", "30%", "30%", "30%", "25%", "25%", "25%", "25%", "25%", "20%", "20%", "20%", "20%", "20%", "15%"],
            "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "6"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max TP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Bind Heart":{
        "Usage": "Active (Head)",
        "Unlock": "TP Up (Lv 1)",
        "Description": "Place a debuff on one enemy for several turns, which decreases action speed.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "6", "6", "6", "6", "6", "6"],
            "Speed↓": ["x0.82", "x0.8", "x0.78", "x0.76", "x0.74", "x0.72", "x0.7", "x0.68", "x0.66", "x0.64", "x0.62", "x0.6", "x0.58", "x0.56", "x0.5"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Shadow Veil":{
        "Usage": "Active (Legs)",
        "Unlock": "TP Up (Lv 3)",
        "Description": "Place a buff on yourself for several turns, which decreases enemy aggro.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "9", "9", "9", "9", "9", "9"],
            "Aggro Priority↓": ["-0", "-0", "-0", "-0", "-1", "-1", "-1", "-1", "-1", "-2", "-2", "-2", "-2", "-2", "-2"],
            "Base Aggro↓": ["-2", "-4", "-6", "-9", "-0", "-1", "-3", "-5", "-7", "-0", "-1", "-3", "-5", "-7", "-9"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Dark Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Bind Heart (Lv 2), Shadow Veil (Lv 2)",
        "Description": "Attempt to inflict Curse on all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "16", "16", "16", "16", "16", "16"],
            "Infliction Rate": ["35%", "36%", "37%", "38%", "44%", "45%", "46%", "47%", "48%", "55%", "56%", "57%", "58%", "59%", "68%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max HP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Take":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Take points. Higher yields have a lower chance of appearing.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
},
"Medic":{
    "Heal Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases the HP restored by healing skills used. (On level up, if this unlocked a skill, grant one level to it)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Healing↑": ["+3%", "+6%", "+9%", "+12%", "+14%", "+16%", "+18%", "+20%", "+22%", "+25%"],
        }
    },
    "Cure":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Heal Mastery (Lv 1)",
        "Description": "Restore HP to one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8", "8", "8", "8", "8", "8"],
            "Healing Power": ["25", "27", "29", "31", "50", "53", "56", "59", "62", "98", "101", "104", "107", "110", "250"],
            "Action Speed": ["100%", "100%", "100%", "100%", "120%", "120%", "120%", "120%", "120%", "150%", "150%", "150%", "150%", "150%", "250%"],
        }
    },
    "Salve":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Cure (Lv 5)",
        "Description": "Restore HP to the whole party.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "12", "12", "20", "20", "20", "20", "20", "30", "30", "30", "30", "30", "30"],
            "Healing Power": ["30", "32", "34", "36", "58", "61", "64", "67", "70", "110", "114", "118", "122", "126", "280"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Unbind":{
        "Usage": "Active (Head)",
        "Unlock": "Heal Mastery (Lv 3)",
        "Description": "Remove binds from the targets.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "5", "10", "5", "20", "10", "20", "15", "10", "35", "35", "35", "35", "35", "35"],
            "Binds Removed": ["1", "1", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            "Targets": ["Single", "Single", "Single", "Single", "Line", "Line", "Line", "Line", "Line", "Party", "Party", "Party", "Party", "Party", "Party"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Refresh":{
        "Usage": "Active (Head)",
        "Unlock": "Heal Mastery (Lv 3)",
        "Description": "Remove ailments from the targets.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "7", "4", "2", "20", "17", "14", "12", "10", "35", "35", "35", "35", "35", "35"],
            "Targets": ["Single", "Single", "Single", "Single", "Line", "Line", "Line", "Line", "Line", "Party", "Party", "Party", "Party", "Party", "Party"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Immunize":{
        "Usage": "Active (Head)",
        "Unlock": "Unbind (Lv 5), Refresh (Lv 5)",
        "Description": "Place a buff on the whole party for several turns, which decreases elemental damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "14", "14", "14", "14", "14", "14"],
            "Damage Taken↓": ["-15%", "-17%", "-19%", "-20%", "-20%", "-22%", "-23%", "-24%", "-25%", "-25%", "-26%", "-27%", "-28%", "-29%", "-32%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
        }
    },
    "Regenerate":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Heal Mastery (Lv 5)",
        "Description": "Place a buff on one ally for several turns, which restores HP at the end of each turn.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "12", "12", "12", "12", "12", "12"],
            "Healing Power": ["13", "16", "19", "22", "26", "30", "34", "37", "40", "45", "48", "51", "54", "57", "120"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Delayed Heal":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Regenerate (Lv 3)",
        "Description": "Prepare a heal that will activate at the start of the next turn, restoring HP to the whole party.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["14", "14", "14", "14", "23", "23", "23", "23", "23", "33", "33", "33", "33", "33", "33"],
            "Healing Power": ["70", "72", "74", "76", "110", "113", "116", "119", "122", "180", "183", "186", "189", "192", "450"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Heal":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Heal Mastery (Lv 7)",
        "Description": "Restore HP to one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "18", "18", "18", "18", "18", "18"],
            "Healing Power": ["70", "72", "74", "76", "110", "113", "116", "119", "122", "180", "183", "186", "189", "192", "450"],
            "Action Speed": ["90%", "90%", "90%", "90%", "105%", "105%", "105%", "105%", "105%", "120%", "120%", "120%", "120%", "120%", "150%"],
        }
    },
    "Revive":{
        "Usage": "Active (Head)",
        "Unlock": "Heal Mastery (Lv 10)",
        "Description": "Revive one dead ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "12", "12", "18", "18", "18", "18", "18", "25", "25", "25", "25", "25", "25"],
            "HP Gain": ["1", "5", "10", "20", "80", "90", "102", "115", "130", "270", "300", "330", "360", "400", "999"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "CPR":{
        "Usage": "Active (Head)",
        "Unlock": "Revive (Lv 3)",
        "Description": "Place a buff on the whole party for several turns, which gives targets a chance to survive lethal damage with 1 HP. (Buff is consumed when activated)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["18", "18", "18", "18", "26", "26", "26", "26", "26", "36", "36", "36", "36", "36", "36"],
            "Activation Chance": ["43%", "48%", "52%", "55%", "55%", "60%", "64%", "67%", "70%", "70%", "75%", "79%", "83%", "86%", "100%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max HP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Anaesthetic":{
        "Usage": "Active (Arms, LUC)",
        "Unlock": "HP Up (Lv 1)",
        "Description": "Attempt to inflict Sleep on one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "8", "8", "8", "8", "8", "8"],
            "Infliction Rate": ["50%", "52%", "54%", "56%", "66%", "69%", "71%", "73%", "75%", "85%", "88%", "90%", "92%", "94%", "110%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Toxin Injection":{
        "Usage": "Active (Arms, LUC)",
        "Unlock": "HP Up (Lv 1)",
        "Description": "Attempt to inflict Poison on one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "8", "8", "8", "8", "8", "8"],
            "Infliction Rate": ["70%", "70%", "70%", "70%", "85%", "85%", "85%", "85%", "85%", "100%", "100%", "100%", "100%", "100%", "130%"],
            "Poison Power": ["20", "29", "38", "47", "74", "83", "92", "101", "110", "160", "170", "180", "190", "200", "350"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Curare":{
        "Usage": "Active (Arms, LUC)",
        "Unlock": "HP Up (Lv 1)",
        "Description": "Attempt to inflict Paralysis on one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "8", "8", "8", "8", "8", "8"],
            "Infliction Rate": ["50%", "52%", "54%", "56%", "66%", "69%", "71%", "73%", "75%", "85%", "88%", "90%", "92%", "94%", "110%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Diagnosis":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 5)",
        "Description": "Place a buff on an ally line for several turns, which increases Critical rate.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "7", "7", "7", "7", "7", "12", "12", "12", "12", "12", "12"],
            "Crit Rate↑": ["+30%", "+34%", "+38%", "+42%", "+48%", "+52%", "+56%", "+60%", "+64%", "+70%", "+73%", "+76%", "+79%", "+82%", "+99.9%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
        }
    },
    "Clear Strike":{
        "Usage": "Active (Arms, TEC)",
        "Unlock": "HP Up (Lv 10)",
        "Description": "Staff: Deal melee Bash damage to one enemy. (Uses the STR damage formula but with the user's TEC instead of STR)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "17", "17", "17", "17", "17", "17"],
            "Attack Power": ["160%", "166%", "172%", "178%", "209%", "215%", "221%", "227%", "233%", "264%", "270%", "276%", "283%", "289%", "320%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max TP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Safe Passage":{
        "Usage": "Active (Field)",
        "Unlock": "TP Up (Lv 1)",
        "Description": "Temporarily decrease damage taken from damaging floors.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8"],
            "Damage Taken↓": ["x0.5", "x0.45", "x0.4", "x0.35", "x0.3", "x0.25", "x0.2", "x0.15", "x0.1", "x0.01"],
            "Duration (Steps)": ["25", "25", "25", "25", "45", "45", "45", "45", "45", "70"],
        }
    },
    "Scavenge":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 3)",
        "Description": "Increases enemy drop rates.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Drop Rate↑": ["+3%", "+5%", "+7%", "+9%", "+11%", "+12%", "+13%", "+14%", "+15%", "+16%"],
        }
    },
    "Focus":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 10)",
        "Description": "At the end of each turn, recover TP if your HP is full.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Gain": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+4%", "+6%", "+8%", "+10%", "+12%", "+14%", "+16%", "+18%", "+20%"],
        }
    },
    "Caduceus":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "ATK Up (Lv 10)",
        "Description": "Staff: Deal melee Bash damage to one enemy, with a chance to inflict Stun.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "10", "10", "10", "10", "10", "20", "20", "20", "20", "20", "20"],
            "Attack Power": ["165%", "170%", "175%", "180%", "220%", "228%", "236%", "244%", "252%", "360%", "370%", "380%", "390%", "400%", "520%"],
            "Infliction Rate": ["30%", "30%", "30%", "30%", "45%", "45%", "45%", "45%", "45%", "65%", "70%", "75%", "80%", "85%", "100%"],
            "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-3%", "-3%", "-3%", "-3%", "-3%", "+0%", "+0%", "+0%", "+0%", "+0%", "+20%"],
            "Action Speed": ["50%", "50%", "50%", "50%", "100%", "100%", "100%", "100%", "100%", "150%", "150%", "150%", "150%", "150%", "200%"],
        }
    },
    "Chop":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Chop points. Higher yields have a lower chance of appearing.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
},
"Alchemist":{
    "Formula Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases elemental damage dealt. (On level up, if this unlocked a skill, grant one level to it. Stacks with its own Grimoire)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+4%", "+6%", "+8%", "+10%", "+12%", "+14%", "+16%", "+18%", "+20%"],
        }
    },
    "Fire Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 1)",
        "Description": "Deal ranged Fire damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "10", "10", "10", "10", "10", "20", "20", "20", "20", "20", "20"],
            "Attack Power": ["110%", "115%", "120%", "125%", "180%", "186%", "192%", "198%", "204%", "300%", "308%", "316%", "324%", "332%", "420%"],
            "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Inferno Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Fire Formula (Lv 5)",
        "Description": "Deal ranged Fire damage to all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["20", "20", "20", "20", "32", "32", "32", "32", "32", "50", "50", "50", "50", "50", "50"],
            "Attack Power": ["140%", "145%", "150%", "155%", "220%", "225%", "230%", "235%", "240%", "330%", "335%", "340%", "345%", "350%", "440%"],
            "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Ice Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 1)",
        "Description": "Deal ranged Ice damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "10", "10", "10", "10", "10", "20", "20", "20", "20", "20", "20"],
            "Attack Power": ["110%", "115%", "120%", "125%", "180%", "186%", "192%", "198%", "204%", "300%", "308%", "316%", "324%", "332%", "420%"],
            "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Cocytus Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Ice Formula (Lv 5)",
        "Description": "Deal ranged Ice damage to all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["20", "20", "20", "20", "32", "32", "32", "32", "32", "50", "50", "50", "50", "50", "50"],
            "Attack Power": ["140%", "145%", "150%", "155%", "220%", "225%", "230%", "235%", "240%", "330%", "335%", "340%", "345%", "350%", "440%"],
            "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Volt Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 1)",
        "Description": "Deal ranged Volt damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "10", "10", "10", "10", "10", "20", "20", "20", "20", "20", "20"],
            "Attack Power": ["110%", "115%", "120%", "125%", "180%", "186%", "192%", "198%", "204%", "300%", "308%", "316%", "324%", "332%", "420%"],
            "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Thor Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Volt Formula (Lv 5)",
        "Description": "Deal ranged Volt damage to all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["20", "20", "20", "20", "32", "32", "32", "32", "32", "50", "50", "50", "50", "50", "50"],
            "Attack Power": ["140%", "145%", "150%", "155%", "220%", "225%", "230%", "235%", "240%", "330%", "335%", "340%", "345%", "350%", "440%"],
            "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Flame Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 5)",
        "Description": "Deal ranged Fire damage to one enemy, with splash effect.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["13", "13", "13", "13", "23", "23", "23", "23", "23", "38", "38", "38", "38", "38", "38"],
            "Attack Power": ["130%", "135%", "140%", "145%", "210%", "217%", "224%", "232%", "240%", "350%", "360%", "370%", "380%", "390%", "490%"],
            "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
        }
    },
    "Freeze Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 5)",
        "Description": "Deal ranged Ice damage to one enemy, with pierce effect.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["13", "13", "13", "13", "23", "23", "23", "23", "23", "38", "38", "38", "38", "38", "38"],
            "Attack Power": ["125%", "130%", "134%", "138%", "193%", "210%", "216%", "222%", "228%", "335%", "345%", "355%", "365%", "375%", "470%"],
            "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
        }
    },
    "Spark Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 5)",
        "Description": "Deal ranged Volt damage to an enemy line.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["13", "13", "13", "13", "23", "23", "23", "23", "23", "38", "38", "38", "38", "38", "38"],
            "Attack Power": ["115%", "119%", "123%", "127%", "188%", "194%", "200%", "205%", "210%", "310%", "318%", "326%", "332%", "340%", "440%"],
            "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
        }
    },
    "Dilution":{
        "Usage": "Active (Head)",
        "Unlock": "Flame/Freeze/Spark Formula (Lv 3)",
        "Description": "Place a debuff on all enemies for several turns, which increases elemental damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "13", "13", "13", "13", "13", "13"],
            "Damage Taken↑": ["+20%", "+22%", "+24%", "+25%", "+25%", "+27%", "+28%", "+29%", "+30%", "+30%", "+31%", "+32%", "+33%", "+34%", "+40%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Analysis":{
        "Usage": "Active (Head)",
        "Unlock": "Formula Mastery (Lv 7)",
        "Description": "Place a buff on yourself for several turns, which increases damage dealt when hitting a weakness.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "12", "12", "12", "12", "12", "12"],
            "Damage Dealt↑": ["+35%", "+37%", "+39%", "+41%", "+41%", "+43%", "+45%", "+47%", "+50%", "+50%", "+53%", "+56%", "+58%", "+61%", "+70%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
        }
    },
    "Pain Formula":{
        "Usage": "Active (Arms, TEC)",
        "Unlock": "Formula Mastery (Lv 10)",
        "Description": "Deal melee Bash damage to one enemy. Only usable from the front line, and can only target the enemy front line.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "13", "13", "13", "13", "13", "19", "19", "19", "19", "19", "19"],
            "Attack Power": ["150%", "155%", "160%", "165%", "190%", "195%", "200%", "205%", "210%", "235%", "240%", "245%", "250%", "255%", "280%"],
            "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Firelight":{
        "Usage": "Passive (TEC)",
        "Unlock": "Pain Formula (Lv 1)",
        "Description": "At the end of turn, deal ranged Fire damage to enemies that were hit by Pain Formula or had their attacks blocked by Light Formula/Tincture.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Attack Power": ["130%", "136%", "142%", "148%", "154%", "160%", "166%", "172%", "178%", "184%"],
        }
    },
    "Light Formula":{
        "Usage": "Active (Arms)",
        "Unlock": "Firelight (Lv 1)",
        "Description": "Chance to nullify physical hits received this turn. Activation chance starts at 100% and goes down with each activation.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "15", "15", "15", "15", "15", "22", "22", "22", "22", "22", "22"],
            "Chance Fadeout": ["100%", "92%", "84%", "76%", "60%", "54%", "48%", "43%", "38%", "28%", "24%", "20%", "17%", "15%", "5%"],
        }
    },
    "Light Tincture":{
        "Usage": "Active (Arms)",
        "Unlock": "Firelight (Lv 1)",
        "Description": "Chance to nullify elemental hits received this turn. Activation chance starts at 100% and goes down with each activation.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "15", "15", "15", "15", "15", "22", "22", "22", "22", "22", "22"],
            "Chance Fadeout": ["100%", "92%", "84%", "76%", "60%", "54%", "48%", "43%", "38%", "28%", "24%", "20%", "17%", "15%", "5%"],
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max TP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Return Formula":{
        "Usage": "Active (Field)",
        "Unlock": "TP Up (Lv 1)",
        "Description": "Chance to return to town.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "12", "10", "8", "15", "12", "10", "8", "5", "1"],
            "Success Chance": ["50%", "50%", "50%", "50%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Flee":{
        "Usage": "Active (Legs)",
        "Unlock": "Return Formula (Lv 3)",
        "Description": "Attempt to escape the battle at the start of the turn and teleport to the point where you entered the floor. If successful, spend part of the whole party's current HP.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "7", "7", "7", "7", "7", "7"],
            "Success Chance": ["50%", "55%", "60%", "65%", "70%", "75%", "80%", "85%", "90%", "100%", "100%", "100%", "100%", "100%", "100%"],
            "HP Loss": ["50%", "50%", "50%", "50%", "25%", "25%", "25%", "25%", "25%", "10%", "8%", "6%", "4%", "2%", "1%"],
        }
    },
    "Alchemy":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 2)",
        "Description": "Discarding materials grants Ental equal to a percentage of their sell price.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Convertion Rate": ["20%", "28%", "36%", "43%", "50%", "57%", "63%", "69%", "75%", "80%"],
        }
    },
    "Scavenge":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 3)",
        "Description": "Increases enemy drop rates.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Drop Rate↑": ["+3%", "+5%", "+7%", "+9%", "+11%", "+12%", "+13%", "+14%", "+15%", "+16%"],
        }
    },
    "Sight Formula":{
        "Usage": "Active (Field)",
        "Unlock": "TP Up (Lv 5)",
        "Description": "Show the location of all FOEs within a square centered around you. Lasts until you take a step.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3"],
            "Square Side": ["23", "25", "27", "29", "43", "47", "51", "55", "59", "999"],
        }
    },
    "Focus":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 10)",
        "Description": "At the end of each turn, recover TP if your HP is full.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Gain": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Chop":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Chop points. Higher yields have a lower chance of appearing.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
},
"Troubadour":{
    "Song Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases action speed when using Song skills. (On level up, if this unlocked a skill, grant one level to it)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Speed↑": ["x1.1", "x1.2", "x1.3", "x1.4", "x1.5", "x1.6", "x1.7", "x1.8", "x1.9", "x2.0"],
        }
    },
    "Warrior Song":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 1)",
        "Description": "(Song) Place a buff on the whole party for several turns, which increases physical/elemental damage dealt.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "12", "12", "12", "12", "12", "12"],
            "Damage Dealt↑": ["+20%", "+22%", "+24%", "+25%", "+25%", "+27%", "+28%", "+29%", "+30%", "+30%", "+31%", "+32%", "+33%", "+34%", "+40%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Shelter Song":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 1)",
        "Description": "(Song) Place a buff on the whole party for several turns, which decreases physical/elemental damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "12", "12", "12", "12", "12", "12"],
            "Damage Taken↓": ["-10%", "-12%", "-14%", "-15%", "-15%", "-17%", "-18%", "-19%", "-20%", "-20%", "-21%", "-22%", "-23%", "-24%", "-27%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Holy Gift":{
        "Usage": "Passive",
        "Unlock": "Warrior/Shelter Song (Lv 5)",
        "Description": "Increases EXP earned by the team at the end of battle. (Stacks additively across different party members)",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "EXP Gain↑": ["+10%", "+12%", "+14%", "+16%", "+18%", "+20%", "+21%", "+22%", "+23%", "+25%"],
        }
    },
    "Skanda Song":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 3)",
        "Description": "(Song) Place a buff on the whole party for several turns, which increases action speed.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "9", "9", "9", "9", "9", "9"],
            "Speed↑": ["x1.14", "x1.16", "x1.18", "x1.2", "x1.2", "x1.22", "x1.24", "x1.26", "x1.28", "x1.28", "x1.3", "x1.32", "x1.34", "x1.36", "x1.4"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Insight Melody":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 3)",
        "Description": "(Song) Place a buff on the whole party for several turns, which increases accuracy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "15", "15", "15", "15", "15", "15"],
            "Accuracy↑": ["+22%", "+23%", "+24%", "+25%", "+26%", "+27%", "+28%", "+29%", "+30%", "+31%", "+32%", "+33%", "+34%", "+35%", "+40%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Recovery Aria":{
        "Usage": "Active (Head)",
        "Unlock": "Skanda Song (Lv 5), Insight Melody (Lv 5)",
        "Description": "(Song) Place a buff on the whole party for several turns, which increases natural bind/ailment recovery rate.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "22", "22", "22", "22", "22", "22"],
            "Recovery Rate↑": ["+14%", "+17%", "+20%", "+23%", "+23%", "+26%", "+29%", "+32%", "+35%", "+35%", "+38%", "+41%", "+44%", "+47%", "+50%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Fire Prelude":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 5)",
        "Description": "(Song) Place a buff on one ally for several turns, which imbues their weapon with Fire damage and increases all damage dealt. (Skips the diminishing returns system)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "8", "8", "8", "8", "8", "10", "10", "10", "10", "10", "10"],
            "Damage Dealt↑": ["+14%", "+16%", "+18%", "+20%", "+20%", "+22%", "+24%", "+26%", "+28%", "+28%", "+30%", "+32%", "+34%", "+36%", "+40%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Flame Fantasia":{
        "Usage": "Active (Head)",
        "Unlock": "Fire Prelude (Lv 3)",
        "Description": "(Song) Place a buff on all allies and a debuff on all enemies for several turns. The buff increases Fire resistance, while the debuff decreases it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "14", "14", "14", "14", "14", "18", "18", "18", "18", "18", "18"],
            "Resistance↑\n(Allies)": ["+35%", "+38%", "+41%", "+44%", "+44%", "+47%", "+50%", "+53%", "+55%", "+55%", "+58%", "+61%", "+64%", "+67%", "+75%"],
            "Resistance↓\n(Enemies)": ["-25%", "-27%", "-29%", "-31%", "-31%", "-33%", "-35%", "-37%", "-40%", "-40%", "-42%", "-44%", "-46%", "-48%", "-55%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Ice Prelude":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 5)",
        "Description": "(Song) Place a buff on one ally for several turns, which imbues their weapon with Ice damage and increases all damage dealt. (Skips the diminishing returns system)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "8", "8", "8", "8", "8", "10", "10", "10", "10", "10", "10"],
            "Damage Dealt↑": ["+14%", "+16%", "+18%", "+20%", "+20%", "+22%", "+24%", "+26%", "+28%", "+28%", "+30%", "+32%", "+34%", "+36%", "+40%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Frost Fantasia":{
        "Usage": "Active (Head)",
        "Unlock": "Ice Prelude (Lv 3)",
        "Description": "(Song) Place a buff on all allies and a debuff on all enemies for several turns. The buff increases Ice resistance, while the debuff decreases it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "14", "14", "14", "14", "14", "18", "18", "18", "18", "18", "18"],
            "Resistance↑\n(Allies)": ["+35%", "+38%", "+41%", "+44%", "+44%", "+47%", "+50%", "+53%", "+55%", "+55%", "+58%", "+61%", "+64%", "+67%", "+75%"],
            "Resistance↓\n(Enemies)": ["-25%", "-27%", "-29%", "-31%", "-31%", "-33%", "-35%", "-37%", "-40%", "-40%", "-42%", "-44%", "-46%", "-48%", "-55%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Volt Prelude":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 5)",
        "Description": "(Song) Place a buff on one ally for several turns, which imbues their weapon with Volt damage and increases all damage dealt. (Skips the diminishing returns system)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "8", "8", "8", "8", "8", "10", "10", "10", "10", "10", "10"],
            "Damage Dealt↑": ["+14%", "+16%", "+18%", "+20%", "+20%", "+22%", "+24%", "+26%", "+28%", "+28%", "+30%", "+32%", "+34%", "+36%", "+40%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Shock Fantasia":{
        "Usage": "Active (Head)",
        "Unlock": "Volt Prelude (Lv 3)",
        "Description": "(Song) Place a buff on all allies and a debuff on all enemies for several turns. The buff increases Volt resistance, while the debuff decreases it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "14", "14", "14", "14", "14", "18", "18", "18", "18", "18", "18"],
            "Resistance↑\n(Allies)": ["+35%", "+38%", "+41%", "+44%", "+44%", "+47%", "+50%", "+53%", "+55%", "+55%", "+58%", "+61%", "+64%", "+67%", "+75%"],
            "Resistance↓\n(Enemies)": ["-25%", "-27%", "-29%", "-31%", "-31%", "-33%", "-35%", "-37%", "-40%", "-40%", "-42%", "-44%", "-46%", "-48%", "-55%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Echoing Rondo":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Song Mastery (Lv 7)",
        "Description": "(Song) Place a buff on the whole party for several turns, which makes targets recover HP when another ally receives single-target healing. (Each target receives healing based on their own stats)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "13", "13", "13", "13", "13", "18", "18", "18", "18", "18", "18"],
            "Healing Power": ["45", "48", "51", "53", "53", "56", "59", "62", "64", "64", "66", "68", "70", "72", "80"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Healing Lullaby":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Echoing Rondo (Lv 3)",
        "Description": "(Song) Place a buff on the whole party for several turns, which restores HP at the end of each turn.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20", "20", "20", "20", "20", "20"],
            "Healing Power": ["12", "15", "18", "21", "21", "25", "29", "33", "38", "38", "41", "44", "47", "50", "80"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Eerie Chorus":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 10)",
        "Description": "(Song) Remove buffs from all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["40", "35", "30", "25", "40", "35", "30", "25", "20", "20", "20", "20", "20", "20", "20"],
            "Buffs Removed": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Peace Ballad":{
        "Usage": "Active (Head)",
        "Unlock": "Eerie Chorus (Lv 5)",
        "Description": "(Song) Place a buff on the whole party for several turns, which restores TP at the end of each turn.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["20", "17", "14", "12", "30", "27", "24", "22", "20", "40", "40", "40", "40", "40", "40"],
            "TP Gain": ["4", "4", "4", "4", "6", "6", "6", "6", "6", "8", "8", "8", "8", "8", "10"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "Taboo Rondo":{
        "Usage": "Active (Head)",
        "Unlock": "Healing Lullaby (Lv 5), Peace Ballad (Lv 5)",
        "Description": "(Song) Increase the remaining duration of buffs and debuffs on all allies and enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["20", "17", "13", "10", "30", "25", "21", "18", "15", "30", "30", "30", "30", "30", "30"],
            "Duration↑": ["+1", "+1", "+1", "+1", "+2", "+2", "+2", "+2", "+2", "+3", "+3", "+3", "+3", "+3", "+3"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max HP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Frightful Yawl":{
        "Usage": "Active (Field)",
        "Unlock": "HP Up (Lv 1)",
        "Description": "Temporarily decrease the enemy encounter rate.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "9", "9", "9", "9", "9", "12"],
            "Encounters↓": ["x0.8", "x0.77", "x0.74", "x0.71", "x0.57", "x0.54", "x0.51", "x0.48", "x0.45", "x0.3"],
            "Duration (Steps)": ["30", "30", "30", "30", "60", "60", "60", "60", "60", "100"],
        }
    },
    "Restful Tune":{
        "Usage": "Active (Field, TEC)",
        "Unlock": "HP Up (Lv 3)",
        "Description": "Restore HP to one ally.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3"],
            "Healing Power": ["10", "12", "14", "16", "40", "42", "44", "46", "48", "130"],
        }
    },
    "Barbaric March":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 10)",
        "Description": "(Song) Place a buff on the whole party for several turns, which increases Max HP.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "22", "22", "22", "22", "22", "22"],
            "Max HP↑": ["+30%", "+32%", "+34%", "+36%", "+36%", "+38%", "+40%", "+42%", "+45%", "+45%", "+47%", "+49%", "+51%", "+53%", "+60%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max TP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Take":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Take points. Higher yields have a lower chance of appearing.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
},
"Ronin":{
    "Katana Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if you have a Katana equipped. (On level up, if this unlocked a skill, grant one level to it. Stacks with its own Grimoire)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+5%", "+6%", "+8%", "+9%", "+11%", "+12%", "+13%", "+15%"],
        }
    },
    "Slantwise Cut":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Katana Mastery (Lv 1)",
        "Description": "Katana: Deal melee Cut damage to one enemy. On the next turn, enables all skills that require a Stance.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["120%", "125%", "130%", "135%", "155%", "160%", "165%", "170%", "175%", "210%", "215%", "220%", "225%", "230%", "255%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Perfect Chaser":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Slantwise Cut (Lv 7)",
        "Description": "Katana, any Stance: Prepare to follow up after your allies' normal attacks this turn, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each follow up.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "8", "12", "12", "12", "12", "12"],
            "Attack Power": ["130%", "137%", "144%", "151%", "151%", "159%", "166%", "173%", "180%", "180%", "188%", "195%", "202%", "210%", "230%"],
            "Chance Fadeout": ["35%", "35%", "35%", "35%", "25%", "25%", "25%", "25%", "25%", "15%", "15%", "15%", "15%", "15%", "10%"],
            "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "6"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
        }
    },
    "Upper Stance":{
        "Usage": "Active (No Parts)",
        "Unlock": "Katana Mastery (Lv 5)",
        "Description": "Katana: Gain the Upper Stance buff for several turns, which increases physical damage dealt and slightly decreases physical damage taken. (Overrides other Stances)",
        "Starter": "1",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["1", "1", "1", "1", "3", "3", "3", "3", "3", "5", "5", "5", "5", "5", "5"],
            "Damage Dealt↑": ["+12%", "+14%", "+16%", "+18%", "+20%", "+22%", "+24%", "+26%", "+28%", "+30%", "+32%", "+34%", "+36%", "+38%", "+40%"],
            "Damage Taken↓": ["-5%", "-5%", "-5%", "-5%", "-7%", "-7%", "-7%", "-7%", "-7%", "-10%", "-11%", "-12%", "-13%", "-14%", "-15%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
        }
    },
    "Horse Slash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Upper Stance (Lv 1)",
        "Description": "Katana, Upper Stance: Deal melee Cut damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "10", "10", "10", "10", "10", "10"],
            "Attack Power": ["150%", "158%", "165%", "173%", "210%", "220%", "230%", "240%", "250%", "300%", "310%", "320%", "330%", "340%", "400%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Flame Grater":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Horse Slash (Lv 3)",
        "Description": "Katana, Upper Stance: Deal melee Cut+Fire damage to an enemy line.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "11", "11", "11", "11", "11", "15", "15", "15", "15", "15", "15"],
            "Attack Power": ["160%", "166%", "172%", "178%", "205%", "211%", "217%", "223%", "229%", "265%", "271%", "277%", "283%", "289%", "330%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Swallow Strike":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Upper Stance (Lv 5)",
        "Description": "Katana, Upper Stance: Deal multiple hits of melee Cut damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "14", "14", "14", "14", "14", "18", "18", "18", "18", "18", "18"],
            "Attack Power": ["125%", "127%", "129%", "131%", "131%", "133%", "135%", "137%", "140%", "140%", "142%", "144%", "146%", "148%", "170%"],
            "Hits": ["2", "2", "2", "2", "2~3", "2~3", "2~3", "2~3", "2~3", "3", "3", "3", "3", "3", "3"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%", "+0%", "+1%", "+2%", "+3%", "+4%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Clear Stance":{
        "Usage": "Active (No Parts)",
        "Unlock": "Katana Mastery (Lv 5)",
        "Description": "Katana: Gain the Clear Stance buff for several turns, which decreases physical damage taken and slightly increases physical damage dealt. (Overrides other Stances)",
        "Starter": "1",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["1", "1", "1", "1", "3", "3", "3", "3", "3", "5", "5", "5", "5", "5", "5"],
            "Damage Taken↓": ["-8%", "-10%", "-12%", "-14%", "-16%", "-17%", "-19%", "-21%", "-23%", "-25%", "-26%", "-28%", "-30%", "-32%", "-33%"],
            "Damage Dealt↑": ["+5%", "+5%", "+5%", "+5%", "+7%", "+7%", "+7%", "+7%", "+7%", "+10%", "+12%", "+14%", "+16%", "+18%", "+20%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
        }
    },
    "Razor Dodge":{
        "Usage": "Active (Legs)",
        "Unlock": "Clear Stance (Lv 1)",
        "Description": "Katana, Clear Stance: Chance to evade hits received (rolled before the standard accuracy check). Activation chance starts at 100% and goes down with each activation.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "10", "10", "10", "10", "10", "10"],
            "Chance Fadeout": ["100%", "75%", "50%", "40%", "35%", "31%", "28%", "25%", "23%", "21%", "20%", "17%", "14%", "11%", "5%"],
            "Max. Activations": ["1", "2", "2", "2", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
        }
    },
    "Lightning Stab":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Razor Dodge (Lv 3)",
        "Description": "Katana, Clear Stance: Deal melee Stab+Volt damage to one enemy, with pierce effect.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["7", "7", "7", "7", "10", "10", "10", "10", "10", "13", "13", "13", "13", "13", "13"],
            "Attack Power": ["190%", "198%", "206%", "214%", "248%", "256%", "254%", "262%", "270%", "310%", "317%", "323%", "330%", "337%", "375%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Arm Strike":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Clear Stance (Lv 5)",
        "Description": "Katana, Clear Stance: Deal melee Cut damage to one enemy, with a chance to inflict Arm Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "11", "11", "11", "11", "11", "15", "15", "15", "15", "15", "15"],
            "Attack Power": ["190%", "200%", "210%", "220%", "240%", "250%", "260%", "270%", "280%", "300%", "310%", "320%", "330%", "340%", "360%"],
            "Infliction Rate": ["50%", "50%", "50%", "50%", "60%", "60%", "60%", "60%", "60%", "75%", "76%", "77%", "78%", "80%", "100%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Drawing Stance":{
        "Usage": "Active (No Parts)",
        "Unlock": "Katana Mastery (Lv 5)",
        "Description": "Katana: Gain the Drawing Stance buff for several turns, which increases accuracy, evasion and action speed. (Overrides other Stances)",
        "Starter": "1",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["1", "1", "1", "1", "3", "3", "3", "3", "3", "5", "5", "5", "5", "5", "5"],
            "Accuracy↑": ["+13%", "+14%", "+15%", "+16%", "+16%", "+17%", "+18%", "+19%", "+20%", "+20%", "+21%", "+22%", "+23%", "+24%", "+28%"],
            "Evasion↑": ["+13%", "+14%", "+15%", "+16%", "+16%", "+17%", "+18%", "+19%", "+20%", "+20%", "+21%", "+22%", "+23%", "+24%", "+28%"],
            "Speed↑": ["x1.2", "x1.24", "x1.28", "x1.32", "x1.44", "x1.48", "x1.52", "x1.56", "x1.6", "x1.72", "x1.76", "x1.8", "x1.84", "x1.88", "x2.0"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
        }
    },
    "Beheading Cut":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Drawing Stance (Lv 1)",
        "Description": "Katana, Drawing Stance: Deal melee Cut damage to one enemy, with a chance to inflict Instant Death.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "10", "10", "10", "10", "10", "10"],
            "Attack Power": ["135%", "143%", "151%", "159%", "180%", "188%", "196%", "204%", "212%", "240%", "248%", "256%", "264%", "272%", "300%"],
            "Infliction Rate": ["35%", "35%", "35%", "35%", "50%", "50%", "50%", "50%", "50%", "65%", "66%", "67%", "68%", "69%", "100%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Frigid Slash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Beheading Cut (Lv 3)",
        "Description": "Katana, Drawing Stance: Deal ranged Cut+Ice damage to all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "14", "14", "14", "14", "14", "18", "18", "18", "18", "18", "18"],
            "Attack Power": ["155%", "160%", "165%", "170%", "196%", "202%", "208%", "214%", "220%", "255%", "261%", "268%", "274%", "282%", "315%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Charging Slash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Drawing Stance (Lv 5)",
        "Description": "Katana, Drawing Stance: Deal melee Stab damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "11", "11", "11", "11", "11", "15", "15", "15", "15", "15", "15"],
            "Attack Power": ["220%", "230%", "240%", "250%", "285%", "295%", "305%", "315%", "325%", "370%", "380%", "390%", "400%", "410%", "455%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Peerless Stance":{
        "Usage": "Active (Arms)",
        "Unlock": "Katana Mastery (Lv 10)",
        "Description": "Katana: Only usable if you have another Stance buff. Gain the Peerless Stance buff for 3 turns, which improves offense, defense and agility and enables all other skills that require a Stance. (Overrides other Stances)",
        "Starter": "1",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "7", "7", "7", "7", "7", "7"],
            "Damage Dealt↑": ["+12%", "+14%", "+16%", "+18%", "+22%", "+24%", "+26%", "+28%", "+30%", "+35%", "+37%", "+39%", "+41%", "+43%", "+50%"],
            "Damage Taken↓": ["-7%", "-9%", "-11%", "-13%", "-17%", "-19%", "-21%", "-23%", "-25%", "-28%", "-30%", "-32%", "-34%", "-36%", "-40%"],
            "Accuracy↑": ["+10%", "+10.8%", "+11.6%", "+12.4%", "+13.2%", "+14%", "+14.8%", "+15.6%", "+16.4%", "+18%", "+18.8%", "+19.6%", "+20.4%", "+21.2%", "+23%"],
            "Evasion↑": ["+10%", "+10.8%", "+11.6%", "+12.4%", "+13.2%", "+14%", "+14.8%", "+15.6%", "+16.4%", "+18%", "+18.8%", "+19.6%", "+20.4%", "+21.2%", "+23%"],
            "Speed↑": ["x1.2", "x1.24", "x1.28", "x1.32", "x1.44", "x1.48", "x1.52", "x1.56", "x1.6", "x1.72", "x1.76", "x1.8", "x1.84", "x1.88", "x2.0"],
            "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
        }
    },
    "ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+4%", "+6%", "+8%", "+10%", "+12%", "+14%", "+16%", "+18%", "+20%"],
        }
    },
    "Crit Up":{
        "Usage": "Passive",
        "Unlock": "ATK Up (Lv 5)",
        "Description": "Increases Critical rate.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Crit Rate↑": ["+8%", "+9.3%", "+10.6%", "+12%", "+13.3%", "+14.6%", "+16%", "+17.3%", "+18.6%", "+20%"],
        }
    },
    "Severing Slash":{
        "Usage": "Passive (LUC)",
        "Unlock": "Crit Up (Lv 5)",
        "Description": "Chance to inflict Instant Death on all enemies at the start of battle. Activation chance grows based on the level difference between the user and the highest-level enemy. (Equal level multiplies the chance by 1. Difference of 15 or more multiplies the chance by 3)",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["1%", "2%", "3%", "4%", "5%", "6%", "7%", "8%", "9%", "10%"],
            "Infliction Rate": ["55%", "60%", "65%", "70%", "75%", "80%", "85%", "90%", "95%", "100%"],
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max HP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Breath":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 3)",
        "Description": "Restore HP to yourself and your adjacent allies. Healing is based on each target's Max HP.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "10", "10", "10", "10", "10", "10"],
            "HP Gain (Fixed)": ["20", "23", "26", "29", "40", "44", "48", "52", "56", "80", "85", "90", "95", "100", "150"],
            "HP Gain (Max HP)": ["25%", "26%", "27%", "28%", "32%", "33%", "34%", "35%", "36%", "40%", "42%", "44%", "46%", "48%", "60%"],
            "Action Speed": ["120%", "120%", "120%", "120%", "150%", "150%", "150%", "150%", "150%", "200%", "200%", "200%", "200%", "200%", "500%"],
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max TP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Indomitable Cry":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "TP Up (Lv 3)",
        "Description": "Attempt to inflict Fear on all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "16", "16", "16", "16", "16", "16"],
            "Infliction Rate": ["35%", "36%", "37%", "38%", "44%", "45%", "46%", "47%", "48%", "55%", "56%", "57%", "58%", "59%", "68%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Mine points. Higher yields have a lower chance of appearing.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
},
"Hexer":{
    "Curse Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases the infliction rates of Curse skills. (On level up, if this unlocked a skill, grant one level to it)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Inflictions↑": ["x1.02", "x1.04", "x1.06", "x1.08", "x1.1", "x1.12", "x1.14", "x1.16", "x1.18", "x1.2"],
        }
    },
    "Sapping Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Curse Mastery (Lv 1)",
        "Description": "Place a debuff on all enemies for several turns, which decreases physical/elemental damage dealt.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "12", "12", "12", "12", "12", "12"],
            "Damage Dealt↓": ["-8%", "-10%", "-12%", "-13%", "-13%", "-15%", "-16%", "-17%", "-18%", "-18%", "-19%", "-20%", "-21%", "-22%", "-25%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Leaden Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Sapping Curse (Lv 2)",
        "Description": "Place a debuff on all enemies for several turns, which decreases action speed.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "9", "9", "9", "9", "9", "9"],
            "Speed↓": ["x0.84", "x0.82", "x0.8", "x0.78", "x0.78", "x0.76", "x0.74", "x0.72", "x0.7", "x0.7", "x0.68", "x0.66", "x0.64", "x0.62", "x0.55"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Frailty Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Curse Mastery (Lv 1)",
        "Description": "Place a debuff on all enemies for several turns, which increases physical/elemental damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "12", "12", "12", "12", "12", "12"],
            "Damage Taken↑": ["+15%", "+17%", "+19%", "+20%", "+20%", "+22%", "+23%", "+24%", "+25%", "+25%", "+26%", "+27%", "+28%", "+29%", "+35%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Deceit Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Frailty Curse (Lv 2)",
        "Description": "Place a debuff on all enemies for several turns, which decreases accuracy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "17", "17", "17", "17", "17", "17"],
            "Accuracy↓": ["-18%", "-19%", "-20%", "-21%", "-21%", "-22%", "-23%", "-24%", "-25%", "-25%", "-26%", "-27%", "-28%", "-29%", "-30%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Revenge Curse":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Leaden Curse (Lv 5), Deceit Curse (Lv 5)",
        "Description": "Deal ranged Almighty damage to one enemy. Deals more damage the more missing HP you have:<br>-Your missing HP grants a damage multiplier of [1 + MissingHP/500].<br>-Your missing HP% grants a damage multiplier of [MissingHP%*(1+MissingHP%)/2 + 0.01].",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["18", "18", "18", "18", "27", "27", "27", "27", "27", "38", "38", "38", "38", "38", "38"],
            "Attack Power": ["200%", "206%", "212%", "218%", "248%", "254%", "260%", "266%", "272%", "302%", "308%", "314%", "320%", "326%", "356%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Blinding Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 3)",
        "Description": "(Curse) Attempt to inflict Blind on an enemy line.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "16", "16", "16", "16", "16", "16"],
            "Infliction Rate": ["35%", "36%", "38%", "39%", "45%", "47%", "48%", "50%", "51%", "57%", "59%", "60%", "62%", "63%", "70%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Madness Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 3)",
        "Description": "(Curse) Attempt to inflict Panic on an enemy line.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "16", "16", "16", "16", "16", "16"],
            "Infliction Rate": ["45%", "46%", "47%", "48%", "55%", "57%", "58%", "59%", "60%", "70%", "72%", "73%", "74%", "75%", "85%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Torpor Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 3)",
        "Description": "(Curse) Attempt to inflict Sleep on an enemy line.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "16", "16", "16", "16", "16", "16"],
            "Infliction Rate": ["45%", "46%", "47%", "48%", "55%", "57%", "58%", "59%", "60%", "70%", "72%", "73%", "74%", "75%", "85%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Corrupt Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Blinding Curse (Lv 2), Madness Curse (Lv 3)",
        "Description": "(Curse) Attempt to inflict Curse on an enemy line.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["9", "9", "9", "9", "13", "13", "13", "13", "13", "18", "18", "18", "18", "18", "18"],
            "Infliction Rate": ["50%", "51%", "52%", "53%", "60%", "62%", "63%", "64%", "65%", "75%", "77%", "78%", "79%", "80%", "90%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Stoning Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Madness Curse (Lv 3), Torpor Curse (Lv 2)",
        "Description": "(Curse) Attempt to inflict Petrify on one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["9", "9", "9", "9", "13", "13", "13", "13", "13", "18", "18", "18", "18", "18", "18"],
            "Infliction Rate": ["45%", "46%", "47%", "48%", "55%", "57%", "58%", "59%", "60%", "70%", "72%", "73%", "74%", "75%", "85%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Relapse Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Corrupt/Stoning Curse (Lv 3)",
        "Description": "Place a debuff on all enemies for several turns, which decreases natural bind/ailment recovery rate.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["16", "16", "16", "16", "21", "21", "21", "21", "21", "26", "26", "26", "26", "26", "26"],
            "Recovery Rate↓": ["-10%", "-11%", "-12%", "-14%", "-14%", "-15%", "-17%", "-18%", "-20%", "-20%", "-22%", "-24%", "-26%", "-28%", "-30%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Cranial Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 5)",
        "Description": "(Curse) Attempt to inflict Head Bind on one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "14", "14", "14", "14", "14", "14"],
            "Infliction Rate": ["60%", "62%", "63%", "65%", "75%", "77%", "78%", "80%", "81%", "92%", "94%", "95%", "97%", "98%", "110%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Abdomen Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 5)",
        "Description": "(Curse) Attempt to inflict Arm Bind on one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "14", "14", "14", "14", "14", "14"],
            "Infliction Rate": ["60%", "62%", "63%", "65%", "75%", "77%", "78%", "80%", "81%", "92%", "94%", "95%", "97%", "98%", "110%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Immobile Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 5)",
        "Description": "(Curse) Attempt to inflict Leg Bind on one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "14", "14", "14", "14", "14", "14"],
            "Infliction Rate": ["60%", "62%", "63%", "65%", "75%", "77%", "78%", "80%", "81%", "92%", "94%", "95%", "97%", "98%", "110%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Evil Eye":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 10)",
        "Description": "(Curse) Attempt to inflict Fear on an enemy line.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["9", "9", "9", "9", "13", "13", "13", "13", "13", "18", "18", "18", "18", "18", "18"],
            "Infliction Rate": ["40%", "41%", "42%", "43%", "50%", "52%", "53%", "54%", "55%", "65%", "67%", "68%", "69%", "70%", "80%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Luring Whisper":{
        "Usage": "Active (Field)",
        "Unlock": "Evil Eye (Lv 1)",
        "Description": "Temporarily increase the enemy encounter rate.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "6"],
            "Encounters↑": ["x1.4", "x1.44", "x1.48", "x1.52", "x1.68", "x1.72", "x1.76", "x1.8", "x1.84", "x2.0"],
            "Duration (Steps)": ["20", "20", "20", "20", "40", "40", "40", "40", "40", "60"],
        }
    },
    "Muting Word":{
        "Usage": "Active (Head)",
        "Unlock": "Evil Eye (Lv 3)",
        "Description": "Control all enemies afflicted with Fear for this turn, which prevents them from acting and increases their damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "6", "6", "6", "6", "6", "6"],
            "Damage Taken↑": ["+10%", "+15%", "+20%", "+25%", "+35%", "+40%", "+45%", "+50%", "+55%", "+65%", "+70%", "+75%", "+80%", "+85%", "+100%"],
        }
    },
    "Conflict Word":{
        "Usage": "Active (Head)",
        "Unlock": "Evil Eye (Lv 5)",
        "Description": "Control all enemies afflicted with Fear for this turn, which makes them attack another random enemy. (If there's only one enemy, it will attack itself)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["100%", "105%", "110%", "115%", "130%", "135%", "140%", "145%", "150%", "165%", "170%", "175%", "180%", "185%", "200%"],
        }
    },
    "Suicide Word":{
        "Usage": "Active (Head)",
        "Unlock": "Evil Eye (Lv 10)",
        "Description": "Control one enemy afflicted with Fear for this turn, which makes it hit itself multiple times.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "6", "6", "6", "6", "6", "10", "10", "10", "10", "10", "10"],
            "Attack Power": ["100%", "105%", "110%", "115%", "115%", "120%", "125%", "130%", "135%", "135%", "140%", "145%", "150%", "155%", "155%"],
            "Hits": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "4"],
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max TP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Staggering Word":{
        "Usage": "Passive (LUC)",
        "Unlock": "TP Up (Lv 3)",
        "Description": "Chance to inflict Stun on all enemies at the start of battle.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["6%", "8%", "10%", "12%", "14%", "15%", "16%", "17%", "18%", "20%"],
            "Infliction Rate": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max HP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Chop":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Chop points. Higher yields have a lower chance of appearing.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
},
"Highlander":{
    "Spear Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if you have a Spear equipped. (On level up, if this unlocked a skill, grant one level to it. Stacks with its own Grimoire)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+5%", "+6%", "+8%", "+9%", "+11%", "+12%", "+13%", "+15%"],
        }
    },
    "Long Thrust":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 1)",
        "Description": "Spear: Deal ranged Stab damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["140%", "146%", "152%", "158%", "190%", "196%", "202%", "213%", "220%", "310%", "316%", "322%", "328%", "334%", "390%"],
            "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+20%", "+20%", "+20%", "+20%", "+20%", "+30%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "130%", "130%", "130%", "130%", "130%", "130%"],
        }
    },
    "Draining Thrust":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 2)",
        "Description": "Spear: Spend 20% of current HP to deal melee Stab damage to the enemy front line.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "11", "11", "11", "11", "11", "11"],
            "Attack Power": ["130%", "137%", "145%", "152%", "175%", "182%", "190%", "197%", "205%", "227%", "235%", "242%", "250%", "257%", "280%"],
            "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Draining Burst":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Draining Thrust (Lv 5)",
        "Description": "Spear: Spend 40% of current HP to deal melee Stab damage to all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "16", "16", "16", "16", "16", "16"],
            "Attack Power": ["150%", "158%", "166%", "174%", "198%", "206%", "214%", "222%", "230%", "254%", "262%", "270%", "278%", "286%", "310%"],
            "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Legion Thrust":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 2)",
        "Description": "Spear: Spend 20% of other allies' current HP to deal melee Stab damage to the enemy front line.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "11", "11", "11", "11", "11", "11"],
            "Attack Power": ["150%", "158%", "166%", "174%", "198%", "206%", "214%", "222%", "230%", "254%", "262%", "270%", "278%", "286%", "310%"],
            "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Legion Burst":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Legion Thrust (Lv 5)",
        "Description": "Spear: Spend 40% of other allies' current HP to deal melee Stab damage to all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "16", "16", "16", "16", "16", "16"],
            "Attack Power": ["180%", "189%", "199%", "208%", "237%", "246%", "256%", "265%", "275%", "303%", "313%", "322%", "332%", "341%", "370%"],
            "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Head Pierce":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Spear Mastery (Lv 3)",
        "Description": "Spear: Deal melee Stab damage to one enemy, with a chance to inflict Head Bind or Instant Death.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "16", "16", "16", "16", "16", "16"],
            "Attack Power": ["120%", "126%", "132%", "138%", "156%", "162%", "168%", "174%", "180%", "198%", "204%", "210%", "216%", "222%", "240%"],
            "Infliction Rate\n(Head Bind)": ["35%", "35%", "35%", "35%", "45%", "45%", "45%", "45%", "45%", "55%", "55%", "55%", "55%", "55%", "70%"],
            "Infliction Rate\n(Instant Kill)": ["15%", "15%", "15%", "15%", "20%", "20%", "20%", "20%", "20%", "25%", "25%", "25%", "25%", "25%", "35%"],
            "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+20%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Spear Assist":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 5)",
        "Description": "Spear: Deal melee Stab damage to one enemy at the end of turn. If any allies have used elemental attacks this turn, add the element of the most recent one and multiply damage dealt by 2.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "22", "22", "22", "22", "22", "22"],
            "Attack Power": ["85%", "89%", "92%", "95%", "120%", "124%", "128%", "132%", "135%", "170%", "174%", "178%", "182%", "185%", "230%"],
            "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+20%"],
        }
    },
    "Delayed Charge":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 10)",
        "Description": "Spear: Spend 15% of current HP to prepare an attack that will activate several turns later, at the end of the turn. On activation, deal ranged Stab damage to one enemy. Cross Charge can activate it early, but damage dealt receives a reduction multiplier for each remaining charge turn.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "16", "16", "16", "16", "16", "16"],
            "Attack Power": ["250%", "260%", "270%", "280%", "450%", "465%", "480%", "495%", "510%", "750%", "770%", "790%", "810%", "830%", "1150%"],
            "Turn Delay": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4"],
            "Early Penalty": ["x0.7", "x0.7", "x0.7", "x0.7", "x0.72", "x0.72", "x0.72", "x0.72", "x0.72", "x0.75", "x0.75", "x0.75", "x0.75", "x0.75", "x0.75"],
            "Accuracy": ["+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%", "+80%"],
        }
    },
    "Cross Charge":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Delayed Charge (Lv 3)",
        "Description": "Spear: Spend part of current HP to deal melee Stab damage to one enemy. If Delayed Charge is preparing against the same target, activate it and increase this skill's power.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"],
            "HP Cost": ["10%", "10%", "10%", "10%", "15%", "15%", "15%", "15%", "15%", "20%", "20%", "20%", "20%", "20%", "20%"],
            "Attack Power\n(Solo)": ["120%", "130%", "140%", "150%", "180%", "190%", "200%", "210%", "220%", "250%", "260%", "270%", "280%", "290%", "320%"],
            "Attack Power\n(Combo)": ["255%", "263.5%", "272%", "280.5%", "351.5%", "360.75%", "370%", "379.25%", "388.5%", "520%", "530%", "540%", "550%", "560%", "709.5%"],
            "Accuracy\n(Solo)": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+20%"],
            "Accuracy\n(Combo)": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "150%", "150%", "150%", "150%", "150%", "200%", "200%", "200%", "200%", "200%", "200%"],
        }
    },
    "ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+4%", "+6%", "+8%", "+10%", "+12%", "+14%", "+16%", "+18%", "+20%"],
        }
    },
    "Turning Tide":{
        "Usage": "Passive",
        "Unlock": "ATK Up (Lv 1)",
        "Description": "Restore HP to the whole party each time you kill an enemy. Healing is based on each unit's Max HP.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "HP Gain (Fixed)": ["7", "9", "11", "13", "15", "17", "19", "21", "23", "25"],
            "HP Gain (Max HP)": ["6%", "7%", "8%", "9%", "10%", "11%", "12%", "13%", "14%", "15%"],
        }
    },
    "Bloody Offense":{
        "Usage": "Active (Head)",
        "Unlock": "ATK Up (Lv 3)",
        "Description": "Place a buff on an ally line for several turns, which increases physical/elemental damage dealt but makes the holder lose 10% of current HP upon acting.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "8", "8", "8", "8", "8", "8"],
            "Damage Dealt↑": ["+30%", "+32%", "+34%", "+37%", "+39%", "+42%", "+44%", "+46%", "+48%", "+50%", "+52%", "+54%", "+56%", "+58%", "+70%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Bloodlust":{
        "Usage": "Passive",
        "Unlock": "Turning Tide (Lv 3), Bloody Offense (Lv 3)",
        "Description": "Chance to attack a random enemy each time you lose HP.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["20%", "20%", "20%", "20%", "25%", "25%", "25%", "25%", "25%", "30%"],
            "Attack Power": ["100%", "105%", "110%", "114%", "118%", "122%", "126%", "129%", "132%", "135%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
        }
    },
    "Stigmata":{
        "Usage": "Active (No Parts, LUC)",
        "Unlock": "ATK Up (Lv 5)",
        "Description": "Attempt to inflict multiple binds onto yourself, then attempt to inflict the binds and ailments on yourself onto one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "6", "6", "6", "6", "6", "6"],
            "Binds Inflicted": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3"],
            "Infliction Rate": ["65%", "70%", "75%", "80%", "80%", "83%", "86%", "88%", "90%", "90%", "91%", "92%", "93%", "94%", "100%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decreases physical damage taken.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Taken↓": ["-2%", "-4%", "-6%", "-8%", "-10%", "-12%", "-14%", "-16%", "-18%", "-20%"],
        }
    },
    "Battle Instinct":{
        "Usage": "Passive",
        "Unlock": "DEF Up (Lv 1)",
        "Description": "At the start of battle there's a chance to place a buff on the whole party for 5 turns, which nullifies one ailment infliction received. (Buff is consumed when activated).",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["10%", "13%", "16%", "18%", "20%", "22%", "24%", "26%", "28%", "30%"],
        }
    },
    "Blood Fortune":{
        "Usage": "Active (Head)",
        "Unlock": "DEF Up (Lv 3)",
        "Description": "Spend 15% of the whole party's current HP to place a buff on the whole party for several turns, which increases bind/ailment infliction rates.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20", "20", "20", "20", "20", "20"],
            "Inflictions↑": ["x1.08", "x1.12", "x1.15", "x1.18", "x1.24", "x1.27", "x1.3", "x1.33", "x1.36", "x1.42", "x1.45", "x1.48", "x1.51", "x1.54", "x1.6"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Allied Bonds":{
        "Usage": "Passive",
        "Unlock": "Battle Instinct (Lv 3), Blood Fortune (Lv 3)",
        "Description": "If one of your skills consumes HP of other allies in your line, restore TP to them at the end of turn.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Gain": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Spirit Shield":{
        "Usage": "Active (Head)",
        "Unlock": "DEF Up (Lv 5)",
        "Description": "Spend 10% of current HP to place a buff on an ally line for several turns, which decreases elemental damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4"],
            "Damage Taken↓": ["-15%", "-17%", "-19%", "-20%", "-20%", "-22%", "-23%", "-24%", "-25%", "-25%", "-26%", "-27%", "-28%", "-29%", "-32%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max HP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Limitless":{
        "Usage": "Active (Arms)",
        "Unlock": "HP Up (Lv 1)",
        "Description": "Enter a charge state until the end of next turn, which increases damage dealt and lets you ignore equipment requirements on skills.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "6", "6", "6", "6", "6", "6"],
            "Damage Dealt↑": ["+30%", "+33%", "+36%", "+39%", "+55%", "+59%", "+62%", "+65%", "+68%", "+85%", "+89%", "+94%", "+98%", "+102%", "+125%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Black Sabbath":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 10)",
        "Description": "Deal typeless damage to all enemies. Restore HP to the party equal to the damage dealt split amongst party members. Damage dealt cannot exceed the party's total missing HP. Removes binds/ailments on enemies and inflicts them onto the party.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "12", "12", "16", "16", "16", "16", "16", "20", "20", "20", "20", "20", "20"],
            "Attack Power": ["140%", "148%", "156%", "164%", "200%", "208%", "216%", "224%", "232%", "270%", "400%", "600%", "900%", "1500%", "9999%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        }
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Mine points. Higher yields have a lower chance of appearing.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
},
"Gunner":{
    "Gun Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if you have a Gun equipped. (On level up, if this unlocked a skill, grant one level to it. Stacks with its own Grimoire)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+5%", "+6%", "+8%", "+9%", "+11%", "+12%", "+13%", "+15%"],
        }
    },
    "Head Snipe":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Gun Mastery (Lv 1)",
        "Description": "Gun: Deal ranged Stab damage to one enemy, with a chance to inflict Head Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "12", "12", "12", "12", "12", "12"],
            "Attack Power": ["130%", "135%", "141%", "146%", "163%", "168%", "174%", "179%", "185%", "200%", "206%", "212%", "218%", "223%", "240%"],
            "Infliction Rate": ["45%", "45%", "45%", "45%", "55%", "55%", "55%", "55%", "55%", "65%", "65%", "65%", "65%", "65%", "75%"],
            "Accuracy": ["+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Arm Snipe":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Gun Mastery (Lv 1)",
        "Description": "Gun: Deal ranged Stab damage to one enemy, with a chance to inflict Arm Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "12", "12", "12", "12", "12", "12"],
            "Attack Power": ["130%", "135%", "141%", "146%", "163%", "168%", "174%", "179%", "185%", "200%", "206%", "212%", "218%", "223%", "240%"],
            "Infliction Rate": ["45%", "45%", "45%", "45%", "55%", "55%", "55%", "55%", "55%", "65%", "65%", "65%", "65%", "65%", "75%"],
            "Accuracy": ["+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Leg Snipe":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Gun Mastery (Lv 1)",
        "Description": "Gun: Deal ranged Stab damage to one enemy, with a chance to inflict Leg Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "12", "12", "12", "12", "12", "12"],
            "Attack Power": ["130%", "135%", "141%", "146%", "163%", "168%", "174%", "179%", "185%", "200%", "206%", "212%", "218%", "223%", "240%"],
            "Infliction Rate": ["45%", "45%", "45%", "45%", "55%", "55%", "55%", "55%", "55%", "65%", "65%", "65%", "65%", "65%", "75%"],
            "Accuracy": ["+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%", "+35%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Fire Rounds":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gun Mastery (Lv 3)",
        "Description": "Gun: Deal ranged Stab+Fire damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["140%", "146%", "152%", "158%", "176%", "182%", "188%", "194%", "200%", "218%", "224%", "230%", "236%", "242%", "260%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Charged Fire":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Fire Rounds (Lv 5)",
        "Description": "Gun: Deal ranged Stab+Fire damage to one enemy. Increases damage taken by 50% until it activates.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "15", "15", "15", "20", "20", "20", "20", "20", "25", "25", "25", "25", "25", "25"],
            "Attack Power": ["200%", "210%", "220%", "230%", "260%", "270%", "280%", "290%", "300%", "330%", "340%", "350%", "360%", "370%", "400%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"],
        }
    },
    "Ice Rounds":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gun Mastery (Lv 3)",
        "Description": "Gun: Deal ranged Stab+Ice damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["140%", "146%", "152%", "158%", "176%", "182%", "188%", "194%", "200%", "218%", "224%", "230%", "236%", "242%", "260%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Charged Ice":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Ice Rounds (Lv 5)",
        "Description": "Gun: Deal ranged Stab+Ice damage to one enemy. Increases damage taken by 50% until it activates.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "15", "15", "15", "20", "20", "20", "20", "20", "25", "25", "25", "25", "25", "25"],
            "Attack Power": ["200%", "210%", "220%", "230%", "260%", "270%", "280%", "290%", "300%", "330%", "340%", "350%", "360%", "370%", "400%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"],
        }
    },
    "Volt Rounds":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gun Mastery (Lv 3)",
        "Description": "Gun: Deal ranged Stab+Volt damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["140%", "146%", "152%", "158%", "176%", "182%", "188%", "194%", "200%", "218%", "224%", "230%", "236%", "242%", "260%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Charged Volt":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Volt Rounds (Lv 5)",
        "Description": "Gun: Deal ranged Stab+Volt damage to one enemy. Increases damage taken by 50% until it activates.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "15", "15", "15", "20", "20", "20", "20", "20", "25", "25", "25", "25", "25", "25"],
            "Attack Power": ["200%", "210%", "220%", "230%", "260%", "270%", "280%", "290%", "300%", "330%", "340%", "350%", "360%", "370%", "400%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"],
        }
    },
    "Charged Shot":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gun Mastery (Lv 5)",
        "Description": "Gun: Deal ranged Stab damage to one enemy. Increases damage taken by 50% until it activates.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "15", "15", "15", "20", "20", "20", "20", "20", "25", "25", "25", "25", "25", "25"],
            "Attack Power": ["250%", "262%", "275%", "287%", "325%", "337%", "350%", "362%", "375%", "412%", "425%", "437%", "450%", "462%", "500%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"],
        }
    },
    "Penetrator":{
        "Usage": "Passive",
        "Unlock": "Gun Mastery (Lv 7)",
        "Description": "Normal attacks have a chance to gain pierce effect.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["30%", "36%", "42%", "48%", "54%", "60%", "66%", "72%", "78%", "85%"],
        }
    },
    "Ricochet":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gun Mastery (Lv 10)",
        "Description": "Gun: Deal multiple hits of ranged Stab damage to random enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["20", "20", "20", "20", "25", "25", "25", "25", "25", "30", "30", "30", "30", "30", "30"],
            "Attack Power": ["100%", "102%", "104%", "106%", "106%", "108%", "110%", "112%", "114%", "114%", "116%", "118%", "120%", "122%", "122%"],
            "Hits": ["2~3", "2~3", "2~3", "2~3", "3~4", "3~4", "3~4", "3~4", "3~4", "3~5", "3~5", "3~5", "3~5", "3~5", "4~5"],
            "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Recharge":{
        "Usage": "Passive",
        "Unlock": "Charged Shot (Lv 3), Penetrator (Lv 3)",
        "Description": "Chance to recover the TP spent when using a skill.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["10%", "13%", "16%", "18%", "20%", "22%", "24%", "26%", "28%", "30%"],
        }
    },
    "Action Boost":{
        "Usage": "Active (Legs)",
        "Unlock": "Penetrator (Lv 3), Rocochet (Lv 3)",
        "Description": "Enter a charge state for next turn, which will make you perform your selected action multiple times. For skills, TP will be consumed on each use.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "6", "4", "2", "10", "8", "6", "4", "2", "12", "12", "12", "12", "12", "12"],
            "Actions": ["2", "2", "2", "2", "2~3", "2~3", "2~3", "2~3", "2~3", "3", "3", "3", "3", "3", "3~4"],
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max HP↑": ["+5%", "+8%", "+11%", "+13%", "+15%", "+17%", "+19%", "+21%", "+23%", "+25%"],
        }
    },
    "Medic Bullet":{
        "Usage": "Active (Arms, TEC)",
        "Unlock": "HP Up (Lv 1)",
        "Description": "Gun: Restore HP and remove ailments for one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "13", "13", "13", "13", "13", "23", "23", "23", "23", "23", "23"],
            "Healing Power": ["25", "27", "30", "33", "84", "87", "90", "93", "96", "165", "168", "171", "174", "177", "390"],
            "Action Speed": ["90%", "90%", "90%", "90%", "105%", "105%", "105%", "105%", "105%", "120%", "120%", "120%", "120%", "120%", "150%"],
        }
    },
    "Cover Fire":{
        "Usage": "Passive",
        "Unlock": "HP Up (Lv 3)",
        "Description": "When you Defend in the back line, restore HP to the front line. Healing is based on each target's Max HP.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "HP Gain (Fixed)": ["10", "14", "18", "22", "25", "28", "31", "34", "37", "40"],
            "HP Gain (Max HP)": ["1%", "3%", "4%", "6%", "7%", "9%", "10%", "12%", "13%", "15%"],
        }
    },
    "Shell Shock":{
        "Usage": "Active (Legs, LUC)",
        "Unlock": "Medic Bullet (Lv 3), Cover Fire (Lv 3)",
        "Description": "Weaken the enemy back line for this turn, which decreases their offense, defense, accuracy and evasion. Also attempts to inflict Stun.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "14", "14", "14", "14", "14", "14"],
            "Damage Dealt↓": ["-10%", "-13%", "-15%", "-18%", "-22%", "-25%", "-27%", "-29%", "-32%", "-36%", "-39%", "-41%", "-43%", "-46%", "-50%"],
            "Damage Taken↑": ["+20%", "+24%", "+29%", "+34%", "+43%", "+48%", "+52%", "+57%", "+62%", "+71%", "+76%", "+81%", "+85%", "+90%", "+100%"],
            "Accuracy↓": ["-5%", "-6.4%", "-7.9%", "-9.4%", "-12.3%", "-13.8%", "-15.2%", "-16.7%", "-18.2%", "-21.1%", "-22.6%", "-24.1%", "-25.5%", "-27%", "-30%"],
            "Evasion↓": ["-5%", "-6.4%", "-7.9%", "-9.4%", "-12.3%", "-13.8%", "-15.2%", "-16.7%", "-18.2%", "-21.1%", "-22.6%", "-24.1%", "-25.5%", "-27%", "-30%"],
            "Infliction Rate": ["100%", "100%", "100%", "100%", "150%", "150%", "150%", "150%", "150%", "200%", "200%", "200%", "200%", "200%", "200%"],
        }
    },
    "ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+4%", "+6%", "+8%", "+10%", "+12%", "+14%", "+16%", "+18%", "+20%"],
        }
    },
    "High Caliber":{
        "Usage": "Passive",
        "Unlock": "ATK Up (Lv 1)",
        "Description": "Increases damage dealt with Critical Hits.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["x1.2", "x1.28", "x1.35", "x1.41", "x1.47", "x1.52", "x1.57", "x1.61", "x1.65", "x1.7"],
        }
    },
    "Vulcan Stance":{
        "Usage": "Active (Legs)",
        "Unlock": "ATK Up (Lv 3)",
        "Description": "Place a buff on yourself for several turns, which increases damage dealt with normal attacks and makes them target all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "6", "6", "6", "6", "6", "10", "10", "10", "10", "10", "10"],
            "Damage Dealt↑": ["+10%", "+15%", "+20%", "+25%", "+30%", "+35%", "+40%", "+45%", "+50%", "+55%", "+60%", "+65%", "+70%", "+75%", "+90%"],
            "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
        }
    },
    "Double Strike":{
        "Usage": "Passive",
        "Unlock": "High Caliber (Lv 3), Vulcan Stance (Lv 3)",
        "Description": "Normal attacks have a chance to be performed a second time.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["22%", "25%", "28%", "31%", "34%", "37%", "40%", "43%", "46%", "50%"],
        }
    },
    "Take":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Take points. Higher yields have a lower chance of appearing.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Max. Yield": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
},
"Battle Items":{
    "Healing":{
        "Medica / Medica II / Medica III / Medica IV":{
            "Usage": "20 / 100 / 500 / 2.500 en",
            "Description": "Restores HP to one ally.",
            "Max Level": "4",
            "Data": {
                "HP Gain": ["50", "100", "200", "All"],
            }
        },
        "Soma / Somaprime":{
            "Usage": "700 / 1.500 en",
            "Description": "Restores HP to the whole party.",
            "Max Level": "2",
            "Data": {
                "HP Gain": ["80", "160"],
            }
        },
        "Amrita / Amrita II":{
            "Usage": "800 / 2.000 en",
            "Description": "Restores TP to one ally.",
            "Max Level": "2",
            "Data": {
                "TP Gain": ["50", "100"],
            }
        },
        "Hamao / Hamaoprime / Shilleka's SP Potion":{
            "Usage": "600 / 1.500 en",
            "Description": "Restores HP and TP to one ally.",
            "Max Level": "3",
            "Data": {
                "HP Gain": ["100", "200", "50"],
                "TP Gain": ["20", "40", "10"],
            }
        },
        "Nectar / Nectar II":{
            "Usage": "300 / 3.500 en",
            "Description": "Revives one dead ally.",
            "Max Level": "2",
            "Data": {
                "HP Gain": ["20", "All"],
            }
        },
    },
    "Status":{
        "Theriaca A / Theriaca B":{
            "Usage": "150 / 400 en",
            "Description": "Respectively removes binds or ailments from one ally.",
            "Max Level": "0",
            "Data": ""
        },
        "Metopon":{
            "Usage": "1.800 en",
            "Description": "Removes all buffs and debuffs on one enemy.",
            "Max Level": "0",
            "Data": ""
        },
        "Unihorn":{
            "Usage": "1.100 en",
            "Description": "Removes all buffs and debuffs on the party.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Power Up":{
        "Bravant":{
            "Usage": "400 en",
            "Description": "Places a buff on one ally for 5 turns, which increases physical damage dealt.",
            "Max Level": "1",
            "Data": {
                "Damage Dealt↑": ["+30%"],
            }
        },
        "Stonard":{
            "Usage": "400 en",
            "Description": "Places a buff on one ally for 5 turns, which decreases physical damage taken.",
            "Max Level": "1",
            "Data": {
                "Damage Taken↓": ["-30%"],
            }
        },
        "Axcela":{
            "Usage": "1.200 en",
            "Description": "Restores the Boost Gauge of one ally.",
            "Max Level": "1",
            "Data": {
                "Boost Gain": ["10"],
            }
        },
        "Blaze/Freeze/Shock Oil":{
            "Usage": "150 en",
            "Description": "Places a buff on one ally for 5 turns, which imbues their weapon with Fire/Ice/Volt damage.",
            "Max Level": "0",
            "Data": ""
        },
        "Heat/Chill/Spark Mist":{
            "Usage": "1.000 en",
            "Description": "Places a buff on all allies for 5 turns, which increases resistance to Fire/Ice/Volt.",
            "Max Level": "1",
            "Data": {
                "Resistance↑": ["+50%"],
            }
        },
        "All Mist":{
            "Usage": "2.000 en",
            "Description": "Places a buff on all allies for 5 turns, which increases resistance to Fire, Ice and Volt.",
            "Max Level": "1",
            "Data": {
                "Resistance↑": ["+20%"],
            }
        },
    },
    "Attack (TEC)":{
        "Fire/Ice/Volt Talisman":{
            "Usage": "150 en",
            "Description": "Deals ranged Fire/Ice/Volt damage to one enemy.",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["180%"],
                "Action Speed": ["90%"],
            }
        },
        "Flame/Frost/Storm Talisman":{
            "Usage": "1.000 en",
            "Description": "Deals ranged Fire/Ice/Volt damage to all enemies.",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["220%"],
                "Action Speed": ["90%"],
            }
        },
    },
    "Infliction (LUC)":{
        "Blind/Poison/Nerve/Confuse/Curse/Sleep Gas":{
            "Usage": "250 / 950 / 250 / 450 / 1.250 / 650 en",
            "Description": "Respectively attempts to inflict Blind, Poison, Paralysis, Panic, Curse or Sleep on all enemies.",
            "Max Level": "1",
            "Data": {
                "Infliction Chance": ["50%"],
                "Poison Damage": ["50"],
                "Action Speed": ["80%"],
            }
        },
        "Tangler: Head/Arms/Legs":{
            "Usage": "400 en",
            "Description": "Respectively attempts to inflict Head Bind, Arm Bind or Leg Bind on all enemies.",
            "Max Level": "1",
            "Data": {
                "Infliction Chance": ["50%"],
                "Action Speed": ["80%"],
            }
        },
    },
    "Action Cancel":{
        "Flash Bomb":{
            "Usage": "20 en",
            "Description": "Stuns FOEs outside the battle that are chasing you, which prevents them from moving for 1 turn.",
            "Max Level": "0",
            "Data": ""
        },
        "Sonic Bomb":{
            "Usage": "100 en",
            "Description": "Cancels the action of all enemies that are in a charge state.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Rewards":{
        "Formaldehyde":{
            "Usage": "3.000 en",
            "Description": "Until the end of turn, enemies killed will drop all their materials regardless of conditions.",
            "Max Level": "0",
            "Data": ""
        },
        "Divine Gift":{
            "Usage": "2.100 en",
            "Description": "Increases EXP earned this battle. (Repeated uses don't stack)",
            "Max Level": "1",
            "Data": {
                "EXP Gain↑": ["+40%"],
            }
        },
    },
    "Grimoires":{
        "Lucky Scarab":{
            "Usage": "700 en",
            "Description": "If used during a Grimoire chance, grants 100% chance to create a Grimoire Stone.",
            "Max Level": "0",
            "Data": ""
        },
        "Hunting Horn":{
            "Usage": "2.500 en",
            "Description": "Grants a chance to create a Grimoire Stone.",
            "Max Level": "0",
            "Data": ""
        },
        "Four-Leaf Clover":{
            "Usage": "10.000 en",
            "Description": "If you create a Grimoire Stone this turn, increase the chance of it being high level.",
            "Max Level": "0",
            "Data": ""
        },
    },
},
"Guildkeeper Effects":{
    "Rosa (HP and TP)":{
        "Regenurtica":{
            "Usage": "10 en",
            "Description": "Restores HP to the whole party at the end of each turn. Healing is based on each target's Max HP, plus a random flat value. (Affected by Heal Mastery)",

            "Max Level": "1",
            "Data": {
                "HP Gain (Max HP)": ["8%"],
                "HP Gain (Random)": ["0~5"],
            }
        },
        "Gingerlife":{
            "Usage": "50 en",
            "Description": "Increases the party's base Max HP. (Cannot make HP go over 999)",

            "Max Level": "1",
            "Data": {
                "Max HP↑": ["+30%"],
            }
        },
        "Amalawake":{
            "Usage": "50 en",
            "Description": "Restores TP to the whole party at the end of each turn. Healing is based on each target's Max TP, plus a random flat value.",

            "Max Level": "1",
            "Data": {
                "TP Gain (Max TP)": ["1%"],
                "TP Gain (Random)": ["0~3"],
            }
        },
        "Echinaceup":{
            "Usage": "50 en",
            "Description": "Increases the party's base Max TP.",

            "Max Level": "1",
            "Data": {
                "Max TP↑": ["+30%"],
            }
        },
        "Elderevenge":{
            "Usage": "300 en",
            "Description": "Party members will recover HP and TP based on their damage dealt.",

            "Max Level": "1",
            "Data": {
                "HP Drain": ["5%"],
                "TP Drain": ["1%"],
            }
        },
    },
    "Austin (Battle Protections)":{
        "Fallback Plan":{
            "Usage": "100 en",
            "Description": "At the start of battle places a buff on the party for 5 turns, which nullifies one ailment infliction received. (Buff is consumed when activated)",

            "Max Level": "0",
            "Data": ""
        },
        "Bracing Plan":{
            "Usage": "200 en",
            "Description": "At the start of battle places a buff on the party for 5 turns, which restores HP after receiving a hit. (Buff is consumed when activated)",

            "Max Level": "1",
            "Data": {
                "HP Gain (Max HP)": ["75%"],
            }
        },
        "Escape Plan":{
            "Usage": "100 en",
            "Description": "At the start of battle places a buff on the party for 5 turns, which nullifies one bind infliction received. (Buff is consumed when activated)",

            "Max Level": "0",
            "Data": ""
        },
        "Revenge Plan":{
            "Usage": "200 en",
            "Description": "At the start of battle places a buff on the party for 5 turns, which triggers a weapon-based counterattack after receiving a hit. (Buff is consumed when activated)",

            "Max Level": "1",
            "Data": {
                "Attack Power": ["100%"],
            }
        },
        "Revival Plan":{
            "Usage": "600 en",
            "Description": "If the whole party dies in battle, all members will revive with 1 HP. (Only once)",

            "Max Level": "0",
            "Data": ""
        },
    },
},
}

//End of database

var descriptions = {
    "Landsknecht":  "Frontline warriors boasting high strength and durability.",
    "Survivalist":  "Archers with great agility and exploration knowledge.",
    "Protector":    "Sturdy knights that defend and safeguard their allies.",
    "Dark Hunter":  "Ruthless fighters that immobilize then finish off enemies.",
    "Medic":        "Healers that keep the party safe and in good condition.",
    "Alchemist":    "Elemental magicians that exploit the enemy's weakness.",
    "Troubadour":   "Musicians that grant various enhancements to the party.",
    "Ronin":        "Bold warriors that gain strength from different stances.",
    "Hexer":        "Sorcerers that can weaken, disable and control enemies.",
    "Highlander":   "A Spearman that turns life force into power and blessings.",
    "Gunner":       "A versatile Gun user that can attack, immobilize and heal.",

    "Battle Items": "Consumable items that can be used in battle.",
    "Guildkeeper Effects": "Enhancements granted by guildkeepers.",
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
        if (current_skill.hasOwnProperty("Natural Level")){
            if (i > current_skill["Natural Level"]){
                level.style.backgroundColor = "#ffa44a"
            }
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
            effect_value.style.padding = "2px"
            effect_value.innerText = current_effect[value]
            effect_row.appendChild(effect_value)
            latest = effect_value
        }
    }
}

function populate_list(class_name){
    var skill_list = document.getElementById("skill_list")
    //Clear list and reset class name and description
    reset_list(skill_list, class_name)

    //Fill in the skill entries
    var current_class = data[class_name]
    for (const skill in current_class){
        add_skill_entry(skill_list, current_class, skill)
    }
    final_line = document.createElement("p")
    skill_list.appendChild(final_line)
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
populate_list("Landsknecht")
