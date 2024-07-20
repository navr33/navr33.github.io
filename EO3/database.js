var data = {
"Sovereign":{
    "Royal Lineage":{
        "Usage": "Passive (Unique)",
        "Unlock": "N/A",
        "Description": "When you receive a buff, recover TP.",
        "Starter": "0",
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
            "Damage Taken": ["-20%", "-22%", "-24%", "-27%", "-30%", "-33%", "-36%", "-39%", "-42%", "-45%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Reinforce":{
        "Usage": "Passive",
        "Unlock": "Guard Order (Lv 1)",
        "Description": "When you apply a buff, the targets recover HP.",
        "Starter": "0",
        "Max Level": "10",
        "Data": {
            "HP Gain": ["6", "10", "14", "18", "22", "26", "30", "34", "38", "42"],
        }
    },
    "Prevent Order":{
        "Usage": "Active (Head)",
        "Unlock": "Guard Order (Lv 3)",
        "Description": "Place a buff on an ally row for 3 turns, which nullifies one ailment infliction received.",
        "Starter": "0",
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
        "Starter": "0",
        "Max Level": "10",
        "Data": {
            "TP Cost": ["6", "6", "7", "7", "8", "8", "9", "9", "10", "10"],
            "Max HP": ["+30%", "+33%", "+36%", "+39%", "+43%", "+47%", "+51%", "+55%", "+60%", "+70%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Protect Order":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Rally Order (Lv 5)",
        "Description": "Place a buff on an ally row for 3 turns, which restores HP at the end of each turn.",
        "Starter": "0",
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
        "Description":"Place a buff on an ally row for 3 turns, which increases physical damage dealt.",
        "Starter": "1",
        "Max Level":"10",
        "Data":{
            "TP Cost":["8", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
            "Damage Dealt":["+20%", "+22%", "+24%", "+27%", "+30%", "+33%", "+36%", "+39%", "+42%", "+45%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Fire Arms":{
        "Usage": "Active (Head)",
        "Unlock": "Attack Order (Lv 1)",
        "Description":"Place a buff on one ally for 3 turns, which decreases vulnerability to Fire and imbues their weapon with Fire damage.",
        "Starter": "0",
        "Max Level":"5",
        "Data":{
            "TP Cost":["6", "7", "8", "9", "10"],
            "Vulnerability":["-10%", "-20%", "-30%", "-40%", "-50%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Freeze Arms":{
        "Usage": "Active (Head)",
        "Unlock": "Attack Order (Lv 1)",
        "Description":"Place a buff on one ally for 3 turns, which decreases vulnerability to Ice and imbues their weapon with Ice damage.",
        "Starter": "0",
        "Max Level":"5",
        "Data":{
            "TP Cost":["6", "7", "8", "9", "10"],
            "Vulnerability":["-10%", "-20%", "-30%", "-40%", "-50%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Shock Arms":{
        "Usage": "Active (Head)",
        "Unlock": "Attack Order (Lv 1)",
        "Description":"Place a buff on one ally for 3 turns, which decreases vulnerability to Volt and imbues their weapon with Volt damage.",
        "Starter": "0",
        "Max Level":"5",
        "Data":{
            "TP Cost":["6", "7", "8", "9", "10"],
            "Vulnerability":["-10%", "-20%", "-30%", "-40%", "-50%"],
            "Action Speed": ["+6", "+6", "+6", "+6", "+6"],
        }
    },
    "Regal Radiance":{
        "Usage": "Active (Head, STR)",
        "Unlock": "Attack Order (Lv 3)",
        "Description":"Dispel an elemental imbue (Arms buff or Oil item) on one ally. If successful, deal ranged damage of that element to all enemies. This attack cannot miss.",
        "Starter": "0",
        "Max Level":"10",
        "Data":{
            "TP Cost":["12", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
            "Attack Power":["160%", "162%", "164%", "166%", "168%", "172%", "176%", "180%", "185%", "190%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Ad Nihilo":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Guard Order (Lv 5), Attack Order (Lv 5)",
        "Description":"Dispel all buffs on one enemy. If successful, deal ranged Almighty damage to that enemy. This attack cannot miss.",
        "Starter": "1",
        "Max Level":"10",
        "Data":{
            "TP Cost":["12", "12", "13", "13", "14", "14", "15", "15", "16", "16"],
            "Damage Taken":["130%", "140%", "150%", "160%", "170%", "180%", "195%", "210%", "225%", "240%"],
            "Action Speed": ["-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3", "-3"],
        }
    },
    "Royal Veil":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "At the end of each turn, if your HP is full, restore HP to the whole party.",
        "Starter": "1",
        "Max Level": "10",
        "Data":{
            "HP Gain": ["4", "7", "10", "14", "18", "22", "28", "34", "40", "46"],
        }
    },
    "Triumphant Cry":{
        "Usage": "Passive",
        "Unlock": "Royal Veil (Lv 5)",
        "Description": "If you're alive at the end of a battle, restore HP to the whole party.",
        "Starter": "0",
        "Max Level": "10",
        "Data":{
            "HP Gain": ["10", "14", "18", "22", "26", "32", "38", "44", "50", "60"],
        }
    },
    "Monarch March":{
        "Usage": "Passive (Field)",
        "Unlock": "Triumphant Cry (Lv 5)",
        "Description": "Restore HP to the whole party for each step taken.",
        "Starter": "0",
        "Max Level": "10",
        "Data":{
            "HP Gain": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        }
    },
    "Nobility Proof":{
        "Usage": "Passive",
        "Unlock": "N/A",
        "Description": "When a buff on you wears off or is dispelled, recover TP.",
        "Starter": "1",
        "Max Level": "10",
        "Data":{
            "TP Gain": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        }
    },
    "Negotiation":{
        "Usage": "Active (Head, TEC)",
        "Unlock": "Nobility Proof (Lv 1)",
        "Description": "Dispel all buffs on one ally. If successful, restore HP to them.",
        "Starter": "0",
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
        "Description": "Dispel all debuffs on an ally row. Restore TP to successful targets.",
        "Starter": "0",
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
        "Description": "Make target ally act at the start of this turn.",
        "Starter": "0",
        "Max Level": "5",
        "Data":{
            "TP Cost": ["12", "10", "8", "6", "4"],
        }
    },
},

}

function toggle_data(table_id){
    document.getElementById(table_id).classList.toggle("show_table");
}

function populate(){
    var skill_list = document.getElementById("skill_list")
    var class_name = document.getElementById("class_name").innerText
    var current_class = data[class_name]
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
        description.innerText = current_skill["Description"]

        levels_table = document.createElement("table")
        data_block.appendChild(levels_table)
        levels_table.classList.add("levels_table")
        levels_row = document.createElement("tr")
        levels_table.appendChild(levels_row)
        start_level = document.createElement("th")
        start_level.innerText = "Level"
        levels_row.appendChild(start_level)
        for (let i = 1; i <= current_skill["Max Level"]; i++){
            level = document.createElement("th")
            levels_row.appendChild(level)
            level.innerText = i
            
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

populate()


