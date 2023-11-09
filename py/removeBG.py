import os
from rembg import remove
from PIL import Image

# Input and output folders
input_folder = 'py/input'
output_folder = 'py/output'

# Create the output folder if it doesn't exist
os.makedirs(output_folder, exist_ok=True)

# List all files in the input folder
input_files = os.listdir(input_folder)

for input_file in input_files:
    # Construct the full input and output paths
    input_path = os.path.join(input_folder, input_file)
    output_path = os.path.join(output_folder, input_file)

    # Open the input image using Pillow
    with Image.open(input_path) as input_image:
        # Remove the background and save the processed image
        with Image.new('RGBA', input_image.size) as output_image:
            output_image.paste(remove(input_image), (0, 0), remove(input_image))
            output_image.save(output_path)

print("Background removal completed. Check the output folder for the processed images.")
