var data = {
"Landsknecht":{
    "Full Charge":{
        "Usage": "Force Boost",
        "Description": "All your Sword/Axe attacks will be Critical Hits.",
        "Starter": "0",
        "Max Level": "0",
        "Data": ""
    },
    "Full Gain":{
        "Usage": "Force Break (Arms, STR)",
        "Description": "Deal melee Cut damage to one enemy.",
        "Starter": "0",
        "Max Level": "3",
        "Levels": ["1", "60", "99"],
        "Data": {
            "Attack Power": ["800%", "1700%", "2700%"],
        }
    },
    "Sword Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt if a Sword is equipped. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+10%", "+11%", "+11%", "+12%", "+12%", "+13%", "+13%", "+14%", "+14%", "+15%"],
        }
    },
    "Raging Edge":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": "Sword: Deal melee Cut damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Tornado":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 3)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with splash effect.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Blinding Slash":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 5)",
        "Description": "Sword: Deal melee Cut damage to one enemy. If it misses, attempt to inflict Blind on all enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Falcon Slash":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Sword Mastery (Lv 10)",
        "Description": "Sword: Deal multiple hits of melee Cut damage to random enemies (max once each).",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Hurricane":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Tornado (Lv 5), Falcon Slash (Lv 5)",
        "Description": "Sword: Deal 6 hits of melee Cut damage to random enemies. All your skills (except Force Break) will be disabled on the next turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Axe Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt if an Axe is equipped. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+10%", "+11%", "+11%", "+12%", "+12%", "+13%", "+13%", "+14%", "+14%", "+15%"],
        }
    },
    "Boomerang Axe":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Axe Mastery (Lv 1)",
        "Description": "Axe: Deal ranged Bash damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Head Bash":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Axe Mastery (Lv 3)",
        "Description": "Axe: Deal melee Bash damage to one enemy, with a chance to inflict Head Bash.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Stunning Smash":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Axe Mastery (Lv 5)",
        "Description": "Axe: Deal melee Bash damage to one enemy, with a chance to inflict Stun.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Charge Smash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Axe Mastery (Lv 10)",
        "Description": "Deal melee Bash damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Heavy Smash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Head Bash (Lv 5), Charge Smash (Lv 5)",
        "Description": "Deal melee Bash damage to one enemy. Damage dealt and TP cost increase by 25% after each use (max 100%). (Resets upon death or the battle ending)",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max HP.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "War Cry":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 5)",
        "Description": "Place a buff on your line for several turns, which increases physical/elemental damage dealt and taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max TP.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Triple Charge":{
        "Usage": "Active (Arms)",
        "Unlock": "TP Up (Lv 5)",
        "Description": "Enter a charge state until the end of next turn, which increases damage dealt, accuracy and bind/ailment infliction rate.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Fire Chaser":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "War Cry (Lv 3), Triple Charge (Lv 3)",
        "Description": "Sword/Axe: Prepare to follow up after your allies' Fire attacks this turn, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each follow up.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Ice Chaser":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "War Cry (Lv 3), Triple Charge (Lv 3)",
        "Description": "Sword/Axe: Prepare to follow up after your allies' Ice attacks this turn, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each follow up.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Volt Chaser":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "War Cry (Lv 3), Triple Charge (Lv 3)",
        "Description": "Sword/Axe: Prepare to follow up after your allies' Volt attacks this turn, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each follow up.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Phys ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Fencer":{
        "Usage": "Passive",
        "Unlock": "Phys ATK Up (Lv 5)",
        "Description": "Increase Critical rate and Critical damage bonus.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Double Attack":{
        "Usage": "Passive",
        "Unlock": "Fencer (Lv 5)",
        "Description": "Normal attacks have a chance to hit a second time.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Phys DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decrease physical damage taken.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Swordbreaker":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Phys DEF Up (Lv 5)",
        "Description": "Deal weapon-based damage to one enemy at the start of turn. Decrease physical damage dealt by the target until the end turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Mine":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Chance to obtain additional materials when gathering from Mine points.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Survivalist":{
    "Illusion Step":{
        "Usage": "Force Boost",
        "Description": "Drastically increase evasion, and perform a follow up after Bow attacks.",
        "Starter": "0",
        "Max Level": "3",
        "Levels": ["1", "60", "99"],
        "Data": {
            "Evasion↑": ["+99.9%", "+99.9%", "+99.9%"],
            "Attack Power\n(Follow Ups)": ["100%", "200%", "300%"],
        }
    },
    "Summer Rain":{
        "Usage": "Force Break (Arms, AGI)",
        "Description": "Deal 16 hits of ranged Stab damage to random enemies (max 4 hits each).",
        "Starter": "0",
        "Max Level": "3",
        "Levels": ["1", "60", "99"],
        "Data": {
            "Attack Power": ["150%", "320%", "500%"],
        }
    },
    "Bow Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt if a Bow is equipped. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": {
            "Damage Dealt↑": ["+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "+7%", "+8%", "+9%", "+10%", "+10%", "+11%", "+11%", "+12%", "+12%", "+13%", "+13%", "+14%", "+14%", "+15%"],
        }
    },
    "Flank Shot":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Bow Mastery (Lv 1)",
        "Description": "Bow: Deal ranged Stab damage to an enemy line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Blind Arrow":{
        "Usage": "Active (Arms, AGI, LUC)",
        "Unlock": "Bow Mastery (Lv 3)",
        "Description": "Bow: Deal ranged Stab damage to one enemy, with a chance to inflict Blind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Sleep Arrow":{
        "Usage": "Active (Arms, AGI, LUC)",
        "Unlock": "Bow Mastery (Lv 3)",
        "Description": "Bow: Deal ranged Stab damage to one enemy, with a chance to inflict Sleep.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Paralysis Arrow":{
        "Usage": "Active (Arms, AGI, LUC)",
        "Unlock": "Bow Mastery (Lv 3)",
        "Description": "Bow: Deal ranged Stab damage to one enemy, with a chance to inflict Paralysis.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Drop Shot":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Bow Mastery (Lv 5)",
        "Description": "Bow: Deal ranged Stab damage to one enemy. Deals more damage if the target is in the back line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Sagittarius Shot":{
        "Usage": "Active (Arms, AGI, LUC)",
        "Unlock": "Drop Shot (Lv 5)",
        "Description": "Bow: Prepare an attack that will hit in 2 more turns, at the start of the turn. Deals ranged Stab damage to one enemy, with a chance to inflict Stun. (Can't use again while preparing. Cancelled if you die while preparing).",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Multi-Shot":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Bow Mastery (Lv 7)",
        "Description": "Bow: Deal 2 hits of ranged Stab damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Disabling Shot":{
        "Usage": "Passive (LUC)",
        "Unlock": "Bow Mastery (Lv 10)",
        "Description": "Bow skills gain a chance to inflict Leg Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Hazy Arrow":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Multi-Shot (Lv 2), Chain Dance (Lv 4)",
        "Description": "Bow: Deal ranged Stab damage to one enemy. Cannot miss. Only usable if you dodged an attack last turn.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Speed Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase accuracy, evasion and action speed.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Trick Step":{
        "Usage": "Active (Legs)",
        "Unlock": "Speed Up (Lv 1)",
        "Description": "Place a debuff on one enemy for several turns, which decreases accuracy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Chain Dance":{
        "Usage": "Active (Legs)",
        "Unlock": "Speed Up (Lv 3)",
        "Description": "Increase your evasion and enemy aggro until the end of the turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Scapegoat":{
        "Usage": "Active (Legs)",
        "Unlock": "Speed Up (Lv 7)",
        "Description": "Select one ally to protect the rest of the party for this turn, which makes the target take attacks in place of their allies a certain amount of times. Target takes decreased damage from those redirected attacks.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Swap Step":{
        "Usage": "Active (Legs)",
        "Unlock": "Speed Up (Lv 10)",
        "Description": "Target one ally, make them act first this turn.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "Risk Perception":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Chance to nullify enemy ambushes.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Owl-Eye":{
        "Usage": "Active (Field)",
        "Unlock": "Risk Perception (Lv 1)",
        "Description": "Temporarily show FOEs/chests/shortcuts/stairs/gathering spots within a certain radius.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Sneak Attack":{
        "Usage": "Active (Field)",
        "Unlock": "Risk Perception (Lv 3)",
        "Description": "Temporarily increase the chance of ambushing enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Stalker":{
        "Usage": "Active (Field)",
        "Unlock": "Risk Perception (Lv 5)",
        "Description": "Temporarily decrease the enemy encounter rate.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max HP.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Resuscitate":{
        "Usage": "Active (Field)",
        "Unlock": "HP Up (Lv 3)",
        "Description": "Restore HP to one ally. From level 5 onward can also revive.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "Efficiency":{
        "Usage": "Active (Head)",
        "Unlock": "Resuscitate (Lv 3)",
        "Description": "Place a buff on yourself for several turns, which increases the effect of HP/TP restoring items.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max TP.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Curb ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase bind/ailment infliction rate.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Natural Instinct":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Chance to obtain additional materials when gathering from Take, Chop or Mine points.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Protector":{
    "Shield Protect":{
        "Usage": "Force Boost",
        "Description": "When a Guard skill decreases damage to a party member, apply an additional damage reduction.",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "Damage Taken↓": ["x0.5"],
        }
    },
    "Perfect Defense":{
        "Usage": "Force Break (Arms)",
        "Description": "Nullify all attacks to the party this turn.",
        "Starter": "0",
        "Max Level": "0",
        "Data": ""
    },
    "Shield Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Chance to nullify physical attacks received if a Shield is equipped. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Front Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 1)",
        "Description": "(Guard) Shield: Protect the front line for this turn, which decreases physical damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Rear Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 1)",
        "Description": "(Guard) Shield: Protect the back line for this turn, which decreases physical damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Keep Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Front/Rear Guard (Lv 3)",
        "Description": "(Guard) Shield: Protect one ally until the end of next turn, which decreases physical/elemental damage taken. While active, you cannot use Guard skills.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Fire Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 3)",
        "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases Fire damage taken (max once per ally). At high levels it absorbs damage instead of decreasing it.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Ice Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 3)",
        "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases Ice damage taken (max once per ally). At high levels it absorbs damage instead of decreasing it.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Volt Wall":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 3)",
        "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases Volt damage taken (max once per ally). At high levels it absorbs damage instead of decreasing it.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Heal Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 5)",
        "Description": "(Guard) Shield: Protect one ally for this turn, which restores HP and decreases physical damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Shield Smite":{
        "Usage": "Active (Arms, STR+VIT, LUC)",
        "Unlock": "Shield Mastery (Lv 7)",
        "Description": "Shield: Deal melee Bash damage to one enemy, with a chance to inflict Arm Bind. (Damage is based on your Shield's DEF instead of your weapon's ATK)",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Shield Rush":{
        "Usage": "Active (Arms, STR+VIT)",
        "Unlock": "Shield Smite (Lv 5)",
        "Description": "Shield: Deal melee Bash damage to all enemies. Places a debuff on the targets for 3 turns, which decreases physical damage dealt. (Damage is based on your Shield's DEF instead of your weapon's ATK).",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Sentinel Guard":{
        "Usage": "Active (Arms)",
        "Unlock": "Shield Mastery (Lv 10)",
        "Description": "(Guard) Shield: Protect the whole party for this turn, which decreases all attack damage taken. While active, attacks against your allies use your defensive stats for the damage calculation.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Phys DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decrease physical damage taken.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Provoke":{
        "Usage": "Active (Head)",
        "Unlock": "Phys DEF Up (Lv 1)",
        "Description": "Place a buff on yourself for several turns, which increases enemy aggro and slightly decreases damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Pre-Provoke":{
        "Usage": "Passive",
        "Unlock": "Provoke (Lv 5)",
        "Description": "Chance to automatically cast Provoke at the start of battle.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "Fortify":{
        "Usage": "Active (Arms)",
        "Unlock": "Phys DEF Up (Lv 3)",
        "Description": "Place a buff on yourself for several turns, which decreases physical damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Parry":{
        "Usage": "Passive (Arms)",
        "Unlock": "Phys DEF Up (Lv 5)",
        "Description": "Chance to nullify physical attacks against your line.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "Elem DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decrease elemental damage taken.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Line Cure":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Elem DEF Up (Lv 3)",
        "Description": "Restore HP to an ally line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Line Heal":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Line Cure (Lv 5)",
        "Description": "Restore HP to an ally line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Aegis":{
        "Usage": "Passive",
        "Unlock": "Elem DEF Up (Lv 5)",
        "Description": "Chance to survive lethal damage with 1 HP.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Armor of Light":{
        "Usage": "Active (Head)",
        "Unlock": "Elem DEF Up (Lv 10)",
        "Description": "Place a buff on yourself for several turns, which has a chance to nullify bind/ailment/debuff inflictions received.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max HP.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Flee":{
        "Usage": "Active (Legs)",
        "Unlock": "HP Up (Lv 3)",
        "Description": "Attempt to escape the battle and teleport to the point where you entered the floor. If successful, spend part of the whole party's HP.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max HP.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Mine":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Dark Hunter":{
    "Trance":{
        "Usage": "Force Boost",
        "Description": "Increase damage dealt if the target has a bind/ailment.",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "Damage Dealt↑": ["x2.0"],
        }
    },
    "Rose Prison":{
        "Usage": "Force Break (Arms, STR, LUC)",
        "Description": "Deal melee Cut damage to one enemy, with a chance to inflict Head Bind, Arm Bind, Leg Bind, and Poison.",
        "Starter": "0",
        "Max Level": "3",
        "Levels": ["1", "60", "99"],
        "Data": {
            "Attack Power": ["250%", "500%", "700%"],
            "Infliction Chance": ["120%", "120%", "120%"],
            "Poison Damage": ["60", "500", "750"],
        }
    },
    "Whip Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt if a Whip is equipped. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Gag":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whip Mastery (Lv 1)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Head Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Cuffs":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whip Mastery (Lv 1)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Arm Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Shackles":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whip Mastery (Lv 1)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Leg Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Ecstasy":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Gag (Lv 7), Cuffs (Lv 7), Shackles (Lv 7)",
        "Description": "Deal melee Cut damage to one enemy. Damage dealt increases for every bind on the target.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Viper":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whip Mastery (Lv 5)",
        "Description": "Whip: Deal melee Cut damage to one enemy, with a chance to inflict Poison.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Crimson Rouge":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Whip Mastery (Lv 10)",
        "Description": "Whip: Deal melee Cut damage to one enemy. If the target has a binds, attempt to inflict them on their adjacent enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Sword Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt if a Sword is equipped. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Hypno Bite":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Sleep.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Nerve Bite":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Paralysis.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Mirage Bite":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 1)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with a chance to inflict Panic.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Soul Liberator":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Hypno Bite (Lv 7), Nerve Bite (Lv 7), Mirage Bite (Lv 7)",
        "Description": "Sword: Deal melee Cut damage to one enemy. Damage dealt increases if the target has an ailment, but removes the ailment.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Drain Bite":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sword Mastery (Lv 5)",
        "Description": "Sword: Deal melee Cut damage to one enemy. Recover HP based on damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Scorpion":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Sword Mastery (Lv 10)",
        "Description": "Sword: Deal melee Cut damage to one enemy, with strong splash effect. If the adjacent enemies have ailments, attempt to inflict Petrify.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max HP.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Temptation":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "HP Up (Lv 4)",
        "Description": "Attempt to inflict Stun on one enemy, and increase their damage taken until the end of turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max TP.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Bind Heart":{
        "Usage": "Active (Head)",
        "Unlock": "TP Up (Lv 4)",
        "Description": "Place a debuff on one enemy for several turns, which decreases evasion. Increased effect if the target has a bind/ailment.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Phys ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Attack Bait":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Phys ATK Up (Lv 10)",
        "Description": "Sword/Whip: Prepare to counterattack each time you or your adjacent allies are hit with physical damage this turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Elemental Bait":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Phys ATK Up (Lv 10)",
        "Description": "Sword/Whip: Prepare to counterattack each time you or your adjacent allies are hit with elemental damage this turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Curb ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase bind/ailment infliction rate.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Snake Eyes":{
        "Usage": "Active (Head)",
        "Unlock": "Curb ATK Up (Lv 3)",
        "Description": "Place a debuff on one enemy for several turns, which increases physical damage taken. Increased effect if the target has a bind/ailment.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Perseverance":{
        "Usage": "Passive",
        "Unlock": "Snake Eyes (Lv 5)",
        "Description": "Increase bind/ailment/Stun/Instant Death infliction chance if you failed an infliction last turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Chop":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Medic":{
    "Steady Hands":{
        "Usage": "Force Boost",
        "Description": "Increase HP restored and action speed for healing skills, and decrease their TP cost.",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "HP Gain↑": ["+70%"],
            "Speed↑": ["x5.0"],
            "TP Cost↓": ["-50%"],
        }
    },
    "Medical Miracle":{
        "Usage": "Force Break (Head, TEC, VIT)",
        "Description": "Restore HP, revive, and remove binds/ailments/debuffs for the whole party.",
        "Starter": "0",
        "Max Level": "3",
        "Levels": ["1", "60", "99"],
        "Data": {
            "Healing Power": ["300%", "600%", "900%"],
        }
    },
    "Heal Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase HP restored with healing skills. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Cure":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Heal Mastery (Lv 1)",
        "Description": "Restore HP to one ally.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Salve":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Cure (Lv 5)",
        "Description": "Restore HP to the whole party.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Unbind":{
        "Usage": "Active (Head)",
        "Unlock": "Heal Mastery (Lv 3)",
        "Description": "Remove binds from the targets.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Refresh":{
        "Usage": "Active (Head)",
        "Unlock": "Heal Mastery (Lv 3)",
        "Description": "Remove ailments from the targets.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Revive":{
        "Usage": "Active (Head)",
        "Unlock": "Unbind (Lv 3), Refresh (Lv 3)",
        "Description": "Revive one ally.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "High Regen":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Revive (Lv 2)",
        "Description": "Place a buff on one ally for several turns, which restores HP at the end of each turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Healing":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Heal Mastery (Lv 5)",
        "Description": "Restore HP to one ally.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Line Heal":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Healing (Lv 3)",
        "Description": "Restore HP to an ally line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Salve 2":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Line Heal (Lv 5)",
        "Description": "Restore HP to the whole party.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Chase Heal":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Heal Mastery (Lv 7)",
        "Description": "Prepare to heal target ally each time they're hit this turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Delayed Heal":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Chase Heal (Lv 5)",
        "Description": "Prepare yourself to restore HP to the whole party at the start of the next turn. (Cannot use it again while it's in preparation).",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Overheal":{
        "Usage": "Active (Head)",
        "Unlock": "Heal Mastery (Lv 10)",
        "Description": "Enter a charge state until the end of next turn, which increases the effect of healing skills and makes excess healing increase the targets' Max HP until the end of turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Staff Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt if a Staff is equipped. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Heavy Strike":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Staff Mastery (Lv 1)",
        "Description": "Staff: Deal melee Bash damage to one enemy, with a chance to inflict Stun.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Medical Rod":{
        "Usage": "Active (Arms, TEC)",
        "Unlock": "Staff Mastery (Lv 5)",
        "Description": "Staff: Deal melee Bash damage to one enemy. Places a debuff on the target for several turns, which increases elemental damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Vital Hit":{
        "Usage": "Active (Arms, TEC+VIT)",
        "Unlock": "Staff Mastery (Lv 10)",
        "Description": "Staff: Deal melee Bash damage to one enemy. Deals more damage the more HP the party has.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max HP.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Final Gift":{
        "Usage": "Passive (TEC+VIT)",
        "Unlock": "HP Up (Lv 3)",
        "Description": "Chance to restore HP to the whole party when you die.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max TP.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Scavenge":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 3)",
        "Description": "Increase enemy drop rates.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Elem DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decrease elemental damage taken.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Safe Passage":{
        "Usage": "Active (Field)",
        "Unlock": "Elem DEF Up (Lv 3)",
        "Description": "Temporarily nullify the effect of damaging floors.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Phys ATK Up Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Take":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Alchemist":{
    "Analysis":{
        "Usage": "Force Boost",
        "Description": "Increase damage dealt when you hit an enemy's weakness.",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "Damage Dealt↑": ["x1.65"],
        }
    },
    "Eschaton":{
        "Usage": "Force Break (Head, TEC)",
        "Description": "Deal ranged Almighty damage to all enemies.",
        "Starter": "0",
        "Max Level": "3",
        "Levels": ["1", "60", "99"],
        "Data": {
            "Attack Power": ["600%", "1700%", "2600%"],
        }
    },
    "Formula Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase damage dealt with Formula skills. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Fire Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 1)",
        "Description": "(Formula) Deal ranged Fire damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Flame Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Fire Formula (Lv 5)",
        "Description": "(Formula) Deal ranged Fire damage to one enemy, with splash effect.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Ice Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 1)",
        "Description": "(Formula) Deal ranged Ice damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Freeze Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Ice Formula (Lv 5)",
        "Description": "(Formula) Deal ranged ice damage to one enemy, with pierce effect.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Volt Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 1)",
        "Description": "(Formula) Deal ranged Volt damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Spark Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Volt Formula (Lv 5)",
        "Description": "(Formula) Deal ranged Volt damage to an enemy line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Riot Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Flame/Freeze/Spark Formula (Lv 3)",
        "Description": "(Formula) Deal 5 hits of a random elemental type each to random enemies. TP costs goes down as you spend TP.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Inferno Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 5)",
        "Description": "(Formula) Deal ranged fire damage to all enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Cocytus Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 5)",
        "Description": "(Formula) Deal ranged Ice damage to all enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Thor Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 5)",
        "Description": "(Formula) Deal ranged Volt damage to all enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Compression":{
        "Usage": "Active (Head)",
        "Unlock": "Inferno/Cocytus/Thor formula (Lv 3)",
        "Description": "Place a buff on yourself for 3 turns, which increases damage dealt with all-target attacks but changes them to single-target.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Nuclear Formula":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Formula Mastery (Lv 10)",
        "Description": "(Formula) Deal ranged Almighty damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Palm Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase damage dealt with Palm skills. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Fire Palm":{
        "Usage": "Active (Arms, TEC)",
        "Unlock": "Palm Mastery (Lv 1)",
        "Description": "(Palm) Only usable from the front line. Deal melee Fire damage to one enemy. Until the end of next turn, add Fire type to your next action and increase all damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Ice Palm":{
        "Usage": "Active (Arms, TEC)",
        "Unlock": "Palm Mastery (Lv 1)",
        "Description": "(Palm) Only usable from the front line. Deal melee Ice damage to one enemy. Until the end of next turn, add Ice type to your next action and increase all damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Volt Palm":{
        "Usage": "Active (Arms, TEC)",
        "Unlock": "Palm Mastery (Lv 1)",
        "Description": "(Palm) Only usable from the front line. Deal melee Volt damage to one enemy. Until the end of next turn, add Volt type to your next action and increase all damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Splash Palm":{
        "Usage": "Passive",
        "Unlock": "Palm Mastery (Lv 5)",
        "Description": "If your Palm skill hits a weakness, there's a chance for it to gain splash effect.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Additional Palm":{
        "Usage": "Passive (TEC)",
        "Unlock": "Palm Mastery (Lv 10)",
        "Description": "At the end of turn, if you hit enemies with a Palm skill this turn, deal additional damage of the same element to the same targets. (Cannot miss)",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max TP.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Sight Formula":{
        "Usage": "Active (Field)",
        "Unlock": "N/A",
        "Description": "Show FOEs/chests/shortcuts/stairs/gathering spots within a certain radius.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max HP.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Elem ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase elemental damage dealt.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Elem DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Decrease elemental damage taken.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Chop":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Troubadour":{
    "War Song":{
        "Usage": "Force Boost",
        "Description": "Buffs on the party will maintain their remaining duration and cannot be cancelled by enemies.",
        "Starter": "0",
        "Max Level": "0",
        "Data": ""
    },
    "Crusade":{
        "Usage": "Force Break (Head)",
        "Description": "Increase damage dealt and decrease damage taken for the whole party for this turn.",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "Damage Dealt↑": ["x1.5"],
            "Damage Taken↓": ["x0.5"],
        }
    },
    "Song Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase action speed and decrease TP cost for Song skills. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Warrior Song":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 1)",
        "Description": "(Song) Place a buff on the whole party for several turns, which increases physical/elemental damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Shelter Song":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 1)",
        "Description": "(Song) Place a buff on the whole party for several turns, which decreases physical/elemental damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Energy Ensemble":{
        "Usage": "Active (Head)",
        "Unlock": "Warrior/Shelter Song (Lv 3)",
        "Description": "Until the end of turn, allies with buffs will recover TP upon spending TP.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "Lightfoot Melody":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 3)",
        "Description": "(Song) Place a buff on the whole party for several turns, which increases evasion.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Insight Melody":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 3)",
        "Description": "(Song) Place a buff on the whole party for several turns, which increases accuracy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Skanda Ensemble":{
        "Usage": "Active (Head)",
        "Unlock": "Lightfoot/Insight Melody (Lv 3)",
        "Description": "(Song) For this turn, increase the action speed of allies with buffs.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "Fire Prelude":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 5)",
        "Description": "(Song) Place a buff on one ally for several turns, which imbues their weapon with Fire damage and increases all damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Flame Fantasia":{
        "Usage": "Active (Head)",
        "Unlock": "Fire Prelude (Lv 3)",
        "Description": "(Song) Place a buff on all allies and a debuff on all enemies for several turns. The buff increases Fire resistance, while the debuff decreases it.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Ice Prelude":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 5)",
        "Description": "(Song) Place a buff on one ally for several turns, which imbues their weapon with Ice damage and increases all damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Frost Fantasia":{
        "Usage": "Active (Head)",
        "Unlock": "Ice Prelude (Lv 3)",
        "Description": "(Song) Place a buff on all allies and a debuff on all enemies for several turns. The buff increases Ice resistance, while the debuff decreases it.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Volt Prelude":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 5)",
        "Description": "(Song) Place a buff on one ally for several turns, which imbues their weapon with Volt damage and increases all damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Shock Fantasia":{
        "Usage": "Active (Head)",
        "Unlock": "Volt Prelude (Lv 3)",
        "Description": "(Song) Place a buff on all allies and a debuff on all enemies for several turns. The buff increases Volt resistance, while the debuff decreases it.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Barbaric March":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 7)",
        "Description": "(Song) Place a buff on the whole party for several turns, which increases Max HP.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Life Ensemble":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Barbaric March (Lv 3)",
        "Description": "Until the end of turn, allies with Song buffs will recover HP upon taking damage.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "Reverb":{
        "Usage": "Active (Head)",
        "Unlock": "Energy/Skanda/Life Ensemble (Lv 3)",
        "Description": "Copy all buffs from one ally onto another.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Health Requiem":{
        "Usage": "Active (Head)",
        "Unlock": "Song Mastery (Lv 10)",
        "Description": "(Song) Place a buff on the whole party for several turns, which increases bind/ailment resistance.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Speed Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase accuracy, evasion and action speed.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Alluring Ballad":{
        "Usage": "Active (Field)",
        "Unlock": "Speed Up (Lv 3)",
        "Description": "Temporarily increase the enemy encounter rate.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Jovial March":{
        "Usage": "Active (Field)",
        "Unlock": "Speed Up (Lv 7)",
        "Description": "Temporarily restore TP to the whole party for every 5 steps taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max HP.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Healing Rhythm":{
        "Usage": "Passive",
        "Unlock": "HP Up (Lv 5)",
        "Description": "If you have buffs, recover HP at the end of each turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Max TP.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Holy Gift":{
        "Usage": "Active (Head)",
        "Unlock": "TP Up (Lv 10)",
        "Description": "Increase EXP earned by the team at the end of battle.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Take":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Ronin":{
    "Immovable":{
        "Usage": "Force Boost",
        "Description": "Decrease the TP cost of skills that require a Stance. Remaining Stance duration does not go down, and Peerless Stance is not removed by Peerless Combo.",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "TP Cost↓": ["-50%"],
        }
    },
    "Issen":{
        "Usage": "Force Break (Arms, STR, LUC)",
        "Description": "Deal ranged Cut damage to all enemies, with a chance to inflict Instant Death. Higher infliction chance on targets below 20% HP.",
        "Starter": "0",
        "Max Level": "3",
        "Levels": ["1", "60", "99"],
        "Data": {
            "Attack Power": ["400%", "800%", "1200%"],
            "Infliction Chance\n(Normal)": ["100%", "100%", "100%"],
            "Infliction Chance\n(Low HP)": ["999%", "999%", "999%"],
        }
    },
    "Katana Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt if a Katana is equipped. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Upper Stance":{
        "Usage": "Passive",
        "Unlock": "Katana Mastery (Lv 1)",
        "Description": "A Stance that increases physical damage dealt. Activated by Upward Slash. From level 10 onward can activate automatically at the start of battle.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Upward Slash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Upper Stance (Lv 1)",
        "Description": "Katana: Deal melee Cut damage to one enemy. Activates/extends Upper Stance.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Horse Slash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Upper Stance (Lv 3)",
        "Description": "Katana: Requires Upper Stance. Deal melee Cut damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Flame Grater":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Horse Slash (Lv 3)",
        "Description": "Katana: Requires Upper Stance. Deal melee Cut+Fire damage to an enemy line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Swallow Strike":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Upper Stance (Lv 5)",
        "Description": "Katana: Requires Upper Stance. Deal multiple hits of melee Cut damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Clear Stance":{
        "Usage": "Passive",
        "Unlock": "Katana Mastery (Lv 1)",
        "Description": "A Stance that decreases physical damage taken. Activated by Charging Thrust. From level 10 onward can activate automatically at the start of battle.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Charging Thrust":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Clear Stance (Lv 1)",
        "Description": "Katana: Deal melee Stab damage to one enemy. Activates/extends Clear Stance.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Arm Strike":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Clear Stance (Lv 3)",
        "Description": "Katana: Requires Clear Stance. Deal melee Stab damage to one enemy, with a chance to inflict Arm Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Lightning Stab":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Arm Strike (Lv 3)",
        "Description": "Katana: Requires Clear Stance. Deal melee Stab+Volt damage to one enemy, with pierce effect.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Moon Shadow":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Clear Stance (Lv 5)",
        "Description": "Katana: Requires Clear Stance. Deal melee Stab damage to one enemy at the start of turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Drawing Stance":{
        "Usage": "Passive",
        "Unlock": "Katana Mastery (Lv 1)",
        "Description": "A Stance that increases accuracy, evasion and action speed. Activated by Sheath Strike. From level 10 onward can activate automatically at the start of battle.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Sheath Strike":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Drawing Stance (Lv 1)",
        "Description": "Katana: Deal melee Bash damage to one enemy. Activates/extends Drawing Stance.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Beheading Cut":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Drawing Stance (Lv 3)",
        "Description": "Katana: Requires Drawing Stance. Deal melee Cut damage to one enemy, with a chance to inflict Instant Death.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Frigid Slash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Beheading Cut (Lv 3)",
        "Description": "Katana: Requires Drawing Stance. Deal melee Cut+Ice damage to all enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Ground Strike":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Drawing Stance (Lv 5)",
        "Description": "Katana: Requires Drawing Stance. Deal ranged Bash damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Peerless Stance":{
        "Usage": "Active (No Parts)",
        "Unlock": "Swallow Strike (Lv 1), Moon Shadow (Lv 1), Ground Strike (Lv 1)",
        "Description": "Requires Upper, Clear or Drawing Stance. Enter a special Stance that improves offense, defense, accuracy, evasion and speed, and enables all other skills that require a Stance. (Cannot recast to extend duration)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Peerless Combo":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Peerless Stance (Lv 3)",
        "Description": "Katana: Requires Peerless Stance. Perform Swallow Strike, Moon Shadow and Ground Strike against one enemy. Removes your Stance upon use.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Post-Initiative":{
        "Usage": "Active (Legs)",
        "Unlock": "Katana Mastery (Lv 5)",
        "Description": "Enter a charge state until the end of next turn, which increases damage dealt and evasion.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Perfect Chaser":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Katana Mastery (Lv 10)",
        "Description": "Katana: Prepare to follow up after your allies' normal attacks this turn, dealing weapon-based damage to the same targets. Activation chance starts at 100% and goes down with each follow up.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Phys ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Pre-Initiative":{
        "Usage": "Passive",
        "Unlock": "Phys ATK Up (Lv 8)",
        "Description": "Increase damage dealt and accuracy against enemies that haven't acted yet this turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Mine":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Hexer":{
    "Creeping Curse":{
        "Usage": "Force Boost",
        "Description": "Drastically increase bind/ailment infliction chance. Remaining duration of debuffs on enemies does not go down.",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "Inflictions↑": ["x3.0"],
        }
    },
    "Black Mist":{
        "Usage": "Force Break (Head)",
        "Description": "Force binds/ailments on enemies to last 1 more turn.",
        "Starter": "0",
        "Max Level": "0",
        "Data": ""
    },
    "Curse Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase bind/ailment infliction rate of Curse skills. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Sapping Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Curse Mastery (Lv 1)",
        "Description": "Place a debuff on all enemies for several turns, which decreases damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Frailty Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Curse Mastery (Lv 1)",
        "Description": "Place a debuff on all enemies for several turns, which increases damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Weakening Curse":{
        "Usage": "Active (Head)",
        "Unlock": "Sapping/Frailty Curse (Lv 5)",
        "Description": "Place a debuff on all enemies for several turns, which decreases bind/ailment resistance.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Blinding Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 3)",
        "Description": "Attempt to inflict Blind on an enemy line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Venom Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 3)",
        "Description": "Attempt to inflict Poison on an enemy line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Madness Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 3)",
        "Description": "Attempt to inflict Panic on an enemy line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Torpor Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Blinding/Venom Curse (Lv 2)",
        "Description": "Attempt to inflict Sleep on an enemy line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Corrupt Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Venom/Madness Curse (Lv 2)",
        "Description": "Attempt to inflict Curse on an enemy line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Cranial Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 5)",
        "Description": "Attempt to inflict Head Bind on one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Abdomen Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 5)",
        "Description": "Attempt to inflict Arm Bind on one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Immobile Curse":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 5)",
        "Description": "Attempt to inflict Leg Bind on one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Evil Eye":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Curse Mastery (Lv 10)",
        "Description": "Attempt to inflict Fear on an enemy line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Shielding Word":{
        "Usage": "Active (Head)",
        "Unlock": "Evil Eye (Lv 1)",
        "Description": "Control an enemy afflicted with Fear for this turn, which makes it take hits in place of the party a certain amount of times.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "Conflict Word":{
        "Usage": "Active (Head)",
        "Unlock": "Evil Eye (Lv 5)",
        "Description": "Control all enemies afflicted with Fear for this turn, which makes them attack another random enemy. (If there's only one enemy, it will attack itself)",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Suicide Word":{
        "Usage": "Active (Head)",
        "Unlock": "Evil Eye (Lv 10)",
        "Description": "Control an enemy afflicted with Fear for this turn, which makes it hit itself multiple times.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Sacrifice":{
        "Usage": "Active (Head, TEC, LUC)",
        "Unlock": "HP Up (Lv 5)",
        "Description": "Kill one ally to deal ranged Almighty damage to all enemies, with a chance to inflict any bind/ailment the ally had. Deals more damage the more HP the sacrificed ally had.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Reincarnate":{
        "Usage": "Active (Head)",
        "Unlock": "Sacrifice (Lv 5)",
        "Description": "Attempt to revive all dead allies. Inflicts Fear on revived allies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Life Trade":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "HP Up (Lv 10)",
        "Description": "Deal ranged Almighty damage to all enemies. Restore HP to the party based on damage dealt. Deals more damage the more HP the party has.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Curb ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Chained Benefit":{
        "Usage": "Active (No Parts)",
        "Unlock": "Curb ATK Up (Lv 10)",
        "Description": "Inflict Arm Bind and Leg Bind to yourself to enter a charge state until the end of next turn, which increases bind/ailment infliction rate.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Curb DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Chop":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },

},
"Gunner":{
    "Action Boost":{
        "Usage": "Force Boost",
        "Description": "Gun skills are performed twice. The second instance has decreased attack/healing power.",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "Skill Power↓": ["x0.6"],
        }
    },
    "Supreme Bolt":{
        "Usage": "Force Break (Arms, AGI)",
        "Description": "Deal ranged Stab damage and inflict Stun to one enemy.",
        "Starter": "0",
        "Max Level": "3",
        "Levels": ["1", "60", "99"],
        "Data": {
            "Attack Power": ["600%", "1300%", "2100%"],
        }
    },
    "Gun Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt if a Gun is equipped. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Medic Bullet":{
        "Usage": "Active (Arms, TEC+VIT)",
        "Unlock": "Gun Mastery (Lv 1)",
        "Description": "Gun: Restore HP and remove ailments for one ally.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Fire Rounds":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Gun Mastery (Lv 3)",
        "Description": "Gun: Deal ranged Stab+Fire damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Charged Fire":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Fire Rounds (Lv 5)",
        "Description": "Gun: Deal ranged Stab+Fire damage to one enemy. Increase damage taken until it activates.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Ice Rounds":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Gun Mastery (Lv 3)",
        "Description": "Gun: Deal ranged Stab+Ice damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Charged Ice":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Ice Rounds (Lv 5)",
        "Description": "Gun: Deal ranged Stab+Ice damage to one enemy. Increase damage taken until it activates.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Volt Rounds":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Gun Mastery (Lv 3)",
        "Description": "Gun: Deal ranged Stab+Volt damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Charged Volt":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Volt Rounds (Lv 5)",
        "Description": "Gun: Deal ranged Stab+Volt damage to one enemy. Increase damage taken until it activates.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Burst Shot":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Charged Fire/Ice/Volt (Lv 2)",
        "Description": "Gun: Deal ranged Stab+Fire+Ice+Volt damage to one enemy. Increase damage taken until it activates. Afterwards, becomes disabled for 3 turns.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Head Snipe":{
        "Usage": "Active (Arms, AGI, LUC)",
        "Unlock": "Gun Mastery (Lv 5)",
        "Description": "Gun: Deal ranged Stab damage to one enemy, with a chance to inflict Head Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Arm Snipe":{
        "Usage": "Active (Arms, AGI, LUC)",
        "Unlock": "Gun Mastery (Lv 5)",
        "Description": "Gun: Deal ranged Stab damage to one enemy, with a chance to inflict Arm Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Leg Snipe":{
        "Usage": "Active (Arms, AGI, LUC)",
        "Unlock": "Gun Mastery (Lv 5)",
        "Description": "Gun: Deal ranged Stab damage to one enemy, with a chance to inflict Leg Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Charged Shot":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Gun Mastery (Lv 7)",
        "Description": "Gun: Deal ranged Stab damage to one enemy. Increase damage taken until it activates.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Ricochet":{
        "Usage": "Active (Arms, AGI)",
        "Unlock": "Gun Mastery (Lv 10)",
        "Description": "Gun: Deal multiple hits of ranged Stab damage to random enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Cover Fire":{
        "Usage": "Passive",
        "Unlock": "HP Up (Lv 1)",
        "Description": "When you Defend in the back line, restore HP to the front line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Shell Shock":{
        "Usage": "Active (Arms, LUC)",
        "Unlock": "HP Up (Lv 10)",
        "Description": "Weaken the enemy back line for this turn, which decreases their offense, defense, accuracy and evasion. Also attempts to inflict Stun.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Preemptive Shell":{
        "Usage": "Passive",
        "Unlock": "Shell Shock (Lv 5)",
        "Description": "Chance to automatically activate Shell Shock at the start of battle.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "Phys ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Penetrator":{
        "Usage": "Passive",
        "Unlock": "Phys ATK Up (Lv 5)",
        "Description": "All single-target attacks gain pierce effect. For single-target attacks against the back row or with natural pierce effect, increases damage dealt instead.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Point Blank":{
        "Usage": "Active (Head)",
        "Unlock": "Phys ATK Up (Lv 10)",
        "Description": "Enter a charge state until the end of next turn, which turns ranged attacks into melee but increases their damage dealt and accuracy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Act Quick":{
        "Usage": "Active (Arms)",
        "Unlock": "TP Up (Lv 5)",
        "Description": "Enter a charge state until the end of next turn, which increases action speed and decreases TP costs.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Double Action":{
        "Usage": "Passive",
        "Unlock": "TP Up (Lv 10)",
        "Description": "Chance for attack skills to be activated an additional time.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Take":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"War Magus":{
    "War Edge Power":{
        "Usage": "Force Boost",
        "Description": "War Edge skills will apply their secondary effect even if the target doesn't have an ailment.",
        "Starter": "0",
        "Max Level": "0",
        "Data": ""
    },
    "Fairy Robe":{
        "Usage": "Force Break (Arms, TEC+VIT)",
        "Description": "Restore HP and remove binds/ailments for the whole party. Until the end of turn, prevent all types of negative inflictions (bind/ailment/stun/instakill/debuff) to the party.",
        "Starter": "0",
        "Max Level": "3",
        "Levels": ["1", "60", "99"],
        "Data": ""
    },
    "War Lore Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase the effect of War Lore skills. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "War Heal":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "War Lore Mastery (Lv 1)",
        "Description": "Restore HP to one ally at the start of turn, then again at the end of turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "War Heal Line":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "War Heal (Lv 5)",
        "Description": "Restore HP to an ally line at the start of turn, then again at the end of turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "War Heal All":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "War Heal Line (Lv 5)",
        "Description": "Restore HP to the whole party at the start of turn, then again at the end of turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Warmight":{
        "Usage": "Active (Head)",
        "Unlock": "War Lore Mastery (Lv 3)",
        "Description": "Place a buff on one ally for several turns, which increases physical/elemental damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Rockskin":{
        "Usage": "Active (Head)",
        "Unlock": "War Lore Mastery (Lv 3)",
        "Description": "Place a buff on one ally for several turns, which decreases physical/elemental damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Artery":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "War Lore Mastery (Lv 5)",
        "Description": "Place a buff on the whole party for several turns, which restores HP to each target when they act.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "War Response":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Artery (Lv 5)",
        "Description": "Place a debuff on one enemy for several turns, which restores HP to the whole party when the target acts.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Random Disease":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "War Lore Mastery (Lv 7)",
        "Description": "Attempt to inflict one of Blind, Poison, Paralysis, Sleep, Fear or Curse on one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Displace":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "War Lore Mastery (Lv 7)",
        "Description": "Remove binds and ailments on one ally, then attempt to inflict them onto one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Barrier":{
        "Usage": "Active (Arms)",
        "Unlock": "Random Disease (Lv 3), Displace (Lv 3)",
        "Description": "Chance to nullify bind/ailment/debuff inflictions to party members this turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "War Revive":{
        "Usage": "Active (Head)",
        "Unlock": "War Lore Mastery (Lv 10)",
        "Description": "Revive one ally at the start of the turn, then there's a chance to revive them again at the end of the turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "War Edge Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Allows you to also use War Edge skills with a Staff. If a Sword is equipped, increase Max TP. If a Staff is equipped, increase all damage dealt. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Strength Slash":{
        "Usage": "Active (Arms, STR+TEC)",
        "Unlock": "War Edge Mastery (Lv 1)",
        "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, place a debuff on them for several turns, which decreases physical/elemental damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Guard Slash":{
        "Usage": "Active (Arms, STR+TEC)",
        "Unlock": "War Edge Mastery (Lv 1)",
        "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, place a debuff on them for several turns, which increases physical/elemental damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Headcut":{
        "Usage": "Active (Arms, STR+TEC, LUC)",
        "Unlock": "War Edge Mastery (Lv 5)",
        "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, attempt to inflict Head Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Armcut":{
        "Usage": "Active (Arms, STR+TEC, LUC)",
        "Unlock": "War Edge Mastery (Lv 5)",
        "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, attempt to inflict Arm Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Legcut":{
        "Usage": "Active (Arms, STR+TEC, LUC)",
        "Unlock": "War Edge Mastery (Lv 5)",
        "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, attempt to inflict Leg Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Ailing Slash":{
        "Usage": "Active (Arms, STR+TEC)",
        "Unlock": "War Edge Mastery (Lv 10)",
        "Description": "(War Edge) Sword: Deal melee Cut+Almighty damage to one enemy. If the target has an ailment, increase damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Vampire":{
        "Usage": "Passive",
        "Unlock": "Ailing Slash (Lv 5)",
        "Description": "If you deal damage to an enemy with an ailment, restore HP to your line. (Max once per turn)",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Phys ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Curb DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Chop":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Beast":{
    "Desperation":{
        "Usage": "Force Boost",
        "Description": "Drastically increase Max HP. (When activated, also fully restores your HP)",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "Max HP↑": ["x3.0"],
        }
    },
    "True Endurance":{
        "Usage": "Force Break (Arms, STR, VIT)",
        "Description": "For this turn, nullify all bind/ailment/stun inflictions received, survive all lethal damage with 1 HP, and take all attacks in place of your allies. At the end of turn, if your HP is not full, deal melee Stab damage to all enemies.",
        "Starter": "0",
        "Max Level": "3",
        "Levels": ["1", "60", "99"],
        "Data": {
            "Attack Power": ["300%", "600%", "900%"],
        }
    },
    "Loyalty Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Chance to halve any attack damage received. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Lick Wounds":{
        "Usage": "Passive (Head, TEC+VIT)",
        "Unlock": "Loyalty Mastery (Lv 1)",
        "Description": "Restore HP and remove binds for one ally.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Auto-Lick":{
        "Usage": "Passive",
        "Unlock": "Lick Wounds (Lv 5)",
        "Description": "Chance to automatically cast Lick Wounds on yourself each time you're hit.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "Protect":{
        "Usage": "Passive (Arms)",
        "Unlock": "Loyalty Mastery (Lv 3)",
        "Description": "Protect one ally for this turn, which makes you take attacks in their place. Decrease damage taken from those reditected attacks.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Hit-Taker":{
        "Usage": "Active (Arms)",
        "Unlock": "Loyalty Mastery (Lv 3)",
        "Description": "Protect the whole party for this turn, which makes you take attacks in their place a certain amount of times. Decrease damage taken from those reditected attacks.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Protection Vow":{
        "Usage": "Active (Arms)",
        "Unlock": "Protect (Lv 3), Hit Taker (Lv 3)",
        "Description": "Place a buff on yourself for several turns, which makes you take attacks in place of party members below 50% HP. Decrease damage taken from those redirected attacks.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Self-Defense":{
        "Usage": "Active (Head)",
        "Unlock": "Loyalty Mastery (Lv 5)",
        "Description": "Place a buff on yourself for several turns, which decreases physical/elemental damage dealt and taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Beast Roar":{
        "Usage": "Active (Head)",
        "Unlock": "Loyalty Mastery (Lv 7)",
        "Description": "Place a debuff on all enemies for several turns, which decreases physical damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Preemptive Roar":{
        "Usage": "Passive",
        "Unlock": "Beast Roar (Lv 5)",
        "Description": "Chance to automatically cast Beast Roar at the start of battle.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "Claw Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt if a Claw is equipped. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Tiger Blow":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Claw Mastery (Lv 1)",
        "Description": "Claw: Deal melee Bash damage to one enemy. Recover HP based on damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Wolf Fang":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Tiger Blow (Lv 5)",
        "Description": "Claw: Deal 3 hits of melee Cut damage to one enemy. Deals more damage the more remaining HP you have.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Comet Drop":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Claw Mastery (Lv 3)",
        "Description": "Claw: Deal melee Bash damage to an enemy line. Also hits yourself, but at half the power.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Wildblow":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Comet Drop (Lv 5)",
        "Description": "Claw: Deal melee Bash damage to one enemy. Deals more damage the more missing HP you have.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Beast Dance":{
        "Usage": "Active (Legs, STR)",
        "Unlock": "Claw Mastery (Lv 5)",
        "Description": "Claw: Deal melee Cut damage to all enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Savage Rush":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Claw Mastery (Lv 7)",
        "Description": "Claw: Deal 3~6 hits of melee Bash damage to random enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Berserk":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Beast Dance (Lv 3), Savage Rush (Lv 3)",
        "Description": "Claw: Deal 5 hits of ranged Cut damage to random allies or enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Endurance":{
        "Usage": "Active (Arms, STR+VIT)",
        "Unlock": "Loyalty Mastery (Lv 10), Claw Mastery (Lv 10)",
        "Description": "Decrease damage taken for this turn. At the end of turn, deal melee Cut damage to all enemies.",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Deadly Resolve":{
        "Usage": "Passive",
        "Unlock": "HP Up (Lv 5)",
        "Description": "Chance to survive lethal damage with 1 HP.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Phys ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Phys DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Bull Charge":{
        "Usage": "Active (Legs)",
        "Unlock": "Phys ATK Up (Lv 5), Phys DEF Up (Lv 5)",
        "Description": "Enter a charge state until the end of next turn, which increases damage dealt and decreases damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Natural Instinct":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Sovereign":{
    "Victory Vow":{
        "Usage": "Force Boost",
        "Description": "Order skills affect the whole party, and their TP cost is decreased.",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "TP Cost↓": ["-50%"],
        }
    },
    "Proof of Nobility":{
        "Usage": "Force Break (Head)",
        "Description": "Restore HP and TP to the whole party. Healing is based on each target's Max HP and Max TP.",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "HP Gain": ["20+30%"],
            "TP Gain": ["10+30%"],
        }
    },
    "Order Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "When you use an Order skill, restore HP to the targets. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Attack Order":{
        "Usage": "Active (Head)",
        "Unlock": "Order Mastery (Lv 1)",
        "Description": "Place a buff on an ally line for several turns, which increases physical/elemental damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Guard Order":{
        "Usage": "Active (Head)",
        "Unlock": "Order Mastery (Lv 1)",
        "Description": "Place a buff on an ally line for several turns, which decreases physical/elemental damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Dauntless Order":{
        "Usage": "Active (Head)",
        "Unlock": "Attack/Guard Order (Lv 3)",
        "Description": "Place a buff on an ally line for several turns, which gives them a chance to survive lethal damage, restoring HP if it activates.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Holy Crown":{
        "Usage": "Active (Head)",
        "Unlock": "Order Mastery (Lv 3)",
        "Description": "Place a buff on one ally or several turns, which increases the effect of healing skills received.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Protect Order":{
        "Usage": "Active (Head, TEC+VIT)",
        "Unlock": "Holy Crown (Lv 3)",
        "Description": "Place a buff on an ally line for several turns, which restores HP at the end of each turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Ad Nihilo":{
        "Usage": "Active (Arms, TEC)",
        "Unlock": "Order Mastery (Lv 5)",
        "Description": "Dispel one buff and debuff from an enemy. Deal Almighty damage to the target if at least one modifier was removed.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Negotiation":{
        "Usage": "Active (Head)",
        "Unlock": "Order Mastery (Lv 5)",
        "Description": "Dispel one buff and one debuff from an ally. Restore HP and Force to the target if at least one modifier was removed, doubled if both.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "White Noble":{
        "Usage": "Active (Head)",
        "Unlock": "Negotiation (Lv 5)",
        "Description": "Dispel one buff and one debuff from all allies. Restore HP and Force to the targets where at least one modifier was removed, doubled if both.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Clearance":{
        "Usage": "Active (Head)",
        "Unlock": "Ad Nihilo (Lv 2), White Noble (Lv 2)",
        "Description": "Dispel all ally buffs, ally debuffs, enemy buffs, and enemy debuffs. Recover TP for each modifier type that was removed.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Prevent Order":{
        "Usage": "Active (Head)",
        "Unlock": "Order Mastery (Lv 7)",
        "Description": "Place a buff on an ally line for several turns, which nullifies ailment inflictions received. (Buff is consumed when activated)",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Morale Boost":{
        "Usage": "Passive",
        "Unlock": "Order Mastery (Lv 10)",
        "Description": "Increase Force gains of allies with buffs. (Does not stack)",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Link Order":{
        "Usage": "Active (Arms, TEC)",
        "Unlock": "TP Up (Lv 1)",
        "Description": "Target one enemy and prepare to follow up after the first elemental attack to them this turn. Deals ranged damage of the same element to the target. Up to 40% of the triggering attack's damage is added to this attacks own calculated damage.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Link Order II":{
        "Usage": "Active (Arms, TEC)",
        "Unlock": "Link Order (Lv 5)",
        "Description": "Target one enemy and prepare to follow up after the first elemental attack to them this turn. Deals ranged damage of the same element to all enemies. Up to 40% of the triggering attack's damage is added to this attacks own calculated damage.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Fire Circle":{
        "Usage": "Active (Arms)",
        "Unlock": "TP Up (Lv 5)",
        "Description": "For this turn, increase the Fire resistance of all allies and decrease the Fire resistance of all enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Freeze Circle":{
        "Usage": "Active (Arms)",
        "Unlock": "TP Up (Lv 5)",
        "Description": "For this turn, increase the Ice resistance of all allies and decrease the Ice resistance of all enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Shock Circle":{
        "Usage": "Active (Arms)",
        "Unlock": "TP Up (Lv 5)",
        "Description": "For this turn, increase the Volt resistance of all allies and decrease the Volt resistance of all enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Cheer":{
        "Usage": "Active (Head)",
        "Unlock": "TP Up (Lv 10)",
        "Description": "Only usable if you dispelled a buff or debuff on an ally last turn. Restore TP to other allies in your line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Royal Veil":{
        "Usage": "Passive",
        "Unlock": "HP Up (Lv 5)",
        "Description": "At the end of turn, if your HP is full, restore HP to the whole party.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Triumphant Cry":{
        "Usage": "Passive",
        "Unlock": "HP Up (Lv 10)",
        "Description": "Restore HP to the whole party at the end of battle.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Monarch March":{
        "Usage": "Passive (Field)",
        "Unlock": "Royal Veil (Lv 3), Triumphant Cry (Lv 3)",
        "Description": "Restore HP to the whole party for every 3 steps taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Curb DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Take":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Fafnir":{
    "Transform":{
        "Usage": "Force Boost",
        "Description": "Increase damage dealt and Max HP. Changes your elemental skills, and enables additional skills that are unlocked throughout the story. (When activated, also fully restores your HP)",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "Damage Dealt↑":["x1.5"],
            "Max HP↑":["x2.0"],
        }
    },
    "Ignition Ray / Akashic Nova":{
        "Usage": "Force Break (Head, TEC)",
        "Description": "Deal ranged Fire+Ice+Volt damage to one enemy/all enemies. (Upgraded during the story)",
        "Starter": "0",
        "Max Level": "3",
        "Levels": ["1", "60", "99"],
        "Data": {
            "Attack Power": ["1000%", "1600%", "2100%"],
        }
    },
    "Meteor Smash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Story",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Power Cell":{
        "Usage": "Passive",
        "Unlock": "Story",
        "Description": ".",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Extend":{
        "Usage": "Active (Head)",
        "Unlock": "Story",
        "Description": ".",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Self-Regenerate":{
        "Usage": "Passive",
        "Unlock": "Story",
        "Description": ".",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Accelerate":{
        "Usage": "Active (Head)",
        "Unlock": "Story",
        "Description": ".",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Blade Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase damage dealt if a Sword or Katana is equipped. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Sonic Raid":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Blade Mastery (Lv 1)",
        "Description": "Sword/Katana: Deal melee Cut damage to one enemy at the start of turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Gale Rush":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Sonic Raid (Lv 5)",
        "Description": "Sword/Katana: Deal 2~3 hits of melee Cut damage to random enemies in a line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Flame Sabre":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Blade Mastery (Lv 3)",
        "Description": "Sword/Katana: Deal melee Cut+Fire damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Fire Wave":{
        "Usage": "Active (Head, TEC)",
        "Description": "Transformed from Flame Sabre. Deal 10 hits of ranged Fire damage to random enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Freeze Sabre":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Blade Mastery (Lv 3)",
        "Description": "Sword/Katana: Deal melee Cut+Ice damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Ice Wave":{
        "Usage": "Active (Head, TEC)",
        "Description": "Transformed from Freeze Sabre. Deal 10 hits of ranged Ice damage to random enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Shock Sabre":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Blade Mastery (Lv 3)",
        "Description": "Sword/Katana: Deal melee Cut+Volt damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Thunder Wave":{
        "Usage": "Active (Head, TEC)",
        "Description": "Transformed from Shock Sabre. Deal 10 hits of ranged Volt damage to random enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Delayed Chase":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Blade Mastery (Lv 5)",
        "Description": "Prepare to follow up after your own elemental attacks on the next turn. Hits the same targets with Cut damage plus the element of the triggering attack.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Blade Recoil":{
        "Usage": "Active (Arms, STR, TEC)",
        "Description": "Transformed from Delayed Chase. Deal melee Cut damage to one enemy. If you used an elemental attack last turn, perform an additional hit of that same element.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Overkiller":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Blade Mastery (Lv 7)",
        "Description": "Deal melee Cut damage to one enemy. If it kills the target, repeat the damage dealt to all other enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Full Slash":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Overkiller (Lv 3)",
        "Description": "Deal melee Cut damage to one enemy. Deals more damage the more HP the target has.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Resonance":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Blade Mastery (Lv 10)",
        "Description": "Deal melee Cut damage to one enemy. Damage increases with each passing turn, up to a certain limit.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Force Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase Force Gauge gains. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Vital Shut":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Force Mastery (Lv 1)",
        "Description": "Place a debuff on one enemy for several turns, which increases physical damage taken. Also attempts to inflict Arm Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Mind Shut":{
        "Usage": "Active (Head, LUC)",
        "Unlock": "Force Mastery (Lv 1)",
        "Description": "Place a debuff on one enemy for several turns, which increases elemental damage taken. Also attempts to inflict Head Bind.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Absorb":{
        "Usage": "Active (No Parts)",
        "Unlock": "Force Mastery (Lv 3)",
        "Description": "Remove binds on yourself and recover Force.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "5",
        "Data": ""
    },
    "Force Charge":{
        "Usage": "Active (Head)",
        "Unlock": "Absorb (Lv 5)",
        "Description": "Enter a charge state until the end of next turn, which increases damage dealt and Force gains.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Force Shield":{
        "Usage": "Active (Head)",
        "Unlock": "Force Mastery (Lv 5)",
        "Description": "Increase remaining Force Boost duration by 1 turn, and decrease damage taken for this turn.",
        "Starter": "0",
        "Max Level": "10",
        "Natural Level": "6",
        "Data": ""
    },
    "Force Energy":{
        "Usage": "Passive",
        "Unlock": "Force Shield (Lv 5)",
        "Description": "During Force Boost, recover TP at the end of each turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Force Reset":{
        "Usage": "Active (Head)",
        "Unlock": "Force Mastery (Lv 10)",
        "Description": "End your Force Boost and recover Force.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Limit Break":{
        "Usage": "Passive",
        "Unlock": "Force Reset (Lv 5)",
        "Description": "During battle, your Force Gauge can go above 100.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Phys ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Elem ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Weapon Free":{
        "Usage": "Passive",
        "Unlock": "Phys ATK Up (Lv 3), Elem ATK Up (Lv 3)",
        "Description": "Allows you to use weapon-locked skills without equipping the required weapon, but they deal less damage if you do.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Mine":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Highlander":{
    "Hero Battle":{
        "Usage": "Force Boost",
        "Description": "Increase damage dealt with Spear skills. Restore HP to the party based on your damage dealt.",
        "Starter": "0",
        "Max Level": "1",
        "Data": {
            "Damage Dealt↑":["x1.5"],
            "Damage Drain":["25%"],
        }
    },
    "Gae Bolg":{
        "Usage": "Force Break (Arms, STR)",
        "Description": "Spend 20% of all allies' current HP to deal ranged typeless damage to all enemies.",
        "Starter": "0",
        "Max Level": "3",
        "Levels": ["1", "60", "99"],
        "Data": {
            "Attack Power": ["600%", "1200%", "1800%"],
        }
    },
    "Spear Mastery":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "Increase physical damage dealt if a Spear is equipped. (Automatically unlocks other skills that require this one)",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Long Thrust":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 1)",
        "Description": "Spear: Deal ranged Stab damage to one enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Draining Thrust":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 2)",
        "Description": "Spear: Spend part of your current HP to deal melee Stab damage to the enemy front line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Draining Burst":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Draining Thrust (Lv 5)",
        "Description": "Spear: Spend part of other allies' HP to deal melee Stab damage to the enemy front line.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Legion Thrust":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 2)",
        "Description": "Spear: Spend part of your current HP to deal melee Stab damage to all enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Legion Burst":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Legion Thrust (Lv 5)",
        "Description": "Spear: Spend part of other allies' HP to deal melee Stab damage to all enemies.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Head Pierce":{
        "Usage": "Active (Arms, STR, LUC)",
        "Unlock": "Spear Mastery (Lv 3)",
        "Description": "Spear: Deal melee Stab damage to one enemy, with a chance to inflict Head Bind or Instant Death.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Spear Assist":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 5)",
        "Description": "Spear: Deal melee Stab damage to one enemy at the end of turn. If any allies have used elemental attacks this turn, add the element of the most recent one and increase damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Delayed Charge":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Spear Mastery (Lv 10)",
        "Description": "Spear: Spend part of your current HP to prepare an attack that will hit in 2~4 more turns, at the end of the turn. Deals ranged Stab damage to one enemy. Using Cross Charge activates it early, but damage is multiplied by 0.75 for each remaining charge turn. (Can't use again while preparing. Cancelled if you die while preparing)",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Cross Charge":{
        "Usage": "Active (Arms, STR)",
        "Unlock": "Delayed Charge (Lv 3)",
        "Description": "Spear: Spend part of your current HP to deal melee Stab damage to one enemy. If Delayed Charge is preparing, activate it and increase this skill's damage dealt.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Phys ATK Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Turning Tide":{
        "Usage": "Passive",
        "Unlock": "Phys ATK Up (Lv 1)",
        "Description": "Restore HP to the whole party each time you kill an enemy.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Bloody Offense":{
        "Usage": "Active (Head)",
        "Unlock": "Phys ATK Up (Lv 3)",
        "Description": "Place a buff on an ally line for several turns, which increases physical/elemental damage dealt but makes them lose HP when they act.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Bloodlust":{
        "Usage": "Passive",
        "Unlock": "Turning Tide (Lv 3), Bloody Offense (Lv 3)",
        "Description": "Chance to attack a random enemy each time you lose HP. (Max once per turn)",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Stigmata":{
        "Usage": "Active (No Parts, LUC)",
        "Unlock": "Phys ATK Up (Lv 5)",
        "Description": "Attempt to inflict multiple binds on yourself and one enemy. If you have an ailment, remove it and attempt to inflict it on the target.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Phys DEF Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Battle Instinct":{
        "Usage": "Passive",
        "Unlock": "Phys DEF Up (Lv 1)",
        "Description": "At the start of battle there's a chance to place a buff on the whole party for 3 turns, which nullifies one ailment infliction. (Buff is consumed when activated)",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Blood Fortune":{
        "Usage": "Active (Head)",
        "Unlock": "Phys DEF Up (Lv 3)",
        "Description": "Spend part of the whole party's current HP to place a buff on the whole party for several turns, which increases bind/ailment infliction rate.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Allied Bonds":{
        "Usage": "Passive",
        "Unlock": "Battle Instinct (Lv 3), Blood Fortune (Lv 3)",
        "Description": "If one of your skills consumes HP of other allies in your line, restore TP to them at the end of turn.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Spirit Shield":{
        "Usage": "Active (Head)",
        "Unlock": "Phys DEF Up (Lv 5)",
        "Description": "Spend part of your current HP to place a buff on an ally line for several turns, which decreases elemental damage taken.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "HP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Limitless":{
        "Usage": "Active (Head)",
        "Unlock": "HP Up (Lv 1)",
        "Description": "Enter a charge state until the end of next turn, which increases damage dealt and lets you use weapon-locked skills without equipping the required weapon.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Black Sabbath":{
        "Usage": "Active (Head, STR)",
        "Unlock": "HP Up (Lv 10)",
        "Description": "Deal typeless damage to all enemies, restore HP to the party based on damage dealt. Damage dealt cannot exceed the party's total missing HP.",
        "Starter": "0",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "TP Up":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
    "Mine":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": ".",
        "Starter": "1",
        "Max Level": "20",
        "Natural Level": "10",
        "Data": ""
    },
},
"Enemy Grimoires":{

},
"Battle Items":{
    "Healing":{
        "Medica / Medica II / Medica III / Medica IV":{
            "Usage": "20 / 100 / 800 / 5.000 en",
            "Description": "Restores HP to one ally.",
            "Starter": "0",
            "Max Level": "4",
            "Data": {
                "HP Gain": ["50", "100", "200", "500"],
            }
        },
        "Soma / Soma Prime":{
            "Usage": "1.600 / 5.000 en",
            "Description": "Restores HP to the whole party.",
            "Starter": "0",
            "Max Level": "2",
            "Data": {
                "HP Gain": ["80", "160"],
            }
        },
        "Amrita / Amrita II":{
            "Usage": "1.500 / ? en",
            "Description": "Restores TP to one ally.",
            "Starter": "0",
            "Max Level": "3",
            "Data": {
                "TP Gain": ["50", "100"],
            }
        },
        "Hamao / Hamao Prime":{
            "Usage": "2.000 / 5.000 en",
            "Description": "Restores HP and TP to one ally.",
            "Starter": "0",
            "Max Level": "2",
            "Data": {
                "HP Gain": ["100", "200"],
                "TP Gain": ["20", "40"],
            }
        },
        "Nectar / Nectar II":{
            "Usage": "300 / 6.500 en",
            "Description": "Revives one dead ally.",
            "Starter": "0",
            "Max Level": "2",
            "Data": {
                "HP Gain": ["20", "200"],
            }
        },
    },
    "Status":{
        "Theriaca A / Theriaca B":{
            "Usage": "150 / 250 en",
            "Description": "Respectively removes binds or ailments from one ally.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Metopon":{
            "Usage": "2.500 en",
            "Description": "Removes all buffs and debuffs on one enemy.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Unihorn":{
            "Usage": "2.500 en",
            "Description": "Removes all buffs and debuffs on the party.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Power Up":{
        "Bravant":{
            "Usage": "500 en",
            "Description": "Places a buff on one ally for 5 turns, which increases physical damage dealt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Damage Dealt↑": ["+30%"],
            }
        },
        "Stonard":{
            "Usage": "500 en",
            "Description": "Places a buff on one ally for 5 turns, which decreases physical damage taken.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Damage Taken↓": ["-30%"],
            }
        },
        "Axcela":{
            "Usage": "800 en",
            "Description": "Restores Force to one ally.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Force Gain": ["10%"],
            }
        },
        "Blaze/Freeze/Shock Oil":{
            "Usage": "200 en",
            "Description": "Places a buff on one ally for 5 turns, which imbues their weapon with Fire/Ice/Volt damage.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Fire/Ice/Volt Mist":{
            "Usage": "1.000 en",
            "Description": "Places a buff on all allies for 5 turns, which increases resistance to Fire/Ice/Volt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Resistance↑": ["+35%"],
            }
        },
        "All Mist":{
            "Usage": "3.000 en",
            "Description": "Places a buff on all allies for 5 turns, which increases resistance to Fire, Ice and Volt.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Resistance↑": ["+20%"],
            }
        },
    },
    "Attack (TEC)":{
        "Fire/Ice/Volt Jar":{
            "Usage": "200 en",
            "Description": "Deals ranged Fire/Ice/Volt damage to one enemy.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["180%"],
                "Action Speed": ["90%"],
            }
        },
        "Flame/Frost/Storm Jar":{
            "Usage": "1.200 en",
            "Description": "Deals ranged Fire/Ice/Volt damage to all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["220%"],
                "Action Speed": ["90%"],
            }
        },
        "Cut/Bash/Stab Jar":{
            "Usage": "1.200 en",
            "Description": "Deals ranged Cut/Bash/Stab damage to all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Attack Power": ["100%"],
                "Action Speed": ["200%"],
            }
        },
    },
    "Infliction (LUC)":{
        "Blind/Poison/Stun/Addle/Curse/Sleep/Fear/Petrify Gas":{
            "Usage": "250 / 950 / 250 / 650 / 1.250 / 650 / 1.250 / 1.750 en",
            "Description": "Respectively attempts to inflict Blind, Poison, Paralysis, Panic, Curse, Sleep, Fear or Petrify on all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Infliction Chance": ["40%"],
                "Poison Damage": ["50"],
                "Action Speed": ["80%"],
            }
        },
        "Head/Arm/Leg Liberator":{
            "Usage": "400 en",
            "Description": "Respectively attempts to inflict Head Bind, Arm Bind or Leg Bind on all enemies.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "Infliction Chance": ["40%"],
                "Action Speed": ["80%"],
            }
        },
    },
    "Action Cancel":{
        "Flash Grenade":{
            "Usage": "20 en",
            "Description": "Prevents nearby FOEs from moving for 1 turn.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Blast Grenade":{
            "Usage": "100 en",
            "Description": "Stun an enemy that's preparing an attack.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    },
    "Rewards":{
        "Formaldehyde":{
            "Usage": "4.000 en",
            "Description": "Until the end of turn, enemies killed will drop all their materials regardless of conditions.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Holy Gift":{
            "Usage": "2.800 en",
            "Description": "Increases EXP earned this battle.",
            "Starter": "0",
            "Max Level": "1",
            "Data": {
                "EXP Gain↑": ["+40%"],
            }
        },
        "Fortune Scarab":{
            "Usage": "1.000 en",
            "Description": "If used during a Grimoire chance, grants 100% chance to create a Grimoire Stone.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
        "Wisdom Horn":{
            "Usage": "3.500 en",
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
        "Return Flute":{
            "Usage": "200 en",
            "Description": "Escape from battle and teleport to the point where you entered the floor.",
            "Starter": "0",
            "Max Level": "0",
            "Data": ""
        },
    }
},
}

//End of database

var descriptions = {
    "Landsknecht": "Frontline warriors focused on strong physical offense.",
    "Survivalist": "Archers with great agility and exploration knowledge.",
    "Protector": "Sturdy knights that keep the party safe from harm.",
    "Dark Hunter": "Ruthless fighters that immobilize then finish off enemies.",
    "Medic": "Healers that effectively treat any injury or affliction.",
    "Alchemist": "Elemental casters that strike the enemy's weakness.",
    "Troubadour": "Musicians that grant buffs to bolster and energize allies.",
    "Ronin": "Katana users who change stances to adapt to the situation.",
    "Hexer": "Support casters that weaken, incapacitate and control the enemy.",
    "Gunner": "Versatile Gun users that can cover damage, binds or healing.",
    "War Magus": "Witch doctors who can treat ally injuries or worsen the enemy's.",
    "Beast": "Fierce but loyal animals that protect allies with their own body.",
    "Sovereign": "Support casters that manage buffs to strengthen the party.",
    "Highlander": "Spear users that sacrifice life force to perform powerful attacks.",
    "Fafnir": "A swordsman with high control of Force. He can transform to increase his capabilities.",
    "Enemy Grimoires": "Enemy skills available for use through Grimoire Stones.",
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
        description.innerText = current_skill["Description"]

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

            second_row = document.createElement("tr")
            skill_table.appendChild(second_row)

            usage = document.createElement("td")
            second_row.appendChild(usage)
            usage.innerText = current_skill["Usage"]
            
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



