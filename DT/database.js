const data = {
    "Fighter": {
        "Provoke":{
            "Usage": "Technique (Debuff)",
            "Description": "Place a debuff on one enemy, which increases its aggro towards you.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["1", "2", "3", "4", "5"],
                "Duration": ["2", "3", "4", "5", "6"]
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
            "Description": "Increases Physical Attack when a Sword is equipped.",
            "Max Level": "10",
            "Data": ""
        },
        "Axe Mastery":{
            "Usage": "Passive",
            "Description": "Increases Physical Attack when an Axe is equipped.",
            "Max Level": "10",
            "Data": ""
        },
        "Lance Mastery":{
            "Usage": "Passive",
            "Description": "Increases Physical Attack when a Lance is equipped.",
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
            "Description": "Place a buff on yourself, which increases Physical Defense but lowers Physical Attack.",
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
                "TP Cost": ["3", "5", "7", "10", "12", "14", "17", "19", "21", "24"],
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
            "Description": "Place a buff on yourself, which increases Physical Attack but lowers Physical Defense.",
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
                "TP Cost": ["5", "6", "7", "8", "9", "10", "12", "14", "16", "18"],
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
                "Max HP↑": ["+20%", "+28%", "+36%", "+45%", "+50%"],
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Adaptation":{
            "Starter": "1",
            "Usage": "Passive",
            "Description": "Increases all elemental resistances.",
            "Max Level": "10",
            "Data": {
                "Resistances↑": ["+6", "+7", "+8", "+9", "+10", "+11", "+12", "+13", "+14", "+15"],
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
                "Inflicted Debuffs": ["ATK", "DEF", "INT", "RES", "DEX+AGI"],
                "Stats↓": ["-10%", "-10%", "-10%", "-10%", "-10%"]
            }
        },
    },
    "Valkyrie": {
        "Material Guard":{
            "Usage": "Technique (Buff, Field OK)",
            "Description": "Place a buff on the whole party, which decreases the next instance of physical damage taken by each target.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["18", "21", "24", "27", "30", "33", "36", "38", "40", "42"],
            }
        },
        "Spell Guard":{
            "Usage": "Technique (Buff, Field OK)",
            "Description": "Place a buff on the whole party, which decreases the next instance of magical damage taken by each target.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["18", "21", "24", "27", "30", "33", "36", "38", "40", "42"],
            }
        },
        "Gust Thrust":{
            "Usage": "Technique (Weapon)",
            "Starter": "1",
            "Description": "Lance: Deal Wind damage to one enemy, with a chance to inflict Silence.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["7", "10", "13", "16", "19", "22", "25", "28", "31", "34"],
            }
        },
        "Daedalus Attack":{
            "Usage": "Technique (Weapon)",
            "Description": "Lance: Deal damage 3~5 times to random enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["36", "39", "41", "44", "47", "51", "55", "59", "65", "69"],
            }
        },
        "Circle Heal":{
            "Usage": "Spell (Heal, Field OK)",
            "Starter": "1",
            "Description": "Restore HP to the whole party.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["15", "20", "25", "30", "35", "40", "44", "48", "52", "56"],
            }
        },
        "Protect":{
            "Usage": "Spell (Buff, Field OK)",
            "Starter": "1",
            "Description": "Place a buff on one ally, which increases DEF.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["9", "11", "13", "15", "17"],
                "DEF Stat↑": ["+10%", "+14%", "+18%", "+22%", "+25%"],
                "Duration": ["4", "5", "6", "7", "8"]
            }
        },
        "Moon Curtain":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on the whole party, which increases all elemental resistances.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["16", "20", "24", "28", "32"],
                "Resistances↑": ["+5", "+10", "+15", "+20", "+25"],
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Auto-Refresh":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Recover TP at the start of each turn.",
            "Max Level": "5",
            "Data": {
                "TP Gain": ["2%", "4%", "6%", "8%", "10%"]
            }
        },
        "Guts":{
            "Usage": "Passive",
            "Description": "Chance to survive lethal damage with 1 HP.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Samurai": {
        "Last Stand":{
            "Usage": "Technique (Buff)",
            "Description": "Place a buff on yourself, which increases the critical rate of attacks used by you or agaisnt you.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["12", "14", "16", "18", "20"],
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Backward Swing":{
            "Usage": "Technique (Weapon)",
            "Starter": "1",
            "Description": "Katana: Deal damage to one enemy, with a chance to inflict Paralysis.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "8", "10", "12", "14", "16", "18", "20", "22", "24"],
            }
        },
        "Halving Slice":{
            "Usage": "Technique (Weapon)",
            "Description": "Katana: Deal damage to all enemies, with a chance to inflict Instakill.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["38", "42", "46", "50", "54", "58", "62", "66", "70", "74"],
            }
        },
        "Armor Penetration":{
            "Usage": "Technique (Weapon)",
            "Description": "Katana: Deal damage to one enemy, ignoring its DEF. Places a debuff on the target, which decreases DEF.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["14", "16", "18", "20", "22", "24", "26", "28", "30", "32"],
            }
        },
        "Onikagura":{
            "Usage": "Technique (Weapon)",
            "Description": "Katana: Deal damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["22", "26", "30", "34", "38", "43", "48", "53", "58", "63"],
            }
        },
        "Moonlight Purgatory":{
            "Usage": "Technique (Weapon)",
            "Description": "Katana: Deal damage 3 times to one enemy. No effect against Undead enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["32", "34", "36", "38", "40", "43", "46", "49", "52", "55"],
            }
        },
        "Katana Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases Physical Attack when a Katana is equipped.",
            "Max Level": "10",
            "Data": ""
        },
        "Mind's Eye":{
            "Usage": "Passive",
            "Description": "Chance to nullify attacks against you and counterattack.",
            "Max Level": "5",
            "Data": ""
        },
        "Triple Attack":{
            "Usage": "Passive",
            "Description": "Chance for normal attacks to hit three times.",
            "Max Level": "5",
            "Data": ""
        },
        "Flowing Water Stance":{
            "Usage": "Passive",
            "Description": "Increases evasion against Stab attacks.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Dark Lord": {
        "Attract":{
            "Usage": "Technique (Debuff)",
            "Description": "Place a debuff on all enemies, which increases aggro towards you.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["4", "5", "6", "7", "8"],
                "Duration": ["2", "3", "4", "5", "6"]
            }
        },
        "Blood Drain":{
            "Usage": "Technique (Weapon)",
            "Starter": "1",
            "Description": "Short-Range: Deal damage to one enemy. Recover HP based on the damage dealt.",
            "Max Level": "10",
            "Data": ""
        },
        "Soul Drain":{
            "Usage": "Technique (Weapon)",
            "Description": "Short-Range: Deal damage to one enemy. Recover TP based on the damage dealt.",
            "Max Level": "10",
            "Data": ""
        },
        "Shock Spiral":{
            "Usage": "Technique (Weapon)",
            "Description": "Short-Range: Deal Lightning damage to all enemies, with a chance to inflict Paralysis.",
            "Max Level": "10",
            "Data": ""
        },
        "Megaton Press":{
            "Usage": "Technique (Weapon)",
            "Description": "Axe: Deal damage to one enemy. If there are other enemies right after it in the turn timeline, repeat the attack against them.",
            "Max Level": "10",
            "Data": ""
        },
        "Life Bring":{
            "Usage": "Spell (Magic)",
            "Starter": "1",
            "Description": "Deal damage to all enemies. Recover HP equal to the damage dealt.",
            "Max Level": "10",
            "Data": ""
        },
        "Brave":{
            "Usage": "Spell (Buff, Field OK)",
            "Starter": "1",
            "Description": "Place a buff on one ally, which increases ATK.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["9", "11", "13", "15", "17"],
                "ATK Stat↑": ["+10%", "+13%", "+16%", "+19%", "+22%"],
                "Duration": ["4", "5", "6", "7", "8"]
            }
        },
        "Grudge Accumulator":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "When attacked, recover TP based on the damage taken.",
            "Max Level": "5",
            "Data": ""
        },
        "Dark Quest":{
            "Usage": "Passive",
            "Description": "Increases ATK if you have a debuff/ailment.",
            "Max Level": "5",
            "Data": ""
        },
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
            "Description": "Increases Magic Attack.",
            "Max Level": "10",
            "Data": ""
        },
        "Auto-Refresh":{
            "Usage": "Passive",
            "Description": "Recover TP at the start of each turn.",
            "Max Level": "5",
            "Data": {
                "TP Gain": ["2%", "4%", "6%", "8%", "10%"]
            }
        },
        "Concentrate":{
            "Usage": "Passive",
            "Description": "Decreases the chance of Chants, Songs and Dances being interrupted by taking damage.",
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
            "Description": "Place a buff on one ally, which imbues their attacks with Water.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Lightning Enchant":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on one ally, which imbues their attacks with Lightning.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Wind Enchant":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on one ally, which imbues their attacks with Wind.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10"],
                "Duration": ["5", "6", "7", "8", "9"]
            }
        },
        "Earth Enchant":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on one ally, which imbues their attacks with Earth.",
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
                "Resistances↑": ["+6", "+7", "+8", "+9", "+10", "+11", "+12", "+13", "+14", "+15"],
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
        "Loose Spirit":{
            "Usage": "Spell (Buff)",
            "Description": "Place a buff on yourself, which increases Magic Attack but decreases Magic Accuracy.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["12", "16", "20", "24", "28"],
                "Duration": ["4", "5", "6", "7", "8"]
            }
        },
        "Inferno":{
            "Usage": "Spell (Magic)",
            "Starter": "1",
            "Description": "Deal Fire damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["38", "45", "52", "59", "66", "74", "82", "90", "98", "106"],
            }
        },
        "Diamond Dust":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Ice damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["38", "45", "52", "59", "66", "74", "82", "90", "98", "106"],
            }
        },
        "Lightning":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Lightning damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["38", "45", "52", "59", "66", "74", "82", "90", "98", "106"],
            }
        },
        "Tornado":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Wind damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["38", "45", "52", "59", "66", "74", "82", "90", "98", "106"],
            }
        },
        "Meteor":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Earth damage to all enemies.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["38", "45", "52", "59", "66", "74", "82", "90", "98", "106"],
            }
        },
        "Soul Absorb":{
            "Usage": "Spell (Magic)",
            "Description": "Deal damage to one enemy. Recover TP equal to the calculated damage.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
            }
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
        "Fast Cast":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Decreases Chant times.",
            "Max Level": "5",
            "Data": ""
        },
        "Economy":{
            "Usage": "Passive",
            "Description": "Decreases TP costs.",
            "Max Level": "5",
            "Data": {
                "TP Cost↓": ["-10%", "-15%", "-20%", "-25%", "-30%"]
            }
        },
    },
    "Magical Princess": {
        "Cover":{
            "Usage": "Technique (Buff, Field OK)",
            "Description": "Place a buff on yourself, which redirects single-target attacks to you. This buff has a chance to disappear each time you're hit.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "8", "10", "12", "14"],
                "Duration": ["3", "4", "5", "6", "7"]
            }
        },
        "Magic Barrier":{
            "Usage": "Technique (Buff, Field OK)",
            "Description": "Place a buff on the whole party, which decreases magical damage taken.",
            "Max Level": "10",
            "Data": ""
        },
        "Magical Change":{
            "Usage": "Technique (Buff, Field OK)",
            "Description": "Place a buff on yourself, which increases ATK, DEF, INT, RES, DEX and AGI.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["44", "48", "52", "57", "62"],
                "Stats↑": ["+20%", "+22%", "+24%", "+27%", "+30%"],
                "Duration": ["3", "3", "4", "4", "5"]
            }
        },
        "Magical Slash":{
            "Usage": "Technique (Weapon)",
            "Starter": "1",
            "Description": "Sword: Deal damage to all enemies.",
            "Max Level": "10",
            "Data": ""
        },
        "Rainbow Flash":{
            "Usage": "Spell (Magic)",
            "Description": "Deal damage to all enemies.",
            "Max Level": "10",
            "Data": ""
        },
        "Accelerator":{
            "Usage": "Spell (Buff, Field OK)",
            "Starter": "1",
            "Description": "Place a buff on one ally, which increases turn speed.",
            "Max Level": "5",
            "Data": ""
        },
        "Illusion":{
            "Usage": "Spell (Buff)",
            "Description": "Place a buff on yourself, which nullifies damage taken a certain number of times.",
            "Max Level": "5",
            "Data": ""
        },
        "Sword Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases Physical Attack when a Sword is equipped.",
            "Max Level": "10",
            "Data": ""
        },
        "Double Attack":{
            "Usage": "Passive",
            "Description": "Chance for normal attacks to hit twice.",
            "Max Level": "5",
            "Data": ""
        },
        "Guts":{
            "Usage": "Passive",
            "Description": "Chance to survive lethal damage with 1 HP.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Sage": {
        "Identify":{
            "Usage": "Technique (Support, Field Only)",
            "Description": "Attempt to identify an item.",
            "Max Level": "5",
            "Data": ""
        },
        "Terrorize":{
            "Usage": "Spell (Debuff)",
            "Starter": "1",
            "Description": "Attempt to inflict Stun on all enemies.",
            "Max Level": "5",
            "Data": ""
        },
        "Sleep":{
            "Usage": "Spell (Debuff)",
            "Description": "Attempt to inflict Sleep on all enemies.",
            "Max Level": "5",
            "Data": ""
        },
        "Death":{
            "Usage": "Spell (Debuff)",
            "Description": "Attempt to inflict Instakill on one enemy.",
            "Max Level": "5",
            "Data": ""
        },
        "Petrify":{
            "Usage": "Spell (Debuff)",
            "Description": "Attempt to inflict Petrify on all enemies.",
            "Max Level": "5",
            "Data": ""
        },
        "Dispel":{
            "Usage": "Spell (Buff)",
            "Starter": "1",
            "Description": "Attempt to remove buffs from all enemies.",
            "Max Level": "5",
            "Data": ""
        },
        "Stab Guard":{
            "Usage": "Spell (Buff, Field OK)",
            "Starter": "1",
            "Description": "Place a buff on one ally, which increases Stab resistance.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "9", "10", "11", "12"],
                "Resistance↑": ["+18", "+24", "+28", "+32", "+36"]
            }
        },
        "Slash Guard":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on one ally, which increases Slash resistance.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "9", "10", "11", "12"],
                "Resistance↑": ["+18", "+24", "+28", "+32", "+36"]
            }
        },
        "Bash Guard":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on one ally, which increases Bash resistance.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "9", "10", "11", "12"],
                "Resistance↑": ["+18", "+24", "+28", "+32", "+36"]
            }
        },
        "Amplify":{
            "Usage": "Spell (Buff)",
            "Description": "Place a buff on one ally, which increases Max HP.",
            "Max Level": "10",
            "Data": ""
        },
        "Sun Veil":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on the whole party, which increases Magic Defense.",
            "Max Level": "5",
            "Data": ""
        },
        "Accelerator":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on one ally, which increases turn speed.",
            "Max Level": "5",
            "Data": ""
        },
        "Economy":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Decreases TP costs.",
            "Max Level": "5",
            "Data": {
                "TP Cost↓": ["-10%", "-15%", "-20%", "-25%", "-30%"]
            }
        },
    },
    "Bishop": {
        "Holy Gavel":{
            "Usage": "Technique (Weapon)",
            "Description": "Mace: Deal damage to one enemy.",
            "Max Level": "10",
            "Data": ""
        },
        "Justice":{
            "Usage": "Technique (Weapon)",
            "Description": "Mace: Deal damage to one enemy. Places a debuff on the target, which decreases DEF.",
            "Max Level": "10",
            "Data": ""
        },
        "Shine Curse":{
            "Usage": "Spell (Magic)",
            "Starter": "1",
            "Description": "Deal damage to all enemies. Only affects Undead enemies.",
            "Max Level": "10",
            "Data": ""
        },
        "Full Heal":{
            "Usage": "Spell (Heal, Field OK)",
            "Starter": "1",
            "Description": "Fully restore HP to one ally.",
            "Max Level": "5",
            "Data": ""
        },
        "Circle Nurse":{
            "Usage": "Spell (Heal, Field OK)",
            "Description": "Remove ailments/debuffs from the whole party. Raising skill level increases the amount of curable effects.",
            "Max Level": "10",
            "Data": ""
        },
        "Sun Veil":{
            "Usage": "Spell (Buff, Field OK)",
            "Starter": "1",
            "Description": "Place a buff on the whole party, which increases Magic Defense.",
            "Max Level": "5",
            "Data": ""
        },
        "Moon Curtain":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on the whole party, which increases all elemental resistances.",
            "Max Level": "5",
            "Data": ""
        },
        "Insurance":{
            "Usage": "Spell (Buff, Field OK)",
            "Description": "Place a buff on yourself, which will immediately revive you upon death.",
            "Max Level": "5",
            "Data": ""
        },
        "Mace Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases Physical Attack when a Mace is equipped.",
            "Max Level": "10",
            "Data": ""
        },
        "Double Attack":{
            "Usage": "Passive",
            "Description": "Chance for normal attacks to hit twice.",
            "Max Level": "5",
            "Data": ""
        },
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
            "Description": "Increases Physical Attack when a Dagger is equipped.",
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
        "Bow Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases Physical Attack when a Bow is equipped.",
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
                "Resistances↑": ["+6", "+7", "+8", "+9", "+10", "+11", "+12", "+13", "+14", "+15"],
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
            "Description": "Increases the chance of the party getting a preemptive attack.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Sniper": {
        "Aim":{
            "Usage": "Technique (Buff, Field OK)",
            "Description": "Place a buff on yourself, which increases accuracy.",
            "Max Level": "10",
            "Data": ""
        },
        "Chain Spike":{
            "Usage": "Technique (Weapon)",
            "Starter": "1",
            "Description": "Bow: Deal damage multiple times to one enemy, with diminishing power.",
            "Max Level": "10",
            "Data": ""
        },
        "Spiral Arrow":{
            "Usage": "Technique (Weapon)",
            "Description": "Bow: Deal damage to one enemy.",
            "Max Level": "5",
            "Data": ""
        },
        "Guided Shot":{
            "Usage": "Technique (Weapon)",
            "Description": "Bow: Deal damage to one enemy. Cannot miss.",
            "Max Level": "5",
            "Data": ""
        },
        "Star Dust Arrow":{
            "Usage": "Technique (Weapon)",
            "Description": "Bow: Prepare multiple attacks that will hit several turns later (visible on the timeline), each dealing damage multiple times to random enemies.",
            "Max Level": "5",
            "Data": ""
        },
        "Warning Shot":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "At the start of each enemy turn, there's a chance to perform a weak attack that interrupts its turn.",
            "Max Level": "5",
            "Data": ""
        },
        "Support Shot":{
            "Usage": "Passive",
            "Description": "When an ally attacks an enemy, there's a chance to perform a follow up attack.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Treasure Hunter": {
        "Identify":{
            "Usage": "Technique (Support, Field Only)",
            "Description": "Attempt to identify an item.",
            "Max Level": "5",
            "Data": ""
        },
        "Trap Search":{
            "Usage": "Technique (Support, Field Only)",
            "Description": "Attempt to identify an item.",
            "Max Level": "5",
            "Data": ""
        },
        "Whistle":{
            "Usage": "Spell (Support, Field Only)",
            "Description": "Increase the enemy encounter rate.",
            "Max Level": "5",
            "Data": ""
        },
        "Light":{
            "Usage": "Spell (Support, Field Only)",
            "Description": "Temporarily illuminate the dungeon.",
            "Max Level": "5",
            "Data": ""
        },
        "Fleet Foot":{
            "Usage": "Technique (Buff, Field Ok)",
            "Starter": "1",
            "Description": "Place a buff on yourself, which increases turn speed.",
            "Max Level": "10",
            "Data": ""
        },
        "Item Steal":{
            "Usage": "Technique (Support)",
            "Starter": "1",
            "Description": "Attempt to steal an item from an enemy.",
            "Max Level": "5",
            "Data": ""
        },
        "Pursuit Stab":{
            "Usage": "Technique (Weapon)",
            "Starter": "1",
            "Description": "Dagger: Deal damage to one enemy. Becomes stronger based on the buffs/debuffs on the target.",
            "Max Level": "5",
            "Data": ""
        },
        "Chain Spike":{
            "Usage": "Technique (Weapon)",
            "Description": "Bow: Deal damage multiple times to one enemy, with diminishing power.",
            "Max Level": "10",
            "Data": ""
        },
        "Item Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases the effect of HP/TP recovery items used in battle.",
            "Max Level": "10",
            "Data": ""
        },
        "Triple Attack":{
            "Usage": "Passive",
            "Description": "Chance for normal attacks to hit three times.",
            "Max Level": "5",
            "Data": ""
        },
        "Treasure Hunt":{
            "Usage": "Passive",
            "Description": "Increases item drop rates.",
            "Max Level": "5",
            "Data": ""
        },
        "Recycle":{
            "Usage": "Passive",
            "Description": "Chance to keep consumable items after using them.",
            "Max Level": "5",
            "Data": ""
        },

    },
    "Kunoichi": {
        "Phoenix":{
            "Usage": "Technique (Weapon)",
            "Description": "Projectile: Deal damage to all enemies. Places a debuff that decreases turn speed.",
            "Max Level": "10",
            "Data": ""
        },
        "Shadow Clone":{
            "Usage": "Spell (Buff)",
            "Starter": "1",
            "Description": "Place a buff on yourself, which nullifies damage taken a certain number of times.",
            "Max Level": "5",
            "Data": ""
        },
        "Shadow Sew":{
            "Usage": "Spell (Debuff)",
            "Description": "Attempt to place a debuff on one enemy, which disables skill usage. Only works on lower-level enemies.",
            "Max Level": "5",
            "Data": ""
        },
        "Light Scroll":{
            "Usage": "Spell (Defuff)",
            "Description": "Place a debuff on all enemies, which decreases accuracy.",
            "Max Level": "5",
            "Data": ""
        },
        "Fire Scroll":{
            "Usage": "Spell (Magic)",
            "Starter": "1",
            "Description": "Deal Fire HP-based damage to all enemies. Places a debuff that decreases Physical Attack.",
            "Max Level": "5",
            "Data": ""
        },
        "Water Scroll":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Water HP-based damage to all enemies. Places a debuff that decreases Magic Defense.",
            "Max Level": "5",
            "Data": ""
        },
        "Lightning Scroll":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Lightning HP-based damage to all enemies. Places a debuff that decreases turn speed.",
            "Max Level": "5",
            "Data": ""
        },
        "Wind Scroll":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Wind HP-based damage to all enemies. Places a debuff that decreases evasion.",
            "Max Level": "5",
            "Data": ""
        },
        "Earth Scroll":{
            "Usage": "Spell (Magic)",
            "Description": "Deal Earth HP-based damage to all enemies. Places a debuff that decreases Physical Defense.",
            "Max Level": "5",
            "Data": ""
        },
        "Katana Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases Physical Attack when a Katana is equipped.",
            "Max Level": "10",
            "Data": ""
        },
        "Projectile Mastery":{
            "Usage": "Passive",
            "Description": "Increases Physical Attack when a Projectile is equipped.",
            "Max Level": "10",
            "Data": ""
        },
        "Dual Wield":{
            "Usage": "Passive",
            "Description": "Allows you to equip 2 one-handed weapons at the same time, gaining a percentage of the ATK on the secondady one.",
            "Max Level": "10",
            "Data": ""
        },
        "Barrage":{
            "Usage": "Passive",
            "Description": "Chance for normal attacks to hit twice.",
            "Max Level": "10",
            "Data": ""
        },
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
            "Description": "Start a Song that places a buff on the whole party, which increases Magic Attack.",
            "Max Level": "10",
            "Data": ""
        },
        "Sacred Hymn":{
            "Usage": "Spell (Buff)",
            "Description": "Start a Song that places a buff on the whole party, which increases Magic Defense.",
            "Max Level": "10",
            "Data": ""
        },
        "Replenishing Carol":{
            "Usage": "Spell (Buff)",
            "Description": "Start a Song that places a buff on the whole party, which restores HP at the start of each turn.",
            "Max Level": "10",
            "Data": {
                "HP Gain": ["20", "30", "40", "50", "60", "75", "90", "110", "140", "180"]
            }
        },
        "Blissful Chorale":{
            "Usage": "Spell (Buff)",
            "Description": "Start a Song that places a buff on the whole party, which restores TP at the start of each turn.",
            "Max Level": "10",
            "Data": {
                "TP Gain": ["5", "6", "7", "8", "10", "12", "14", "17", "20", "24"]
            }
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
            "Description": "Start a Dance that places a debuff on all enemies, which decreases Physical Attack.",
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
            "Description": "Start a Dance that places a debuff on all enemies, which decreases Physical Defense.",
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
        "Panic Voice":{
            "Usage": "Spell (Magic)",
            "Description": "Deal damage to all enemies, with a chance to inflict Stun.",
            "Max Level": "10",
            "Data": ""
        },
        "Barrage Rondo":{
            "Usage": "Spell (Buff)",
            "Starter": "1",
            "Description": "Start a Song that places a buff on the whole party, which increases the activation rate of hit-repeating effects.",
            "Max Level": "10",
            "Data": ""
        },
        "Concentration Prelude":{
            "Usage": "Spell (Buff)",
            "Description": "Start a Song that places a buff on the whole party, which increases critical rate.",
            "Max Level": "10",
            "Data": ""
        },
        "Reading Requiem":{
            "Usage": "Spell (Buff)",
            "Description": "Start a Song that places a buff on the whole party, which decreases chant times.",
            "Max Level": "10",
            "Data": ""
        },
        "Lightning March":{
            "Usage": "Spell (Buff)",
            "Description": "Start a Song that places a buff on the whole party, which increases turn speed.",
            "Max Level": "10",
            "Data": ""
        },
        "Auto-Recovery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Recover HP at the start of each turn.",
            "Max Level": "5",
            "Data": ""
        },
        "Concentrate":{
            "Usage": "Passive",
            "Description": "Decreases the chance of Chants, Songs and Dances being interrupted by taking damage.",
            "Max Level": "5",
            "Data": ""
        },
        "Solo Duet":{
            "Usage": "Passive",
            "Description": "Allows you to have 2 Songs active at once. Increases turn speed.",
            "Max Level": "5",
            "Data": ""
        },
        "Fast Talk":{
            "Usage": "Passive",
            "Description": "Decreases the chant time for Song skills.",
            "Max Level": "10",
            "Data": ""
        },

    },
    "Joshikosayer": {
        "Provoke":{
            "Usage": "Technique (Debuff)",
            "Description": "Place a debuff on one enemy, which increases its aggro towards you.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["1", "2", "3", "4", "5"],
                "Duration": ["2", "3", "4", "5", "6"]
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
        "Berserker":{
            "Usage": "Technique (Buff)",
            "Description": "Place a buff on yourself, which increases Physical Attack but lowers Physical Defense.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["8", "10", "12", "14", "16"],
                "Duration": ["3", "4", "5", "6", "7"]
            }
        },
        "Defender":{
            "Usage": "Technique (Buff)",
            "Description": "Place a buff on yourself, which increases Physical Defense but lowers Physical Attack.",
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
        "Raging Smash":{
            "Usage": "Technique (Weapon)",
            "Starter": "1",
            "Description": "Short-Range: Deal damage to one enemy.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "8", "11", "14", "17", "20", "23", "26", "29", "32"],
            }
        },
        "Shield Bash":{
            "Usage": "Technique (Weapon)",
            "Description": "Shield: Deal damage to one enemy, with a chance to inflict Stun.",
            "Max Level": "5",
            "Data": {
                "TP Cost": ["6", "8", "10", "12", "14"],
            }
        },
        "Aura Eliminate":{
            "Usage": "Technique (Weapon)",
            "Description": "Short-Range: Deal damage to one enemy, with a chance to remove a buff on the target.",
            "Max Level": "10",
            "Data": {
                "TP Cost": ["5", "6", "7", "8", "9", "10", "12", "14", "16", "18"],
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
        "Sharp Stab":{
            "Usage": "Technique (Weapon)",
            "Description": "Dagger: Deal damage to one enemy. Always results in a critical hit.",
            "Max Level": "10",
            "Data": ""
        },
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
        "Poison Shot":{
            "Usage": "Technique (Weapon)",
            "Description": "Bow: Deal damage to one enemy, with a chance to inflict Poison.",
            "Max Level": "10",
            "Data": ""
        },
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
        "Weapon Mastery":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Increases Physical Attack when any weapon is equipped.",
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
        "Auto-Guard":{
            "Usage": "Passive",
            "Description": "If you're not Defending, there's a chance to automatically Defend against physical attacks.",
            "Max Level": "5",
            "Data": ""
        },
        "Adaptation":{
            "Usage": "Passive",
            "Description": "Increases all elemental resistances.",
            "Max Level": "10",
            "Data": {
                "Resistances↑": ["+6", "+7", "+8", "+9", "+10", "+11", "+12", "+13", "+14", "+15"],
            }
        },
        "Preparation":{
            "Usage": "Passive",
            "Description": "Increases turn speed based on your missing HP.",
            "Max Level": "5",
            "Data": ""
        },
        "Murder":{
            "Usage": "Passive",
            "Description": "Critical hits gain a chance to inflict instakill.",
            "Max Level": "5",
            "Data": ""
        },
        "Caution":{
            "Usage": "Passive",
            "Description": "Decreases the chance of enemy preemptive attacks.",
            "Max Level": "10",
            "Data": ""
        },
        "Awareness":{
            "Usage": "Passive",
            "Description": "Increases the chance of the party getting a preemptive attack.",
            "Max Level": "5",
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
        "Negotiate":{
            "Usage": "Passive",
            "Description": "Decreases prices for purchase and identify at stores.",
            "Max Level": "5",
            "Data": ""
        },
    },
    "Mainstream Idol": {
        "Dumbing Mazurka":{
            "Usage": "Technique (Debuff)",
            "Description": "Start a Dance that places a debuff on all enemies, which decreases turn speed.",
            "Max Level": "10",
            "Data": ""
        },
        "Debilitating Salsa":{
            "Usage": "Technique (Debuff)",
            "Description": "Start a Dance that places a debuff on all enemies, which deals damage at the start of the dancer's turn.",
            "Max Level": "10",
            "Data": ""
        },
        "Emaciating Hopak":{
            "Usage": "Technique (Debuff)",
            "Description": "Start a Dance that places a debuff on all enemies, which decreases all elemental resistances.",
            "Max Level": "10",
            "Data": {
                "Resistances↓": ["-10", "", "", "", ""]
            }
        },
        "Idol Spirit":{
            "Usage": "Magic (Heal)",
            "Starter": "1",
            "Description": "Deals lethal damage to the user to restore HP to the whole party.",
            "Max Level": "10",
            "Data": {
                "Resistances↓": ["", "", "-450%", "", ""]
            }
        },
        "Guts":{
            "Usage": "Passive",
            "Starter": "1",
            "Description": "Chance to survive lethal damage with 1 HP.",
            "Max Level": "5",
            "Data": ""
        },
        "Concentrate":{
            "Usage": "Passive",
            "Description": "Decreases the chance of Chants, Songs and Dances being interrupted by taking damage.",
            "Max Level": "5",
            "Data": ""
        },
        "On Stage":{
            "Usage": "Passive",
            "Description": "Allows you to have 2 Dances active at once. Increases turn speed.",
            "Max Level": "5",
            "Data": ""
        },
        "Magnificent Steps":{
            "Usage": "Passive",
            "Description": "Grants a chance for enemies to do nothing on their turn.",
            "Max Level": "5",
            "Data": ""
        },
    },
}

const descriptions = {
    "Fighter":      "Develops frontline classes focused on attack and defense.",
    "Paladin":      "Boasts unmatched defense to serve as the party's shield.",
    "Dark Knight":  "Fights using heavy weapons, without fear of being hit.",
    "Valkyrie":     "Raises the party's defenses so they can fight without fear.",
    "Samurai":      "Overpowers enemies using deadly slashes and counters.",
    "Dark Lord":    "Gains renewed energy from causing or enduring pain.",
    "Magic User":   "Develops spellcaster classes trained in all sorts of magic.",
    "Sorceress":    "Bursts enemies with wide-reaching elemental magic.",
    "Enchantress":  "Turns the tide using buff, ailment and imbue magic.",
    "Priestess":    "Safeguards the party with healing and support magic.",
    "Witch":        "Uses destructive spells without running out of energy.",
    "Magical Princess": "Enhances their body to fight using swords and magic.",
    "Sage":         "Controls the battle using their many buffs and ailments.",
    "Bishop":       "Ensures the party's good health to then smite enemies.",
    "Scout":        "Develops crafty classes that use high speed and trickery.",
    "Archer":       "Uses accurate bow shots to disable enemies from afar.",
    "Assassin":     "Uses fast sword strikes to disable and finish off enemies.",
    "Sniper":       "Overwhelms enemies by performing continuous shots.",
    "Treasure Hunter": "Facilitates exploration and enhances item gain and usage.",
    "Kunoichi":     "Gains the advantage using evasion, debuffs and magic.",
    "Maid":         "Develops support classes skilled in enhancing and healing.",
    "Bard":         "Switches between songs that continuously buff allies.",
    "Dancer":       "Switches between dances that continuously debuff enemies.",
    "Songstress":   "Performs simultaneous songs to strongly buff allies.",
    "Joshikosayer": "Learns lots of physical skills to fill any missing role.",
    "Mainstream Idol": "Performs simultaneous dances to strongly debuff enemies.",
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
