module.exports = {
  apps: [
    {
      name: 'beyondalphagal',
      script: 'node_modules/.bin/vite',
      args: '--host 0.0.0.0 --port 5173',
      cwd: '/home/jdiveley/beyondalphagal',
      interpreter: 'none',
      env: {
        NODE_ENV: 'development',
      },
      watch: false,
      autorestart: true,
      max_restarts: 10,
      restart_delay: 2000,
    },
  ],
}
