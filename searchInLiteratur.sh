#!/bin/bash

PATTERN=$1

#find literatur -name '*.pdf' -exec sh -c 'pdftotext "{}" - | grep --with-filename --label="{}" --color "$PATTERN"' \;
pdfgrep -n -R $1 literatur
