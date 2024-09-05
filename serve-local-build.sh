#!/bin/bash

# Destination folder to copy files to serve node.js on local env
folder_name=__serve__
mkdir -p "./${folder_name}" || { echo "Failed to create destination folder. Exiting."; exit 1; }

echo "Deleting existing destination folder ./${folder_name}"
rm -rf "./${folder_name}"
mkdir -p "./${folder_name}" || { echo "Failed to recreate destination folder. Exiting."; exit 1; }

echo "Copy required files into destination folder ./${folder_name}"
# Copy required files after creating them with Next.js like in DockerLinux/Dockerfile:47
cp -r ./.next/standalone/. "./${folder_name}"
cp -r ./.next/static "./${folder_name}/.next/static"
cp -r ./public "./${folder_name}/public"

# Catch exit sign from script and remove created folder
cleanup() {
  echo "The local server was stopped and the destination folder was deleted."
  rm -rf "./${folder_name}/"
  exit 0
}

trap cleanup SIGINT

# serve local build
node "./${folder_name}/server.js"
done
