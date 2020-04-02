#!/bin/bash

URL="$1"
start_command=$2

# Sleeps until the given URL returns a 200 series response
# Execute the given command when 200 series is response is returned
while ! curl $URL
do
    echo "Unable to connect to ${URL}. Retrying in 10 5 seconds..."
    sleep 5
done
    $start_command
