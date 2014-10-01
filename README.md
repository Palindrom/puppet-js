# &lt;puppet-js&gt;

> Custom Element to bind server-side view models with HTML nodes (HTML Templates/Web Components/AngularJs Apps) using [PuppetJS](https://github.com/PuppetJs/PuppetJs) [communication](https://github.com/PuppetJs/PuppetJs/wiki/Server-communication) ([JSON-Patch](http://tools.ietf.org/html/rfc6902))

## Demo

[Example with Polymer app](http://PuppetJs.github.io/puppet-js/examples/polymer/)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install puppet-js --save
```

Or [download as ZIP](https://github.com/PuppetJs/puppet-js/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/puppet-js/src/puppet-js.html">
    ```

3. Start using it!

    ```html
    <puppet-js ref="nodeToBind"></puppet-js>
    ```

## Attributes

Attribute      | Options     | Default                | Description
---            | ---         | ---                    | ---
`ref`          | *String*    |                        | (required) Id or object reference to DOM Element to bind with server
`serverURL`    | *String*    | `window.location.href` | Data (view model) server URL
`ignoreAdd`    | *String*    | `undefined`            | Regular expression with local properties to ignore (see [PuppetJS.ignoreAdd](https://github.com/PuppetJs/PuppetJs#ignoring-local-changes-ignoreadd))
`useWebSocket` | *String*    | `false`                | Upgrade communication protocol to WebSocket (see [PuppetJS.useWebSocket](https://github.com/PuppetJs/PuppetJs#upgrading-to-websocket-usewebsocket))

## Properties, Methods, Events

`<puppet-js>` inherits from `Puppet` so take a look at [PuppetJs API](https://github.com/PuppetJs/PuppetJs).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/PuppetJs/puppet-js/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
