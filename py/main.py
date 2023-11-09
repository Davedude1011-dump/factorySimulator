from PIL import ImageGrab, Image
import easyocr
import os
import tempfile

# Define the coordinates for the first image to extract text
text_coords = (1343, 200, 1864, 255)  # Replace with your desired coordinates

# Define the coordinates for the second image to take a screenshot
screenshot_coords = (1380, 303, 1814, 625)  # Replace with your desired coordinates

# Call easyOCR to extract text from the first image
reader = easyocr.Reader(['en'])

# Take a screenshot of the first set of coordinates
text_image = ImageGrab.grab(bbox=text_coords)

# Save the captured text image to a temporary file
with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as temp_img:
    text_image.save(temp_img.name)

# Read text from the saved image
extracted_text = reader.readtext(temp_img.name)

# Use the extracted text as the filename for the screenshot
text_from_image = extracted_text[0][1] if extracted_text else "screenshot"
output_file_path = os.path.join("items/T5", f"{text_from_image}.png")

# Create the "items" directory if it doesn't exist
os.makedirs("items", exist_ok=True)

# Take a screenshot of the second coordinates and save it with the extracted text as the filename
screenshot = ImageGrab.grab(bbox=screenshot_coords)
screenshot.save(output_file_path)

# Print the extracted text and the filename for the saved screenshot
print(f"Extracted Text: {text_from_image}")
print(f"Screenshot saved as: {output_file_path}")
