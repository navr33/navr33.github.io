var data = {
"Landsknecht":{
    "Class Proficiency":{
        "Proficiency / Expertise / Enlightment":{
            "Usage": "Passive (Unique)",
            "Description": "After you attack, other allies deal more damage and have more accuracy against your targets until the end of turn.",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "Damage Dealt↑": ["+20%", "+25%", "+30%"],
                "Accuracy↑": ["+10", "+15", "+20"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Sonic Raid":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Sword/Rapier: Deal weapon-based damage to one enemy. Hits at the start of turn.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "5", "5", "5", "5", "5", "6"],
                "Attack Power": ["130%", "135%", "140%", "145%", "160%", "163%", "166%", "169%", "172%", "180%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Blazing Link":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Sonic Raid (Lv 3)",
            "Description": "Sword/Rapier: Deal melee Cut/Stab+Fire damage to one enemy and mark them with a Link for this turn. The next hit by an ally will activate the Link, dealing additional Cut/Stab+Fire damage but with decreased power.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "8", "8", "8", "8", "8", "10"],
                "Attack Power": ["115%", "120%", "124%", "127%", "130%", "132%", "134%", "136%", "138%", "140%"],
                "Power Modifier\n(Follow Up)": ["x0.4", "x0.4", "x0.4", "x0.4", "x0.45", "x0.45", "x0.45", "x0.45", "x0.45", "x0.5"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Freezing Link":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Sonic Raid (Lv 3)",
            "Description": "Sword/Rapier: Deal melee Cut/Stab+Ice damage to one enemy and mark them with a Link for this turn. The next hit by an ally will activate the Link, dealing additional Cut/Stab+Ice damage but with decreased power.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "8", "8", "8", "8", "8", "10"],
                "Attack Power": ["115%", "120%", "124%", "127%", "130%", "132%", "134%", "136%", "138%", "140%"],
                "Power Modifier\n(Follow Up)": ["x0.4", "x0.4", "x0.4", "x0.4", "x0.45", "x0.45", "x0.45", "x0.45", "x0.45", "x0.5"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Electric Link":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Sonic Raid (Lv 3)",
            "Description": "Sword/Rapier: Deal melee Cut/Stab+Volt damage to one enemy and mark them with a Link for this turn. The next hit by an ally will activate the Link, dealing additional Cut/Stab+Volt damage but with decreased power.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "8", "8", "8", "8", "8", "10"],
                "Attack Power": ["115%", "120%", "124%", "127%", "130%", "132%", "134%", "136%", "138%", "140%"],
                "Power Modifier\n(Follow Up)": ["x0.4", "x0.4", "x0.4", "x0.4", "x0.45", "x0.45", "x0.45", "x0.45", "x0.45", "x0.5"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Power Break":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Shield: Deal melee Bash damage to one enemy. Places a debuff on the target for 3 turns, which decreases physical damage dealt.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "5", "5", "5", "6"],
                "Attack Power": ["80%", "83%", "90%", "95%", "100%", "110%"],
                "Damage Dealt↓": ["-15%", "-17%", "-20%", "-21%", "-22%", "-25%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3"],
            }
        },
        "Mind Break":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Power Break (Lv 3)",
            "Description": "Shield: Deal melee Bash damage to one enemy. Places a debuff on the target for 3 turns, which decreases elemental damage dealt.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "5", "5", "5", "6"],
                "Attack Power": ["80%", "83%", "90%", "95%", "100%", "110%"],
                "Damage Dealt↓": ["-15%", "-17%", "-20%", "-21%", "-22%", "-25%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3"],
            }
        },
        "Power Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["+5%", "+9%", "+12%", "+15%", "+17%", "+19%", "+21%", "+23%"],
            }
        },
        "Vanguard":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 5 turns, which increases physical damage dealt and makes you act first but also increases physical damage taken.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "6", "6"],
                "Damage Dealt↑": ["+10%", "+18%", "+25%", "+30%", "+35%", "+40%"],
                "Damage Taken↑": ["+25%", "+25%", "+25%", "+25%", "+25%", "+25%"],
                "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6"],
            }
        },
        "Bandage":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Restore HP to one ally.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["2", "2", "4", "4", "8", "8"],
                "HP Gain": ["10", "20", "50", "60", "140", "150"],
            }
        },
        "Mineralogy":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "10% chance to obtain an additional, rare material when gathering from a Mine point.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Double Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Sword/Rapier: Deal 2 hits of melee Cut/Stab damage to one enemy.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["9", "9", "9", "11", "11", "11", "11", "13"],
                "Attack Power": ["95%", "102%", "108%", "125%", "129%", "133%", "137%", "150%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["-3", "-3", "-3", "-1", "-1", "-1", "-1", "+0"],
            }
        },
        "Spiral Slice":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Double Strike (Lv 3)",
            "Description": "Sword: Deal melee Cut damage to one enemy, with splash effect.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["11", "11", "11", "13", "13", "13", "13", "16"],
                "Attack Power": ["155%", "165%", "175%", "195%", "202%", "209%", "215%", "230%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Penetrate":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Double Strike (Lv 3)",
            "Description": "Rapier: Deal melee Stab damage to one enemy, with pierce effect.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["11", "11", "11", "13", "13", "13", "13", "16"],
                "Attack Power": ["180%", "190%", "200%", "230%", "238%", "246%", "254%", "270%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Iron Wall":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decreases physical damage taken.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Damage Taken↓": ["-5%", "-9%", "-12%", "-15%", "-17%", "-19%", "-21%", "-23%"],
            }
        },
        "Swordbreaker":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Chance of halving physical damage taken by party members in your line.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["5%", "10%", "15%", "18%", "20%", "22%"],
            }
        },
        "Improved Link":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 3 turns, which increases maximum Link activations. Multi-hit attacks can trigger a Link multiple times (max 4), but activation chance during an attack goes down by 20% with each activation.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["7", "8", "9", "10", "9", "8", "7", "10"],
                "Added Links": ["+3", "+4", "+5", "+6", "+6", "+6", "+6", "+7"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Initiative":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases all damage dealt and accuracy when you attack before any enemy has acted.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["+10%", "+18%", "+25%", "+30%", "+33%", "+36%", "+38%", "+40%"],
                "Accuracy↑": ["+10", "+15", "+18", "+20", "+22", "+23", "+24", "+25"],
            }
        },
        "Muscular Chef":{
            "Usage": "Passive (Sky)",
            "Unlock": "N/A",
            "Description": "Increases STR gains and decreases STR loses from cooked food. Normal maximum level is 1, but multiple instances are added as a single, higher-level skill.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "Stat Gain↑": ["+44%", "+63%", "+77%", "+89%", "+100%"],
                "Stat Loss↓": ["-44%", "-63%", "-77%", "-89%", "-100%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Sword Tempest":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Spiral Slice (Lv 3)",
            "Description": "Sword: Deal melee Cut damage to one enemy.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["13", "13", "13", "15", "15", "15", "15", "18"],
                "Attack Power": ["270%", "290%", "310%", "350%", "360%", "370%", "380%", "400%"],
                "Accuracy": ["-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5"],
                "Action Speed": ["-20", "-20", "-20", "-20", "-20", "-20", "-20", "-20"],
            }
        },
        "Swift Stab":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Penetrate (Lv 3)",
            "Description": "Rapier: Deal multiple hits of melee Stab damage to random enemies in a line.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["16", "16", "16", "19", "19", "19", "19", "23"],
                "Attack Power": ["95%", "99%", "103%", "105%", "108%", "111%", "113%", "125%"],
                "Min. Hits": ["3", "3", "3", "3", "3", "3", "3", "3"],
                "Max. Hits": ["3", "3", "3", "4", "4", "4", "4", "4"],
                "Accuracy": ["-15", "-15", "-15", "-15", "-15", "-15", "-15", "-15"],
                "Action Speed": ["+9", "+9", "+9", "+9", "+9", "+9", "+9", "+9"],
            }
        },
        "Weapon Parry":{
            "Usage": "Passive",
            "Unlock": "Swordbreaker (Lv 3)",
            "Description": "Decreases physical damage taken if you have two weapons equipped.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Damage Taken↓": ["-10%", "-15%", "-20%", "-24%", "-27%", "-30%"],
            }
        },
        "Link Mastery":{
            "Usage": "Passive",
            "Unlock": "Improved Link (Lv 3)",
            "Description": "Increases damage dealt by a Link's activations for each time it has been activated this turn.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Damage Dealt↑": ["+3%", "+4%", "+5%", "+6%", "+7%", "+8%"],
            }
        },
    },
},
"Nightseeker":{
    "Class Proficiency":{
        "Proficiency / Expertise / Enlightment":{
            "Usage": "Passive (Unique)",
            "Description": "Drastically increases damage dealt against enemies with ailments.",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "Damage Dealt↑": ["+100%", "+140%", "+180%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Ice Knife":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Sword/Knife: Deal melee Cut+Ice damage to one enemy.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "9", "9", "9", "9", "9", "10"],
                "Attack Power": ["150%", "157%", "164%", "170%", "190%", "194%", "198%", "202%", "206%", "220%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            }
        },
        "Biding Slice":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Ice Knife (Lv 3)",
            "Description": "Sword/Knife: Deal melee Cut damage to one enemy. At the end of turn, if you were not hit, attack a second time.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "12", "12", "12", "12", "12", "14"],
                "Attack Power": ["130%", "137%", "144%", "150%", "165%", "169%", "173%", "177%", "180%", "190%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            }
        },
        "Sand Throw":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Deal ranged Cut damage to one enemy, with a chance to inflict Blind.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["2", "2", "2", "3", "3", "3"],
                "Attack Power": ["80%", "80%", "80%", "80%", "80%", "80%"],
                "Infliction Rate": ["45%", "50%", "55%", "63%", "67%", "70%"],
                "Accuracy": ["+1", "+1", "+2", "+2", "+3", "+3"],
                "Action Speed": ["+2", "+2", "+2", "+2", "+2", "+2"],
            }
        },
        "Nerve Throw":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Sand Throw (Lv 2)",
            "Description": "Deal ranged Cut damage to one enemy, with a chance to inflict Paralysis.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "4", "4", "4"],
                "Attack Power": ["80%", "80%", "80%", "80%", "80%", "80%"],
                "Infliction Rate": ["45%", "50%", "55%", "63%", "67%", "70%"],
                "Accuracy": ["+1", "+1", "+2", "+2", "+3", "+3"],
                "Action Speed": ["+2", "+2", "+2", "+2", "+2", "+2"],
            }
        },
        "Blade Flurry":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Allows you to equip a sub-weapon (uses an armor slot). If two weapons are equipped, normal attacks will perform a second hit (with decreased damage) using the sub-weapon.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Damage Mod.\n(Second Hit)": ["x0.3", "x0.4", "x0.5", "x0.6", "x0.7", "x0.8"],
            }
        },
        "Shadow Cloak":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 3 turns, which nullifies one physical hit received. (Buff is consumed when activated)",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["9", "8", "6", "4"],
                "Action Speed": ["+6", "+6", "+6", "+6"],
            }
        },
        "Auto-Cloak":{
            "Usage": "Passive",
            "Unlock": "Shadow Cloak (Lv 2)",
            "Description": "Chance to automatically cast Shadow Cloak at the start of battle.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["25%", "35%", "43%", "49%", "55%", "60%"],
            }
        },
        "Decoy Sign":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on one ally for 3 turns, which increases enemy aggro. Actual increase on each attack is a random value between 3 and this skill's bonus.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["4", "4", "4", "4"],
                "Max. Aggro Bonus": ["4", "6", "8", "9"],
                "Action Speed": ["+6", "+6", "+6", "+6"],
            }
        },
        "Herbology":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "10% chance to obtain an additional, rare material when gathering from a Take point.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Assassinate":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Biding Slice (Lv 2)",
            "Description": "Sword/Knife: Deal melee Cut damage to one enemy, with a chance to inflict Instant Kill. Higher infliction rate if the target has an ailment.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["12", "12", "12", "13", "13", "13", "13", "14"],
                "Attack Power": ["150%", "155%", "160%", "170%", "175%", "180%", "185%", "195%"],
                "Infliction Rate\n(Normal)": ["20%", "23%", "26%", "28%", "30%", "32%", "34%", "35%"],
                "Infliction Rate\n(Ailment)": ["30%", "34%", "38%", "42%", "44%", "46%", "47%", "50%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-2", "-2", "-2", "-1"],
            }
        },
        "Shadow Bite":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Assassinate (Lv 3)",
            "Description": "Sword/Knife: Deal melee Cut damage to one enemy. Damage dealt increases if the target has an ailment.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["15", "15", "15", "17", "17", "17", "17", "20"],
                "Attack Power": ["170%", "175%", "180%", "195%", "200%", "204%", "208%", "220%"],
                "Damage Bonus": ["x1.9", "x1.9", "x1.9", "x1.95", "x1.95", "x1.95", "x1.95", "x2.0"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Sleep Throw":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Nerve Throw (Lv 2)",
            "Description": "Deal ranged Cut damage to one enemy, with a chance to inflict Sleep.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "4", "4", "4"],
                "Attack Power": ["80%", "80%", "80%", "80%", "80%", "80%"],
                "Infliction Rate": ["45%", "50%", "55%", "63%", "67%", "70%"],
                "Accuracy": ["+1", "+1", "+2", "+2", "+3", "+3"],
                "Action Speed": ["+2", "+2", "+2", "+2", "+2", "+2"],
            }
        },
        "Curse Throw":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Sleep Throw (Lv 2)",
            "Description": "Deal ranged Cut damage to one enemy, with a chance to inflict Curse.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "4", "4", "4"],
                "Attack Power": ["80%", "80%", "80%", "80%", "80%", "80%"],
                "Infliction Rate": ["45%", "50%", "55%", "63%", "67%", "70%"],
                "Accuracy": ["+1", "+1", "+2", "+2", "+3", "+3"],
                "Action Speed": ["+2", "+2", "+2", "+2", "+2", "+2"],
            }
        },
        "Spread Throw":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Enter a charge state until the end of next turn, which makes Throw skills hit all enemies.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["8", "6", "4", "2"],
            }
        },
        "Sneak Attack":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily increase the chance of ambushing enemies.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10", "11"],
                "Ambush↑": ["+25%", "+30%", "+35%", "+40%", "+45%", "+50%"],
                "Duration": ["40", "45", "50", "55", "60", "65"],
            }
        },
        "Speed Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases accuracy, evasion and action speed.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Accuracy↑": ["+2%", "+5%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+14%", "+15%"],
                "Evasion↑": ["+2%", "+5%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+14%", "+15%"],
                "Speed↑": ["+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Agile Chef":{
            "Usage": "Passive (Sky)",
            "Unlock": "N/A",
            "Description": "Increases AGI gains and decreases AGI loses from cooked food. Normal maximum level is 1, but multiple instances are added as a single, higher-level skill.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "Stat Gain↑": ["+44%", "+63%", "+77%", "+89%", "+100%"],
                "Stat Loss↓": ["-44%", "-63%", "-77%", "-89%", "-100%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Swift Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Shadow Bite (Lv 2)",
            "Description": "Sword/Knife: Deal multiple hits of melee Cut damage to one enemy.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["21", "21", "21", "24", "24", "24", "24", "28"],
                "Attack Power": ["85%", "90%", "95%", "100%", "104%", "107%", "109%", "110%"],
                "Min. Hits": ["3", "3", "3", "4", "4", "4", "4", "4"],
                "Max. Hits": ["4", "4", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["-35", "-35", "-35", "-35", "-35", "-35", "-35", "-35"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Venom Throw":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Curse Throw (Lv 2)",
            "Description": "Deal ranged Cut damage to one enemy, with a chance to inflict Poison.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "6", "7", "7", "7"],
                "Attack Power": ["80%", "80%", "80%", "80%", "80%", "80%"],
                "Infliction Rate": ["60%", "65%", "70%", "74%", "77%", "80%"],
                "Poison Power": ["200", "270", "350", "500", "600", "700"],
                "Accuracy": ["+1", "+1", "+2", "+2", "+3", "+3"],
                "Action Speed": ["+2", "+2", "+2", "+2", "+2", "+2"],
            }
        },
        "Foul Mastery":{
            "Usage": "Passive",
            "Unlock": "Swift Edge (Lv 2), Venom Throw (Lv 2)",
            "Description": "Increases all damage dealt for each time you have inflicted an ailment. (Stacks up to +100%. Resets upon dying)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["+7%", "+11%", "+14%", "+17%", "+19%", "+21%", "+23%", "+25%"],
            }
        },
        "Follow Trace":{
            "Usage": "Passive",
            "Unlock": "Blade Flurry (Lv 3)",
            "Description": "Weapon-based skills have a chance to be performed a second time. The second instance receives the damage modifier of Blade Flurry.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Activation Chance": ["25%", "30%", "35%", "40%", "43%", "46%", "48%", "50%"],
            }
        },
        "Auto-Spread":{
            "Usage": "Passive",
            "Unlock": "Spread Throw (Lv 2)",
            "Description": "Chance to automatically cast Spread Throw at the start of battle.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["25%", "35%", "43%", "49%", "55%", "60%"],
            }
        },
    },
},
"Fortress":{
    "Class Proficiency":{
        "Proficiency / Expertise / Enlightment":{
            "Usage": "Passive (Unique)",
            "Description": "If you're in the front line, recover TP each time you take, block or dodge a hit.",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "TP Gain": ["3", "4", "5"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Bolt Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Mace: Deal melee Bash+Volt damage to one enemy.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "9", "9", "9", "9", "9", "10"],
                "Attack Power": ["150%", "157%", "164%", "170%", "190%", "194%", "198%", "202%", "206%", "220%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            }
        },
        "Holy Smite":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Bolt Strike (Lv 3)",
            "Description": "Mace: Deal melee Bash damage to one enemy. Recover HP based on damage dealt.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "12", "12", "12", "12", "12", "14"],
                "Attack Power": ["145%", "150%", "155%", "160%", "175%", "179%", "183%", "187%", "190%", "200%"],
                "Damage Drain": ["70%", "70%", "70%", "70%", "75%", "75%", "75%", "75%", "75%", "80%"],
                "Accuracy": ["-5", "-5", "-4", "-4", "-3", "-3", "-2", "-2", "-1", "-1"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            }
        },
        "Ally Shield":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Shield: Protect one ally for this turn, which makes you take attacks in their place and decreases all damage taken.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "3", "3"],
                "Damage Taken↓": ["-10%", "-20%", "-25%", "-29%", "-32%", "-35%"],
                "Action Speed": ["+30", "+30", "+30", "+30", "+30", "+30"],
            }
        },
        "Strike Guard":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on the whole party for 3 turns, which decreases physical damage taken.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "12", "12"],
                "Damage Taken↓": ["-15%", "-18%", "-20%", "-22%", "-24%", "-25%"],
                "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6"],
            }
        },
        "Element Guard":{
            "Usage": "Active (Head)",
            "Unlock": "Strike Guard (Lv 3)",
            "Description": "Place a buff on the whole party for 3 turns, which decreases elemental damage taken.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "12", "12"],
                "Damage Taken↓": ["-15%", "-18%", "-20%", "-22%", "-24%", "-25%"],
                "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6"],
            }
        },
        "Taunt":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 4 turns, which increases enemy aggro. Actual increase on each attack is a random value between 3 and this skill's bonus.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["2", "2", "2", "2"],
                "Max. Aggro Bonus": ["4", "6", "8", "9"],
                "Action Speed": ["+20", "+20", "+20", "+20"],
            }
        },
        "Auto-Taunt":{
            "Usage": "Passive",
            "Unlock": "Taunt (Lv 2)",
            "Description": "Chance to automatically cast Taunt at the start of battle.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "Activation Chance": ["15%", "25%", "35%", "50%"],
            }
        },
        "Iron Wall":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decreases physical damage taken.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Damage Taken↓": ["-5%", "-9%", "-12%", "-15%", "-17%", "-19%", "-21%", "-23%", "-24%", "-25%"],
            }
        },
        "Mineralogy":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "10% chance to obtain an additional, rare material when gathering from a Mine point.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Vengeance Bash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Holy Smite (Lv 2)",
            "Description": "Mace: Prepare an attack that will hit in 3 more turns, at the end of turn. Deals melee Bash damage to one enemy. Damage dealt increases by 40% for each time you take damage while preparing (max +400%).",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["14", "14", "14", "16", "16", "16", "16", "18"],
                "Attack Power": ["180%", "195%", "210%", "250%", "260%", "270%", "280%", "300%"],
                "Accuracy": ["-5", "-4", "-3", "-2", "-1", "-1", "-1", "-1"],
                "Action Speed": ["-100", "-100", "-100", "-100", "-100", "-100", "-100", "-100"],
            }
        },
        "Line Shield":{
            "Usage": "Active (Arms)",
            "Unlock": "Ally Shield (Lv 3)",
            "Description": "Shield: Protect an ally line for this turn, which makes you take attacks in their place and decreases all damage taken.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "10", "10"],
                "Damage Taken↓": ["-5%", "-8%", "-10%", "-12%", "-14%", "-15%"],
                "Action Speed": ["+30", "+30", "+30", "+30", "+30", "+30"],
            }
        },
        "Party Shield":{
            "Usage": "Active (Arms)",
            "Unlock": "Line Shield (Lv 3)",
            "Description": "Shield: Protect the whole party for this turn, which makes you take attacks in their place and decreases all damage taken.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "20", "20"],
                "Damage Taken↓": ["-5%", "-8%", "-10%", "-12%", "-14%", "-15%"],
                "Action Speed": ["+30", "+30", "+30", "+30", "+30", "+30"],
            }
        },
        "Knight's Boon":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases natural bind/ailment recovery rate.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Recovery Rate↑": ["+25%", "+32%", "+38%", "+43%", "+47%", "+50%"],
            }
        },
        "Holy Blessing":{
            "Usage": "Active (Head)",
            "Unlock": "Knight's Boon (Lv 3)",
            "Description": "Place a buff on an ally line for 3 turns, which nullifies one ailment infliction received. (Buff is consumed when activated)",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["14", "12", "9", "6"],
                "Action Speed": ["+6", "+6", "+6", "+6"],
            }
        },
        "Rampart":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 3 turns, which decreases physical/elemental damage taken.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "8", "8"],
                "Damage Taken↓": ["-20%", "-23%", "-25%", "-27%", "-29%", "-30%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Healing Wall":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Party members in your line recover HP when they Defend.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "HP Gain": ["10", "15", "20", "25", "29", "33", "37", "40"],
            }
        },
        "Sentry":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily show the location of all FOEs within a certain distance.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "7", "7", "8", "8"],
                "Range": ["1", "3", "4", "6", "8", "10"],
                "Duration": ["30", "40", "50", "60", "80", "100"],
            }
        },
        "Hardy Chef":{
            "Usage": "Passive (Sky)",
            "Unlock": "N/A",
            "Description": "Increases VIT gains and decreases VIT loses from cooked food. Normal maximum level is 1, but multiple instances are added as a single, higher-level skill.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "Stat Gain↑": ["+44%", "+63%", "+77%", "+89%", "+100%"],
                "Stat Loss↓": ["-44%", "-63%", "-77%", "-89%", "-100%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Earth Break":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Vengeance Bash (Lv 2)",
            "Description": "Mace: Deal melee Bash damage to one enemy, with splash effect. Also hits yourself.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["24", "24", "24", "27", "27", "27", "27", "30"],
                "Attack Power": ["180%", "195%", "210%", "250%", "260%", "270%", "280%", "300%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            }
        },
        "Weak Shield":{
            "Usage": "Active (Arms)",
            "Unlock": "Party Shield (Lv 3)",
            "Description": "Shield: Place a buff on yourself for 3 turns, which makes you take attacks in place of allies below 50% HP and decreases all damage taken.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "20", "20"],
                "Damage Taken↓": ["-5%", "-8%", "-10%", "-12%", "-14%", "-15%"],
                "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6"],
            }
        },
        "Guard Mastery":{
            "Usage": "Passive",
            "Unlock": "Weak Shield (Lv 2)",
            "Description": "Chance to nullify physical/elemental damage taken if you're in the front row.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Activation Chance": ["4%", "7%", "10%", "12%", "13%", "14%", "15%", "16%"],
            }
        },
        "HP Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Max HP↑": ["+10%", "+15%", "+19%", "+23%", "+27%", "+30%", "+33%", "+36%", "+38%", "+40%"],
            }
        },
    },
},
"Sniper":{
    "Class Proficiency":{
        "Proficiency / Expertise / Enlightment":{
            "Usage": "Passive (Unique)",
            "Description": "Allows Bow skills to perform Critical Hits, and increases the Critical damage bonus.",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "Crit Bonus↑": ["+20%", "+35%", "+50%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Leg Snipe":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Bow: Deal ranged Stab damage to one enemy, with a chance to inflict Leg Bind. Cannot miss.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "7", "7", "7", "7", "8"],
                "Attack Power": ["120%", "124%", "128%", "138%", "142%", "146%", "150%", "160%"],
                "Infliction Rate": ["45%", "48%", "50%", "55%", "57%", "59%", "61%", "65%"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Arm Snipe":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Leg Snipe (Lv 2)",
            "Description": "Bow: Deal ranged Stab damage to one enemy, with a chance to inflict Arm Bind. Cannot miss.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["6", "6", "6", "7", "7", "7", "7", "8"],
                "Attack Power": ["120%", "124%", "128%", "138%", "142%", "146%", "150%", "160%"],
                "Infliction Rate": ["45%", "48%", "50%", "55%", "57%", "59%", "61%", "65%"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Long Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Bow: Deal ranged Stab damage to one enemy.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "5", "5", "5", "5", "5", "6"],
                "Attack Power": ["140%", "145%", "150%", "155%", "165%", "169%", "173%", "177%", "180%", "190%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Steel Arrow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Long Shot (Lv 3)",
            "Description": "Bow: Deal ranged Stab damage to one enemy, with pierce effect.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "8", "8", "8", "8", "8", "10"],
                "Attack Power": ["120%", "125%", "130%", "135%", "145%", "149%", "153%", "157%", "160%", "170%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Flank Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Long Shot (Lv 3)",
            "Description": "Bow: Deal ranged Stab damage to an enemy line.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "8", "8", "8", "8", "8", "10"],
                "Attack Power": ["105%", "110%", "115%", "120%", "130%", "134%", "138%", "142%", "145%", "155%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Lock On":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 5 turns, which increases Critical Hit rate.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "4", "6", "6", "6"],
                "Crit Rate↑": ["+30%", "+35%", "+40%", "+45%", "+50%", "+60%"],
            }
        },
        "Scavenger":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases enemy drop rates.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Drop Rate↑": ["+1%", "+2%", "+3%", "+4%", "+5%", "+6%"],
            }
        },
        "Spotter":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on the whole party for 5 turns, which increases accuracy.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["6", "6", "6", "6"],
                "Accuracy↑": ["+15%", "+25%", "+33%", "+40%"],
                "Action Speed": ["+6", "+6", "+6", "+6"],
            }
        },
        "Dendrology":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "10% chance to obtain an additional, rare material when gathering from a Chop point.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Head Snipe":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Arm Snipe (Lv 1)",
            "Description": "Bow: Deal ranged Stab damage to one enemy, with a chance to inflict Head Bind. Cannot miss.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "10", "10", "10", "10", "12"],
                "Attack Power": ["140%", "146%", "152%", "164%", "170%", "176%", "182%", "200%"],
                "Infliction Rate": ["45%", "48%", "50%", "55%", "57%", "59%", "61%", "65%"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Chase Bind":{
            "Usage": "Passive",
            "Unlock": "Head Snipe (Lv 2)",
            "Description": "When a party member inflicts a bind on an enemy, perform a follow up attack. Activation chance within a turn starts at 100% and goes down with each activation. (<b>Bug</b>: Leveling does not increase power as it should)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Attack Power": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
                "Max. per Turn": ["1", "1", "1", "2", "2", "2", "2", "3"],
                "Chance Fadeout": ["N/A", "N/A", "N/A", "35%", "35%", "35%", "35%", "25%"],
            }
        },
        "Silver Arrow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Steel Arrow (Lv 2)",
            "Description": "Bow: Deal ranged Stab damage to one enemy. Ignores Stab vulnerability and buffs on the target.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["11", "11", "11", "12", "12", "12", "12", "13"],
                "Attack Power": ["180%", "190%", "200%", "220%", "228%", "236%", "244%", "260%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Squall Volley":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Flank Shot (Lv 2)",
            "Description": "Bow: Deal multiple hits of ranged Stab damage to random enemies. (Once one hit becomes Critical, all remaining hits will also be Critical)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["14", "14", "14", "17", "17", "17", "17", "22"],
                "Attack Power": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
                "Min. Hits": ["2", "2", "2", "4", "4", "4", "4", "6"],
                "Max. Hits": ["7", "8", "9", "11", "12", "13", "14", "16"],
                "Accuracy": ["-60%", "-60%", "-60%", "-60%", "-60%", "-60%", "-60%", "-60%"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Bullseye":{
            "Usage": "Passive",
            "Unlock": "Lock On (Lv 3)",
            "Description": "Increases Critical Hit rate.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Crit Rate↑": ["+8%", "+10%", "+12%", "+14%", "+15%", "+16%", "+17%", "+18%", "+19%", "+20%"],
            }
        },
        "Eagle Eye":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a debuff on one enemy for 3 turns, which increases physical damage taken.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["6", "6", "6", "6"],
                "Damage Dealt↑": ["+20%", "+25%", "+28%", "+30%"],
                "Action Speed": ["-6", "-6", "-6", "-6"],
            }
        },
        "Camouflage":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily decrease the enemy encounter rate.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["7", "7", "7", "10", "10", "10"],
                "Encounters↓": ["x0.8", "x0.7", "x0.6", "x0.5", "x0.4", "x0.3"],
                "Duration": ["50", "50", "50", "100", "100", "100"],
            }
        },
        "High Caution":{
            "Usage": "Passive",
            "Unlock": "Camouflage (Lv 2)",
            "Description": "Chance to nullify enemy ambushes.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["30%", "35%", "40%", "45%", "50%", "60%"],
            }
        },
        "Discerning Eye":{
            "Usage": "Passive (Sky)",
            "Unlock": "N/A",
            "Description": "Increases chance of gathering rare food. Normal maximum level is 1, but multiple instances are added as a single, higher-level skill.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Master (Lv 40)":{
        "Snipe Mastery":{
            "Usage": "Passive",
            "Unlock": "Chase Bind (Lv 3)",
            "Description": "Increases Critical Hit chance for each bind on the target.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Crit Rate↑": ["+10%", "+14%", "+18%", "+22%", "+24%", "+26%", "+28%", "+30%"],
            }
        },
        "Impact Arrow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Silver Arrow (Lv 2)",
            "Description": "Bow: Deal ranged Stab damage to one enemy, with pierce effect. Afterwards, this skill becomes disabled for 2 turns.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["15", "15", "15", "18", "18", "18", "18", "21"],
                "Attack Power": ["210%", "220%", "230%", "260%", "270%", "280%", "290%", "320%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            }
        },
        "Divine Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Squall Volley (Lv 2)",
            "Description": "Bow: Deal ranged Stab damage to one enemy. Damage dealt increases by 100% for each bind on the target, but removes its binds.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["15", "15", "15", "18", "18", "18", "18", "21"],
                "Attack Power": ["140%", "145%", "150%", "165%", "170%", "174%", "178%", "190%"],
                "Accuracy": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            }
        },
        "Power Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["+5%", "+9%", "+12%", "+15%", "+17%", "+19%", "+21%", "+23%"],
            }
        },
    },
},
"Medic":{
    "Class Proficiency":{
        "Proficiency / Expertise / Enlightment":{
            "Usage": "Passive (Unique)",
            "Description": "Increases the effect of healing skills used by any party member.",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "Healing↑": ["+15%", "+20%", "+25%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Healing":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "N/A",
            "Description": "Restore HP to one ally.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "7", "7", "7", "7", "7", "10"],
                "Healing Power": ["70%", "78%", "85%", "90%", "115%", "120%", "124%", "127%", "130%", "150%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Line Heal":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Healing (Lv 3)",
            "Description": "Restore HP to an ally line.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20"],
                "Healing Power": ["60%", "65%", "70%", "75%", "95%", "99%", "102%", "105%", "108%", "120%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Steady Hands":{
            "Usage": "Active (Head)",
            "Unlock": "Healing (Lv 4)",
            "Description": "Place a buff on yourself for 3 turns, which increases the effect of healing skills used.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "6", "6", "6", "8"],
                "Healing↑": ["+35%", "+40%", "+50%", "+54%", "+58%", "+65%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Refresh":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Removes ailments from the targets.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "3", "12", "9", "6", "3"],
                "Targets": ["Single", "Single", "Line", "Line", "Line", "Line"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3"],
            }
        },
        "Treat":{
            "Usage": "Active (Head)",
            "Unlock": "Refresh (Lv 2)",
            "Description": "Removes debuffs from the targets.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "3", "12", "9", "6", "3"],
                "Targets": ["Single", "Single", "Line", "Line", "Line", "Line"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3"],
            }
        },
        "Recovery":{
            "Usage": "Active (Head)",
            "Unlock": "Refresh (Lv 2)",
            "Description": "Removes binds from the targets.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "3", "12", "9", "6", "3"],
                "Targets": ["Single", "Single", "Line", "Line", "Line", "Line"],
                "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3"],
            }
        },
        "Heavy Strike":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Mace/Staff: Deal melee Bash damage to one enemy, with a chance to inflict Stun.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["9", "9", "9", "10", "10", "10", "10", "11"],
                "Attack Power": ["195%", "203%", "210%", "230%", "235%", "240%", "245%", "260%"],
                "Infliction Rate": ["30%", "32%", "34%", "40%", "42%", "44%", "46%", "50%"],
                "Accuracy": ["-5%", "-4%", "-3%", "-2%", "-1%", "+0%", "+0%", "+0%"],
                "Action Speed": ["+3", "+3", "+3", "+4", "+4", "+4", "+4", "+5"],
            }
        },
        "Patch Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Restore HP to the whole party after each battle.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "HP Gain": ["10", "17", "24", "30", "35", "40", "45", "50"],
            }
        },
        "Herbology":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "10% chance to obtain an additional, rare material when gathering from a Take point.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Full Heal":{
            "Usage": "Active (Head)",
            "Unlock": "Line (Lv 3)",
            "Description": "Restore full HP to one ally.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["34", "30", "26", "20"],
                "Action Speed": ["-6", "-6", "-6", "-6"],
            }
        },
        "Party Heal":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Full Heal (Lv 2)",
            "Description": "Restore HP to the whole party.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "27", "27", "27", "27", "27", "35"],
                "Healing Power": ["50%", "55%", "60%", "65%", "80%", "83%", "86%", "88%", "90%", "100%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Revive":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Revive one dead ally.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["15", "15", "15", "17", "17", "17", "17", "20"],
                "HP Gain": ["1", "20", "50", "150", "180", "210", "240", "350"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Group Therapy":{
            "Usage": "Active (Head)",
            "Unlock": "Treat (Lv 1), Recovery (Lv 1)",
            "Description": "Place a buff on yourself for 3 turns, which increases the area of effect (Single → Line → Party) of Refresh, Treat, Recovery and Full Refresh.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["15", "12", "9", "6"],
            }
        },
        "Full Refresh":{
            "Usage": "Active (Head)",
            "Unlock": "Group Therapy (Lv 4)",
            "Description": "Remove all binds, ailments and debuffs on one ally.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["16", "14", "11", "8"],
                "Action Speed": ["-3", "-3", "-3", "-3"],
            }
        },
        "Knockout Blow":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Heavy Strike (Lv 2)",
            "Description": "Mace/Staff: Deal melee Bash damage to one enemy, with a chance to inflict Sleep.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "12", "12", "12", "12", "15"],
                "Attack Power": ["160%", "170%", "180%", "200%", "208%", "214%", "220%", "240%"],
                "Infliction Rate": ["30%", "32%", "34%", "40%", "42%", "44%", "46%", "50%"],
                "Accuracy": ["-5%", "-4%", "-3%", "-2%", "-1%", "+0%", "+0%", "+0%"],
                "Action Speed": ["+3", "+3", "+3", "+4", "+4", "+4", "+4", "+5"],
            }
        },
        "Stretch":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Chance to nullify bind inflictions received.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["20%", "28%", "34%", "40%", "46%", "50%"],
            }
        },
        "Toxin Study":{
            "Usage": "Passive (Sky)",
            "Unlock": "N/A",
            "Description": "Removes poison from poisonous food, making it grant a bonus instead of dealing damage.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Master (Lv 40)":{
        "Auto-Heal":{
            "Usage": "Passive (Head, TEC)",
            "Unlock": "Party Heal (Lv 2)",
            "Description": "30% chance to automatically heal allies if their HP is below 30% after being attacked. (Max once per ally per turn)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Healing Power": ["45%", "55%", "63%", "70%", "75%", "80%", "85%", "90%"],
            }
        },
        "Heal Mastery":{
            "Usage": "Passive",
            "Unlock": "Auto-Heal (Lv 3)",
            "Description": "Increases the effect of healing skills used.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Healing↑": ["+5%", "+10%", "+15%", "+20%", "+23%", "+26%", "+28%", "+30%"],
            }
        },
        "Auto-Revive":{
            "Usage": "Passive (Head)",
            "Unlock": "Revive (Lv 4)",
            "Description": "25% chance to automatically revive allies when they die.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "HP Gain": ["1", "10", "30", "60", "100", "150", "200", "250"],
            }
        },
        "TP Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max TP.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Max TP↑": ["+10%", "+15%", "+19%", "+23%", "+27%", "+30%"],
            }
        },
        "Star Drop":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Knockout Blow (Lv 2)",
            "Description": "Mace/Staff: Deal melee Bash damage to one enemy. Increases all damage taken by the target until the end of turn.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["16", "16", "16", "20", "20", "20", "20", "25"],
                "Attack Power": ["130%", "140%", "150%", "160%", "168%", "174%", "180%", "185%"],
                "Damage Taken↑": ["x1.2", "x1.2", "x1.2", "x1.3", "x1.3", "x1.3", "x1.3", "x1.4"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1"],
            }
        },
    },
},
"Runemaster":{
    "Class Proficiency":{
        "Proficiency / Expertise / Enlightment":{
            "Usage": "Passive (Unique)",
            "Description": "Increases damage dealt and decreases damage taken of elemental or Almighty type for party members in your row.",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "Damage Dealt↑": ["+10%", "+13%", "+15%"],
                "Damage Taken↓": ["-5%", "-8%", "-10%"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Fire Rune":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on all allies and a debuff on all enemies for 3 turns. The buff increases Fire resistance, while the debuff decreases it. (Overrides other Rune buffs/debuffs)",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "7", "7", "7", "8"],
                "Resistance↑\n(Allies)": ["+25%", "+30%", "+40%", "+42%", "+44%", "+50%"],
                "Resistance↓\n(Enemies)": ["-15%", "-20%", "-30%", "-31%", "-32%", "-35%"],
                "Action Speed": ["+10", "+10", "+10", "+10", "+10", "+10"],
            }
        },
        "Fireball Rune":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Fire Rune (Lv 1)",
            "Description": "Deal ranged Fire damage to one enemy, with splash effect.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "11", "11", "11", "11", "11", "15"],
                "Attack Power": ["35%", "39%", "42%", "45%", "55%", "57%", "59%", "61%", "63%", "70%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
            }
        },
        "Ice Rune":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on all allies and a debuff on all enemies for 3 turns. The buff increases Ice resistance, while the debuff decreases it. (Overrides other Rune buffs/debuffs)",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "7", "7", "7", "8"],
                "Resistance↑\n(Allies)": ["+25%", "+30%", "+40%", "+42%", "+44%", "+50%"],
                "Resistance↓\n(Enemies)": ["-15%", "-20%", "-30%", "-31%", "-32%", "-35%"],
                "Action Speed": ["+10", "+10", "+10", "+10", "+10", "+10"],
            }
        },
        "Ice Lance Rune":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Ice Rune (Lv 1)",
            "Description": "Deal ranged Ice damage to one enemy, with pierce effect.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "11", "11", "11", "11", "11", "15"],
                "Attack Power": ["30%", "34%", "37%", "40%", "50%", "53%", "55%", "57%", "59%", "65%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
            }
        },
        "Volt Rune":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on all allies and a debuff on all enemies for 3 turns. The buff increases Volt resistance, while the debuff decreases it. (Overrides other Rune buffs/debuffs)",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "6", "7", "7", "7", "8"],
                "Resistance↑\n(Allies)": ["+25%", "+30%", "+40%", "+42%", "+44%", "+50%"],
                "Resistance↓\n(Enemies)": ["-15%", "-20%", "-30%", "-31%", "-32%", "-35%"],
                "Action Speed": ["+10", "+10", "+10", "+10", "+10", "+10"],
            }
        },
        "Lightning Rune":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Volt Rune (Lv 1)",
            "Description": "Deal melee Volt damage to an enemy line.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "11", "11", "11", "11", "11", "15"],
                "Attack Power": ["45%", "49%", "52%", "55%", "65%", "67%", "69%", "71%", "73%", "80%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
            }
        },
        "Runic Gleam":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 3 turns, which increases elemental and Almighty damage dealt.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["4", "4", "6", "6", "6", "8"],
                "Damage Dealt↑": ["+28%", "+31%", "+37%", "+39%", "+41%", "+45%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "TP Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max TP.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Max TP↑": ["+10%", "+15%", "+19%", "+23%", "+27%", "+30%", "+33%", "+36%"],
            }
        },
        "Herbology":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "10% chance to obtain an additional, rare material when gathering from a Take point.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Flame Rune":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Fireball Rune (Lv 2)",
            "Description": "Deal ranged Fire damage to all enemies.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["15", "15", "15", "20", "20", "20", "20", "25"],
                "Attack Power": ["45%", "47%", "49%", "55%", "57%", "59%", "61%", "65%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
            }
        },
        "Glacier Rune":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Ice Lance Rune (Lv 2)",
            "Description": "Deal multiple hits of ranged Ice damage to random enemies.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["15", "15", "15", "20", "20", "20", "20", "25"],
                "Attack Power": ["28%", "29%", "30%", "30%", "31%", "32%", "33%", "33%"],
                "Min. Hits": ["2", "2", "2", "2", "2", "2", "2", "3"],
                "Max. Hits": ["3", "3", "3", "4", "4", "4", "4", "4"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
            }
        },
        "Storm Rune":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Lightning Rune (Lv 2)",
            "Description": "Deal ranged Volt damage to one enemy.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["15", "15", "15", "20", "20", "20", "20", "25"],
                "Attack Power": ["75%", "80%", "85%", "95%", "99%", "102%", "104%", "110%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
            }
        },
        "Runic Shield":{
            "Usage": "Passive",
            "Unlock": "Runic Gleam (Lv 2)",
            "Description": "Chance to nullify elemental attacks to party members in your line.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "Activation Chance": ["5%", "10%", "13%", "15%"],
            }
        },
        "Runic Guidance":{
            "Usage": "Passive",
            "Unlock": "Runic Shield (Lv 2)",
            "Description": "Increases damage dealt when you hit a weakness.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Damage Dealt↑": ["+25%", "+30%", "+34%", "+36%", "+38%", "+40%"],
            }
        },
        "Free Energy":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Chance to not spend TP when using a skill.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["8%", "13%", "18%", "21%", "23%", "25%"],
            }
        },
        "Runic Flare":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases elemental and Almighty damage dealt.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+5%", "+9%", "+12%", "+15%", "+17%", "+19%", "+21%", "+23%", "+24%", "+25%"],
            }
        },
        "Wise Chef":{
            "Usage": "Passive (Sky)",
            "Unlock": "N/A",
            "Description": "Increases TEC gains and decreases TEC loses from cooked food. Normal maximum level is 1, but multiple instances are added as a single, higher-level skill.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "Stat Gain↑": ["+44%", "+63%", "+77%", "+89%", "+100%"],
                "Stat Loss↓": ["-44%", "-63%", "-77%", "-89%", "-100%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Inferno Rune":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Flame Rune (Lv 2)",
            "Description": "Deal ranged Fire damage to one enemy.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["25", "25", "25", "30", "30", "30", "30", "35"],
                "Attack Power": ["85%", "90%", "95%", "110%", "114%", "117%", "119%", "125%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
            }
        },
        "Blizzard Rune":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Glacier Rune (Lv 2)",
            "Description": "Deal ranged Ice damage to all enemies.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["25", "25", "25", "30", "30", "30", "30", "35"],
                "Attack Power": ["60%", "63%", "66%", "75%", "77%", "79%", "81%", "85%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
            }
        },
        "Galvanic Rune":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Storm Rune (Lv 2)",
            "Description": "Deal multiple hits of ranged Volt damage to random enemies.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["25", "25", "25", "30", "30", "30", "30", "35"],
                "Attack Power": ["28%", "29%", "30%", "30%", "31%", "32%", "33%", "33%"],
                "Min. Hits": ["2", "2", "2", "3", "3", "3", "3", "3"],
                "Max. Hits": ["4", "4", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
            }
        },
        "Rune Mastery":{
            "Usage": "Passive",
            "Unlock": "Runic Guidance (Lv 2)",
            "Description": "Increases damage dealt with Rune skills.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Damage Dealt↑": ["+5%", "+10%", "+14%", "+18%", "+20%", "+22%", "+24%", "+25%"],
            }
        },
        "Origin Rune":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Rune Mastery (Lv 2)",
            "Description": "Deal ranged Almighty damage to all enemies.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["45", "45", "45", "55", "55", "55", "55", "65"],
                "Attack Power": ["100%", "105%", "110%", "120%", "124%", "129%", "132%", "140%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["-15", "-15", "-15", "-15", "-15", "-15", "-15", "-15"],
            }
        },
    },
},
"Dancer":{
    "Class Proficiency":{
        "Proficiency / Expertise / Enlightment":{
            "Usage": "Passive (Unique)",
            "Description": "Increases the duration of Dance buffs (Waltz, Tango and Samba).",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "Duration↑": ["+1", "+2", "+3"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Regen Waltz":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 3 turns, which restores HP to your line at the end of each turn.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "15"],
                "Healing Power": ["40%", "45%", "50%", "55%", "65%", "68%", "71%", "74%", "77%", "85%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Refresh Waltz":{
            "Usage": "Active (Legs)",
            "Unlock": "Regen Waltz (Lv 3)",
            "Description": "Place a buff on yourself for 3 turns, which removes ailments from your line at the end of each turn.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["14", "12", "10", "8"],
                "Action Speed": ["-6", "-6", "-6", "-6"],
            }
        },
        "Attack Tango":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 3 turns, which increases physical damage dealt by your line.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["5", "5", "5", "6", "6", "6", "6", "8"],
                "Damage Dealt↑": ["+20%", "+23%", "+25%", "+30%", "+32%", "+34%", "+36%", "+40%"],
                "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            }
        },
        "Guard Tango":{
            "Usage": "Active (Legs)",
            "Unlock": "Attack Tango (Lv 3)",
            "Description": "Place a buff on yourself for 3 turns, which decreases physical damage taken by your line.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["5", "5", "5", "6", "6", "6", "6", "8"],
                "Damage Taken↓": ["-20%", "-23%", "-25%", "-30%", "-32%", "-34%", "-36%", "-40%"],
                "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            }
        },
        "Counter Samba":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Place a buff on yourself for 3 turns, which gives you a chance to counterattack when your line is hit.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["4", "4", "4", "6", "6", "6", "6", "8"],
                "Activation Chance": ["60%", "60%", "60%", "65%", "65%", "65%", "65%", "70%"],
                "Attack Power": ["100%", "105%", "110%", "115%", "120%", "125%", "130%", "135%"],
                "Accuracy": ["-3%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%", "+0%"],
                "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            }
        },
        "Chase Samba":{
            "Usage": "Active (Legs)",
            "Unlock": "Counter Samba (Lv 3)",
            "Description": "Place a buff on yourself for 3 turns, which makes you follow up attacks by other allies in your line.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["8", "8", "8", "10", "10", "10", "10", "12"],
                "Attack Power": ["80%", "90%", "100%", "100%", "107%", "114%", "120%", "120%"],
                "Max. per Turn": ["1", "1", "1", "2", "2", "2", "2", "2"],
                "Activation Chance\n(Second Hit)": ["N/A", "N/A", "N/A", "50%", "50%", "50%", "50%", "75%"],
                "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-1%"],
                "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            }
        },
        "Fan Dance":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases evasion.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Evasion↑": ["+10%", "+14%", "+18%", "+22%", "+25%", "+27%", "+29%", "+31%", "+33%", "+35%"],
            }
        },
        "Dendrology":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "10% chance to obtain an additional, rare material when gathering from a Chop point.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Freedom Waltz":{
            "Usage": "Active (Legs)",
            "Unlock": "Refresh Waltz (Lv 1)",
            "Description": "Place a buff on yourself for 3 turns, which removes binds from your line at the end of each turn.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["14", "12", "10", "8"],
                "Action Speed": ["-6", "-6", "-6", "-6"],
            }
        },
        "Healing Step":{
            "Usage": "Active (Legs, TEC)",
            "Unlock": "Freedom Waltz (Lv 2)",
            "Description": "Only usable if you have a Waltz buff. Restore HP to the whole party.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "20", "20", "20", "20", "20", "25"],
                "Healing Power": ["50%", "55%", "60%", "65%", "80%", "83%", "86%", "88%", "90%", "100%"],
                "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
            }
        },
        "Energy Tango":{
            "Usage": "Active (Legs)",
            "Unlock": "Guard Tango (Lv 1)",
            "Description": "Place a buff on yourself for 3 turns, which decreases the TP cost of skills used by party members in your line.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["6", "8", "10", "12", "14", "16"],
                "Costs↓": ["-3", "-4", "-5", "-6", "-6", "-8"],
                "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6"],
            }
        },
        "Wide Dance":{
            "Usage": "Active (Legs)",
            "Unlock": "Energy Tango (Lv 2)",
            "Description": "Only usable if you have a Tango buff. For this turn, your Dance buffs will apply to the whole party.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["8", "6", "4", "2"],
                "Action Speed": ["+100", "+100", "+100", "+100"],
            }
        },
        "Trick Samba":{
            "Usage": "Active (Legs)",
            "Unlock": "Chase Samba (Lv 1)",
            "Description": "Place a buff on yourself for 3 turns, which makes other allies in your line follow up after your attacks. Activation chance per turn starts at 100% and goes down with each activation.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "12", "12", "12", "12", "14"],
                "Attack Power": ["80%", "90%", "100%", "100%", "107%", "114%", "120%", "120%"],
                "Max. per Turn": ["2", "2", "2", "3", "3", "3", "3", "3"],
                "Chance Fadeout": ["50%", "50%", "50%", "35%", "35%", "35%", "35%", "25%"],
                "Accuracy": ["-3%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%", "+0%"],
                "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            }
        },
        "Rush Dance":{
            "Usage": "Active (Legs)",
            "Unlock": "Trick Samba (Lv 2)",
            "Description": "Only usable if you have a Samba buff. Prepare to follow up after your allies' attacks this turn, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each activation.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["14", "14", "14", "17", "17", "17", "17", "20"],
                "Attack Power": ["105%", "110%", "115%", "120%", "125%", "129%", "132%", "135%"],
                "Max. per Turn": ["3", "3", "3", "4", "4", "4", "4", "5"],
                "Chance Fadeout": ["25%", "25%", "25%", "20%", "20%", "20%", "20%", "15%"],
                "Accuracy": ["-3%", "-3%", "-3%", "-2%", "-2%", "-2%", "-2%", "-1%"],
                "Action Speed": ["+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60"],
            }
        },
        "Sword Dance":{
            "Usage": "Passive",
            "Unlock": "Fan Dance (Lv 3)",
            "Description": "When using a normal attack there's a chance to perform multiple attacks at once.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["20%", "23%", "26%", "28%", "28%", "30%", "31%", "32%", "33%", "33%"],
                "Max. Hits": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "4"],
            }
        },
        "Burst Saver":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Chance to spend 1 less level of Burst Gauge when you use a Burst skill.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["10%", "14%", "18%", "21%", "23%", "25%"],
            }
        },
        "Lucky Chef":{
            "Usage": "Passive (Sky)",
            "Unlock": "N/A",
            "Description": "Increases LUC gains and decreases LUC loses from cooked food. Normal maximum level is 1, but multiple instances are added as a single, higher-level skill.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "Stat Gain↑": ["+44%", "+63%", "+77%", "+89%", "+100%"],
                "Stat Loss↓": ["-44%", "-63%", "-77%", "-89%", "-100%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Quick Step":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Make target ally act at the start of this turn.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["12", "10", "8", "6"],
            }
        },
        "Beat Dance":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Only usable if you have a Waltz, Tango and Samba buff. Makes all party members deal weapon-based damage to one enemy.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["12", "12", "14", "14", "14", "16"],
                "Attack Power": ["120%", "125%", "135%", "140%", "145%", "155%"],
                "Accuracy": ["-10%", "-8%", "-5%", "-3%", "-2%", "-1%"],
                "Action Speed": ["-20", "-20", "-20", "-20", "-20", "-20"],
            }
        },
        "Dance Mastery":{
            "Usage": "Passive",
            "Unlock": "Beat Dance (Lv 3)",
            "Description": "Increases Burst Gauge gains if you have Dance buffs. Effect is multiplied by the amount of Dance buffs you have.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Burst Gain↑": ["+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8"],
            }
        },
        "Speed Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases accuracy, evasion and action speed.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Accuracy↑": ["+2%", "+5%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%"],
                "Evasion↑": ["+2%", "+5%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%"],
                "Speed↑": ["+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8"],
            }
        },
        "Mist Dance":{
            "Usage": "Passive",
            "Unlock": "Sword Dance (Lv 3)",
            "Description": "Normal attacks gain a chance to inflict Stun.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Infliction Rate": ["10%", "14%", "17%", "20%", "22%", "24%", "26", "28%"],
            }
        },
    },
},
"Arcanist":{
    "Class Proficiency":{
        "Proficiency / Expertise / Enlightment":{
            "Usage": "Passive (Unique)",
            "Description": "Recover TP when a Circle wears off or is dispelled.",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "TP Gain": ["5", "8", "10"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Circle Boon":{
            "Usage": "Passive (TEC)",
            "Unlock": "N/A",
            "Description": "If a Circle is active, restore HP to the whole party at the end of turn.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Healing Power": ["10%", "14%", "18%", "21%", "23%", "25%"],
            }
        },
        "Poison Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "N/A",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Poison on all enemies when placed and at the end of each turn. (Overrides other Circles)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "13", "13", "13", "13", "16"],
                "Infliction Rate\n(Initial)": ["40%", "40%", "40%", "45%", "45%", "45%", "45%", "50%"],
                "Infliction Rate\n(Turn End)": ["30%", "30%", "30%", "35%", "35%", "35%", "35%", "40%"],
                "Poison Power": ["50", "70", "90", "140", "170", "200", "230", "300"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Nerve Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Poison Circle (Lv 2)",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Paralysis on all enemies when placed and at the end of each turn. (Overrides other Circles)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "13", "13", "13", "13", "16"],
                "Infliction Rate\n(Initial)": ["25%", "27%", "30%", "35%", "37%", "39%", "41%", "45%"],
                "Infliction Rate\n(Turn End)": ["15%", "17%", "20%", "25%", "27%", "29%", "31%", "35%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Chain Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "N/A",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Arm Bind on all enemies when placed and at the end of each turn. (Overrides other Circles)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "13", "13", "13", "13", "16"],
                "Infliction Rate\n(Initial)": ["25%", "27%", "30%", "35%", "37%", "39%", "41%", "45%"],
                "Infliction Rate\n(Turn End)": ["15%", "17%", "20%", "25%", "27%", "29%", "31%", "35%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Snare Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Chain Circle (Lv 2)",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Leg Bind on all enemies when placed and at the end of each turn. (Overrides other Circles)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "13", "13", "13", "13", "16"],
                "Infliction Rate\n(Initial)": ["25%", "27%", "30%", "35%", "37%", "39%", "41%", "45%"],
                "Infliction Rate\n(Turn End)": ["15%", "17%", "20%", "25%", "27%", "29%", "31%", "35%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Warding Mist":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Chance to nullify bind/ailment inflictions against party members in your line.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "Activation Chance": ["10%", "15%", "20%", "24%", "27%", "30%"],
            }
        },
        "Tame Ground":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily decrease damage taken from damaging floors.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["4", "4", "4", "4"],
                "Damage Taken↓": ["x0.6", "x0.4", "x0.3", "x0.1"],
                "Duration": ["20", "40", "60", "80"],
            }
        },
        "Bracing Walk":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Restore HP to the whole party for each step taken.",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "HP Gain": ["3", "4", "5", "6", "7", "8", "9", "10"],
            }
        },
        "Herbology":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "10% chance to obtain an additional, rare material when gathering from a Take point.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Dismiss Heal":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Circle Boon (Lv 2)",
            "Description": "Remove an active Circle to restore HP to the whole party.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "10", "10", "10", "10", "10", "12"],
                "Healing Power": ["80%", "90%", "100%", "110%", "130%", "134%", "137%", "140%", "142%", "150%"],
                "Action Speed": ["+3", "+3", "+3", "+3", "+4", "+4", "+4", "+4", "+4", "+5"],
            }
        },
        "Dismiss Blow":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Dismiss Heal (Lv 3)",
            "Description": "Remove an active Circle to deal ranged Almighty damage to one enemy.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["3", "3", "4", "4", "4", "5"],
                "Attack Power": ["80%", "85%", "100%", "104%", "108%", "115%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["+3", "+3", "+5", "+5", "+5", "+7"],
            }
        },
        "Sleep Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Nerve Circle (Lv 2)",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Sleep on all enemies when placed and at the end of each turn. (Overrides other Circles)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["14", "14", "14", "18", "18", "18", "18", "23"],
                "Infliction Rate\n(Initial)": ["25%", "27%", "30%", "35%", "37%", "39%", "41%", "45%"],
                "Infliction Rate\n(Turn End)": ["15%", "17%", "20%", "25%", "27%", "29%", "31%", "35%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Chaos Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Sleep Circle (Lv 3)",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Panic on all enemies when placed and at the end of each turn. (Overrides other Circles)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["20", "20", "20", "25", "25", "25", "25", "30"],
                "Infliction Rate\n(Initial)": ["17%", "19%", "21%", "25%", "27%", "29%", "31%", "35%"],
                "Infliction Rate\n(Turn End)": ["12%", "14%", "16%", "20%", "22%", "24%", "26%", "30%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Hood Circle":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Snare Circle (Lv 2)",
            "Description": "Place a Circle for 3 turns, which attempts to inflict Head Bind on all enemies when placed and at the end of each turn. (Overrides other Circles)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "TP Cost": ["10", "10", "10", "13", "13", "13", "13", "16"],
                "Infliction Rate\n(Initial)": ["25%", "27%", "30%", "35%", "37%", "39%", "41%", "45%"],
                "Infliction Rate\n(Turn End)": ["15%", "17%", "20%", "25%", "27%", "29%", "31%", "35%"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
        "Charm Eye":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a debuff on all enemies for 3 turns, which decreases physical/elemental damage dealt.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["12", "12", "12", "12"],
                "Damage Dealt↓": ["-10%", "-15%", "-18%", "-20%"],
                "Action Speed": ["-6", "-6", "-6", "-6"],
            }
        },
        "Atrophic Eye":{
            "Usage": "Active (Head)",
            "Unlock": "Charm Eye (Lv 2)",
            "Description": "Place a debuff on all enemies for 3 turns, which increases physical/elemental damage taken.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["12", "12", "12", "12"],
                "Damage Taken↑": ["+15%", "+20%", "+23%", "+25%"],
                "Action Speed": ["-6", "-6", "-6", "-6"],
            }
        },
        "Purist Chef":{
            "Usage": "Passive (Sky)",
            "Unlock": "N/A",
            "Description": "Increases TP gains and decreases TP loses from cooked food. Normal maximum level is 1, but multiple instances are added as a single, higher-level skill.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "Stat Gain↑": ["+44%", "+63%", "+77%", "+89%", "+100%"],
                "Stat Loss↓": ["-44%", "-63%", "-77%", "-89%", "-100%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Dismiss Blast":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "Dismiss Blow (Lv 2)",
            "Description": "Remove an active Circle to deal ranged Almighty damage to all enemies.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Cost": ["10", "10", "12", "12", "12", "14"],
                "Attack Power": ["100%", "105%", "120%", "124%", "128%", "135%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["+3", "+3", "+5", "+5", "+5", "+7"],
            }
        },
        "Circle Mastery":{
            "Usage": "Passive",
            "Unlock": "Dismiss Blast (Lv 3)",
            "Description": "Increase the effect (Attack/Healing Power) of Dismiss skills based on the level of the Circle removed. (Applies one modifier based on this skill's level, and a separate one based on the Circle's level)",
            "Starter": "0",
            "Max Level": "8",
            "Data": {
                "Effect↑\n(Mastery Level)": ["x1.05", "x1.1", "x1.15", "x1.2", "x1.23", "x1.26", "x1.28", "x1.3"],
                "Effect↑\n(Circle Level)": ["x1.0", "x1.05", "x1.09", "x1.12", "x1.14", "x1.16", "x1.18", "x1.2"],
            }
        },
        "TP Return":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Recover TP when one of your skills inflicts a bind/ailment on one or more enemies.",
            "Starter": "0",
            "Max Level": "6",
            "Data": {
                "TP Gain": ["3", "6", "8", "10", "11", "12"],
            }
        },
        "Releasal Spell":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Resets one enemy's accumulative resistance.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "TP Cost": ["70", "60", "50", "40"],
            }
        },
        "Ailment Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases bind/ailment/death/stun infliction rates. This bonus is added after applying resistances.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Inflictions↑": ["+2%", "+4%", "+6%", "+8%", "+10%", "+11%", "+12%", "+13%", "+14%", "+15%"],
            }
        },
    },
},
"Bushi":{
    "Class Proficiency":{
        "Proficiency / Expertise / Enlightment":{
            "Usage": "Passive (Unique)",
            "Description": "Recover TP when you perform a normal attack.",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "TP Gain": ["8", "10", "12"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Nerve Strike":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Katana/Mace: Deal melee Bash damage to one enemy, with a chance to inflict Paralysis.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Moon Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Nerve Strike (Lv 3)",
            "Description": "Katana: Deal melee Cut damage to an enemy line.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Skull Crusher":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Nerve Strike (Lv 3)",
            "Description": "Mace: Deal melee Bash damage to one enemy, with a chance to inflict Head Bind.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Blood Surge":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Activate the Blood Surge state, which increases damage dealt but makes you lose HP and TP each time you act.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Endure":{
            "Usage": "Passive",
            "Unlock": "Blood Surge (Lv 1)",
            "Description": "Once per battle, recover HP upon taking lethal damage.",
            "Starter": "0",
            "Max Level": "4",
            "Data": ""
        },
        "Roar":{
            "Usage": "Active (Head, TEC)",
            "Unlock": "N/A",
            "Description": "Dispel all buffs on one enemy. If successful, deal ranged Almighty damage to that enemy. This attack cannot miss.",
            "Starter": "0",
            "Max Level": "4",
            "Data": ""
        },
        "Power Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt.",
            "Starter": "0",
            "Max Level": "10",
            "Data": ""
        },
        "Dendrology":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "10% chance to obtain an additional, rare material when gathering from a Chop point.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Shockwave":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Katana/Mace: Deal ranged Cut damage to all enemies, then spend 25% of current HP.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Ice Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Shockwave (Lv 3)",
            "Description": "Katana: Deal melee Cut+Ice damage to one enemy.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Fire Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Shockwave (Lv 3)",
            "Description": "Mace: Deal melee Bash+Fire damage to one enemy.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Deep Breath":{
            "Usage": "Active (Head)",
            "Unlock": "Endure (Lv 1)",
            "Description": "Deactivate the Blood Surge state at the start of turn, then recover HP and TP.",
            "Starter": "0",
            "Max Level": "4",
            "Data": ""
        },
        "Auto-Surge":{
            "Usage": "Passive",
            "Unlock": "Endure (Lv 2)",
            "Description": "Chance to automatically cast Blood Surge at the start of battle.",
            "Starter": "0",
            "Max Level": "4",
            "Data": ""
        },
        "Charge":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Enter a charge state until the end of next turn, which drastically increases physical damage dealt for your next action.",
            "Starter": "0",
            "Max Level": "4",
            "Data": ""
        },
        "Defiance":{
            "Usage": "Passive",
            "Unlock": "Charge (Lv 2)",
            "Description": "Increases physical damage dealt if you have two weapons equipped.",
            "Starter": "0",
            "Max Level": "6",
            "Data": ""
        },
        "Robust Chef":{
            "Usage": "Passive (Sky)",
            "Unlock": "N/A",
            "Description": "Increases HP gains and decreases HP loses from cooked food. Normal maximum level is 1, but multiple instances are added as a single, higher-level skill.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "Stat Gain↑": ["+44%", "+63%", "+77%", "+89%", "+100%"],
                "Stat Loss↓": ["-44%", "-63%", "-77%", "-89%", "-100%"],
            }
        },
    },
    "Master (Lv 40)":{
        "Flash Slice":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Ice Slash (Lv 2)",
            "Description": "Katana: Deal melee Cut damage to one enemy.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Multi-Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Flash Slice (Lv 3)",
            "Description": "Katana: Deal multiple hits of melee Cut damage to random enemies. Deals more hits the less remaining HP you have.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Meteor Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Fire Strike (Lv 2)",
            "Description": "Mace: Deal melee Bash damage to one enemy, with splash effect.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Fierce Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Meteor Strike (Lv 3)",
            "Description": "Mace: Deal melee Bash damage to one enemy, then inflict Paralysis on yourself.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Surge Mastery":{
            "Usage": "Passive",
            "Unlock": "Deep Breath (Lv 2)",
            "Description": "During Blood Surge, increase damage dealt based on missing TP and decrease damage taken based on missing HP.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Ferocity":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Recover HP when you perform a normal attack.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
    },
},
"Imperial":{
    "Class Proficiency":{
        "Proficiency / Expertise / Enlightment":{
            "Usage": "Passive (Unique)",
            "Description": "Decreases the duration of the Overheat state.",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "Duration↓": ["-1", "-2", "-3"],
            }
        },
    },
    "Novice (Lv 1)":{
        "Sharp Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Drive Blade: Deal melee Cut damage to one enemy. Decreases Overheat time by 1 turn.",
            "Starter": "0",
            "Max Level": "6",
            "Data": ""
        },
        "Impulse Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Drive Blade: Deal melee Cut damage to one enemy, and recover TP. Only usable right after Sharp Edge.",
            "Starter": "0",
            "Max Level": "6",
            "Data": ""
        },
        "Assault Drive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Drive Blade: Deal melee Cut damage to one enemy, then enter Overheat state for 8 turns. Increases damage taken by 50% until it activates. (Not usable during Overheat)",
            "Starter": "0",
            "Max Level": "10",
            "Data": ""
        },
        "Heat Sink":{
            "Usage": "Active (Head)",
            "Unlock": "Assault Drive (Lv 2)",
            "Description": "Only usable during Overheat. Decrease remaining Overheat time.",
            "Starter": "0",
            "Max Level": "4",
            "Data": ""
        },
        "Rear Guard":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on one ally for 5 turns, which decreases damage taken but makes them act last.",
            "Starter": "0",
            "Max Level": "6",
            "Data": ""
        },
        "Power Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Mineralogy":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "10% chance to obtain an additional, rare material when gathering from a Mine point.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Veteran (Lv 20)":{
        "Cool Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Impulse Edge (Lv 2)",
            "Description": "Drive Blade: Deal melee Cut damage to one enemy. Decreases Overheat time by 2 turns. Only usable right after Sharp Edge or Impulse Edge.",
            "Starter": "0",
            "Max Level": "6",
            "Data": ""
        },
        "Charge Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Cool Edge (Lv 2)",
            "Description": "Drive Blade: Deal melee Cut damage to one enemy. Enter a charge state until the end of next turn, which increases all damage dealt for your next action. Only usable right after Sharp Edge or Impulse Edge.",
            "Starter": "0",
            "Max Level": "6",
            "Data": ""
        },
        "Flame Drive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Heat Sink (Lv 2)",
            "Description": "Drive Blade: Deal melee Cut+Fire damage to one enemy, then enter Overheat state for 9 turns. Increases damage taken by 50% until it activates. (Not usable during Overheat)",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Freeze Drive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Heat Sink (Lv 2)",
            "Description": "Drive Blade: Deal melee Cut+Ice damage to one enemy, then enter Overheat state for 9 turns. Increases damage taken by 50% until it activates. (Not usable during Overheat)",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Shock Drive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Heat Sink (Lv 2)",
            "Description": "Drive Blade: Deal melee Cut+Volt damage to one enemy, then enter Overheat state for 9 turns. Increases damage taken by 50% until it activates. (Not usable during Overheat)",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Hawkeye":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a debuff on one enemy for 3 turns, which increases elemental damage taken.",
            "Starter": "0",
            "Max Level": "4",
            "Data": ""
        },
        "Absorber":{
            "Usage": "Passive",
            "Unlock": "Hawkeye (Lv 2)",
            "Description": "Recover TP each time you hit an enemy's weakness.",
            "Starter": "0",
            "Max Level": "6",
            "Data": ""
        },
        "Hunter Sense":{
            "Usage": "Passive (Sky)",
            "Unlock": "N/A",
            "Description": "Chance to not spend the food spot when gathering food. Normal maximum level is 1, but multiple instances are added as a single, higher-level skill.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Master (Lv 40)":{
        "Ignition":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Only usable after entering Overheat a certain amount of times. Dispel Overheat and enter a special state for 3 turns, which prevents you from entering Overheat. (Necessary Overheats are reset upon use)",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Overdrive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Ignition (Lv 4)",
            "Description": "Remove the Ignition state to deal ranged Almighty damage to all enemies. Increases damage taken by 50% until it activates.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Finisher":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Recover TP each time you kill an enemy.",
            "Starter": "0",
            "Max Level": "6",
            "Data": ""
        },
        "Wide Effect":{
            "Usage": "Passive",
            "Unlock": "Finisher (Lv 3)",
            "Description": "Single-target skills have a chance to gain splash effect.",
            "Starter": "0",
            "Max Level": "6",
            "Data": ""
        },
        "Accel Drive":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Drive Blade: Deal melee Cut+Almighty damage to one enemy, then enter Overheat state for 9 turns. Increases damage taken by 50% until it activates. (Not usable during Overheat)",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Drive Mastery":{
            "Usage": "Passive",
            "Unlock": "Accel Drive (Lv 3)",
            "Description": "Increases damage dealt for each time you have entered Overheat. (Stacks upto +100%. Resets upon dying)",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
        "Element Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases elemental and Almighty damage dealt.",
            "Starter": "0",
            "Max Level": "8",
            "Data": ""
        },
    },
},
"Burst Skills":{
    "1 Gauge":{
        "Calm Breath":{
            "Description": "Recover 50% of max HP.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Analyze":{
            "Description": "Register an enemy's details into the Monstrous Codex.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "2 Gauges":{
        "Double Slash":{
            "Description": "Deal 2 hits of STR-based ranged Cut damage to one enemy.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["135%"],
            }
        },
        "Flame Wall":{
            "Description": "Deal TEC-based ranged Fire damage to an enemy line.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["90%"],
            }
        },
        "Superspeed":{
            "Description": "Makes the whole party act at the start of turn for this turn.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Black Mist":{
            "Description": "Prevent binds/ailments on enemies from being naturally healed this turn. Cannot repeatedly affect the same instance of an affliction.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "3 Gauges":{
        "Full Retreat":{
            "Description": "Escape from battle and teleport to the point where you entered the floor.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Holy Gift":{
            "Description": "Increase experience gained by 50%. Only usable once per battle.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Charge Order":{
            "Description": "Increase all damage dealt by the party for this turn.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Damage Dealt↑": ["+40%"],
            }
        },
        "Guard Order":{
            "Description": "Decrease all damage taken by the party for this turn.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Damage Taken↓": ["-40%"],
            }
        },
        "Ice Coffin":{
            "Description": "Deal TEC-based ranged Ice damage to one enemy.",
            "Starter": "0",
            "Max Level": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["140%"],
            }
        },
        "Aegis Guard":{
            "Description": "Nullify all physical attacks to the party for this turn.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Aegis Ward":{
            "Description": "Nullify all elemental attacks to the party for this turn.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Falling Stars":{
            "Description": "Deal 3~4 hits of STR-based ranged Bash damage to random enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["135%"],
            }
        },
    },
    "4 Gauges":{
        "Triumph Song":{
            "Description": "Increase all damage dealt and decrease all damage taken by the party for this turn.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Damage Dealt↑": ["+40%"],
                "Damage Taken↓": ["-40%"],
            }
        },
        "Swipe Slash":{
            "Description": "Deal STR-based ranged Cut damage to all enemies, with a chance to inflict Instant Kill.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["200%"],
                "Infliction Rate": ["35%"],
            }
        },
        "Spectral Cage":{
            "Description": "Attempt to inflict all 3 binds on one enemy.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Infliction Rate": ["110%"],
            }
        },
        "Aegis Shield":{
            "Description": "Nullify all attacks against the party for this turn.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Zeus' Wrath":{
            "Description": "Deal 4~5 hits of TEC-based ranged Volt damage to random enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["50%"],
            }
        },
    },
    "5 Gauges":{
        "Geo Impact":{
            "Description": "Deal STR-based ranged Bash damage to all enemies and inflict Stun. (Ignores Stun resistance and immunity)",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["400%"],
            }
        },
        "Supernova":{
            "Description": "Deal TEC-based ranged Almighty damage to all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["250%"],
            }
        },
        "Hygieia's Bowl":{
            "Description": "Revive, fully heal and remove binds/ailments for the whole party.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
},
"Battle Items":{
    "Healing":{
        "Medica / Medica II / Medica III / Medica IV":{
            "Usage": "20 / 500 / 2.000 / 8.000 en",
            "Unlock": "N/A / Luminous Moss / Aloe / Ambrosia",
            "Description": "Restores HP to one ally.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "HP Gain": ["50", "100", "200", "All"],
            }
        },
        "Nectar / Nectar II":{
            "Usage": "200 / 7.000 en",
            "Unlock": "Small Flower / Raptor Claw",
            "Description": "Revives one ally.",
            "Starter": "0",
            "Max Level": "2",
            "Data": {
                "HP Gain": ["20", "All"],
            }
        },
        "Amrita / Amrita II / Amrita III":{
            "Usage": "1.000 / 8.000 / 20.000 en",
            "Unlock": "Crane Ginseng / Waterlily Leaf / Eerie Scales",
            "Description": "Restores TP to one ally.",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "TP Gain": ["30", "60", "100"],
            }
        },
        "Hamao / Hamao II":{
            "Usage": "2.000 / 10.000 en",
            "Unlock": "Scarlet Sage / Deathly Bud",
            "Description": "Restores HP and TP to one ally.",
            "Starter": "0",
            "Max Level": "2",
            "Data": {
                "HP Gain": ["100", "200"],
                "TP Gain": ["25", "50"],
            }
        },
        "Madora / Madora II":{
            "Usage": "1.500 / 15.000 en",
            "Unlock": "Flame Fruit / Grub Mold",
            "Description": "Restores HP to an ally line.",
            "Starter": "0",
            "Max Level": "2",
            "Data": {
                "HP Gain": ["150", "300"],
            }
        },
    },
    "Status":{
        "Theriaca A / Theriaca B":{
            "Usage": "100 / 90 en",
            "Unlock": "Osmunda Frond / Forest Aloe",
            "Description": "Respectively removes binds or ailments from one ally.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Metopon":{
            "Usage": "1.000 en",
            "Unlock": "Myrciaria Fruit, Sealed Cap",
            "Description": "Removes all buffs on one enemy.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Unihorn":{
            "Usage": "500 en",
            "Unlock": "Valerian",
            "Description": "Removes all debuffs on an ally line.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Power Up":{
        "Bravant":{
            "Usage": "300 en",
            "Unlock": "Stunned Tongue",
            "Description": "Places a buff on one ally for 3 turns, which increases physical damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Damage Dealt↑": ["+30%"],
            }
        },
        "Stonard":{
            "Usage": "150 en",
            "Unlock": "Moss Strawberry",
            "Description": "Places a buff on one ally for 3 turns, which decreases physical damage taken.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Damage Taken↓": ["-30%"],
            }
        },
        "Fire/Ice/Volt Mist":{
            "Usage": "150 en",
            "Unlock": "Monks Cress",
            "Description": "Places a buff on all allies for 3 turns, which increases resistance to Fire/Ice/Volt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Resistance↑": ["+50%"],
            }
        },
        "Cut/Bash/Stab Mist":{
            "Usage": "300 en",
            "Unlock": "Life Honey",
            "Description": "Places a buff on all allies for 3 turns, which increases resistance to Cut/Bash/Stab.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Resistance↑": ["+50%"],
            }
        },
        "Blaze/Freeze/Shock Oil":{
            "Usage": "75 en",
            "Unlock": "Dragon's Blood",
            "Description": "Places a buff on one ally for 3 turns, which imbues their weapon with Fire/Ice/Volt damage.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Attack (TEC)":{
        "Fire Jar":{
            "Usage": "100 en",
            "Unlock": "Mint",
            "Description": "Deals ranged Fire damage to one enemy, with splash effect.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["50%"],
                "Action Speed": ["-9"],
            }
        },
        "Blast Jar":{
            "Usage": "500 en",
            "Unlock": "Hyacinth Petal",
            "Description": "Deals ranged Fire damage to all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["50%"],
                "Action Speed": ["-9"],
            }
        },
        "Ice Jar":{
            "Usage": "100 en",
            "Unlock": "Mint",
            "Description": "Deals ranged Ice damage to one enemy, with pierce effect.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["50%"],
                "Action Speed": ["-9"],
            }
        },
        "Frost Jar":{
            "Usage": "500 en",
            "Unlock": "Hyacinth Petal",
            "Description": "Deals 2~4 hits of ranged Ice damage to random enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["40%"],
                "Action Speed": ["-9"],
            }
        },
        "Volt Jar":{
            "Usage": "100 en",
            "Unlock": "Mint",
            "Description": "Deals ranged Volt damage to an enemy line.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["40%"],
                "Action Speed": ["-9"],
            }
        },
        "Thunderbolt Jar":{
            "Usage": "500 en",
            "Unlock": "Hyacinth Petal",
            "Description": "Deals ranged Volt damage to one enemy.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["90%"],
                "Action Speed": ["-9"],
            }
        },
    },
    "Infliction (LUC)":{
        "Poison/Nerve/Blind/Sleep/Curse/Addle Gas":{
            "Usage": "100 / 200 / 150 / 300 / 800 / 800 en",
            "Unlock": "Shea Fruit / Glove Grass / Gritty Scales / White Apple / Cursed Durian / Evil Copal",
            "Description": "Respectively attempts to inflict Poison, Paralysis, Blind, Sleep, Curse or Panic on all enemies.",
            "Starter": "0",
            "Max Level": "6",
            "Levels": ["Poi", "Par", "Bli", "Sle", "Cur", "Pan"],
            "Data": {
                "Infliction Rate": ["40%", "40%", "40%", "40%", "40%", "30%"],
                "Poison Power": ["50", "N/A", "N/A", "N/A", "N/A", "N/A"],
                "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6"],
            }
        },
    },
    "Rewards":{
        "Formaldehyde":{
            "Usage": "500 en",
            "Unlock": "Horrific Breath",
            "Description": "Until the end of turn, enemies killed will drop all their materials.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    }
},
}

//End of database

var descriptions = {
    "Landsknecht":"Frontline warriors that encourage allies to follow up after their attacks.",
    "Nightseeker":"Assassins that hide to poison enemies then close in to kill them.",
    "Fortress":   "Sturdy knights that put themselves on the line to protect the party.",
    "Sniper":     "Archers that aim at weak spots to incapacitate or deal heavy damage.",
    "Medic":      "Healers that effectively treat the party's injuries and afflictions.",
    "Runemaster": "Offensive casters that control the elements to hit the enemy's weakness.",
    "Dancer":     "Performers who use buffs to strengthen allies and attack alongside them.",
    "Arcanist":   "Support casters that summon magic circles to restrain the enemy.",
    "Bushi":      "Fierce attackers that enter a bloody rage to trade health for power.",
    "Imperial":   "Knights whose mechanical blades deliver devastating but exhausting attacks.",

    "Burst Skills":"Powerful skills available through the Burst system.",
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

function populate_burst(class_name){
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
                var latest
                latest = current_effect
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

populate("Landsknecht")



