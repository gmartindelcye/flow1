echo "Switching to branch main"
git checkout main

echo "Building app..."
npm run build

echo "Deploying file to server..."
scp -r build/* gmartin@git@216.238.83.245:/var/www/216.238.83.245/
