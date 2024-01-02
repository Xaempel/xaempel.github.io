import subprocess
import os

def format_project(directory):
    project_path = os.path.abspath(directory)

    command = f"prettier --write {project_path}"

    subprocess.run(command, shell=True, check=True)

format_project(".")
