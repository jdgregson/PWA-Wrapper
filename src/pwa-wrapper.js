// Access tokens which should appear on the URL of authorized requests as
// ?token=<token>. Without one of these, users will only see a 403 error.
const accessTokens = [
  '4d35122c-8297-461b-8feb-c07994ff4309',
];

// Configures the PWA wrapper. This is the PWA that users will install on their
// devices.
const webmanifest = {
  name: 'PWA Wrapper',
  short_name: 'PWA Wrapper',
  description: '',
  start_url: '/',
  display: 'fullscreen',
  theme_color: '#000000',
  background_color: '#000000',
  icons: [
    {
      src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAFU2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEyOCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjEyOCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjEyOCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTI4IgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSIzMDAvMSIKICAgdGlmZjpZUmVzb2x1dGlvbj0iMzAwLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQ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',
      type: 'image/png',
      sizes: '128x128',
    }
  ],
};

/**
 * Configures apps to be wrapped and the PIN required to access them.
 * Options:
 *   - url (required): The URL to open when this app is launched.
 *   - pin (required): The PIN the user must enter to launch this app.
 *   - iframe (optional): Whether to attempt to launch this site in an iframe.
 *       While iframing the app makes it feel more native, the iframed site has
 *       to allow itself to be iframed, and cookies and data are not saved for
 *       these sites between PWA launches.
 */
const wrappedApps = [
  {
    url: 'https://google.com',
    pin: '4623',
  },
  {
    url: 'https://portal.office.com',
    pin: '8546',
  },
  {
    url: 'https://twitter.com',
    pin: '1234',
  },
];

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Handles requests sent to the app.
 * @param {object} request The request object.
 * @return {object} The Response object to send.
 */
const handleRequest = async (request) => {
  const token = getToken(request);
  const userPIN = getPIN(request);
  let url = new URL(request.url);
  if (isAuthorized(token)) {
    if (url.pathname.indexOf('/manifest.webmanifest') === 0) {
      return sendManifest(token);
    } else {
      const wrappedApp = getWrappedApp(userPIN);
      if (wrappedApp) {
        if (wrappedApp.iframe) {
          return sendIframe(wrappedApp.url, '', token);
        } else {
          return sendRedirect(wrappedApp.url);
        }
      } else {
        return sendResponse(webmanifest.short_name, getKeypad(), token, 200);
      }
    }
  } else {
    return sendResponse('403 Not Authorized', '403 Not Authorized', '', 403);
  }
};

/**
 * Returns a Response object containing the PWA HTML and a given HTML body.
 * @param {string} title The title of the page to be returned.
 * @param {string} body The content to be returned in the HTML <body> tag.
 * @param {string} token The token to use to fetch the webmanifest.
 * @param {number} statusCode The HTTP status code to send in the response.
 * @return {object} The Response object.
 */
const sendResponse = async (title, body, token, statusCode) => {
  return new Response(getHTML(title, body, token), {
    status: statusCode,
    headers: {
      'Content-Type': 'text/html',
    },
  });
};

/**
 * Returns a Response object redirecting the browser to a given URL.
 * @param {string} url The URL to redirect the browser to.
 * @param {number=} statusCode The HTTP status code to send with the response.
 *   Default: 302
 * @return {object} Response object instructing the browser to redirect to the
 *   given URL.
 */
const sendRedirect = async (url, statusCode = 302) => {
  return new Response('', {
    status: statusCode,
    headers: {
      Location: url,
    },
  });
};

/**
 * Returns a Response object instructing the browser to create an iframe
 * pointing to a given URL.
 * @param {string} url The URL to redirect the browser to.
 * @param {string} title The title to give the returned page.
 * @param {string} token The token used to fetch the webmanifest.
 * @return {object} Response object instructing the browser to create an iframe
 *   pointing to the given URL.
 */
const sendIframe = (url, title, token) => {
  const html = `
    <style>
      iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border: none;
        outline: none;
      }
    </style>
    <iframe src="${url}"></iframe>
  `;
  return new Response(getHTML(title, html, token), {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
};

/**
 * Returns a Response object containing the webmanifest as JSON.
 * @param {string} token The token to be used in the start_url field of the
 *   manifest. Without this, installed PWAs will not be authorized to access
 *   the app.
 * @return {object} Response object containing the webmanifest as a JSON string.
 */
const sendManifest = (token) => {
  if (token) {
    webmanifest.start_url += '?token=' + token;
  }

  return new Response(JSON.stringify(webmanifest), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

/**
 * Checks if a given token is in the accessTokens array.
 * @param {string} token A token to verify.
 * @return {bool} Whether or not the provided token was found in accessTokens.
 */
const isAuthorized = (token) => {
  try {
    if (accessTokens.indexOf(token) > -1) {
      return true;
    }
  } catch (e) {}
  return false;
};

/**
 * Returns a copy of a string with HTML characters encoded as entities.
 * @param {string} string An unsafe string.
 * @return {string} A safe string.
 */
 const sanitizeString = (string) => {
  return string
    .replace(/<br ?\/?>/g, '\n')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * Returns the app associated with a given PIN, or false.
 * @param {string} uesrPIN The PIN used to look up a configured app.
 * @return {object|bool} The configured app matching the provided PIN or false.
 */
const getWrappedApp = (userPIN) => {
  if (userPIN) {
    for (let i = 0; i < wrappedApps.length; i++) {
      const wrappedApp = wrappedApps[i];
      if (userPIN === wrappedApp.pin) {
        return wrappedApp;
      }
    }
  }
  return false;
};

/**
 * Returns the token provided in the URL of the request object. The token is
 * expected to be in UUIDv4 format and is verified before being returned. If the
 * token is not found or not in the correct format, nothing is returned.
 * @param {object} request The request object.
 * @return {string|undefined} The token provided in the request URL.
 */
const getToken = (request) => {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  if (
    token &&
    token.match(
      /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/
    )
  ) {
    return token;
  }
};

/**
 * Returns the PIN provided in the URL of the request object. The PIN is
 * expected to be 4-digit number and is verified before being returned. If the
 * PIN is not found or not in the correct format, nothing is returned.
 * @param {object} request The request object.
 * @return {string|undefined} The PIN provided in the request URL.
 */
const getPIN = (request) => {
  const url = new URL(request.url);
  const pin = url.searchParams.get('pin');
  if (pin && pin.match(/^[0-9]{4}$/)) {
    return pin;
  }
};

/**
 * Takes in HTML content and returns it wrapped in the HTML required to get the
 * PWA working. Title and token will be sanitized. Body will not be sanitized as
 * HTML/JavaScript is expected there.
 * @param {string} Title The title of the page to be returned.
 * @param {string} Body The content of the HTML <body> tag.
 * @param {string} Token The user-provided access token.
 * @return {string} The provided HTML body wrapped in a PWA wrapper.
 */
const getHTML = (title, body, token) => {
  let iconSrc = '';
  if (typeof webmanifest !== 'undefined' && webmanifest.icons &&
      webmanifest.icons[0]) {
    iconSrc = webmanifest.icons[0].src;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>${sanitizeString(title)}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Admin" />
      <meta name="apple-mobile-web-app-title" content="Admin" />
      <meta name="msapplication-starturl" content="/" />
      <link rel="apple-touch-icon" href="${iconSrc}">
      <link rel="manifest" href="manifest.webmanifest?token=${sanitizeString(token)}" />
      <style>
        body {
          background-color: #000;
          color: #eee;
          font-family: Sans-Serif;
        }
      </style>
    </head>
    <body>
      ${body}
    </body>
    </html>
  `;
};

/**
 * Returns the HTML and JavaScript for the authentication keypad.
 * @return {string} HTML and JavaScript of the authentication keypad.
 */
const getKeypad = () => {
  const keypad = `
  <style>
  body, html {
    margin: 0;
    font-family: sans-serif;
    height: 100%;
    width: 100%;
    position: fixed;
  }

  #keypad {
    width: 370px;
    height: 650px;
    overflow: hidden;
    margin: 0 auto;
  }

  #feedback-text {
    width: 100%;
    text-align: center;
    margin: 5px 0 20px 0;
    color: #ae0505;
    font-size: 14px;
  }

  .progress-text {
    width: 100%;
    text-align: center;
    margin-top: 40px;
  }

  .progress-container {
    justify-content: space-around;
    display: flex;
    padding: 40px;
  }

  .progress-dot {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 2px solid #ffffff;
    display: inline-block;
    margin-top: 8px;
  }

  .progress-dot.filled {
    background-color: #ffffff;
  }

  .keypad-row {
    display: flex;
    justify-content: space-around;
    padding: 10px 40px;
  }

  .keypad-key {
    width: 60px;
    height: 60px;
    display: inline-block;
    text-align: center;
    vertical-align: top;
    border: 1px solid #fff;
    border-radius: 60px;
    padding: 7px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    transition: all 0.1s ease-out;
    -webkit-tap-highlight-color: #ffffff;
  }

  .key-0 {
    line-height: 56px;
  }

  .keypad-number {
    font-size: 35px;
  }

  .keypad-letter {
    font-size: 9px;
    letter-spacing: 2px;
  }

  .key-clicked {
    color: #000000;
    background-color: #ffffff;
  }
  </style>
  <div id="keypad">
    <div class="progress-text">Enter Passcode</div>
    <div class="progress-container">
      <div class="progress-dot"></div>
      <div class="progress-dot"></div>
      <div class="progress-dot"></div>
      <div class="progress-dot"></div>
    </div>
    <div id="feedback-text" style="display: none;">Wrong passcode</div>
    <div class="keypad-container">
      <div class="keypad-row">
        <div class="keypad-key">
          <div class="keypad-number">1</div>
          <div class="keypad-letter"></div>
        </div>
        <div class="keypad-key">
          <div class="keypad-number">2</div>
          <div class="keypad-letter">ABC</div>
        </div>
        <div class="keypad-key">
          <div class="keypad-number">3</div>
          <div class="keypad-letter">DEF</div>
        </div>
      </div>
      <div class="keypad-row">
        <div class="keypad-key">
          <div class="keypad-number">4</div>
          <div class="keypad-letter">GHI</div>
        </div>
        <div class="keypad-key">
          <div class="keypad-number">5</div>
          <div class="keypad-letter">JKL</div>
        </div>
        <div class="keypad-key">
          <div class="keypad-number">6</div>
          <div class="keypad-letter">MNO</div>
        </div>
      </div>
      <div class="keypad-row">
        <div class="keypad-key">
          <div class="keypad-number">7</div>
          <div class="keypad-letter">PQR</div>
        </div>
        <div class="keypad-key">
          <div class="keypad-number">8</div>
          <div class="keypad-letter">STU</div>
        </div>
        <div class="keypad-key">
          <div class="keypad-number">9</div>
          <div class="keypad-letter">WXYZ</div>
        </div>
      </div>
      <div class="keypad-row key-0">
        <div class="keypad-key">
          <div class="keypad-number">0</div>
        </div>
      </div>
    </div>
  </div>
  <script>
    window.pin = '';
    const url = new URL(document.location);

    if (url.searchParams.get('pin')) {
      document.getElementById('feedback-text').style.display = 'block';
    }

    document.querySelectorAll('.keypad-key').forEach((key) => {
      key.addEventListener('click', (e) => {
        let clickedKey = e.target;
        if (!clickedKey.classList.contains('keypad-key')) {
          clickedKey = clickedKey.parentElement;
        }

        const keyValue = clickedKey.querySelector('.keypad-number').innerText;
        clickedKey.classList.add('key-clicked');
        self.setTimeout(() => {
          clickedKey.classList.remove('key-clicked');
        }, 50);

        window.pin += keyValue;
        const n = window.pin.length;
        const dot = document.querySelector('.progress-dot:nth-of-type(' + n + 'n)');
        dot.classList.add('filled');

        if (window.pin.length === 4) {
          const url = new URL(document.location);
          url.searchParams.set('pin', window.pin);

          document.querySelectorAll('.progress-dot').forEach((dot) => {
            dot.classList.remove('filled');
          });
          window.pin = '';

          document.location = url.href;
        }
      });
    });
  </script>
  `;
  return keypad;
};
