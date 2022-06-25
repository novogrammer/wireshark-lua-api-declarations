FROM ubuntu:22.04

RUN apt-get update && apt-get install -yq \
    tshark \
    xvfb \
    wireshark \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /work

CMD ["bash"]
