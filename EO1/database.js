var data = {
"Landsknecht":{
    "Axes":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your weapon's ATK stat during Axe attacks.",
        "Starter": "0",
        "Max Level": "10",
        "Data": {
            "ATK Stat↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Crush":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Axes (Lv 1)",
        "Description": "Axe: Deal melee Bash damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["160%", "165%", "170%", "175%", "185%", "187%", "190%", "193%", "196%", "210%", "212%", "214%", "216%", "218%", "236%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "70%", "70%", "70%", "70%", "70%"]
        }
    },
    "Stunner":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Axes (Lv 3)",
        "Description": "Axe: Deal melee Bash damage to one enemy, with a chance to inflict Stun.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Infliction Rate": ["15%", "20%", "25%", "30%", "40%", "45%", "50%", "55%", "60%", "75%", "76%", "77%", "78%", "79%", "80%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["80%", "82%", "84%", "86%", "90%", "92%", "94%", "96%", "98%", "102%", "104%", "106%", "108%", "110%", "118%"]
        }
    },
    "Silencer":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Axes (Lv 7)",
        "Description": "Axe: Deal melee Bash damage to one enemy, with a chance to inflict Head Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Attack Power": ["130%", "131%", "132%", "133%", "134%", "135%", "136%", "137%", "138%", "140%", "141%", "142%", "143%", "144%", "150%"],
            "Infliction Rate": ["20%", "21%", "22%", "23%", "29%", "30%", "31%", "32%", "33%", "40%", "41%", "42%", "43%", "44%", "52%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "80%", "80%", "80%", "80%", "80%"]
        }
    },
    "Sword Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your weapon's ATK stat during Sword attacks.",
        "Starter": "0",
        "Max Level": "10",
        "Data": {
            "ATK Stat↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Cleaver":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": "Sword: Deal melee Cut damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Tornado":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 5)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with splash effect.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"],
            "Attack Power\n(Target)": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Attack Power\n(Adjacent)": ["100%", "102%", "104%", "106%", "118%", "120%", "122%", "124%", "126%", "140%", "142%", "144%", "146%", "148%", "164%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "2-Hit":{
        "Usage": "Passive",
        "Unlock": "Sword Mastery (Lv 5), Axes (Lv 5)",
        "Description": "Normal attacks have a chance to hit twice.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Activation Chance": ["10%", "11%", "12%", "13%", "16%", "17%", "18%", "19%", "20%", "23%"]
        }
    },
    "All Slash":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "2-Hit (Lv 3)",
        "Description": "Sword: Deal multiple hits of melee Cut damage to random enemies (max once each).",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Hits": ["2~3", "2~3", "2~3", "2~3", "3~4", "3~4", "3~4", "3~4", "3~4", "3~4", "3~4", "3~4", "3~4", "3~4", "4"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Blazer":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Sword Mastery (Lv 7), TP Up (Lv 3)",
        "Description": "Sword: Prepare to follow up after the first Fire attack by an ally this turn, dealing Fire damage to the same targets.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"]
        }
    },
    "Freezer":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Sword Mastery (Lv 7), TP Up (Lv 3)",
        "Description": "Sword: Prepare to follow up after the first Ice attack by an ally this turn, dealing Ice damage to the same targets.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"]
        }
    },
    "Shocker":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Sword Mastery (Lv 7), TP Up (Lv 3)",
        "Description": "Sword: Prepare to follow up after the first Volt attack by an ally this turn, dealing Volt damage to the same targets.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"]
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
            "Max HP↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
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
            "Max TP↑": ["+10%", "+12%", "+14%", "+16%", "+28%", "+30%", "+32%", "+34%", "+36%", "+50%"]
        }
    },
    "ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your STR stat during attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "STR Stat↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "War Cry":{
        "Usage": "Active (Head)",
        "Unlock": "ATK Up (Lv 3)",
        "Description": "Place a buff on yourself for 4 turns, which increases damage dealt but also increases damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            "Damage Dealt↑": ["x1.1", "x1.13", "x1.16", "x1.19", "x1.25", "x1.27", "x1.29", "x1.31", "x1.33", "x1.4", "x1.41", "x1.42", "x1.43", "x1.44", "x1.52"],
            "Damage Taken↑": ["x1.2", "x1.2", "x1.2", "x1.2", "x1.2", "x1.18", "x1.16", "x1.14", "x1.12", "x1.1", "x1.1", "x1.1", "x1.1", "x1.1", "x1.1"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"]
        }
    },
    "Hell Cry":{
        "Usage": "Active (Head)",
        "Unlock": "ATK Up (Lv 10)",
        "Description": "Place a buff on yourself for 4 turns, which increases damage dealt but also increases damage taken and decreases Max HP.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            "Damage Dealt↑": ["x1.2", "x1.23", "x1.26", "x1.29", "x1.35", "x1.37", "x1.39", "x1.41", "x1.43", "x1.5", "x1.51", "x1.52", "x1.53", "x1.54", "x1.62"],
            "Damage Taken↑": ["x1.2", "x1.2", "x1.2", "x1.2", "x1.2", "x1.18", "x1.16", "x1.14", "x1.12", "x1.1", "x1.1", "x1.1", "x1.1", "x1.1", "x1.1"],
            "Max HP↓": ["x0.8", "x0.8", "x0.8", "x0.8", "x0.8", "x0.82", "x0.84", "x0.86", "x0.88", "x0.9", "x0.9", "x0.9", "x0.9", "x0.9", "x0.9"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"]
        }
    },
    "DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases resistance to physical damage.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Taken↓": ["x0.95", "x0.94", "x0.93", "x0.92", "x0.91", "x0.9", "x0.89", "x0.88", "x0.87", "x0.85"]
        }
    },
    "Arm Heal":{
        "Usage": "Active (Head)",
        "Unlock": "DEF Up (Lv 1)",
        "Description": "Remove Arm Bind from yourself.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"]
        }
    },
    "Flee":{
        "Usage": "Active (Legs)",
        "Unlock": "DEF Up (Lv 5)",
        "Description": "Attempt to escape the battle at the start of the turn and teleport in front of the last stairs you used. If successful, spend part of the whole party's HP. (Does not work if this would teleport you to the current floor)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Success Rate": ["60%", "64%", "68%", "72%", "80%", "82%", "84%", "86%", "88%", "98%", "100%", "100%", "100%", "100%", "100%"],
            "HP Loss": ["50%", "50%", "50%", "50%", "50%", "45%", "40%", "35%", "30%", "25%", "20%", "15%", "10%", "5%", "0%"]
        }
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Mine points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Gather Attempts": ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
        }
    },
},
"Survivalist":{
    "Bows":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your weapon's ATK stat during Bow attacks.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "ATK Stat↑": ["+10%", "+12%", "+14%", "+16%", "+28%", "+30%", "+32%", "+34%", "+36%", "+50%"]
        }
    },
    "Trueshot":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Bows (Lv 1)",
        "Description": "Bow: Deal ranged Stab damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "70%", "70%", "70%", "70%", "70%"]
        }
    },
    "Disable":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Bows (Lv 3)",
        "Description": "Bow: Deal ranged Stab damage to one enemy, with a chance to inflict Leg Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Attack Power": ["130%", "131%", "132%", "133%", "134%", "135%", "136%", "137%", "138%", "140%", "141%", "142%", "143%", "144%", "150%"],
            "Infliction Rate": ["20%", "21%", "22%", "23%", "29%", "30%", "31%", "32%", "33%", "40%", "41%", "42%", "43%", "44%", "52%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "70%", "70%", "70%", "70%", "70%"]
        }
    },
    "Multihit":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Bows (Lv 5)",
        "Description": "Bow: Deal multiple hits of ranged Stab damage to random enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
            "Attack Power": ["100%", "103%", "106%", "109%", "115%", "116%", "117%", "118%", "119%", "125%", "126%", "127%", "128%", "129%", "135%"],
            "Hits": ["2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "70%", "70%", "70%", "70%", "70%"]
        }
    },
    "Apollon":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Bows (Lv 10)",
        "Description": "Bow: Prepare an attack that will activate in 2 more turns, at the start of the turn. On activation, deal ranged Stab damage to one enemy. At high levels it also has a chance to inflict Stun.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "9", "10", "11", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"],
            "Attack Power": ["300%", "310%", "320%", "330%", "390%", "400%", "410%", "420%", "430%", "500%", "510%", "520%", "530%", "540%", "620%"],
            "Infliction Rate": ["0%", "0%", "0%", "0%", "10%", "15%", "20%", "25%", "30%", "40%", "45%", "50%", "55%", "60%", "75%"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
        }
    },
    "AGI Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your AGI stat.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "AGI Stat↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Trickery":{
        "Usage": "Active (Legs)",
        "Unlock": "AGI Up (Lv 1)",
        "Description": "Place a debuff on all enemies for 4 turns, which decreases accuracy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            "Accuracy↓": ["-15%", "-17%", "-19%", "-21%", "-25%", "-26%", "-27%", "-28%", "-29%", "-30%", "-31%", "-32%", "-33%", "-34%", "-35%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Cloak":{
        "Usage": "Active (Legs)",
        "Unlock": "Trickery (Lv 3)",
        "Description": "Place a buff on yourself for 4 turns, which decreases enemy aggro.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            "Aggro↓": ["-50%", "-52%", "-54%", "-56%", "-60%", "-62%", "-64%", "-66%", "-68%", "-74%", "-76%", "-78%", "-80%", "-82%", "-90%"],
            "Action Speed": ["110%", "110%", "110%", "110%", "110%", "110%", "110%", "110%", "110%", "110%", "130%", "130%", "130%", "130%", "130%"]
        }
    },
    "Quicken":{
        "Usage": "Active (Legs)",
        "Unlock": "AGI Up (Lv 1)",
        "Description": "Place a buff on the whole party for 4 turns, which increases their AGI stat.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            "AGI Stat↑": ["+10%", "+15%", "+20%", "+25%", "+30%", "+31%", "+32%", "+33%", "+34%", "+40%", "+41%", "+42%", "+43%", "+44%", "+50%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Escape":{
        "Usage": "Active (Legs)",
        "Unlock": "Quicken (Lv 3)",
        "Description": "Place a buff on the whole party for 4 turns, which increases escape rates. At high levels it also increases their DEF stat.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Escape Rate↑": ["+20%", "+21%", "+22%", "+23%", "+29%", "+30%", "+31%", "+32%", "+33%", "+40%", "+41%", "+42%", "+43%", "+44%", "+47%"],
            "DEF Stat↑": ["+0%", "+0%", "+0%", "+0%", "+10%", "+11%", "+12%", "+13%", "+14%", "+19%", "+20%", "+21%", "+22%", "+23%", "+29%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "1st Turn":{
        "Usage": "Active (Legs)",
        "Unlock": "Trickery (Lv 3), Quicken (Lv 3)",
        "Description": "Empower one ally to make it act at the start of the turn. At low levels it has a chance to fail.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "1", "1", "1", "1", "1"],
            "Success Chance": ["70%", "75%", "80%", "85%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Ambush":{
        "Usage": "Passive",
        "Unlock": "AGI Up (Lv 3)",
        "Description": "Increases your chance of getting a preemptive strike.",
        "Max Level": "10",
        "Data": {
            "Preemptive↑": ["+16%", "+17%", "+18%", "+19%", "+22%", "+23%", "+24%", "+25%", "+26%", "+30%"]
        }
    },
    "Owl-Eye":{
        "Usage": "Active (Field)",
        "Unlock": "Ambush (Lv 1)",
        "Description": "Temporarily reveal FOEs within a certain radius.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "3", "3", "4", "4", "4", "4", "4", "4"],
            "Radius (Squares)": ["2", "2", "3", "3", "4", "4", "5", "5", "6", "6"],
            "Duration (Steps)": ["16", "18", "20", "22", "30", "32", "34", "36", "38", "50"]
        }
    },
    "Aware":{
        "Usage": "Passive",
        "Unlock": "Ambush (Lv 2)",
        "Description": "Chance to nullify enemy ambushes.",
        "Max Level": "10",
        "Data": {
            "Activation Chance": ["16%", "17%", "18%", "19%", "22%", "23%", "24%", "25%", "26%", "30%"]
        }
    },
    "Stalker":{
        "Usage": "Active (Field)",
        "Unlock": "Ambush (Lv 3)",
        "Description": "Temporarily decrease the enemy encounter rate.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "3", "3", "4", "4", "4", "4", "4", "4"],
            "Encounters↓": ["x0.7", "x0.7", "x0.7", "x0.7", "x0.7", "x0.65", "x0.65", "x0.6", "x0.6", "x0.5"],
            "Duration (Steps)": ["30", "35", "40", "45", "60", "65", "70", "75", "80", "100"]
        }
    },
    "1st Hit":{
        "Usage": "Passive",
        "Unlock": "AGI Up (Lv 5), 1st Turn (Lv 3)",
        "Description": "Chance to act at the start of the turn, disregarding turn speed.",
        "Max Level": "10",
        "Data": {
            "Activation Chance": ["16%", "17%", "18%", "19%", "22%", "23%", "24%", "25%", "26%", "30%"]
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
            "Max HP↑": ["+10%", "+12%", "+14%", "+16%", "+28%", "+30%", "+32%", "+34%", "+36%", "+50%"]
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
            "Max TP↑": ["+10%", "+12%", "+14%", "+16%", "+28%", "+30%", "+32%", "+34%", "+36%", "+50%"]
        }
    },
    "Chop":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Chop points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Gather Attempts": ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
        }
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Mine points a certain amount of times per day.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Gather Attempts": ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
        }
    },
    "Take":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Take points a certain amount of times per day.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Gather Attempts": ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
        }
    },
},
"Protector":{
    "Shield Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases resistance to elemental damage.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Damage Taken↓": ["x0.95", "x0.94", "x0.93", "x0.92", "x0.91", "x0.9", "x0.89", "x0.88", "x0.87", "x0.85"]
        }
    },
    "Front Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 1)",
        "Description": "Protect the front line for this turn, which decreases damage taken from the first attack that hits it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Damage Taken↓": ["-20%", "-23%", "-26%", "-29%", "-35%", "-36%", "-37%", "-38%", "-39%", "-40%", "-41%", "-42%", "-43%", "-44%", "-45%"]
        }
    },
    "Rear Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 1)",
        "Description": "Protect the back line for this turn, which decreases damage taken from the first attack that hits it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Damage Taken↓": ["-20%", "-23%", "-26%", "-29%", "-35%", "-36%", "-37%", "-38%", "-39%", "-40%", "-41%", "-42%", "-43%", "-44%", "-45%"]
        }
    },
    "Defender":{
        "Usage": "Active (Head)",
        "Unlock": "Front Guard (Lv 3), Rear Guard (Lv 3)",
        "Description": "Place a buff on the whole party for 4 turns, which decreases physical damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "9", "10", "11", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"],
            "Damage Taken↓": ["x0.8", "x0.77", "x0.74", "x0.71", "x0.68", "x0.67", "x0.66", "x0.65", "x0.65", "x0.64", "x0.63", "x0.62", "x0.61", "x0.6", "x0.59"],
            "Action Speed": ["80%", "82%", "84%", "86%", "90%", "92%", "94%", "96%", "98%", "102%", "104%", "106%", "108%", "110%", "118%"]
        }
    },
    "Fire Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 5), TP Up (Lv 3)",
        "Description": "Shield: Protect the whole party for this turn, which decreases damage taken from the first Fire attack that hits it. From level 6 onward it instead absorbs the damage that would've been dealt by the attack. (From level 5 onward it also nullifies secondary effects the attack)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"],
            "Damage Taken↓": ["x0.5", "x0.4", "x0.3", "x0.2", "x0", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"],
            "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "N/A", "2%", "4%", "6%", "8%", "10%", "12%", "14%", "16%", "18%", "20%"]
        }
    },
    "Ice Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 5), TP Up (Lv 3)",
        "Description": "Shield: Protect the whole party for this turn, which decreases damage taken from the first Ice attack that hits it. From level 6 onward it instead absorbs the damage that would've been dealt by the attack. (From level 5 onward it also nullifies secondary effects the attack)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"],
            "Damage Taken↓": ["x0.5", "x0.4", "x0.3", "x0.2", "x0", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"],
            "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "N/A", "2%", "4%", "6%", "8%", "10%", "12%", "14%", "16%", "18%", "20%"]
        }
    },
    "Volt Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 5), TP Up (Lv 3)",
        "Description": "Shield: Protect the whole party for this turn, which decreases damage taken from the first Volt attack that hits it. From level 6 onward it instead absorbs the damage that would've been dealt by the attack. (From level 5 onward it also nullifies secondary effects the attack)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"],
            "Damage Taken↓": ["x0.5", "x0.4", "x0.3", "x0.2", "x0", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"],
            "Damage Drain": ["N/A", "N/A", "N/A", "N/A", "N/A", "2%", "4%", "6%", "8%", "10%", "12%", "14%", "16%", "18%", "20%"]
        }
    },
    "Smite":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 10), Fortify (Lv 5)",
        "Description": "Shield: Deal melee Bash damage to one enemy. At high levels it also has a chance to inflict Arm Bind. (Your Shield's DEF is added to your ATK stat during damage calculation)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["210%", "215%", "220%", "225%", "235%", "237%", "240%", "243%", "246%", "260%", "262%", "264%", "266%", "268%", "286%"],
            "Infliction Rate": ["0%", "0%", "0%", "0%", "10%", "11%", "12%", "13%", "14%", "20%", "21%", "22%", "23%", "24%", "30%"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
        }
    },
    "DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases resistance to physical damage.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Taken↓": ["x0.95", "x0.94", "x0.93", "x0.92", "x0.91", "x0.9", "x0.89", "x0.88", "x0.87", "x0.85"]
        }
    },
    "Provoke":{
        "Usage": "Active (Head)",
        "Unlock": "DEF Up (Lv 1)",
        "Description": "Place a buff on yourself for 4 turns, which increases enemy aggro. At high levels it also decreases physical damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            "Aggro↑": ["+20%", "+25%", "+35%", "+50%", "+70%", "+95%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Damage Taken↓": ["N/A", "N/A", "N/A", "N/A", "N/A", "x0.9", "x0.89", "x0.88", "x0.87", "x0.85", "x0.84", "x0.83", "x0.82", "x0.81", "x0.78"],
            "Action Speed": ["80%", "82%", "84%", "86%", "90%", "92%", "94%", "96%", "98%", "102%", "104%", "106%", "108%", "110%", "118%"]
        }
    },
    "Fortify":{
        "Usage": "Active (Head)",
        "Unlock": "DEF Up (Lv 3), Shield Mastery (Lv 3)",
        "Description": "Place a buff on yourself for 4 turns, which decreases physical damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Damage Taken↓": ["x0.8", "x0.77", "x0.74", "x0.71", "x0.68", "x0.67", "x0.66", "x0.65", "x0.65", "x0.64", "x0.63", "x0.62", "x0.61", "x0.6", "x0.59"],
            "Action Speed": ["80%", "82%", "84%", "86%", "90%", "92%", "94%", "96%", "98%", "102%", "104%", "106%", "108%", "110%", "118%"]
        }
    },
    "Parry":{
        "Usage": "Active (Arms)",
        "Unlock": "DEF Up (Lv 3)",
        "Description": "Attempt to nullify the first physical attack that hits you this turn. At high levels it has a chance to remain active after each activation.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Success Rate": ["70%", "75%", "80%", "85%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            "Continue Rate": ["N/A", "N/A", "N/A", "N/A", "5%", "10%", "15%", "20%", "25%", "35%", "40%", "45%", "50%", "55%", "70%"]
        }
    },
    "Flee":{
        "Usage": "Active (Legs)",
        "Unlock": "DEF Up (Lv 3)",
        "Description": "Attempt to escape the battle at the start of the turn and teleport in front of the last stairs you used. If successful, spend part of the whole party's HP. (Does not work if this would teleport you to the current floor)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Success Rate": ["60%", "64%", "68%", "72%", "80%", "82%", "84%", "86%", "88%", "98%", "100%", "100%", "100%", "100%", "100%"],
            "HP Loss": ["50%", "50%", "50%", "50%", "50%", "45%", "40%", "35%", "30%", "25%", "20%", "15%", "10%", "5%", "0%"]
        }
    },
    "Stalker":{
        "Usage": "Active (Field)",
        "Unlock": "DEF Up (Lv 5)",
        "Description": "Temporarily decrease the enemy encounter rate.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "3", "3", "4", "4", "4", "4", "4", "4"],
            "Encounters↓": ["x0.7", "x0.7", "x0.7", "x0.7", "x0.7", "x0.65", "x0.65", "x0.6", "x0.6", "x0.5"],
            "Duration (Steps)": ["30", "35", "40", "45", "60", "65", "70", "75", "80", "100"]
        }
    },
    "Aegis":{
        "Usage": "Passive",
        "Unlock": "DEF Up (Lv 5)",
        "Description": "Chance to survive lethal damage with 1 HP.",
        "Max Level": "10",
        "Data": {
            "Activation Chance": ["20%", "21%", "22%", "23%", "29%", "30%", "31%", "32%", "33%", "40%"]
        }
    },
    "En Garde":{
        "Usage": "Passive",
        "Unlock": "DEF Up (Lv 7), Shield Mastery (Lv 7)",
        "Description": "Chance to automatically halve damage taken.",
        "Max Level": "10",
        "Data": {
            "Activation Chance": ["10%", "11%", "12%", "13%", "16%", "17%", "18%", "19%", "20%", "23%"]
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Max HP↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Cure":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 3)",
        "Description": "Restore HP to one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "HP Gain": ["20", "26", "32", "38", "50", "56", "62", "68", "74", "92", "98", "104", "110", "116", "140"],
            "Action Speed": ["70%", "72%", "74%", "76%", "80%", "82%", "84%", "86%", "88%", "92%", "94%", "96%", "98%", "100%", "108%"]
        }
    },
    "Cure II":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 5)",
        "Description": "Restore HP to one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"],
            "HP Gain": ["75", "81", "87", "93", "111", "117", "123", "129", "135", "159", "165", "171", "177", "183", "213"],
            "Action Speed": ["20%", "22%", "24%", "26%", "30%", "32%", "34%", "36%", "38%", "42%", "44%", "46%", "48%", "50%", "58%"]
        }
    },
    "TP Up":{
        "Usage": "Active",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Max TP↑": ["+10%", "+12%", "+14%", "+16%", "+28%", "+30%", "+32%", "+34%", "+36%", "+50%"]
        }
    },
    "Mine":{
        "Usage": "Active",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Mine points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Gather Attempts": ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
        }
    },
},
"Dark Hunter":{
    "Whips":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your weapon's ATK stat during Whip attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "ATK Stat↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Anaconda":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whips (Lv 1)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Poison.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["130%", "135%", "140%", "145%", "150%", "155%", "160%", "165%", "170%", "180%", "185%", "190%", "195%", "200%", "210%"],
            "Infliction Rate": ["50%", "51%", "52%", "53%", "59%", "60%", "61%", "62%", "63%", "70%", "71%", "72%", "73%", "74%", "82%"],
            "Poison Damage": ["11", "17", "23", "29", "39", "45", "51", "57", "63", "77", "79", "81", "83", "85", "103"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Gag":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whips (Lv 2)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Head Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Attack Power": ["130%", "135%", "140%", "145%", "150%", "155%", "160%", "165%", "170%", "180%", "185%", "190%", "195%", "200%", "210%"],
            "Infliction Rate": ["35%", "36%", "41%", "38%", "44%", "45%", "46%", "47%", "48%", "55%", "56%", "57%", "58%", "59%", "67%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Shackles":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whips (Lv 3)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Leg Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Attack Power": ["130%", "135%", "140%", "145%", "150%", "155%", "160%", "165%", "170%", "180%", "185%", "190%", "195%", "200%", "210%"],
            "Infliction Rate": ["35%", "36%", "41%", "38%", "44%", "45%", "46%", "47%", "48%", "55%", "56%", "57%", "58%", "59%", "67%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Cuffs":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whips (Lv 4)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Arm Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Attack Power": ["130%", "135%", "140%", "145%", "150%", "155%", "160%", "165%", "170%", "180%", "185%", "190%", "195%", "200%", "210%"],
            "Infliction Rate": ["35%", "36%", "41%", "38%", "44%", "45%", "46%", "47%", "48%", "55%", "56%", "57%", "58%", "59%", "67%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Ecstasy":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Whips (Lv 5), ATK Up (Lv 5)",
        "Description": "Whip: Deal melee Cut damage to one enemy. Stronger if the enemy has 3 binds.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "9", "10", "11", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"],
            "Attack Power\n(Normal)": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            "Attack Power\n(3 Binds)": ["500%", "510%", "520%", "530%", "590%", "600%", "610%", "620%", "630%", "700%", "710%", "720%", "730%", "740%", "820%"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
        }
    },
    "Climax":{
        "Usage": "Active (Arms)",
        "Unlock": "Whips (Lv 10)",
        "Description": "Inflict Instant Death on one enamy. Only works if the enemy is below a certain HP threshold.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"],
            "HP Threshold": ["5%", "6%", "7%", "8%", "14%", "15%", "16%", "17%", "18%", "25%", "26%", "27%", "28%", "29%", "30%"],
            "Accuracy": ["-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
        }
    },
    "Sword Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your weapon's ATK stat during Sword attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "ATK Stat↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Hypnos":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": "Sword: Deal melee Stab damage to one enemy, with a chance to inflict Sleep.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Infliction Rate": ["40%", "41%", "42%", "43%", "49%", "50%", "51%", "52%", "53%", "60%", "61%", "62%", "63%", "64%", "72%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Nerve":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 2)",
        "Description": "Sword: Deal melee Stab damage to one enemy, with a chance to inflict Paralysis.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Infliction Rate": ["40%", "41%", "42%", "43%", "49%", "50%", "51%", "52%", "53%", "60%", "61%", "62%", "63%", "64%", "72%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Mirage":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 3)",
        "Description": "Sword: Deal melee Stab damage to one enemy, with a chance to inflict Panic.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Infliction Rate": ["35%", "36%", "41%", "38%", "44%", "45%", "46%", "47%", "48%", "55%", "56%", "57%", "58%", "59%", "67%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Drain":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 4)",
        "Description": "Sword: Deal melee Stab damage to one enemy. Recover HP based on the damage dealt.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Damage Drain": ["50%", "52%", "54%", "56%", "68%", "70%", "72%", "74%", "76%", "100%", "102%", "104%", "106%", "108%", "134%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
        }
    },
    "Bait":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 5), ATK Up (Lv 5)",
        "Description": "Sword: Prepare to counterattack each time you or your adjacent allies take physical damage this turn, dealing melee Cut damage to the attacker. Stronger when countering attacks against yourself.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power\n(Self)": ["200%", "210%", "220%", "230%", "250%", "260%", "270%", "280%", "290%", "320%", "330%", "340%", "350%", "360%", "400%"],
            "Attack Power\n(Other)": ["70%", "70%", "70%", "70%", "100%", "110%", "120%", "130%", "140%", "160%", "170%", "180%", "190%", "200%", "230%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
        }
    },
    "Petrify":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 10)",
        "Description": "Sword: Deal melee Stab damage to one enemy, with a chance to inflict Petrify.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Infliction Rate": ["40%", "41%", "42%", "43%", "49%", "50%", "51%", "52%", "53%", "60%", "61%", "62%", "63%", "64%", "72%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Max HP↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Max TP↑": ["+10%", "+12%", "+14%", "+16%", "+28%", "+30%", "+32%", "+34%", "+36%", "+50%"]
        }
    },
    "Cloak":{
        "Usage": "Active (Legs)",
        "Unlock": "TP Up (Lv 3)",
        "Description": "Place a buff on yourself for 4 turns, which decreases enemy aggro.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            "Aggro↓": ["-50%", "-52%", "-54%", "-56%", "-60%", "-62%", "-64%", "-66%", "-68%", "-74%", "-76%", "-78%", "-80%", "-82%", "-90%"],
            "Action Speed": ["110%", "110%", "110%", "110%", "110%", "110%", "110%", "110%", "110%", "110%", "130%", "130%", "130%", "130%", "130%"]
        }
    },
    "ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your STR stat during attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "STR Stat↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Boost Up":{
        "Usage": "Passive",
        "Unlock": "ATK Up (Lv 3)",
        "Description": "Increases Boost point gains.",
        "Max Level": "10",
        "Data": {
            "Boost Gain↑": ["1", "1", "2", "2", "3", "3", "4", "4", "5", "6"]
        }
    },
    "Fury":{
        "Usage": "Passive",
        "Unlock": "ATK Up (Lv 5)",
        "Description": "Increases your STR stat during attacks if HP is below a certain threshold.",
        "Max Level": "10",
        "Data": {
            "HP Threshold": ["30%", "30%", "30%", "30%", "30%", "34%", "38%", "42%", "46%", "50%"],
            "STR Stat↑": ["+10%", "+15%", "+20%", "+25%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"]
        }
    },
    "Take":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Take points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Gather Attempts": ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
        }
    },
},
"Medic":{
    "Healer":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases the effect of healing skills used. (Does not affect percentage healing)",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Healing↑": ["+22%", "+28%", "+34%", "+40%", "+60%", "+66%", "+72%", "+78%", "+84%", "+110%"]
        }
    },
    "Cure":{
        "Usage": "Active (Head)",
        "Unlock": "Healer (Lv 1)",
        "Description": "Restore HP to one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "HP Gain": ["15", "20", "25", "30", "40", "45", "50", "55", "60", "75", "80", "85", "90", "95", "115"],
            "Action Speed": ["70%", "72%", "74%", "76%", "80%", "82%", "84%", "86%", "88%", "92%", "94%", "96%", "98%", "100%", "108%"]
        }
    },
    "Patch Up":{
        "Usage": "Passive",
        "Unlock": "Healer (Lv 2)",
        "Description": "Restore HP to the whole party after each battle.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "HP Gain": ["3%", "4%", "5%", "6%", "8%", "9%", "10%", "11%", "12%", "15%"]
        }
    },
    "Unbind":{
        "Usage": "Active (Head)",
        "Unlock": "Healer (Lv 3)",
        "Description": "Remove binds from one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
            "Binds Removed": ["1", "1", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Salve":{
        "Usage": "Active (Head)",
        "Unlock": "Healer (Lv 3), Cure (Lv 3)",
        "Description": "Restore HP to the whole party.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
            "HP Gain": ["20", "25", "30", "35", "45", "50", "55", "60", "75", "80", "85", "90", "95", "100", "120"],
            "Action Speed": ["70%", "72%", "74%", "76%", "80%", "82%", "84%", "86%", "88%", "92%", "94%", "96%", "98%", "100%", "108%"]
        }
    },
    "Immunize":{
        "Usage": "Active (Head)",
        "Unlock": "Salve (Lv 3)",
        "Description": "Place a buff on the whole party for 4 turns, which decreases physical/elemental damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"],
            "Damage Taken↓": ["x0.85", "x0.8", "x0.75", "x0.7", "x0.65", "x0.6", "x0.55", "x0.5", "x0.45", "x0.4", "x0.35", "x0.3", "x0.25", "x0.2", "x0.15"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Cure II":{
        "Usage": "Active (Head)",
        "Unlock": "Healer (Lv 3)",
        "Description": "Restore HP to one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"],
            "HP Gain": ["60", "65", "70", "75", "90", "95", "100", "105", "110", "130", "135", "140", "145", "150", "175"],
            "Action Speed": ["20%", "22%", "24%", "26%", "30%", "32%", "34%", "36%", "38%", "42%", "44%", "46%", "48%", "50%", "58%"]
        }
    },
    "Salve II":{
        "Usage": "Active (Head)",
        "Unlock": "Healer (Lv 5), Cure II (Lv 3)",
        "Description": "Restore HP to the whole party.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["16", "17", "18", "19", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"],
            "HP Gain": ["75", "82", "89", "96", "120", "127", "134", "141", "148", "180", "187", "194", "201", "208", "1000"],
            "Action Speed": ["20%", "22%", "24%", "26%", "30%", "32%", "34%", "36%", "38%", "42%", "44%", "46%", "48%", "50%", "58%"]
        }
    },
    "CPR":{
        "Usage": "Active (Head)",
        "Unlock": "Salve II (Lv 5), Immunize (Lv 3)",
        "Description": "Place a buff on the whole party for 4 turns, which grants a chance to survive lethal damage with 1 HP.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["16", "17", "18", "19", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"],
            "Activation Chance": ["30%", "31%", "32%", "33%", "39%", "40%", "41%", "42%", "43%", "50%", "51%", "52%", "53%", "54%", "62%"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Regen":{
        "Usage": "Active (Head)",
        "Unlock": "Healer (Lv 5), Cure (Lv 5)",
        "Description": "Place a buff on one ally for 4 turns, which restores HP at the end of each turn.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "HP Gain": ["5%", "6%", "7%", "8%", "10%", "11%", "12%", "13%", "14%", "16%", "17%", "18%", "19%", "20%", "22%"],
            "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "70%", "70%", "70%", "70%", "70%"]
        }
    },
    "Refresh":{
        "Usage": "Active (Head)",
        "Unlock": "Healer (Lv 5)",
        "Description": "Remove ailments from the whole party. Each skill level expands the list of curable ailments.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
            "Curable": ["+Blind", "+Paralysis", "+Panic", "+Sleep", "+Poison", "+Curse", "+Fear", "+Petrify", "All", "All", "All", "All", "All", "All", "All"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Cure III":{
        "Usage": "Active (Head)",
        "Unlock": "Healer (Lv 5)",
        "Description": "Restore HP to one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["20", "19", "18", "17", "15", "14", "13", "12", "11", "10", "10", "10", "10", "10", "10"],
            "HP Gain": ["500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500", "500"],
            "Action Speed": ["5%", "8%", "11%", "14%", "20%", "23%", "26%", "29%", "32%", "40%", "43%", "46%", "49%", "52%", "62%"]
        }
    },
    "Revive":{
        "Usage": "Active (Head)",
        "Unlock": "Healer (Lv 7), Cure III (Lv 3)",
        "Description": "Revive one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"],
            "HP Gain": ["15", "20", "25", "30", "40", "45", "50", "55", "60", "75", "80", "85", "90", "250", "1000"],
            "Action Speed": ["20%", "22%", "24%", "26%", "30%", "32%", "34%", "36%", "38%", "42%", "44%", "46%", "48%", "50%", "58%"]
        }
    },
    "Healing Touch":{
        "Usage": "Active (Field)",
        "Unlock": "Healer (Lv 10)",
        "Description": "Set the HP of all party members to a specific percentage. No effect on members that are already above that percentage.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["3", "3", "3", "2", "1"],
            "Target HP%": ["50%", "75%", "100%", "100%", "100%"]
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Max HP↑": ["+10%", "+12%", "+14%", "+16%", "+28%", "+30%", "+32%", "+34%", "+36%", "+50%"]
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Max TP↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Scavenge":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 3)",
        "Description": "Increases enemy drop rates.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Drop Rate↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "TP Regen":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 10)",
        "Description": "Recover TP at the end of each turn.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Gain": ["1", "1", "2", "2", "3", "3", "4", "4", "4", "5"]
        }
    },
    "ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your STR stat during attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "STR Stat↑": ["+10%", "+25%", "+30%", "+45%", "+90%", "+105%", "+120%", "+135%", "+150%", "+200%"]
        }
    },
    "Caduceus":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "ATK Up (Lv 10)",
        "Description": "Staff: Deal melee Bash damage to one enemy, with a chance to inflict Stun.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "9", "10", "11", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"],
            "Attack Power": ["200%", "210%", "220%", "230%", "250%", "260%", "270%", "280%", "290%", "320%", "330%", "340%", "350%", "360%", "400%"],
            "Infliction Rate": ["15%", "20%", "25%", "30%", "40%", "45%", "50%", "55%", "60%", "75%", "76%", "77%", "78%", "79%", "80%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
        }
    },
    "Chop":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Chop points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Gather Attempts": ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
        }
    },
},
"Alchemist":{
    "Fire Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases the TEC bonus in Fire-based skills.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TEC Bonus↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Fire":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Fire Up (Lv 1)",
        "Description": "Deal ranged Fire damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["80%", "85%", "90%", "100%", "105%", "110%", "115%", "120%", "125%", "130%", "135%", "140%", "145%", "150%", "155%"],
            "TEC Bonus": ["+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "80%", "80%", "80%", "80%", "80%"]
        }
    },
    "Flame":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Fire Up (Lv 5), Fire (Lv 3)",
        "Description": "Deal ranged Fire damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["140%", "160%", "180%", "200%", "230%", "250%", "270%", "290%", "310%", "350%", "370%", "390%", "410%", "430%", "480%"],
            "TEC Bonus": ["+10", "+10", "+9", "+9", "+8", "+8", "+7", "+7", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "60%", "60%", "60%", "60%", "60%"]
        }
    },
    "Inferno":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Fire Up (Lv 5)",
        "Description": "Deal ranged Fire damage to all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["16", "17", "18", "19", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"],
            "Attack Power": ["112%", "128%", "144%", "160%", "184%", "200%", "216%", "232%", "248%", "280%", "296%", "312%", "328%", "344%", "384%"],
            "TEC Bonus": ["+10", "+10", "+9", "+9", "+8", "+8", "+7", "+7", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
        }
    },
    "Ice Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases the TEC bonus in Ice-based skills.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TEC Bonus↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Ice":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Ice Up (Lv 1)",
        "Description": "Deal ranged Ice damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["80%", "85%", "90%", "100%", "105%", "110%", "115%", "120%", "125%", "130%", "135%", "140%", "145%", "150%", "155%"],
            "TEC Bonus": ["+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "80%", "80%", "80%", "80%", "80%"]
        }
    },
    "Freeze":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Ice Up (Lv 5), Ice (Lv 3)",
        "Description": "Deal ranged Ice damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["140%", "160%", "180%", "200%", "230%", "250%", "270%", "290%", "310%", "350%", "370%", "390%", "410%", "430%", "480%"],
            "TEC Bonus": ["+10", "+10", "+9", "+9", "+8", "+8", "+7", "+7", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "60%", "60%", "60%", "60%", "60%"]
        }
    },
    "Cocytus":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Ice Up (Lv 5)",
        "Description": "Deal ranged Ice damage to all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["16", "17", "18", "19", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"],
            "Attack Power": ["112%", "128%", "144%", "160%", "184%", "200%", "216%", "232%", "248%", "280%", "296%", "312%", "328%", "344%", "384%"],
            "TEC Bonus": ["+10", "+10", "+9", "+9", "+8", "+8", "+7", "+7", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
        }
    },
    "Volt Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases the TEC bonus in Volt-based skills.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TEC Bonus↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Volt":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Volt Up (Lv 1)",
        "Description": "Deal ranged Volt damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["80%", "85%", "90%", "100%", "105%", "110%", "115%", "120%", "125%", "130%", "135%", "140%", "145%", "150%", "155%"],
            "TEC Bonus": ["+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "80%", "80%", "80%", "80%", "80%"]
        }
    },
    "Thunder":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Volt Up (Lv 5), Volt (Lv 3)",
        "Description": "Deal ranged Volt damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"],
            "Attack Power": ["140%", "160%", "180%", "200%", "230%", "250%", "270%", "290%", "310%", "350%", "370%", "390%", "410%", "430%", "480%"],
            "TEC Bonus": ["+10", "+10", "+9", "+9", "+8", "+8", "+7", "+7", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "60%", "60%", "60%", "60%", "60%"]
        }
    },
    "Thor":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Volt Up (Lv 5)",
        "Description": "Deal ranged Volt damage to all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["16", "17", "18", "19", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"],
            "Attack Power": ["112%", "128%", "144%", "160%", "184%", "200%", "216%", "232%", "248%", "280%", "296%", "312%", "328%", "344%", "384%"],
            "TEC Bonus": ["+10", "+10", "+9", "+9", "+8", "+8", "+7", "+7", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
        }
    },
    "Toxins":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "No effect.",
        "Starter": "1",
        "Max Level": "0",
        "Data": ""
    },
    "Poison":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Toxins (Lv 1)",
        "Description": "Attempt to inflict Poison on one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "Infliction Rate": ["200%", "202%", "204%", "206%", "220%", "222%", "224%", "226%", "228%", "250%", "252%", "254%", "256%", "258%", "280%"],
            "Poison Damage": ["23", "43", "63", "83", "123", "163", "203", "243", "255", "255", "255", "255", "255", "255", "255"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "80%", "80%", "80%", "80%", "80%"]
        }
    },
    "Venom":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Toxins (Lv 5)",
        "Description": "Attempt to inflict Poison on all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "Infliction Rate": ["200%", "202%", "204%", "206%", "220%", "222%", "224%", "226%", "228%", "250%", "252%", "254%", "256%", "258%", "280%"],
            "Poison Damage": ["23", "43", "63", "83", "123", "163", "203", "243", "255", "255", "255", "255", "255", "255", "255"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
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
            "Max TP↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Scavenge":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 3)",
        "Description": "Increases enemy drop rates.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Drop Rate↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Sight":{
        "Usage": "Active (Field)",
        "Unlock": "TP Up (Lv 5)",
        "Description": "Show the location of all FOEs on the map. Lasts until you take a step.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
        }
    },
    "Warp":{
        "Usage": "Active (Field)",
        "Unlock": "TP Up (Lv 7)",
        "Description": "Teleport to the last Geomagnetic Field you used on the current trip.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "14", "13", "12", "10", "9", "8", "7", "6", "5"]
        }
    },
    "TP Regen":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 10)",
        "Description": "Recover TP at the end of each turn.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Gain": ["1", "1", "2", "2", "3", "3", "4", "4", "4", "5"]
        }
    },
    "Chop":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Chop points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Gather Attempts": ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
        }
    },
},
"Troubadour":{
    "Songs":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases the action speed of skills.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Speed↑": ["x1.1", "x1.11", "x1.12", "x1.13", "x1.19", "x1.2", "x1.21", "x1.22", "x1.23", "x1.3"]
        }
    },
    "Bravery":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 1)",
        "Description": "Place a buff on the whole party (lasts indefinitely), which increases their ATK stat.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "ATK Stat↑": ["+10%", "+15%", "+20%", "+25%", "+30%", "+31%", "+32%", "+33%", "+34%", "+40%", "+41%", "+42%", "+43%", "+44%", "+50%"],
            "Action Speed": ["80%", "82%", "84%", "86%", "90%", "92%", "94%", "96%", "98%", "102%", "104%", "106%", "108%", "110%", "118%"]
        }
    },
    "Shelter":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 1)",
        "Description": "Place a buff on the whole party (lasts indefinitely), which increases their DEF stat.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "DEF Stat↑": ["+10%", "+15%", "+20%", "+25%", "+30%", "+31%", "+32%", "+33%", "+34%", "+40%", "+41%", "+42%", "+43%", "+44%", "+50%"],
            "Action Speed": ["80%", "82%", "84%", "86%", "90%", "92%", "94%", "96%", "98%", "102%", "104%", "106%", "108%", "110%", "118%"]
        }
    },
    "Mercury":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 1)",
        "Description": "Place a buff on the whole party (lasts indefinitely), which increases their AGI stat.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "AGI Stat↑": ["+10%", "+15%", "+20%", "+25%", "+30%", "+31%", "+32%", "+33%", "+34%", "+40%", "+41%", "+42%", "+43%", "+44%", "+50%"],
            "Action Speed": ["80%", "82%", "84%", "86%", "90%", "92%", "94%", "96%", "98%", "102%", "104%", "106%", "108%", "110%", "118%"]
        }
    },
    "Erasure":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 3)",
        "Description": "Remove buffs on one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Buffs Removed": ["1", "1", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            "Action Speed": ["80%", "82%", "84%", "86%", "90%", "92%", "94%", "96%", "98%", "102%", "104%", "106%", "108%", "110%", "118%"]
        }
    },
    "Recovery":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 3)",
        "Description": "Place a buff on the whole party (lasts indefinitely), which increases bind/ailment recovery speed. (Remaining bind/ailment duration is divided by this modifier)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Recovery Rate↑": ["x1.1", "x1.3", "x1.5", "x1.7", "x2", "x2.2", "x2.4", "x2.6", "x2.8", "x3.2", "x3.4", "x3.6", "3.8", "x4", "x4.5"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Stamina":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 3), HP Up (Lv 3)",
        "Description": "Place a buff on the whole party (lasts indefinitely), which increases Max HP.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Max HP↑": ["+20%", "+23%", "+26%", "+29%", "+35%", "+37%", "+39%", "+41%", "+43%", "+50%", "+51%", "+52%", "+53%", "+54%", "+60%"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Blaze":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 5), Bravery (Lv 3)",
        "Description": "Place a buff on one ally (lasts indefinitely), which adds bonus Fire damage to their normal attacks.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "14", "13", "12", "10", "9", "8", "7", "6", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Frost":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 5), Bravery (Lv 3)",
        "Description": "Place a buff on one ally (lasts indefinitely), which adds bonus Ice damage to their normal attacks.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "14", "13", "12", "10", "9", "8", "7", "6", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Shock":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 5), Bravery (Lv 3)",
        "Description": "Place a buff on one ally (lasts indefinitely), which adds bonus Volt damage to their normal attacks.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "14", "13", "12", "10", "9", "8", "7", "6", "5", "5", "5", "5", "5", "5"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Ifrit":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 7)",
        "Description": "Place a buff on the whole party (lasts indefinitely) and a debuff on all enemies (lasts 4 turns). The buff decreases Fire damage taken, while the debuff increases it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"],
            "Damage Taken↓\n(Allies)": ["x0.8", "x0.75", "x0.7", "x0.65", "x0.6", "x0.55", "x0.5", "x0.45", "x0.4", "x0.35", "x0.3", "x0.25", "x0.2", "x0.15", "x0.1"],
            "Damage Taken↑\n(Enemies)": ["x1.1", "x1.15", "x1.2", "x1.25", "x1.3", "x1.31", "x1.32", "x1.33", "x1.34", "x1.4", "x1.41", "x1.42", "x1.43", "x1.44", "x1.5"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Ymir":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 7)",
        "Description": "Place a buff on the whole party (lasts indefinitely) and a debuff on all enemies (lasts 4 turns). The buff decreases Ice damage taken, while the debuff increases it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"],
            "Damage Taken↓\n(Allies)": ["x0.8", "x0.75", "x0.7", "x0.65", "x0.6", "x0.55", "x0.5", "x0.45", "x0.4", "x0.35", "x0.3", "x0.25", "x0.2", "x0.15", "x0.1"],
            "Damage Taken↑\n(Enemies)": ["x1.1", "x1.15", "x1.2", "x1.25", "x1.3", "x1.31", "x1.32", "x1.33", "x1.34", "x1.4", "x1.41", "x1.42", "x1.43", "x1.44", "x1.5"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Taranis":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 7)",
        "Description": "Place a buff on the whole party (lasts indefinitely) and a debuff on all enemies (lasts 4 turns). The buff decreases Volt damage taken, while the debuff increases it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"],
            "Damage Taken↓\n(Allies)": ["x0.8", "x0.75", "x0.7", "x0.65", "x0.6", "x0.55", "x0.5", "x0.45", "x0.4", "x0.35", "x0.3", "x0.25", "x0.2", "x0.15", "x0.1"],
            "Damage Taken↑\n(Enemies)": ["x1.1", "x1.15", "x1.2", "x1.25", "x1.3", "x1.31", "x1.32", "x1.33", "x1.34", "x1.4", "x1.41", "x1.42", "x1.43", "x1.44", "x1.5"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Healing":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 7), HP Up (Lv 5)",
        "Description": "Place a buff on the whole party (lasts indefinitely), which restores Max HP at the end of each turn.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "HP Gain": ["2%", "3%", "4%", "5%", "7%", "8%", "9%", "10%", "11%", "13%", "14%", "15%", "16%", "17%", "20%"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Peace Ballad":{
        "Usage": "Active (Head)",
        "Unlock": "Songs (Lv 7), TP Up (Lv 5)",
        "Description": "Place a buff on the whole party (lasts indefinitely), which restores Max TP at the end of each turn.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "TP Gain": ["1%", "1%", "2%", "2%", "3%", "3%", "4%", "4%", "4%", "5%", "7%", "7%", "8%", "8%", "10%"],
            "Action Speed": ["50%", "52%", "54%", "56%", "60%", "62%", "64%", "66%", "68%", "72%", "74%", "76%", "78%", "90%", "98%"]
        }
    },
    "Divinity":{
        "Usage": "Passive",
        "Unlock": "Songs (Lv 10), Recovery (Lv 5)",
        "Description": "Increases EXP gained by the party.",
        "Max Level": "10",
        "Data": {
            "EXP Gain↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
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
            "Max HP↑": ["+10%", "+12%", "+14%", "+16%", "+28%", "+30%", "+32%", "+34%", "+36%", "+50%"]
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
            "Max TP↑": ["+10%", "+12%", "+14%", "+16%", "+28%", "+30%", "+32%", "+34%", "+36%", "+50%"]
        }
    },
    "Stalker":{
        "Usage": "Active (Field)",
        "Unlock": "TP Up (Lv 5)",
        "Description": "Temporarily decrease the enemy encounter rate.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "3", "3", "4", "4", "4", "4", "4", "4"],
            "Encounters↓": ["x0.7", "x0.7", "x0.7", "x0.7", "x0.7", "x0.65", "x0.65", "x0.6", "x0.6", "x0.5"],
            "Duration (Steps)": ["30", "35", "40", "45", "60", "65", "70", "75", "80", "100"]
        }
    },
    "Return":{
        "Usage": "Active (Field)",
        "Unlock": "Stalker (Lv 3)",
        "Description": "Teleport in front of the last stairs you used. (Does not work if this would teleport you to the current floor)",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
        }
    },
    "Take":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Take points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "Gather Attempts": ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
        }
    },
},
"Ronin":{
    "Katana Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your weapon's ATK stat during Katana attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "ATK Stat↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Kesagiri":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Katana Mastery (Lv 1)",
        "Description": "Katana: Deal melee Cut damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["130%", "135%", "140%", "145%", "150%", "155%", "160%", "165%", "170%", "180%", "185%", "190%", "195%", "200%", "210%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "70%", "70%", "70%", "70%", "70%"]
        }
    },
    "Overhead":{
        "Usage": "Active (No Parts)",
        "Unlock": "Katana Mastery (Lv 3)",
        "Description": "Katana: Gain the Overhead Stance buff for 4 turns, which increases ATK and slightly decreases damage taken. (Overrides other Stances)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
            "ATK Stat↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%", "+31%", "+32%", "+33%", "+34%", "+42%"],
            "Damage Taken↓": ["x0.95", "x0.94", "x0.93", "x0.92", "x0.91", "x0.9", "x0.89", "x0.88", "x0.87", "x0.85", "x0.84", "x0.83", "x0.82", "x0.81", "x0.78"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "120%", "120%", "120%", "120%", "120%"]
        }
    },
    "Zamba":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Katana Mastery (Lv 5), Overhead (Lv 1)",
        "Description": "Katana, Overhead: Deal melee Cut damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "70%", "70%", "70%", "70%", "70%"]
        }
    },
    "Midareba":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Katana Mastery (Lv 7), Overhead (Lv 3)",
        "Description": "Katana, Overhead: Deal multiple hits of melee Cut damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "9", "10", "11", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"],
            "Attack Power": ["100%", "103%", "106%", "109%", "115%", "116%", "117%", "118%", "119%", "125%", "126%", "127%", "128%", "129%", "135%"],
            "Hits": ["2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "70%", "70%", "70%", "70%", "70%"]
        }
    },
    "Orochi":{
        "Usage": "Active (Arms, STR+TEC)",
        "Unlock": "Katana Mastery (Lv 10), Overhead (Lv 5)",
        "Description": "Katana, Overhead: Deal melee Cut+Fire damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
            "Attack Power\n(Physical)": ["130%", "131%", "132%", "133%", "134%", "135%", "136%", "137%", "138%", "140%", "141%", "142%", "143%", "144%", "150%"],
            "Attack Power\n(Elemental)": ["50%", "55%", "60%", "70%", "75%", "80%", "85%", "90%", "95%", "100%", "105%", "110%", "115%", "120%", "125%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
        }
    },
    "Seigan":{
        "Usage": "Active (No Parts)",
        "Unlock": "Katana Mastery (Lv 3)",
        "Description": "Katana: Gain the Seigan Stance buff for 4 turns, which decreases damage taken and slightly increases ATK. (Overrides other Stances)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
            "Damage Taken↓": ["x0.85", "x0.84", "x0.83", "x0.82", "x0.81", "x0.8", "x0.79", "x0.78", "x0.77", "x0.75", "x0.74", "x0.73", "x0.72", "x0.71", "x0.68"],
            "ATK Stat↑": ["+0%", "+1%", "+2%", "+3%", "+9%", "+10%", "+11%", "+12%", "+13%", "+20%", "+21%", "+22%", "+23%", "+24%", "+32%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "120%", "120%", "120%", "120%", "120%"]
        }
    },
    "Mikiri":{
        "Usage": "Active (Arms)",
        "Unlock": "Katana Mastery (Lv 5), Seigan (Lv 1)",
        "Description": "Katana, Seigan: Nullify the first attack that hits you this turn.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "1", "1", "1", "1", "1"],
        }
    },
    "Koteuchi":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Katana Mastery (Lv 7), Seigan (Lv 3)",
        "Description": "Katana, Seigan: Deal melee Cut damage to one enemy, with a chance to inflict Arm Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["130%", "131%", "132%", "133%", "134%", "135%", "136%", "137%", "138%", "140%", "141%", "142%", "143%", "144%", "150%"],
            "Infliction Rate": ["20%", "21%", "22%", "23%", "29%", "30%", "31%", "32%", "33%", "40%", "41%", "42%", "43%", "44%", "52%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "70%", "70%", "70%", "70%", "70%"]
        }
    },
    "Raizuki":{
        "Usage": "Active (Arms, STR+TEC)",
        "Unlock": "Katana Mastery (Lv 10), Seigan (Lv 5)",
        "Description": "Katana, Seigan: Deal melee Cut+Volt damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
            "Attack Power\n(Physical)": ["130%", "131%", "132%", "133%", "134%", "135%", "136%", "137%", "138%", "140%", "141%", "142%", "143%", "144%", "150%"],
            "Attack Power\n(Elemental)": ["50%", "55%", "60%", "70%", "75%", "80%", "85%", "90%", "95%", "100%", "105%", "110%", "115%", "120%", "125%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
        }
    },
    "Iai":{
        "Usage": "Active (No Parts)",
        "Unlock": "Katana Mastery (Lv 3)",
        "Description": "Katana: Gain the Iai Stance buff for 4 turns, which increases AGI. (Overrides other Stances)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"],
            "AGI Stat↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%", "+31%", "+32%", "+33%", "+34%", "+42%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "120%", "120%", "120%", "120%", "120%"]
        }
    },
    "Kubiuchi":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Katana Mastery (Lv 5), Iai (Lv 1)",
        "Description": "Katana, Iai: Deal melee Cut damage to one enemy, with a chance to inflict Instant Death.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
            "Attack Power": ["130%", "131%", "132%", "133%", "134%", "135%", "136%", "137%", "138%", "140%", "141%", "142%", "143%", "144%", "150%"],
            "Infliction Rate": ["40%", "41%", "42%", "43%", "49%", "50%", "51%", "52%", "53%", "60%", "61%", "62%", "63%", "64%", "72%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "120%", "120%", "120%", "120%", "120%"]
        }
    },
    "Gatotsu":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Katana Mastery (Lv 7), Iai (Lv 3)",
        "Description": "Katana, Iai: Deal melee Stab damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
            "Attack Power": ["170%", "171%", "172%", "173%", "189%", "190%", "191%", "192%", "193%", "210%", "211%", "212%", "213%", "214%", "232%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "120%", "120%", "120%", "120%", "120%"]
        }
    },
    "Hyosetsu":{
        "Usage": "Active (Arms, STR+TEC)",
        "Unlock": "Katana Mastery (Lv 10), Iai (Lv 5)",
        "Description": "Katana, Iai: Deal melee Cut+Ice damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
            "Attack Power\n(Physical)": ["130%", "131%", "132%", "133%", "134%", "135%", "136%", "137%", "138%", "140%", "141%", "142%", "143%", "144%", "150%"],
            "Attack Power\n(Elemental)": ["50%", "55%", "60%", "70%", "75%", "80%", "85%", "90%", "95%", "100%", "105%", "110%", "115%", "120%", "125%"],
            "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%"]
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
            "Max HP↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Ibuki":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 3)",
        "Description": "Restore HP to yourself. (Only usable in battle)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"],
            "HP Gain": ["20", "26", "32", "38", "50", "56", "62", "68", "74", "92", "98", "104", "110", "116", "140"],
            "Action Speed": ["70%", "72%", "74%", "76%", "80%", "82%", "86%", "88%", "90%", "96%", "98%", "100%", "102%", "104%", "112%"]
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Max TP↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your STR stat during attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "STR Stat↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Sight":{
        "Usage": "Passive",
        "Unlock": "ATK Up (Lv 3)",
        "Description": "Increases your STR stat during attacks if it's nighttime or you're afflicted with Blind or Head Bind.",
        "Max Level": "10",
        "Data": {
            "STR Stat↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"]
        }
    },
    "Crit Up":{
        "Usage": "Passive",
        "Unlock": "ATK Up (Lv 5)",
        "Description": "Increases Critical Hit rate.",
        "Max Level": "10",
        "Data": {
            "Crit Rate↑": ["+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%"]
        }
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Mine points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Gather Attempts": ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
        }
    },
},
"Hexer":{
    "Curses":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
}
}

//End of database

var descriptions = {
    "Landsknecht":  "Warriors with high strength and durability.",
    "Survivalist":  "Archers with great agility and sharp senses.",
    "Protector":    "Knights that defend the party from attacks.",
    "Dark Hunter":  "Fighters whose attacks immobilize enemies.",
    "Medic":        "Healers that keep the party in good condition.",
    "Alchemist":    "Spellcasters that pierce the enemy's defense.",
    "Troubadour":   "Musicians that increase the party's strength.",
    "Ronin":        "Warriors that gain power from their stances.",
    "Hexer":        "Sorcerers that weaken and disable enemies.",

    "Battle Items": "Consumable items that can be used in battle.",
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
