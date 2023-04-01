#!/bin/sh

export SECRET_KEY=$1
export VERSION=$1

docker run -e SECRET_KEY=$SECRET_KEY -e DEBUG=False -p 80:80 masnottuh/complete-group:$VERSION