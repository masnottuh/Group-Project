BASE_URL=$1
NEW_VERSION=$2

docker buildx build --platform linux/amd64 --build-arg REACT_APP_BASE_URL=$BASE_URL -t masnottuh/webserver-prod:$NEW_VERSION -f webserver/Dockerfile . --no-cache
docker push masnottuh/webserver-prod:$NEW_VERSION

docker buildx build --platform linux/amd64  -t masnottuh/backend-prod:$NEW_VERSION -f backend/Dockerfile ./backend --no-cache
docker push masnottuh/backend-prod:$NEW_VERSION