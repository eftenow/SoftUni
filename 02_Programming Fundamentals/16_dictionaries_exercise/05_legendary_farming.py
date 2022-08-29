materials = input().lower().split()
trash_materials = {}
needed_materials = {"shards":0, "fragments":0, "motes":0}
legendary_item = ""
legendary_crafted = False

while materials != "":
    for n in range(0, len(materials), 2):
        material_amount = int(materials[n])
        current_material = materials[n+1]
        if current_material not in needed_materials:
            if current_material not in trash_materials:
                trash_materials[current_material] = material_amount
            else:
                trash_materials[current_material] += material_amount
        else:
            needed_materials[current_material] += material_amount
            if needed_materials[current_material] >= 250:
                needed_materials[current_material] -= 250
                if current_material == "shards":
                    legendary_item = "Shadowmourne"
                elif current_material == "fragments":
                    legendary_item = "Valanyr"
                elif current_material == "motes":
                    legendary_item = "Dragonwrath"
                legendary_crafted = True
                break

    if legendary_crafted:
        break
    materials = input().lower().split()


if legendary_crafted:
    print(f"{legendary_item} obtained!")

needed_materials = {print(f"{mat}: {amount}") for mat, amount in needed_materials.items()}
trash_materials = {print(f"{mat}: {amount}") for mat, amount in trash_materials.items()}
