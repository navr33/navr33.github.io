var data = {
"Fencer":{
    "Basic Skills":{
        "Rapier Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase physical damage dealt if a Sword is equipped. Sword's damage type changes from Cut to Stab.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt": ["+2%", "+3%", "+4%", "+5%", "+8%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
        "Chain Flame":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "N/A",
            "Description": "(Chain) Sword: Target one enemy and prepare to follow up after your allies' Stab or Fire attacks to them this turn, dealing Cut/Stab+Fire damage. Activation chance starts at 100% and goes down with each follow up.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "12"],
                "Attack Power": ["150%", "156%", "162%", "168%", "168%", "176%", "184%", "192%", "200%", "200%"],
                "Chance Decrease": ["-22%", "-22%", "-22%", "-22%", "-15%", "-15%", "-15%", "-15%", "-15%", "-10%"],
                "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            }
        },
        "Chain Freeze":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "N/A",
            "Description": "(Chain) Sword: Target one enemy and prepare to follow up after your allies' Stab or Ice attacks to them this turn, dealing Cut/Stab+Ice damage. Activation chance starts at 100% and goes down with each follow up.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "12"],
                "Attack Power": ["150%", "156%", "162%", "168%", "168%", "176%", "184%", "192%", "200%", "200%"],
                "Chance Decrease": ["-22%", "-22%", "-22%", "-22%", "-15%", "-15%", "-15%", "-15%", "-15%", "-10%"],
                "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            }
        },
        "Chain Shock":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "N/A",
            "Description": "(Chain) Sword: Target one enemy and prepare to follow up after your allies' Stab or Volt attacks to them this turn, dealing Cut/Stab+Volt damage. Activation chance starts at 100% and goes down with each follow up.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "12"],
                "Attack Power": ["150%", "156%", "162%", "168%", "168%", "176%", "184%", "192%", "200%", "200%"],
                "Chance Decrease": ["-22%", "-22%", "-22%", "-22%", "-15%", "-15%", "-15%", "-15%", "-15%", "-10%"],
                "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            }
        },
        "Chain Boost":{
            "Usage": "Passive",
            "Unlock": "Chain Flame/Freeze/Shock (Lv 2)",
            "Description": "Increase damage dealt with Chain attacks based on how many you have performed this turn. (Stacks up to +99%)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Damage Dealt": ["+5%", "+6%", "+7%", "+8%", "+12%", "+13%", "+14%", "+15%", "+16%", "+20%"],
            }
        },
        "Chain Burst":{
            "Usage": "Passive (STR)",
            "Unlock": "Chain Flame/Freeze/Shock (Lv 2)",
            "Description": "(Chain) If you kill an enemy with a Chain attack, perform an additional attack of the same types to a random enemy.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Attack Power": ["150%", "168%", "186%", "204%", "204%", "228%", "252%", "276%", "300%", "300%"],
                "Max. Per Turn": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
            }
        },
        "Predict":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "For this turn, drastically increase evasion and enemy aggro but also increase damage taken by 150%. Bonuses go down each time you evade an attack.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "15"],
                "Evasion Up": ["+100%", "+112%", "+124%", "+136%", "+136%", "+152%", "+168%", "+184%", "+200%", "+200%"],
                "Aggro Bonus": ["+1000", "+1120", "+1240", "+1360", "+1360", "+1520", "+1680", "+1840", "+2000", "+2000"],
                "Evasion Fadeout": ["-80%", "-80%", "-80%", "-80%", "-65%", "-65%", "-65%", "-65%", "-65%", "-50%"],
                "Aggro Fadeout": ["-600", "-600", "-600", "-600", "-500", "-500", "-500", "-500", "-500", "-400"],
            }
        },
        "Wind Curtain":{
            "Usage": "Active (Head)",
            "Unlock": "Predict (Lv 3)",
            "Description": "Place a buff on an ally line for 1~2 turns, which lets them evade one physical attack. (Buff is consumed when activated)",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["20", "18", "16", "14", "30"],
                "Duration": ["1", "1", "1", "1", "2"],
                "Action Speed": ["40%", "40%", "40%", "40%", "120%"],
            }
        },
        "Optic Thrust":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Sword: Deal melee Stab damage to one enemy, with a chance to inflict Blind.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "14"],
                "Attack Power": ["150%", "160%", "170%", "180%", "210%", "220%", "230%", "240%", "250%", "280%"],
                "Infliction Chance": ["50%", "50%", "50%", "50%", "65%", "65%", "65%", "65%", "65%", "80%"],
                "Accuracy": ["+25%", "+25%", "+25%", "+25%", "+25%", "+25%", "+25%", "+25%", "+25%", "+25%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
            }
        },
        "Sylphid":{
            "Usage": "Passive (STR)",
            "Unlock": "N/A",
            "Description": "Chance to counterattack with your weapon each time you evade a hit. Activation chance per turn goes down with each activation.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Attack Power": ["50%", "53%", "56%", "59%", "59%", "63%", "67%", "71%", "75%", "75%"],
                "Initial Chance": ["60%", "65%", "70%", "75%", "100%", "105%", "110%", "115%", "120%", "150%"],
                "Chance Decrease": ["-40%", "-40%", "-40%", "-40%", "-40%", "-40%", "-40%", "-40%", "-40%", "-40%"],
                "Max. Activations": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "4"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            }
        },
    },
    "Phantom Duelist":{
        "Ray of Light":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase enemy aggro and decrease all damage taken for each time you evade an attack. Effect resets if you're hit.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Aggro Bonus": ["30", "30", "30", "30", "40", "40", "40", "40", "40", "50"],
                "Damage Taken": ["-4%", "-4%", "-4%", "-4%", "-6%", "-6%", "-6%", "-6%", "-6%", "-8%"],
                "Max. Stacks": ["2", "3", "4", "5", "5", "6", "7", "8", "9", "9"],
            }
        },
        "Lightweight":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase evasion if you have empty equipment slots. Effect is multiplied by 2.5 for 2 slots, by 5 for 3 slots, and by 7.5 for all 4 slots.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Evasion Up": ["+4%", "+4.4%", "+4.8%", "+5.2%", "+6.8%", "+7.2", "+7.6", "+8%", "+8.4%", "+10%"],
            }
        },
        "Phantom Swords":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Sword: Place a debuff on an enemy line for 3~5 turns, which decreases accuracy.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Accuracy Down": ["-9.5%", "-11%", "-12.5%", "-14%", "-14%", "-15.5%", "-17%", "-18.5%", "-20%", "-20%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Lure":{
            "Usage": "Active (Legs)",
            "Unlock": "Phantom Swords (Lv 2)",
            "Description": "Prepare to signal a counterattack each time you evade a hit this turn. Other allies in your line will deal weapon-based damage to the attacker.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "10", "10", "10", "10", "10", "12"],
                "Attack Power": ["250%", "255%", "260%", "265%", "295%", "305%", "315%", "325%", "335%", "400%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%"],
            }
        },
        "Dodge Boon":{
            "Usage": "Passive",
            "Unlock": "Phantom Swords (Lv 2)",
            "Description": "Fill your Union Gauge each time you evade a hit.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "Union Gain": ["1%", "2%", "3%", "4%", "6%"],
            }
        },
        "Auto-Curtain":{
            "Usage": "Passive",
            "Unlock": "Wind Curtain (Lv 3)",
            "Description": "Chance to automatically cast Wind Curtain on your line at the start of battle.",
            "Starter": "1",
            "Max Level": "5",
            "Data": {
                "Activation Chance": ["10%", "13%", "16%", "19%", "25%"],
            }
        },
        "Divine Gust":{
            "Usage": "Active (Head)",
            "Unlock": "Auto-Curtain (Lv 3)",
            "Description": "Increase evasion for the whole party until the end of turn. Bonus goes down each time a party member evades a hit.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "21", "21", "21", "21", "21", "30"],
                "Evasion Up": ["+50%", "+53%", "+56%", "+59%", "+70%", "+74%", "+78%", "+82%", "+86%", "+105%"],
                "Evasion Fadeout": ["-25%", "-25%", "-25%", "-25%", "-30%", "-30%", "-30%", "-30%", "-30%", "-35%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Deft Thrust":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Optic Thrust (Lv 3)",
            "Description": "Sword: Deal melee Stab damage to one enemy. Increases your evasion and enemy aggro until the end of turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "13", "13", "13", "13", "13", "18"],
                "Attack Power": ["135%", "150%", "165%", "180%", "180%", "195%", "210%", "225%", "240%", "240%"],
                "Evasion Up": ["+20%", "+20%", "+20%", "+20%", "+27.5%", "+27.5%", "+27.5%", "+27.5%", "+27.5%", "35%"],
                "Aggro Bonus": ["+200", "+200", "+200", "+200", "+275", "+275", "+275", "+275", "+275", "+350"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "Revenge Thrust":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Deft Thrust (Lv 5)",
            "Description": "Sword: Deal melee Stab+Volt damage to one enemy. Damage increases for each hit you have evaded, up to a certain limit. (Evade counter resets when used)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "18", "18", "18", "18", "18", "24"],
                "Attack Power": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
                "Damage Up": ["+60%", "+60%", "+60%", "+60%", "+100%", "+100%", "+100%", "+100%", "+100%", "+150%"],
                "Max. Stacks": ["2", "3", "4", "5", "5", "6", "7", "8", "9", "9"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Counter Boost":{
            "Usage": "Passive",
            "Unlock": "Sylphid (Lv 5)",
            "Description": "Chance to perform additional attacks when Sylphid activates. Chance is rolled independently for each attack.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["25%", "28%", "31%", "34%", "34%", "38%", "42%", "46%", "50%", "50%"],
                "Bonus Attacks": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3"],
            }
        },
    },
    "Chain Duelist":{
        "Sonic Blade":{
            "Usage": "Passive (STR)",
            "Unlock": "Rapier Mastery (Lv 3)",
            "Description": "Normal attacks have a chance to strike twice. First hit deals Stab damage, second deals Cut damage.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["18%", "19%", "20%", "21%", "28%", "29%", "30%", "31%", "32%", "40%"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase physical damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt": ["+4%", "+5%", "+6%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
            }
        },
        "Chain Killer":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Chain Boost (Lv 3), Chain Burst (Lv 3)",
            "Description": "(Chain) Sword: Target one enemy and prepare to follow up after bind/ailment/stun inflictions to them this turn, dealing Stab damage.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "12"],
                "Attack Power": ["400%", "420%", "440%", "460%", "560%", "585%", "610%", "635%", "660%", "800%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            }
        },
        "Chain All":{
            "Usage": "Active (Legs)",
            "Unlock": "Chain Killer (Lv 5)",
            "Description": "Enter a charge state until the end of next turn, which makes Chain skills target all enemies and increases their maximum activations.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "16"],
                "Activations Up": ["+0", "+1", "+2", "+3", "+9"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Chain Plus":{
            "Usage": "Active (Head)",
            "Unlock": "Chain Killer (Lv 5)",
            "Description": "Place a buff on yourself for 3~5 turns, which increases Chain damage and activation chance.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "9", "9", "9", "9", "9", "14"],
                "Damage Dealt": ["+25%", "+28%", "+31%", "+34%", "+34%", "+38%", "+42%", "+46%", "+50%", "+50%"],
                "Chance Up": ["+41%", "+46%", "+51%", "+56%", "+56%", "+62%", "+68%", "+74%", "+80%", "+80%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Chain Double":{
            "Usage": "Passive",
            "Unlock": "Chain Killer (Lv 5)",
            "Description": "Chance to perform an extra follow up when a Chain activates.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["10%", "12%", "14%", "16%", "23%", "25%", "27%", "29%", "31%", "40%"],
            }
        },
        "Sylphscreen":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase evasion and decrease damage taken for each hit you have landed this turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Evasion Up": ["+2.5%", "+3%", "+3.5%", "+4%", "+4%", "+4.5%", "+5%", "+5.5%", "+6%", "+6%"],
                "Damage Taken": ["-2%", "-2%", "-2%", "-2%", "-4%", "-4%", "-4%", "-4%", "-4%", "-6%"],
            }
        },
        "Multi-Stab":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Optic Thrust (Lv 3)",
            "Description": "Sword: Deal multiple hits of melee Stab damage randomly to an enemy line.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "17", "17", "17", "17", "17", "23"],
                "Attack Power": ["125%", "131%", "137%", "143%", "143%", "151%", "159%", "167%", "175%", "175%"],
                "Min. Hits": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "2"],
                "Max. Hits": ["4", "4", "4", "4", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Resonance":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Multi-Stab (Lv 5)",
            "Description": "Sword: Deal melee Stab damage to one enemy. Damage increases for each hit you landed last turn (max 9 stacks).",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "7", "7", "7", "7", "7", "13"],
                "Attack Power": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
                "Damage Up": ["+75%", "+79%", "+83%", "+87%", "+107%", "+111%", "+115%", "+119%", "+123%", "+150%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Speed Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase accuracy, evasion and action speed.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Accuracy Up": ["+2.4%", "+2.8%", "+3.2%", "+3.6%", "+5.2%", "+5.8%", "+6.4%", "+7%", "+7.6%", "+10%"],
                "Evasion Up": ["+2.4%", "+2.8%", "+3.2%", "+3.6%", "+5.2%", "+5.8%", "+6.4%", "+7%", "+7.6%", "+10%"],
                "Speed Up": ["+11%", "+14%", "+17%", "+20%", "+24%", "+27%", "+30%", "+33%", "+36%", "+40%"],
            }
        },
    },
},
"Dragoon":{
    "Basic Skills":{
        "Shield Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decrease physical damage taken if a Shield is equipped.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Taken": ["-4%", "-5%", "-6%", "-7%", "-9%", "-10%", "-11%", "-12%", "-13%", "-15%"],
            }
        },
        "Cannon Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase physical damage dealt if a Cannon is equipped.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt": ["+2%", "+3%", "+4%", "+5%", "+8%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
        "Line Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect an ally line for this turn, which decreases physical damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "11"],
                "Damage Taken": ["-30%", "-32%", "-34%", "-36%", "-41%", "-42%", "-43%", "-44%", "-45%", "-50%"],
            }
        },
        "Mana Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases elemental damage taken.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "15"],
                "Damage Taken": ["-30%", "-33%", "-37%", "-39%", "-49%", "-51%", "-53%", "-55%", "-57%", "-67%"],
            }
        },
        "Healing Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Guard) Shield: Protect yourself for this turn, which decreases physical damage taken and restores HP each time you're hit.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "7"],
                "Damage Taken": ["-30%", "-32%", "-34%", "-36%", "-41%", "-42%", "-43%", "-44%", "-45%", "-50%"],
                "HP Gain": ["16+5%", "18+5%", "20+5%", "22+5%", "25+7%", "27+7%", "29+7%", "31+7%", "33+7%", "40+10%"],
            }
        },
        "Gunmount":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Line/Mana/Healing Guard (Lv 2)",
            "Description": "Cannon: Repeat the effect of the Guard skill used last turn, and deal ranged Bash damage to one enemy.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "7", "7", "7", "7", "7", "14"],
                "Attack Power": ["110%", "115%", "120%", "125%", "225%", "235%", "245%", "255%", "265%", "450%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "160%", "160%", "160%", "160%", "160%", "200%"],
            }
        },
        "Barrage Wall":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Cannon: Deal ranged Bash damage to all enemies. Places a debuff on the targets for 3~5 turns, which decreases physical damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "22"],
                "Attack Power": ["100%", "106%", "112%", "118%", "118%", "126%", "134%", "142%", "150%", "150%"],
                "Damage Dealt": ["-10%", "-10%", "-10%", "-10%", "-15%", "-15%", "-15%", "-15%", "-15%", "-20%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Dragon Roar":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on one ally for 3~5 turns, which increases enemy aggro and slightly decreases all damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Aggro Bonus": ["+200", "+230", "+260", "+290", "+290", "+330", "+370", "+410", "+450", "+450"],
                "Damage Taken": ["-3%", "-4%", "-5%", "-6%", "-6%", "-7%", "-8%", "-9%", "-10%", "-10%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "130%", "130%", "130%", "130%", "130%", "160%"],
            }
        },
        "Decoy Bunker":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Summon a Bunker. The Bunker cannot act, but is highly resistant and has increased enemy aggro. Disappears at the end of battle.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "10"],
                "Bunker HP": ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
                "Bunker DEF/MDF": ["35", "55", "75", "95", "95", "135", "175", "205", "255", "255"],
                "Bunker Vulnerability": ["6%", "6%", "6%", "6%", "4%", "4%", "4%", "4%", "4%", "1%"],
                "Action Speed": ["125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%"],
            }
        },
        "Defense Form":{
            "Usage": "Active (Head)",
            "Unlock": "Decoy Bunker (Lv 2)",
            "Description": "Only usable if there's a Bunker/Turret. Place a buff on the whole party for 3~5 turns, which decreases physical damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "10"],
                "Damage Taken": ["-20%", "-22%", "-24%", "-26%", "-26%", "-28%", "-30%", "-32%", "-34%", "-34%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
    },
    "Shield Bearer":{
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase Max HP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "HP Up": ["+5%", "+6%", "+7%", "+8%", "+12%", "+13%", "+14%", "+15%", "+16%", "+20%"],
            }
        },
        "Recovery Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Gunmount (Lv 3)",
            "Description": "(Guard) Shield: Protect an ally line for this turn, which decreases physical damage taken and has a chance to remove binds.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "16"],
                "Damage Taken": ["-13%", "-16%", "-19%", "-22%", "-22%", "-24%", "-26%", "-28%", "-30%", "-30%"],
                "Remove Chance": ["50%", "53%", "56%", "59%", "78%", "80%", "82%", "84%", "86%", "100%"],
                "Binds Removed": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3"],
            }
        },
        "Counter Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Gunmount (Lv 3)",
            "Description": "(Guard) Shield: Protect an ally line for this turn, which decreases physical damage taken and makes you counterattack against physical hits. Counter chance starts at 100% and goes down with each activation.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "18"],
                "Damage Taken": ["-20%", "-22%", "-24%", "-26%", "-26%", "-28%", "-30%", "-32%", "-34%", "-34%"],
                "Attack Power": ["200%", "205%", "210%", "215%", "245%", "250%", "255%", "260%", "265%", "300%"],
                "Chance Decrease": ["-25%", "-25%", "-25%", "-25%", "-15%", "-15%", "-15%", "-15%", "-15%", "-0%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
            }
        },
        "Divide Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Gunmount (Lv 3)",
            "Description": "(Guard) Shield: Protect one ally for this turn, which makes you take attacks in their place. Decrease damage taken from those redirected attacks. (Cannot be replicated by Gunmount)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "12"],
                "Damage Taken": ["-0%", "-3%", "-6%", "-9%", "-16%", "-18%", "-20%", "-22%", "-24%", "-30%"],
            }
        },
        "Full Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Recovery/Counter/Divide Guard (Lv 3)",
            "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases all attack damage taken. Afterwards, this skill becomes disabled for several turns.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["25", "25", "25", "25", "35", "35", "35", "35", "35", "50"],
                "Damage Taken": ["-25%", "-26%", "-27%", "-28%", "-36%", "-37%", "-38%", "-39%", "-40%", "-50%"],
                "Cooldown": ["7", "7", "7", "7", "6", "6", "6", "6", "6", "5"],
            }
        },
        "Soul Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Recovery/Counter/Divide Guard (Lv 3)",
            "Description": "(Guard) Shield: Protect an ally line for this turn, which decreases physical damage taken and grants them a chance to survive lethal damage with 1 HP.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "23"],
                "Damage Taken": ["-13%", "-16%", "-19%", "-22%", "-22%", "-24%", "-26%", "-28%", "-30%", "-30%"],
                "Endure Chance": ["34%", "35%", "36%", "37%", "44%", "46%", "48%", "50%", "52%", "66%"],
            }
        },
        "Shield Throw":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Shield: Deal ranged Cut damage to an enemy line. (Damage is based on your Shield's DEF multiplied by 3 instead of your weapon's ATK)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "15", "15", "15", "15", "15", "25"],
                "Attack Power": ["200%", "215%", "230%", "245%", "315%", "335%", "355%", "375%", "395%", "500%"],
                "Accuracy": ["-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Auto-Roar":{
            "Usage": "Passive",
            "Unlock": "Dragon Roar (Lv 3)",
            "Description": "Chance to automatically cast Dragon Roar on yourself at the start of battle.",
            "Starter": "1",
            "Max Level": "5",
            "Data": {
                "Activation Chance": ["35%", "40%", "45%", "50%", "67%"],
            }
        },
        "Dragon Force":{
            "Usage": "Passive",
            "Unlock": "Auto-Roar (Lv 3)",
            "Description": "Chance to negate damage taken by allies not in your line.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["4%", "5%", "6%", "7%", "9%", "10%", "11%", "12%", "13%", "15%"],
            }
        },
        "Auto-Bunker":{
            "Usage": "Passive",
            "Unlock": "Defense Form (Lv 3)",
            "Description": "Chance to automatically summon a Decoy Bunker at the start of battle.",
            "Starter": "1",
            "Max Level": "5",
            "Data": {
                "Activation Chance": ["35%", "40%", "45%", "50%", "67%"],
            }
        },
    },
    "Cannon Bearer":{
        "Gun Revenge":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase damage dealt with Cannon skills for each time a Guard skill activates or a Bunker/Turret is hit. Resets to 0 upon using a Cannon skill.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt": ["+10%", "+10%", "+10%", "+10%", "+13%", "+13%", "+13%", "+13%", "+13%", "+17%"],
                "Max. Stacks": ["2", "3", "4", "5", "5", "6", "7", "8", "9", "9"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase physical damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt": ["+4%", "+5%", "+6%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
            }
        },
        "TP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase Max TP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Up": ["+10%", "+11%", "+12%", "+13%", "+17%", "+19%", "+21%", "+23%", "+25%", "+30%"],
            }
        },
        "Prep Artillery":{
            "Usage": "Active (Head)",
            "Unlock": "TP Up (Lv 3)",
            "Description": "Enter a charge state until the end of next turn, which increases damage dealt, accuracy, and action speed for Cannon skills used.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20"],
                "Damage Dealt": ["x2.0", "x2.0", "x2.0", "x2.0", "x2.25", "x2.25", "x2.25", "x2.25", "x2.25", "x2.5"],
                "Accuracy Up": ["+20%", "+24%", "+28%", "+32%", "+32%", "+38%", "+44%", "+50%", "+56%", "+56%"],
                "Speed Up": ["x1.5", "x1.6", "x1.7", "x1.8", "x1.8", "x2.1", "x2.4", "x2.7", "x3.0", "x3.0"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Rapid Cannon":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Barrage Wall (Lv 3)",
            "Description": "Cannon: Deal ranged Bash damage to one enemy. Hits at the start of turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "7", "7", "7", "7", "7", "14"],
                "Attack Power": ["130%", "135%", "140%", "145%", "210%", "220%", "230%", "240%", "250%", "400%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
            }
        },
        "Curse Cannon":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Barrage Wall (Lv 3)",
            "Description": "Cannon: Deal ranged Bash damage to one enemy, with a chance to inflict Curse.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "18"],
                "Attack Power": ["160%", "167%", "174%", "181%", "246%", "254%", "262%", "270%", "278%", "350%"],
                "Infliction Chance": ["40%", "40%", "40%", "40%", "60%", "60%", "60%", "60%", "60%", "80%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Hypno Cannon":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Barrage Wall (Lv 3)",
            "Description": "Cannon: Deal ranged Bash damage to one enemy, with a chance to inflict Sleep.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "18"],
                "Attack Power": ["160%", "167%", "174%", "181%", "246%", "254%", "262%", "270%", "278%", "350%"],
                "Infliction Chance": ["50%", "50%", "50%", "50%", "75%", "75%", "75%", "75%", "75%", "100%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Buster Cannon":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Rapid/Curse/Hypno Cannon (Lv 3)",
            "Description": "Cannon: Start charging an attack that will be performed as your action for the next turn. Deals ranged Bash+Fire damage to one enemy. Deals 50% more damage if either you or the target are in the front line, or 100% more damage if both are.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "30", "30", "30", "30", "30", "40"],
                "Attack Power": ["260%", "275%", "290%", "305%", "365%", "385%", "405%", "425%", "445%", "520%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed\n(Charge)": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
                "Action Speed\n(Attack)": ["1000%", "1000%", "1000%", "1000%", "1000%", "1000%", "1000%", "1000%", "1000%", "1000%"],
            }
        },
        "Decoy Turret":{
            "Usage": "Active (Arms)",
            "Unlock": "Defense Form (Lv 3)",
            "Description": "Summon a Turret. The Turret cannot act, but has increased enemy aggro and counterattacks when hit. Disappears at the end of battle.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "16"],
                "Bunker HP": ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
                "Bunker ATK": ["205", "230", "255", "280", "280", "335", "390", "445", "500", "500"],
                "Bunker DEF/MDF": ["75", "90", "105", "120", "120", "140", "160", "180", "200", "200"],
                "Bunker Vulnerability": ["6%", "6%", "6%", "6%", "4%", "4%", "4%", "4%", "4%", "1%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Gun Support":{
            "Usage": "Passive",
            "Unlock": "Decoy Turret (Lv 3)",
            "Description": "Chance to automatically summon a Decoy Turret each time you're protected by a skill that decreases or nullifies damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["10%", "11%", "12%", "13%", "21%", "22%", "23%", "24%", "25%", "34%"],
            }
        },
    },
},
"Pugilist":{
    "Basic Skills":{
        "Brawl Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase physical damage dealt if a Cestus is equipped.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt": ["+2%", "+3%", "+4%", "+5%", "+8%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase physical damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt": ["+4%", "+5%", "+6%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
            }
        },
        "Concussion":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Cestus: Deal melee Bash damage to one enemy, with a chance to inflict Head Bind. If performed during One-Two Punch, there's a chance to follow up with Arm Crusher or Low Blow.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8"],
                "Attack Power": ["150%", "159%", "168%", "177%", "177%", "189%", "201%", "213%", "225%", "225%"],
                "Infliction Chance": ["30%", "30%", "30%", "30%", "40%", "40%", "40%", "40%", "40%", "50%"],
                "Follow Up Chance": ["34%", "34%", "34%", "34%", "50%", "50%", "50%", "50%", "50%", "66%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Arm Crusher":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Cestus: Deal melee Bash damage to one enemy, with a chance to inflict Arm Bind. If performed during One-Two Punch, there's a chance to follow up with Low Blow.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8"],
                "Attack Power": ["150%", "159%", "168%", "177%", "177%", "189%", "201%", "213%", "225%", "225%"],
                "Infliction Chance": ["30%", "30%", "30%", "30%", "40%", "40%", "40%", "40%", "40%", "50%"],
                "Follow Up Chance": ["34%", "34%", "34%", "34%", "50%", "50%", "50%", "50%", "50%", "66%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Low Blow":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Cestus: Deal melee Bash damage to one enemy, with a chance to inflict Leg Bind.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8"],
                "Attack Power": ["150%", "159%", "168%", "177%", "177%", "189%", "201%", "213%", "225%", "225%"],
                "Infliction Chance": ["30%", "30%", "30%", "30%", "40%", "40%", "40%", "40%", "40%", "50%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "One-Two Punch":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Concussion (Lv 3), Arm Breaker (Lv 3), Low Blow (Lv 3)",
            "Description": "Cestus: Deal melee Bash damage to one enemy, with a chance to follow up with Concussion, Arm Crusher and/or Low Blow (with decreased damage) if the target does not have the corresponding bind. (This skill's follow up chance is only for the first successful follow up, after which the chance will depend on the level of the latest follow up skill performed)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Attack Power": ["100%", "103%", "106%", "109%", "119%", "123%", "127%", "131%", "135%", "150%"],
                "Follow Up Chance": ["34%", "36%", "38%", "40%", "48%", "50%", "52%", "54%", "56%", "66%"],
                "Follow Up Effect": ["x0.7", "x0.7", "x0.7", "x0.7", "x0.7", "x0.7", "x0.7", "x0.7", "x0.7", "x0.7"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Blood Wrath":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Each time you lose HP there's a chance to deal weapon-based damage to a random enemy.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["16%", "18%", "20%", "22%", "32%", "34%", "36%", "38%", "40%", "50%"],
                "Attack Power": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Overexertion":{
            "Usage": "Active (Head)",
            "Unlock": "Blood Wrath (Lv 1)",
            "Description": "Place a buff on one ally for 3 turns, which drastically increases physical damage dealt but makes them spend part of current HP when they act.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Damage Dealt": ["+40%", "+40%", "+40%", "+40%", "+65%", "+65%", "+65%", "+65%", "+65%", "+100%"],
                "HP Loss": ["30%", "23%", "16%", "9%", "40%", "33%", "26%", "19%", "12%", "50%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Thunder Fist":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Deal melee Bash+Volt damage to one enemy. If it doesn't kill, take recoil damage based on current HP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "10"],
                "Attack Power": ["200%", "208%", "216%", "224%", "300%", "312%", "324%", "336%", "348%", "450%"],
                "HP Loss": ["20%", "20%", "20%", "20%", "35%", "35%", "35%", "35%", "35%", "50%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["130%", "130%", "130%", "130%", "130%", "130%", "130%", "130%", "130%", "130%"],
            }
        },
        "Devil's Fist":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Thunder Fist (Lv 2)",
            "Description": "Spend part of current HP to deal melee Bash damage to one enemy, with splash effect.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "16"],
                "HP Cost": ["35%", "35%", "35%", "35%", "20%", "20%", "20%", "20%", "20%", "5%"],
                "Attack Power": ["180%", "190%", "200%", "210%", "210%", "225%", "240%", "255%", "270%", "270%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
    },
    "Barrage Brawler":{
        "Double Punch":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "When a single-hit Pugilist skill fails to inflict its bind/ailment, there's a chance to perform it a second time. (Does not work on One-Two Punch follow ups. Does not work if infliction fails because the target was already afllicted)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["12%", "14%", "16%", "18%", "28%", "31%", "34%", "37%", "40%", "50%"],
            }
        },
        "Status ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase chance to successfully inflict binds/ailments.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Infliction Up": ["x1.05", "x1.06", "x1.07", "x1.08", "x1.12", "x1.13", "x1.14", "x1.15", "x1.16", "x1.2"],
            }
        },
        "Corkscrew":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Cestus: Deal melee Bash damage to one enemy, with a chance to inflict Paralysis.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "10"],
                "Attack Power": ["162%", "172%", "182%", "192%", "192%", "204%", "216%", "228%", "240%", "240%"],
                "Infliction Chance": ["40%", "40%", "40%", "40%", "50%", "50%", "50%", "50%", "50%", "60%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Leading Blow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Corkscrew (Lv 2), One-Two Punch (Lv 5)",
            "Description": "Cestus: Deal melee Bash damage to one enemy, then follow up with Concussion, Arm Crusher, Low Blow and/or Corkscrew (with decreased damage) if the target is afflicted by the corresponding bind/ailment. (Corkscrew activates for any ailment)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "22", "22", "22", "22", "22", "30"],
                "Attack Power": ["100%", "103%", "106%", "109%", "119%", "123%", "127%", "131%", "135%", "150%"],
                "Follow Up Effect": ["x0.75", "x0.78", "x0.81", "x0.84", "x1.04", "x1.08", "x1.12", "x1.16", "x1.2", "x1.5"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Speed Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase accuracy, evasion and action speed.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Accuracy Up": ["+2.4%", "+2.8%", "+3.2%", "+3.6%", "+5.2%", "+5.8%", "+6.4%", "+7%", "+7.6%", "+10%"],
                "Evasion Up": ["+2.4%", "+2.8%", "+3.2%", "+3.6%", "+5.2%", "+5.8%", "+6.4%", "+7%", "+7.6%", "+10%"],
                "Speed Up": ["+11%", "+14%", "+17%", "+20%", "+24%", "+27%", "+30%", "+33%", "+36%", "+40%"],
            }
        },
        "Lash Out":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Speed Up (Lv 5)",
            "Description": "Fist: Deal multiple hits of melee Bash damage to one enemy. Hits as many times as the amount of hits you landed last turn. (Max 9 hits. Counts itself as a single hit regardless of how many were performed)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "4", "4", "4", "4", "4", "7"],
                "Attack Power": ["120%", "123%", "126%", "129%", "144%", "148%", "152%", "156%", "160%", "180%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Cross Counter":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Overexertion (Lv 5)",
            "Description": "Cestus: Prepare to counterattack when your line is first hit by a physical attack this turn. Deals melee Bash damage, with a chance to bind the part that was used to attack.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8"],
                "Attack Power": ["300%", "315%", "330%", "345%", "405%", "425%", "445%", "465%", "485%", "600%"],
                "Infliction Chance": ["50%", "52%", "54%", "56%", "68%", "71%", "74%", "77%", "80%", "100%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["1500%", "1500%", "1500%", "1500%", "1500%", "1500%", "1500%", "1500%", "1500%", "1500%"],
            }
        },
        "Breather":{
            "Usage": "Active (No Parts)",
            "Unlock": "N/A",
            "Description": "Only usable if afflicted with a bind/ailment. Remove all binds and ailments on yourself, then enter a charge state until the end of next turn, which increases all damage dealt. (Does not strenghten Union skills)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "8", "8", "8", "8", "8", "20"],
                "Damage Dealt": ["x1.2", "x1.25", "x1.3", "x1.35", "x1.8", "x1.85", "x1.9", "x1.95", "x2.0", "x2.5"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Fault Blocker":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Place a buff on your line for 3~5 turns, which increases resistance against binds/ailments.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "18"],
                "Infliction Vulnerability": ["x0.68", "x0.63", "x0.58", "x0.53", "x0.53", "x0.48", "x0.43", "x0.38", "x0.33", "x0.33"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Clinch":{
            "Usage": "Active (No Parts, LUC)",
            "Unlock": "Breather (Lv 3), Fault Blocker (Lv 3)",
            "Description": "Attempt to inflict the 3 binds on one enemy and yourself.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "10", "10", "10", "10", "10", "15"],
                "Infliction Chance\n(Enemy)": ["20%", "22%", "24%", "26%", "38%", "41%", "44%", "47%", "50%", "67%"],
                "Infliction Chance\n(Self)": ["20%", "22%", "24%", "26%", "34%", "36%", "38%", "40%", "42%", "50%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
    },
    "Impact Brawler":{
        "Fortitude":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase all damage dealt if HP is below a certain threshold.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "HP Threshold": ["30%", "31%", "32%", "33%", "39%", "40%", "41%", "42%", "43%", "50%"],
                "Damage Dealt": ["+24%", "+25%", "+26%", "+27%", "+32%", "+34%", "+36%", "+38%", "+40%", "+50%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase Max HP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "HP Up": ["+5%", "+6%", "+7%", "+8%", "+12%", "+13%", "+14%", "+15%", "+16%", "+20%"],
            }
        },
        "Vajra Stance":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Place a buff on your line for 3~5 turns, which decreases physical damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "15"],
                "Damage Taken↓": ["-11%", "-13%", "-15%", "-17%", "-17%", "-19%", "-21%", "-23%", "-25%", "-25%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Soul Crusher":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Cestus: Deal melee Bash damage to all enemies. Recover HP based on damage dealt.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "25"],
                "Attack Power": ["125%", "131%", "137%", "143%", "173%", "181%", "189%", "197%", "205%", "250%"],
                "Damage Drain": ["10%", "10%", "10%", "10%", "15%", "15%", "15%", "15%", "15%", "25%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Abyssal Killer":{
            "Usage": "Active (Head)",
            "Unlock": "Vajra Stance (Lv 5), Soul Crusher (Lv 5)",
            "Description": "For this turn, you can survive one lethal attack with 1 HP. If this activates, enter a charge state until the end of next turn, which increases all damage dealt based on how much lethal damage you endured. The base damage increase is multiplied by (ExcessDamage/MaxHP)<sup>1/4</sup>. (Damage bonus is multiplicative. Does not work on Union skills)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "18", "18", "18", "18", "18", "24"],
                "Damage Dealt↑": ["+40%", "+43%", "+46%", "+49%", "+80%", "+85%", "+90%", "+95%", "+100%", "+150%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Titan Killer":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Cestus: Deal melee Bash damage to one enemy. Stronger if the target has higher HP% than you.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "7"],
                "Attack Power": ["100%", "102%", "104%", "106%", "121%", "124%", "127%", "130%", "133%", "150%"],
                "Damage Bonus": ["x3.0", "x3.05", "x3.1", "x3.15", "x3.58", "x3.66", "x3.74", "x3.82", "x3.9", "x4.5"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Death's Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Overexertion (Lv 3)",
            "Description": "Cestus: Deal melee Bash damage to one enemy. Stronger the less HP the party has:<br>-Party's total missing HP grants a damage multiplier of [1 + MissingHP/100];<br>-Party's average missing HP% grants a damage multiplier of [MissingHP%*(1+MissingHP%)/2 + 0.01].",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "14"],
                "Attack Power": ["150%", "154%", "158%", "162%", "180%", "185%", "190%", "195%", "200%", "225%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%"],
            }
        },
        "Heavenly Aid":{
            "Usage": "Active (Head)",
            "Unlock": "Titan Killer (Lv 3), Death's Edge (Lv 3)",
            "Description": "Enter a charge state until the end of next turn, which increases damage dealt based on how much HP is healed to you this turn. The base damage increase is multiplied by GainedHP/MaxHP. (Damage bonus is multiplicative. Does not work on Union skills)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "9", "9", "9", "9", "9", "20"],
                "Damage Dealt↑": ["+170%", "+174%", "+178%", "+182%", "+220%", "+226%", "+232%", "+238%", "+244%", "+300%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Satan's Fist":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Devil's Fist (Lv 3)",
            "Description": "Spend part of current HP to deal melee Bash damage to an enemy line.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "13", "13", "13", "13", "13", "20"],
                "HP Cost": ["50%", "50%", "50%", "50%", "30%", "30%", "30%", "30%", "30%", "10%"],
                "Attack Power": ["215%", "230%", "245%", "260%", "260%", "280%", "300%", "320%", "340%", "340%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Status DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase resistance to bind/ailment inflictions.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Infliction Vulnerability": ["x0.92", "x0.9", "x0.88", "x0.86", "x0.82", "x0.8", "x0.78", "x0.76", "x0.74", "x0.7"],
            }
        },
    },
},
"Harbinger":{
    "Basic Skills":{
    
    },
    "Deathbringer":{
    
    },
    "Deathguard":{
    
    },
},
"Warlock":{
    "Basic Skills":{
    
    },
    "Omnimancer":{
    
    },
    "Elemancer":{
    
    },
},
"Necromancer":{
    "Basic Skills":{
    
    },
    "Spirit Evoker":{
    
    },
    "Spirit Broker":{
    
    },
},
"Rover":{
    "Basic Skills":{
    
    },
    "Flying Falcon":{
    
    },
    "Hunting Hound":{
    
    },
},
"Masurao":{
    "Basic Skills":{
    
    },
    "Blade Dancer":{
    
    },
    "Blade Master":{
    
    },
},
"Shaman":{
    "Basic Skills":{
    
    },
    "Divine Punisher":{
    
    },
    "Divine Herald":{
    
    },
},
"Botanist":{
    "Basic Skills":{
    
    },
    "Merciful Healer":{
    
    },
    "Graced Poisoner":{
    
    },
},
}

//End of database

var descriptions = {
    "Fencer":["Swordfighters that overwhelm the enemy with swift movements.", "<b>Phantom Duelist</b>: Draws in, evades and counters enemy attacks.", "<b>Chain Duelist</b>: Strikes repeatedly in tandem with ally attacks."],
    "Dragoon":["Sturdy knights skilled in protection and artillery.", "<b>Shield Bearer</b>: Focuses on blocking and diverting attacks.", "<b>Cannon Bearer</b>: Simultaneously covers offense and defense."],
    "Pugilist":["Agile fighters who take down enemies with their own Fists.", "<b>Barrage Brawler</b>: Performs combos of precise punches to quickly disable the enemy.", "<b>Impact Brawler</b>: Throws destructive punches by sacrificing their own health."],
    "Harbinger":["Reapers who use noxious Miasma to weaken the enemy.", "<b>Deathbringer</b>: Coats their weapon in Miasma to inflict ailments and cut down enemies.", "<b>Deathguard</b>: Spreads Miasma to inflict debuffs or ward off enemy attacks."],
    "Warlock":["Elemental casters who use special Chants to alter their spells.", "<b>Omnimancer</b>: Learns physical magic to cripple the enemy and continuously hit their weak points.", "<b>Elemancer</b>: Expands their elemental magic and improves control on their use of energy."],
    "Necromancer":["Versatile casters who summon Wraiths to assist the party.", "<b>Spirit Evoker</b>: Works alongside Wraiths to cover offense, defense and ailments.", "<b>Spirit Broker</b>: Uses attacks that summon Wraiths, then sacrifices them for more power."],
    "Rover":["Archers who chase and restrain enemies alongside animal companions.", "<b>Flying Falcon</b>: Hunts with a Hawk to fight multiple enemies.", "<b>Hunting Hound</b>: Hunts with a Wolf to protect and heal allies."],
    "Masurao":["Frontline warriors specialized in strong offense with Katanas.", "<b>Blade Dancer</b>: Wields multiple Katanas at once, sacrificing all defense for overwhelming offense.", "<b>Blade Master</b>: Handles one Katana with presicion, serving as versatile and durable duelists."],
    "Shaman":["Support casters who manipulate buffs to strengthen and protect the party.", "<b>Divine Punisher</b>: Spends buffs to turn them into direct power.", "<b>Divine Herald</b>: Learns additional buffs and blessings to safeguard allies."],
    "Botanist":["Supports that use herbal concoctions to heal allies or weaken enemies.", "<b>Merciful Healer</b>: Uses medicinal herbs to treat all kinds of injuries.", "<b>Graced Poisoner</b>: Uses poisonous herbs to make enemies susceptible to ailments."],
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
    class_decription.innerText = descriptions[class_name][0]
    skill_list.appendChild(class_decription)

    mastery = document.createElement("ul")
    skill_list.appendChild(mastery)
    mastery1 = document.createElement("li")
    mastery1.innerHTML = descriptions[class_name][1]
    mastery.appendChild(mastery1)
    mastery2 = document.createElement("li")
    mastery2.innerHTML = descriptions[class_name][2]
    mastery.appendChild(mastery2)
    for (const category in current_class){
        category_name = document.createElement("h3")
        category_name.innerText = category
        skill_list.appendChild(category_name)
        for (const skill in current_class[category]){
            console.log("test")
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

populate("Fencer")



