import glob, re, os

counter = 100
files = []
for pat in ['frontend/src/data/*.ts', 'frontend/src/pages/*.tsx', 'frontend/src/components/**/*.tsx']:
    files.extend(glob.glob(pat, recursive=True))

for f in files:
    if os.path.isfile(f) and f.replace('\\', '/') != 'frontend/src/data/imageAssets.ts':
        with open(f, encoding='utf-8') as file:
            content = file.read()
            
        def replacer(m):
            global counter
            counter += 1
            return f"https://loremflickr.com/800/600/indian,student?random={counter}"
            
        new_content = re.sub(r'https://images\.unsplash\.com/photo-[a-zA-Z0-9\-]+[^"\'\`]*', replacer, content)
        
        if new_content != content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(new_content)
