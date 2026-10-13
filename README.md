# CM Designs

An attempt at putting common chrissx Media design elements into a library.

The code is MIT licensed, but usage of `CMText`, `FGText`, etc is a trademark
violation.

## Components

| Name            | Description                                         |
|-----------------|-----------------------------------------------------|
| `MinimalLayout` | CSS Reset + HTML Skeleton                           |
| `BaseLayout`    | `MinimalLayout` + cM Fonts + Dark Mode              |
| `Footer`        | Copyright &copy; `{start}`-`{end}` `{rightsholder}` |
| `CMText`        | ⚠️ not for external use (chrissx Media trademark)   |
| `FGText`        | ⚠️ not for external use (Fux Games trademark)       |

## Publishing

Configure an [npm trusted publisher](https://docs.npmjs.com/trusted-publishers/)
for `cmdesigns` with owner `chrissxMedia`, repository `cmdesigns`, and workflow
filename `npm.yml`. Leave the environment name empty and allow `npm stage publish`.

Bump the version in `package.json` and merge it into `main`, then run the
"Publish to npm" workflow on `main` from GitHub Actions. Approve the staged
package on npmjs.com or with `npm stage approve <stage-id>` to publish it.
