#!/usr/bin/env bash

# see https://tshark.dev/formats/save_formats/

# find_save_fmts.sh
# Create a bash array of available formats
formats="$(tshark -F 2>&1 | awk '{print $1}' | grep -vE "tshark:")"
# Create a 100 packet pcapng file for testing
echo "INFO: Saving 100 packet capture"
tshark -w capture.pcapng -c 100 2>/dev/null
# Loop through formats and if we can convert to $format, then print it
echo -en "\n### Formats that can be saved ###\n"
for format in $formats; do
    tshark -r capture.pcap -F "$format" -w temp.file 2>/dev/null
    if [[ "$?" == "0" ]]; then
        echo -en "  $format\n"
    fi
done
# Remove temp files we created
rm capture.pcapng temp.file