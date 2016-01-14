# Imgur Link Preview for Mixmax

This is an open source Mixmax Link Resolver. See <http://sdk.mixmax.com/docs/tutorial-giphy-link-preview> for more information about how to use this example code in Mixmax.

## Running locally

1. Install using `npm install`
2. Run using `npm start`

To simulate locally how Mixmax calls the resolver URL (to return HTML that goes into the email), run:

```
curl http://localhost:9146/resolver?url=http%3A%2F%2Fimgur.com%2Fgallery%2FttMdsyf
```
To test it locally, open the Mixmax Dashboard, click Integrations, and click Add Link Resolver.
Enter the following for the parameters:

1. Description: `Imgur (imgur.com/gallery/*)`
2. Regular Expression: `imgur.com/gallery/([a-zA-Z0-9]+)$`
3. Resolver API URL: `http://localhost:9146/resolver`
