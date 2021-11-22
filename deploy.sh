echo "Kill all the running PM2 actions"
sudo pm2 kill

echo "Jump to app folder"
cd /var/www/html/Bodega502-Proyecto-Ing-Software/AppWeb_Proyecto/bodega502

echo "Update app from Git"
git pull

echo "Install app dependencies"
sudo rm -rf node_modules package-lock.json
sudo npm install

echo "Build your app"
sudo npm run build

echo "Run new PM2 action"
sudo cp /var/www/html/Bodega502-Proyecto-Ing-Software/AppWeb_Proyecto/bodega502/ecosystem.json ecosystem.json
sudo pm2 start ecosystem.json