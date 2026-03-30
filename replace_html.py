import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

with open('patch_comments_html.txt', 'r', encoding='utf-8') as f:
    new_html = f.read()

# The HTML block to replace starts with "<!-- COMMENTS SECTION -->" and ends with "<!-- NO MORE COMMENTS -->"
start_marker = "            <!-- COMMENTS SECTION -->"
end_marker = "            <!-- NO MORE COMMENTS -->"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + new_html + "\n" + content[end_idx:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Replaced HTML block successfully.")
else:
    print("Failed to find markers.")
