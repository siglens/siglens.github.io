curl -L <https://github.com/siglens/pub-datasets/files/13823325/10kevents.json.tar.gz> -o 10kevents.json.tar.gz
tar -xvf 10kevents.json.tar.gz
curl http://localhost:8081/elastic/_bulk -i --data-binary "@10kevents.json