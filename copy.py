from pathlib import Path
import shutil
import subprocess

# todo: put this into a ci/cd pipeline

DOCS_PATH = Path("./docs")

QUARTZ_PATH = Path("./quartz")
CONTENT_PATH = QUARTZ_PATH / "content"

VAULT_PATH = Path("../my-vault")
NOTES_PATH = VAULT_PATH / "Notes"
LITERATURE_PATH = NOTES_PATH / "Literature"
ARTICLE_PATH = NOTES_PATH / "Articles"
RESOURCES_PATH = VAULT_PATH / "Resources"
EXCALIDRAW_PATH = RESOURCES_PATH / "Excalidraw"
IMAGES_PATH = RESOURCES_PATH / "Images"

MD_PATTERN = "*.md"
IMG_PATTERN = "*.png"

def copy_files_to_content(dir_path, pattern):
    for path in dir_path.rglob(pattern):
        shutil.copy(path, CONTENT_PATH)

copy_files_to_content(LITERATURE_PATH, MD_PATTERN)
copy_files_to_content(ARTICLE_PATH, MD_PATTERN)
copy_files_to_content(EXCALIDRAW_PATH, IMG_PATTERN)
copy_files_to_content(IMAGES_PATH, IMG_PATTERN)

subprocess.run(
    ["npx", "quartz", "build", "-d", str(".." / CONTENT_PATH), "-o", str(".." / DOCS_PATH)],
    cwd=QUARTZ_PATH,
    check=True,
)