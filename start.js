module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "uv run daydream-scope"
        ],
        on: [{
          "event": "/http:\\/\\/\\S+/",   
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[0]}}"
      }
    }
  ]
}
