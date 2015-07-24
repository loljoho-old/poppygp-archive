# `client/assets/partials/`

This directory contains the HTML partials necessary to render certain areas of the layout which are as follows:

```
├── iframe/
│   ├── chat.html
│   └── video.html
├── tabs/
│   ├── about.html
│   ├── chat.html
│   ├── contact.html
│   ├── help.html
│   └── home.html
└── ...
```

Later on, these files will be replaced by a data service `factory` in the appropriate module to retrieve data via `$resource`.

The partials under `iframe/` will be similarly replaced to allow for user selection between a number of selections.