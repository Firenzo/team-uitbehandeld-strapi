#cd "../team-uitbehandeld" && npm run generate
pm2 stop build
pm2 start build --no-autorestart
exit

