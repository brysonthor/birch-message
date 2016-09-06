module.exports = {
  "plugins": {
    "istanbul": {
      "dir": "./coverage",
      "reporters": [
        "text-summary", "lcov"
      ],
      "exclude": [],

      "include": [
        "**/birch-message.html"
      ]
    },
    "local": {
      "browsers": ["chrome", "safari"]
    }
  }
}