from pathlib import Path
import shutil
import subprocess


DOCS_PATH = Path("./docs")

QUARTZ_PATH = Path("./quartz")
CONTENT_PATH = QUARTZ_PATH / "content"

VAULT_PATH = Path("../my-vault")
NOTES_PATH = VAULT_PATH / "Notes"
LITERATURE_PATH = NOTES_PATH / "Literature"
ARTICLE_PATH = NOTES_PATH / "Articles"
IMAGES_PATH = VAULT_PATH / "Resources" / "Images"

MD_PATTERN = "*.md"
IMG_PATTERN = "*.png"

for path in LITERATURE_PATH.rglob(MD_PATTERN):
    shutil.copy(path, CONTENT_PATH)

for path in ARTICLE_PATH.rglob(MD_PATTERN):
    shutil.copy(path, CONTENT_PATH)
    
for path in IMAGES_PATH.rglob(IMG_PATTERN):
    shutil.copy(path, CONTENT_PATH)

subprocess.run(
    ["npx", "quartz", "build", "-d", str(".." / CONTENT_PATH), "-o", str(".." / DOCS_PATH)],
    cwd=QUARTZ_PATH,
    check=True,
)