FROM ubuntu:20.04

RUN apt-get update && apt-get install -yq \
    tshark \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /work

CMD ["tshark"]
