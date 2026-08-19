const data = {
    "Fighter": {
        "Provoke":{
            "Usage": "Technique (Debuff)",
            "Description": "Place a debuff on one enemy, which increases its aggro towards you.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["1", "2", "3", "4", "5"],
                "Duration": ["3", "4", "5", "6", "7"]
            }
        },
        "War Cry":{
            "Usage": "Technique (Buff, Field OK)",
            "Description": "Place a buff on the whole party, which increases ATK.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["5", "7", "9", "11", "13"],
                "ATK Stat↑": ["+8%", "+10%", "+12%", "+15%", "+18%"],
                "Duration": ["3", "4", "5", "6", "7"]
            }
        },
        "Raging Smash":{
            "Usage": "Technique (Weapon)",
            "Starter": "1",
            "Description": "Short-Range: Deal damage to one enemy.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "8", "11", "14", "17", "20", "23", "26", "29", "32"],
            }
        },
        "Sword Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases Attack Power when a Sword is equipped.",
            "Max Level": "10",
            "Data": ""
        },
        "Axe Mastery":{
            "Usage": "Passive",
            "Description": "Increases Attack Power when an Axe is equipped.",
            "Max Level": "10",
            "Data": ""
        },
        "Lance Mastery":{
            "Usage": "Passive",
            "Description": "Increases Attack Power when a Lance is equipped.",
            "Max Level": "10",
            "Data": ""
        },
        "Avenger":{
            "Usage": "Passive",
            "Description": "Chance to counterattack when taking physical damage.",
            "Max Level": "5",
            "Data": ""
        },
        "Double Attack":{
            "Usage": "Passive",
            "Description": "Chance for normal attacks to hit twice.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Paladin": {
        "Defender":{
            "Usage": "Technique (Buff)",
            "Description": "Place a buff on yourself, which increases Defense Power but lowers Attack Power.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "10", "12", "14", "16"],
                "Duration": ["3", "4", "5", "6", "7"]
            }
        },
        "Cover":{
            "Usage": "Technique (Buff, Field OK)",
            "Description": "Place a buff on yourself, which redirects single-target attacks to you. This buff has a chance to disappear each time you're hit.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "8", "10", "12", "14"],
                "Duration": ["3", "4", "5", "6", "7"]
            }
        },
        "Parry":{
            "Usage": "Technique (Buff, Field OK)",
            "Description": "Short-Range: Place a buff on yourself, which nullifies physical attacks received. This buff has a high chance to disappear each time you're hit.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "10", "12", "14", "16"],
                "Duration": ["3", "4", "5", "6", "7"]
            }
        },
        "Shield Bash":{
            "Usage": "Technique (Weapon)",
            "Starter": "1",
            "Description": "Shield: Deal damage to one enemy, with a chance to inflict Stun.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "8", "10", "12", "14"],
            }
        },
        "Heal":{
            "Usage": "Spell (Heal, Field OK)",
            "Description": "Restore HP to one ally.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "5", "7", "9", "11", "13", "15", "17", "19", "21"],
                "Healing Power": ["100%", "125%", "150%", "175%", "200%", "225%", "250%", "275%", "300%", "325%"],
            }
        },
        "Mini Auto-Recovery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Recover HP at the start of each turn.",
            "Max Level": "5",
            "Data": {
                "HP Gain": ["1%", "2%", "3%", "4%", "5%"],
            }
        },
        "Auto-Guard":{
            "Usage": "Passive",
            "Description": "If you're not Defending, there's a chance to automatically Defend against physical attacks.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Dark Knight": {
        "Berserker":{
            "Usage": "Technique (Buff)",
            "Description": "Place a buff on yourself, which increases Attack Power but lowers Defense Power.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "10", "12", "14", "16"],
                "Duration": ["3", "4", "5", "6", "7"]
            }
        },
        "Aura Eliminate":{
            "Usage": "Technique (Weapon)",
            "Starter": "1",
            "Description": "Short-Range: Deal damage to one enemy, with a chance to remove a buff on the target.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
            }
        },
        "Frost Slash":{
            "Usage": "Technique (Weapon)",
            "Description": "Sword: Deal Water damage to one enemy, with a chance to inflict Freeze.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "10", "13", "16", "19", "22", "25", "28", "31", "34"],
            }
        },
        "Geo Break":{
            "Usage": "Technique (Weapon)",
            "Description": "Axe: Deal Earth damage to one enemy, with a chance to inflict Petrify.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "12", "15", "18", "21", "24", "27", "30", "33", "36"],
            }
        },
        "Blood Rage":{
            "Usage": "Spell (Buff)",
            "Starter": "1",
            "Description": "Place a buff on yourself, which increases Max HP.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["27", "31", "35", "39", "43"],
                "Max HP↑": ["+20%", "+28%", "+36%", "?", "?"],
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Adaptation":{
            "Starter": "1",
            "Usage": "Passive",
            "Description": "Increases all elemental resistances.",
            "Max Level": "10",
            "Data": {
                "Resistance↑": ["+6", "+7", "+8", "+9", "+10", "+11", "+12", "+13", "+14", "+15"],
            }
        },
        "Preparation":{
            "Usage": "Passive",
            "Description": "Increases turn speed based on your missing HP.",
            "Max Level": "5",
            "Data": ""
        },
        "Dark Aura":{
            "Usage": "Passive",
            "Description": "When you're hit by a Short-Range attack, place multiple stat debuffs on the attacker. Raising skill level increases the amount of debuffs inflicted.",
            "Max Level": "5",
            "Data": {
                "Inflicted Debuffs": ["ATK", "DEF", "INT", "?", "?"],
                "Stats↓": ["-10%", "-10%", "-10%", "-10%", "-10%"]
            }
        },
    },
    "Valkyrie": {

    },
    "Samurai": {

    },
    "Dark Lord": {

    },
    "Magic User": {
        "Fireball":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Fire damage to one enemy.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "7", "9", "11", "13", "15", "17", "19", "21", "23"],
            }
        },
        "Ice Edge":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Fire damage to one enemy.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "7", "9", "11", "13", "15", "17", "19", "21", "23"],
            }
        },
        "Thunderbolt":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Fire damage to one enemy.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "7", "9", "11", "13", "15", "17", "19", "21", "23"],
            }
        },
        "Air Cutter":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Fire damage to one enemy.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "7", "9", "11", "13", "15", "17", "19", "21", "23"],
            }
        },
        "Stone Hammer":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Fire damage to one enemy.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "7", "9", "11", "13", "15", "17", "19", "21", "23"],
            }
        },
        "Heal":{
            "Usage": "Spell (Heal, Field OK)",
            "Starter": "1",
            "Description": "Restore HP to one ally.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["3", "5", "7", "9", "11", "13", "15", "17", "19", "21"],
                "Healing Power": ["100%", "125%", "150%", "175%", "200%", "225%", "250%", "275%", "300%", "325%"],
            }
        },
        "Poison":{
            "Usage": "Spell (Debuff)",
            "Starter": "1",
            "Description": "Attempt to inflict Poison on all enemies.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["4", "5", "6", "7", "8"],
            }
        },
    },
    "Sorceress": {
        "Fire Blast":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Fire damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "19", "23", "27", "31", "35", "39", "43", "47", "51"],
            }
        },
        "Ice Storm":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Fire damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "19", "23", "27", "31", "35", "39", "43", "47", "51"],
            }
        },
        "Thunder Chain":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Fire damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "19", "23", "27", "31", "35", "39", "43", "47", "51"],
            }
        },
        "Air Turbulence":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Fire damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "19", "23", "27", "31", "35", "39", "43", "47", "51"],
            }
        },
        "Stone Shower":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Fire damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "19", "23", "27", "31", "35", "39", "43", "47", "51"],
            }
        },
        "Blood Absorb":{
            "Usage": "Spell (Magic)",
            "Description": "Deal damage to one enemy. Recover HP equal to the damage dealt.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
            }
        },
        "Magic Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases magical Attack Power.",
            "Max Level": "10",
            "Data": ""
        },
        "Auto-Refresh":{
            "Usage": "Passive",
            "Description": "Recover TP at the start of each turn.",
            "Max Level": "10",
            "Data": {
                "TP Gain": ["2%", "4%", "6%", "8%", "10%"]
            }
        },
        "Concentrate":{
            "Usage": "Passive",
            "Description": "Decrease the chance of Chants, Songs and Dances being interrupted by taking damage.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Enchantress": {
        "Return":{
            "Usage": "Spell (Support, Field Only)",
            "Starter": "1",
            "Description": "Escape from the dungeon.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["36", "27", "18", "9", "1"],
            }
        },
        "Nurse":{
            "Usage": "Spell (Heal, Field OK)",
            "Starter": "1",
            "Description": "Remove ailments/debuffs on one ally. Raising skill level increases the amount of curable effects.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
            }
        },
        "Stun":{
            "Usage": "Spell (Debuff)",
            "Starter": "1",
            "Description": "Attempt to inflict Stun on one enemy.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["10", "12", "14", "16", "18"],
            }
        },
        "Freeze":{
            "Usage": "Spell (Debuff)",
            "Description": "Attempt to inflict Freeze on all enemies.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
            }
        },
        "Silence":{
            "Usage": "Spell (Debuff)",
            "Description": "Attempt to inflict Silence on all enemies.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
            }
        },
        "Paralyze":{
            "Usage": "Spell (Debuff)",
            "Description": "Attempt to inflict Patalysis on all enemies.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
            }
        },
        "Fire Enchant":{
            "Usage": "Spell (Buff, Field OK)",
            "Starter": "1",
            "Description": "Place a buff on one ally, which imbues their attacks with Fire.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Water Enchant":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on one ally, which imbues their attacks with Fire.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Lightning Enchant":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on one ally, which imbues their attacks with Fire.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Wind Enchant":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on one ally, which imbues their attacks with Fire.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Earth Enchant":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on one ally, which imbues their attacks with Fire.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Circle Brave":{
            "Usage": "Spell (Buff, Field OK)",
            "Starter": "1",
            "Description": "Place a buff on the whole party, which increases ATK.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
                "Duration": ["3", "4", "5", "6", "7"]
            }
        },
        "Circle Protect":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on the whole party, which increases DEF.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
                "Duration": ["3", "4", "5", "6", "7"]
            }
        },
        "Divine Shield":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on yourself, which decreases damage taken.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["24", "28", "32", "36", "40"],
                "Duration": ["3", "3", "3", "3", "3"]
            }
        },
        "Heal Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases the effect of healing skills.",
            "Max Level": "10",
            "Data": ""
        },
        "Mini Auto-Refresh":{
            "Usage": "Passive",
            "Description": "Recover TP at the start of each turn.",
            "Max Level": "5",
            "Data": ""
        },
        "Adaptation":{
            "Usage": "Passive",
            "Description": "Increases all elemental resistances.",
            "Max Level": "10",
            "Data": {
                "Resistance↑": ["+6", "+7", "+8", "+9", "+10", "+11", "+12", "+13", "+14", "+15"],
            }
        },
        "Fast Cast":{
            "Usage": "Passive",
            "Description": "Decreases Chant times.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Priestess": {
        "Light":{
            "Usage": "Spell (Support, Field Only)",
            "Description": "Temporarily illuminate the dungeon.",
            "Max Level": "5",
            "Data": ""
        },
        "Return":{
            "Usage": "Spell (Support, Field Only)",
            "Description": "Escape from the dungeon.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["36", "27", "18", "9", "1"],
            }
        },
        "Ice Storm":{
            "Usage": "Spell (Magic)",
            "Starter": "1",
            "Description": "Deal Fire damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "19", "23", "27", "31", "35", "39", "43", "47", "51"],
            }
        },
        "Circle Heal":{
            "Usage": "Spell (Heal, Field OK)",
            "Starter": "1",
            "Description": "Restore HP to the whole party.",
            "Max Level": "10",
            "Data": ""
        },
        "Nurse":{
            "Usage": "Spell (Heal, Field OK)",
            "Description": "Remove ailments/debuffs on one ally. Raising skill level increases the amount of curable effects.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
            }
        },
        "Resurrect":{
            "Usage": "Spell (Heal, Field OK)",
            "Description": "Revive one ally.",
            "Max Level": "5",
            "Data": ""
        },
        "Slow":{
            "Usage": "Spell (Debuff)",
            "Starter": "1",
            "Description": "Attempt to inflict Slow on all enemies.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
            }
        },
        "Divine Shield":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on yourself, which decreases damage taken.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["24", "28", "32", "36", "40"],
                "Duration": ["3", "3", "3", "3", "3"]
            }
        },
        "Heal Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases the effect of healing skills.",
            "Max Level": "10",
            "Data": ""
        },
        "Mini Auto-Recovery":{
            "Usage": "Passive",
            "Description": "Recover HP at the start of each turn.",
            "Max Level": "5",
            "Data": {
                "HP Gain": ["1%", "2%", "3%", "4%", "5%"],
            }
        },
        "Mini Auto-Refresh":{
            "Usage": "Passive",
            "Description": "Recover TP at the start of each turn.",
            "Max Level": "5",
            "Data": ""
        },
        "Fast Cast":{
            "Usage": "Passive",
            "Description": "Decreases Chant times.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Witch": {

    },
    "Magical Princess": {

    },
    "Sage": {

    },
    "Bishop": {

    },
    "Scout": {
        "Evade":{
            "Usage": "Technique (Buff, Field OK)",
            "Description": "Place a buff on yourself, which increases evasion.",
            "Max Level": "5",
            "Data": ""
        },
        "Cleanse":{
            "Usage": "Technique (Heal, Field OK)",
            "Description": "Remove ailments/debuffs on one ally. Raising skill level increases the amount of curable effects.",
            "Max Level": "5",
            "Data": ""
        },
        "Gold Steal":{
            "Usage": "Technique (Support)",
            "Starter": "1",
            "Description": "Attempt to steal Gold from one enemy.",
            "Max Level": "5",
            "Data": ""
        },
        "Sharp Stab":{
            "Usage": "Technique (Weapon)",
            "Starter": "1",
            "Description": "Dagger: Deal damage to one enemy. Always results in a critical hit.",
            "Max Level": "10",
            "Data": ""
        },
        "Poison Shot":{
            "Usage": "Technique (Weapon)",
            "Description": "Bow: Deal damage to one enemy, with a chance to inflict Poison.",
            "Max Level": "10",
            "Data": ""
        },
        "Dagger Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases Attack Power when a Dagger is equipped.",
            "Max Level": "10",
            "Data": ""
        },
        "Elusiveness":{
            "Usage": "Passive",
            "Description": "Increases the chance of successfully escaping from battle.",
            "Max Level": "5",
            "Data": ""
        },
        "Lucky Me":{
            "Usage": "Passive",
            "Description": "Increases Gold dropped by enemies.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Archer": {
        "Freeze Shot":{
            "Usage": "Technique (Weapon)",
            "Description": "Bow: Deal damage to one enemy, with a chance to inflict Freeze.",
            "Max Level": "10",
            "Data": ""
        },
        "Paralysis Shot":{
            "Usage": "Technique (Weapon)",
            "Description": "Bow: Deal damage to one enemy, with a chance to inflict Paralysis.",
            "Max Level": "10",
            "Data": ""
        },
        "Gravity Shot":{
            "Usage": "Technique (Weapon)",
            "Description": "Bow: Deal damage to one enemy, with a chance to inflict Slow.",
            "Max Level": "10",
            "Data": ""
        },
        "Arrow Rain":{
            "Usage": "Technique (Weapon)",
            "Description": "Bow: Deal damage to all enemies.",
            "Max Level": "10",
            "Data": ""
        },
        "Dagger Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases Attack Power when a Bow is equipped.",
            "Max Level": "10",
            "Data": ""
        },
        "Caution":{
            "Usage": "Passive",
            "Description": "Decreases the chance of enemy preemptive attacks.",
            "Max Level": "10",
            "Data": ""
        },
    },
    "Assassin": {
        "Sleep Sting":{
            "Usage": "Technique (Weapon)",
            "Description": "Short-Range: Deal damage to one enemy, with a chance to inflict Sleep.",
            "Max Level": "10",
            "Data": ""
        },
        "Silence Sting":{
            "Usage": "Technique (Weapon)",
            "Description": "Short-Range: Deal damage to one enemy, with a chance to inflict Silence.",
            "Max Level": "10",
            "Data": ""
        },
        "Stun Sting":{
            "Usage": "Technique (Weapon)",
            "Description": "Short-Range: Deal damage to one enemy, with a chance to inflict Stun.",
            "Max Level": "10",
            "Data": ""
        },
        "Adaptation":{
            "Starter": "1",
            "Usage": "Passive",
            "Description": "Increases all elemental resistances.",
            "Max Level": "10",
            "Data": {
                "Resistance↑": ["+6", "+7", "+8", "+9", "+10", "+11", "+12", "+13", "+14", "+15"],
            }
        },
        "Murder":{
            "Usage": "Passive",
            "Description": "Critical hits gain a chance to inflict instakill.",
            "Max Level": "5",
            "Data": ""
        },
        "Awareness":{
            "Usage": "Passive",
            "Description": "Increases the chance of the party getting a preemtive attack.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Sniper": {

    },
    "Treasure Hunter": {

    },
    "Kunoichi": {

    },
    "Maid": {
        "First Aid":{
            "Usage": "Technique (Heal)",
            "Description": "Restore HP to one ally.",
            "Max Level": "5",
            "Data": {
                "HP Gain": ["12%", "14%", "16%", "18%", "20%"]
            }
        },
        "Cook":{
            "Usage": "Technique (Heal)",
            "Description": "Restore TP to one ally.",
            "Max Level": "5",
            "Data": {
                "TP Gain": ["10%", "11%", "12%", "13%", "14%"]
            }
        },
        "Self-Sacrifice":{
            "Usage": "Technique (Heal)",
            "Description": "Spend all TP, then restore TP to another ally based on the amount spent.",
            "Max Level": "5",
            "Data": {
                "TP Transfer": ["100%", "110%", "120%", "130%", "140%"]
            }
        },
        "Clean":{
            "Usage": "Technique (Buff)",
            "Starter": "1",
            "Description": "Place a buff on yourself, which increases turn speed.",
            "Max Level": "5",
            "Data": {
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Lullaby":{
            "Usage": "Spell (Debuff)",
            "Starter": "1",
            "Description": "Attempt to inflict Sleep on one enemy.",
            "Max Level": "5",
            "Data": ""
        },
        "Maid Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases the effect of Maid skills.",
            "Max Level": "10",
            "Data": {
                "Healing↑\n(Flat Bonus)": ["+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%"]
            }
        },
        "Generous Heart":{
            "Usage": "Passive",
            "Description": "Restore HP and TP to the whole party when leaving a battle.",
            "Max Level": "5",
            "Data": {
                "HP Gain": ["6%", "7%", "8%", "9%", "10%"],
                "TP Gain": ["3%", "4%", "5%", "6%", "7%"]
            }
        },
    },
    "Bard": {
        "Spiritual Fantasia":{
            "Usage": "Spell (Buff)",
            "Description": "Start a Song that places a buff on the whole party, which increases magical Attack Power.",
            "Max Level": "10",
            "Data": ""
        },
        "Sacred Hymn":{
            "Usage": "Spell (Buff)",
            "Description": "Start a Song that places a buff on the whole party, which increases magical Defense Power.",
            "Max Level": "10",
            "Data": ""
        },
        "Replenishing Carol":{
            "Usage": "Spell (Buff)",
            "Description": "Start a Song that places a buff on the whole party, which restores HP at the start of each turn.",
            "Max Level": "10",
            "Data": ""
        },
        "Blissful Chorale":{
            "Usage": "Spell (Buff)",
            "Description": "Start a Song that places a buff on the whole party, which restores TP at the start of each turn.",
            "Max Level": "10",
            "Data": ""
        },
        "Experience Paean":{
            "Usage": "Spell (Buff)",
            "Description": "Start a Song that places a buff on the whole party, which increases EXP gain.",
            "Max Level": "10",
            "Data": ""
        },
        "Song Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases the effect of Song skills.",
            "Max Level": "10",
            "Data": ""
        },
    },
    "Dancer": {
        "Fascinating Waltz":{
            "Usage": "Technique (Debuff)",
            "Description": "Start a Dance that places a debuff on all enemies, which decreases physical Attack Power.",
            "Max Level": "10",
            "Data": ""
        },
        "Gloomy Tango":{
            "Usage": "Technique (Debuff)",
            "Description": "Start a Dance that places a debuff on all enemies, which decreases accuracy.",
            "Max Level": "10",
            "Data": ""
        },
        "Gravitating Polka":{
            "Usage": "Technique (Debuff)",
            "Description": "Start a Dance that places a debuff on all enemies, which decreases evasion.",
            "Max Level": "10",
            "Data": ""
        },
        "Alluring Samba":{
            "Usage": "Technique (Debuff)",
            "Description": "Start a Dance that places a debuff on all enemies, which decreases physical Defense Power.",
            "Max Level": "10",
            "Data": ""
        },
        "Song Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases the effect of Dance skills.",
            "Max Level": "10",
            "Data": ""
        },
    },
    "Songstress": {

    },
    "Joshikosayer": {

    },
    "Mainstream Idol": {

    },
}

const descriptions = {
    "Fighter":      "",
    "Paladin":      "",
    "Dark Knight":  "",
    "Valkyrie":     "",
    "Samurai":      "",
    "Dark Lord":    "",
    "Magic User":   "",
    "Sorceress":    "",
    "Enchantress":  "",
    "Priestess":    "",
    "Witch":        "",
    "Magical Princess": "",
    "Sage":         "",
    "Bishop":       "",
    "Scout":        "",
    "Archer":       "",
    "Assassin":     "",
    "Sniper":       "",
    "Treasure Hunter": "",
    "Kunoichi":     "",
    "Maid":         "",
    "Bard":         "",
    "Dancer":       "",
    "Songstress":   "",
    "Joshikosayer": "",
    "Mainstream Idol": "",
}

function toggle_data(table_id){
    document.getElementById(table_id).classList.toggle("show_table");
}

function reset_list(class_name){
    var skill_list = document.getElementById("skill_list")
    var sidebar = document.getElementById("sidebar")

    //Remove all elements in the list container
    sidebar.focus()
    sidebar.blur()
    skill_list.focus()
    skill_list.blur()
    while(skill_list.hasChildNodes()){
        skill_list.removeChild(skill_list.firstChild)
    }

    //Add class name at the top
    var name_banner = document.createElement("h2")
    name_banner.style.margin = "20px"
    name_banner.innerText = class_name
    skill_list.appendChild(name_banner)

    //Add class description below its name
    var class_description = document.createElement("p")
    class_description.style.marginLeft = "10px"
    class_description.innerText = descriptions[class_name]
    skill_list.appendChild(class_description)
}

function add_skill_entry(current_class, skill_name){
    var skill_list = document.getElementById("skill_list")
    var skill = current_class[skill_name]
    var entry = document.createElement("table")
    entry.classList.add("skill_entry")
    
    //Separator for more visual clarity
    if (skill.hasOwnProperty("Starter")){
        entry.style.marginTop = "15px"
    }
    skill_list.appendChild(entry)
    
    //Row for name
    var first_row = document.createElement("tr")
    entry.appendChild(first_row)
    var name_header = document.createElement("th")
    first_row.appendChild(name_header)
    name_header.classList.add("skill_name")
    name_header.innerText = skill_name
    name_header.colSpan = 2

    //Row for usage type and unlock condition
    var second_row = document.createElement("tr")
    entry.appendChild(second_row)
    if (skill.hasOwnProperty("Usage")){
        var usage_cell = document.createElement("td")
        second_row.appendChild(usage_cell)
        usage_cell.innerText = skill["Usage"]
        if (skill.hasOwnProperty("Unlock")){
            usage_cell.style.width = "240px"
            var unlock_cell = document.createElement("td")
            second_row.appendChild(unlock_cell)
            unlock_cell.innerText = "Unlock: "+skill["Unlock"]
        }
    }

    //Row for the description and level up table
    var third_row = document.createElement("tr")
    entry.appendChild(third_row)
    var data_block = document.createElement("td")
    third_row.appendChild(data_block)

    //Make toggable
    data_block.classList.add("hide_table")
    data_block.style.textAlign = "left"
    data_block.colSpan = 2
    data_block.id = skill_name
    first_row.addEventListener("click", function(){
        toggle_data(skill_name)
    })

    //Add text description
    var description = document.createElement("p")
    data_block.appendChild(description)
    description.innerHTML = skill["Description"]

    //Table with level up data
    var levels_table = document.createElement("table")
    data_block.appendChild(levels_table)
    levels_table.classList.add("levels_table")
    var levels_row = document.createElement("tr")
    levels_table.appendChild(levels_row)
    //If there's no data, leave table empty
    if (skill["Data"] !== ""){
        var start_level = document.createElement("th")
        start_level.innerText = "Level"
        levels_row.appendChild(start_level)
    }
    for (let i = 1; i <= skill["Max Level"]; i++){
        var level_cell = document.createElement("th")
        levels_row.appendChild(level_cell)
        if (skill.hasOwnProperty("Levels")){
            level_cell.innerText = skill["Levels"][i-1]
        }
        else{
            level_cell.innerText = i
        }
        if (skill.hasOwnProperty("Natural Level")){
            if (i > skill["Natural Level"]){
                level_cell.style.backgroundColor = "#ffa44a"
            }
        }
    }
    //Add each row of skill data
    var latest_row
    for (const effect_type in skill["Data"]){
        if (effect_type == "Separator"){
            latest_row.style.borderBottom = "4px solid"
            continue
        }
        var effect_row = document.createElement("tr")
        latest_row = effect_row
        levels_table.appendChild(effect_row)

        var effect_name = document.createElement("th")
        effect_name.innerText = effect_type
        effect_row.appendChild(effect_name)
        effect = skill["Data"][effect_type]
        var latest_value = ""
        for (const value in effect){
            if (effect[value] == latest_value.innerText) {
                latest_value.colSpan = latest_value.colSpan+1
                continue
            }
            var effect_cell = document.createElement("td")
            effect_cell.style.padding = "2px"
            effect_cell.innerText = effect[value]
            effect_row.appendChild(effect_cell)
            latest_value = effect_cell
        }
    }
}

function populate_list(class_name){
    //Clear list and reset class name and description
    reset_list(class_name)

    //Fill in the skill entries
    var current_class = data[class_name]
    for (const skill in current_class){
        add_skill_entry(current_class, skill)
    }
    final_line = document.createElement("p")
    skill_list.appendChild(final_line)
}

function populate_list_categorized(class_name){
    //Clear list and reset class name and description
    reset_list(class_name)

    //Add category headers
    var skill_list = document.getElementById("skill_list")
    var current_class = data[class_name]
    for (const category_name in current_class){
        var category_header = document.createElement("h3")
        category_header.innerText = category_name
        skill_list.appendChild(category_header)

        //Fill in the skill entries
        var category = current_class[category_name]
        for (const skill_name in category){
            add_skill_entry(category, skill_name)
        }
    }
    final_line = document.createElement("p")
    skill_list.appendChild(final_line)
}

//Initiate page with the first class on the list
populate_list("Fighter")
