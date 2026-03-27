import os
import re

files = ['src/pages/Home.jsx', 'src/pages/About.jsx', 'src/pages/Products.jsx']

for path in files:
    if os.path.exists(path):
        with open(path, 'r') as f:
            content = f.read()

        # Remove `<nav>...</nav>` entirely. Non-greedy match across lines.
        content = re.sub(r'<nav.*?</nav>', '', content, flags=re.DOTALL)
        # Remove `<footer>...</footer>` entirely.
        content = re.sub(r'<footer.*?</footer>', '', content, flags=re.DOTALL)

        with open(path, 'w') as f:
            f.write(content)

print("Removed nav and footer from page components")
