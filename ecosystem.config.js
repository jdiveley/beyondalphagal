module.exports = {
  apps: [
    {
      name: 'beyondalphagal',
      script: 'node_modules/.bin/vite',
      args: 'preview --host 0.0.0.0 --port 5173',
      cwd: '/home/jdiveley/beyondalphagal',
      env: {
        NODE_ENV: 'production',
      },
      autorestart: true,
      watch: false,
    },
  ],
}
