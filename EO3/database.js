var data = {
"Sovereign":{
    "Royal Lineage":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "Recover TP each time you receive a buff.",
        "Max Level": "10",
        "Data": {
            "TP Gain": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Guard Order":{
        "Usage": "Active (Head)",   
        "Unlock": "N/A",
        "Description": "Place a buff on an ally row for 3 turns, which decreases physical damage taken.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
            "Damage Taken↓": ["-20%", "-22%", "-24%", "-27%", "-30%", "-33%", "-36%", "-39%", "-42%", "-45%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Reinforce":{
        "Usage": "Passive",
        "Unlock": "Guard Order (Lv 1)",
        "Description": "When you apply a buff, the targets recover HP.",
        "Max Level": "10",
        "Data": {
            "HP Gain": ["6", "10", "14", "18", "22", "26", "30", "34", "38", "42"],
        }
    },
    "Prevent Order":{
        "Usage": "Active (Head)",
        "Unlock": "Guard Order (Lv 3)",
        "Description": "Place a buff on an ally row for 3 turns, which nullifies one ailment infliction received. (Buff is consumed when activated)",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["12", "10", "8", "6", "4"],
            "Turn Speed": ["+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Rally Order":{
        "Usage": "Active (Head)",
        "Unlock": "Guard Order (Lv 5)",
        "Description": "Place a buff on an ally row for 3 turns, which increases Max HP.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "9", "9", "10", "10"],
            "Max HP↑": ["+30%", "+33%", "+36%", "+39%", "+43%", "+47%", "+51%", "+55%", "+60%", "+70%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Protect Order":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Rally Order (Lv 5)",
        "Description": "Place a buff on an ally row for 3 turns, which restores HP at the end of each turn.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
            "Healing Power": ["35%", "40%", "45%", "50%", "55%", "60%", "65%", "70%", "75%", "80%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Attack Order":{
        "Usage": "Active (Head)",
        "Unlock": "N/A",
        "Description": "Place a buff on an ally row for 3 turns, which increases physical damage dealt.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
            "Damage Dealt↑": ["+20%", "+22%", "+24%", "+27%", "+30%", "+33%", "+36%", "+39%", "+42%", "+45%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Fire Arms":{
        "Usage": "Active (Head)",
        "Unlock": "Attack Order (Lv 1)",
        "Description": "Place a buff on one ally for 3 turns, which increases Fire resistance and imbues their weapon with Fire damage.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10"],
            "Resistance↑": ["+10%", "+20%", "+30%", "+40%", "+50%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Freeze Arms":{
        "Usage": "Active (Head)",
        "Unlock": "Attack Order (Lv 1)",
        "Description": "Place a buff on one ally for 3 turns, which increases Ice resistance and imbues their weapon with Ice damage.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10"],
            "Resistance↑": ["+10%", "+20%", "+30%", "+40%", "+50%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Shock Arms":{
        "Usage": "Active (Head)",
        "Unlock": "Attack Order (Lv 1)",
        "Description": "Place a buff on one ally for 3 turns, which increases Volt resistance and imbues their weapon with Volt damage.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10"],
            "Resistance↑": ["+10%", "+20%", "+30%", "+40%", "+50%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Regal Radiance":{
        "Usage": "Active (Head, STR)",
        "Unlock": "Attack Order (Lv 3)",
        "Description": "Dispel an elemental imbue (Arms skill or Oil item) on one ally. If this removed a modifier, the target will deal ranged damage of that element (cannot miss) to all enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
            "Attack Power": ["160%", "162%", "164%", "166%", "168%", "172%", "176%", "180%", "185%", "190%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Ad Nihilo":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Guard Order (Lv 5), Attack Order (Lv 5)",
        "Description": "Dispel all buffs on one enemy. If this removed at least one modifier, deal Almighty damage (cannot miss) to the target.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "13", "13", "14", "14", "15", "15", "16", "16"],
            "Attack Power": ["130%", "140%", "150%", "160%", "170%", "180%", "195%", "210%", "225%", "240%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Royal Veil":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "At the end of each turn, if your HP is full, restore HP the whole party.",
        "Starter": "1",
        "Max Level": "10",
        "Data":{
            "HP Gain": ["4", "7", "10", "14", "18", "22", "28", "34", "40", "46"],
        }
    },
    "Triumphant Cry":{
        "Usage": "Passive",
        "Unlock": "Royal Veil (Lv 5)",
        "Description": "If you're alive at the end of battle, restore HP to the whole party.",
        "Max Level": "10",
        "Data":{
            "HP Gain": ["10", "14", "18", "22", "26", "32", "38", "44", "50", "60"],
        }
    },
    "Monarch March":{
        "Usage": "Passive (Field)",
        "Unlock": "Triumphant Cry (Lv 5)",
        "Description": "Restore HP to the whole party for each step taken.",
        "Max Level": "10",
        "Data":{
            "HP Gain": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Nobility Proof":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "When a buff on yourself wears off or is dispelled, recover TP.",
        "Starter": "1",
        "Max Level": "10",
        "Data":{
            "TP Gain": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        }
    },
    "Negotiation":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Nobility Proof (Lv 1)",
        "Description": "Dispel all buffs on one ally. If at least one modifier was removed, restore HP to the target.",
        "Max Level": "10",
        "Data":{
            "TP Cost": ["4", "4", "5", "5", "6", "6", "7", "7", "8", "8"],
            "Healing Power":["70%", "75%", "80%", "85%", "90%", "95%", "100%", "105%", "110%", "120%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Inspire":{
        "Usage": "Active (Head)",
        "Unlock": "Nobility Proof (Lv 3)",
        "Description": "Dispel all debuffs on an ally row. Restore TP to targets where at least one modifier was removed.",
        "Max Level": "10",
        "Data":{
            "TP Cost": ["8", "8", "9", "9", "10", "10", "11", "11", "12", "12"],
            "TP Gain": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Knighthood":{
        "Usage": "Active (Head)",
        "Unlock": "Nobility Proof (Lv 5)",
        "Description": "Empower one ally to make it act at the start of this turn.",
        "Max Level": "5",
        "Data":{
            "TP Cost": ["12", "10", "8", "6", "4"],
        }
    },
},
"Gladiator":{
    "Endless Battle":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "Increases physical damage dealt.",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+3%", "+5%", "+7%", "+9%", "+11%", "+13%", "+16%", "+19%", "+22%", "+25%"],
        }
    },
    "Sword Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases damage dealt with Sword's normal attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%"],
        }
    },
    "Break":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": "Sword: Deal melee Cut damage to one enemy.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "7", "7", "8", "8"],
            "Attack Power": ["130%", "132%", "134%", "136%", "138%", "143%", "148%", "153%", "158%", "165%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+1%", "+1%", "+2%", "+2%", "+3%"],
            "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
        }
    },
    "Rush":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 3)",
        "Description": "Sword: Deal multiple hits of melee Cut damage to random enemies (max once each).",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["7", "7", "8", "8", "9", "9", "10", "10", "11", "12"],
            "Attack Power": ["105%", "108%", "111%", "114%", "117%", "120%", "123%", "127%", "131%", "135%"],
            "Hits": ["2~3", "2~3", "2~4", "2~4", "2~4", "2~5", "2~5", "2~5", "2~6", "3~6"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
        }
    },
    "Bind Cut":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 3), Break (Lv 5)",
        "Description": "Sword: Deal melee Cut damage to one enemy. Stronger if the target has a bind.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "9", "10", "10", "11", "11", "12", "12"],
            "Attack Power\n(Normal)": ["140%", "143%", "146%", "149%", "152%", "155%", "160%", "165%", "170%", "175%"],
            "Attack Power\n(Bind)": ["280%", "292%", "304%", "316%", "328%", "340%", "360%", "380%", "400%", "420%"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+1%", "+1%", "+2%", "+2%", "+3%"],
            "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
        }
    },
    "Rampage":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 7)",
        "Description": "Sword: Deal melee Cut damage to all enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "13", "13", "14", "14", "15", "16", "17", "18"],
            "Attack Power": ["110%", "113%", "116%", "119%", "122%", "125%", "128%", "131%", "135%", "140%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3"],
        }
    },
    "Blade Rave":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 10), Rush (Lv 5)",
        "Description": "Sword: Deal multiple hits of melee Cut damage to random enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["13", "14", "15", "17", "18", "19", "22", "23", "24", "27"],
            "Attack Power": ["80%", "82%", "84%", "84%", "86%", "88%", "88%", "90%", "92%", "95%"],
            "Hits": ["3", "3", "3", "3~4", "3~4", "3~4", "3~5", "3~5", "3~5", "4~5"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["+9", "+9", "+9", "+9", "+9", "+9", "+9", "+9", "+9", "+9"],
        }
    },
    "Club Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases damage dealt with Club's normal attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Dealt": ["+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%"],
        }
    },
    "Crushing Blow":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Club Mastery (Lv 1)",
        "Description": "Club: Deal melee Bash damage to one enemy, with a chance to inflict Panic.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "7", "7", "8", "8"],
            "Attack Power": ["130%", "132%", "134%", "136%", "138%", "143%", "148%", "153%", "158%", "165%"],
            "Infliction Rate": ["25%", "27%", "29%", "31%", "34%", "37%", "40%", "43%", "46%", "50%"],
            "Accuracy": ["-3%", "-3%", "-3%", "-3%", "-2%", "-2%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Arm Breaker":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Club Mastery (Lv 3)",
        "Description": "Club: Deal melee Bash damage to one enemy, with a chance to inflict Arm Bind.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "9", "9", "10", "10"],
            "Attack Power": ["150%", "152%", "154%", "156%", "158%", "160%", "166%", "172%", "178%", "185%"],
            "Infliction Rate": ["40%", "42%", "44%", "46%", "48%", "50%", "52%", "54%", "56%", "60%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Freezing Blow":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Club Mastery (Lv 3), Crushing Blow (Lv 5)",
        "Description": "Club: Deal melee Bash+Ice damage to one enemy.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "9", "10", "10", "11", "11", "12", "12"],
            "Attack Power": ["150%", "155%", "160%", "165%", "170%", "175%", "180%", "185%", "190%", "200%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
        }
    },
    "Nine Smashes":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Club Mastery (Lv 10), Arm Breaker (Lv 5)",
        "Description": "Club: Deal multiple hits of melee Bash damage to one enemy. Highly innacurate.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "14", "15", "17", "18", "20", "22", "25"],
            "Attack Power": ["80%", "82%", "84%", "84%", "86%", "86%", "88%", "88%", "90%", "90%"],
            "Hits": ["2~5", "2~5", "2~5", "2~6", "2~6", "2~7", "2~7", "2~8", "2~8", "2~9"],
            "Accuracy": ["-30%", "-30%", "-30%", "-40%", "-40%", "-40%", "-40%", "-55%", "-55%", "-55%"],
            "Action Speed": ["-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5"],
        }
    },
    "Wild Swings":{
        "Usage": "Passive",
        "Unlock": "Sword Mastery (Lv 5), Club Mastery (Lv 5)",
        "Description": "Single-target skills have a chance to also hit to the left and/or right of the target. (Chance rolled separately for each side)",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Activation Chance": ["30%", "32%", "34%", "36%", "38%", "42%", "46%", "50%", "55%", "60%"],
        }
    },
    "Wolf Howl":{
        "Usage": "Active (Head)",
        "Unlock": "N/A",
        "Description": "Place a debuff on all enemies for 4 turns, which increases all damage taken. Stronger effect on enemies with an ailment.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["7", "7", "7", "8", "8", "8", "8", "9", "9", "10"],
            "Damage Taken↑\n(Normal)": ["+10%", "+11%", "+11%", "+12%", "+12%", "+13%", "+13%", "+14%", "+14%", "+15%"],
            "Damage Taken↑\n(Ailment)": ["+26%", "+29%", "+32%", "+35%", "+38%", "+41%", "+44%", "+47%", "+50%", "+55%"],
            "Action Speed": ["+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3"],
        }
    },
    "Berserker Vow":{
        "Usage": "Active (Head)",
        "Unlock": "N/A",
        "Description": "Spend part of current HP to place a buff on yourself for 3 turns, which strongly increases all damage dealt.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"],
            "HP Cost": ["30%", "35%", "45%", "50%", "55%", "60%", "65%", "70%", "80%", "90%"],
            "Damage Dealt↑": ["+30%", "+36%", "+42%", "+48%", "+54%", "+60%", "+67%", "+74%", "+82%", "+90%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Avenger":{
        "Usage": "Passive",
        "Unlock": "Berserker Vow (Lv 1)",
        "Description": "Recover HP each time an ally dies.",
        "Max Level": "10",
        "Data":{
            "HP Gain": ["50", "60", "70", "80", "90", "100", "120", "140", "160", "200"],
        }
    },
    "Charge":{
        "Usage": "Active (Arms)",
        "Unlock": "Avenger (Lv 3), Wolf Howl (Lv 3)",
        "Description": "Enter a charge state until the end of next turn, which massively increases physical damage dealt for your next action.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["2", "3", "4", "5", "6"],
            "Damage Dealt↑": ["+110%", "+120%", "+130%", "+140%", "+160%"],
            "Action Speed": ["-100", "-100", "-100", "-100", "-100"],
        }
    },
    "White Flame":{
        "Usage": "Active (Head)",
        "Unlock": "Berserker Vow (Lv 5)",
        "Description": "Place a buff on yourself for 3 turns, which makes you immune to ailment inflictions.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["12", "10", "8", "6", "3"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Stun Attack":{
        "Usage": "Passive (LUC)",
        "Unlock": "White Flame (Lv 3)",
        "Description": "Normal attacks gain a chance to inflict Stun.",
        "Max Level": "10",
        "Data":{
            "Infliction Rate": ["20%", "23%", "27%", "31%", "35%", "39%", "43%", "47%", "51%", "55%"],
        }
    },
},
"Hoplite":{
    "Guardian":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "Decreases physical damage taken.",
        "Max Level": "10",
        "Data": {
            "Damage Taken↓": ["-10%", "-13%", "-16%", "-19%", "-21%", "-24%", "-28%", "-32%", "-36%", "-40%"],
        }
    },
    "Shield Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decreases physical damage taken if you have a Shield equipped.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Taken↓": ["-1%", "-2%", "-3%", "-4%", "-5%", "-6%", "-7%", "-8%", "-9%", "-10%"],
        }
    },
    "Line Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 1)",
        "Description": "Shield: Protect an ally row for this turn, which decreases physical damage taken. Stronger effect if used on your same row.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "6", "6", "7", "9"],
            "Damage Taken↓\n(Same Row)": ["-23%", "-26%", "-29%", "-31%", "-34%", "-37%", "-40%", "-43%", "-46%", "-50%"],
            "Damage Taken↓\n(Other Row)": ["-10%", "-11%", "-12%", "-13%", "-14%", "-16%", "-18%", "-20%", "-22%", "-25%"],
            "Action Speed": ["+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30"],
        }
    },
    "Bodyguard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 3)",
        "Description": "Shield: Protect one ally for this turn, which makes you take attacks in their place. Decrease damage taken from those redirected attacks.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "7", "7", "8", "8"],
            "Damage Taken↓": ["-30%", "-33%", "-36%", "-39%", "-42%", "-45%", "-48%", "-52%", "-56%", "-60%"],
            "Action Speed": ["+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30"],
        }
    },
    "Antifire":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 5)",
        "Description": "Shield: Protect the whole party for this turn, which decreases Fire damage taken.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "7", "7", "8", "12"],
            "Damage Taken↓": ["-10%", "-15%", "-20%", "-25%", "-30%", "-36%", "-42%", "-48%", "-55%", "-100%"],
            "Action Speed": ["+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30"],
        }
    },
    "Anticold":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 5)",
        "Description": "Shield: Protect the whole party for this turn, which decreases Ice damage taken.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "7", "7", "8", "12"],
            "Damage Taken↓": ["-10%", "-15%", "-20%", "-25%", "-30%", "-36%", "-42%", "-48%", "-55%", "-100%"],
            "Action Speed": ["+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30"],
        }
    },
    "Antivolt":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 5)",
        "Description": "Shield: Protect the whole party for this turn, which decreases Volt damage taken.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "7", "7", "8", "12"],
            "Damage Taken↓": ["-10%", "-15%", "-20%", "-25%", "-30%", "-36%", "-42%", "-48%", "-55%", "-100%"],
            "Action Speed": ["+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30", "+30"],
        }
    },
    "Overwatch":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 8), Selflessness (Lv 3)",
        "Description": "Shield: Protect another ally for this turn, which nullifies attacks against them if the calculated damage is higher than your current HP.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["18", "15", "12", "9", "6"],
            "Action Speed": ["+30", "+30", "+30", "+30", "+30"],
        }
    },
    "Selflessness":{
        "Usage": "Active (Head)",
        "Unlock": "N/A",
        "Description": "Spend 50% of current HP to place a buff on yourself for 3 turns, which strongly decreases physical damage taken.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "6", "6", "7", "7", "8", "8", "9", "10"],
            "Damage Taken↓": ["-40%", "-43%", "-46%", "-49%", "-52%", "-55%", "-58%", "-62%", "-66%", "-70%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Provoke":{
        "Usage": "Active (Head)",
        "Unlock": "N/A",
        "Description": "Place a buff on yourself for 3 turns, which increases enemy aggro. Actual increase on each attack is a random value between 3 and this skill's bonus. (For reference, natural aggro is a random value from 0 to 4, plus a bonus from 0 to 6 to one random ally)",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "6", "6", "7", "7"],
            "Max. Aggro Bonus": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "15"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Parry":{
        "Usage": "Passive",
        "Unlock": "Provoke (Lv 5)",
        "Description": "Chance to nullify physical attacks received.",
        "Max Level": "5",
        "Data": {
            "Activation Chance": ["4%", "7%", "10%", "14%", "18%"],
        }
    },
    "Magic Parry":{
        "Usage": "Passive",
        "Unlock": "Provoke (Lv 5)",
        "Description": "Chance to nullify elemental attacks received.",
        "Max Level": "5",
        "Data": {
            "Activation Chance": ["4%", "7%", "10%", "14%", "18%"],
        }
    },
    "Spear Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases damage dealt with Spear's normal attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%"],
        }
    },
    "Switch Stab":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Spear Mastery (Lv 1)",
        "Description": "Spear: Deal ranged Stab damage to one enemy. If it lands, switch rows.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "6", "6", "7", "7", "8", "8", "9", "9"],
            "Attack Power": ["110%", "113%", "116%", "122%", "128%", "136%", "142%", "148%", "154%", "160%"],
            "Accuracy": ["-2%", "-2%", "-1%", "-1%", "+0%", "+0%", "+1%", "+1%", "+2%", "+2%"],
            "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
        }
    },
    "Blitzritter":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Spear Mastery (Lv 5)",
        "Description": "Spear: Deal ranged Stab+Volt damage to one enemy.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["7", "7", "8", "8", "9", "9", "10", "10", "11", "11"],
            "Attack Power": ["120%", "127%", "134%", "141%", "148%", "155%", "162%", "169%", "177%", "185%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
        }
    },
    "Long Stride":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Spear Mastery (Lv 7), Switch Stab (Lv 3)",
        "Description": "Spear: Deal ranged Stab damage to all enemies. Stronger if you're in the back row.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["12", "12", "13", "13", "14", "14", "15", "15", "16", "16"],
            "Attack Power\n(Front Row)": ["70%", "74%", "78%", "82%", "86%", "90%", "95%", "100%", "105%", "110%"],
            "Attack Power\n(Back Row)": ["105%", "113%", "121%", "130%", "139%", "148%", "159%", "172%", "184%", "198%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", ],
        }
    },
    "Shrug Off":{
        "Usage": "Active (No parts)",
        "Unlock": "N/A",
        "Description": "Remove ailments and binds on yourself.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["12", "10", "8", "6", "4"],
            "Action Speed": ["+0", "+0", "+0", "+0", "+0"],
        }
    },
    "Recuperate":{
        "Usage": "Passive",
        "Unlock": "Shrug Off (Lv 3)",
        "Description": "When you Defend, recover HP.",
        "Max Level": "10",
        "Data": {
            "HP Gain": ["10", "15", "20", "25", "30", "35", "40", "45", "50", "60"],
        }
    },
    "Vigilance":{
        "Usage": "Active (Field)",
        "Unlock": "N/A",
        "Description": "Temporarily decrease the encounter rate.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10"],
            "Encounter Rate↓": ["x0.6", "x0.55", "x0.5", "x0.4", "x0.3"],
            "Duration (Steps)": ["30", "40", "50", "60", "80"],
        }
    },
},
"Buccaneer":{
    "Trickster":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "Recover TP each time you use a direct attack skill.",
        "Max Level": "10",
        "Data": {
            "TP Gain": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Rapier Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases damage dealt with Rapier's normal attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%"],
        }
    },
    "Lights Out":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Rapier Mastery (Lv 1)",
        "Description": "Rapier: Deal melee Stab damage to one enemy, with a chance to inflict Blind.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "9", "10", "11", "12"],
            "Attack Power": ["110%", "114%", "118%", "122%", "126%", "130%", "135%", "145%", "155%", "165%"],
            "Infliction Rate": ["42%", "44%", "46%", "48%", "50%", "54%", "58%", "62%", "66%", "70%"],
            "Accuracy": ["+1%", "+1%", "+2%", "+2%", "+3%", "+3%", "+4%", "+4%", "+5%", "+5%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Chase Saber":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Rapier Mastery (Lv 3)",
        "Description": "Rapier: Prepare to follow up after your allies' Cut attacks this turn, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each hit performed.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "9", "10", "11", "12", "13"],
            "Attack Power": ["100%", "107%", "114%", "122%", "130%", "138%", "146%", "154%", "162%", "170%"],
            "Chance Fadeout": ["40%", "37%", "34%", "31%", "28%", "25%", "22%", "19%", "16%", "13%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60"],
        }
    },
    "Chase Blow":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Rapier Mastery (Lv 3)",
        "Description": "Rapier: Prepare to follow up after your allies' Bash attacks this turn, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each hit performed.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "9", "10", "11", "12", "13"],
            "Attack Power": ["100%", "107%", "114%", "122%", "130%", "138%", "146%", "154%", "162%", "170%"],
            "Chance Fadeout": ["40%", "37%", "34%", "31%", "28%", "25%", "22%", "19%", "16%", "13%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60"],
        }
    },
    "Chase Thrust":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Rapier Mastery (Lv 3)",
        "Description": "Rapier: Prepare to follow up after your allies' Stab attacks this turn, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each hit performed.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "9", "10", "11", "12", "13"],
            "Attack Power": ["100%", "107%", "114%", "122%", "130%", "138%", "146%", "154%", "162%", "170%"],
            "Chance Fadeout": ["40%", "37%", "34%", "31%", "28%", "25%", "22%", "19%", "16%", "13%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60"],
        }
    },
    "Hanging":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Rapier Mastery (Lv 5)",
        "Description": "Rapier: Deal melee Stab damage to one enemy, with a chance to inflict Head Bind.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
            "Attack Power": ["160%", "166%", "172%", "178%", "184%", "197%", "210%", "223%", "236%", "250%"],
            "Infliction Rate": ["42%", "44%", "46%", "48%", "50%", "52%", "54%", "56%", "58%", "60%"],
            "Accuracy": ["+1%", "+1%", "+2%", "+2%", "+3%", "+3%", "+4%", "+4%", "+5%", "+5%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Gun Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases damage dealt with Gun's normal attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%"],
        }
    },
    "Quick Draw":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gun Mastery (Lv 1)",
        "Description": "Gun: Deal multiple hits of ranged Stab damage to random enemies. Hits at the start of the turn.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "14"],
            "Attack Power": ["70%", "71%", "71%", "72%", "74%", "74%", "76%", "78%", "80%", "80%"],
            "Hits": ["2", "2", "2~3", "2~3", "2~3", "2~4", "2~4", "2~4", "2~4", "2~5"],
            "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Chase Flame":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Gun Mastery (Lv 3)",
        "Description": "Gun: Prepare to follow up after your allies' Fire attacks this turn, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each hit performed.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "9", "10", "11", "12", "13"],
            "Attack Power": ["100%", "107%", "114%", "122%", "130%", "138%", "146%", "154%", "162%", "170%"],
            "Chance Fadeout": ["40%", "37%", "34%", "31%", "28%", "25%", "22%", "19%", "16%", "13%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60"],
        }
    },
    "Chase Ice":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Gun Mastery (Lv 3)",
        "Description": "Gun: Prepare to follow up after your allies' Ice attacks this turn, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each hit performed.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "9", "10", "11", "12", "13"],
            "Attack Power": ["100%", "107%", "114%", "122%", "130%", "138%", "146%", "154%", "162%", "170%"],
            "Chance Fadeout": ["40%", "37%", "34%", "31%", "28%", "25%", "22%", "19%", "16%", "13%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60"],
        }
    },
    "Chase Volt":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Gun Mastery (Lv 3)",
        "Description": "Gun: Prepare to follow up after your allies' Volt attacks this turn, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each hit performed.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "9", "10", "11", "12", "13"],
            "Attack Power": ["100%", "107%", "114%", "122%", "130%", "138%", "146%", "154%", "162%", "170%"],
            "Chance Fadeout": ["40%", "37%", "34%", "31%", "28%", "25%", "22%", "19%", "16%", "13%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60"],
        }
    },
    "Rapid Fire":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gun Mastery (Lv 5)",
        "Description": "Gun: Deal 3 hits of ranged Stab damage to one enemy.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "11", "11", "12", "12", "13", "14", "15", "16"],
            "Attack Power": ["60%", "63%", "66%", "69%", "72%", "75%", "82%", "90%", "98%", "105%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Swashbuckling":{
        "Usage": "Passive",
        "Unlock": "Rapier Mastery (Lv 8), Gun Mastery (Lv 8)",
        "Description": "When using a normal attack there's a chance to perform multiple attacks at once.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Activation Chance": ["10%", "13%", "16%", "19%", "21%", "24%", "27%", "30%", "33%", "36%"],
            "Hits": ["2", "2", "2", "2", "2", "2", "2", "2~3", "2~3", "2~4"],
        }
    },
    "Pincushion":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Rapier Mastery (Lv 10), Gun Mastery (Lv 10)",
        "Description": "Rapier/Gun: Deal multiple hits of melee/ranged Stab damage to random enemies. Each point of AGI on the user adds 3% to the Attack Power.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["19", "20", "21", "26", "27", "28", "29", "30", "31", "32"],
            "Attack Power": ["110%", "113%", "117%", "121%", "125%", "129%", "133%", "137%", "141%", "145%"],
            "Hits": ["1~2", "1~2", "1~2", "1~3", "1~3", "1~3", "1~3", "1~3", "1~3", "1~3"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Eagle Eye":{
        "Usage": "Active (Head)",
        "Unlock": "N/A",
        "Description": "Place a debuff on all enemies for 3 turns, which increases all damage taken.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["5", "6", "7", "8", "9"],
            "Damage Taken↑": ["+10%", "+15%", "+20%", "+25%", "+35%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Lady Luck":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases Critical Hit chance.",
        "Max Level": "10",
        "Data": {
            "Crit Rate↑": ["+5%", "+6%", "+7%", "+8%", "+10%", "+12%", "+14%", "+16%", "+18%", "+20%"],
        }
    },
    "Limit Boost":{
        "Usage": "Passive",
        "Unlock": "Eagle Eye (Lv 3), Lady Luck (Lv 3)",
        "Description": "Increases minimum Limit Gauge gains. (For reference, normal gain is a random value from 5 to 15)",
        "Max Level": "5",
        "Data": {
            "Min. Limit Gain↑": ["+2", "+4", "+6", "+8", "+10"],
        }
    },
    "Troublemaker":{
        "Usage": "Active (Field)",
        "Unlock": "N/A",
        "Description": "Temporarily increase the encounter rate.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["3", "3", "3", "3", "3"],
            "Encounter Rate↑": ["x2.0", "x2.2", "x2.4", "x2.7", "x3.0"],
            "Duration (Steps)": ["30", "35", "40", "45", "50"],
        }
    },
},
"Ninja":{
    "Mystic Calm":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "Decreases the TP cost of all skills (to a minimum of 1). Removes the back row penalty for melee attacks.",
        "Max Level": "10",
        "Data": {
            "TP Cost↓": ["-0", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"],
        }
    },
    "Ninpo: Mirage":{
        "Usage": "Active (Head)",
        "Unlock": "N/A",
        "Description": "Summon a decoy copy of yourself. This copy cannot act and has a small aggro bonus.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["10", "9", "8", "7", "6"],
            "Decoy's HP": ["1", "10", "20", "40", "80"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Otori":{
        "Usage": "Active (Head)",
        "Unlock": "Ninpo:Mirage (Lv 1)",
        "Description": "Place a buff on one ally for 3 turns, which increases enemy aggro. Actual increase on each attack is a random value between 3 and this skill's bonus. (For reference, natural aggro is a random value from 0 to 4, plus a bonus from 0 to 6 to one random ally)",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "6", "6", "7", "7", "8", "8", "9", "9"],
            "Max. Aggro Bonus": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "15"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Ninpo: Double":{
        "Usage": "Active (Head)",
        "Unlock": "Ninpo:Mirage (Lv 3)",
        "Description": "Spend 50% of current HP and TP, then summon a fully controllable clone of yourself.",
        "Max Level": "1",
        "Data": {
            "TP Cost": ["10"],
            "Action Speed": ["+6"],
        }
    },
    "Revenge Bomb":{
        "Usage": "Passive (STR)",
        "Unlock": "Otori (Lv 3), Ninpo:Double (Lv 1)",
        "Description": "Upon dying, deal melee Fire damage to your killer. (Does not trigger for the decoy from Ninpo: Mirage)",
        "Max Level": "10",
        "Data": {
            "Attack Power": ["200%", "220%", "240%", "270%", "300%", "330%", "370%", "410%", "450%", "500%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
        }
    },
    "Knife Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases damage dealt with Knife's normal attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%"],
        }
    },
    "Shadow Bind":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Knife Mastery (Lv 1)",
        "Description": "Knife: Deal melee Cut damage to one enemy, with a chance to inflict Leg Bind.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "9", "10", "11", "12"],
            "Attack Power": ["140%", "145%", "150%", "155%", "160%", "166%", "172%", "178%", "184%", "190%"],
            "Infliction Rate": ["33%", "36%", "39%", "42%", "45%", "48%", "51%", "54%", "57%", "60%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Izuna":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Knife Mastery (Lv 3), Shadow Bind (Lv 3)",
        "Description": "Knife: Deal melee Cut damage to one enemy, with a chance to inflict Petrify.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
            "Attack Power": ["140%", "147%", "154%", "161%", "168%", "181%", "194%", "207%", "221%", "235%"],
            "Infliction Rate": ["25%", "27%", "29%", "31%", "33%", "35%", "37%", "39%", "42%", "45%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Hawk Strike":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Knife Mastery (Lv 5)",
        "Description": "Knife: Deal multiple hits of melee Cut damage to random enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["7", "8", "10", "11", "12", "14", "16", "18", "20", "22"],
            "Attack Power": ["80%", "85%", "85%", "90%", "95%", "95%", "100%", "105%", "105%", "110%"],
            "Hits": ["2", "2", "2~3", "2~3", "2~3", "2~4", "2~4", "2~4", "3~4", "3~4"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["+9", "+9", "+9", "+9", "+9", "+9", "+9", "+9", "+9", "+9"],
        }
    },
    "Drawing Slice":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Knife Mastery (Lv 10), Revenge Bomb (Lv 3)",
        "Description": "Knife: Deal multiple hits of melee Cut damage to random enemies. Damage is doubled for each clone on the field, but dispels all clones. (Damage is divided by 4 if there's no clones)",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["18", "19", "20", "22", "24", "26", "29", "32", "36", "40"],
            "Attack Power": ["100%", "105%", "110%", "117.5%", "125%", "132.5%", "140%", "147.5%", "155%", "165%"],
            "Hits": ["3", "3", "3~4", "3~4", "3~4", "3~4", "3~5", "3~5", "3~5", "3~5"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["+9", "+9", "+9", "+9", "+9", "+9", "+9", "+9", "+9", "+9"],
        }
    },
    "Ninpo: Daggers":{
        "Usage": "Active (Head, STR, LUC)",
        "Unlock": "N/A",
        "Description": "Deal 3 hits of ranged stab damage to random enemies (max once each), with a chance to inflict Sleep.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "7", "7", "8", "8"],
            "Attack Power": ["40%", "44%", "48%", "52%", "56%", "60%", "64%", "68%", "72%", "80%"],
            "Infliction Rate": ["10%", "13%", "16%", "19%", "22%", "25%", "28%", "32%", "36%", "40%"],
            "Accuracy": ["-2%", "-2%", "-1%", "-1%", "+0%", "+0%", "+1%", "+1%", "+2%", "+2%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Ninpo: Mirror":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Ninpo:Daggers (Lv 1)",
        "Description": "Target one enemy with an ailment, then attempt to inflict that ailment on all other enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "6", "6", "9", "9"],
            "Infliction Rate": ["30%", "34%", "38%", "42%", "46%", "50%", "55%", "60%", "99%", "999%"],
            "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
        }
    },
    "Ninpo: Caltrops":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Ninpo:Daggers (Lv 3)",
        "Description": "Target an ally row and prepare to counterattack each time it's hit this turn. On each activation, deal fixed melee Cut damage (cannot miss) to the attacker, with a chance to inflict Poison.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "7", "7", "8", "8"],
            "Fixed Damage": ["20", "25", "30", "35", "40", "50", "60", "70", "80", "90"],
            "Infliction Rate": ["40%", "42%", "44%", "46%", "48%", "50%", "52%", "54%", "56%", "60%"],
            "Poison Power": ["15", "18", "21", "24", "27", "30", "35", "40", "45", "50"],
        }
    },
    "Beheading":{
        "Usage": "Passive (LUC)",
        "Unlock": "Ninpo:Mirror (Lv 3), Ninpo:Caltrops (Lv 5)",
        "Description": "Normal attacks gain a chance to inflict Instant Death.",
        "Max Level": "10",
        "Data": {
            "Infliction Rate": ["7%", "8%", "9%", "10%", "11%", "12%", "14%", "16%", "18%", "20%"],
        }
    },
    "Concealment":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases evasion.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Evasion↑": ["+10%", "+12%", "+14%", "+17%", "+20%", "+23%", "+26%", "+29%", "+32%", "+35%"],
        }
    },
    "Ninpo: Flight":{
        "Usage": "Active (Legs)",
        "Unlock": "Concealment (Lv 1)",
        "Description": "Until the end of the turn, gain a high chance to nullify physical attacks received.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["3", "4", "5", "6", "7"],
            "Activation Chance": ["50%", "60%", "70%", "80%", "100%"],
            "Action Speed": ["+60", "+60", "+60", "+60", "+60"],
        }
    },
    "Ninpo: Smoke":{
        "Usage": "Active (Legs)",
        "Unlock": "Concealment (Lv 3)",
        "Description": "Spend 50% of current HP to place a buff on yourself for 3 turns, which strongly increases evasion.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "6", "6", "7", "7", "8", "8", "9", "10"],
            "Evasion↑": ["+30%", "+35%", "+40%", "+45%", "+50%", "+55%", "+60%", "+65%", "+70%", "+75%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Reflexes":{
        "Usage": "Passive",
        "Unlock": "Ninpo:Flight (Lv 3), Ninpo:Smoke (Lv 3)",
        "Description": "Recover TP each time you evade an attack.",
        "Max Level": "10",
        "Data": {
            "TP Gain": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Tonsou Jutsu":{
        "Usage": "Active (Legs)",
        "Unlock": "N/A",
        "Description": "Chance to escape from battle and teleport to the point where you entered the floor.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["5", "4", "3", "2", "1"],
            "Success Chance": ["40%", "50%", "60%", "70%", "80%"],
            "Action Speed": ["-10", "-10", "-10", "-10", "-10"],
        }
    },
},
"Monk":{
    "Form Qi":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "Increases the effect of non-fixed healing skills.",
        "Max Level": "10",
        "Data": {
            "Healing↑": ["+20%", "+25%", "+30%", "+35%", "+40%", "+45%", "+50%", "+55%", "+60%", "+65%"],
        }
    },
    "Healing":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "N/A",
        "Description": "Restore HP to one ally.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
            "Healing Power": ["70%", "75%", "80%", "85%", "90%", "95%", "100%", "105%", "110%", "120%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Refresh":{
        "Usage": "Active (Head)",
        "Unlock": "Healing (Lv 2)",
        "Description": "Remove ailments from target allies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "5", "4", "10", "8", "6", "16", "14", "12", "10"],
            "Targets": ["Single", "Single", "Single", "Row", "Row", "Row", "All", "All", "All", "All"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Unbind":{
        "Usage": "Active (Head)",
        "Unlock": "Healing (Lv 2)",
        "Description": "Remove binds from target allies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "5", "4", "10", "8", "6", "16", "14", "12", "10"],
            "Targets": ["Single", "Single", "Single", "Row", "Row", "Row", "All", "All", "All", "All"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Resurrect":{
        "Usage": "Active (Head)",
        "Unlock": "Refresh (Lv 2), Unbind (Lv 2)",
        "Description": "Revive one ally.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
            "HP Gain": ["1", "10", "20", "40", "60", "100", "150", "200", "250", "All"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Full Heal":{
        "Usage": "Active (Head)",
        "Unlock": "Healing (Lv 5)",
        "Description": "Restore full HP to one ally.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["34", "30", "26", "22", "18"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Line Heal":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Healing (Lv 5)",
        "Description": "Restore HP to an ally row.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "15", "17", "19", "21", "23", "25"],
            "Healing Power": ["60%", "65%", "70%", "75%", "80%", "85%", "90%", "95%", "100%", "110%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Party Heal":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Line Heal (Lv 3)",
        "Description": "Restore HP to the whole party.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["18", "19", "21", "23", "25", "27", "29", "31", "33", "35"],
            "Healing Power": ["50%", "55%", "60%", "65%", "70%", "75%", "80%", "85%", "90%", "100%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Waking Chakra":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases natural bind/ailment recovery rate.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Recovery Rate↑": ["+30%", "+34%", "+38%", "+42%", "+46%", "+50%", "+55%", "+60%", "+65%", "+70%"],
        }
    },
    "Fist Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Removes the ATK penalty when using bare Fists, and instead applies an ATK increase.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "ATK Up↑": ["+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%"],
        }
    },
    "Kikouken":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Fist Mastery (Lv 1)",
        "Description": "Fist: Deal melee Bash damage to one enemy, with a chance to inflict Paralysis.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["4", "4", "5", "5", "6", "6", "8", "8", "10", "10"],
            "Attack Power": ["140%", "145%", "150%", "155%", "160%", "166%", "172%", "178%", "184%", "190%"],
            "Infliction Rate": ["30%", "32%", "34%", "36%", "38%", "40%", "42%", "44%", "46%", "50%"],
            "Accuracy": ["-2%", "-2%", "-1%", "-1%", "+0%", "+0%", "+1%", "+1%", "+2%", "+2%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Breakfire Fist":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Fist Mastery (Lv 3), Waking Chakra (Lv 3)",
        "Description": "Fist: Deal multiple hits of melee Bash+Fire damage to random enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "14", "15", "17", "18", "20", "22", "25"],
            "Attack Power": ["70%", "75%", "75%", "80%", "85%", "85%", "90%", "90%", "100%", "100%"],
            "Hits": ["2", "2", "2~3", "2~3", "2~3", "2~4", "2~4", "2~4", "2~4", "2~5"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Counter":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Fist Mastery (Lv 8)",
        "Description": "Fist: Prepare to counterattack each time you take physical damage this turn. On each activation, deal melee Bash damage to the attacker.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "6", "6", "7", "7", "8", "8", "9", "9"],
            "Attack Power": ["200%", "220%", "240%", "260%", "280%", "300%", "320%", "340%", "360%", "380%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["+7", "+7", "+7", "+7", "+7", "+7", "+7", "+7", "+7", "+7"],
        }
    },
    "Retaliate":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Fist Mastery (Lv 8)",
        "Description": "Fist: Prepare to counterattack each time you take elemental damage this turn. On each activation, deal melee Bash damage to the attacker.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "6", "6", "7", "7", "8", "8", "9", "9"],
            "Attack Power": ["200%", "220%", "240%", "260%", "280%", "300%", "320%", "340%", "360%", "380%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["+7", "+7", "+7", "+7", "+7", "+7", "+7", "+7", "+7", "+7"],
        }
    },
    "Darkness Fist":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Fist Mastery (Lv 10), Breakfire Fist (Lv 3)",
        "Description": "Fist: Spend 25% of current HP to deal melee Bash damage to all enemies, with a chance to inflict Curse.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["13", "14", "15", "16", "17", "19", "21", "23", "25", "27"],
            "Attack Power": ["130%", "135%", "140%", "145%", "150%", "162%", "174%", "186%", "198%", "210%"],
            "Infliction Rate": ["30%", "33%", "36%", "39%", "42%", "45%", "48%", "51%", "55%", "60%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
        }
    },
    "Ascetic Reward":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Upon dying, restore HP to all allies.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "HP Gain": ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
        }
    },
    "Blood Return":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Recover TP each time an ally dies.",
        "Max Level": "10",
        "Data": {
            "TP Gain": ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"],
        }
    },
    "Ascetic Deeds":{
        "Usage": "Passive",
        "Unlock": "Ascetic Reward (Lv 3), Blood Return (Lv 3)",
        "Description": "Recover HP each time you use a skill.",
        "Max Level": "10",
        "Data": {
            "HP Gain": ["20", "25", "30", "35", "40", "50", "60", "70", "80", "90"],
        }
    },
    "Fire Walk":{
        "Usage": "Active (Field)",
        "Unlock": "N/A",
        "Description": "Temporarily decrease damage taken by the party from damaging floor.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["4", "5", "6", "7", "8"],
            "Damage Taken↓": ["-20%", "-40%", "-60%", "-70%", "-90%"],
            "Duration (Steps)": ["30", "40", "50", "60", "80"],
        }
    },
},
"Zodiac":{
    "Ether Mastery":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "Increases elemental damage dealt.",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+3%", "+5%", "+7%", "+9%", "+11%", "+13%", "+16%", "+19%", "+22%", "+25%"],
        }
    },
    "Fire Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases Fire damage dealt.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%"],
        }
    },
    "Fire Star":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Fire Mastery (Lv 1)",
        "Description": "Deal ranged Fire damage to one enemy.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22"],
            "Attack Power": ["40%", "44%", "48%", "52%", "56%", "60%", "64%", "68%", "72%", "80%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
        }
    },
    "Binary Fire":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Fire Mastery (Lv 5)",
        "Description": "Deal ranged Fire damage to all enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["16", "18", "20", "22", "24", "26", "28", "30", "32", "35"],
            "Attack Power": ["30%", "32%", "34%", "36%", "38%", "41%", "44%", "47%", "50%", "55%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["-12", "-12", "-12", "-12", "-12", "-12", "-12", "-12", "-12", "-12"],
        }
    },
    "Fire Prophecy":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Fire Star (Lv 5), Binary Fire (Lv 5)",
        "Description": "Target one enemy and prepare to nullify its action for this turn if it's a Fire attack. If the nullification activates, counterattack with ranged Fire damage (cannot miss) to the target.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["15", "16", "17", "18", "19"],
            "Attack Power": ["50%", "60%", "75%", "90%", "105%"],
            "Action Speed": ["+30", "+30", "+30", "+30", "+30"],
        }
    },
    "Ice Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases Ice damage dealt.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%"],
        }
    },
    "Ice Star":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Ice Mastery (Lv 1)",
        "Description": "Deal ranged Ice damage to one enemy.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22"],
            "Attack Power": ["40%", "44%", "48%", "52%", "56%", "60%", "64%", "68%", "72%", "80%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
        }
    },
    "Binary Ice":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Ice Mastery (Lv 5)",
        "Description": "Deal ranged Ice damage to all enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["16", "18", "20", "22", "24", "26", "28", "30", "32", "35"],
            "Attack Power": ["30%", "32%", "34%", "36%", "38%", "41%", "44%", "47%", "50%", "55%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["-12", "-12", "-12", "-12", "-12", "-12", "-12", "-12", "-12", "-12"],
        }
    },
    "Ice Prophecy":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Ice Star (Lv 5), Binary Ice (Lv 5)",
        "Description": "Target one enemy and prepare to nullify its action for this turn if it's an Ice attack. If the nullification activates, counterattack with ranged Ice damage (cannot miss) to the target.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["15", "16", "17", "18", "19"],
            "Attack Power": ["50%", "60%", "75%", "90%", "105%"],
            "Action Speed": ["+30", "+30", "+30", "+30", "+30"],
        }
    },
    "Volt Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases Volt damage dealt.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%"],
        }
    },
    "Volt Star":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Volt Mastery (Lv 1)",
        "Description": "Deal ranged Volt damage to one enemy.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22"],
            "Attack Power": ["40%", "44%", "48%", "52%", "56%", "60%", "64%", "68%", "72%", "80%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
        }
    },
    "Binary Volt":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Volt Mastery (Lv 5)",
        "Description": "Deal ranged Volt damage to all enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["16", "18", "20", "22", "24", "26", "28", "30", "32", "35"],
            "Attack Power": ["30%", "32%", "34%", "36%", "38%", "41%", "44%", "47%", "50%", "55%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["-12", "-12", "-12", "-12", "-12", "-12", "-12", "-12", "-12", "-12"],
        }
    },
    "Volt Prophecy":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Volt Star (Lv 5), Binary Volt (Lv 5)",
        "Description": "Target one enemy and prepare to nullify its action for this turn if it's a Volt attack. If the nullification activates, counterattack with ranged Volt damage (cannot miss) to the target.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["15", "16", "17", "18", "19"],
            "Attack Power": ["50%", "60%", "75%", "90%", "105%"],
            "Action Speed": ["+30", "+30", "+30", "+30", "+30"],
        }
    },
    "Dark Ether":{
        "Usage": "Active (Head)",
        "Unlock": "N/A",
        "Description": "Empower an ally row for this turn, which makes their skills not spend TP.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["18", "16", "14", "12", "10"],
            "Action Speed": ["+30", "+30", "+30", "+30", "+30"],
        }
    },
    "Singularity":{
        "Usage": "Passive",
        "Unlock": "Dark Ether (Lv 5)",
        "Description": "Increases damage dealt when hitting an enemy's weakness.",
        "Max Level": "5",
        "Data": {
            "Damage Dealt↑": ["+10%", "+20%", "+30%", "+40%", "+50%"],
        }
    },
    "Etheric Charge":{
        "Usage": "Active (Head)",
        "Unlock": "Dark Ether (Lv 5)",
        "Description": "Enter a charge state until the end of next turn, which massively increases elemental damage dealt by your next action.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["8", "9", "10", "11", "12"],
            "Damage Dealt↑": ["+120%", "+140%", "+160%", "+180%", "+200%"],
        }
    },
    "Etheric Return":{
        "Usage": "Passive",
        "Unlock": "Singularity (Lv 5), Etheric Charge (Lv 5)",
        "Description": "Recover TP each time you kill an enemy.",
        "Max Level": "5",
        "Data": {
            "TP Gain": ["1", "2", "3", "4", "5"],
        }
    },
    "Meteor":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Etheric Return (Lv 3), Horoscope (Lv 5)",
        "Description": "Deal multiple hits of ranged Bash damage to random enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["30", "32", "34", "37", "40", "43", "47", "51", "55", "60"],
            "Attack Power": ["35%", "38%", "38%", "41%", "41%", "44%", "44%", "47%", "47%", "50%"],
            "Hits": ["3~4", "3~4", "3~5", "3~5", "4~5", "4~5", "4~6", "4~6", "5~6", "5~6"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["-12", "-12", "-12", "-12", "-12", "-12", "-12", "-12", "-12", "-12"],
        }
    },
    "Horoscope":{
        "Usage": "Active (Field)",
        "Unlock": "N/A",
        "Description": "Temporarily show on the map the location of all FOEs within a certain radius.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8"],
            "Radius (Tiles)": ["1", "3", "5", "7", "10"],
            "Duration (Steps)": ["30", "40", "50", "70", "100"],
        }
    },
},
"Wildling":{
    "Beast Soul":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "Increases Max HP, offense, and defense for your summoned Beasts. (The Beast HP formula applies the HP boost twice)",
        "Max Level": "10",
        "Data": {
            "Max HP↑": ["+10%", "+14%", "+18%", "+22%", "+26%", "+30%", "+35%", "+40%", "+45%", "+50%"],
            "Damage Dealt↑": ["+20%", "+26%", "+32%", "+38%", "+44%", "+50%", "+56%", "+62%", "+68%", "+75%"],
            "Damage Taken↓": ["-5%", "-9%", "-13%", "-17%", "-20%", "-23%", "-26%", "-29%", "-31%", "-33%"],
        }
    },
    "Wild Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases infliction chances of your summoned Beasts. This is a flat bonus added after applying resistances.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Infliction Rate↑": ["+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
        }
    },
    "Dismiss Beast":{
        "Usage": "Active (Arms)",
        "Unlock": "Wild Mastery (Lv 1)",
        "Description": "Remove your summoned Beast from battle, then recover the TP that was spent to summon it.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["8", "6", "4", "2", "1"],
        }
    },
    "Call Bird":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Wild Mastery (Lv 1)",
        "Description": "Summon a bird with 100% of your combat stats. When summoned, deals Stab damage and inflicts Head Bind to target enemy; on subsequent turns targets a random enemy instead.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["15", "15", "18", "18", "21", "21", "24", "24", "27", "27"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            "Separator":[],
            "Beast HP": ["40", "45", "50", "55", "60", "66", "72", "78", "84", "90"],
            "Attack Power\n(Initial)": ["80%", "85%", "90%", "95%", "100%", "105%", "110%", "115%", "120%", "130%"],
            "Attack Power\n(Later)": ["70%", "75%", "80%", "85%", "90%", "95%", "100%", "105%", "110%", "120%"],
            "Infliction Rate": ["25%", "27%", "29%", "32%", "35%", "38%", "41%", "44%", "47%", "50%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
        }
    },
    "Call Snake":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Wild Mastery (Lv 1)",
        "Description": "Summon a snake with 100% of your combat stats. When summoned, deals Bash damage and inflicts Arm Bind to target enemy; on subsequent turns targets a random enemy instead.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["15", "15", "18", "18", "21", "21", "24", "24", "27", "27"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            "Separator":[],
            "Beast HP": ["40", "45", "50", "55", "60", "66", "72", "78", "84", "90"],
            "Attack Power\n(Initial)": ["80%", "85%", "90%", "95%", "100%", "105%", "110%", "115%", "120%", "130%"],
            "Attack Power\n(Later)": ["70%", "75%", "80%", "85%", "90%", "95%", "100%", "105%", "110%", "120%"],
            "Infliction Rate": ["25%", "27%", "29%", "32%", "35%", "38%", "41%", "44%", "47%", "50%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
        }
    },
    "Call Mole":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Wild Mastery (Lv 1)",
        "Description": "Summon a mole with 100% of your combat stats. When summoned, deals Cut damage and inflicts Leg Bind to target enemy; on subsequent turns targets a random enemy instead.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["15", "15", "18", "18", "21", "21", "24", "24", "27", "27"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            "Separator":[],
            "Beast HP": ["40", "45", "50", "55", "60", "66", "72", "78", "84", "90"],
            "Attack Power\n(Initial)": ["80%", "85%", "90%", "95%", "100%", "105%", "110%", "115%", "120%", "130%"],
            "Attack Power\n(Later)": ["70%", "75%", "80%", "85%", "90%", "95%", "100%", "105%", "110%", "120%"],
            "Infliction Rate": ["25%", "27%", "29%", "32%", "35%", "38%", "41%", "44%", "47%", "50%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
        }
    },
    "Call Insect":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Wild Mastery (Lv 3)",
        "Description": "Summon a venomfly with 70% of your combat stats. When summoned, deals Cut damage and inflicts Poison to target enemy; on subsequent turns targets a random enemy instead.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["18", "18", "21", "21", "24", "24", "27", "27", "30", "30"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            "Separator":[],
            "Beast HP": ["20", "22", "24", "26", "28", "30", "32", "34", "36", "40"],
            "Attack Power\n(Initial)": ["60%", "65%", "70%", "75%", "80%", "90%", "100%", "110%", "120%", "130%"],
            "Attack Power\n(Later)": ["50%", "55%", "60%", "65%", "70%", "80%", "90%", "100%", "110%", "120%"],
            "Infliction Rate": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            "Poison Power": ["50", "80", "110", "140", "170", "200", "230", "270", "310", "350"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
        }
    },
    "Call Owl":{
        "Usage": "Active (Arms, LUC)",
        "Unlock": "Wild Mastery (Lv 5)",
        "Description": "Summon an owl with 100% of your combat stats. On every turn, attempts to inflict Sleep on all enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["18", "18", "21", "21", "24", "24", "27", "27", "30", "30"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            "Separator":[],
            "Beast HP": ["70", "80", "88", "98", "105", "112", "119", "126", "133", "140"],
            "Infliction Rate": ["25%", "27%", "29%", "32%", "35%", "38%", "41%", "44%", "47%", "50%"],
        }
    },
    "Call Ooze":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Wild Mastery (Lv 6), Nature Pact (Lv 10)",
        "Description": "Summon a slime with 90% of your combat stats. When summoned, deals Cut damage and inflicts Plague to target enemy; on subsequent turns targets a random enemy instead.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["27", "27", "30", "30", "33", "33", "36", "36", "39", "39"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            "Separator":[],
            "Beast HP": ["20", "22", "24", "26", "28", "30", "32", "34", "36", "40"],
            "Attack Power": ["120%", "125%", "130%", "135%", "140%", "150%", "160%", "170%", "180%", "190%"],
            "Infliction Rate": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            "Poison Power": ["30", "60", "90", "120", "150", "180", "210", "240", "270", "300"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
        }
    },
    "Call Elephant":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Wild Mastery (Lv 7), Call Insect (Lv 4)",
        "Description": "Summon an elephant with 120% of your combat stats. When summoned, deals Bash damage and inflicts Panic to all enemies; on subsequent turns it hits one random enemy instead.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["21", "21", "24", "24", "27", "27", "30", "30", "33", "33"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            "Separator":[],
            "Beast HP": ["110", "125", "140", "155", "170", "185", "200", "215", "230", "250"],
            "Attack Power\n(Initial)": ["75%", "80%", "85%", "90%", "95%", "100%", "105%", "110%", "115%", "120%"],
            "Attack Power\n(Later)": ["120%", "125%", "130%", "135%", "140%", "150%", "160%", "170%", "180%", "190%"],
            "Infliction Rate": ["25%", "27%", "29%", "32%", "35%", "38%", "41%", "44%", "47%", "50%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
        }
    },
    "Call Cow":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Wild Mastery (Lv 7), Call Owl (Lv 4)",
        "Description": "Summon a bull with 120% of your combat stats. When summoned, deals multiple hits of Stab damage and inflicts Paralysis to random enemies; on subsequent turns it hits once and targets one random enemy instead.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["21", "21", "24", "24", "27", "27", "30", "30", "33", "33"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            "Separator":[],
            "Beast HP": ["100", "115", "125", "140", "150", "160", "170", "180", "190", "200"],
            "Attack Power\n(Initial)": ["65%", "68%", "70%", "73%", "76%", "78%", "81%", "84%", "87%", "90%"],
            "Infliction Rate\n(Initial)": ["25%", "27%", "29%", "32%", "35%", "38%", "41%", "44%", "47%", "50%"],
            "Hits\n(Initial)": ["2", "2", "2~3", "2~3", "2~3", "2~4", "2~4", "2~4", "2~4", "2~5"],
            "Attack Power\n(Later)": ["130%", "135%", "140%", "145%", "150%", "160%", "170%", "180%", "190%", "200%"],
            "Infliction Rate\n(Later)": ["30%", "32%", "34%", "36%", "38%", "40%", "42%", "44%", "46%", "50%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
        }
    },
    "Call Lion":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Wild Mastery (Lv 10), Sacrifice 1 (Lv 5)",
        "Description": "Summon a lion with 150% of your combat stats that's afflicted with Sleep. If it wakes up, deals Almighty damage with a chance to inflict Paralysis and Stun to all enemies, then goes back to Sleep. Stronger on enemies afflicted with an ailment.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["27", "27", "30", "30", "33", "33", "36", "36", "39", "39"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            "Separator":[],
            "Beast HP": ["160", "184", "200", "224", "240", "256", "272", "288", "304", "320"],
            "Attack Power\n(Normal)": ["130%", "135%", "140%", "145%", "150%", "160%", "170%", "180%", "190%", "200%"],
            "Attack Power\n(Ailment)": ["208%", "230%", "252%", "275%", "300%", "336%", "374%", "414%", "456%", "500%"],
            "Infliction Rate": ["30%", "33%", "36%", "39%", "42%", "45%", "48%", "51%", "54%", "57%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
        }
    },
    "Call Tiger":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Wild Mastery (Lv 10), Sacrifice 2 (Lv 5)",
        "Description": "Summon a tiger with 150% of your combat stats. When summoned, attempts to inflict Instant Death on all enemies; on subsequent turns it instead prepares to counterattack, dealing Cut damage to its attackers.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["27", "27", "30", "30", "33", "33", "36", "36", "39", "39"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
            "Separator":[],
            "Beast HP": ["160", "184", "200", "224", "240", "256", "272", "288", "304", "320"],
            "Infliction Rate\n(Initial)": ["5%", "6%", "7%", "8%", "10%", "12%", "14%", "16%", "18%", "20%"],
            "Attack Power\n(Later)": ["120%", "125%", "130%", "140%", "150%", "160%", "170%", "180%", "190%", "200%"],
            "Accuracy": ["-2%", "-2%", "-1%", "-1%", "+0%", "+1%", "+2%", "+3%", "+4%", "+5%"],
        }
    },
    "Nature Pact":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Upon dying, there's a chance that your summoned Beast will sacrifice itself to revive you, restoring a fixed amount of HP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Activation Chance": ["10%", "14%", "18%", "22%", "26%", "30%", "34%", "38%", "42%", "50%"],
            "HP Gain": ["10", "20", "30", "50", "70", "100", "130", "160", "200", "All"],
        }
    },
    "Sacrifice 1":{
        "Usage": "Passive",
        "Unlock": "Nature Pact (Lv 3)",
        "Description": "Your summoned Beast has a chance to take physical attacks in place of allies in their same row.",
        "Max Level": "10",
        "Data": {
            "Activation Chance": ["10%", "12%", "14%", "16%", "18%", "22%", "26%", "30%", "35%", "40%"],
        }
    },
    "Sacrifice 2":{
        "Usage": "Passive",
        "Unlock": "Nature Pact (Lv 3)",
        "Description": "Your summoned Beast has a chance to take elemental attacks in place of allies in their same row.",
        "Max Level": "10",
        "Data": {
            "Activation Chance": ["10%", "12%", "14%", "16%", "18%", "22%", "26%", "30%", "35%", "40%"],
        }
    },
    "Beast Roar":{
        "Usage": "Active (Head)",
        "Unlock": "N/A",
        "Description": "Place a debuff on all enemies for 3 turns, which decreases physical damage dealt.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["8", "10", "12", "14", "16"],
            "Damage Dealt↓": ["-5%", "-8%", "-12%", "-16%", "-20%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Primal Drums":{
        "Usage": "Active (Head)",
        "Unlock": "N/A",
        "Description": "Place a debuff on all enemies for 3 turns, which increases physical damage taken.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["8", "10", "12", "14", "16"],
            "Damage Taken↑": ["+10%", "+15%", "+20%", "+25%", "+30%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Alertness":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Chance to cancel out enemy ambushes.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "Activation Chance": ["30%", "35%", "40%", "45%", "50%"],
        }
    },
},
"Arbalist":{
    "Giant Kill":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "Increases damage dealt to enemies whose current HP is at least twice your own current HP.",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+20%", "+23%", "+27%", "+31%", "+35%", "+39%", "+43%", "+47%", "+51%", "+55%"],
        }
    },
    "Bolt Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases damage dealt with Crossbow's normal attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%"],
        }
    },
    "Heavy Shot":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Bolt Mastery (Lv 1)",
        "Description": "Crossbow: Deal ranged Stab damage to one enemy.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "6", "6", "7", "7", "8", "8", "9", "9"],
            "Attack Power": ["140%", "143%", "147%", "150%", "153%", "156%", "160%", "165%", "170%", "175%"],
            "Accuracy": ["-7%", "-7%", "-7%", "-7%", "-7%", "-6%", "-6%", "-6%", "-6%", "-6%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Front Mortar":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Heavy Shot (Lv 5)",
        "Description": "Crossbow: Deal ranged Stab damage to one enemy. Stronger if you're in the front row.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["9", "12", "15", "18", "21", "24", "27", "30", "33", "36"],
            "Attack Power\n(Front Row)": ["225%", "235%", "246%", "257%", "276%", "296%", "316%", "336%", "357%", "382%"],
            "Attack Power\n(Back Row)": ["75%", "76%", "77%", "78%", "79%", "80%", "81%", "82%", "83%", "85%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Snipe":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Bolt Mastery (Lv 2)",
        "Description": "Crossbow: At the end of turn, deal ranged weapon-based damage to all enemies afflicted with ailments.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "6", "6", "7", "7"],
            "Attack Power": ["150%", "158%", "166%", "174%", "182%", "190%", "200%", "210%", "220%", "240%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
        }
    },
    "Sharpshooter":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Bolt Mastery (Lv 2)",
        "Description": "Crossbow: At the end of turn, deal ranged weapon-based damage to all enemies afflicted with binds.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "6", "6", "7", "7"],
            "Attack Power": ["150%", "158%", "166%", "174%", "182%", "190%", "200%", "210%", "220%", "240%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
        }
    },
    "Strafe":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Bolt Mastery (Lv 3)",
        "Description": "Crossbow: Deal multiple hits of ranged Stab damage to random enemies (max once each).",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
            "Attack Power": ["100%", "102%", "104%", "107%", "110%", "113%", "116%", "119%", "122%", "125%"],
            "Hits": ["2~3", "2~3", "2~3", "2~4", "2~4", "2~4", "2~5", "2~5", "3~5", "3~5"],
            "Accuracy": ["-20%", "-20%", "-20%", "-20%", "-20%", "-20%", "-20%", "-20%", "-20%", "-20%"],
            "Action Speed": ["-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9", "-9"],
        }
    },
    "Fire Barrage":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Bolt Mastery (Lv 5)",
        "Description": "Crossbow: Deal ranged Stab+Fire damage to all enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "9", "10", "11", "12", "13", "14", "15"],
            "Attack Power": ["80%", "85%", "90%", "95%", "100%", "105%", "110%", "115%", "120%", "125%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Ice Barrage":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Bolt Mastery (Lv 5)",
        "Description": "Crossbow: Deal ranged Stab+Ice damage to all enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "9", "10", "11", "12", "13", "14", "15"],
            "Attack Power": ["80%", "85%", "90%", "95%", "100%", "105%", "110%", "115%", "120%", "125%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Volt Barrage":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Bolt Mastery (Lv 5)",
        "Description": "Crossbow: Deal ranged Stab+Volt damage to all enemies.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "9", "10", "11", "12", "13", "14", "15"],
            "Attack Power": ["80%", "85%", "90%", "95%", "100%", "105%", "110%", "115%", "120%", "125%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Armor Piercer":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Bolt Mastery (Lv 7)",
        "Description": "Crossbow: Deal ranged Stab damage to one enemy. Ignores buffs on the target.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["11", "11", "12", "12", "13", "13", "14", "14", "15", "15"],
            "Attack Power": ["170%", "175%", "180%", "185%", "190%", "195%", "200%", "205%", "210%", "215%"],
            "Accuracy": ["-10%", "-10%", "-9%", "-9%", "-8%", "-8%", "-7%", "-7%", "-6%", "-5%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Double Action":{
        "Usage": "Passive",
        "Unlock": "Front Mortar (Lv 4), Armor Piercer (Lv 4)",
        "Description": "When using a single-target attack skill, there's a chance for it to perform an additional hit.",
        "Max Level": "10",
        "Data": {
            "Activation Chance": ["10%", "12%", "14%", "16%", "18%", "20%", "22%", "24%", "27%", "30%"],
        }
    },
    "Cloudbuster":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Bolt Mastery (Lv 10)",
        "Description": "Crossbow: Prepare an attack that will be performed at the end of next turn, dealing ranged Stab damage to all enemies.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["14", "16", "18", "20", "22"],
            "Attack Power": ["140%", "160%", "190%", "230%", "250%"],
            "Accuracy": ["-5%", "-4%", "-3%", "-2%", "-1%"],
        }
    },
    "Proper Form":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases accuracy.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "Accuracy↑": ["+5%", "+10%", "+15%", "+20%", "+25%"],
        }
    },
    "Extend":{
        "Usage": "Passive",
        "Unlock": "Proper Form (Lv 3)",
        "Description": "Recover HP each time you kill an enemy. (This effect is increased by 50% if the killing blow was a Critical Hit)",
        "Max Level": "10",
        "Data": {
            "HP Gain": ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
        }
    },
    "Pop Flares":{
        "Usage": "Active (Arms)",
        "Unlock": "N/A",
        "Description": "Place a buff on the whole party for 3 turns, which increases accuracy.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10"],
            "Accuracy↑": ["+5%", "+10%", "+15%", "+30%", "+50%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Smoke Grenade":{
        "Usage": "Active (Arms, LUC)",
        "Unlock": "N/A",
        "Description": "Attempt to inflict Blind on all enemies.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10"],
            "Infliction Rate": ["30%", "40%", "50%", "65%", "80%"],
            "Action Speed": ["+3", "+3", "+3", "+3", "+3"],
        }
    },
    "Night Vision":{
        "Usage": "Passive",
        "Unlock": "Pop Flares (Lv 3), Smoke Grenade (Lv 3)",
        "Description": "Increases Critical Hit chance during the night.",
        "Max Level": "10",
        "Data": {
            "Crit Rate↑": ["+15%", "+17%", "+19%", "+22%", "+25%", "+28%", "+31%", "+34%", "+37%", "+40%"],
        }
    },
    "Ambush":{
        "Usage": "Active (Field)",
        "Unlock": "N/A",
        "Description": "Temporarily increase the chance of ambushing enemies.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["6", "7", "8", "9", "10"],
            "Ambush↑": ["+25%", "+30%", "+35%", "+40%", "+50%"],
            "Duration (Steps)": ["40", "45", "50", "55", "60"],
        }
    },
},
"Farmer":{
    "Earth's Bounty":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "If you're alive at the end of a battle, increase EXP gained by the party.",
        "Max Level": "10",
        "Data": {
            "EXP Gain↑": ["+10%", "+12%", "+14%", "+16%", "+18%", "+20%", "+22%", "+25%", "+27%", "+30%"],
        }
    },
    "Lullaby":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "N/A",
        "Description": "Inflict Sleep on yourself, then attempt to inflict it on all enemies.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "10"],
            "Infliction Rate": ["15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%", "55%", "60%"],
            "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
        }
    },
    "Play Possum":{
        "Usage": "Active (Head)",
        "Unlock": "Lullaby (Lv 1)",
        "Description": "Place a buff on yourself for 3 turns, which decreases enemy aggro. Actual decrease on each attack is a random value between -3 and this skill's bonus. (For reference, base aggro is a random value from 0 to 4, plus a bonus from 0 to 6 to one random ally)",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "5", "6", "6", "7", "7"],
            "Max. Aggro Decrease": ["-5", "-6", "-7", "-8", "-9", "-10", "-12", "-14", "-16", "-20"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Strange Seeds":{
        "Usage": "Active (Arms, LUC)",
        "Unlock": "Lullaby (Lv 3)",
        "Description": "At the end of turn, attempt to inflict all 3 binds on all enemies. Has a chance to fail and not attempt the inflictions.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["3", "4", "4", "5", "5", "6", "6", "7", "7", "8"],
            "Infliction Rate": ["20%", "24%", "28%", "32%", "36%", "40%", "44%", "48%", "52%", "60%"],
            "Success Chance": ["70%", "70%", "80%", "80%", "90%", "90%", "95%", "95%", "100%", "100%"],
        }
    },
    "Persistence":{
        "Usage": "Passive",
        "Unlock": "Play Possum (Lv 5), Strange Seeds (Lv 3)",
        "Description": "If you're dead, there's a chance to automatically revive at the end of each turn (max once per battle). Revives with 20 HP.",
        "Max Level": "10",
        "Data": {
            "Activation Chance": ["16%", "18%", "20%", "22%", "24%", "27%", "30%", "33%", "36%", "40%"],
        }
    },
    "Rotten Egg":{
        "Usage": "Active (Arms)",
        "Unlock": "Lullaby (Lv 3)",
        "Description": "Place a debuff on all enemies for 4 turns, which decreases damage dealt. Stronger effect on enemies afflicted with ailments.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["5", "5", "6", "6", "7", "7", "8", "8", "9", "9"],
            "Damage Dealt↓\n(Normal)": ["-5%", "-5%", "-6%", "-6%", "-6%", "-7%", "-7%", "-8%", "-8%", "-10%"],
            "Damage Dealt↓\n(Ailment)": ["-20%", "-22%", "-26%", "-29%", "-32%", "-35%", "-38%", "-42%", "-46%", "-50%"],
        }
    },
    "Sympathy Pain":{
        "Usage": "Active (Arms, LUC)",
        "Unlock": "Rotten Egg (Lv 3)",
        "Description": "If you're afflicted with an ailment, attempt to inflict it on an enemy. If successful, remove the ailment from yourself.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["3", "3", "4", "4", "5", "6", "7", "8", "9", "10"],
            "Infliction Rate": ["60%", "63%", "66%", "70%", "74%", "78%", "82%", "86%", "90%", "999%"],
            "Action Speed": ["+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3"],
        }
    },
    "Brave Heart":{
        "Usage": "Passive",
        "Unlock": "Sympathy Pain (Lv 5)",
        "Description": "At the end of each turn, recover TP if your HP is full.",
        "Max Level": "5",
        "Data": {
            "TP Gain": ["1", "2", "3", "4", "5"],
        }
    },
    "Harvestry":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Allows you to gather from Take, Chop and Mine spots a certain amount of times per day each. (Added to the effect of common gathering skills)",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "Gather Attempts": ["1", "2", "3", "4", "5"],
        }
    },
    "Keen Nose":{
        "Usage": "Passive (Field)",
        "Unlock": "Harvestry (Lv 3)",
        "Description": "Chance of finding additional, rare items when gathering.",
        "Max Level": "10",
        "Data": {
            "Rare Chance↑": ["+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%"],
        }
    },
    "Double Crop":{
        "Usage": "Active (Field)",
        "Unlock": "Harvestry (Lv 5)",
        "Description": "Recharge the amount of times you can use gathering spots.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["10", "15", "20", "25", "30", "35", "40", "45", "50", "55"],
            "Recharges": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Camp Mastery":{
        "Usage": "Passive (Field)",
        "Unlock": "N/A",
        "Description": "Increases the HP and TP recovery from using Tents. Also makes Tents revive and remove Petrify.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Extra HP Gain": ["40", "80", "120", "160", "200", "240", "280", "320", "360", "500"],
            "Extra TP Gain": ["20", "40", "60", "80", "100", "120", "140", "160", "180", "250"],
        }
    },
    "Waste Not":{
        "Usage": "Passive",
        "Unlock": "Camp Mastery (Lv 3)",
        "Description": "Increases enemy drop rates.",
        "Max Level": "5",
        "Data": {
            "Drop Rate↑": ["+1%", "+2%", "+3%", "+4%", "+5%"],
        }
    },
    "Slap Awake":{
        "Usage": "Active (Field)",
        "Unlock": "Camp Mastery (Lv 5)",
        "Description": "Revive an ally.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"],
            "HP Gain": ["1", "30", "60", "100", "140", "180", "220", "260", "300", "500"],
        }
    },
    "Keen Eye":{
        "Usage": "Active (Field)",
        "Unlock": "N/A",
        "Description": "Temporarily show on the map the location of all FOEs.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "9", "9", "10", "10"],
            "Duration (Steps)": ["5", "10", "15", "20", "25", "30", "35", "40", "50", "60"],
        }
    },
    "To Market":{
        "Usage": "Active (Field)",
        "Unlock": "Keen Eye (Lv 1)",
        "Description": "Teleport back to town.",
        "Max Level": "1",
        "Data": {
            "TP Cost": ["13"],
        }
    },
    "Rain or Shine":{
        "Usage": "Active (Field)",
        "Unlock": "Keen Eye (Lv 3)",
        "Description": "Temporarily nullify the effect of damaging tiles and mud tiles.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "11", "11", "12", "12", "13", "13", "14", "14"],
            "Duration (Steps)": ["10", "15", "20", "25", "30", "35", "40", "50", "60", "70"],
        }
    },
    "Safe Stroll":{
        "Usage": "Active (Field)",
        "Unlock": "Keen Eye (Lv 5)",
        "Description": "Temporarily prevent enemy encounters.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["12", "12", "13", "13", "14"],
            "Duration (Steps)": ["15", "20", "25", "30", "40"],
        }
    },
    "Horseplay":{
        "Usage": "Active (Field)",
        "Unlock": "N/A",
        "Description": "Make the clock advance by 1 hour.",
        "Starter": "1",
        "Max Level": "1",
        "Data": {
            "TP Cost": ["2"],
        }
    },
},
"Shogun":{
    "Second Sword":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "Allows you to equip a second weapon (occupies an armor slot), and normal attacks will hit twice if you do. The second hit has reduced power.",
        "Max Level": "10",
        "Data": {
            "Attack Power\n(Second Hit)": ["20%", "23%", "26%", "29%", "32%", "35%", "38%", "41%", "45%", "50%"],
        }
    },
    "Katana Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases damage dealt with Katana's normal attacks.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+11%"],
        }
    },
    "Hilt Strike":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Katana Mastery (Lv 1)",
        "Description": "Katana: Deal melee Bash damage to one enemy, with a chance to inflict Stun.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "9", "10", "10", "11", "11", "12", "12"],
            "Attack Power": ["130%", "133%", "136%", "139%", "142%", "145%", "150%", "155%", "160%", "165%"],
            "Infliction Rate": ["25%", "27%", "29%", "31%", "34%", "37%", "40%", "43%", "46%", "50%"],
            "Accuracy": ["-5%", "-4%", "-3%", "-2%", "-1%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            "Action Speed": ["+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3"],
        }
    },
    "Myoujou":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Katana Mastery (Lv 5)",
        "Description": "Katana: Deal multiple hits of melee Cut damage to random enemies. Stronger during the day.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["11", "12", "13", "14", "15", "17", "18", "19", "21", "23"],
            "Attack Power\n(Day)": ["104%", "109%", "114%", "119%", "124%", "127%", "133%", "139%", "143%", "150%"],
            "Attack Power\n(Night)": ["80%", "82%", "84%", "86%", "88%", "90%", "92%", "94%", "97%", "100%"],
            "Hits": ["2~3", "2~3", "2~3", "2~3", "2~3", "2~4", "2~4", "2~4", "2~4", "2~4"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3"],
        }
    },
    "Magatoki":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Katana Mastery (Lv 5)",
        "Description": "Katana: Deal multiple hits of melee Cut damage to random enemies. Stronger during the night.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["11", "12", "13", "14", "15", "17", "18", "19", "21", "23"],
            "Attack Power\n(Night)": ["104%", "109%", "114%", "119%", "124%", "127%", "133%", "139%", "143%", "150%"],
            "Attack Power\n(Day)": ["80%", "82%", "84%", "86%", "88%", "90%", "92%", "94%", "97%", "100%"],
            "Hits": ["2~3", "2~3", "2~3", "2~3", "2~3", "2~4", "2~4", "2~4", "2~4", "2~4"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3"],
        }
    },
    "5-Ring Sword":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Katana Mastery (Lv 10), Daifuhensha (Lv 3)",
        "Description": "Katana: Deal multiple hits of melee Cut damage to random enemies. Maximum hits are doubled if two weapons are equipped.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["15", "16", "17", "18", "20", "22", "24", "26", "28", "30"],
            "Attack Power": ["70%", "72%", "74%", "76%", "78%", "80%", "82%", "84%", "86%", "90%"],
            "Hits": ["2~3", "2~3", "2~3", "2~3", "2~4", "2~4", "2~4", "2~4", "2~5", "2~5"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3"],
        }
    },
    "Morale Boost":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "If you're revived during battle, restore HP to the whole party.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "HP Gain": ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
        }
    },
    "Fore Honor":{
        "Usage": "Active (Head)",
        "Unlock": "Morale Boost (Lv 3)",
        "Description": "Place a buff on one ally for 3 turns, which increases all damage dealt and speed priority but also increases damage taken.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
            "Damage Dealt↑": ["+10%", "+12%", "+14%", "+17%", "+20%", "+23%", "+26%", "+29%", "+32%", "+35%"],
            "Damage Taken↑": ["+20%", "+23%", "+26%", "+29%", "+32%", "+35%", "+38%", "+42%", "+46%", "+50%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Rear Dignity":{
        "Usage": "Active (Head)",
        "Unlock": "Morale Boost (Lv 3)",
        "Description": "Place a buff on one ally for 3 turns, which decreases damage taken but also decreases damage dealt and speed priority.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
            "Damage Dealt↓": ["-20%", "-22%", "-24%", "-26%", "-28%", "-30%", "-32%", "-34%", "-36%", "-40%"],
            "Damage Taken↓": ["-20%", "-23%", "-27%", "-31%", "-35%", "-39%", "-43%", "-47%", "-51%", "-55%"],
            "Action Speed": ["-30", "-30", "-30", "-30", "-30", "-30", "-30", "-30", "-30", "-30"],
        }
    },
    "Ambush Stance":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Fore Honor (Lv 3), Rear Dignity (Lv 3)",
        "Description": "Command an ally row to prepare to counterattack against attacks received this turn, dealing weapon-based damage to the attacker.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["10", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
            "Attack Power": ["100%", "103%", "106%", "109%", "112%", "115%", "118%", "122%", "126%", "130%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3"],
        }
    },
    "Fusillade":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Morale Boost (Lv 5)",
        "Description": "Command other allies equipped with a Gun or Crossbow to deal weapon-based damage to target enemy.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "9", "10", "11", "12", "13", "14", "15"],
            "Attack Power": ["100%", "104%", "108%", "112%", "116%", "120%", "125%", "130%", "135%", "140%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["+13", "+13", "+13", "+13", "+13", "+13", "+13", "+13", "+13", "+13"],
        }
    },
    "Blitz Command":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Fusillade (Lv 3)",
        "Description": "Command all allies to deal weapon-based damage to target enemy.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["14", "15", "16", "17", "18", "19", "20", "22", "24", "26"],
            "Attack Power": ["100%", "104%", "108%", "112%", "116%", "120%", "125%", "130%", "135%", "140%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Action Speed": ["+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3"],
        }
    },
    "Endure":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Chance to survive lethal damage with 1 HP. (Only once per battle)",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "Activation Chance": ["40%", "50%", "60%", "70%", "80%"],
        }
    },
    "Kaishaku":{
        "Usage": "Passive",
        "Unlock": "Endure (Lv 1)",
        "Description": "If another unit (ally or enemy) is below a certain HP threshold after being targetted by an action, there's a chance to inflict Instant Death on them. (Ignores Death resistance but not immunity)",
        "Max Level": "5",
        "Data": {
            "HP Threshold": ["10%", "11%", "12%", "13%", "15%"],
            "Infliction Rate": ["30%", "35%", "40%", "50%", "60%"],
        }
    },
    "Bloody Lance":{
        "Usage": "Passive",
        "Unlock": "Endure (Lv 3)",
        "Description": "Gain an increase to damage dealt each time an ally or enemy dies. (Resets to 0 upon dying)",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+10%", "+13%", "+16%", "+19%", "+22%", "+25%", "+28%", "+31%", "+35%", "+40%"],
        }
    },
    "Unified Spirit":{
        "Usage": "Active (Head)",
        "Unlock": "Endure (Lv 3)",
        "Description": "Place a buff on yourself for 3 turns, which makes you immune to bind inflictions.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["12", "10", "8", "6", "4"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Warrior Might":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Bloody Lance (Lv 3), Unified Spirit (Lv 3)",
        "Description": "Prepare to follow up after all of your allies' attacks for this turn, dealing weapon-based damage to the same targets. However, also increases damage taken for the turn.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "16", "18", "20", "22", "24"],
            "Attack Power": ["85%", "93%", "102%", "111%", "120%", "129%", "138%", "147%", "156%", "165%"],
            "Damage Taken↑": ["+50%", "+58%", "+66%", "+74%", "+82%", "+90%", "+98%", "+107%", "+116%", "+125%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60", "+60"],
        }
    },
    "Daifuhensha":{
        "Usage": "Active (Head)",
        "Unlock": "Endure (Lv 5)",
        "Description": "Place a buff on yourself for 3 turns, which increases physical damage dealt, decreases physical damage taken and increases enemy aggro. Actual aggro increase on each attack is a random value between 3 and this skill's bonus.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["8", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
            "Damage Dealt↑": ["+15%", "+18%", "+21%", "+24%", "+27%", "+30%", "+33%", "+37%", "+41%", "+45%"],
            "Damage Taken↓": ["-15%", "-17%", "-19%", "-22%", "-25%", "-28%", "-31%", "-34%", "-37%", "-40%"],
            "Max. Aggro Bonus": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "15"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Retreat":{
        "Usage": "Active (Legs)",
        "Unlock": "N/A",
        "Description": "Chance to escape from battle.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["5", "5", "5", "5", "5"],
            "Success Chance": ["40%", "50%", "60%", "70%", "80%"],
        }
    },
},
"Yggdroid":{
    "Sleep Mode":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "Recover TP each time you're afflicted with a bind. (Yggdroids naturally cannot have binds inflicted or removed except by their own skills)",
        "Max Level": "10",
        "Data": {
            "TP Gain": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Defrag":{
        "Usage": "Active (No parts)",
        "Unlock": "N/A",
        "Description": "Remove all binds on yourself.",
        "Starter": "1",
        "Max Level": "5",
        "Data": {
            "TP Gain": ["5", "4", "3", "2", "1"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Rocket Punch":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Defrag (Lv 1)",
        "Description": "Deal 2 hits of Bash damage to one enemy, then inflict Arm Bind on yourself.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["15", "16", "17", "18", "19", "20", "21", "22", "23", "25"],
            "Attack Power": ["90%", "96%", "102%", "108%", "114%", "120%", "126%", "132%", "138%", "145%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Rocket Headbutt":{
        "Usage": "Active (Head, STR)",
        "Unlock": "Defrag (Lv 1)",
        "Description": "Deal Stab damage to all enemies, then inflict Head Bind on yourself.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["15", "16", "17", "18", "19", "20", "21", "22", "23", "25"],
            "Attack Power": ["90%", "98%", "106%", "114%", "122%", "130%", "138%", "146%", "155%", "165%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Rocket Jump":{
        "Usage": "Active (Legs)",
        "Unlock": "Defrag (Lv 1)",
        "Description": "Avoid all actions that target you (from allies and enemies) until the end of turn, then inflict Leg Bind on yourself.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["15", "14", "13", "12", "10"],
            "Action Speed": ["+0", "+10", "+20", "+40", "+60"],
        }
    },
    "Core Dump":{
        "Usage": "Active (No parts)",
        "Unlock": "Defrag (Lv 3)",
        "Description": "Inflict all 3 binds on yourself.",
        "Max Level": "5",
        "Data": {
            "TP Gain": ["5", "4", "3", "2", "1"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Overheat":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases damage dealt, but makes you lose HP each time you act.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Damage Dealt↑": ["+5%", "+8%", "+11%", "+14%", "+17%", "+20%", "+25%", "+30%", "+40%", "+50%"],
            "HP Loss": ["1", "3", "5", "7", "11", "29", "47", "67", "89", "127"],
        }
    },
    "EM Barrier":{
        "Usage": "Passive (TEC, LUC)",
        "Unlock": "Overheat (Lv 3)",
        "Description": "Chance to counterattack when hit. On each activation, deal ranged Volt damage to the attacker, with a chance to inflict Paralysis.",
        "Max Level": "10",
        "Data": {
            "Activation Chance": ["30%", "32%", "34%", "36%", "38%", "40%", "42%", "44%", "47%", "50%"],
            "Attack Power": ["40%", "43%", "46%", "49%", "52%", "55%", "58%", "62%", "66%", "70%"],
            "Accuracy": ["-10%", "-9%", "-8%", "-7%", "-6%", "-5%", "-4%", "-3%", "-2%", "-1%"],
            "Infliction Rate": ["5%", "7%", "9%", "11%", "13%", "15%", "17%", "19%", "22%", "25%"],
        }
    },
    "HP Cannon":{
        "Usage": "Active (STR)",
        "Unlock": "Overheat (Lv 10), Core Dump (Lv 5)",
        "Description": "Requires having 3 binds: Deal Almighty damage to one enemy. This attack's base damage is equal to a flat value multiplied by your amount of missing HP.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
            "Damage per HP": ["1.55", "1.6", "1.65", "1.7", "1.75", "1.85", "1.95", "2.05", "2.15", "2.25"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "Virus Scanner":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases resistance to all ailments.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Resistance↑": ["+20%", "+28%", "+31%", "+34%", "+37%", "+40%", "+43%", "+46%", "+49%", "+52%"],
        }
    },
    "Infravision":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases accuracy and evasion during the night.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Accuracy↑": ["+5%", "+8%", "+11%", "+14%", "+17%", "+20%", "+23%", "+26%", "+30%", "+40%"],
            "Evasion↑": ["+10%", "+13%", "+16%", "+19%", "+22%", "+25%", "+28%", "+31%", "+34%", "+40%"],
        }
    },
    "Data Mining":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increases Critical Hit rate and the Critical damage bonus.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Crit Rate↑": ["+5%", "+5%", "+6%", "+6%", "+7%", "+7%", "+8%", "+8%", "+9%", "+10%"],
            "Crit Bonus↑": ["-20%", "-15%", "-10%", "+0%", "+5%", "+10%", "+15%", "+20%", "+30%", "+40%"],
        }
    },
    "Red Bot":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Data Mining (Lv 1)",
        "Description": "Summon a Bot with 100% of your combat stats. On every turn, it prepares to follow up after the party's Fire attacks, dealing ranged Fire damage to the same targets. Activation chance per turn starts at 100% and goes down with each hit performed.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "15", "16", "17", "18", "20"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            "Separator":[],
            "Bot HP": ["40", "60", "80", "110", "140", "175", "210", "250", "290", "360"],
            "Attack Power": ["80%", "90%", "100%", "110%", "120%", "130%", "140%", "150%", "160%", "170%"],
            "Chance Fadeout": ["40%", "37%", "34%", "31%", "28%", "25%", "22%", "19%", "16%", "13%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
        }
    },
    "Blue Bot":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Data Mining (Lv 1)",
        "Description": "Summon a Bot with 100% of your combat stats. On every turn, it prepares to follow up after the party's Ice attacks, dealing ranged Ice damage to the same targets. Activation chance per turn starts at 100% and goes down with each hit performed.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "15", "16", "17", "18", "20"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            "Separator":[],
            "Bot HP": ["40", "60", "80", "110", "140", "175", "210", "250", "290", "360"],
            "Attack Power": ["80%", "90%", "100%", "110%", "120%", "130%", "140%", "150%", "160%", "170%"],
            "Chance Fadeout": ["40%", "37%", "34%", "31%", "28%", "25%", "22%", "19%", "16%", "13%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
        }
    },
    "Yellow Bot":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Data Mining (Lv 1)",
        "Description": "Summon a Bot with 100% of your combat stats. On every turn, it prepares to follow up after the party's Volt attacks, dealing ranged Volt damage to the same targets. Activation chance per turn starts at 100% and goes down with each hit performed.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["10", "11", "12", "13", "14", "15", "16", "17", "18", "20"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
            "Separator":[],
            "Bot HP": ["40", "60", "80", "110", "140", "175", "210", "250", "290", "360"],
            "Attack Power": ["80%", "90%", "100%", "110%", "120%", "130%", "140%", "150%", "160%", "170%"],
            "Chance Fadeout": ["40%", "37%", "34%", "31%", "28%", "25%", "22%", "19%", "16%", "13%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
        }
    },
    "Resupply":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Data Mining (Lv 3)",
        "Description": "Restore HP to all Bots.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
            "Healing Power": ["70%", "80%", "90%", "100%", "110%", "120%", "140%", "160%", "180%", "200%"],
            "Action Speed": ["-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6", "-6"],
        }
    },
    "All Out":{
        "Usage": "Active (Head, STR)",
        "Unlock": "Data Mining (Lv 3)",
        "Description": "Deal weapon-based damage to one enemy. If it lands, all Bots will attempt to perform their follow up against that enemy.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["15", "16", "17", "18", "20", "22", "25", "28", "31", "35"],
            "Attack Power": ["100%", "105%", "110%", "115%", "120%", "125%", "135%", "145%", "155%", "165%"],
            "Accuracy": ["-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%", "-2%"],
            "Action Speed": ["+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"],
        }
    },
    "Reflector":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Resupply (Lv 3), All Out (Lv 3)",
        "Description": "Command all Bots to nullify enemy attacks of their corresponding element. If a Bot stops an attack, it will counterattack with ranged damage of its element.",
        "Max Level": "5",
        "Data": {
            "TP Cost": ["14", "15", "16", "18", "20"],
            "Attack Power": ["120%", "150%", "190%", "230%", "270%"],
            "Action Speed": ["+30", "+30", "+30", "+30", "+30"],
        }
    },
    "Shoot":{
        "Usage": "Active (Head, STR)",
        "Unlock": "Resupply (Lv 3), All Out (Lv 3)",
        "Description": "Command all your Bots to attack one enemy, dealing a single hit of damage of their combined elements, but then the Bots are destroyed. Damage dealt is doubled for each Bot beyond the first. Damage dealt is tripled and becomes Almighty type if the 3 Bot types participate.",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["25", "26", "28", "30", "32", "34", "36", "39", "42", "45"],
            "Attack Power": ["143%", "160%", "178%", "197%", "218%", "238%", "260%", "283%", "306%", "330%"],
            "Accuracy": ["-5%", "-5%", "-4%", "-4%", "-3%", "-3%", "-2%", "-2%", "-1%", "-1%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
},
"Common Skills":{
    "HP Up":{
        "Usage": "Passive",
        "Description": "Increases base Max HP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Max HP↑": ["10%", "13%", "16%", "19%", "22%", "25%", "30%", "35%", "40%", "48%"],
        }
    },
    "TP Up":{
        "Usage": "Passive",
        "Description": "Increases base Max TP.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Max TP↑": ["10%", "13%", "16%", "19%", "22%", "25%", "30%", "35%", "40%", "48%"],
        }
    },
    "Bandage":{
        "Usage": "Active (Field)",
        "Description": "Restore HP to one ally.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["2", "2", "2", "4", "4", "4", "8", "8", "8", "8"],
            "HP Gain": ["10", "15", "20", "45", "50", "55", "120", "130", "140", "150"],
        }
    },
    "Combat Study":{
        "Usage": "Passive",
        "Description": "If you're not in the active party, a percentage of the experience earned from battle is also gained by you.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "EXP Gain": ["1%", "2%", "3%", "4%", "5%", "6%", "7%", "8%", "9%", "10%"],
        }
    },
    "Take":{
        "Usage": "Passive (Field)",
        "Description": "Allows you to gather from Take spots a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Gather Attempts": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Chop":{
        "Usage": "Passive (Field)",
        "Description": "Allows you to gather from Chop spots a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Gather Attempts": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Mine":{
        "Usage": "Passive (Field)",
        "Description": "Allows you to gather from Mine spots a certain amount of times per day.",
        "Starter": "1",
        "Max Level": "10",
        "Data": {
            "Gather Attempts": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
},
"Limit Skills":{
    "1 Unit":{
        "Indomitable":{
            "Description": "Survive one instance of lethal damage with 1 HP.",
            "Max Level": "0",
            "Data": "",
        },
        "Second Wind":{
            "Description": "At the end of the turn, fully restore your HP.",
            "Max Level": "0",
            "Data": ""
        },
        "Lucky Hammer":{
            "Description": "At the end of the turn, deal STR-based Bash damage to one enemy. If it kills, obtain all of the target's item drops.",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["130%"],
            }
        },
    },
    "2 Units":{
        "Cross Slash":{
            "Description": "At the start of the turn, deal STR-based Cut damage to one enemy.",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["230%"],
            }
        },
        "Charge Tactic":{
            "Description": "At the start of the turn, place a buff on the whole party for 5 turns, which increases physical/elemental damage dealt.",
            "Max Level": "1",
            "Data": {
                "Damage Dealt↑": ["+25%"],
            }
        },
        "Guard Tactic":{
            "Description": "At the start of the turn, place a buff on the whole party for 5 turns, which decreases physical/elemental damage taken.",
            "Max Level": "1",
            "Data": {
                "Damage Taken↓": ["-25%"],
            }
        },
        "Lethal Tactic":{
            "Description": "At the start of the turn, place a buff on the whole party for 5 turns, which grants 100% Critical Hit chance.",
            "Max Level": "0",
            "Data": ""
        },
        "Wind Tactic":{
            "Description": "At the start of the turn, place a buff on the whole party for 5 turns, which increases evasion.",
            "Max Level": "1",
            "Data": {
                "Evasion↑": ["+30%"],
            }
        },
        "Hellfire":{
            "Description": "At the end of the turn, deal 3~5 hits of TEC-based Fire damage to random enemies.",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["65%"],
            }
        },
        "Absolute Zero":{
            "Description": "At the end of the turn, deal 3~5 hits of TEC-based Ice damage to random enemies.",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["65%"],
            }
        },
        "Typhoon Bolt":{
            "Description": "At the end of the turn, deal 3~5 hits of TEC-based Volt damage to random enemies.",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["65%"],
            }
        },
    },
    "3 Units":{
        "Mumyouken":{
            "Description": "At the start of the turn, deal 3 hits of STR-based Stab damage to random enemies.",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["140%"],
            }
        },
        "Aegis Defense":{
            "Description": "Nullify physical attacks received by the party this turn.",
            "Max Level": "0",
            "Data": ""
        },
        "Aegis Barrier":{
            "Description": "Nullify elemental attacks received by the party this turn.",
            "Max Level": "0",
            "Data": ""
        },
        "Regroup Tactic":{
            "Description": "At the start of the turn, place a buff on the whole party for 5 turns, which restores HP and removes ailments at the end of each turn.",
            "Max Level": "1",
            "Data": {
                "Healing Power": ["30%"],
            }
        },
        "Immortal":{
            "Description": "At the end of the turn, revive, remove ailments/binds and fully restore HP and TP for the whole party.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "4 Units":{
        "Sungrazer":{
            "Description": "At the start of the turn, deal TEC-based Almighty damage to one enemy.",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["500%"],
            }
        },
        "Aegis Shield":{
            "Description": "Nullify all attacks received by the party this turn.",
            "Max Level": "0",
            "Data": ""
        },
        "Uroboros Guard":{
            "Description": "For this turn, the whole party will absorb all attack damage taken.",
            "Max Level": "0",
            "Data": ""
        },
    },
    "5 Units":{
        "Quintessence":{
            "Description": "At the end of the turn, deal TEC-based Almighty damage to all enemies.",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["320%"],
            }
        },
        "Star Smasher":{
            "Description": "At the start of the turn, deal STR-based Bash damage to one enemy.",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["800%"],
            }
        },
    },
},
"Battle Items":{
    "Healing":{
        "Medica / Medica II / Medica III / Medica IV":{
            "Usage": "20 / 60 / 400 / 1.000 en",
            "Description": "Restores HP to one ally.",

            "Max Level": "4",
            "Levels": ["1", "2", "3", "4"],
            "Data": {
                "HP Gain": ["80", "160", "300", "All"],
            }
        },
        "Madora / Madora II":{
            "Usage": "400 / 5.000 en",
            "Description": "Restores HP to an ally line.",

            "Max Level": "2",
            "Levels": ["1", "2"],
            "Data": {
                "HP Gain": ["150", "300"],
            }
        },
        "Amrita / Amrita II / Amrita III":{
            "Usage": "150 / 500 / 2.000 en",
            "Description": "Restores TP to one ally.",

            "Max Level": "3",
            "Levels": ["1", "2", "3"],
            "Data": {
                "TP Gain": ["50", "100", "All"],
            }
        },
        "Hamao / Hamao II":{
            "Usage": "300 / 4.000 en",
            "Description": "Restores HP and TP to one ally.",

            "Max Level": "2",
            "Levels": ["1", "2"],
            "Data": {
                "HP Gain": ["50", "100"],
                "TP Gain": ["25", "50"],
            }
        },
        "Nectar / Nectar II":{
            "Usage": "50 / 300 en",
            "Description": "Revives and heals one ally.",

            "Max Level": "2",
            "Levels": ["1", "2"],
            "Data": {
                "HP Gain": ["20", "100"],
            }
        },
    },
    "Status":{
        "Theriaca A / Theriaca B":{
            "Usage": "100 / 30 en",
            "Description": "Respectively removes binds or ailments from one ally.",

            "Max Level": "0",
            "Data": ""
        },
        "Metopon":{
            "Usage": "1.000 en",
            "Description": "Removes all buffs on one enemy.",

            "Max Level": "0",
            "Data": ""
        },
        "Unihorn":{
            "Usage": "500 en",
            "Description": "Removes all debuffs on the party.",

            "Max Level": "0",
            "Data": ""
        },
    },
    "Power Up":{
        "Bravant":{
            "Usage": "300 en",
            "Description": "Places a buff on one ally for 3 turns, which increases physical damage dealt.",

            "Max Level": "1",
            "Data": {
                "Damage Dealt↑": ["+45%"],
            }
        },
        "Stonard":{
            "Usage": "150 en",
            "Description": "Places a buff on one ally for 3 turns, which decreases physical damage taken.",

            "Max Level": "1",
            "Data": {
                "Damage Taken↓": ["-45%"],
            }
        },
        "Blaze/Freeze/Shock Oil":{
            "Usage": "75 en",
            "Description": "Places a buff on one ally for 3 turns, which imbues their weapon with Fire/Ice/Volt damage.",

            "Max Level": "0",
            "Data": ""
        },
        "Fire/Ice/Volt Mist":{
            "Usage": "150 en",
            "Description": "Places a buff on all allies for 3 turns, which increases resistance to Fire/Ice/Volt.",

            "Max Level": "1",
            "Data": {
                "Resistance↑": ["+50%"],
            }
        },
        "Cut/Bash/Stab Mist":{
            "Usage": "300 en",
            "Description": "Places a buff on all allies for 3 turns, which increases resistance to Cut/Bash/Stab.",

            "Max Level": "1",
            "Data": {
                "Resistance↑": ["+50%"],
            }
        },
    },
    "Attack (TEC)":{
        "Fire/Ice/Volt Jar":{
            "Usage": "100 en",
            "Description": "Deals ranged Fire/Ice/Volt damage to one enemy.",

            "Max Level": "1",
            "Data": {
                "Attack Power": ["60%"],
                "Accuracy": ["-2%"],
                "Action Speed": ["-9"],
            }
        },
        "Flame/Frost/Storm Jar":{
            "Usage": "500 en",
            "Description": "Deals ranged Fire/Ice/Volt damage to all enemies.",

            "Max Level": "1",
            "Data": {
                "Attack Power": ["70%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["-9"],
            }
        },
    },
    "Infliction (LUC)":{
        "Poison/Blind/Stun/Sleep/Addle/Curse Gas":{
            "Usage": "100 / 150 / 200 / 300 / 800 / 800 en",
            "Description": "Respectively attempts to inflict Poison, Blind, Paralysis, Sleep, Panic or Curse on all enemies.",

            "Max Level": "1",
            "Data": {
                "Infliction Rate": ["40%"],
                "Poison Power": ["0"],
                "Action Speed": ["-6"],
            }
        },
    },
    "Rewards":{
        "Formaldehyde":{
            "Usage": "500 en",
            "Description": "Until the end of turn, enemies killed will drop all their materials regardless of conditions.",

            "Max Level": "0",
            "Data": ""
        },
    }
},
}

//End of database

var descriptions = {
    "Sovereign":    "Commanders that use buffs to empower and heal allies.",
    "Gladiator":    "Aggressive warriors focused on strong physical offense.",
    "Hoplite":      "Sturdy knights that weaken and deflect enemy attacks.",
    "Buccaneer":    "Agile fighters that strike rapidly in tandem with allies.",
    "Ninja":        "Stealthy assassins proficient in evasion and ailments.",
    "Monk":         "Martial artists trained in healing and combat techniques.",
    "Zodiac":       "Elemental casters that exploit the enemy's weakness.",
    "Wildling":     "Summoners that call beasts to attack and incapacitate.",
    "Arbalist":     "Crossbowmen that deal heavy damage from any distance.",
    "Farmer":       "Specialists in improving exploration and resource gain.",
    "Shogun":       "Warrior generals that command and fight along the party.",
    "Yggdroid":     "Robots who weaponize their body and send attack drones.",

    "Common Skills":"Skills available to all classes.",
    "Limit Skills":"Powerful skills available through the Limit system.",
    "Battle Items":"Consumable items meant to aid you in battle.",
}


function toggle_data(table_id){
    //Show or hide an element on the list
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
populate_list("Sovereign")
