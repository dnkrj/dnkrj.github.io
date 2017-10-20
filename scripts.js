var feed = new Instafeed({
    get: 'tagged',
    tagName: 'awesome',
    clientId: 'YOUR_CLIENT_ID'
});
feed.run();