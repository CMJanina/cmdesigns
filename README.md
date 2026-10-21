# CM Designs

An attempt at putting common chrissx Media design elements into a library.

The code is MIT licensed, but usage of `CMText`, `FGText`, etc is a trademark
violation.

## Components

| Name            | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `MinimalLayout` | CSS Reset + HTML Skeleton                                    |
| `BaseLayout`    | `MinimalLayout` + cM Fonts + Dark Mode                       |
| `Footer`        | Copyright &copy; `{start}`-`{end}` `{rightsholder}`          |
| `Button`        | Buttons and links, with default, primary and danger variants |
| `Dialog`        | Native dialog with a buttons slot                            |
| `Tabs`          | Segmented radio selector                                     |
| `LinkCard`      | Slotted link card                                            |
| `CMText`        | ⚠️ not for external use (chrissx Media trademark)            |
| `FGText`        | ⚠️ not for external use (Fux Games trademark)                |

## Build commit

```js
import { defineConfig } from "astro/config";
import buildCommit from "cmdesigns/build-commit";

export default defineConfig({
    integrations: [buildCommit("github:chrissxMedia/example", { build: true })],
});
```

Sets `Footer`'s default `link` to the served commit. Optional `build: true` adds
`<repo> (<branch>) v<version>-<sha7>`, using the site's `package.json` version.
Props override both defaults; `""` hides either. Requires Git during dev/build.
