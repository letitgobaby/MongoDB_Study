FROM mongo:4.2

RUN mkdir configs
WORKDIR /usr/src/configs

COPY setupFile/replicaSet.js .
COPY setupFile/setup.sh .

RUN chmod +x ./setup.sh

CMD ["./setup.sh"]
