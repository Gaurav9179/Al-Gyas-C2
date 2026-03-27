import os
import re

files = ['src/pages/Home.jsx', 'src/pages/About.jsx', 'src/pages/Products.jsx']
for path in files:
    with open(path, 'r') as f:
        content = f.read()

    # Simple replacements
    content = content.replace('href="#"', 'href="/"')
    content = content.replace('href="/"', 'href="/"') # just in case
    content = content.replace('>Home</a>', ' href="/">Home</a>').replace('href="/" href="/"', 'href="/"')
    content = content.replace('>About Us</a>', ' href="/about">About Us</a>').replace('href="/" href="/about"', 'href="/about"')
    content = content.replace('>Products</a>', ' href="/products">Products</a>').replace('href="/" href="/products"', 'href="/products"')
    content = content.replace('>Catalog</a>', ' href="/products">Catalog</a>').replace('href="/" href="/products"', 'href="/products"')

    with open(path, 'w') as f:
        f.write(content)
print("Links updated")
