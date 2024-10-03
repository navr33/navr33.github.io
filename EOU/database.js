var data = {
"Landsknecht":{

},
"Survivalist":{

},
"Protector":{

},
"Dark Hunter":{

},
"Medic":{

},
"Alchemist":{

},
"Troubadour":{

},
"Ronin":{

},
"Hexer":{

},
"Highlander":{

},
"Gunner":{

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
            "Usage": "800 / w.000 en",
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



