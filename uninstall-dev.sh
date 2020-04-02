#!/bin/bash

# Iterates over the package.json to get all devDependencies
# and removes each from node_modules without removing reference
# from package.json
for package in `cat package.json | jq .devDependencies` ; 
    do 
        name="$(cut -d'"' -f 2 <<< $package)";
        npm uninstall $name --no-save; 
    done;


    