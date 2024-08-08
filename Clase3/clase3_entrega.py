from PIL import Image
from PIL import ImageFilter
filename = "bird.jpg"
with Image.open(filename) as img:
    img.load()
img = img.filter(ImageFilter.FIND_EDGES)
img.save('imageSaved.jpg')