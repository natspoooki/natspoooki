from PIL import Image
filename = "bird.jpg"
with Image.open(filename) as img:
	img.load()
	img.show()
	print("Image has been opened.")
