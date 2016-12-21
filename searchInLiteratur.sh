#!/bin/bash

PATTERN=$1

#find literatur -name '*.pdf' -exec sh -c 'pdftotext "{}" - | grep --with-filename --label="{}" --color "$PATTERN"' \;
pdfgrep -R '$PATTERN' literatur