var BaseItems = [
    ["Iron Ore", "Iron Mine"],
    ["Gold Ore", "Gold Mine"],
    ["Sand", "Sand Mine"],
    ["Diamond", "Diamond Mine"],
    ["Resinite Ore", "Resinite Mine"],
    ["Titanium Ore", "Titanium Mine"],
    ["Superwood", "Superwood Farm"],
    ["HardWood", "Hardwood Farm"],
    ["Wood", "Wood Farm"],
    ["Ultrawood", "Ultrawood Farm"],
    ["Tungsten Ore", "Tungsten Mine"],
    ["Redmetal Ore", "Redmetal Mine"],
    ["Bluemetal Ore", "Bluemetal Mine"],
    ["Ice Crystal", "Ice Crystal Mine"],
    ["Lava Crystal", "Lava Crystal Mine"],
    ["Petrified Wood", "Petrified Wood Farm"],
    ["Weird Ore", "Weird Mine"],
    ["Shroomite Ore", "Shroomite Mine"],
    ["Osmium Ore", "Osmium Mine"],
    ["Energy Crystal", "Energy Mine"]
]

var Machines = [
    ["T1 Cutter", [
        {output: "Wood Boards", input: ["Wood"]},
        {output: "Stone Slab", input: ["Rock"]},
        {output: "Stone Tiles", input: ["Stone Slab"]},
        {output: "Glass Panes", input: ["Glass"]},
        {output: "Turkey Chop", input: ["Turkey"]},
    ]],
    ["T1 Press", [
        {output: "Pressurized Wood", input: ["Wood Boards"]},
        {output: "Copper Plate", input: ["Copper Ingot"]},
        {output: "Turkey Slices", input: ["Turkey Chop"]},
    ]],
    ["T1 Furnace", [
        {output: "Glass", input: ["Sand"]},
        {output: "Copper Ingot", input: ["Copper Ore"]},
        {output: "Cooked Turkey Chop", input: ["Turkey Chop"]},
        {output: "Cooked Turkey", input: ["Turkey"]},
    ]],
    ["T1 Extruder", [
        {output: "Copper Wire", input: ["Copper Ingot"]},
    ]],

    ["T2 Cutter", [
        {output: "Hardwood Boards", input: ["Hardwood"]},
    ]],
    ["T2 Press", [
        {output: "Pressurized Hardwood", input: ["Hardwood Boards"]},
        {output: "Iron Plate", input: ["Iron Ingot"]},
        {output: "Gold Plate", input: ["Gold Ingot"]},
    ]],
    ["T2 Furnace", [
        {output: "Gold Ingot", input: ["Gold Ore"]},
        {output: "Iron Ingot", input: ["Iron Ore"]},
    ]],
    ["T2 Extruder", [
        {output: "Iron Wire", input: ["Iron Ingot"]},
        {output: "Gold Wire", input: ["Gold Ingot"]},
    ]],
    ["T2 Assembler", [
        {output: "Stone Bricks", input: ["Stone Tiles"]},
        {output: "Wood Table", input: ["Pressurized Wood"]},
        {output: "Copper Gear", input: ["Copper Plate"]},
        {output: "Basic Circuit", input: ["Copper Wire"]},
        {output: "Hardwood Table", input: ["Pressurized Hardwood"]},
        {output: "Iron Gear", input: ["Iron Plate"]},
    ]],
    ["T2 Dual Assembler", [
        {output: "Ornate Wood Table", input: ["Wood Table", "Stone Bricks"]},
        {output: "Reinforced Glass", input: ["Iron Wire", "Glass Panes"]},
        {output: "Framed Glass", input: ["Pressurized Wood", "Glass Panes"]},
        {output: "Golden Turkey", input: ["Turkey", "Gold Ingot"]},
        {output: "Mechanical Assembly", input: ["Iron Plate", "Copper Gear"]},
        {output: "Advanced Curcuit", input: ["Gold Wire", "Basic Curcuit"]}
    ]],

    ["T3 Furnace", [
        {output: "Resinite Ingot", input: ["Resinite Ore"]},
        {output: "Titanium Ingot", input: ["Titanium Ore"]},
        {output: "Uranium Ingot", input: ["Uranium Ore"]},
    ]],
    ["T3 Cutter", [
        {output: "Superwood Boards", input: ["Superwood"]},
    ]],
    ["T3 Press", [
        {output: "Pressurized Superwood", input: ["Superwood Boards"]},
        {output: "Resinite Plate", input: ["Resinite Ingot"]},
        {output: "Titanium Plate", input: ["Titanium Ingot"]},
    ]],
    ["T3 Extruder", [
        {output: "Resinite Wire", input: ["Resinite Ingot"]},
        {output: "Titanium Wire", input: ["Titanium Ingot"]},
        {output: "Fuel Rod", input: ["Uranium Ingot"]},
        {output: "Resinite Fibers", input: ["Resinite Wire"]},
    ]],
    ["T3 Laser Cutter", [
        {output: "Cut Diamond", input: ["Diamond"]},
    ]],
    ["T3 Assembler", [
        {output: "Superwood Table", input: ["Pressurized Superwood"]},
        {output: "Resinite Gear", input: ["Resinite Plate"]},
        {output: "Titanium Gear", input: ["Titanium Plate"]},
        {output: "Resinite Mesh", input: ["Resinite Fibers"]},
        {output: "Living Alloy Gear", input: ["Living Alloy"]},
    ]],
    ["T3 Dual Assembler", [
        {output: "Mutant Turkey", input: ["Uranium Ingot", "Turkey"]},
        {output: "Titanium Glass", input: ["Titanium Wire", "Glass Panes"]},
        {output: "Reactor Core", input: ["Fuel Rod", "Basic Circuit"]},
        {output: "Living Alloy", input: ["Titanium Plate", "Resinite Plate"]},
        {output: "Diamond Charm", input: ["Titanium Plate", "Cut Diamond"]},
        {output: "Living Composite", input: ["Pressurized Superwood", "Resinite Mesh"]},
    ]],
    
    ["T4 Cutter", [
        {output: "Ultrawood Boards", input: ["Ultrawood"]},
    ]],
    ["T4 Press", [
        {output: "Pressurized Ultrawood", input: ["Ultrawood Boards"]},
        {output: "Tungsten Plate", input: ["Tungsten Ingot"]},
        {output: "Redmetal Plate", input: ["Redmetal Ingot"]},
        {output: "Bluemetal Plate", input: ["Bluemetal Ingot"]},
        {output: "Bluesteel Plate", input: ["Bluesteel Ingot"]},
        {output: "Redsteel Plate", input: ["Redsteel Ingot"]},
    ]],
    ["T4 Furnace", [
        {output: "Tungsten Ingot", input: ["Tungsten Ore"]},
        {output: "Redmetal Ingot", input: ["Redmetal Ore"]},
        {output: "Bluemetal Ingot", input: ["Bluemetal Ore"]},
        {output: "Bluesteel Ingot", input: ["Bluemetal Ingot"]},
        {output: "Redsteel Ingot", input: ["Redmetal Ingot"]},
    ]],
    ["T4 Extruder", [
        {output: "Tungsten Wire", input: ["Tungsten Ingot"]},
        {output: "Bluemetal Wire", input: ["Bluemetal Ingot"]},
        {output: "Redmetal Wire", input: ["Redmetal Ingot"]},
    ]],
    ["T4 Laser Cutter", [
        {output: "Ice Gem", input: ["Ice Crystal"]},
        {output: "Lava Gem", input: ["Lava Crystal"]},
    ]],
    ["T4 Assembler", [
        {output: "Ultrawood Table", input: ["Pressurized Ultrawood"]},
        {output: "Tungsten Gear", input: ["Tungsten Plate"]},
        {output: "Bluemetal Gear", input: ["Bluemetal Plate"]},
        {output: "Redmetal Gear", input: ["Redmetal Plate"]},
        {output: "Bluesteel Gear", input: ["Bluesteel Plate"]},
        {output: "Redsteel Gear", input: ["Redsteel Plate"]},
        {output: "Obsidian Alloy Gear", input: ["Obsidian Alloy Plate"]},
    ]],
    ["T4 Dual Assembler", [
        {output: "Fire Glass", input: ["Lava Gem", "Glass Panes"]},
        {output: "Ice Glass", input: ["Ice Gems", "Glass Panes"]},
        {output: "Lesser Lava Charm", input: ["Lava Gem", "Gold Plate"]},
        {output: "Frozen Turkey Chop", input: ["Turkey Chop", "Ice Crystal"]},
        {output: "Blue Ultra Boards", input: ["Ultrawood Boards", "Bluemetal Plate"]},
        {output: "Red Ultra Boards", input: ["Ultrawood Boards", "Redmetal Plate"]},
        {output: "Ice Charm", input: ["Ice Gem", "Bluesteel Plate"]},
        {output: "Obsidian Alloy Plate", input: ["Redsteel Plate", "Bluesteel Plate"]},
        {output: "Greater Lava Charm", input: ["Redsteel Plate", "Lava Gem"]},
        {output: "Obsidian Gem", input: ["Lava Gem", "Ice Gem"]},
        {output: "Advanced Fuel Rod", input: ["Fuel Rod", "Lava Gem"]},
        {output: "Obsidian Charm", input: ["Tungsten Plate", "Obsidian Gem"]},
        {output: "Advanced Mechanical Assembly", input: ["Tungsten Plate", "Obsidian Alloy Gear"]},
    ]],
    
    ["T5 Cutter", [
        {output: "Petrified Boards", input: ["Petrified Wood"]},
    ]],
    ["T5 Ore Crusher", [
        {output: "Shroomite Gravel", input: ["Shroomite Ore"]},
        {output: "Weird Gravel", input: ["Weird Ore"]},
        {output: "Osmium Gravel", input: ["Osmium Ore"]},
    ]],
    ["T5 Induction Smelter", [
        {output: "Shroomite Ingot", input: ["Shroomite Gravel"]},
        {output: "Weird Ingot", input: ["Weird Gravel"]},
        {output: "Osmium Ingot", input: ["Osmium Gravel"]},
    ]],
    ["T5 Press", [
        {output: "Pressurized Petrified Wood", input: ["Petrified Boards"]},
        {output: "Weird Plate", input: ["Weird Ingot"]},
        {output: "Shroomite Plate", input: ["Shroomite Ingot"]},
        {output: "Osmium Plate", input: ["Osmium Ingot"]},
        {output: "Weirdsteel Plate", input: ["Weirdsteel Ingot"]},
        {output: "Shroomsteel Plate", input: ["Shroomsteel Ingot"]},
        {output: "Strangesteel Plate", input: ["Strangesteel Ingot"]},
        {output: "Trimetal Plate", input: ["Trimetal Ingot"]},
    ]],
    ["T5 Extruder", [
        {output: "Weird Wire", input: ["Weird Ingot"]},
        {output: "Shroomite Wire", input: ["Shroomite Ingot"]},
        {output: "Osmium Wire", input: ["Osmium Ingot"]},
        {output: "Weirdsteel Wire", input: ["Weirdsteel Ingot"]},
        {output: "Shroomsteel Wire", input: ["Shroomsteel Ingot"]},
        {output: "Strangesteel Wire", input: ["Strangesteel Ingot"]},
        {output: "Trimetal Wire", input: ["Trimetal Ingot"]},
    ]],
    ["T5 Laser Cutter", [
        {output: "Energy Gem", input: ["Energy Crystal"]},
        {output: "Energy Gem", input: ["Salt Shard"]},
    ]],
    ["T5 Gear Press", [
        {output: "Weird Gear", input: ["Weird Plate"]},
        {output: "Shroomite Gear", input: ["Shroomite Plate"]},
        {output: "Osmium Gear", input: ["Osmium Plate"]},
        {output: "Weirdsteel Gear", input: ["Weirdsteel Plate"]},
        {output: "Shroomsteel Gear", input: ["Shroomsteel Plate"]},
        {output: "Strangesteel Gear", input: ["Strangesteel Plate"]},
        {output: "Trimetal Gear", input: ["Trimetal Plate"]},
    ]],
    ["T5 Rolling Machine", [
        {output: "Weird Pipe", input: ["Weird Plate"]},
        {output: "Shroomite Pipe", input: ["Shroomite Plate"]},
        {output: "Osmium Pipe", input: ["Osmium Plate"]},
        {output: "Weirdsteel Pipe", input: ["Weirdsteel Plate"]},
        {output: "Strangesteel Pipe", input: ["Strangesteel Plate"]},
        {output: "Shroomsteel Pipe", input: ["Shroomsteel Plate"]},
        {output: "Trimetal Pipe", input: ["Trimetal Plate"]},
    ]],
    ["T5 Alloy Smelter", [
        {output: "Strangesteel Ingot", input: ["Weird Ingot", "Shroomite Ingot"]},
        {output: "Shroomsteel Ingot", input: ["Shroomite Ingot", "Osmium Ingot"]},
        {output: "Weirdsteel Ingot", input: ["Weird Ingot", "Osmium Ingot"]},
    ]],
    ["T5 Assembler", [
        {output: "Petrified Table", input: ["Pressurized Petrified Wood"]},
        {output: "Reinforced Weird Plate", input: ["Weird Plate"]},
        {output: "Reinforced Shroomite Plate", input: ["Shroomite Plate"]},
        {output: "Weird Screw", input: ["Weird Wire"]},
        {output: "Reinforced Osmium Plate", input: ["Osmium Plate"]},
        {output: "Shroomite Screw", input: ["Shroomite Wire"]},
        {output: "Osmium Screw", input: ["Osmium Wire"]},
        {output: "Weird Mechanism", input: ["Weird Gear"]},
        {output: "Weird Ring", input: ["Weird Pipe"]},
        {output: "Shroomite Mechanism", input: ["Shroomite Gear"]},
        {output: "Shroomite Ring", input: ["Shroomite Pipe"]},
        {output: "Osmium Mechanism", input: ["Osmium Gear"]},
        {output: "Osmium Ring", input: ["Osmium Pipe"]},
        {output: "Reinforced Shroomsteel Plate", input: ["Shroomsteel Plate"]},
        {output: "Reinforced Strangesteel Plate", input: ["Strangesteel Plate"]},
        {output: "Reinforced Weirdsteel Plate", input: ["Weirdsteel Plate"]},
        {output: "Weirdsteel Screw", input: ["Weirdsteel Wire"]},
        {output: "Strangesteel Screw", input: ["Strangesteel Wire"]},
        {output: "Shroomsteel Screw", input: ["Shroomsteel Wire"]},
        {output: "Shroomsteel Mechanism", input: ["Shroomsteel Gear"]},
        {output: "Weirdsteel Mechanism", input: ["Weirdsteel Gear"]},
        {output: "Strangesteel Mechanism", input: ["Strangesteel Gear"]},
        {output: "Strangesteel Ring", input: ["Strangesteel Pipe"]},
        {output: "Shroomsteel Ring", input: ["Shroomsteel Pipe"]},
        {output: "Weirdsteel Ring", input: ["Weirdsteel Pipe"]},
        {output: "Reinforced Trimetal Plate", input: ["Trimetal Plate"]},
        {output: "Trimetal Screw", input: ["Trimetal Wire"]},
        {output: "Trimetal Mechanism", input: ["Trimetal Gear"]},
        {output: "Trimetal Ring", input: ["Trimetal Pipe"]},
    ]],
    ["T5 Energy Concentrator", [
        {output: "Concentrated Energy Gem", input: ["Energy Gem"]},
    ]],
    ["T5 Triple Alloy Smelter", [
        {output: "Trimetal Ingot", input: ["Shroomite Ingot", "Weird Ingot", "Osmium Ingot"]},
    ]],
    ["T5 Dual Assembler", [
        {output: "Turkey Roll", input: ["Weird Pipe", "Turkey Roll"]},
        {output: "Shroomsteel Energy Core", input: ["Shroomsteel Plate", "Energy Gem"]},
        {output: "Strangesteel Energy Core", input: ["Strangesteel Plate", "Energy Gem"]},
        {output: "Weirdsteel Energy Core", input: ["Weirdsteel Plate", "Energy Gem"]},
        {output: "Advanced Energy Core", input: ["Trimetal Plate", "Concentrated Energy Gem"]},
        {output: "Composite Plate", input: ["Pressurized Petrified Wood", "Reinforced Osmium Plate"]},
        {output: "Elite Energy Core", input: ["Composite Plate", "Advanced Energy Core"]},
    ]],
    ["T5 Triple Assembler", [
        {output: "Trimetal Reactor", input: ["Trimetal Mechanism", "Trimetal Screw", "Elite Energy Core"]},
    ]],
]



var ItemWanted = decodeURIComponent((new URLSearchParams(window.location.search)).get("item"));
document.querySelector(".header").textContent = ItemWanted

var GenerativeItemTree = []

function GetChildren(parent, IterationNum) {
    for (let i = 0; i < Machines.length; i++) {
        let ChildArray = Machines[i][1]
        for (let j = 0; j < ChildArray.length; j++) {
            if (ChildArray[j].output == parent) {
                return [Machines[i][0], ChildArray[j].input, IterationNum]
            }
        }
    }
}

function IterateItemTree() {
    let AmountChanged = 0
    let CurrentIterationNum
    if (GenerativeItemTree.length == 0) {
        CurrentIterationNum = 1
        GenerativeItemTree.push(GetChildren(ItemWanted, CurrentIterationNum))

        AmountChanged++
    }
    
    else {
        CurrentIterationNum = Number(GenerativeItemTree[GenerativeItemTree.length-1][2]) + 1
        let CurrentGenerativeItemTreeState = GenerativeItemTree
        let OldIterationNum = CurrentIterationNum-1

        for (let i = 0; i < CurrentGenerativeItemTreeState.length; i++) {
            try {
                if (CurrentGenerativeItemTreeState[i][2] == OldIterationNum) {
                    let CurrentParentOutput = CurrentGenerativeItemTreeState[i][1]
                    for (let j = 0; j < CurrentParentOutput.length; j++) {
                        let BaseCheckArray = []
                        for (let k = 0; k < BaseItems.length; k++) { BaseCheckArray.push(BaseItems[k][0]) }
                        if (!BaseCheckArray.includes(CurrentParentOutput[j]) && GetChildren(CurrentParentOutput[j], CurrentIterationNum) != undefined) {
                            GenerativeItemTree.push(GetChildren(CurrentParentOutput[j], CurrentIterationNum))
                            console.log(GetChildren(CurrentParentOutput[j], CurrentIterationNum))
    
                            AmountChanged++
                        }
                        else {
                            let MineTitle = BaseItems[BaseCheckArray.indexOf(CurrentParentOutput[j])][1]
                            console.log(MineTitle)
                            GenerativeItemTree.push([CurrentParentOutput[j], [MineTitle], CurrentIterationNum])
                        }
                    }
                }
            }
            catch{}
        }
    }

    //document.body.textContent = JSON.stringify(GenerativeItemTree)
    return AmountChanged
}
for (let i = 0; i < 500; i++) {
    if (IterateItemTree() == 0) {
        i = 500
    }
}

function VisualizeTree() {
    let VisualElement = document.querySelector(".vizualizer")
    let IterationStorage
    for (let i = 0; i < GenerativeItemTree.length; i++) {
        let CurrentItem = GenerativeItemTree[i]
        let CurrentItemIterationNumber = CurrentItem[2]
        if (IterationStorage == undefined) { IterationStorage == CurrentItemIterationNumber }
        if (CurrentItemIterationNumber != IterationStorage) {
            CreateJointElement(GenerativeItemTree, CurrentItemIterationNumber)
            IterationStorage = CurrentItemIterationNumber
        }
    }
}
VisualizeTree()

function CreateJointElement(tree, num) {
    let NewElement = document.createElement("div")
    NewElement.classList.add("main-task")
    NewElement.setAttribute("y-num", num)
    let BaseCheckArray = []
    for (let k = 0; k < BaseItems.length; k++) { BaseCheckArray.push(BaseItems[k][0]) }

    let RecordNum = 1
    for (let i = 0; i < tree.length; i++) {
        if (tree[i][2] == num) {
            let NewSubElement = document.createElement("div")
            NewSubElement.innerHTML = `(${tree[i][0]})<br><br>➜ ${tree[i][1]}`
            NewSubElement.classList.add("sub-task")
            NewSubElement.setAttribute("input-amount", tree[i][1].length)
            NewSubElement.setAttribute("x-num", RecordNum)
            NewSubElement.addEventListener("mouseover", function() {
                let SelectedList = []
                if (this.parentElement.getAttribute("y-num") == "1") {
                    SelectedList.push(document.querySelector(".header"))
                }
                else {
                    let AllSelected = document.querySelectorAll(".hover-select")
                    for (let i = 0; i < AllSelected.length; i++) {
                        AllSelected[i].classList.remove("hover-select")
                    }
                    let HoverElementX = this.getAttribute("x-num")
                    let AboveChildren = document.querySelector(`div[y-num="${Number(this.parentElement.getAttribute("y-num"))-1}"]`).childNodes
                    let Offset = 0
                    let Pass = false
                    for (let i = 0; i < AboveChildren.length; i++) {
                        if (Number(AboveChildren[i].getAttribute("x-num"))+Offset >= HoverElementX) { break }
                        let CurrentChildOffset = AboveChildren[i].getAttribute("input-amount")


                        if (!AboveChildren[i+1].classList.contains("base-ore")) {
                            Offset += Number(CurrentChildOffset)-1
                        }
                        else {
                            Offset-=1
                        }

                        try {
                            if (Number(AboveChildren[i].getAttribute("x-num"))+Offset == Number(this.nextElementSibling.getAttribute("x-num"))) {
                                Pass = true
                            }
                        }
                        catch {
                            Pass = false
                        }
                    }
                    
                    if (AboveChildren) {
                        let Counter = 0
                        for (let o = 0; o < AboveChildren.length; o++) {
                            console.log()
                            if (Pass && Number(AboveChildren[o].getAttribute("x-num"))+Offset == Number(HoverElementX)+1) {
                                AboveChildren[o].classList.add("hover-select")
                                this.classList.add("hover-select")

                                Counter++
                            }
                            else if (!Pass && Number(AboveChildren[o].getAttribute("x-num"))+Offset == Number(HoverElementX)) {
                                AboveChildren[o].classList.add("hover-select")
                                this.classList.add("hover-select")

                                Counter++
                            }
                        }
                    }
                }
            })
            NewSubElement.addEventListener("mouseleave", function() {
                let AllSelected = document.querySelectorAll(".hover-select")
                for (let i = 0; i < AllSelected.length; i++) {
                    AllSelected[i].classList.remove("hover-select")
                }
            })
            RecordNum++
            if (BaseCheckArray.includes(tree[i][0])) { NewSubElement.classList.add("base-ore") }
            
            NewElement.appendChild(NewSubElement)
        }
    }
    document.querySelector(".visualizer").appendChild(NewElement)
}