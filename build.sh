#when updated, make file excecutable with chmod +x build.sh
#git update-index --chmod=+x foo.sh
pm2 stop build || : && pm2 start build --no-autorestart
exit

