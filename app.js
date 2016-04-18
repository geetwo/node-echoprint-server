var child = new (forever.Monitor)('index.js', {
        silent: false,
        args: []
    });

    child.start();