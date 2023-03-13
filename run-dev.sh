#!/bin/bash

docker run -e SECRET_KEY=notReallySecret -e DEBUG=True -p 80:80 masnottuh/complete-dev:1.0