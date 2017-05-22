module.exports = (body, title) => `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>${title?title:"default title"}</title>
            </head>
            <body>${body}</body>
        </html>`

