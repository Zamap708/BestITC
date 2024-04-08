import os

# Open a new file to write the output
with open('output.txt', 'w') as output_file:
    # Get a list of all the files in the current directory
    files = os.listdir()

    # Initialize an empty array for the image imports
    image_imports = []

    # Iterate over the files and write the import statement for each one
    for index, filename in enumerate(files):
        # Check if the file is an image file
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
            # Generate a unique key for this image import
            key = f"{index}"
            img = f"img{index}"
            # Write the import statement to the output file
            output_file.write(f"import img{index} from \"./{filename}\"\n")

            # Add an object to the image_imports array with the key and img properties
            image_imports.append({
                "key": key,
                "img": img.replace("'", "")
            })

    # Write the image_imports array to the output file
    output_file.write("\n\n# Image imports\n")
    output_file.write(f"image_imports = {image_imports}")