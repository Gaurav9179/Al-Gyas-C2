import os
import re

os.makedirs('src/pages', exist_ok=True)
os.makedirs('src/components', exist_ok=True)

files = ['Home', 'About', 'Products']

for page in files:
    path = f'.stitch/designs/{page}.html'
    if not os.path.exists(path):
        continue

    with open(path, 'r') as f:
        html = f.read()
    
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
    if not body_match: 
        continue
    
    content = body_match.group(1)
    
    # JSX conversions
    content = content.replace('class=', 'className=')
    content = content.replace('for=', 'htmlFor=')
    content = content.replace('<!--', '{/*')
    content = content.replace('-->', '*/}')
    
    # Self-close void elements correctly by not matching across tags
    content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', content)
    content = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', content)
    content = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', content)
    content = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', content)
    content = re.sub(r'style="([^"]*)"', r'', content) # strip inline styles for simplicity

    # Remove script tags
    content = re.sub(r'<script.*?</script>', '', content, flags=re.DOTALL)

    jsx = f"""import React from 'react';

export default function {page}() {{
    return (
        <div className="antialiased selection:bg-primary/30 min-h-screen bg-surface text-on-surface">
            {content}
        </div>
    );
}}
"""
    with open(f'src/pages/{page}.jsx', 'w') as f:
        f.write(jsx)
        
print("Conversion complete.")
