module.exports = ({ content }) => /*html*/`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>My 11ty Site</title>
        <link rel="stylesheet" href="/css/global.css" />
        <meta name="description" content="A template for 11ty site builder and collected notes."/>
    </head>
        <body>
            <main>
                ${content}
            </main>
        </body>
    </html>
`;
