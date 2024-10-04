var data = {
"Landsknecht":{
    "Sword Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if a Sword is equipped. (Automatically unlocks other skills that require this one)",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 5)",
        "Description": "Sword: Deal melee Cut damage to one enemy. If it misses, attempt to inflict Blind on all enemies.",
        "Starter": "0",
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
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["16", "16", "16", "16", "21", "21", "21", "21", "21", "26", "26", "26", "26", "26", "26"],
            "Attack Power": ["200%", "210%", "220%", "230%", "250%", "260%", "270%", "280%", "290%", "310%", "320%", "330%", "340%", "350%", "370%"],
            "Min. Hits": ["2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "4"],
            "Max. Hits": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
        }
    },
    "Axe Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if an Axe is equipped. (Automatically unlocks other skills that require this one. Stacks with its own Grimoire)",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Description": "Normal attacks have a chance to hit a second time.",
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
        "Description": "Sword/Axe: Prepare to follow up after your allies' Fire attacks this turn, dealing Cut/Bash+Fire damage to the same targets. Activation chance starts at 100% and goes down with each follow up.",
        "Starter": "1",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "12", "12", "17", "17", "17", "17", "17", "22", "22", "22", "22", "22", "22"],
            "Attack Power": ["130%", "137%", "144%", "151%", "151%", "159%", "166%", "173%", "180%", "180%", "188%", "195%", "202%", "210%", "230%"],
            "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "6"],
            "Chance Fadeout": ["35%", "35%", "35%", "35%", "25%", "25%", "25%", "25%", "25%", "15%", "15%", "15%", "15%", "15%", "10%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
        }
    },
    "Ice Chaser":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Tornado (Lv 5), Stunning Smash (Lv 5)",
        "Description": "Sword/Axe: Prepare to follow up after your allies' Ice attacks this turn, dealing Cut/Bash+Ice damage to the same targets. Activation chance starts at 100% and goes down with each follow up.",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "12", "12", "17", "17", "17", "17", "17", "22", "22", "22", "22", "22", "22"],
            "Attack Power": ["130%", "137%", "144%", "151%", "151%", "159%", "166%", "173%", "180%", "180%", "188%", "195%", "202%", "210%", "230%"],
            "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "6"],
            "Chance Fadeout": ["35%", "35%", "35%", "35%", "25%", "25%", "25%", "25%", "25%", "15%", "15%", "15%", "15%", "15%", "10%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
        }
    },
    "Volt Chaser":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Tornado (Lv 5), Stunning Smash (Lv 5)",
        "Description": "Sword/Axe: Prepare to follow up after your allies' Volt attacks this turn, dealing Cut/Bash+Volt damage to the same targets. Activation chance starts at 100% and goes down with each follow up.",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "12", "12", "17", "17", "17", "17", "17", "22", "22", "22", "22", "22", "22"],
            "Attack Power": ["130%", "137%", "144%", "151%", "151%", "159%", "166%", "173%", "180%", "180%", "188%", "195%", "202%", "210%", "230%"],
            "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "6"],
            "Chance Fadeout": ["35%", "35%", "35%", "35%", "25%", "25%", "25%", "25%", "25%", "15%", "15%", "15%", "15%", "15%", "10%"],
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Description": "Enter a charge state for next turn, which gives your allies a chance to follow up on your attacks, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each activation. If an ally's follow up uses a different damage type than the attack that triggered it, damage dealt is increased but activation chance goes down faster.",
        "Starter": "0",
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
        "Description": "Obtain additional materials when gathering from Mine points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "1",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
},
"Survivalist":{
    "Bow Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if a Bow is equipped. (Automatically unlocks other skills that require this one. Stacks with its own Grimoire)",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Description": "Bow: Prepare an attack that will hit in 2 more turns, at the start of the turn. Deals ranged Stab damage to one enemy, with a chance to inflict Stun.",
        "Starter": "0",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["25%", "30%", "35%", "40%", "45%", "49%", "53%", "57%", "61%", "65%"],
        }
    },
    "Quick Step":{
        "Usage": "Active (Legs)",
        "Unlock": "AGI Up (Lv 10)",
        "Description": "Chance to make target ally act at the start of this turn.",
        "Starter": "0",
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
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "6"],
            "Square Side": ["23", "23", "23", "23", "27", "27", "27", "27", "27", "31"],
            "Duration": ["16", "18", "20", "22", "30", "32", "34", "36", "38", "50"],
        }
    },
    "Awareness":{
        "Usage": "Passive",
        "Unlock": "Predator (Lv 3)",
        "Description": "Chance to nullify enemy ambushes.",
        "Starter": "0",
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
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "6", "6", "9", "9", "9", "9", "9", "12"],
            "Encounters↓": ["x0.8", "x0.77", "x0.74", "x0.71", "x0.57", "x0.54", "x0.51", "x0.48", "x0.45", "x0.3"],
            "Duration": ["30", "30", "30", "30", "60", "60", "60", "60", "60", "100"],
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
        "Starter": "0",
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
        "Starter": "0",
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
        "Description": "Obtain additional materials when gathering from Take points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "1",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
    "Chop":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Chop points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "0",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Mine points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "0",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
},
"Protector":{
    "Shield Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decrease physical damage taken if a Shield is equipped. (Automatically unlocks other skills that require this one)",
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Rear Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Defender":{
        "Usage": "Active (Head)",
        "Unlock": "Front/Read Guard (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Fire Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Ice Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Volt Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Shield Smite":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Shield Mastery (Lv 7)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Shield Rush":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Shield Smite (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Bravery's Gift":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 10)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Parry":{
        "Usage": "Active (Arms)",
        "Unlock": "Provoke (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Fortify":{
        "Usage": "Active (Head)",
        "Unlock": "DEF Up (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Aegis":{
        "Usage": "Passive",
        "Unlock": "DEF Up (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "En Garde":{
        "Usage": "Passive",
        "Unlock": "Fortify (Lv 5), Aegis (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Flee":{
        "Usage": "Active (Legs)",
        "Unlock": "Safe Passage (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Cure":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Party Cure":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Prayer":{
        "Usage": "Passive",
        "Unlock": "Cure (Lv 5), Party Cure (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
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
        "Description": "Obtain additional materials when gathering from Mine points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "1",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
},
"Dark Hunter":{
    "Whip Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if a Whip is equipped. (Automatically unlocks other skills that require this one. Stacks with its own Grimoire)",
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Shackles":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whip Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Cuffs":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whip Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Ecstasy":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gag (Lv 7), Shackles (Lv 7), Cuffs (Lv 7)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Viper":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whip Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Climax":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Whip Mastery (Lv 10), Viper (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Sword Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if a Sword is equipped. (Automatically unlocks other skills that require this one)",
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Nerve Bite":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Mirage Bite":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Soul Liberator":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Hypno/Nerve/Mirage Bite (Lv 7)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Drain Bite":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Catastrophe":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 10), Drain Bite (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Wrath's Might":{
        "Usage": "Passive",
        "Unlock": "ATK Up (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Bait":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Boost Up (Lv 3), Wrath's Might (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Shadow Veil":{
        "Usage": "Active (Legs)",
        "Unlock": "TP Up (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Dark Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Bind Heart (Lv 2), Shadow Veil (Lv 2)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": "Obtain additional materials when gathering from Take points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "1",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
},
"Medic":{
    "Heal Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases the HP restored by healing skills used. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+3%", "+6%", "+9%", "+12%", "+14%", "+16%", "+18%", "+20%", "+22%", "+25%"],
        }
    },
    "Cure":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Heal Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Salve":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Cure (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Unbind":{
        "Usage": "Active (Head)",
        "Unlock": "Heal Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Refresh":{
        "Usage": "Active (Head)",
        "Unlock": "Heal Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Immunize":{
        "Usage": "Active (Head)",
        "Unlock": "Unbind (Lv 5), Refresh (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Regenerate":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Heal Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Delayed Heal":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Regenerate (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Heal":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Heal Mastery (Lv 7)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Revive":{
        "Usage": "Active (Head)",
        "Unlock": "Heal Mastery (Lv 10)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "CPR":{
        "Usage": "Active (Head)",
        "Unlock": "Revive (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Usage": "Active (Head, LUC)",
        "Unlock": "HP Up (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Toxin Injection":{
        "Usage": "Active (Arms, LUC)",
        "Unlock": "HP Up (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Curare":{
        "Usage": "Active (Arms, LUC)",
        "Unlock": "HP Up (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Anaesthetic":{
        "Usage": "Active (Arms, LUC)",
        "Unlock": "HP Up (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Diagnosis":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Clear Strike":{
        "Usage": "Active (Arms, TEC)",
        "Unlock": "HP Up (Lv 10)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Scavenge":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Focus":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 0)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Chop":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Chop points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "1",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
},
"Alchemist":{
    "Formula Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases elemental damage dealt. (Automatically unlocks other skills that require this one. Stacks with its own Grimoire)",
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Inferno Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Fire Formula (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Ice Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Cocytus Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Ice Formula (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Volt Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Thor Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Volt Formula (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Flame Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Freeze Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Spark Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Dilution":{
        "Usage": "Active (Head)",
        "Unlock": "Flame/Freeze/Spark Formula (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Analysis":{
        "Usage": "Active (Head)",
        "Unlock": "Formula Mastery (Lv 7)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Pain Formula":{
        "Usage": "Active (Arms, TEC)",
        "Unlock": "Formula Mastery (Lv 10)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Firelight":{
        "Usage": "Passive (TEC)",
        "Unlock": "Pain Formula (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Light Formula":{
        "Usage": "Active (Arms)",
        "Unlock": "Firelight (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Light Tincture":{
        "Usage": "Active (Arms)",
        "Unlock": "Firelight (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Flee":{
        "Usage": "Active (Legs)",
        "Unlock": "Return Formula (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Alchemy":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 2)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Scavenge":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Sight Formula":{
        "Usage": "Active (Field)",
        "Unlock": "TP Up (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Focus":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 10)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Chop":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Chop points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "1",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
},
"Troubadour":{
    "Song Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Warrior Song":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Shelter Song":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Holy Gift":{
        "Usage": "Passive",
        "Unlock": "Warrior/Shelter Song (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Skanda Song":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Insight Melody":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Recovery Aria":{
        "Usage": "Active (Head)",
        "Unlock": "Skanda Song (Lv 5), Insight Melody (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Fire Prelude":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Flame Fantasia":{
        "Usage": "Active (Head)",
        "Unlock": "Fire Prelude (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Ice Prelude":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Frost Fantasia":{
        "Usage": "Active (Head)",
        "Unlock": "Ice Prelude (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Volt Prelude":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Shock Fantasia":{
        "Usage": "Active (Head)",
        "Unlock": "Volt Prelude (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Echoing Rondo":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 7)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Healing Lullaby":{
        "Usage": "Active (Head)",
        "Unlock": "Echoing Rondo (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Eerie Chorus":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 10)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Peace Ballad":{
        "Usage": "Active (Head)",
        "Unlock": "Eerie Chorus (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Taboo Rondo":{
        "Usage": "Active (Head)",
        "Unlock": "Healing Lullaby (Lv 5), Peace Ballad (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Restful Tune":{
        "Usage": "Active (Field)",
        "Unlock": "HP Up (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Barbaric March":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 10)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": "Obtain additional materials when gathering from Take points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "1",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
},
"Ronin":{
    "Katana Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if a Katana is equipped. (Automatically unlocks other skills that require this one. Stacks with its own Grimoire)",
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Perfect Chaser":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Slantwise Cut (Lv 7)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Upper Stance":{
        "Usage": "Active (No Parts)",
        "Unlock": "Katana Mastery (Lv 5)",
        "Description": ".",
        "Starter": "1",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Horse Slash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Upper Stance (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Flame Grater":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Horse Slash (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Swallow Strike":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Upper Stance (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Clear Stance":{
        "Usage": "Active (No Parts)",
        "Unlock": "Katana Mastery (Lv 5)",
        "Description": ".",
        "Starter": "1",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Razor Dodge":{
        "Usage": "Active (Legs)",
        "Unlock": "Clear Stance (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Lightning Stab":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Razor Dodge (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Arm Strike":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Clear Stance (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Drawing Stance":{
        "Usage": "Active (No Parts)",
        "Unlock": "Katana Mastery (Lv 5)",
        "Description": ".",
        "Starter": "1",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Beheading Cut":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Drawing Stance (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Frigid Slash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Beheading Cut (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Charging Slash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Drawing Stance (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Peerless Stance":{
        "Usage": "Active (Arms)",
        "Unlock": "Katana Mastery (Lv 10)",
        "Description": ".",
        "Starter": "1",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Severing Slash":{
        "Usage": "Passive",
        "Unlock": "Crit Up (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Usage": "Active (Head)",
        "Unlock": "TP Up (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Mine points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "1",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
},
"Hexer":{
    "Curse Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Sapping Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Curse Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Leaden Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Sapping Curse (Lv 2)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Frailty Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Curse Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Deceit Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Frailty Curse (Lv 2)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Revenge Curse":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Leaden Curse (Lv 5), Deceit Curse (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Blinding Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Madness Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Torpor Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Corrupt Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Blinding Curse (Lv 2), Madness Curse (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Stoning Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Madness Curse (Lv 3), Torpor Curse (Lv 2)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Cranial Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Abdomen Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Immobile Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Evil Eye":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 10)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Luring Whisper":{
        "Usage": "Active (Field)",
        "Unlock": "Evil Eye (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Muting Word":{
        "Usage": "Active (Head)",
        "Unlock": "Evil Eye (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Conflict Word":{
        "Usage": "Active (Head)",
        "Unlock": "Evil Eye (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Suicide Word":{
        "Usage": "Active (Head)",
        "Unlock": "Evil Eye (Lv 10)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
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
        "Description": "Obtain additional materials when gathering from Chop points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "1",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
},
"Highlander":{
    "Spear Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if a Spear is equipped. (Automatically unlocks other skills that require this one. Stacks with its own Grimoire)",
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Draining Thrust":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 2)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Draining Burst":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Draining Thrust (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Legion Thrust":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 2)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Legion Burst":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Legion Thrust (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Head Pierce":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Spear Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Spear Assist":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Delayed Charge":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 10)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Cross Charge":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Delayed Charge (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Bloody Offense":{
        "Usage": "Active (Head)",
        "Unlock": "ATK Up (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Bloodlust":{
        "Usage": "Passive",
        "Unlock": "Turning Tide (Lv 3), Bloody Offense (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Stigmata":{
        "Usage": "Active (No Parts, LUC)",
        "Unlock": "ATK Up (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Blood Fortune":{
        "Usage": "Active (Head)",
        "Unlock": "DEF Up (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Allied Bonds":{
        "Usage": "Passive",
        "Unlock": "Battle Instinct (Lv 3), Blood Fortune (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Spirit Shield":{
        "Usage": "Active (Head)",
        "Unlock": "DEF Up (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Black Sabbath":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 10)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Mine points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "1",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
},
"Gunner":{
    "Gun Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt if a Gun is equipped. (Automatically unlocks other skills that require this one. Stacks with its own Grimoire)",
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Arm Snipe":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Gun Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Leg Snipe":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Gun Mastery (Lv 1)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Fire Rounds":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gun Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Charged Fire":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Fire Rounds (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Ice Rounds":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gun Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Charged Ice":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Ice Rounds (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Volt Rounds":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gun Mastery (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Charged Volt":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Volt Rounds (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Charged Shot":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gun Mastery (Lv 5)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Penetrator":{
        "Usage": "Passive",
        "Unlock": "Gun Mastery (Lv 7)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Ricochet":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gun Mastery (Lv 10)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Recharge":{
        "Usage": "Passive",
        "Unlock": "Charged Shot (Lv 3), Penetrator (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Action Boost":{
        "Usage": "Active (Legs)",
        "Unlock": "Penetrator (Lv 3), Rocochet (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Cover Fire":{
        "Usage": "Passive",
        "Unlock": "HP Up (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Shell Shock":{
        "Usage": "Active (Legs, LUC)",
        "Unlock": "Medic Bullet (Lv 3), Cover Fire (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
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
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Vulcan Stance":{
        "Usage": "Active (Legs)",
        "Unlock": "ATK Up (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Double Strike":{
        "Usage": "Passive",
        "Unlock": "High Caliber (Lv 3), Vulcan Stance (Lv 3)",
        "Description": ".",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Take":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Obtain additional materials when gathering from Take points. Maximum possible yield is equal to the skill level, however higher amounts have lower chance of appearing.",
        "Starter": "1",
        "Max Level": "0",
        "Natural Level": "0",
        "Data": ""
    },
},
"Battle Items":{
    "Healing":{
        "Medica / Medica II / Medica III / Medica IV":{
            "Usage": "20 / 100 / 500 / 2.500 en",
            "Description": "Restores HP to one ally.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "HP Gain": ["50", "100", "200", "All"],
            }
        },
        "Soma / Somaprime":{
            "Usage": "700 / 1.500 en",
            "Description": "Restores HP to the whole party.",
            "Starter": "0",
            "Max Level": "2",
            "Data": {
                "HP Gain": ["80", "160"],
            }
        },
        "Amrita / Amrita II":{
            "Usage": "800 / 2.000 en",
            "Description": "Restores TP to one ally.",
            "Starter": "0",
            "Max Level": "2",
            "Data": {
                "TP Gain": ["50", "100"],
            }
        },
        "Hamao / Hamaoprime / Shilleka's SP Potion":{
            "Usage": "600 / 1.500 en",
            "Description": "Restores HP and TP to one ally.",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "HP Gain": ["100", "200", "50"],
                "TP Gain": ["20", "40", "10"],
            }
        },
        "Nectar / Nectar II":{
            "Usage": "300 / 3.500 en",
            "Description": "Revives one dead ally.",
            "Starter": "0",
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
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Metopon":{
            "Usage": "1.800 en",
            "Description": "Removes all buffs and debuffs on one enemy.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Unihorn":{
            "Usage": "1.100 en",
            "Description": "Removes all buffs and debuffs on the party.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Power Up":{
        "Bravant":{
            "Usage": "400 en",
            "Description": "Places a buff on one ally for 5 turns, which increases physical damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Damage Dealt↑": ["+30%"],
            }
        },
        "Stonard":{
            "Usage": "400 en",
            "Description": "Places a buff on one ally for 5 turns, which decreases physical damage taken.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Damage Taken↓": ["-30%"],
            }
        },
        "Axcela":{
            "Usage": "1.200 en",
            "Description": "Restores the Boost Gauge of one ally.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Boost Gain": ["10"],
            }
        },
        "Blaze/Freeze/Shock Oil":{
            "Usage": "150 en",
            "Description": "Places a buff on one ally for 5 turns, which imbues their weapon with Fire/Ice/Volt damage.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Heat/Chill/Spark Mist":{
            "Usage": "1.000 en",
            "Description": "Places a buff on all allies for 5 turns, which increases resistance to Fire/Ice/Volt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Resistance↑": ["+50%"],
            }
        },
        "All Mist":{
            "Usage": "2.000 en",
            "Description": "Places a buff on all allies for 5 turns, which increases resistance to Fire, Ice and Volt.",
            "Starter": "0",
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
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["180%"],
                "Action Speed": ["90%"],
            }
        },
        "Flame/Frost/Storm Talisman":{
            "Usage": "1.000 en",
            "Description": "Deals ranged Fire/Ice/Volt damage to all enemies.",
            "Starter": "0",
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
            "Starter": "0",
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
            "Starter": "0",
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
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Sonic Bomb":{
            "Usage": "100 en",
            "Description": "Cancels the action of all enemies that are in a charge state.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Rewards":{
        "Formaldehyde":{
            "Usage": "3.000 en",
            "Description": "Until the end of turn, enemies killed will drop all their materials regardless of conditions.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Divine Gift":{
            "Usage": "2.100 en",
            "Description": "Increases EXP earned this battle. (Repeated uses don't stack)",
            "Starter": "0",
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
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Hunting Horn":{
            "Usage": "2.500 en",
            "Description": "Grants a chance to create a Grimoire Stone.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Four-Leaf Clover":{
            "Usage": "10.000 en",
            "Description": "If you create a Grimoire Stone this turn, increase the chance of it being high level.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
},
}

//End of database

var descriptions = {
    "Landsknecht": "Frontline warriors focused on strong physical offense.",
    "Survivalist": "Archers with great agility and exploration knowledge.",
    "Protector":   "Sturdy knights that keep the party safe from harm.",
    "Dark Hunter": "Ruthless fighters that immobilize then finish off enemies.",
    "Medic":       "Healers that effectively treat any injury or affliction.",
    "Alchemist":   "Elemental casters that strike the enemy's weakness.",
    "Troubadour":  "Musicians that grant buffs to bolster and energize allies.",
    "Ronin":       "Offense specialists who change stances to adapt to the situation.",
    "Hexer":       "Support casters that weaken, incapacitate and control the enemy.",
    "Highlander":  "A Spear user that sacrifices life force to perform powerful attacks.",
    "Gunner":      "A versatile Gun user that can provide damage, binding or healing.",

    "Battle Items": "Consumable items that can be used in battle.",
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

    for (const skill in current_class){
        var current_skill = current_class[skill]
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
        usage.innerText = current_skill["Usage"]

        if (current_skill.hasOwnProperty("Unlock")){
            usage.width = "30%"
            unlock = document.createElement("td")
            second_row.appendChild(unlock)
            unlock.innerText = "Unlock: "+current_skill["Unlock"]
        }
        
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
            if (current_skill.hasOwnProperty("Natural Level")){
                if (i > current_skill["Natural Level"]){
                    level.style.backgroundColor = "#ffa44a"
                }
            }
            
        }
        for (const effect in current_skill["Data"]){
            effect_row = document.createElement("tr")
            levels_table.appendChild(effect_row)

            effect_name = document.createElement("th")
            effect_name.innerText = effect
            effect_row.appendChild(effect_name)
            current_effect = current_skill["Data"][effect]
            var latest
            latest = current_effect
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
}

function populate_item(class_name){
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


            if (current_skill.hasOwnProperty("Usage")){
                second_row = document.createElement("tr")
                skill_table.appendChild(second_row)

                usage = document.createElement("td")
                second_row.appendChild(usage)
                usage.innerText = current_skill["Usage"]
            }
            
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

            if (current_skill.hasOwnProperty("Usage")){
                description = document.createElement("p")
                data_block.appendChild(description)
                description.innerHTML = current_skill["Description"]
            }

            levels_table = document.createElement("table")
            data_block.appendChild(levels_table)
            levels_table.classList.add("levels_table")
            levels_row = document.createElement("tr")
            levels_table.appendChild(levels_row)
            if (current_skill["Data"] !== ""){
                start_level = document.createElement("th")
                start_level.innerText = "Level"
                if (class_name == "Food Effects"){
                    start_level.innerText = "Name"
                }
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
                var latest
                latest = current_effect
                for (const value in current_effect){
                    if (current_effect[value] == latest.innerText) {
                        latest.colSpan = latest.colSpan+1
                        continue
                    }
                    effect_value = document.createElement("td")
                    effect_value.innerText = current_effect[value]
                    if (class_name == "Food Effects"){
                        effect_value.style.textAlign = "left"
                    }
                    effect_row.appendChild(effect_value)
                    latest = effect_value
                }
            }
        }
    }
}

populate("Landsknecht")



