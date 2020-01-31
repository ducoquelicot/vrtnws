server {
  listen 80;
  listen [::]:80;
  server_name assets.storymaker.local;
  client_max_body_size 100M;
  location / {
    proxy_pass http://host.docker.internal:4080;
    proxy_http_version 1.1;
    proxy_redirect     off;
    proxy_set_header   Upgrade $http_upgrade;
    proxy_set_header   Connection "Upgrade";
    proxy_set_header   Host $host;
    proxy_set_header   X-Real-IP $remote_addr;
    proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header   X-Forwarded-Host $server_name;
  }
}