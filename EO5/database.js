var data = {
"Fencer":{
    "Basic Skills":{
        "Rapier Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt if a Sword is equipped. Sword's damage type changes from Cut to Stab.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+8%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
        "Chain Flame":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "N/A",
            "Description": "(Chain) Sword: Target one enemy and prepare to follow up after your allies' Stab or Fire attacks to them this turn, dealing Stab+Fire damage. Activation chance starts at 100% and goes down with each follow up.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "12"],
                "Attack Power": ["150%", "156%", "162%", "168%", "168%", "176%", "184%", "192%", "200%", "200%"],
                "Chance Fadeout": ["22%", "22%", "22%", "22%", "15%", "15%", "15%", "15%", "15%", "10%"],
                "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            }
        },
        "Chain Freeze":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "N/A",
            "Description": "(Chain) Sword: Target one enemy and prepare to follow up after your allies' Stab or Ice attacks to them this turn, dealing Stab+Ice damage. Activation chance starts at 100% and goes down with each follow up.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "12"],
                "Attack Power": ["150%", "156%", "162%", "168%", "168%", "176%", "184%", "192%", "200%", "200%"],
                "Chance Fadeout": ["22%", "22%", "22%", "22%", "15%", "15%", "15%", "15%", "15%", "10%"],
                "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            }
        },
        "Chain Shock":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "N/A",
            "Description": "(Chain) Sword: Target one enemy and prepare to follow up after your allies' Stab or Volt attacks to them this turn, dealing Stab+Volt damage. Activation chance starts at 100% and goes down with each follow up.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "12"],
                "Attack Power": ["150%", "156%", "162%", "168%", "168%", "176%", "184%", "192%", "200%", "200%"],
                "Chance Fadeout": ["22%", "22%", "22%", "22%", "15%", "15%", "15%", "15%", "15%", "10%"],
                "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            }
        },
        "Chain Boost":{
            "Usage": "Passive",
            "Unlock": "Chain Flame/Freeze/Shock (Lv 2)",
            "Description": "Increases damage dealt with Chain attacks based on how many you have performed this turn. (Stacks up to +99%)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+5%", "+6%", "+7%", "+8%", "+12%", "+13%", "+14%", "+15%", "+16%", "+20%"],
            }
        },
        "Chain Burst":{
            "Usage": "Passive (STR)",
            "Unlock": "Chain Flame/Freeze/Shock (Lv 2)",
            "Description": "(Chain) When you kill an enemy with a Chain attack, perform an additional attack of the same types to a random enemy.",
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
                "Evasion↑": ["+100%", "+112%", "+124%", "+136%", "+136%", "+152%", "+168%", "+184%", "+200%", "+200%"],
                "Aggro↑": ["+1000%", "+1120%", "+1240%", "+1360%", "+1360%", "+1520%", "+1680%", "+1840%", "+2000%", "+2000%"],
                "Evasion Fadeout": ["-80%", "-80%", "-80%", "-80%", "-65%", "-65%", "-65%", "-65%", "-65%", "-50%"],
                "Aggro Fadeout": ["-600%", "-600%", "-600%", "-600%", "-500%", "-500%", "-500%", "-500%", "-500%", "-400%"],
            }
        },
        "Wind Curtain":{
            "Usage": "Active (Head)",
            "Unlock": "Predict (Lv 3)",
            "Description": "Place a buff on an ally line for a few turns, which lets them evade one physical attack. (Buff is consumed when activated)",
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
                "Infliction Rate": ["50%", "50%", "50%", "50%", "65%", "65%", "65%", "65%", "65%", "80%"],
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
                "Chance Fadeout": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
                "Max. Activations": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "4"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
            }
        },
    },
    "Phantom Duelist":{
        "Ray of Light":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases enemy aggro and decreases all damage taken for each time you evade an attack. Effect resets if you're hit.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Aggro↑": ["+30%", "+30%", "+30%", "+30%", "+40%", "+40%", "+40%", "+40%", "+40%", "+50%"],
                "Damage Taken↓": ["-4%", "-4%", "-4%", "-4%", "-6%", "-6%", "-6%", "-6%", "-6%", "-8%"],
                "Max. Stacks": ["2", "3", "4", "5", "5", "6", "7", "8", "9", "9"],
            }
        },
        "Lightweight":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases evasion if you have empty equipment slots. Effect is multiplied by 2.5 for 2 slots, by 5 for 3 slots, and by 7.5 for all 4 slots.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Evasion↑": ["+4%", "+4.4%", "+4.8%", "+5.2%", "+6.8%", "+7.2", "+7.6", "+8%", "+8.4%", "+10%"],
            }
        },
        "Phantom Swords":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Sword: Place a debuff on an enemy line for several turns, which decreases accuracy.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Accuracy↓": ["-9.5%", "-11%", "-12.5%", "-14%", "-14%", "-15.5%", "-17%", "-18.5%", "-20%", "-20%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Lure":{
            "Usage": "Active (Legs)",
            "Unlock": "Phantom Swords (Lv 2)",
            "Description": "Prepare to command a counterattack each time you evade a hit this turn. Other allies in your line will deal weapon-based damage to the attacker.",
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
                "Evasion↑": ["+50%", "+53%", "+56%", "+59%", "+70%", "+74%", "+78%", "+82%", "+86%", "+105%"],
                "Evasion Fadeout": ["-25%", "-25%", "-25%", "-25%", "-30%", "-30%", "-30%", "-30%", "-30%", "-35%"],
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
                "Evasion↑": ["+20%", "+20%", "+20%", "+20%", "+27.5%", "+27.5%", "+27.5%", "+27.5%", "+27.5%", "+35%"],
                "Aggro↑": ["+200%", "+200%", "+200%", "+200%", "+275%", "+275%", "+275%", "+275%", "+275%", "+350%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "Revenge Thrust":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Deft Thrust (Lv 5)",
            "Description": "Sword: Deal melee Stab+Volt damage to one enemy. Damage dealt increases for each hit you have evaded, up to a certain limit. (Power bonus resets when used)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "18", "18", "18", "18", "18", "24"],
                "Attack Power": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
                "Damage Bonus": ["+60%", "+60%", "+60%", "+60%", "+100%", "+100%", "+100%", "+100%", "+100%", "+150%"],
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
            "Description": "Increases physical damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
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
                "Activations↑": ["+0", "+1", "+2", "+3", "+9"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Chain Plus":{
            "Usage": "Active (Head)",
            "Unlock": "Chain Killer (Lv 5)",
            "Description": "Place a buff on yourself for several turns, which increases Chain damage and activation chance.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "9", "9", "9", "9", "9", "14"],
                "Damage Dealt↑": ["+25%", "+28%", "+31%", "+34%", "+34%", "+38%", "+42%", "+46%", "+50%", "+50%"],
                "Chance↑": ["+41%", "+46%", "+51%", "+56%", "+56%", "+62%", "+68%", "+74%", "+80%", "+80%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Chain Double":{
            "Usage": "Passive",
            "Unlock": "Chain Killer (Lv 5)",
            "Description": "Chance to perform two follow ups at once when a Chain activates.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["10%", "12%", "14%", "16%", "23%", "25%", "27%", "29%", "31%", "40%"],
            }
        },
        "Sylphscreen":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases evasion and decreases damage taken for each hit you have landed this turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Evasion↑": ["+2.5%", "+3%", "+3.5%", "+4%", "+4%", "+4.5%", "+5%", "+5.5%", "+6%", "+6%"],
                "Damage Taken↓": ["-2%", "-2%", "-2%", "-2%", "-4%", "-4%", "-4%", "-4%", "-4%", "-6%"],
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
                "Hits": ["1~4", "1~4", "1~4", "1~4", "2~4", "2~4", "2~4", "2~4", "2~4", "2~5"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Resonance":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Multi-Stab (Lv 5)",
            "Description": "Sword: Deal melee Stab damage to one enemy. Damage dealt increases for each hit you landed last turn (max 9 stacks).",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "7", "7", "7", "7", "7", "13"],
                "Attack Power": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
                "Damage Bonus": ["+75%", "+79%", "+83%", "+87%", "+107%", "+111%", "+115%", "+119%", "+123%", "+150%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Speed Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases accuracy, evasion and action speed.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Accuracy↑": ["+2.4%", "+2.8%", "+3.2%", "+3.6%", "+5.2%", "+5.8%", "+6.4%", "+7%", "+7.6%", "+10%"],
                "Evasion↑": ["+2.4%", "+2.8%", "+3.2%", "+3.6%", "+5.2%", "+5.8%", "+6.4%", "+7%", "+7.6%", "+10%"],
                "Speed↑": ["+11%", "+14%", "+17%", "+20%", "+24%", "+27%", "+30%", "+33%", "+36%", "+40%"],
            }
        },
    },
},
"Dragoon":{
    "Basic Skills":{
        "Shield Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decreases physical damage taken if a Shield is equipped.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Taken↓": ["-4%", "-5%", "-6%", "-7%", "-9%", "-10%", "-11%", "-12%", "-13%", "-15%"],
            }
        },
        "Cannon Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt if a Cannon is equipped.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+8%", "+9%", "+10%", "+11%", "+12%", "+15%"],
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
                "Damage Taken↓": ["-30%", "-32%", "-34%", "-36%", "-41%", "-42%", "-43%", "-44%", "-45%", "-50%"],
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
                "Damage Taken↓": ["-30%", "-33%", "-37%", "-39%", "-49%", "-51%", "-53%", "-55%", "-57%", "-67%"],
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
                "Damage Taken↓": ["-30%", "-32%", "-34%", "-36%", "-41%", "-42%", "-43%", "-44%", "-45%", "-50%"],
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
            "Description": "Cannon: Deal ranged Bash damage to all enemies. Places a debuff on the targets for several turns, which decreases physical damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "22"],
                "Attack Power": ["100%", "106%", "112%", "118%", "118%", "126%", "134%", "142%", "150%", "150%"],
                "Damage Dealt↓": ["-10%", "-10%", "-10%", "-10%", "-15%", "-15%", "-15%", "-15%", "-15%", "-20%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Dragon Roar":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on one ally for several turns, which increases enemy aggro and slightly decreases all damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Aggro↑": ["+200%", "+230%", "+260%", "+290%", "+290%", "+330%", "+370%", "+410%", "+450%", "+450%"],
                "Damage Taken↓": ["-3%", "-4%", "-5%", "-6%", "-6%", "-7%", "-8%", "-9%", "-10%", "-10%"],
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
                "Action Speed": ["125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%", "125%"],
                "Separator":[],
                "Bunker HP": ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
                "Bunker DEF/MDF": ["35", "55", "75", "95", "95", "135", "175", "205", "255", "255"],
                "Bunker Vulnerability": ["6%", "6%", "6%", "6%", "4%", "4%", "4%", "4%", "4%", "1%"],
                "Aggro Bonus": ["+2000%", "+2000%", "+2000%", "+2000%", "+2750%", "+2750%", "+2750%", "+2750%", "+2750%", "+3500%"],
            }
        },
        "Defense Form":{
            "Usage": "Active (Head)",
            "Unlock": "Decoy Bunker (Lv 2)",
            "Description": "Only usable if there's a Bunker/Turret. Place a buff on the whole party for several turns, which decreases physical damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "10"],
                "Damage Taken↓": ["-20%", "-22%", "-24%", "-26%", "-26%", "-28%", "-30%", "-32%", "-34%", "-34%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
    },
    "Shield Bearer":{
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max HP↑": ["+5%", "+6%", "+7%", "+8%", "+12%", "+13%", "+14%", "+15%", "+16%", "+20%"],
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
                "Damage Taken↓": ["-13%", "-16%", "-19%", "-22%", "-22%", "-24%", "-26%", "-28%", "-30%", "-30%"],
                "Remove Chance": ["50%", "53%", "56%", "59%", "78%", "80%", "82%", "84%", "86%", "100%"],
                "Binds Removed": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3"],
            }
        },
        "Counter Guard":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Gunmount (Lv 3)",
            "Description": "(Guard) Shield: Protect an ally line for this turn, which decreases physical damage taken and makes you counterattack against physical hits. Counter chance starts at 100% and goes down with each activation.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "18"],
                "Damage Taken↓": ["-20%", "-22%", "-24%", "-26%", "-26%", "-28%", "-30%", "-32%", "-34%", "-34%"],
                "Attack Power": ["200%", "205%", "210%", "215%", "245%", "250%", "255%", "260%", "265%", "300%"],
                "Chance Fadeout": ["25%", "25%", "25%", "25%", "15%", "15%", "15%", "15%", "15%", "0%"],
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
                "Damage Taken↓": ["-0%", "-3%", "-6%", "-9%", "-16%", "-18%", "-20%", "-22%", "-24%", "-30%"],
            }
        },
        "Full Guard":{
            "Usage": "Active (Arms)",
            "Unlock": "Recovery/Counter/Divide Guard (Lv 3)",
            "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases physical/elemental damage taken. Afterwards, this skill becomes disabled for several turns.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["25", "25", "25", "25", "35", "35", "35", "35", "35", "50"],
                "Damage Taken↓": ["-25%", "-26%", "-27%", "-28%", "-36%", "-37%", "-38%", "-39%", "-40%", "-50%"],
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
                "Damage Taken↓": ["-13%", "-16%", "-19%", "-22%", "-22%", "-24%", "-26%", "-28%", "-30%", "-30%"],
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
            "Description": "Chance to negate physical/elemental damage taken by allies not in your line.",
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
            "Description": "Increases damage dealt with Cannon skills for each time a Guard skill activates or a Bunker/Turret is hit. Resets to 0 upon using a Cannon skill.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+10%", "+10%", "+10%", "+10%", "+13%", "+13%", "+13%", "+13%", "+13%", "+17%"],
                "Max. Stacks": ["2", "3", "4", "5", "5", "6", "7", "8", "9", "9"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
            }
        },
        "TP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max TP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max TP↑": ["+10%", "+11%", "+12%", "+13%", "+17%", "+19%", "+21%", "+23%", "+25%", "+30%"],
            }
        },
        "Prep Artillery":{
            "Usage": "Active (Head)",
            "Unlock": "TP Up (Lv 3)",
            "Description": "Enter a charge state until the end of next turn, which increases damage dealt, accuracy, and action speed for Cannon skills.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20"],
                "Damage Dealt↑": ["x2.0", "x2.0", "x2.0", "x2.0", "x2.25", "x2.25", "x2.25", "x2.25", "x2.25", "x2.5"],
                "Accuracy↑": ["+20%", "+24%", "+28%", "+32%", "+32%", "+38%", "+44%", "+50%", "+56%", "+56%"],
                "Speed↑": ["x1.5", "x1.6", "x1.7", "x1.8", "x1.8", "x2.1", "x2.4", "x2.7", "x3.0", "x3.0"],
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
                "Infliction Rate": ["40%", "40%", "40%", "40%", "60%", "60%", "60%", "60%", "60%", "80%"],
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
                "Infliction Rate": ["50%", "50%", "50%", "50%", "75%", "75%", "75%", "75%", "75%", "100%"],
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
            "Description": "Summon a Turret. The Turret cannot act, but has increased enemy aggro and counterattacks when hit. Counters deal ranged Bash damage to the attacker. Disappears at the end of battle.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "16"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
                "Separator": [],
                "Turret HP": ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
                "Turret ATK": ["205", "230", "255", "280", "280", "335", "390", "445", "500", "500"],
                "Turret DEF/MDF": ["75", "90", "105", "120", "120", "140", "160", "180", "200", "200"],
                "Turret Vulnerability": ["6%", "6%", "6%", "6%", "4%", "4%", "4%", "4%", "4%", "1%"],
                "Aggro Bonus": ["+1500%", "+1500%", "+1500%", "+1500%", "+2000%", "+2000%", "+2000%", "+2000%", "+2000%", "+2500%"],
                "Attack Power": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
                "Accuracy": ["-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%"],
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
            "Description": "Increases physical damage dealt if a Cestus is equipped.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+8%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
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
                "Infliction Rate": ["30%", "30%", "30%", "30%", "40%", "40%", "40%", "40%", "40%", "50%"],
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
                "Infliction Rate": ["30%", "30%", "30%", "30%", "40%", "40%", "40%", "40%", "40%", "50%"],
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
                "Infliction Rate": ["30%", "30%", "30%", "30%", "40%", "40%", "40%", "40%", "40%", "50%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "One-Two Punch":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Concussion (Lv 3), Arm Crusher (Lv 3), Low Blow (Lv 3)",
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
                "Damage Dealt↑": ["+40%", "+40%", "+40%", "+40%", "+65%", "+65%", "+65%", "+65%", "+65%", "+100%"],
                "HP Loss": ["30%", "23%", "16%", "9%", "40%", "33%", "26%", "19%", "12%", "50%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Thunder Fist":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Cestus: Deal melee Bash+Volt damage to one enemy. If it doesn't kill, take recoil damage based on current HP.",
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
            "Description": "Cestus: Spend part of current HP to deal melee Bash damage to one enemy, with splash effect.",
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
            "Description": "When a single-hit Pugilist skill fails to inflict its bind/ailment, there's a chance to perform it a second time. (Does not work on One-Two Punch follow ups. Does not work if the infliction fails because the target was already afflicted)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["12%", "14%", "16%", "18%", "28%", "31%", "34%", "37%", "40%", "50%"],
            }
        },
        "Status ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases bind/ailment infliction rates.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Inflictions↑": ["x1.05", "x1.06", "x1.07", "x1.08", "x1.12", "x1.13", "x1.14", "x1.15", "x1.16", "x1.2"],
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
                "Infliction Rate": ["40%", "40%", "40%", "40%", "50%", "50%", "50%", "50%", "50%", "60%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Leading Blow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Corkscrew (Lv 2), One-Two Punch (Lv 5)",
            "Description": "Cestus: Deal melee Bash damage to one enemy, then follow up with Concussion, Arm Crusher, Low Blow and/or Corkscrew (with modified damage) if the target is already afflicted by their corresponding bind/ailment. (Corkscrew activates for any ailment)",
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
            "Description": "Increases accuracy, evasion and action speed.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Accuracy↑": ["+2.4%", "+2.8%", "+3.2%", "+3.6%", "+5.2%", "+5.8%", "+6.4%", "+7%", "+7.6%", "+10%"],
                "Evasion↑": ["+2.4%", "+2.8%", "+3.2%", "+3.6%", "+5.2%", "+5.8%", "+6.4%", "+7%", "+7.6%", "+10%"],
                "Speed↑": ["+11%", "+14%", "+17%", "+20%", "+24%", "+27%", "+30%", "+33%", "+36%", "+40%"],
            }
        },
        "Lash Out":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Speed Up (Lv 5)",
            "Description": "Cestus: Deal multiple hits of melee Bash damage to one enemy. Hits as many times as the amount of hits you landed last turn. (Max 9 hits. Counts itself as a single hit regardless of how many were performed)",
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
                "Infliction Rate": ["50%", "52%", "54%", "56%", "68%", "71%", "74%", "77%", "80%", "100%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
            }
        },
        "Breather":{
            "Usage": "Active (No Parts)",
            "Unlock": "N/A",
            "Description": "Only usable if afflicted with a bind/ailment. Remove all binds and ailments on yourself, then enter a charge state until the end of next turn, which increases all damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "8", "8", "8", "8", "8", "20"],
                "Damage Dealt↑": ["x1.2", "x1.25", "x1.3", "x1.35", "x1.8", "x1.85", "x1.9", "x1.95", "x2.0", "x2.5"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Fault Blocker":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Place a buff on your line for several turns, which increases resistance against binds/ailments.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "18"],
                "Inflictions↓": ["x0.68", "x0.63", "x0.58", "x0.53", "x0.53", "x0.48", "x0.43", "x0.38", "x0.33", "x0.33"],
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
                "Infliction Rate\n(Enemy)": ["20%", "22%", "24%", "26%", "38%", "41%", "44%", "47%", "50%", "67%"],
                "Infliction Rate\n(Self)": ["20%", "22%", "24%", "26%", "34%", "36%", "38%", "40%", "42%", "50%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
    },
    "Impact Brawler":{
        "Fortitude":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases all damage dealt if HP is below a certain threshold.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "HP Threshold": ["30%", "31%", "32%", "33%", "39%", "40%", "41%", "42%", "43%", "50%"],
                "Damage Dealt↑": ["+24%", "+25%", "+26%", "+27%", "+32%", "+34%", "+36%", "+38%", "+40%", "+50%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max HP↑": ["+5%", "+6%", "+7%", "+8%", "+12%", "+13%", "+14%", "+15%", "+16%", "+20%"],
            }
        },
        "Vajra Stance":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Place a buff on your line for several turns, which decreases physical damage taken.",
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
            "Description": "For this turn, you can survive one instance of lethal damage with 1 HP. If this activates, enter a charge state until the end of next turn, which increases all damage dealt based on how much excess damage you endured: The base damage increase is multiplied by [(ExcessDamage/MaxHP)<sup>1/2</sup>].",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "18", "18", "18", "18", "18", "24"],
                "Damage Dealt↑": ["+40%", "+43%", "+46%", "+49%", "+80%", "+85%", "+90%", "+95%", "+100%", "+150%"],
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
            "Description": "Cestus: Deal melee Bash damage to one enemy. Stronger the less HP the party has:<br>-Party's average missing HP grants a damage multiplier of [1 + MissingHP/100].<br>-Party's average missing HP% grants a damage multiplier of [MissingHP%*(1+MissingHP%)/2 + 0.01].",
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
            "Description": "Enter a charge state until the end of next turn, which increases damage dealt based on how much HP is healed to you this turn: The base damage increase is multiplied by [(GainedHP/MaxHP)<sup>3/4</sup>].",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "9", "9", "9", "9", "9", "20"],
                "Damage Dealt↑": ["+170%", "+174%", "+178%", "+182%", "+220%", "+226%", "+232%", "+238%", "+244%", "+300%"],
            }
        },
        "Satan's Fist":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Devil's Fist (Lv 3)",
            "Description": "Cestus: Spend part of current HP to deal melee Bash damage to an enemy line.",
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
            "Description": "Increases resistance to bind/ailment inflictions.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Inflictions↓": ["x0.92", "x0.9", "x0.88", "x0.86", "x0.82", "x0.8", "x0.78", "x0.76", "x0.74", "x0.7"],
            }
        },
    },
},
"Harbinger":{
    "Basic Skills":{
        "Scythe Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt if a Scythe is equipped.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+8%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
        "Soul Gather":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temprarily increase enemy encounter rate and EXP gained from battle.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "10", "10", "10", "10", "10", "15"],
                "Encounters↑": ["x2", "x2", "x2", "x2", "x3.5", "x3.5", "x3.5", "x3.5", "x3.5", "x5"],
                "EXP↑": ["+20%", "+25%", "+30%", "+35%", "+55%", "+60%", "+65%", "+70%", "+75%", "+100%"],
                "Duration (Steps)": ["50", "60", "70", "80", "80", "100", "120", "140", "160", "160"],
            }
        },
        "Miasma Armor":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "Spend current HP to enter the Miasma Armor state for 3 turns, which increases action speed.",
            "Starter": "1",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "3"],
                "HP Cost": ["40%", "35%", "30%", "25%", "5%"],
                "Speed↑": ["x1.2", "x1.4", "x1.6", "x1.8", "x2.5"],
                "Action Speed": ["30%", "30%", "30%", "30%", "30%"],
            }
        },
        "Auto-Miasma":{
            "Usage": "Passive",
            "Unlock": "Miasma Armor (Lv 2)",
            "Description": "Chance to automatically cast Miasma Armor at the start of battle.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["30%", "34%", "38%", "42%", "60%", "65%", "70%", "75%", "80%", "100%"],
            }
        },
        "Endless Shroud":{
            "Usage": "Passive",
            "Unlock": "Miasma Armor (Lv 2)",
            "Description": "When you use a debuff skill, there's a chance to activate/extend Miasma Armor.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["15%", "18%", "21%", "24%", "34%", "38%", "42%", "46%", "50%", "67%"],
            }
        },
        "Judgement":{
            "Usage": "Passive (LUC)",
            "Unlock": "Miasma Armor (Lv 2)",
            "Description": "If you're hit while Miasma Armor is active, there's a chance to inflict Sleep on the attacker.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["10%", "11%", "12%", "13%", "19%", "20%", "21%", "22%", "23%", "30%"],
                "Infliction Rate": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Stifling Miasma":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a debuff on all enemies for several turns, which decreases physical/elemental damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "11", "11", "11", "11", "11", "16"],
                "Damage Dealt↓": ["-10%", "-12%", "-14%", "-16%", "-16%", "-17%", "-18%", "-19%", "-20%", "-20%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
            }
        },
        "Wilting Miasma":{
            "Usage": "Active (Head)",
            "Unlock": "Stifling Miasma (Lv 3)",
            "Description": "Place a debuff on all enemies for several turns, which decreases bind/ailment resistance.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "11", "11", "11", "11", "11", "16"],
                "Inflictions↑": ["x1.25", "x1.28", "x1.31", "x1.34", "x1.34", "x1.38", "x1.42", "x1.46", "x1.5", "x1.5"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
            }
        },
        "Paralyzing Reap":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Scythe: Deal melee Cut damage to an enemy line. If Miasma Armor is active, has a chance to inflict Paralysis.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "16"],
                "Attack Power": ["150%", "156%", "162%", "168%", "205%", "212%", "219%", "226%", "233%", "280%"],
                "Infliction Rate": ["40%", "40%", "40%", "40%", "55%", "55%", "55%", "55%", "55%", "70%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Cursed Reap":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "N/A",
            "Description": "Scythe: Deal melee Cut damage to an enemy line. If Miasma Armor is active, has a chance to inflict Curse.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "16"],
                "Attack Power": ["150%", "156%", "162%", "168%", "205%", "212%", "219%", "226%", "233%", "280%"],
                "Infliction Rate": ["40%", "40%", "40%", "40%", "55%", "55%", "55%", "55%", "55%", "70%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
    },
    "Deathbringer":{
        "Black Blade":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "While Miasma Armor remains active, increase all damage dealt for each time you inflict an ailment. (Resets upon losing Miasma Armor)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+15%", "+17%", "+19%", "+21%", "+21%", "+24%", "+27%", "+30%", "+33%", "+33%"],
                "Max. Stacks": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3"],
            }
        },
        "Black Shroud":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "While Miasma Armor remains active, decrease all damage taken for each time you inflict an ailment. (Resets upon losing Miasma Armor)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Damage Taken↓": ["-7%", "-8%", "-9%", "-10%", "-10%", "-11%", "-12%", "-13%", "-14%", "-14%"],
                "Max. Stacks": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3"],
            }
        },
        "TP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max TP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max TP↑": ["+10%", "+11%", "+12%", "+13%", "+17%", "+19%", "+21%", "+23%", "+25%", "+30%"],
            }
        },
        "Status ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases bind/ailment infliction rates.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Inflictions↑": ["x1.05", "x1.06", "x1.07", "x1.08", "x1.12", "x1.13", "x1.14", "x1.15", "x1.16", "x1.2"],
            }
        },
        "Bloody Reap":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Judgement (Lv 3)",
            "Description": "Scythe: Only usable if Miasma Armor is active. Spend part of current HP to deal 2~4 hits of melee Cut damage to random enemies.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "12"],
                "HP Cost": ["20%", "20%", "20%", "20%", "40%", "40%", "40%", "40%", "40%", "60%"],
                "Attack Power": ["90%", "96%", "102%", "108%", "148%", "155%", "162%", "169%", "176%", "230%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Frigid Reap":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Judgement (Lv 3)",
            "Description": "Scythe: Deal melee Cut+Ice damage to an enemy line. If any target has an ailment, perform a second hit that deals double damage.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["13", "13", "13", "13", "20", "20", "20", "20", "20", "30"],
                "Attack Power": ["150%", "156%", "162%", "168%", "205%", "212%", "219%", "226%", "233%", "280%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Temporal Shroud":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Bloody/Frigid Reap (Lv 3)",
            "Description": "Scythe: Dispel Miasma Armor to vanish while leaving a substitute in your place for this turn. At the end of turn, if the substitute is still alive, deal melee Cut damage to one enemy.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "30", "30", "30", "30", "30", "40"],
                "Attack Power": ["500%", "520%", "540%", "560%", "700%", "725%", "750%", "775%", "800%", "1000%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["30%", "32%", "34%", "36%", "50%", "55%", "60%", "65%", "70%", "200%"],
            }
        },
        "Toxic Reap":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Cursed Reap (Lv 3)",
            "Description": "Scythe: Deal melee Cut damage to an enemy line. If Miasma Armor is active, has a chance to inflict Poison.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20"],
                "Attack Power": ["150%", "156%", "162%", "168%", "205%", "212%", "219%", "226%", "233%", "280%"],
                "Infliction Rate": ["40%", "40%", "40%", "40%", "55%", "55%", "55%", "55%", "55%", "70%"],
                "Poison Power": ["150", "180", "210", "240", "240", "290", "340", "390", "440", "440"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Chaos Reap":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Cursed Reap (Lv 3)",
            "Description": "Scythe: Deal melee Cut damage to an enemy line. If Miasma Armor is active, has a chance to inflict Panic.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "24"],
                "Attack Power": ["150%", "156%", "162%", "168%", "205%", "212%", "219%", "226%", "233%", "280%"],
                "Infliction Rate": ["30%", "30%", "30%", "30%", "40%", "40%", "40%", "40%", "40%", "50%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Fatal Reap":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Toxic/Chaos Reap (Lv 3)",
            "Description": "Scythe: Deal melee Cut damage to one enemy, with a chance to inflict Instant Death. Increased damage and infliction rate if the target is afflicted with Sleep.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "18", "18", "18", "18", "18", "28"],
                "Attack Power": ["205%", "220%", "235%", "250%", "250%", "270%", "290%", "310%", "330%", "330%"],
                "Damage Bonus": ["x2.5", "x2.5", "x2.5", "x2.5", "x3.0", "x3.0", "x3.0", "x3.0", "x3.0", "x3.5"],
                "Infliction Rate\n(Normal)": ["25%", "28%", "31%", "34%", "34%", "38%", "42%", "46%", "50%", "50%"],
                "Infliction Rate\n(Sleep)": ["100%", "100%", "100%", "100%", "175%", "175%", "175%", "175%", "175%", "250%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%"],
            }
        },
    },
    "Deathguard":{
        "Spirit Absorb":{
            "Usage": "Passive (WIS)",
            "Unlock": "N/A",
            "Description": "Recover HP each time you inflict a debuff on one or more targets. Excess healing increases your Max HP until the end of turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Healing Power": ["50%", "55%", "60%", "65%", "90%", "96%", "102%", "108%", "114%", "150%"],
                "Max. Overheal": ["+15%", "+17%", "+19%", "+21%", "+27%", "+30%", "+33%", "+36%", "+39%", "+50%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max HP↑": ["+5%", "+6%", "+7%", "+8%", "+12%", "+13%", "+14%", "+15%", "+16%", "+20%"],
            }
        },
        "Magic DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decreases elemental damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Taken↓": ["-4%", "-5%", "-6%", "-7%", "-9%", "-10%", "-11%", "-12%", "-13%", "-15%"],
            }
        },
        "Death's Asylum":{
            "Usage": "Passive",
            "Unlock": "Endless Shroud (Lv 5)",
            "Description": "Chance to nullify debuffs and ailments received.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["10%", "11%", "12%", "13%", "17%", "18%", "19%", "20%", "21%", "25%"],
            }
        },
        "Atonement":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Death's Asylum (Lv 5)",
            "Description": "Dispel your Miasma Armor to restore HP to all allies, with a chance to remove ailments.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "14", "14", "14", "14", "14", "20"],
                "Healing Power": ["150%", "155%", "160%", "165%", "220%", "225%", "230%", "235%", "240%", "300%"],
                "Remove Chance": ["30%", "33%", "36%", "39%", "54%", "58%", "62%", "66%", "70%", "90%"],
                "Action Speed": ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
            }
        },
        "Miasma Wall":{
            "Usage": "Active (Head)",
            "Unlock": "Death's Asylum (Lv 5)",
            "Description": "Dispel your Miasma Armor for a chance to nullify bind/ailment inflictions to the party this turn.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "22", "22", "22", "22", "22", "35"],
                "Activation Chance": ["66%", "68%", "70%", "72%", "82%", "84%", "86%", "88%", "90%", "100%"],
                "Max. Activations": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
            }
        },
        "Eroding Miasma":{
            "Usage": "Active (Head)",
            "Unlock": "Wilting Miasma (Lv 3)",
            "Description": "Place a debuff on all enemies for several turns, which increases physical/elemental damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "11", "11", "11", "11", "11", "16"],
                "Damage Taken↑": ["+14%", "+17%", "+20%", "+23%", "+23%", "+26%", "+29%", "+32%", "+35%", "+35%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
            }
        },
        "Masking Miasma":{
            "Usage": "Active (Head)",
            "Unlock": "Wilting Miasma (Lv 3)",
            "Description": "Place a debuff on all enemies for several turns, which decreases accuracy.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "11", "11", "11", "11", "11", "16"],
                "Accuracy↓": ["-11%", "-12%", "-13%", "-14%", "-14%", "-15.5%", "-17%", "-18.5%", "-20%", "-20%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
            }
        },
        "Ephemeral Reap":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Eroding/Masking Miasma (Lv 5)",
            "Description": "Scythe: Dispel all debuffs on one enemy, then deal multiple hits of melee Cut damage to them. Amount of hits equal to amount of debuffs dispelled. Cannot miss.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["13", "13", "13", "13", "18", "18", "18", "18", "18", "24"],
                "Attack Power": ["350%", "370%", "390%", "410%", "490%", "515%", "540%", "565%", "590%", "700%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Soul Transfer":{
            "Usage": "Active (Head)",
            "Unlock": "Eroding/Masking Miasma (Lv 5)",
            "Description": "Dispel all debuffs on one enemy at the start of turn. If the target had at least 1 debuff, all allies will get a chance to automatically revive if killed this turn. (Max once per ally. Max 3 activations)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "21"],
                "Activation Chance": ["30%", "32%", "34%", "36%", "50%", "52%", "54%", "56%", "58%", "75%"],
                "HP Gain": ["1", "26", "51", "76", "175", "215", "255", "295", "335", "500"],
            }
        },
    },
},
"Warlock":{
    "Basic Skills":{
        "Magi Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases damage dealt with Magi skills.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+8%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
        "Quick-Chant":{
            "Usage": "Passive",
            "Unlock": "Magi Mastery (Lv 5)",
            "Description": "Chant skills cost more TP, but instead of charging for the next turn they let you choose an additional empowered action in the current one.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost↑": ["+15", "+13", "+11", "+9", "+5"],
            }
        },
        "Fireball":{
            "Usage": "Active (Head, INT)",
            "Unlock": "N/A",
            "Description": "(Magi) Deal ranged Fire damage to one enemy, with splash effect.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "18"],
                "Attack Power": ["105%", "110%", "115%", "120%", "141%", "148%", "155%", "162%", "169%", "210%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Icicle Lance":{
            "Usage": "Active (Head, INT)",
            "Unlock": "N/A",
            "Description": "(Magi) Deal ranged Ice damage to one enemy, with pierce effect.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "18"],
                "Attack Power": ["100%", "105%", "110%", "115%", "135%", "142%", "149%", "156%", "163%", "200%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Lightning":{
            "Usage": "Active (Head, INT)",
            "Unlock": "N/A",
            "Description": "(Magi) Deal ranged Volt damage to an enemy line.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "18"],
                "Attack Power": ["95%", "100%", "105%", "110%", "129%", "136%", "143%", "150%", "157%", "190%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["130%", "130%", "130%", "130%", "130%", "130%", "130%", "130%", "130%", "130%"],
            }
        },
        "Amplifier":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Place a buff on an ally line for several turns, which increases elemental damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Damage Dealt↑": ["+20%", "+23%", "+26%", "+29%", "+29%", "+33%", "+37%", "+41%", "+45%", "+45%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Magic Shield":{
            "Usage": "Active (Head)",
            "Unlock": "Amplifier (Lv 2)",
            "Description": "Protect the whole party for this turn, which decreases elemental damage taken.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "14", "14", "14", "14", "14", "20"],
                "Damage Taken↓": ["-34%", "-37%", "-40%", "-43%", "-53%", "-56%", "-59%", "-62%", "-65%", "-75%"],
                "Action Speed": ["500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%", "500%"],
            }
        },
        "Focus Chant":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(Chant) Enter a charge state until the end of next turn, which increases damage dealt with Magi skills but they become single-target attacks.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "10", "10", "10", "10", "10", "15"],
                "Damage Dealt↑": ["x1.65", "x1.68", "x1.71", "x1.74", "x1.98", "x2.0", "x2.02", "x2.04", "x2.06", "x2.25"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Levitation":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily nullify damaging tiles and gain an additional chance to ambush enemies.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "10"],
                "Ambush Chance": ["4%", "7%", "10%", "13%", "13%", "16%", "19%", "22%", "25%", "25%"],
                "Duration (Steps)": ["50", "50", "50", "50", "130", "130", "130", "130", "130", "250"],
            }
        },
        "Invisibility":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Temporarily decrease the enemy encounter rate.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "10"],
                "Encounters↓": ["x0.65", "x0.56", "x0.47", "x0.38", "x0.38", "x0.31", "x0.24", "x0.17", "x0.1", "x0.1"],
                "Duration (Steps)": ["80", "80", "80", "80", "160", "160", "160", "160", "160", "250"],
            }
        },
    },
    "Omnimancer":{
        "Reserve Magic":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "When using an attack skill, if you used a skill of a different damage type on the previous turn, add the previous skill's damage type and increase damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+8%", "+9%", "+10%", "+11%", "+16%", "+17%", "+18%", "+19%", "+20%", "+25%"],
            }
        },
        "TP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max TP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max TP↑": ["+10%", "+11%", "+12%", "+13%", "+17%", "+19%", "+21%", "+23%", "+25%", "+30%"],
            }
        },
        "Windstorm":{
            "Usage": "Active (Head, INT, LUC)",
            "Unlock": "Fireball (Lv 3), Icicle Lance (Lv 3), Lightning (Lv 3)",
            "Description": "(Magi) Deal ranged Cut damage to all enemies, with a chance to inflict Arm Bind.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["14", "14", "14", "14", "20", "20", "20", "20", "20", "27"],
                "Attack Power": ["90%", "95%", "100%", "105%", "125%", "131%", "137%", "143%", "149%", "180%"],
                "Infliction Rate": ["20%", "20%", "20%", "20%", "25%", "25%", "25%", "25%", "25%", "30%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Earthspike":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Fireball (Lv 3), Icicle Lance (Lv 3), Lightning (Lv 3)",
            "Description": "(Magi) Deal ranged Stab damage to all enemies. Places a debuff on the targets for 2 turns, which decreases elemental damage dealt.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["14", "14", "14", "14", "20", "20", "20", "20", "20", "27"],
                "Attack Power": ["90%", "95%", "100%", "105%", "125%", "131%", "137%", "143%", "149%", "180%"],
                "Damage Dealt↓": ["-12%", "-13%", "-14%", "-15%", "-18%", "-19%", "-20%", "-21%", "-22%", "-25%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Rockfall":{
            "Usage": "Active (Head, INT, LUC)",
            "Unlock": "Fireball (Lv 3), Icicle Lance (Lv 3), Lightning (Lv 3)",
            "Description": "(Magi) Deal ranged Bash damage to all enemies, with a chance to inflict Stun.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["14", "14", "14", "14", "20", "20", "20", "20", "20", "27"],
                "Attack Power": ["90%", "95%", "100%", "105%", "125%", "131%", "137%", "143%", "149%", "180%"],
                "Infliction Rate": ["20%", "20%", "20%", "20%", "25%", "25%", "25%", "25%", "25%", "30%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Altar":{
            "Usage": "Active (Head, INT, LUC)",
            "Unlock": "Windstorm (Lv 5), Earthspike (Lv 5), Rockfall (Lv 5)",
            "Description": "Prepare an attack that will hit in 3 more turns, at the start of the turn. Deals ranged Bash damage to one enemy, with a chance to inflict Petrify. Damage dealt increases for each time the target's weakness is hit while preparing, up to 20 stacks. (Not a Magi skill despite the in-game description. Cancelled if you become incapable of acting while preparing)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "30", "30", "30", "30", "30", "40"],
                "Attack Power": ["100%", "102%", "104%", "106%", "114%", "117%", "120%", "123%", "126%", "140%"],
                "Damage Bonus": ["+30%", "+31%", "+32%", "+33%", "+37%", "+38%", "+39%", "+40%", "+41%", "+45%"],
                "Infliction Rate": ["50%", "52%", "54%", "56%", "66%", "68%", "70%", "72%", "74%", "90%"],
                "Accuracy": ["+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%", "+100%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Anti-Magic":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Chance to nullify elemental damage against party members in your line.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["4%", "5%", "6%", "7%", "9%", "10%", "11%", "12%", "13%", "15%"],
            }
        },
        "Life Siphon":{
            "Usage": "Passive",
            "Unlock": "Anti-Magic (Lv 3)",
            "Description": "Fill your Union Gauge if you hit a weakness (max once per attack).",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "Union Gain": ["1%", "2%", "3%", "4%", "6%"],
            }
        },
        "Spread Chant":{
            "Usage": "Active (Head)",
            "Unlock": "Focus Chant (Lv 5)",
            "Description": "(Chant) Enter a charge state until the end of next turn, which decreases damage dealt with Magi skills but turns them into random-target multi-hit attacks (2~6 hits).",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "13", "11", "9", "20", "18", "16", "14", "12", "25"],
                "Damage Dealt↓": ["x0.5", "x0.5", "x0.5", "x0.5", "x0.6", "x0.6", "x0.6", "x0.6", "x0.6", "x0.75"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Magic DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decreases elemental damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Taken↓": ["-4%", "-5%", "-6%", "-7%", "-9%", "-10%", "-11%", "-12%", "-13%", "-15%"],
            }
        },
    },
    "Elemancer":{
        "Common Magic":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases damage dealt if any party member has already performed an INT-based attack this turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+20%", "+22%", "+24%", "+26%", "+34%", "+36%", "+38%", "+40%", "+42%", "+50%"],
            }
        },
        "Status DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increase resistance to bind/ailment inflictions.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Inflictions↓": ["x0.92", "x0.9", "x0.88", "x0.86", "x0.82", "x0.8", "x0.78", "x0.76", "x0.74", "x0.7"],
            }
        },
        "Explosion":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Fireball (Lv 5)",
            "Description": "(Magi) Deal ranged Fire damage to all enemies.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["24", "24", "24", "24", "30", "30", "30", "30", "30", "40"],
                "Attack Power": ["125%", "132%", "139%", "146%", "185%", "194%", "203%", "212%", "221%", "270%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Hailstorm":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Icicle Lance (Lv 5)",
            "Description": "(Magi) Deal ranged Ice damage to all enemies.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["24", "24", "24", "24", "30", "30", "30", "30", "30", "40"],
                "Attack Power": ["125%", "132%", "139%", "146%", "185%", "194%", "203%", "212%", "221%", "270%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Thunderbreak":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Lightning (Lv 5)",
            "Description": "(Magi) Deal ranged Volt damage to all enemies.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["24", "24", "24", "24", "30", "30", "30", "30", "30", "40"],
                "Attack Power": ["125%", "132%", "139%", "146%", "185%", "194%", "203%", "212%", "221%", "270%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Mana Flow":{
            "Usage": "Active (Head)",
            "Unlock": "Explosion (Lv 3), Hailstorm (Lv 3), Thunderbreak (Lv 3)",
            "Description": "Place a buff on yourself for several turns, which grants a percentage of the TP you spend each turn to a random ally.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "5"],
                "TP Gain": ["25%", "28%", "31%", "34%", "34%", "38%", "42%", "46%", "50%", "50%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Cutting Costs":{
            "Usage": "Passive",
            "Unlock": "Explosion (Lv 3), Hailstorm (Lv 3), Thunderbreak (Lv 3)",
            "Description": "Chance for skills to not spend TP when used.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["10%", "11%", "12%", "13%", "18%", "20%", "22%", "24%", "26%", "34%"],
            }
        },
        "Clever Strike":{
            "Usage": "Active (Arms, INT)",
            "Unlock": "Magic Shield (Lv 3)",
            "Description": "Deal melee weapon-based damage to one enemy.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "5", "5", "5", "5", "5", "10"],
                "Attack Power": ["110%", "115%", "120%", "125%", "250%", "260%", "270%", "280%", "290%", "450%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+10%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Abating Chant":{
            "Usage": "Active (Head)",
            "Unlock": "Focus Chant (Lv 5)",
            "Description": "(Chant) Enter a charge state until the end of next turn, which decreases damage dealt with Magi skills but also decreases their TP cost.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["1", "1", "1", "1", "3", "3", "3", "3", "3", "5"],
                "Damage Dealt↓": ["x0.6", "x0.61", "x0.62", "x0.63", "x0.73", "x0.74", "x0.75", "x0.76", "x0.77", "x0.9"],
                "TP Cost↓": ["-14", "-15", "-16", "-17", "-19", "-20", "-21", "-22", "-23", "-25"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Magic ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases elemental damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
            }
        },
    },
},
"Necromancer":{
    "Basic Skills":{
        "Wraith Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases damage dealt and infliction rate for all Wraith attacks.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["x1.1", "x1.15", "x1.2", "x1.25", "x1.45", "x1.52", "x1.59", "x1.66", "x1.73", "x2.0"],
                "Inflictions↑": ["x2.0", "x2.2", "x2.4", "x2.6", "x3.6", "x3.85", "x4.1", "x4.35", "x4.6", "x6.0"],
            }
        },
        "Summon Wraith":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Spend part of current HP to summon a Wraith, with a bonus to Max HP. (Can be used on the field)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "12"],
                "HP Cost": ["15%", "15%", "15%", "15%", "15%", "15%", "15%", "15%", "15%", "15%"],
                "Max HP↑": ["+5%", "+8%", "+11%", "+14%", "+39%", "+43%", "+47%", "+51%", "+55%", "+80%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Extra: Wraith's Normal Attack":{
            "Usage": "Active (STR, LUC)",
            "Description": "Deals melee Bash damage to one enemy, with a chance to inflict Paralysis. Wraiths only have a ~66% chance to act, increased to 100% during Wraith Dance. (<b>Warning</b>: Damage dealt is always reduced by melee backline penalty)",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["100%"],
                "Infliction Rate": ["1%"],
                "Accuracy": ["-5%"],
                "Action Speed": ["60%"],
            }
        },
        "Life Exchange":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Summon Wraith (Lv 2)",
            "Description": "Sacrifice a Wraith to restore HP to the whole party.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "18", "18", "18", "18", "18", "24"],
                "Healing Power": ["130%", "135%", "140%", "145%", "190%", "195%", "200%", "205%", "210%", "270%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Wraith Cry":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Sacrifice a Wraith to place a debuff on one enemy for several turns, which increases physical/elemental damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "15"],
                "Damage Taken↑": ["+14%", "+17%", "+20%", "+23%", "+23%", "+26%", "+29%", "+32%", "+35%", "+35%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Soul Candy":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Sacrifice a Wraith to place a buff on the whole party for several turns, which decreases elemental damage taken.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "15"],
                "Damage Taken↓": ["-20%", "-22%", "-24%", "-26%", "-26%", "-28%", "-30%", "-32%", "-34%", "-34%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Fierce Shield":{
            "Usage": "Active (Head)",
            "Unlock": "Wraith Cry (Lv 2), Soul Candy (Lv 2)",
            "Description": "Command a Wraith to take attacks in place of the party for this turn. Target Wraith takes modified damage from redirected attacks.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8"],
                "Damage Mod.": ["x1.5", "x1.45", "x1.4", "x1.35", "x1.0", "x0.97", "x0.94", "x0.91", "x0.88", "x0.75"],
            }
        },
        "Gravekeeping":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "At the end of each turn, if you took no damage, there's a chance to summon a Wraith.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["10%", "11%", "12%", "13%", "17%", "18%", "19%", "20%", "21%", "25%"],
            }
        },
        "Reincarnation":{
            "Usage": "Passive",
            "Unlock": "Gravekeeping (Lv 3)",
            "Description": "When you use a skill that sacrifices a Wraith, there's a chance to summon a new Wraith.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["15%", "16%", "17%", "18%", "23%", "24%", "25%", "26%", "27%", "33%"],
            }
        },
        "Poison Bomb":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "N/A",
            "Description": "Sacrifice a Wraith to attempt to inflict Poison on all enemies.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "12", "12", "12", "12", "12", "20"],
                "Infliction Rate": ["60%", "60%", "60%", "60%", "75%", "75%", "75%", "75%", "75%", "95%"],
                "Poison Power": ["60", "75", "90", "105", "145", "180", "215", "250", "285", "360"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Flame Bomb":{
            "Usage": "Active (Head, INT)",
            "Unlock": "N/A",
            "Description": "Sacrifice a Wraith to deal ranged Fire damage to all enemies.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "22", "22", "22", "22", "22", "30"],
                "Attack Power": ["120%", "127%", "134%", "141%", "181%", "191%", "201%", "211%", "221%", "280%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
    },
    "Spirit Evoker":{
        "Necromancy":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Chance to summon a Wraith when an ally or enemy dies.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["15%", "16%", "17%", "18%", "27%", "28%", "29%", "30%", "31%", "40%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max HP↑": ["+5%", "+6%", "+7%", "+8%", "+12%", "+13%", "+14%", "+15%", "+16%", "+20%"],
            }
        },
        "Burden Shift":{
            "Usage": "Passive",
            "Unlock": "Life Exchange (Lv 5)",
            "Description": "When you take lethal damage, there's a chance to sacrifice a Wraith to survive and recover HP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["20%", "22%", "24%", "26%", "34%", "36%", "38%", "40%", "42%", "50%"],
                "HP Gain": ["1", "11", "21", "31", "91", "101", "111", "121", "131", "200"],
            }
        },
        "Soul Trade":{
            "Usage": "Active (Head)",
            "Unlock": "Burden Shift (Lv 5)",
            "Description": "Sacrifice a Wraith for a chance to revive all dead allies.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "25", "25", "25", "25", "25", "30"],
                "Revive Chance": ["50%", "51%", "52%", "53%", "62%", "63%", "64%", "65%", "66%", "75%"],
                "HP Gain": ["1", "11", "21", "31", "90", "100", "110", "120", "130", "200"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Grave":{
            "Usage": "Active (Head)",
            "Unlock": "Fierce Shield (Lv 3)",
            "Description": "Target one ally, and each time they're hit this turn all Wraiths will counterattack, dealing Bash damage with a chance to inflict Paralysis to the attacker. Counter chance starts at 100% and goes down by 9% with each activation. (<b>Warning</b>: Damage dealt is always reduced by melee backline penalty)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "14"],
                "Attack Power": ["300%", "310%", "320%", "330%", "410%", "425%", "440%", "455%", "470%", "600%"],
                "Infliction Rate": ["30%", "32%", "34%", "36%", "42%", "44%", "46%", "48%", "50%", "60%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%"],
            }
        },
        "Wraith Dance":{
            "Usage": "Active (Head)",
            "Unlock": "Grave (Lv 5)",
            "Description": "For this turn, Wraith attacks will deal 3 hits with modified damage. (Also gives Wraiths a 100% chance to use a normal attack)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["13", "13", "13", "13", "19", "19", "19", "19", "19", "24"],
                "Damage Mod.": ["x0.6", "x0.63", "x0.66", "x0.69", "x0.84", "x0.88", "x0.92", "x0.96", "x1.0", "x1.2"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Status ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases bind/ailment infliction rates.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Inflictions↑": ["x1.05", "x1.06", "x1.07", "x1.08", "x1.12", "x1.13", "x1.14", "x1.15", "x1.16", "x1.2"],
            }
        },
        "Curse Bomb":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Poison Bomb (Lv 3)",
            "Description": "Sacrifice a Wraith to attempt to inflict Curse on all enemies.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "12", "12", "12", "12", "12", "20"],
                "Infliction Rate": ["65%", "67%", "69%", "71%", "80%", "82%", "84%", "86%", "88%", "100%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Ice Bomb":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Flame Bomb (Lv 3)",
            "Description": "Sacrifice a Wraith to deal ranged Ice damage to all enemies.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "22", "22", "22", "22", "22", "30"],
                "Attack Power": ["120%", "127%", "134%", "141%", "181%", "191%", "201%", "211%", "221%", "280%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Tombstone Vice":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Curse Bomb (Lv 3), Ice Bomb (Lv 3)",
            "Description": "Sacrifice all Wraiths to attempt to inflict Petrify on one enemy. Infliction rate increases for each Wraith sacrificed.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "12"],
                "Base Infliction Rate": ["25%", "26%", "27%", "28%", "36%", "38%", "40%", "42%", "44%", "60%"],
                "Bonus Per Wraith": ["+15%", "+16%", "+17%", "+18%", "+30%", "+32%", "+34%", "+36%", "+38%", "+50%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
    },
    "Spirit Broker":{
        "Hell's Lure":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "At the end of each turn, there's a chance to summon a Wraith if your HP is below a certain threshold.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "HP Threshold": ["5%", "6%", "7%", "8%", "17%", "18%", "19%", "20%", "21%", "30%"],
                "Activation Chance": ["50%", "53%", "56%", "59%", "73%", "76%", "79%", "82%", "85%", "100%"],
            }
        },
        "TP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max TP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max TP↑": ["+10%", "+11%", "+12%", "+13%", "+17%", "+19%", "+21%", "+23%", "+25%", "+30%"],
            }
        },
        "Auto-Wraith":{
            "Usage": "Passive",
            "Unlock": "Life Exchange (Lv 3)",
            "Description": "Chance to automatically summon a Wraith at the start of battle.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["30%", "33%", "36%", "39%", "59%", "63%", "67%", "71%", "75%", "100%"],
            }
        },
        "Fair Trade":{
            "Usage": "Active (Head)",
            "Unlock": "Fierce Shield (Lv 3)",
            "Description": "Sacrifice one Wraith to deal damage to one enemy. Damage is equal to a percentage of that Wraith's remaining HP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "5", "5", "5", "5", "5", "9"],
                "HP as Damage": ["50%", "52%", "54%", "56%", "68%", "71%", "74%", "77%", "80%", "100%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Wraith Explosion":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Fair Trade (Lv 5)",
            "Description": "Sacrifice all Wraiths to deal ranged Bash+Fire damage to all enemies. Damage dealt increases for each Wraith that was sacrificed.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "30", "30", "30", "30", "30", "45"],
                "Attack Power": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
                "Damage Bonus": ["+100%", "+103%", "+106%", "+109%", "+139%", "+143%", "+147%", "+151%", "+155%", "+200%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Sacrifice":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Sacrifice a Wraith to enter a charge state until the end of next turn, which increases damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "10", "10", "10", "10", "10", "25"],
                "Damage Dealt↑": ["x1.5", "x1.55", "x1.6", "x1.65", "x1.8", "x1.85", "x1.9", "x1.95", "x2.0", "x2.5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Negative Energy":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Sacrifice (Lv 3)",
            "Description": "Deal ranged Almighty damage to one enemy. Damage dealt increases by 150% for each time a unit has died (including sacrifices) this turn. Cannot miss.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "12"],
                "Attack Power": ["100%", "104%", "108%", "112%", "144%", "149%", "154%", "159%", "164%", "200%"],
                "Action Speed": ["-100%", "-100%", "-100%", "-100%", "-100%", "-100%", "-100%", "-100%", "-100%", "-100%"],
            }
        },
        "Magic ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases elemental damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
            }
        },
        "Gates of Hell":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Fair Trade (Lv 5)",
            "Description": "Deal ranged Bash damage to one enemy, then summon a Wraith with Max HP equal to the damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["16", "16", "16", "16", "24", "24", "24", "24", "24", "34"],
                "Attack Power": ["140%", "146%", "152%", "158%", "202%", "209%", "216%", "223%", "230%", "280%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Zombie Powder":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Fair Trade (Lv 5)",
            "Description": "Attempt to inflict Instant Death to one enemy. If successful, summon a Wraith with Max HP equal to the target's remaining HP. (Max HP is capped at 9999)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "14", "14", "14", "14", "14", "19"],
                "Infliction Rate": ["40%", "42%", "44%", "46%", "59%", "61%", "63%", "65%", "67%", "80%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
    },
},
"Rover":{
    "Basic Skills":{
        "Bow Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt if a Bow is equipped.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
            }
        },
        "Animal Therapy":{
            "Usage": "Passive (WIS)",
            "Unlock": "N/A",
            "Description": "If there's a Hawk or Hound in the battle, restore HP to the whole party at the end of each turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Healing Power": ["1%", "3%", "5%", "7%", "15%", "17%", "19%", "21%", "23%", "35%"],
            }
        },
        "Hawk Whistle":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Summon a Hawk, with a bonus to its stats. (Can be used on the field)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["25", "25", "25", "25", "45", "45", "45", "45", "45", "75"],
                "Stats↑": ["x1.0", "x1.03", "x1.06", "x1.09", "x1.19", "x1.23", "x1.27", "x1.31", "x1.35", "x1.5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Extra: Hawk's Normal Attack":{
            "Usage": "Active (STR, LUC)",
            "Description": "Only used if Hawk is not commanded. Deals ranged Cut damage to one enemy, with a chance to inflict Head Bind.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["60%"],
                "Infliction Rate": ["7%"],
                "Accuracy": ["-1%"],
                "Action Speed": ["60%"],
            }
        },
        "Hawk Arrow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Hawk Whistle (Lv 3)",
            "Description": "Bow+Hawk: Deal ranged Stab damage to one enemy, then the Hawk will deal ranged Cut damage to its adjacent enemies.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "9", "9", "9", "9", "9", "12"],
                "Attack Power\n(Bow)": ["100%", "103%", "106%", "109%", "119%", "123%", "127%", "131%", "135%", "150%"],
                "Attack Power\n(Hawk)": ["200%", "207%", "214%", "221%", "250%", "260%", "270%", "280%", "290%", "330%"],
                "Accuracy\n(Bow)": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Accuracy\n(Hawk)": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Wing Thrash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Hawk Whistle (Lv 3)",
            "Description": "Bow+Hawk: Deal ranged Stab damage to one enemy at the start of turn, then the Hawk will deal ranged Cut damage to its line.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "13", "13", "13", "13", "13", "18"],
                "Attack Power\n(Bow)": ["80%", "82%", "84%", "86%", "95%", "98%", "101%", "104%", "107%", "120%"],
                "Attack Power\n(Hawk)": ["120%", "124%", "128%", "132%", "154%", "160%", "166%", "172%", "178%", "210%"],
                "Accuracy\n(Bow)": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Accuracy\n(Hawk)": ["-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%", "-1%"],
            }
        },
        "Hound Whistle":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Summon a Hound, with a bonus to its stats. (Can be used on the field)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["25", "25", "25", "25", "45", "45", "45", "45", "45", "75"],
                "Stats↑": ["x1.0", "x1.03", "x1.06", "x1.09", "x1.19", "x1.23", "x1.27", "x1.31", "x1.35", "x1.5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Extra: Hound's Lick Wounds":{
            "Usage": "Active",
            "Description": "Only used if Hound is not commanded and Target Arrow is not active. Restores HP to the ally with the most missing HP.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "HP Gain": ["5+15%"],
                "Action Speed": ["50%"],
            }
        },
        "Extra: Hound's Normal Attack":{
            "Usage": "Active (STR, LUC)",
            "Description": "Only used if Hound is not commanded and Target Arrow is active. Deals melee Bash damage to one enemy, with a chance to inflict Leg Bind. (<b>Warning</b>: Damage dealt is always reduced by melee backline penalty)",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["100%"],
                "Infliction Rate": ["8%"],
                "Accuracy": ["-1%"],
                "Action Speed": ["100%"],
            }
        },
        "Aid Command":{
            "Usage": "Active (Head)",
            "Unlock": "Hound Whistle (Lv 3)",
            "Description": "Hound: Command the Hound to restore HP and remove ailments for one ally.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "10", "10", "10", "10", "10", "14"],
                "HP Gain": ["30+20%", "36+21%", "42+22%", "48+23%", "78+26%", "86+27%", "94+28%", "102+29%", "110+30%", "150+34%"],
                "Action Speed": ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
            }
        },
        "Hunter Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Hound Whistle (Lv 3)",
            "Description": "Bow+Hound: Deal ranged Stab damage to one enemy, then the Hound will attempt to inflict Arm Bind and Leg Bind on it.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Attack Power": ["150%", "158%", "166%", "174%", "174%", "183%", "192%", "201%", "210%", "210%"],
                "Infliction Rate": ["30%", "30%", "30%", "30%", "40%", "40%", "40%", "40%", "40%", "50%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Brushing":{
            "Usage": "Passive (WIS)",
            "Unlock": "N/A",
            "Description": "Restore HP to the Hawk/Hound at the end of each turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Healing Power": ["20%", "25%", "30%", "35%", "53%", "59%", "65%", "71%", "77%", "100%"],
            }
        },
        "Target Arrow":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Bow: Deal ranged Stab damage to one enemy. Places a debuff on the target for several turns, which increases physical damage taken. Hawk/Hound/Wraith's normal attacks will prioritize enemies with this debuff.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "10"],
                "Attack Power": ["118%", "125%", "132%", "139%", "139%", "148%", "157%", "166%", "175%", "175%"],
                "Damage Taken↑": ["+10%", "+10%", "+10%", "+10%", "+20%", "+20%", "+20%", "+20%", "+20%", "+30%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
    },
    "Flying Falcon":{
        "Sky Patrol":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "If the Hawk is summoned, there's a chance to receive ingredients as you walk.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
        "Finishing Shot":{
            "Usage": "Active (STR)",
            "Unlock": "N/A",
            "Description": "After attacking an enemy, if their HP is below a certain threshold, perform a weapon-based follow up attack.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "HP Threshold": ["10%", "11%", "12%", "13%", "19%", "20%", "21%", "22%", "23%", "30%"],
                "Attack Power": ["100%", "103%", "106%", "109%", "119%", "123%", "127%", "131%", "135%", "150%"],
            }
        },
        "Aerial Talons":{
            "Usage": "Active (Head)",
            "Unlock": "Hawk Arrow (Lv 3)",
            "Description": "Hawk: Command the Hawk to deal ranged Cut damage to one enemy, with a chance to inflict Head Bind.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "17"],
                "Attack Power": ["200%", "209%", "218%", "227%", "282%", "294%", "306%", "318%", "330%", "400%"],
                "Infliction Rate": ["25%", "26%", "27%", "28%", "37%", "38%", "39%", "40%", "41%", "50%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Ice Peck":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Wing Thrash (Lv 3)",
            "Description": "Bow+Hawk: Deal ranged Stab damage to all enemies, then the Hawk will deal ranged Ice damage to all enemies.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "17", "17", "17", "17", "17", "24"],
                "Attack Power\n(Bow)": ["50%", "53%", "56%", "59%", "70%", "74%", "78%", "82%", "86%", "100%"],
                "Attack Power\n(Hawk)": ["120%", "124%", "128%", "132%", "150%", "155%", "160%", "165%", "170%", "200%"],
                "Accuracy\n(Bow)": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
                "Accuracy\n(Hawk)": ["-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Sky Dive":{
            "Usage": "Active (Head)",
            "Unlock": "Aerial Talons (Lv 5), Ice Peck (Lv 5)",
            "Description": "Hawk: Command the Hawk to leave the battle, then return to attack in 3 more turns, at the start of the turn. Deals ranged Cut damage to one enemy, with a chance to inflict Head Bind. (If the battle ends or the user dies while preparing, the Hawk does not return)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["16", "16", "16", "16", "23", "23", "23", "23", "23", "32"],
                "Attack Power": ["650%", "680%", "710%", "740%", "870%", "920%", "970%", "1020%", "1070%", "1300%"],
                "Infliction Rate": ["65%", "68%", "71%", "74%", "84%", "88%", "92%", "96%", "100%", "120%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
            }
        },
        "Speed Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases accuracy, evasion and action speed.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Accuracy↑": ["+2.4%", "+2.8%", "+3.2%", "+3.6%", "+5.2%", "+5.8%", "+6.4%", "+7%", "+7.6%", "+10%"],
                "Evasion↑": ["+2.4%", "+2.8%", "+3.2%", "+3.6%", "+5.2%", "+5.8%", "+6.4%", "+7%", "+7.6%", "+10%"],
                "Speed↑": ["+11%", "+14%", "+17%", "+20%", "+24%", "+27%", "+30%", "+33%", "+36%", "+40%"],
            }
        },
        "Power Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Target Arrow (Lv 5)",
            "Description": "Bow: Deal ranged Stab damage to one enemy, with pierce effect.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "15", "15", "15", "15", "15", "21"],
                "Attack Power": ["200%", "205%", "210%", "215%", "250%", "260%", "270%", "280%", "290%", "340%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
        "Million Arrows":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Power Shot (Lv 5)",
            "Description": "Bow: Prepare an attack that will hit on the next turn, at the start of the turn. Deals multiple hits of ranged Stab damage to random enemies (max 4 hits each).",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["13", "13", "13", "13", "19", "19", "19", "19", "19", "27"],
                "Attack Power": ["100%", "112%", "124%", "136%", "136%", "152%", "168%", "184%", "200%", "200%"],
                "Hits": ["4~16", "4~16", "4~16", "4~16", "6~16", "6~16", "6~16", "6~16", "6~16", "8~16"],
                "Accuracy": ["-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Feather Storm":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Hawk: Command the Hawk to attempt to inflict Blind on an enemy line.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "9"],
                "Infliction Rate": ["40%", "41%", "42%", "43%", "50%", "52%", "54%", "56%", "58%", "70%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
            }
        },
    },
    "Hunting Hound":{
        "Ground Patrol":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "If the Hound is summoned, there's a chance to receive materials as you walk.",
            "Starter": "1",
            "Max Level": "0",
            "Data": ""
        },
        "Healing Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases the effect of the Hound's healing actions.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Bonus Healing": ["6+2%", "9+2%", "12+2%", "15+2%", "19+4%", "22+4%", "25+4%", "28+4%", "31+4%", "35+7%"],
            }
        },
        "Status ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases bind/ailment infliction rates. (Also applies to your summons)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Inflictions↑": ["x1.05", "x1.06", "x1.07", "x1.08", "x1.12", "x1.13", "x1.14", "x1.15", "x1.16", "x1.2"],
            }
        },
        "TP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max TP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max TP↑": ["+10%", "+11%", "+12%", "+13%", "+17%", "+19%", "+21%", "+23%", "+25%", "+30%"],
            }
        },
        "Menacing Howl":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "Hound: Command the Hound to attempt to inflict Panic on an enemy line.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "9", "9", "9", "9", "9", "13"],
                "Infliction Rate": ["25%", "26%", "27%", "28%", "32%", "33%", "34%", "35%", "36%", "40%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Guard Command":{
            "Usage": "Active (Head)",
            "Unlock": "Aid Command (Lv 3)",
            "Description": "Hound: Command the Hound to take attacks in place of one ally for this turn, then at the end of turn restore HP to that ally. Hound takes increased damage from redirected attacks.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "10"],
                "Damage Mod.": ["x1.5", "x1.46", "x1.42", "x1.38", "x1.25", "x1.22", "x1.19", "x1.16", "x1.13", "x1.0"],
                "HP Gain": ["45+14%", "45+15%", "45+16%", "45+17%", "60+19%", "60+20%", "60+21%", "60+22%", "60+23%", "80+25%"],
            }
        },
        "Foot Pierce":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Hunter Shot (Lv 3)",
            "Description": "Bow+Hound: Deal ranged Stab damage to an enemy line, with a chance to inflict Leg Bind. Afterward, the Hound will deal ranged Bash damage to targets with Leg Bind.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20"],
                "Attack Power\n(Bow)": ["100%", "106%", "112%", "118%", "118%", "126%", "134%", "142%", "150%", "150%"],
                "Infliction Rate": ["25%", "25%", "25%", "25%", "35%", "35%", "35%", "35%", "35%", "50%"],
                "Attack Power\n(Hound)": ["300%", "340%", "380%", "420%", "420%", "465%", "510%", "555%", "600%", "600%"],
                "Accuracy\n(Bow)": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Medicinal Lick":{
            "Usage": "Active (Head)",
            "Unlock": "Guard Command (Lv 5), Foot Pierce (Lv 5)",
            "Description": "Hound: Command the Hound to restore HP multiple times to random allies (max 2 times each). (Only usable in battle)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "17", "17", "17", "17", "17", "25"],
                "Heal Times": ["5", "5", "5", "5", "7", "7", "7", "7", "7", "9"],
                "HP Gain": ["45+9%", "48+10%", "51+11%", "54+12%", "54+12%", "58+14%", "62+16%", "66+18%", "70+20%", "70+20%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Arc Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Target Arrow (Lv 5)",
            "Description": "Bow: Deal ranged Stab damage to one enemy. Deals 150% more damage against enemies in the back line.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "18"],
                "Attack Power": ["160%", "165%", "170%", "175%", "215%", "220%", "225%", "230%", "235%", "280%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Stun Shot":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Arc Shot (Lv 5)",
            "Description": "Bow+Hound: Deal ranged Stab damage to one enemy, then the Hound will attempt to inflict Stun on it.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "13", "13", "13", "13", "13", "18"],
                "Attack Power": ["200%", "220%", "240%", "260%", "260%", "285%", "310%", "335%", "360%", "360%"],
                "Infliction Rate": ["35%", "35%", "35%", "35%", "50%", "50%", "50%", "50%", "50%", "65%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
    },
},
"Masurao":{
    "Basic Skills":{
        "Katana Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt if a Katana is equipped.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+2%", "+3%", "+4%", "+5%", "+8%", "+9%", "+10%", "+11%", "+12%", "+15%"],
            }
        },
        "Peerless Demon":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases damage dealt with a multi-hit attack for each hit it has landed this turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+5%", "+5%", "+5%", "+5%", "+7%", "+7%", "+7%", "+7%", "+7%", "+9%"],
                "Max. Stacks": ["2", "3", "4", "5", "5", "6", "7", "8", "9", "9"],
            }
        },
        "Duel":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases damage dealt when attacking enemies that you also attacked on the previous turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+10%", "+11%", "+12%", "+13%", "+17%", "+18%", "+19%", "+20%", "+21%", "+25%"],
            }
        },
        "Swallow Soar":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Duel (Lv 3)",
            "Description": "Katana: Deal melee Cut damage to one enemy at the start of the turn. After the target acts, perform a second hit.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "17"],
                "Attack Power": ["100%", "103%", "106%", "109%", "124%", "128%", "132%", "136%", "140%", "160%"],
                "Accuracy": ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"],
            }
        },
        "Armor Pierce":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Katana: Deal melee Stab damage to one enemy. Places a debuff on the target for 3 turns, which increases physical damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "13"],
                "Attack Power": ["122%", "132%", "142%", "152%", "152%", "164%", "176%", "188%", "200%", "200%"],
                "Damage Taken↑": ["+15%", "+15%", "+15%", "+15%", "+25%", "+25%", "+25%", "+25%", "+25%", "+40%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Haze Slash":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Armor Pierce (Lv 2)",
            "Description": "Katana: Deal melee Cut damage to one enemy, with a chance to inflict Sleep.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "15"],
                "Attack Power": ["160%", "170%", "180%", "190%", "190%", "205%", "220%", "235%", "250%", "250%"],
                "Infliction Rate": ["40%", "40%", "40%", "40%", "60%", "60%", "60%", "60%", "60%", "90%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "70%", "70%", "70%", "70%", "70%", "10%"],
            }
        },
        "Air Blade":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "N/A",
            "Description": "Katana: Deal ranged Cut damage to one enemy.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "6", "6", "6", "6", "6", "9"],
                "Attack Power": ["130%", "136%", "142%", "148%", "178%", "186%", "194%", "202%", "210%", "260%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Whirlwind":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Air Blade (Lv 3)",
            "Description": "Katana: Deal multiple hits of melee Cut damage to random enemies (max once each).",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "14", "14", "14", "14", "14", "20"],
                "Attack Power": ["100%", "104%", "108%", "112%", "136%", "141%", "146%", "151%", "156%", "180%"],
                "Hits": ["2~4", "2~4", "2~4", "2~4", "2~5", "2~5", "2~5", "2~5", "2~5", "3~6"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%", "85%"],
            }
        },
        "New Challenger":{
            "Usage": "Active (Field)",
            "Unlock": "N/A",
            "Description": "Start multiple enemy encounters in a row, with an increased chance of Rare Breeds appearing.",
            "Starter": "1",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "5"],
                "Min. Battles": ["1", "1", "1", "1", "3"],
                "Max. Battles": ["3", "4", "5", "6", "10"],
                "Rare Chance↑": ["+1%", "+2%", "+3%", "+4%", "+10%"],
            }
        },
        "High Ground":{
            "Usage": "Active (Legs)",
            "Unlock": "N/A",
            "Description": "Place a buff on your line for several turns, which increases physical damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "9", "9", "9", "9", "9", "13"],
                "Damage Dealt↑": ["+19%", "+22%", "+25%", "+28%", "+28%", "+31%", "+34%", "+37%", "+40%", "+40%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            }
        },
    },
    "Blade Dancer":{
        "Multi-Katana":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Allows you to equip weapons in armor slots. If you have multiple weapons equipped, normal attacks have a chance to hit once per weapon, with decreased power on subsequent hits: 80% power on the second hit, 65% on the third, and 50% on the fourth. (All multi-hit attacks will rotate through your equipped weapons on each hit)",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["15%", "17%", "19%", "21%", "28%", "31%", "34%", "37%", "40%", "50%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max HP↑": ["+5%", "+6%", "+7%", "+8%", "+12%", "+13%", "+14%", "+15%", "+16%", "+20%"],
            }
        },
        "Reincarnation":{
            "Usage": "Passive",
            "Unlock": "HP Up (Lv 3)",
            "Description": "Chance to automatically revive (with 1 HP) at the end of a turn where you died.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["10%", "11%", "12%", "13%", "17%", "18%", "19%", "20%", "21%", "25%"],
            }
        },
        "Hell Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Swallow Soar (Lv 3)",
            "Description": "Katana: Prepare to follow up after all attacks performed by allies or enemies this turn. Maximum amount of follow ups is multiplied by your number of equipped Katana.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "12", "12", "12", "12", "12", "35"],
                "Attack Power\n(To Enemies)": ["100%", "105%", "110%", "115%", "138%", "145%", "152%", "159%", "166%", "200%"],
                "Attack Power\n(To Allies)": ["300%", "270%", "240%", "210%", "100%", "93%", "86%", "79%", "72%", "34%"],
                "Max. Per Katana": ["1", "1", "1", "1", "2", "2", "2", "2", "2", "3"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["1000%", "1000%", "1000%", "1000%", "1000%", "1000%", "1000%", "1000%", "1000%", "1000%"],
            }
        },
        "Reblossom":{
            "Usage": "Passive",
            "Unlock": "Hell Slash (Lv 3)",
            "Description": "Chance to perform Katana skills a second time. Chance is multiplied by your number of equipped Katana minus one.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["15%", "16%", "17%", "18%", "24%", "25%", "26%", "27%", "28%", "34%"],
            }
        },
        "Sacred Tetrad":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Whirlwind (Lv 3)",
            "Description": "Katana: Deal multiple hits of melee Cut damage to one enemy. Hits once per equipped Katana.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "10"],
                "Attack Power": ["60%", "61%", "62%", "63%", "73%", "74%", "75%", "76%", "77%", "90%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Layered Bloom":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Whirlwind (Lv 3)",
            "Description": "Katana: Deal 2~8 hits of melee Cut damage to random enemies in a line. Deals 25% more damage per equipped Katana.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "14", "14", "14", "14", "14", "21"],
                "Attack Power": ["30%", "31%", "32%", "33%", "39%", "40%", "41%", "42%", "43%", "50%"],
                "Accuracy": ["-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%", "-4%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Vast Flourish":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Sacred Tetrad (Lv 3), Layered Bloom (Lv 3)",
            "Description": "Katana: Deal multiple hits of melee Cut damage to random enemies. Hits equal to number of enemies times number of equipped Katana.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["14", "14", "14", "14", "21", "21", "21", "21", "21", "30"],
                "Attack Power": ["25%", "26%", "27%", "28%", "31%", "32%", "33%", "34%", "35%", "40%"],
                "Accuracy": ["-8%", "-8%", "-8%", "-8%", "-8%", "-8%", "-8%", "-8%", "-8%", "-8%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Phys ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases physical damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
            }
        },
        "Meteor Rain":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Phys ATK Up (Lv 3)",
            "Description": "Katana: Deal multiple melee hits of a random damage type each to random enemies. Hits once per equipped Katana.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "11", "11", "11", "11", "11", "16"],
                "Attack Power": ["80%", "82%", "84%", "86%", "95%", "98%", "101%", "104%", "107%", "120%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
    },
    "Blade Master":{
        "Sword God":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases Critical Hit chance and damage. Allows Katana skills to perform Critical Hits.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Crit Rate↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"],
                "Crit Damage↑": ["x1.15", "x1.16", "x1.17", "x1.18", "x1.24", "x1.25", "x1.26", "x1.27", "x1.28", "x1.35"],
            }
        },
        "Speed Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases accuracy, evasion and action speed.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Accuracy↑": ["+2.4%", "+2.8%", "+3.2%", "+3.6%", "+5.2%", "+5.8%", "+6.4%", "+7%", "+7.6%", "+10%"],
                "Evasion↑": ["+2.4%", "+2.8%", "+3.2%", "+3.6%", "+5.2%", "+5.8%", "+6.4%", "+7%", "+7.6%", "+10%"],
                "Speed↑": ["+11%", "+14%", "+17%", "+20%", "+24%", "+27%", "+30%", "+33%", "+36%", "+40%"],
            }
        },
        "TP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max TP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max TP↑": ["+10%", "+11%", "+12%", "+13%", "+17%", "+19%", "+21%", "+23%", "+25%", "+30%"],
            }
        },
        "Bolt Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "TP Up (Lv 5)",
            "Description": "Katana: Deal melee Cut+Volt damage to one enemy.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "24"],
                "Attack Power": ["220%", "225%", "230%", "235%", "270%", "276%", "282%", "288%", "294%", "340%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Mirror Moon":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "TP Up (Lv 5)",
            "Description": "Katana: Chance to nullify physical attacks received, then counterattack with melee weapon-based damage. Activation chance goes down with each activation.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "15", "15", "15", "15", "15", "22"],
                "Attack Power": ["300%", "310%", "320%", "330%", "380%", "390%", "400%", "410%", "420%", "500%"],
                "Initial Chance": ["67%", "70%", "73%", "76%", "100%", "103%", "106%", "109%", "112%", "135%"],
                "Chance Fadeout": ["35%", "35%", "35%", "35%", "35%", "35%", "35%", "35%", "35%", "35%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Foot Sweep":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Haze Slash (Lv 3)",
            "Description": "Katana: Deal melee Cut damage to an enemy line. Places a debuff on the targets for several turns, which decreases evasion.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "16", "16", "16", "16", "16", "22"],
                "Attack Power": ["111%", "119%", "127%", "135%", "135%", "145%", "155%", "165%", "175%", "175%"],
                "Evasion↓": ["-16%", "-18%", "-20%", "-22%", "-22%", "-24%", "-26%", "-28%", "-30%", "-30%"],
                "Duration": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "4"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
            }
        },
        "Helm Splitter":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Foot Sweep (Lv 5)",
            "Description": "Katana: Deal melee Cut damage to one enemy. Has low accuracy but ignores Cut vulnerability.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12", "12", "12", "12", "12", "17"],
                "Attack Power": ["260%", "270%", "280%", "290%", "390%", "405%", "420%", "435%", "450%", "600%"],
                "Accuracy": ["-20%", "-20%", "-20%", "-20%", "-40%", "-40%", "-40%", "-40%", "-40%", "-60%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Spirit Sword":{
            "Usage": "Passive",
            "Unlock": "High Ground (Lv 3)",
            "Description": "When you select a single-target attack, decrease damage taken from attacks by the target during the whole turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Taken↓": ["-5%", "-6%", "-7%", "-8%", "-12%", "-13%", "-14%", "-15%", "-16%", "-20%"],
            }
        },
        "Triple Strike":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Spirit Sword (Lv 5)",
            "Description": "Katana: Deal 3 hits of melee Cut damage to one enemy. Hits have a chance to inflict Head Bind, then Arm Bind, then Leg Bind respectively. Stops hitting if it lands a bind.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "16", "16", "16", "16", "16", "24"],
                "Attack Power": ["65%", "67%", "69%", "71%", "81%", "83%", "85%", "87%", "89%", "100%"],
                "Infliction Rate": ["6%", "6%", "6%", "6%", "9%", "9%", "9%", "9%", "9%", "12%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Petal Scatter":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Spirit Sword (Lv 5)",
            "Description": "Katana: Deal ranged Cut damage to all enemies. Deals less damage the more enemies there are: 65% damage for 2 enemies, 45% damage for 3, and 35% damage for 4 or more.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["16", "16", "16", "16", "24", "24", "24", "24", "24", "34"],
                "Attack Power": ["240%", "247%", "254%", "261%", "320%", "330%", "340%", "350%", "360%", "450%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%", "90%"],
            }
        },
    },
},
"Shaman":{
    "Basic Skills":{
        "Prayer Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases action speed and decreases TP cost for Prayer skills.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Speed↑": ["x1.0", "x1.05", "x1.1", "x1.15", "x1.15", "x1.2", "x1.25", "x1.3", "x1.35", "x1.35"],
                "Cost Reduction": ["1", "1", "1", "1", "2+10%", "2+10%", "2+10%", "2+10%", "2+10%", "3+20%"],
            }
        },
        "Gospel":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Restore HP to party members when they receive a Prayer buff.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "HP Gain": ["6+3%", "7+3%", "8+3%", "9+3%", "10+5%", "11+5%", "12+5%", "13+5%", "14+5%", "15+7%"],
            }
        },
        "Ruinous Prayer":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(Prayer) Place a buff on the whole party for several turns, which increases physical/elemental damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "20"],
                "Damage Dealt↑": ["+21%", "+23%", "+25%", "+27%", "+27%", "+29%", "+31%", "+33%", "+35%", "+35%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Aegis Prayer":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(Prayer) Place a buff on the whole party for several turns, which decreases physical/elemental damage taken.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "20"],
                "Damage Taken↓": ["-11%", "-13%", "-15%", "-17%", "-17%", "-19%", "-21%", "-23%", "-25%", "-25%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Focus Prayer":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(Prayer) Place a buff on the whole party for several turns, which increases accuracy.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "15"],
                "Accuracy↑": ["+15%", "+18%", "+21%", "+24%", "+24%", "+28%", "+32%", "+36%", "+40%", "+40%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Heaven's Gift":{
            "Usage": "Active (Head, WIS)",
            "Unlock": "Ruinous/Aegis/Focus Prayer (Lv 2)",
            "Description": "Dispel one buff and debuff from an ally at the start of turn. Restore HP and increase their action speed for this turn if one modifier type was removed, with double healing effect if both.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "12"],
                "Healing Power": ["150%", "155%", "160%", "165%", "216%", "222%", "228%", "234%", "240%", "300%"],
                "Speed↑": ["x1.0", "x1.5", "x2.0", "x2.5", "x7.5", "x10.0", "x12.5", "x15.0", "x17.5", "x999.9"],
                "Action Speed": ["2000%", "2000%", "2000%", "2000%", "2000%", "2000%", "2000%", "2000%", "2000%", "2000%"],
            }
        },
        "Blaze Prayer":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(Prayer) Place a buff on the whole party for several turns, which increases Fire resistance and imbues their weapon with Fire damage.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "21", "21", "21", "21", "21", "28"],
                "Resistance↑": ["+25%", "+28%", "+31%", "+34%", "+34%", "+38%", "+42%", "+46%", "+50%", "+50%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Hail Prayer":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(Prayer) Place a buff on the whole party for several turns, which increases Ice resistance and imbues their weapon with Ice damage.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "21", "21", "21", "21", "21", "28"],
                "Resistance↑": ["+25%", "+28%", "+31%", "+34%", "+34%", "+38%", "+42%", "+46%", "+50%", "+50%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Bolt Prayer":{
            "Usage": "Active (Head)",
            "Unlock": "N/A",
            "Description": "(Prayer) Place a buff on the whole party for several turns, which increases Volt resistance and imbues their weapon with Volt damage.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "21", "21", "21", "21", "21", "28"],
                "Resistance↑": ["+25%", "+28%", "+31%", "+34%", "+34%", "+38%", "+42%", "+46%", "+50%", "+50%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Dance Oracle":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Blaze/Hail/Bolt Prayer (Lv 3)",
            "Description": "Only usable if you're under Blaze/Hail/Bolt Prayer. Dispel an elemental Prayer on yourself to deal ranged damage of the corresponding element to all enemies. Targets take more damage of that element until the end of turn.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "18", "18", "18", "18", "18", "26"],
                "Attack Power": ["150%", "156%", "162%", "168%", "192%", "199%", "206%", "213%", "220%", "250%"],
                "Damage Taken↑": ["x1.2", "x1.22", "x1.24", "x1.26", "x1.34", "x1.36", "x1.38", "x1.4", "x1.42", "x1.5"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"],
            }
        },
    },
    "Divine Punisher":{
        "Ancient Memory":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "When you dispel a buff on yourself, there's a chance to reapply it.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["15%", "16.5%", "18%", "19.5%", "29%", "31%", "33%", "35%", "37%", "50%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max HP↑": ["+5%", "+6%", "+7%", "+8%", "+12%", "+13%", "+14%", "+15%", "+16%", "+20%"],
            }
        },
        "Soul Grace":{
            "Usage": "Passive",
            "Unlock": "Heaven's Gift (Lv 3)",
            "Description": "If you have buffs, there's a chance to survive lethal damage (with 1 HP) in exchange for losing a buff.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["5%", "6%", "7%", "8%", "12%", "13%", "14%", "15%", "16%", "20%"],
            }
        },
        "Offering":{
            "Usage": "Active (Head)",
            "Unlock": "Heaven's Gift (Lv 3)",
            "Description": "Dispel one buff and debuff on yourself. Restore TP to other allies in your line if one modifier type was dispelled, doubled if both.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["40", "40", "40", "40", "40", "40", "40", "40", "40", "40"],
                "TP Gain": ["10", "11", "12", "13", "19", "20", "21", "22", "23", "30"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Purification":{
            "Usage": "Active (Head)",
            "Unlock": "Soul Grace (Lv 5), Offering (Lv 5)",
            "Description": "Dispel all ally buffs, ally debuffs, enemy buffs and enemy debuffs. Recover TP for each modifier type that was dispelled.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["40", "40", "40", "40", "40"],
                "TP Gain": ["10", "12", "14", "16", "20"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Magic ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases elemental damage dealt.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Dealt↑": ["+4%", "+5%", "+6%", "+7%", "+9%", "+10%", "+11%", "+12%", "+13%", "+15%"],
            }
        },
        "TP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max TP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max TP↑": ["+10%", "+11%", "+12%", "+13%", "+17%", "+19%", "+21%", "+23%", "+25%", "+30%"],
            }
        },
        "Mana Oracle":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Dance Oracle (Lv 3)",
            "Description": "Only usable if you're under Blaze/Hail/Bolt Prayer. Dispel an elemental Prayer on the whole party (only you need to have it) to deal 5 ranged hits of the corresponding element to random enemies.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "16", "16", "16", "16", "16", "24"],
                "Attack Power": ["100%", "105%", "110%", "115%", "140%", "146%", "152%", "158%", "164%", "200%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Aureole Oracle":{
            "Usage": "Active (Head)",
            "Unlock": "Dance Oracle (Lv 3)",
            "Description": "Only usable if you're under Blaze/Hail/Bolt Prayer. Dispel an elemental Prayer on the whole party (only you need to have it) to make them absorb attacks of the corresponding element for this turn.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "20"],
                "Damage Drain": ["1%", "34%", "67%", "100%", "250%"],
            }
        },
        "Invoke Gods":{
            "Usage": "Active (Head, STR)",
            "Unlock": "Mana Oracle (Lv 5), Aureole Oracle (Lv 3)",
            "Description": "Only usable if you have 3 buffs. Dispel all buffs on yourself to deal weapon-based damage to one enemy at the start of turn. Decreases damage dealt by the target until the end of turn.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "32", "32", "32", "32", "32", "45"],
                "Attack Power": ["750%", "790%", "830%", "870%", "1050%", "1100%", "1150%", "1200%", "1250%", "1500%"],
                "Damage Dealt↓": ["x0.5", "x0.48", "x0.46", "x0.44", "x0.34", "x0.33", "x0.32", "x0.31", "x0.3", "x0.2"],
            }
        },
    },
    "Divine Herald":{
        "Appease Spirits":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "If you're alive, allies with buffs recover HP when they act.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Healing Power": ["5%", "6%", "7%", "8%", "12%", "14%", "16%", "18%", "20%", "25%"],
            }
        },
        "Status DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases resistance to bind/ailment inflictions.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Inflictions↓": ["x0.92", "x0.9", "x0.88", "x0.86", "x0.82", "x0.8", "x0.78", "x0.76", "x0.74", "x0.7"],
            }
        },
        "Exorcism Prayer":{
            "Usage": "Active (Head)",
            "Unlock": "Heaven's Gift (Lv 3)",
            "Description": "(Prayer) Place a buff on the whole party for several turns, which increases bind/ailment resistance.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "28", "28", "28", "28", "28", "40"],
                "Inflictions↓": ["x0.75", "x0.7", "x0.65", "x0.6", "x0.6", "x0.56", "x0.52", "x0.48", "x0.44", "x0.44"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Haste Prayer":{
            "Usage": "Active (Head)",
            "Unlock": "Heaven's Gift (Lv 3)",
            "Description": "(Prayer) Place a buff on the whole party for several turns, which increases evasion.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "18", "18", "18", "18", "18", "24"],
                "Evasion↑": ["+10.5%", "+12%", "+13.5%", "+15%", "+15%", "+16.5%", "+18%", "+19.5%", "+21%", "+21%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Vitality Prayer":{
            "Usage": "Active (Head)",
            "Unlock": "Heaven's Gift (Lv 3)",
            "Description": "(Prayer) Place a buff on the whole party for several turns, which increases Max HP.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["16", "16", "16", "16", "24", "24", "24", "24", "24", "32"],
                "Max HP↑": ["+19%", "+22%", "+25%", "+28%", "+28%", "+31%", "+34%", "+37%", "+40%", "+40%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Sanctuary":{
            "Usage": "Active (Head)",
            "Unlock": "Exorcism/Haste/Vitality Prayer (Lv 5)",
            "Description": "For this turn, allies with buffs have a chance to nullify bind/ailment inflictions received in exchange for losing a buff.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8"],
                "Activation Chance": ["60%", "63%", "66%", "69%", "80%", "82%", "84%", "86%", "88%", "95%"],
                "Max. Activations": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "10"],
            }
        },
        "Holy Flame":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Restore HP to the party for every 3 steps taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "HP Gain": ["4", "5", "6", "7", "12", "14", "16", "18", "20", "30"],
            }
        },
        "Split Spirits":{
            "Usage": "Active (Head)",
            "Unlock": "Dance Oracle (Lv 3)",
            "Description": "For this turn, allies with buffs recover HP based on their damage dealt.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6", "6", "6", "6", "6", "10"],
                "Damage Drain": ["25%", "28%", "31%", "34%", "50%", "54%", "58%", "62%", "66%", "100%"],
            }
        },
        "Benevolence":{
            "Usage": "Passive",
            "Unlock": "Holy Flame (Lv 2), Split Spirits (Lv 2)",
            "Description": "If you're alive, allies with buffs recover HP upon taking damage (once per turn per ally).",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "HP Gain": ["10+2%", "12+2%", "14+2%", "16+2%", "16+4%", "18+4%", "20+4%", "22+4%", "24+4%", "25+6%"],
            }
        },
        "Magic DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Decreases elemental damage taken.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Damage Taken↓": ["-4%", "-5%", "-6%", "-7%", "-9%", "-10%", "-11%", "-12%", "-13%", "-15%"],
            }
        },
    },
},
"Botanist":{
    "Basic Skills":{
        "Herb Mastery":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases healing from Herb skills used in battle.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Healing↑": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+30%"],
            }
        },
        "Healing Herb":{
            "Usage": "Active (Arms, WIS)",
            "Unlock": "N/A",
            "Description": "(Herb) Restore HP to one ally.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "8"],
                "Healing Power": ["100%", "115%", "130%", "145%", "210%", "225%", "240%", "255%", "270%", "350%"],
                "Action Speed": ["150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%", "150%"],
            }
        },
        "Sweeping Herb":{
            "Usage": "Active (Arms, WIS)",
            "Unlock": "Healing Herb (Lv 5)",
            "Description": "(Herb) Restore HP to an ally line.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "10", "10", "10", "10", "10", "15"],
                "Healing Power": ["90%", "99%", "108%", "117%", "167%", "177%", "187%", "197%", "207%", "270%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Refreshing Herb":{
            "Usage": "Active (Arms)",
            "Unlock": "N/A",
            "Description": "(Herb) Remove ailments from the targets.",
            "Starter": "1",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "8", "6", "4", "15"],
                "Targets": ["Single", "Single", "Single", "Single", "Line"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Revival Herb":{
            "Usage": "Active (Arms)",
            "Unlock": "Refreshing Herb (Lv 3)",
            "Description": "(Herb) Revive and restore HP to one ally.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "12", "12", "12", "12", "12", "16"],
                "HP Gain": ["10", "25", "40", "55", "125", "155", "185", "205", "245", "400"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Antibodies":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases natural bind/ailment recovery rate.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Recovery↑": ["+15%", "+17%", "+19%", "+21%", "+28%", "+31%", "+34%", "+37%", "+40%", "+50%"],
            }
        },
        "Herb Foraging":{
            "Usage": "Passive (Field)",
            "Unlock": "N/A",
            "Description": "Restore HP and TP to the party when you gather from a Take/Chop/Mine point.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "HP Gain": ["5+15%", "9+17%", "13+19%", "17+21%", "37+29%", "43+31%", "49+33%", "55+35%", "61+37%", "90+45%"],
                "TP Gain": ["2+1%", "3+1%", "4+1%", "5+1%", "7+3%", "8+3%", "9+3%", "10+3%", "11+3%", "15+5%"],
            }
        },
        "Toxic Smoke":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "N/A",
            "Description": "(Smoke) Attempt to inflict Poison on an enemy line. Places a debuff on the targets for several turns, which decreases Poison resistance.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "14"],
                "Infliction Rate": ["40%", "40%", "40%", "40%", "50%", "50%", "50%", "50%", "50%", "60%"],
                "Poison Power": ["40", "60", "80", "100", "100", "145", "190", "235", "280", "280"],
                "Inflictions↑": ["x1.19", "x1.22", "x1.25", "x1.28", "x1.28", "x1.31", "x1.34", "x1.37", "x1.4", "x1.4"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Dark Smoke":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "N/A",
            "Description": "(Smoke) Attempt to inflict Blind on an enemy line. Places a debuff on the targets for several turns, which decreases Blind resistance.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "14"],
                "Infliction Rate": ["35%", "35%", "35%", "35%", "44%", "44%", "44%", "44%", "44%", "55%"],
                "Inflictions↑": ["x1.19", "x1.22", "x1.25", "x1.28", "x1.28", "x1.31", "x1.34", "x1.37", "x1.4", "x1.4"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Smokeblight":{
            "Usage": "Active (Head)",
            "Unlock": "Toxic/Dark Smoke (Lv 2)",
            "Description": "Place a debuff on an enemy line for several turns, which increases elemental damage taken. Stronger effect while targets have an ailment.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8", "8", "8", "8", "8", "12"],
                "Damage Taken↑\n(Normal)": ["+4%", "+5%", "+6%", "+7%", "+7%", "+9%", "+11%", "+13%", "+15%", "+15%"],
                "Damage Taken↑\n(Ailment)": ["+25%", "+28%", "+31%", "+34%", "+34%", "+38%", "+42%", "+44%", "+50%", "+50%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
    },
    "Merciful Healer":{
        "Herb Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "During battle, excess healing from Herb skills will increase the target's Max HP (up to a certain cap) until the end of the turn.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Max. Overheal": ["+10%", "+11%", "+12%", "+13%", "+19%", "+20%", "+21%", "+22%", "+23%", "+33%"],
            }
        },
        "HP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max HP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max HP↑": ["+5%", "+6%", "+7%", "+8%", "+12%", "+13%", "+14%", "+15%", "+16%", "+20%"],
            }
        },
        "Bountiful Herb":{
            "Usage": "Active (Arms, WIS)",
            "Unlock": "Sweeping Herb (Lv 5)",
            "Description": "(Herb) Restore HP to the whole party.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "22", "22", "22", "22", "22", "30"],
                "Healing Power": ["80%", "84%", "88%", "92%", "142%", "147%", "152%", "157%", "162%", "220%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Freeing Herb":{
            "Usage": "Active (Arms)",
            "Unlock": "Revival Herb (Lv 3)",
            "Description": "(Herb) Remove binds from the targets.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "7", "7", "4", "15"],
                "Binds Removed": ["1", "1", "2", "2", "3"],
                "Targets": ["Single", "Single", "Single", "Single", "Line"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Auto-Revive":{
            "Usage": "Passive",
            "Unlock": "Freeing Herb (Lv 3)",
            "Description": "Chance to automatically revive allies when they die.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Activation Chance": ["2%", "3%", "4%", "5%", "8%", "9%", "10%", "11%", "12%", "15%"],
                "HP Gain": ["10", "16", "22", "28", "68", "76", "84", "92", "100", "150"],
            }
        },
        "Status DEF Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases resistance to bind/ailment inflictions.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Inflictions↓": ["x0.92", "x0.9", "x0.88", "x0.86", "x0.82", "x0.8", "x0.78", "x0.76", "x0.74", "x0.7"],
            }
        },
        "Shared Nostrum":{
            "Usage": "Active (Head)",
            "Unlock": "Herb Foraging (Lv 5)",
            "Description": "Place a buff on yourself for several turns, which increases the area of effect (Single → Line → Party) of Herb skills but decreases their action speed and HP restored.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "30", "30", "30", "30", "30", "40"],
                "Speed↓": ["-33%", "-29%", "-25%", "-21%", "-21%", "-17%", "-13%", "-9%", "-5%", "-5%"],
                "Healing↓": ["-33%", "-29%", "-25%", "-21%", "-21%", "-17%", "-13%", "-9%", "-5%", "-5%"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Reflex Herb":{
            "Usage": "Active (Arms, WIS)",
            "Unlock": "N/A",
            "Description": "(Herb) Prepare to heal allies each time they're hit this turn. Activation chance starts at 100% but goes down with each activation. There's a limit on how many times it can activate on each ally.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "7", "7", "7", "7", "7", "12"],
                "Healing Power": ["65%", "72%", "79%", "86%", "86%", "97%", "108%", "119%", "130%", "130%"],
                "Chance Fadeout": ["50%", "50%", "50%", "50%", "25%", "25%", "25%", "25%", "25%", "10%"],
                "Limit per Ally": ["2", "2", "2", "2", "3", "3", "3", "3", "3", "4"],
            }
        },
        "Delayed Herb":{
            "Usage": "Active (Arms, WIS)",
            "Unlock": "N/A",
            "Description": "(Herb) Prepare a heal that will activate at the start of the next turn, restoring HP to the whole party.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "15", "15", "15", "15", "15", "20"],
                "Healing Power": ["60%", "64%", "68%", "72%", "112%", "117%", "122%", "127%", "132%", "180%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Lingering Scent":{
            "Usage": "Active (No Parts)",
            "Unlock": "Reflex/Delayed Herb (Lv 3)",
            "Description": "Place a buff on the whole party for several turns, which at the end of each turn repeats the effect (with decreased potency) of the last Herb skill they have received since this buff was applied.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "7", "7", "7", "7", "7", "9"],
                "Healing↓": ["-85%", "-82%", "-79%", "-76%", "-76%", "-72%", "-68%", "-64%", "-60%", "-60%"],
                "Duration": ["5", "5", "5", "5", "7", "7", "7", "7", "7", "9"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"],
            }
        },
    },
    "Graced Poisoner":{
        "Smoke Boost":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases action speed and decreases TP cost for Smoke skills.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Speed↑": ["x1.1", "x1.16", "x1.22", "x1.28", "x1.28", "x1.36", "x1.44", "x1.52", "x1.6", "x1.6"],
                "Cost Reduction": ["1", "1", "1", "1", "2+15%", "2+15%", "2+15%", "2+15%", "2+15%", "3+30%"],
            }
        },
        "TP Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases base Max TP.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Max TP↑": ["+10%", "+11%", "+12%", "+13%", "+17%", "+19%", "+21%", "+23%", "+25%", "+30%"],
            }
        },
        "Status ATK Up":{
            "Usage": "Passive",
            "Unlock": "N/A",
            "Description": "Increases bind/ailment infliction rates.",
            "Starter": "1",
            "Max Level": "10",
            "Data": {
                "Inflictions↑": ["x1.05", "x1.06", "x1.07", "x1.08", "x1.12", "x1.13", "x1.14", "x1.15", "x1.16", "x1.2"],
            }
        },
        "Numbing Smoke":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Antibodies (Lv 3)",
            "Description": "(Smoke) Attempt to inflict Paralysis on an enemy line. Places a debuff on the targets for several turns, which decreases Paralysis resistance.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10", "10", "10", "10", "10", "14"],
                "Infliction Rate": ["35%", "35%", "35%", "35%", "44%", "44%", "44%", "44%", "44%", "55%"],
                "Inflictions↑": ["x1.19", "x1.22", "x1.25", "x1.28", "x1.28", "x1.31", "x1.34", "x1.37", "x1.4", "x1.4"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Chaos Smoke":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Antibodies (Lv 3)",
            "Description": "(Smoke) Attempt to inflict Panic on an enemy line. Places a debuff on the targets for several turns, which decreases Panic resistance.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "15", "15", "15", "15", "15", "21"],
                "Infliction Rate": ["27%", "27%", "27%", "27%", "33%", "33%", "33%", "33%", "33%", "40%"],
                "Inflictions↑": ["x1.16", "x1.18", "x1.2", "x1.22", "x1.22", "x1.24", "x1.26", "x1.28", "x1.3", "x1.3"],
                "Duration": ["3", "3", "3", "3", "4", "4", "4", "4", "4", "5"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Smoke Bomb":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Numbing/Chaos Smoke (Lv 3)",
            "Description": "Deal ranged Fire damage to one enemy, but dispel a debuff on them. Only effective if target has an ailment and a debuff.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "28", "28", "28", "28", "28", "36"],
                "Attack Power": ["600%", "630%", "660%", "690%", "840%", "880%", "920%", "960%", "1000%", "1200%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Smokestone":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Smokeblight (Lv 5)",
            "Description": "Attempt to inflict Petrify on one enemy. Only effective if target has a Smoke debuff.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "8", "8", "8", "8", "8", "12"],
                "Infliction Rate": ["45%", "46%", "47%", "48%", "54%", "56%", "58%", "60%", "62%", "75%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Smokeflash":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Smokeblight (Lv 5)",
            "Description": "Attempt to inflict Stun on one enemy. Only effective if target has a Smoke debuff.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5", "5", "5", "5", "5", "7"],
                "Infliction Rate": ["50%", "52%", "54%", "56%", "65%", "67%", "69%", "71%", "73%", "85%"],
                "Action Speed": ["300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%", "300%"],
            }
        },
        "Passing Scent":{
            "Usage": "Active (Head)",
            "Unlock": "Smokestone (Lv 3), Smokeflash (Lv 3)",
            "Description": "Place a debuff on all enemies for several turns, which at the end of each turn attempts to inflict an ailment matching the Smoke debuffs on each target. (Infliction chance and Poison damage depends on the target's stats and level)",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "7", "7", "7", "7", "7", "9"],
                "Infliction Rate": ["22%", "23%", "24%", "25%", "25%", "27%", "29%", "31%", "33%", "33%"],
                "Poison Power": ["40", "60", "80", "100", "100", "145", "190", "235", "280", "280"],
                "Duration": ["5", "5", "5", "5", "7", "7", "7", "7", "7", "9"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Auto-Smoke":{
            "Usage": "Passive",
            "Unlock": "Smokestone (Lv 3), Smokeflash (Lv 3)",
            "Description": "Chance to automatically use a random Smoke skill on the enemy front line at the start of battle. Chance depends on the amount of Smoke skills you have unlocked.",
            "Starter": "0",
            "Max Level": "10",
            "Data": {
                "Chance (1 Skill)": ["7%", "8%", "9%", "10%", "15%", "16%", "17%", "18%", "19%", "25%"],
                "Chance (2 Skills)": ["14%", "16%", "18%", "20%", "30%", "32%", "34%", "36%", "38%", "50%"],
                "Chance (3 Skills)": ["24%", "26%", "28%", "30%", "45%", "48%", "51%", "54%", "57%", "75%"],
                "Chance (4 Skills)": ["30%", "33%", "36%", "39%", "59%", "63%", "67%", "71%", "75%", "100%"],
            }
        },
    },
},
"Battle Items":{
    "Healing":{
        "Medica / Medica II / Medica III / Medica IV":{
            "Usage": "20 / 100 / 800 / 3.000 en",
            "Unlock": "N/A / Lotus Fruit / Bane Weed / Vortex Flower",
            "Description": "Restores HP to one ally.",
            "Starter": "0",
            "Max Level": "4",
            "Levels": ["1", "2", "3", "4"],
            "Data": {
                "HP Gain": ["50", "100", "200", "500"],
            }
        },
        "Soma / Soma Prime":{
            "Usage": "800 / 4.000 en",
            "Unlock": "Igneous Herb / Space Cartilage",
            "Description": "Restores HP to all allies.",
            "Starter": "0",
            "Max Level": "2",
            "Levels": ["1", "2"],
            "Data": {
                "HP Gain": ["80", "160"],
            }
        },
        "Amrita / Amrita II":{
            "Usage": "1.000 / 8.000 en",
            "Unlock": "Inert Sugarcore / Starstruck Sugar",
            "Description": "Restores TP to one ally.",
            "Starter": "0",
            "Max Level": "2",
            "Levels": ["1", "2"],
            "Data": {
                "TP Gain": ["50", "150"],
            }
        },
        "Hamao / Hamao Prime":{
            "Usage": "400 / 5.000 en",
            "Unlock": "Cecidium / Ambrosia",
            "Description": "Restores HP and TP to one ally.",
            "Starter": "0",
            "Max Level": "2",
            "Levels": ["1", "2"],
            "Data": {
                "HP Gain": ["100", "250"],
                "TP Gain": ["25", "75"],
            }
        },
        "Nectar / Nectar II":{
            "Usage": "300 / 6.000 en",
            "Unlock": "Skunk Cabbage / Starfall Fruit",
            "Description": "Revives one ally.",
            "Starter": "0",
            "Max Level": "2",
            "Levels": ["1", "2"],
            "Data": {
                "HP Gain": ["20", "200"],
            }
        },
    },
    "Status":{
        "Theriaca A / Theriaca B":{
            "Usage": "150 en",
            "Unlock": "Brown Tuber",
            "Description": "Respectively removes binds or ailments from one ally.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Laudanum":{
            "Usage": "2.500 en",
            "Unlock": "Thick Stalk",
            "Description": "Removes all buffs and debuffs on one enemy.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Unihorn":{
            "Usage": "2.500 en",
            "Unlock": "Ooze Mushroom",
            "Description": "Removes all buffs and debuffs on the whole party.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
    },
    "Power Up":{
        "Bravant":{
            "Usage": "500 en",
            "Unlock": "Aromatic Moss",
            "Description": "Places a buff on one ally for 5 turns, which increases physical damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Dealt↑": ["+40%"],
            }
        },
        "Stonard":{
            "Usage": "500 en",
            "Unlock": "Zombie Shroom",
            "Description": "Places a buff on one ally for 5 turns, which decreases physical damage taken.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Damage Taken↓": ["-30%"],
            }
        },
        "Blaze/Freeze/Shock Oil":{
            "Usage": "200 en",
            "Unlock": "Cracked Nut",
            "Description": "Places a buff on one ally for 5 turns, which imbues their weapon with Fire/Ice/Volt damage.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Fire/Ice/Volt Mist":{
            "Usage": "1.200 en",
            "Unlock": "Mist Blossom",
            "Description": "Places a buff on all allies for 5 turns, which increases resistance to Fire/Ice/Volt.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Resistance↑": ["+35%"],
            }
        },
        "All Mist":{
            "Usage": "3.000 en",
            "Unlock": "Coriander",
            "Description": "Places a buff on all allies for 5 turns, which increases resistance to Fire, Ice and Volt.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Resistance↑": ["+25%"],
            }
        },
    },
    "Attack (INT)":{
        "Fire/Ice/Volt Jar":{
            "Usage": "200 en",
            "Unlock": "Rainbow Fruit",
            "Description": "Deals ranged Fire/Ice/Volt damage to one enemy.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Attack Power": ["110%"],
                "Action Speed": ["90%"],
            }
        },
        "Flame/Frost/Storm Jar":{
            "Usage": "1.300 en",
            "Unlock": "Clock Flower",
            "Description": "Deals ranged Fire/Ice/Volt damage to all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Attack Power": ["150%"],
                "Action Speed": ["90%"],
            }
        },
        "Cut/Bash/Stab Jar":{
            "Usage": "700 en",
            "Unlock": "Crystal Flower",
            "Description": "Deals ranged Cut/Bash/Stab damage to all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Attack Power": ["100%"],
                "Action Speed": ["200%"],
            }
        },
    },
    "Infliction (LUC)":{
        "Poison/Sleep/Blind/Stun/Curse/Confuse/Petrify Gas":{
            "Usage": "250 en",
            "Unlock": "-",
            "Description": "Respectively attempts to inflict Poison, Sleep, Blind, Paralysis, Curse, Panic or Petrify on all enemies.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["Poi", "Sle", "Bli", "Par", "Cur", "Pan", "Pet"],
            "Data": {
                "Infliction Rate": ["70%", "70%", "60%", "60%", "60%", "50%", "30%"],
                "Poison Power": ["150", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Head/Arm/Leg Binder":{
            "Usage": "250 en",
            "Unlock": "Flying Tailfin",
            "Description": "Respectively attempts to inflict Head Bind, Arm Bind or Leg Bind on all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Infliction Rate": ["60%"],
                "Action Speed": ["80%"],
            }
        },
    },
    "Rewards":{
        "Formaldehyde":{
            "Usage": "4.000 en",
            "Unlock": "Stupefied Orb",
            "Description": "Until the end of turn, enemies killed will drop all their materials regardless of conditions.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Heavenly Gift":{
            "Usage": "3.000 en",
            "Unlock": "Burnt Pauldron",
            "Description": "Increases EXP earned this battle. (Repeated uses do not stack)",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "EXP↑": ["+100%"],
            }
        },
    }
},
"Earthlain":{
    "Initial":{
        "Analyze":{
            "Usage": "Union (1 Unit)",
            "Description": "Register an enemy's details into the Monstrous Codex.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Double Attack":{
            "Usage": "Union (2 Units, STR)",
            "Description": "Both participants will deal one hit of weapon-based damage to one enemy.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "40", "99"],
            "Data": {
                "Attack Power": ["150%", "275%", "400%"],
            }
        },
        "Full Retreat":{
            "Usage": "Union (3 Units)",
            "Description": "Escape from battle and teleport to the point where you entered the floor.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Mana Heal":{
            "Usage": "Union (4 Units)",
            "Description": "Restore TP to the whole party. Healing is based on each unit's Max TP.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Gain": ["6+3%"],
            }
        },
    },
    "Level 1":{
        "Blessing":{
            "Usage": "Union (1 Unit)",
            "Description": "Restore HP to the whole party at the end of turn. Healing is based on each unit's Max HP.",
            "Starter": "0",
            "Max Level": "2",
            "Levels": ["1~49", "50~99"],
            "Data": {
                "HP Gain": ["15%", "30%"],
            }
        },
        "Gaia's Grace":{
            "Usage": "Passive",
            "Description": "Chance to recover TP when using a Basic skill. Healing is based on the skill's cost.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Activation Chance": ["30%"],
                "TP Gain": ["1+20%"],
            }
        },
        "Fishing":{
            "Usage": "Passive (Field)",
            "Description": "Allows you to gather from Fishing spots.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Forage Skill":{
            "Usage": "Passive",
            "Description": "Enables certain Labyrinth events. Increases AGI.",
            "Starter": "0",
            "Max Level": "8",
            "Levels": ["1~12", "13~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "AGI↑": ["+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
    },
    "Level 5":{
        "Resuscitate":{
            "Usage": "Union (2 Units)",
            "Description": "Revive and heal one ally.",
            "Starter": "0",
            "Max Level": "10",
            "Levels": ["1", "11", "21", "31", "41", "51", "61", "71", "81", "91"],
            "Data": {
                "HP Gain": ["1", "11", "21", "31", "90", "110", "130", "150", "170", "270"],
            }
        },
        "Sorting Skill":{
            "Usage": "Passive",
            "Description": "Increases inventory size by 5. Increases VIT.",
            "Starter": "0",
            "Max Level": "8",
            "Levels": ["5~12", "13~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "VIT↑": ["+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Gathering Skill":{
            "Usage": "Passive (Field)",
            "Description": "Obtain additional materials when gathering from Take, Chop or Mine points. Maximum possible yield grows from 1 to 3 based on user's level.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Animal Care":{
            "Usage": "Passive",
            "Description": "Enables certain Labyrinth events.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Level 10":{
        "Tri-Shield":{
            "Usage": "Union (3 Units)",
            "Description": "Nullify the first 3 hits against party members this turn.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Nimble Arts":{
            "Usage": "Passive",
            "Description": "Increases resistance to all binds by 10%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Resilience":{
            "Usage": "Passive",
            "Description": "Increases resistance to all ailments by 10%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Bulwark":{
            "Usage": "Passive",
            "Description": "Increases resistance to physical damage by 5%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Level 15":{
        "Black Mist":{
            "Usage": "Union (4 Units)",
            "Description": "Double all enemies' chance to be afflicted with binds/ailments until the end of turn.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Bodybuilding":{
            "Usage": "Passive",
            "Description": "Increases STR and VIT.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["15~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "STR/VIT↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Cardio":{
            "Usage": "Passive",
            "Description": "Increases AGI and LUC.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["15~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "AGI/LUC↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Talent":{
            "Usage": "Passive",
            "Description": "Increases INT and WIS.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["15~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "INT/WIS↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
    },
    "Level 20":{
        "Determination":{
            "Usage": "Union (5 Units)",
            "Description": "For this turn, all allies become immune to bind/ailment inflictions and have a chance to survive lethal damage with 1HP. Chance starts at 50% and goes down by 10% with each activation.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Gaia's Gift":{
            "Usage": "Passive",
            "Description": "Chance to recover TP when using a Master skill. Healing is based on the skill's cost.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Activation Chance": ["30%"],
                "TP Gain": ["1+20%"],
            }
        },
        "Anatomy":{
            "Usage": "Passive",
            "Description": "Increases enemy drop rates by 10%. Increases INT.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["20~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "INT↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Gourmet":{
            "Usage": "Passive",
            "Description": "Doubles the HP and TP recovered when consuming food.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
},
"Celestrian":{
    "Initial":{
        "Analyze":{
            "Usage": "Union (1 Unit)",
            "Description": "Register an enemy's details into the Monstrous Codex.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Double Attack":{
            "Usage": "Union (2 Units, STR)",
            "Description": "Both participants will deal one hit of weapon-based damage to one enemy.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "40", "99"],
            "Data": {
                "Attack Power": ["150%", "275%", "400%"],
            }
        },
        "Full Retreat":{
            "Usage": "Union (3 Units)",
            "Description": "Escape from battle and teleport to the point where you entered the floor.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Mana Heal":{
            "Usage": "Union (4 Units)",
            "Description": "Restore TP to the whole party. Healing is based on each unit's Max TP.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Gain": ["6+3%"],
            }
        },
    },
    "Level 1":{
        "Enchant":{
            "Usage": "Union (1 Unit)",
            "Description": "Imbue all ally weapons with Fire+Ice+Volt damage for this turn.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Lunar Grace":{
            "Usage": "Passive",
            "Description": "Chance to recover TP when using a Basic skill. Healing is based on the skill's cost.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Activation Chance": ["30%"],
                "TP Gain": ["1+20%"],
            }
        },
        "Chop":{
            "Usage": "Passive (Field)",
            "Description": "Obtain additional materials when gathering from Chop points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Detect Mana":{
            "Usage": "Passive",
            "Description": "Enables certain Labyrinth events. Increases INT.",
            "Starter": "0",
            "Max Level": "8",
            "Levels": ["1~12", "13~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "INT↑": ["+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
    },
    "Level 5":{
        "Game Changer":{
            "Usage": "Union (2 Units, LUC)",
            "Description": "Remove the binds and ailments on one ally, then attempt to inflict them on all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Infliction Rate": ["50%"],
            }
        },
        "Anatomy":{
            "Usage": "Passive",
            "Description": "Increases enemy drop rates by 10%. Increases INT.",
            "Starter": "0",
            "Max Level": "8",
            "Levels": ["5~12", "13~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "INT↑": ["+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Night Vision":{
            "Usage": "Passive",
            "Description": "Enables certain Labyrinth events. Increases accuracy by 3%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Gourmet":{
            "Usage": "Passive",
            "Description": "Doubles the HP and TP recovered when consuming food.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Level 10":{
        "Hex":{
            "Usage": "Union (3 Units, LUC)",
            "Description": "For this turn, the party's elemental attacks gain a chance to inflict a random ailment.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Infliction Rate":["50%"],
                "Poison Power":["250"],
            }
        },
        "Imbue":{
            "Usage": "Passive",
            "Description": "Increases damage dealt with attack items by 30%. Increases LUC.",
            "Starter": "0",
            "Max Level": "8",
            "Levels": ["10~12", "13~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "LUC↑": ["+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Resilience":{
            "Usage": "Passive",
            "Description": "Increases resistance to all ailments by 10%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Anatta Barrier":{
            "Usage": "Passive",
            "Description": "Increases resistance to elemental damage by 5%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Level 15":{
        "Tri-Magic":{
            "Usage": "Union (4 Units, INT)",
            "Description": "Deal 3 ranged hits of Fire, then Ice, then Volt damage to all enemies.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "40", "99"],
            "Data": {
                "Attack Power": ["100%", "150%", "200%"],
            }
        },
        "Bodybuilding":{
            "Usage": "Passive",
            "Description": "Increases STR and VIT.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["15~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "STR/VIT↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Cardio":{
            "Usage": "Passive",
            "Description": "Increases AGI and LUC.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["15~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "AGI/LUC↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Talent":{
            "Usage": "Passive",
            "Description": "Increases INT and WIS.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["15~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "INT/WIS↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
    },
    "Level 20":{
        "Chain Blast":{
            "Usage": "Union (5 Units, INT, LUC)",
            "Description": "Deal ranged Almighty damage to all enemies, with a chance to inflict Head, Arm and Leg Bind.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "40", "99"],
            "Data": {
                "Attack Power": ["100%", "200%", "300%"],
                "Infliction Rate": ["150%", "150%", "150%"],
            }
        },
        "Lunar Gift":{
            "Usage": "Passive",
            "Description": "Chance to recover TP when using a Master skill. Healing is based on the skill's cost.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Activation Chance": ["30%"],
                "TP Gain": ["1+20%"],
            }
        },
        "Animal Care":{
            "Usage": "Passive",
            "Description": "Enables certain Labyrinth events.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Focus":{
            "Usage": "Passive",
            "Description": "Increases resistance to Sleep by 15%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
},
"Therian":{
    "Initial":{
        "Analyze":{
            "Usage": "Union (1 Unit)",
            "Description": "Register an enemy's details into the Monstrous Codex.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Double Attack":{
            "Usage": "Union (2 Units, STR)",
            "Description": "Both participants will deal one hit of weapon-based damage to one enemy.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "40", "99"],
            "Data": {
                "Attack Power": ["150%", "275%", "400%"],
            }
        },
        "Full Retreat":{
            "Usage": "Union (3 Units)",
            "Description": "Escape from battle and teleport to the point where you entered the floor.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Mana Heal":{
            "Usage": "Union (4 Units)",
            "Description": "Restore TP to the whole party. Healing is based on each unit's Max TP.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Gain": ["6+3%"],
            }
        },
    },
    "Level 1":{
        "Wide Swing":{
            "Usage": "Union (1 Unit)",
            "Description": "Deal weapon-based damage to all enemies.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "40", "99"],
            "Data": {
                "Attack Power": ["100%", "175%", "250%"],
            }
        },
        "Ares' Grace":{
            "Usage": "Passive",
            "Description": "Chance to recover TP when using a Basic skill. Healing is based on the skill's cost.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Activation Chance": ["30%"],
                "TP Gain": ["1+20%"],
            }
        },
        "Hunting Skill":{
            "Usage": "Passive",
            "Description": "Enables certain Labyrinth events. Increases STR.",
            "Starter": "0",
            "Max Level": "8",
            "Levels": ["1~12", "13~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "STR↑": ["+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Mine":{
            "Usage": "Passive (Field)",
            "Description": "Obtain additional materials when gathering from Mine points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Level 5":{
        "Binding Force":{
            "Usage": "Union (3 Units, LUC)",
            "Description": "For this turn, the party's physical attacks gain a chance to inflict a random bind.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Infliction Rate":["40%"]
            }
        },
        "Reflexes":{
            "Usage": "Passive",
            "Description": "Enables certain Labyrinth events. Increases evasion by 3%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Precaution":{
            "Usage": "Passive",
            "Description": "Increases chance of ambushing enemies by 3%. Increases WIS.",
            "Starter": "0",
            "Max Level": "8",
            "Levels": ["5~12", "13~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "WIS↑": ["+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Brute Strength":{
            "Usage": "Passive",
            "Description": "Enables certain Labyrinth events. Increases STR.",
            "Starter": "0",
            "Max Level": "8",
            "Levels": ["5~12", "13~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "STR↑": ["+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
    },
    "Level 10":{
        "Life Drain":{
            "Usage": "Union (3 Units)",
            "Description": "For this turn, each time an ally damages an enemy the whole party will recover HP based on the damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Damage Drain": ["30%"],
            }
        },
        "Forage Skill":{
            "Usage": "Passive",
            "Description": "Enables certain Labyrinth events. Increases AGI.",
            "Starter": "0",
            "Max Level": "8",
            "Levels": ["10~12", "13~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "AGI↑": ["+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Fishing":{
            "Usage": "Passive (Field)",
            "Description": "Allows you to gather from Fishing spots.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Third Eye":{
            "Usage": "Passive",
            "Description": "Increases resistance to Blind by 15%. Increases AGI.",
            "Starter": "0",
            "Max Level": "8",
            "Levels": ["10~12", "13~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "AGI↑": ["+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
    },
    "Level 15":{
        "Tri-Attack":{
            "Usage": "Union (4 Units, STR)",
            "Description": "Deal 3 ranged hits of Cut, then Bash, then Stab damage to one enemy.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "40", "99"],
            "Data": {
                "Attack Power": ["200%", "325%", "450%"],
            }
        },
        "Bodybuilding":{
            "Usage": "Passive",
            "Description": "Increases STR and VIT.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["15~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "STR/VIT↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Cardio":{
            "Usage": "Passive",
            "Description": "Increases AGI and LUC.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["15~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "AGI/LUC↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Talent":{
            "Usage": "Passive",
            "Description": "Increases INT and WIS.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["15~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "INT/WIS↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
    },
    "Level 20":{
        "All-Out Attack":{
            "Usage": "Union (5 Units, STR, LUC)",
            "Description": "All party members will deal weapon-based damage to one enemy, with a chance to inflict Stun.",
            "Starter": "0",
            "Max Level": "1",
            "Levels": ["1"],
            "Data": {
                "Attack Power": ["100%"],
                "Infliction Rate": ["200%"],
            }
        },
        "Ares' Gift":{
            "Usage": "Passive",
            "Description": "Chance to recover TP when using a Master skill. Healing is based on the skill's cost.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Activation Chance": ["30%"],
                "TP Gain": ["1+20%"],
            }
        },
        "Bulwark":{
            "Usage": "Passive",
            "Description": "Increases resistance to physical damage by 5%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Sorting Skill":{
            "Usage": "Passive",
            "Description": "Increases inventory size by 5. Increases VIT.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["20~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "VIT↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
    },
},
"Brouni":{
    "Initial":{
        "Analyze":{
            "Usage": "Union (1 Unit)",
            "Description": "Register an enemy's details into the Monstrous Codex.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Double Attack":{
            "Usage": "Union (2 Units, STR)",
            "Description": "Both participants will deal one hit of weapon-based damage to one enemy.",
            "Starter": "0",
            "Max Level": "3",
            "Levels": ["1", "40", "99"],
            "Data": {
                "Attack Power": ["150%", "275%", "400%"],
            }
        },
        "Full Retreat":{
            "Usage": "Union (3 Units)",
            "Description": "Escape from battle and teleport to the point where you entered the floor.",
            "Starter": "0",
            "Max Level": "0",
            "Levels": ["1"],
            "Data": ""
        },
        "Mana Heal":{
            "Usage": "Union (4 Units)",
            "Description": "Restore TP to the whole party. Healing is based on each unit's Max TP.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Gain": ["6+3%"],
            }
        },
    },
    "Level 1":{
        "Guard Order":{
            "Usage": "Union (2 Units)",
            "Description": "Decrease all damage taken by the party this turn.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Damage Taken↓": ["-50%"],
            }
        },
        "Zephyr's Grace":{
            "Usage": "Passive",
            "Description": "Chance to recover TP when using a Basic skill. Healing is based on the skill's cost.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Activation Chance": ["30%"],
                "TP Gain": ["1+20%"],
            }
        },
        "Take":{
            "Usage": "Passive (Field)",
            "Description": "Obtain additional materials when gathering from Take points. Maximum possible yield grows from 4 to 8 based on user's level.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Animal Care":{
            "Usage": "Passive",
            "Description": "Enables certain Labyrinth events.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Level 5":{
        "Superspeed":{
            "Usage": "Union (3 Units)",
            "Description": "For this turn, all party members will act at the start of the turn.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Resilience":{
            "Usage": "Passive",
            "Description": "Increases resistance to all ailments by 10%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Fishing":{
            "Usage": "Passive (Field)",
            "Description": "Allows you to gather from Fishing spots.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Herbology":{
            "Usage": "Passive",
            "Description": "Increases the HP restored by healing items used in battle by 50%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Level 10":{
        "Forbidden Rite":{
            "Usage": "Union (3 Units)",
            "Description": "Increase the duration of all buffs and debuffs on allies and enemies by 1 turn.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Sorting Skill":{
            "Usage": "Passive",
            "Description": "Increases inventory size by 5. Increases VIT.",
            "Starter": "0",
            "Max Level": "8",
            "Levels": ["10~12", "13~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "VIT↑": ["+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Anatta Barrier":{
            "Usage": "Passive",
            "Description": "Increases resistance to elemental damage by 5%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Reflexes":{
            "Usage": "Passive",
            "Description": "Enables certain Labyrinth events. Increases evasion by 3%.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Level 15":{
        "Hygieia's Bowl":{
            "Usage": "Union (4 Units)",
            "Description": "Revive, fully restore HP, and remove binds/ailments for all allies.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Bodybuilding":{
            "Usage": "Passive",
            "Description": "Increases STR and VIT.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["15~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "STR/VIT↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Cardio":{
            "Usage": "Passive",
            "Description": "Increases AGI and LUC.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["15~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "AGI/LUC↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Talent":{
            "Usage": "Passive",
            "Description": "Increases INT and WIS.",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["15~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "INT/WIS↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
    },
    "Level 20":{
        "Aegis Shield":{
            "Usage": "Union (5 Units)",
            "Description": "Nullify all attacks to the party this turn.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Zephyr's Gift":{
            "Usage": "Passive",
            "Description": "Chance to recover TP when using a Master skill. Healing is based on the skill's cost.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Activation Chance": ["30%"],
                "TP Gain": ["1+20%"],
            }
        },
        "Haggle":{
            "Usage": "Passive",
            "Description": "Decrease the cost of items in the shop by 5%(doesn't stack). Increases WIS,",
            "Starter": "0",
            "Max Level": "7",
            "Levels": ["20~25", "26~38", "39~51", "52~64", "65~77", "78~90", "91~99"],
            "Data": {
                "WIS↑": ["+4", "+5", "+6", "+7", "+8", "+9", "+10"],
            }
        },
        "Gourmet":{
            "Usage": "Passive",
            "Description": "Doubles the HP and TP recovered when consuming food.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
},
"Weapon Skills":{
    "Sword":{
        "Unsealer":{
            "Usage": "Active (Arms)",
            "Unlock": "Seal Greaves",
            "Description": "Remove one bind on an ally.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["3"],
                "Action Speed": ["50%"],
            }
        },
        "Amateur Medic":{
            "Usage": "Active (Arms)",
            "Unlock": "Healing Knife",
            "Description": "Restore HP to one ally. Healing is based on the target's Max HP. (Only usable in battle)",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["1"],
                "HP Gain": ["15+15%"],
                "Action Speed": ["80%"],
            }
        },
        "Cold Front":{
            "Usage": "Active (Arms, INT)",
            "Unlock": "Batfang Blade",
            "Description": "Deal ranged Ice damage to one enemy.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["1", "1", "1", "1", "4"],
                "Attack Power": ["70%", "73%", "76%", "79%", "110%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Panic Assault":{
            "Usage": "Active (Head, STR, LUC)",
            "Unlock": "Jono",
            "Description": "Deal melee Bash damage to one enemy, with a chance to inflict Panic.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "7"],
                "Attack Power": ["120%", "123%", "126%", "129%", "150%"],
                "Infliction Rate": ["30%", "31%", "32%", "33%", "40%"],
                "Accuracy": ["-4%", "-4%", "-4%", "-4%", "-4%"],
                "Action Speed": ["75%", "75%", "75%", "75%", "75%"],
            }
        },
        "Seal Arms":{
            "Usage": "Active (Arms, LUC)",
            "Unlock": "Niabor",
            "Description": "Attempt to inflict Arm Bind on an enemy line.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "8"],
                "Infliction Rate": ["30%", "31%", "32%", "33%", "45%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Sting Barrage":{
            "Usage": "Active (Head, STR)",
            "Unlock": "Poignard",
            "Description": "Deal 4~6 hits of melee Stab damage to random enemies.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "16"],
                "Attack Power": ["65%", "69%", "73%", "77%", "100%"],
                "Accuracy": ["-50%", "-50%", "-50%", "-50%", "-50%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Snake Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Snake Sword",
            "Description": "Deal melee Cut damage to all enemies. (Incorrectly called Bellows Cut in the weapon's description)",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["18", "18", "18", "18", "25"],
                "Attack Power": ["180%", "185%", "190%", "195%", "250%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["130%", "130%", "130%", "130%", "130%"],
            }
        },
        "Clawbinder":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "The Answerer",
            "Description": "Deal melee Cut damage to an enemy line, with a chance to inflict Arm Bind.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "30"],
                "Attack Power": ["200%", "210%", "220%", "230%", "300%"],
                "Infliction Rate": ["50%", "50%", "50%", "50%", "75%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
    },
    "Katana":{
        "Knockout Blow":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Shell Tanto",
            "Description": "Deal melee Bash damage to one enemy, with a chance to inflict Stun.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "4"],
                "Attack Power": ["70%", "73%", "76%", "79%", "100%"],
                "Infliction Rate": ["25%", "26%", "27%", "28%", "34%"],
                "Accuracy": ["+5%", "+5%", "+5%", "+5%", "+5%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%"],
            }
        },
        "Power Charge":{
            "Usage": "Active (Arms)",
            "Unlock": "Shokudaikiri",
            "Description": "Enter a charge state until the end of next turn, which increases damage dealt.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "7"],
                "Damage Dealt↑": ["x1.5", "x1.55", "x1.6", "x1.65", "x2.0"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Claw Sever":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Karakashiwa",
            "Description": "Deal melee Cut damage to one enemy. Places a debuff on the target for 3 turns, which decreases damage dealt. (Incorrectly called Claw Chip in the weapon's description)",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12"],
                "Attack Power": ["150%", "155%", "160%", "165%", "200%"],
                "Damage Dealt↓": ["-10%", "-11%", "-12%", "-13%", "-20%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Fireblade Dance":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Sanshobo",
            "Description": "Deal melee Cut+Fire damage to an enemy line.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["13", "13", "13", "13", "20"],
                "Attack Power": ["120%", "125%", "130%", "135%", "165%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Goreblade":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Soboro",
            "Description": "Deal 4~6 hits of melee Cut damage to random enemies. Places a buff on yourself for 3 turns, which increases physical damage dealt.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "30"],
                "Attack Power": ["50%", "52%", "54%", "56%", "70%"],
                "Damage Dealt↑": ["+7%", "+8%", "+9%", "+10%", "+15%"],
                "Accuracy": ["-10%", "-10%", "-10%", "-10%", "-10%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Sonic Mirage":{
            "Usage": "Active (Legs)",
            "Unlock": "Ameno-habakiri",
            "Description": "Place a buff on the whole party for 3 turns, which increases evasion.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["40", "40", "40", "40", "70"],
                "Evasion↑": ["+22%", "+23%", "+24%", "+25%", "+34%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%"],
            }
        },
    },
    "Scythe":{
        "Vampiric Edge":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Revenant Faux",
            "Description": "Deal melee Cut damage to one enemy. Recover HP based on damage dealt.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "8", "8", "8", "15"],
                "Attack Power": ["170%", "180%", "190%", "200%", "250%"],
                "Damage Drain": ["15%", "16%", "17%", "18%", "25%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%"],
            }
        },
        "Neurotoxin":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Double Scythe",
            "Description": "Attempt to inflict Head, Arm and Leg Bind on one enemy.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["7", "7", "7", "7", "12"],
                "Infliction Rate": ["20%", "21%", "22%", "23%", "30%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Vicious Slash":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Moon Sickle",
            "Description": "Deal melee Cut damage to one enemy. Cannot miss.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "12"],
                "Attack Power": ["135%", "140%", "145%", "150%", "230%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%"],
            }
        },
        "Ruinous Prayer":{
            "Usage": "Active (Head)",
            "Unlock": "Prayer Scythe",
            "Description": "(Prayer) Place a buff on the whole party for several turns, which increases damage dealt.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "16"],
                "Damage Dealt↑": ["+21%", "+23%", "+25%", "+27%", "+27%"],
                "Duration": ["3", "3", "3", "3", "4"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Explosion":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Cradle Edge",
            "Description": "Deal ranged Fire damage to all enemies.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["16", "16", "16", "16", "25"],
                "Attack Power": ["200%", "210%", "220%", "230%", "300%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%"],
            }
        },
    },
    "Cestus":{
        "Poison Jab":{
            "Usage": "Active (Head, STR, LUC)",
            "Unlock": "Crawler Knuckles",
            "Description": "Deal melee Cut damage to one enemy, with a chance to inflict Poison.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "10"],
                "Attack Power": ["130%", "135%", "140%", "145%", "170%"],
                "Infliction Rate": ["45%", "45%", "45%", "45%", "60%"],
                "Poison Power": ["40", "60", "80", "100", "100"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["60%", "60%", "60%", "60%", "60%"],
            }
        },
        "Galvanic Finger":{
            "Usage": "Active (Arms)",
            "Unlock": "Plasma Fist",
            "Description": "Decrease Volt damage taken by the party this turn.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6"],
                "Damage Taken↓": ["-30%", "-33%", "-36%", "-39%", "-50%"],
            }
        },
        "Rest":{
            "Usage": "Active (Arms)",
            "Unlock": "Gryphbreaker",
            "Description": "Recover HP. Healing is based on your Max HP. (Only usable in battle)",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "5"],
                "HP Gain": ["30+25%", "34+26%", "38+27%", "42+28%", "70+35%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%"],
            }
        },
        "Insulator":{
            "Usage": "Active (Arms)",
            "Unlock": "Mirage Fist",
            "Description": "Decrease Fire damage taken by the party this turn.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6"],
                "Damage Taken↓": ["-30%", "-33%", "-36%", "-39%", "-50%"],
            }
        },
        "Shell Guard EX":{
            "Usage": "Active (Legs)",
            "Unlock": "Tenouchi",
            "Description": "Place a buff on yourself for 3 turns, which decreases damage taken.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["4", "4", "4", "4", "8"],
                "Damage Taken↓": ["-20%", "-22%", "-24%", "-26%", "-34%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Death Spike":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Blast Piledriver",
            "Description": "Deal melee Stab damage to one enemy, with a chance to inflict Instant Death.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "18"],
                "Attack Power": ["180%", "185%", "190%", "195%", "250%"],
                "Infliction Rate": ["25%", "27%", "29%", "31%", "40%"],
                "Accuracy": ["-5%", "-5%", "-5%", "-5%", "-5%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Emperor Strike":{
            "Usage": "Active (Legs, STR)",
            "Unlock": "Polideuces",
            "Description": "Deal melee Bash damage to all enemies.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "35"],
                "Attack Power": ["300%", "310%", "320%", "330%", "400%"],
                "Accuracy": ["-60%", "-60%", "-60%", "-60%", "-60%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%"],
            }
        },
    },
    "Coffin":{
        "Chill Ward":{
            "Usage": "Active (Arms)",
            "Unlock": "Scarlet Coffin",
            "Description": "Decrease Ice damage taken by the party this turn.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6"],
                "Damage Taken↓": ["-30%", "-33%", "-36%", "-39%", "-50%"],
            }
        },
        "Hallowed Shield":{
            "Usage": "Active (Arms)",
            "Unlock": "Golem Coffin",
            "Description": "Decrease physical damage taken by the party this turn.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["9", "9", "9", "9", "15"],
                "Damage Taken↓": ["-20%", "-22%", "-24%", "-26%", "-34%"],
            }
        },
        "Holy Flame":{
            "Usage": "Passive (Field)",
            "Unlock": "Karouto",
            "Description": "Restore HP to the whole party for every 3 steps taken.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "HP Gain": ["4", "5", "6", "7", "12"],
            }
        },
        "Split Spirits":{
            "Usage": "Active (Head)",
            "Unlock": "Le Cercuei",
            "Description": "For this turn, allies with buffs recover HP based on their damage dealt.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "6"],
                "Damage Drain": ["25%", "28%", "31%", "34%", "50%"],
            }
        },
        "Clinch":{
            "Usage": "Active (No Parts, LUC)",
            "Unlock": "Iron Maiden",
            "Description": "Attempt to inflict the 3 binds on one enemy and yourself.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "5", "5", "5", "10"],
                "Infliction Rate\n(Enemy)": ["20%", "22%", "24%", "26%", "38%"],
                "Infliction Rate\n(Self)": ["20%", "22%", "24%", "26%", "34%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Mana Flow":{
            "Usage": "Active (Head)",
            "Unlock": "Reliquary",
            "Description": "Place a buff on yourself for several turns, which grants a percentage of the TP you spend each turn to a random ally. (Incorrectly called Magic Flow in the weapon's description)",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["2", "2", "2", "2", "3"],
                "TP Gain": ["25%", "28%", "31%", "34%", "34%"],
                "Duration": ["3", "3", "3", "3", "4"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Banefire Breath":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Brahmagiri",
            "Description": "Deal ranged Fire damage to an enemy line. Places a debuff on the targets for 3 turns, which increases elemental damage taken.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["26", "26", "26", "26", "42"],
                "Attack Power": ["200%", "210%", "220%", "230%", "300%"],
                "Damage Taken↑": ["+25%", "+28%", "+31%", "+34%", "+50%"],
                "Accuracy": ["+50%", "+50%", "+50%", "+50%", "+50%"],
                "Action Speed": ["90%", "90%", "90%", "90%", "90%"],
            }
        },
    },
    "Bow":{
        "Gorgon Shot":{
            "Usage": "Active (Arms, STR, LUC)",
            "Unlock": "Gorgon Arrow",
            "Description": "Deal ranged Stab damage to one enemy, with a chance to inflict Petrify.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["3"],
                "Attack Power": ["100%"],
                "Infliction Rate": ["34%"],
                "Accuracy": ["+5%"],
                "Action Speed": ["75%"],
            }
        },
        "Aegis Prayer":{
            "Usage": "Active (Head)",
            "Unlock": "Sequoian Bow",
            "Description": "(Prayer) Place a buff on the whole party for several turns, which decreases physical/elemental damage taken.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "10", "10", "10", "16"],
                "Damage Taken↓": ["-11%", "-13%", "-15%", "-17%", "-17%"],
                "Duration": ["3", "3", "3", "3", "4"],
                "Action Speed": ["100%", "100%", "100%", "100%", "100%"],
            }
        },
        "Wary Eye":{
            "Usage": "Passive",
            "Unlock": "Killing Shot",
            "Description": "Chance to cancel out enemy ambushes.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "Activation Chance": ["34%", "40%", "46%", "52%", "75%"],
            }
        },
        "Hellfire":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Phantom Arch",
            "Description": "Deal ranged Fire damage to all enemies.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["20", "20", "20", "20", "28"],
                "Attack Power": ["140%", "147%", "154%", "161%", "200%"],
                "Accuracy": ["+30%", "+30%", "+30%", "+30%", "+30%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Slaughtershot":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Blue Moon Bow",
            "Description": "Deal ranged Stab damage to one enemy. Low accuracy but ignores Stab resistance.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "17"],
                "Attack Power": ["400%", "420%", "440%", "460%", "600%"],
                "Accuracy": ["-40%", "-40%", "-40%", "-40%", "-60%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%"],
            }
        },
        "Breather":{
            "Usage": "Active (No Parts)",
            "Unlock": "Demon's Arch",
            "Description": "Only usable if afflicted with a bind/ailment. Remove all binds and ailments on yourself, then enter a charge state until the end of next turn, which increases all damage dealt.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "8"],
                "Damage Dealt↑": ["x1.2", "x1.25", "x1.3", "x1.35", "x1.8"],
                "Action Speed": ["200%", "200%", "200%", "200%", "200%"],
            }
        },
        "Rain of Ruin":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Impulse Arrow",
            "Description": "Deal ranged Stab damage to an enemy line. Places a debuff on the targets for 3 turns, which increases damage taken.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["25", "25", "25", "25", "34"],
                "Attack Power": ["200%", "210%", "220%", "230%", "300%"],
                "Damage Taken↑": ["+20%", "+21%", "+22%", "+23%", "+30%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%"],
            }
        },
        "Alluring Body":{
            "Usage": "Active (Head, LUC)",
            "Unlock": "Failnaught",
            "Description": "Attempt to inflict Panic on all enemies. Also places a debuff on the targets for 3 turns, which decreases bind resistance.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["23", "23", "23", "23", "33"],
                "Infliction Rate": ["30%", "31%", "32%", "33%", "40%"],
                "Inflictions↑": ["x1.25", "x1.28", "x1.31", "x1.34", "x1.5"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%"],
            }
        },
    },
    "Cannon":{
        "Biting Wind":{
            "Usage": "Active (Legs, INT)",
            "Unlock": "Scissors Cannon",
            "Description": "Deal ranged Ice damage to an enemy line.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "10"],
                "Attack Power": ["90%", "93%", "96%", "99%", "130%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["70%", "70%", "70%", "70%", "70%"],
            }
        },
        "Ion Cannonball":{
            "Usage": "Active (Arms, INT)",
            "Unlock": "Parrot Cannon",
            "Description": "Deal ranged Volt damage to one enemy, with pierce effect.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "7"],
                "Attack Power": ["80%", "85%", "90%", "95%", "130%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%"],
            }
        },
        "Stifling Miasma":{
            "Usage": "Active (Head)",
            "Unlock": "Mortar",
            "Description": "Place a debuff on all enemies for several turns, which decreases physical/elemental damage dealt.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "6", "6", "6", "11"],
                "Damage Dealt↓": ["-10%", "-12%", "-14%", "-16%", "-16%"],
                "Duration": ["3", "3", "3", "3", "4"],
                "Action Speed": ["85%", "85%", "85%", "85%", "85%"],
            }
        },
        "Rapid Cannonfire":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Troll Howitzer",
            "Description": "Deal 3~8 hits of ranged Bash damage to random enemies.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["12", "12", "12", "12", "17"],
                "Attack Power": ["60%", "62%", "64%", "66%", "80%"],
                "Accuracy": ["-25%", "-25%", "-25%", "-25%", "-25%"],
                "Action Speed": ["50%", "50%", "50%", "50%", "50%"],
            }
        },
        "TP Traveler":{
            "Usage": "Passive (Field)",
            "Unlock": "Mana Cannon",
            "Description": "Restore 1 TP to all party members for every certain amount of steps taken.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "Steps to Heal": ["10", "9", "8", "7", "4"],
            }
        },
        "Vice Crush":{
            "Usage": "Active (Head, STR, LUC)",
            "Unlock": "Gustav",
            "Description": "Deal melee Stab damage to one enemy, with a chance to inflict Head, Arm and Leg Bind.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["18", "18", "18", "18", "30"],
                "Attack Power": ["300%", "320%", "340%", "360%", "450%"],
                "Infliction Rate": ["25%", "25%", "25%", "25%", "33%"],
                "Accuracy": ["-1%", "-1%", "-1%", "-1%", "-1%"],
                "Action Speed": ["40%", "40%", "40%", "40%", "40%"],
            }
        },
    },
    "Staff":{
        "Unsealer":{
            "Usage": "Active (Arms)",
            "Unlock": "Seal Breaker",
            "Description": "Remove one bind on an ally.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["3"],
                "Action Speed": ["50%"],
            }
        },
        "Heat Wave":{
            "Usage": "Active (Head, INT)",
            "Unlock": "Feather Staff",
            "Description": "Deal ranged Fire damage to one enemy.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["1", "1", "1", "1", "4"],
                "Attack Power": ["70%", "73%", "76%", "79%", "110%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Bolt Smash":{
            "Usage": "Active (Arms, INT)",
            "Unlock": "Scorpio Rod",
            "Description": "Deal ranged Volt damage to one enemy.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["3", "3", "3", "3", "7"],
                "Attack Power": ["90%", "95%", "100%", "105%", "145%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Cursed Flame":{
            "Usage": "Active (Arms, INT, LUC)",
            "Unlock": "Cursed Scepter",
            "Description": "Deal ranged Fire damage to an enemy line, with a chance to inflict Curse.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["15", "15", "15", "15", "23"],
                "Attack Power": ["100%", "105%", "110%", "115%", "150%"],
                "Infliction Rate": ["30%", "32%", "34%", "36%", "50%"],
                "Accuracy": ["+0%", "+0%", "+0%", "+0%", "+0%"],
                "Action Speed": ["80%", "80%", "80%", "80%", "80%"],
            }
        },
        "Cavalry Arrival":{
            "Usage": "Active (Arms)",
            "Unlock": "King's Rod",
            "Description": "Chance to revive all dead allies. (Only usable during battle)",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["18", "18", "18", "18", "28"],
                "Revive Chance": ["40%", "42%", "44%", "46%", "60%"],
                "HP Gain": ["1", "6", "11", "15", "50"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%"],
            }
        },
        "Thunderbolt":{
            "Usage": "Active (Head, INT, LUC)",
            "Unlock": "Filia's Zhezl",
            "Description": "Deal 3~6 hits of ranged Volt damage to random enemies, with a chance to inflict Stun.",
            "Starter": "0",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["50", "50", "50", "50", "75"],
                "Attack Power": ["100%", "105%", "110%", "115%", "150%"],
                "Infliction Rate": ["20%", "20%", "20%", "20%", "30%"],
                "Accuracy": ["+20%", "+20%", "+20%", "+20%", "+20%"],
                "Action Speed": ["120%", "120%", "120%", "120%", "120%"],
            }
        },
        "Heavy Strike":{
            "Usage": "Active (Arms, STR)",
            "Unlock": "Assault Wand",
            "Description": "Deal melee Bash damage to one enemy.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "TP Cost": ["50"],
                "Attack Power": ["950%"],
                "Accuracy": ["-10%"],
                "Action Speed": ["30%"],
            }
        },
    },
},
"Food":{
    "Ingredient":{
        "Forest Wheat": ["3+15%", "-"],
        "Skeleton Fish": ["1+5%", "-"],
        "Moon Apple": ["5+25%", "-"],
        "Egg": ["-", "1+2%"],
        "Milk": ["-", "2+3%"],
        "Forest Honey": ["-", "2+4%"],
        "Olives": ["?", "?"],
        "Forest Berries": ["?", "?"],
        "Mandrapotato": ["-", "-"],
        "Meat": ["6+30%", "-"],
        "Forest Fish": ["4+20%", "-"],
    },
    "Cooked":{
        "?": ["?", "?"],
    },
},
}

//End of database

var descriptions = {
    "Fencer":   ["Swordfighters who use swiftness to overpower enemies.",
                    "<b>Phantom Duelist</b>: Draws in, evades and counters enemy attacks.",
                    "<b>Chain Duelist</b>: Strikes repeatedly in tandem with ally attacks."],
    "Dragoon":  ["Sturdy knights skilled in both protection and artillery.",
                    "<b>Shield Bearer</b>: Specializes in blocking and diverting attacks.",
                    "<b>Cannon Bearer</b>: Assists the offensive while maintaining defense."],
    "Pugilist": ["Brawlers who take down enemies with their own fists.",
                    "<b>Barrage Brawler</b>: Performs combos of punches that can disable the enemy.",
                    "<b>Impact Brawler</b>: Throws destructive punches by risking their own health."],
    "Harbinger":["Reapers who use noxious Miasma to weaken the enemy.",
                    "<b>Deathbringer</b>: Inflict ailments and cuts down afflicted enemies.",
                    "<b>Deathguard</b>: Inflicts debuffs and keeps the party in good condition."],
    "Warlock":  ["Elemental casters that exploit the enemy's weakness.",
                    "<b>Omnimancer</b>: Combines physical and elemental magic to hit any weakness.",
                    "<b>Elemancer</b>: Specializes in strong elemental magic and energy control."],
    "Necromancer":["Summoners who call forth Wraiths to assist the party.",
                    "<b>Spirit Evoker</b>: Controls Wraiths to provide offense, defense and ailments.",
                    "<b>Spirit Broker</b>: Constantly attacks while summoning or sacrificing Wraiths."],
    "Rover":    ["Archers who hunt enemies alongside animal companions.",
                    "<b>Flying Falcon</b>: Hunts with a Hawk that attacks multiple enemies.",
                    "<b>Hunting Hound</b>: Hunts with a Hound that protects and heals allies."],
    "Masurao":  ["Frontline warriors focused in strong offense with Katanas.",
                    "<b>Blade Dancer</b>: Wields 4 Katanas at once for overwhelming offense.",
                    "<b>Blade Master</b>: Versatile duelists that combine power and utility."],
    "Shaman":   ["Support casters who manage buffs to strengthen the party.",
                    "<b>Divine Punisher</b>: Converts their own buffs into direct power or energy.",
                    "<b>Divine Herald</b>: Reinforces allies while keeping them in good health."],
    "Botanist": ["Healers that make concoctions to take care of afflictions.",
                    "<b>Merciful Healer</b>: Uses medicinal herbs to treat all kinds of injuries.",
                    "<b>Graced Poisoner</b>: Uses poisonous herbs to inflict debuffs and ailments."],

    "Earthlain":["Common skills for characters of the Earthlain race.", "", ""],
    "Celestrian":["Common skills for characters of the Celestrian race.", "", ""],
    "Therian":["Common skills for characters of the Therian race.", "", ""],
    "Brouni":["Common skills for characters of the Brouni race.", "", ""],

    "Weapon Skills":["Skills borrowed from certain weapons.", "", ""],
    "Battle Items":["Consumable items meant to aid you in battle.", "", ""],
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
    class_description.innerText = descriptions[class_name][0]
    skill_list.appendChild(class_description)
    if (descriptions[class_name][1] != ""){
        mastery = document.createElement("ul")
        skill_list.appendChild(mastery)
        mastery1 = document.createElement("li")
        mastery1.innerHTML = descriptions[class_name][1]
        mastery.appendChild(mastery1)
        mastery2 = document.createElement("li")
        mastery2.innerHTML = descriptions[class_name][2]
        mastery.appendChild(mastery2)
    }
}

function add_skill_entry(skill_list, current_class, skill){
    var current_skill = current_class[skill]
    skill_table = document.createElement("table")
    skill_table.classList.add("skill_entry")
    //Separator for more visual clarity
    if (current_skill["Starter"] == "2"){
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
}

//Initiate page with the first class on the list
populate_list_categorized("Fencer")
