import os

# Define the folder path you want to search
folder_path = "items/T1"  # Replace with the path to your folder

# Get a list of all files in the folder
file_names = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

# Create a JavaScript-style array
js_array = "{\n"
for file_name in file_names:
    js_array += f"'{file_name.split('.')[0]}': '$', \n"
js_array = js_array.rstrip(", ")  # Remove the trailing comma
js_array += "}"

#js_array = "[\n"
#for file_name in file_names:
#    js_array += f"'{file_name.split('.')[0]}', \n"
#js_array = js_array.rstrip(", ")  # Remove the trailing comma
#js_array += "]"

# Print the JavaScript-style array
print(js_array)
