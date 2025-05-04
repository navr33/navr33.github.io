var data = {
"Landsknecht":{
    "Axes":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your weapon's ATK stat during Axe attacks.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
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
            "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"]
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
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"]
        }
    },
    "Sword Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases your weapon's ATK stat during Sword attacks.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "10",
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
        "Description": "Place a buff on yourself for 4 turns, which increases the power of attacks used and received.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            "Power↑": ["x1.1", "x1.13", "x1.16", "x1.19", "x1.25", "x1.27", "x1.29", "x1.31", "x1.33", "x1.4", "x1.41", "x1.42", "x1.43", "x1.44", "x1.52"],
            "Vulnerability↑": ["x1.2", "x1.2", "x1.2", "x1.2", "x1.2", "x1.18", "x1.16", "x1.14", "x1.12", "x1.1", "x1.1", "x1.1", "x1.1", "x1.1", "x1.1"],
            "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"]
        }
    },
    "Hell Cry":{
        "Usage": "Active (Head)",
        "Unlock": "ATK Up (Lv 10)",
        "Description": "Place a buff on yourself for 4 turns, which increases the power of attacks used and received, and decreases Max HP.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"],
            "Power↑": ["x1.2", "x1.23", "x1.26", "x1.29", "x1.35", "x1.37", "x1.39", "x1.41", "x1.43", "x1.5", "x1.51", "x1.52", "x1.53", "x1.54", "x1.62"],
            "Vulnerability↑": ["x1.2", "x1.2", "x1.2", "x1.2", "x1.2", "x1.18", "x1.16", "x1.14", "x1.12", "x1.1", "x1.1", "x1.1", "x1.1", "x1.1", "x1.1"],
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
            "Vulnerability↓": ["x0.95", "x0.94", "x0.93", "x0.92", "x0.91", "x0.9", "x0.89", "x0.88", "x0.87", "x0.85"]
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
        "Natural Level": "10",
        "Data": {
            "Gather Attempts": ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
        }
    },
},
"Survivalist":{
    "Bows":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Trueshot":{
        "Usage": "Active",
        "Unlock": "Bows (Lv 1)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Disable":{
        "Usage": "Active",
        "Unlock": "Bows (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Multihit":{
        "Usage": "Active",
        "Unlock": "Bows (Lv 5)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Apollon":{
        "Usage": "Active",
        "Unlock": "Bows (Lv 10)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "AGI Up":{
        "Usage": "Active",
        "Unlock": "N/A",
        "Description": "",
        "Starter": "1",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Trickery":{
        "Usage": "Active",
        "Unlock": "AGI Up (Lv 1)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Cloak":{
        "Usage": "Active",
        "Unlock": "Trickery (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Quicken":{
        "Usage": "Active",
        "Unlock": "AGI Up (Lv 1)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Escape":{
        "Usage": "Active",
        "Unlock": "Quicken (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "1st Turn":{
        "Usage": "Active",
        "Unlock": "Trickery (Lv 3), Quicken (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Ambush":{
        "Usage": "Active",
        "Unlock": "AGI Up (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Owl-Eye":{
        "Usage": "Active",
        "Unlock": "Ambush (Lv 1)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Aware":{
        "Usage": "Active",
        "Unlock": "Ambush (Lv 2)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Stalker":{
        "Usage": "Active",
        "Unlock": "Ambush (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "1st Hit":{
        "Usage": "Active",
        "Unlock": "AGI Up (Lv 5), 1st Turn (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Chop":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Chop points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Mine points a certain amount of times per day.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Take":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Take points a certain amount of times per day.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
},
"Protector":{
    "Shield Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decreases elemental damage taken.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Front Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 1)",
        "Description": "Protect the front line for this turn, which decreases damage taken from the first physical attack that hits it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
        }
    },
    "Rear Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 1)",
        "Description": "Protect the back line for this turn, which decreases damage taken from the first physical attack that hits it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
        }
    },
    "Defender":{
        "Usage": "Active (Head)",
        "Unlock": "Front Guard (Lv 3), Rear Guard (Lv 3)",
        "Description": "Place a buff on the whole party for 4 turns, which decreases physical damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "9", "10", "11", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
        }
    },
    "Fire Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 5), TP Up (Lv 3)",
        "Description": "Shield: Protect the whole party for this turn, which decreases damage taken from the first Fire attack that hits it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
        }
    },
    "Ice Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 5), TP Up (Lv 3)",
        "Description": "Shield: Protect the whole party for this turn, which decreases damage taken from the first Ice attack that hits it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
        }
    },
    "Volt Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 5), TP Up (Lv 3)",
        "Description": "Shield: Protect the whole party for this turn, which decreases damage taken from the first Volt attack that hits it.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
        }
    },
    "Smite":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 10), Fortify (Lv 5)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"]
        }
    },
    "DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decreases physical damage taken.",
        "Starter": "1",
        "Max Level": "10",
        "Data": ""
    },
    "Provoke":{
        "Usage": "Active (Head)",
        "Unlock": "DEF Up (Lv 1)",
        "Description": "Place a buff on yourself for 4 turns, which increases enemy aggro and slightly decreases damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
        }
    },
    "Fortify":{
        "Usage": "Active (Head)",
        "Unlock": "DEF Up (Lv 3), Shield Mastery (Lv 3)",
        "Description": "Place a buff on yourself for 4 turns, which decreases physical damage taken.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
        }
    },
    "Parry":{
        "Usage": "Active (Arms)",
        "Unlock": "DEF Up (Lv 3)",
        "Description": "Attempt to nullify physical damage received this turn.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
        }
    },
    "Flee":{
        "Usage": "Active (Legs)",
        "Unlock": "DEF Up (Lv 3)",
        "Description": "Attempt to escape the battle at the start of the turn and teleport in front of the last stairs you used. If successful, spend part of the whole party's HP. (Does not work if this would teleport you to the current floor)",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
        }
    },
    "Stalker":{
        "Usage": "Active (Field)",
        "Unlock": "DEF Up (Lv 5)",
        "Description": "Temporarily decrease the enemy encounter rate.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "3", "3", "4", "4", "4", "4", "4", "4"]
        }
    },
    "Aegis":{
        "Usage": "Passive",
        "Unlock": "DEF Up (Lv 5)",
        "Description": "Chance to survive lethal damage with 1 HP.",
        "Max Level": "10",
        "Data": ""
    },
    "En Garde":{
        "Usage": "Passive",
        "Unlock": "DEF Up (Lv 7), Shield Mastery (Lv 7)",
        "Description": "Chance to automatically decrease damage taken.",
        "Max Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": ""
    },
    "Cure":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 3)",
        "Description": "Restore HP to one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
        }
    },
    "Cure II":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 5)",
        "Description": "Restore HP to one ally.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"]
        }
    },
    "TP Up":{
        "Usage": "Active",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": ""
    },
    "Mine":{
        "Usage": "Active",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Mine points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Data": ""
    },
},
"Dark Hunter":{
    "Whips":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases damage dealt if you have a Whip equipped.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Anaconda":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whips (Lv 1)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Poison.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
        }
    },
    "Gag":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whips (Lv 2)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Head Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
        }
    },
    "Shackles":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whips (Lv 3)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Leg Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
        }
    },
    "Cuffs":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whips (Lv 4)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Arm Bind.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
        }
    },
    "Ecstasy":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Whips (Lv 5), ATK Up (Lv 5)",
        "Description": "Whip: Deal melee Cut damage to one enemy. Stronger if the enemy has 3 binds.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["8", "9", "10", "11", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
        }
    },
    "Climax":{
        "Usage": "Active (Arms)",
        "Unlock": "Whips (Lv 10)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
        }
    },
    "Sword Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases damage dealt if you have a Sword equipped.",
        "Starter": "1",
        "Max Level": "10",
        "Data": ""
    },
    "Hypnos":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Sleep.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
        }
    },
    "Nerve":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 2)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Paralysis.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
        }
    },
    "Mirage":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 3)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Panic.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
        }
    },
    "Drain":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 4)",
        "Description": "Sword: Deal melee Cut damage to one enemy. Recover HP based on the damage dealt.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
        }
    },
    "Bait":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 5), ATK Up (Lv 5)",
        "Description": "Prepare to counterattack each time you or your adjacent allies take physical damage this turn, dealing melee Cut damage to the attacker. Stronger when countering attacks against yourself.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
        }
    },
    "Petrify":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 10)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Petrify.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
        }
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": ""
    },
    "Cloak":{
        "Usage": "Active (Legs)",
        "Unlock": "TP Up (Lv 3)",
        "Description": "Place a buff on yourself for 4 turns, which decreases enemy aggro.",
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
        "Data": ""
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
        "Description": "Increases damage dealt if HP is below a certain threshold.",
        "Max Level": "10",
        "Data": {
            "HP Threshold": ["30%", "30%", "30%", "30%", "30%", "34%", "38%", "42%", "46%", "50%"]
        }
    },
    "Take":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Take points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Data": ""
    },
},
"Medic":{
    "Healer":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Cure":{
        "Usage": "Active",
        "Unlock": "Healer (Lv 1)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Patch Up":{
        "Usage": "Passive",
        "Unlock": "Healer (Lv 2)",
        "Description": "",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Unbind":{
        "Usage": "Active",
        "Unlock": "Healer (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Salve":{
        "Usage": "Active",
        "Unlock": "Healer (Lv 3), Cure (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Immunize":{
        "Usage": "Active",
        "Unlock": "Salve (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Cure II":{
        "Usage": "Active",
        "Unlock": "Healer (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Salve II":{
        "Usage": "Active",
        "Unlock": "Healer (Lv 5), Cure II (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "CPR":{
        "Usage": "Active",
        "Unlock": "Salve II (Lv 5), Immunize (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Regen":{
        "Usage": "Active",
        "Unlock": "Healer (Lv 5), Cure (Lv 5)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Refresh":{
        "Usage": "Active",
        "Unlock": "Healer (Lv 5)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Cure III":{
        "Usage": "Active",
        "Unlock": "Healer (Lv 5)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Revive":{
        "Usage": "Active",
        "Unlock": "Healer (Lv 7), Cure III (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Healing Touch":{
        "Usage": "Active",
        "Unlock": "Healer (Lv 10)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Scavenge":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 3)",
        "Description": "",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Regen":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 10)",
        "Description": "",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Caduceus":{
        "Usage": "Active",
        "Unlock": "ATK Up (Lv 10)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Chop":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Chop points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
},
"Alchemist":{
    "Fire Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases Fire damage dealt.",
        "Starter": "1",
        "Max Level": "10",
        "Data": ""
    },
    "Fire":{
        "Usage": "Active",
        "Unlock": "Fire Up (Lv 1)",
        "Description": "Deal ranged Fire damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Inferno":{
        "Usage": "Active",
        "Unlock": "Fire Up (Lv 5)",
        "Description": "Deal ranged Fire damage to all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Flame":{
        "Usage": "Active",
        "Unlock": "Fire Up (Lv 5), Fire (Lv 3)",
        "Description": "Deal ranged Fire damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Ice Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases Ice damage dealt.",
        "Starter": "1",
        "Max Level": "10",
        "Data": ""
    },
    "Ice":{
        "Usage": "Active",
        "Unlock": "Ice Up (Lv 1)",
        "Description": "Deal ranged Ice damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Cocytus":{
        "Usage": "Active",
        "Unlock": "Ice Up (Lv 5)",
        "Description": "Deal ranged Ice damage to all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Freeze":{
        "Usage": "Active",
        "Unlock": "Ice Up (Lv 5), Ice (Lv 3)",
        "Description": "Deal ranged Ice damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Volt Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases Volt damage dealt.",
        "Starter": "1",
        "Max Level": "10",
        "Data": ""
    },
    "Volt":{
        "Usage": "Active",
        "Unlock": "Volt Up (Lv 1)",
        "Description": "Deal ranged Volt damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Thor":{
        "Usage": "Active",
        "Unlock": "Volt Up (Lv 5)",
        "Description": "Deal ranged Volt damage to all enemies.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Thunder":{
        "Usage": "Active",
        "Unlock": "Volt Up (Lv 5), Volt (Lv 3)",
        "Description": "Deal ranged Volt damage to one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Toxins":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "No effect.",
        "Starter": "1",
        "Max Level": "5",
        "Data": ""
    },
    "Poison":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Toxins (Lv 1)",
        "Description": "Attempt to inflict Poison on one enemy.",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Venom":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Toxins (Lv 5)",
        "Description": "Attempt to inflict Poison on all enemies.",
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
        "Data": ""
    },
    "Scavenge":{
        "Usage": "Active",
        "Unlock": "TP Up (Lv 3)",
        "Description": "Increases enemy drop rates.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Sight":{
        "Usage": "Active",
        "Unlock": "TP Up (Lv 5)",
        "Description": "Show the location of all FOEs on the map. Lasts until you take a step.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
        }
    },
    "Warp":{
        "Usage": "Active",
        "Unlock": "TP Up (Lv 7)",
        "Description": "Teleport to the last Geomagnetic Field you used on the current trip.",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": {
            "TP Cost": ["15", "14", "13", "12", "10", "9", "8", "7", "6", "5"]
        }
    },
    "TP Regen":{
        "Usage": "Active",
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
        "Data": ""
    },
},
"Troubadour":{
    "Songs":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Bravery":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 1)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Shelter":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 1)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Mercury":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 1)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Erasure":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Recovery":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Stamina":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 3), HP Up (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Blaze":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 5), Bravery (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Frost":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 5), Bravery (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Shock":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 5), Bravery (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Ifrit":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 7)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Ymir":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 7)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Taranis":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 7)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Healing":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 7), HP Up (Lv 5)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Peace Ballad":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 7), TP Up (Lv 5)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Divinity":{
        "Usage": "Active",
        "Unlock": "Songs (Lv 10), Recovery (Lv 5)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
    "Stalker":{
        "Usage": "Active",
        "Unlock": "TP Up (Lv 5)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Return":{
        "Usage": "Active",
        "Unlock": "Return (Lv 3)",
        "Description": "",
        "Max Level": "15",
        "Natural Level": "10",
        "Data": ""
    },
    "Take":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Take points a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
    },
},
"Ronin":{
    "Katanas":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "",
        "Starter": "1",
        "Max Level": "10",
        "Natural Level": "10",
        "Data": ""
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
    "Landsknecht":  "Frontline warriors with good attack power and durability.",
    "Survivalist":  "Archers with great agility and exploration knowledge.",
    "Protector":    "Sturdy knights that defend the party and keep them safe.",
    "Dark Hunter":  "Ruthless fighters that immobilize then finish off enemies.",
    "Medic":        "Healers that effectively treat any injuries and afflictions.",
    "Alchemist":    "Elemental casters that exploit the enemy's weakness.",
    "Troubadour":   "Musicians that grant various buffs to bolster the party.",
    "Ronin":        "Katana users who change stance to adapt to the situation.",
    "Hexer":        "Support casters that weaken, disable and control enemies.",

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
