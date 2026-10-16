# CM Designs

An attempt at putting common chrissx Media design elements into a library.

The code is MIT licensed, but usage of `CMText`, `FGText`, etc is a trademark
violation.

## Components

| Name            | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| `MinimalLayout` | CSS Reset + HTML Skeleton                                        |
| `BaseLayout`    | `MinimalLayout` + cM Fonts + Dark Mode                           |
| `Footer`        | Copyright &copy; `{start}`-`{end}` `{rightsholder}`              |
| `Button`        | IdP buttons and links, with default, primary and danger variants |
| `Dialog`        | Native dialog with the IdP style and a buttons slot              |
| `Tabs`          | KCT segmented radio selector                                     |
| `CMText`        | ⚠️ not for external use (chrissx Media trademark)                |
| `FGText`        | ⚠️ not for external use (Fux Games trademark)                    |

Use these inside `BaseLayout` for the shared fonts and color tokens.

```astro
---
import { Button, Dialog, Tabs } from "cmdesigns";
---

<Button variant="primary">Continue</Button>
<Button href="/account">Your account</Button>

<Button id="open-dialog" type="button">Open dialog</Button>
<Dialog id="confirmation" aria-labelledby="confirmation-title">
    <h3 id="confirmation-title">Clear your ratings?</h3>
    <p>This removes all ratings in this check.</p>
    <form slot="buttons" method="dialog">
        <Button>Cancel</Button>
    </form>
</Dialog>

<Tabs
    id="lyrics-style"
    label="Lyrics style"
    options={[["genius", "Genius"], ["musixmatch", "Musixmatch"], ["plain", "Plain"]]}
    value="genius"
/>

<script>
    document.getElementById("open-dialog")!.addEventListener("click", () => {
        document.querySelector<HTMLDialogElement>("#confirmation")!.showModal();
    });
    document.getElementById("lyrics-style")!.addEventListener("change", (event) => {
        const value = (event.target as HTMLInputElement).value;
        localStorage.setItem("lyrics-style", value);
    });
</script>
```

`Button` forwards native button or link attributes, including `class`. `Dialog`
forwards native dialog attributes. Its default slot holds the content; the
optional `buttons` slot aligns actions to the right. Open it with `showModal()`
and close it with `close()` or a native dialog form.

`Tabs` takes `[value, label]` pairs. Its `label` names the radio group for
accessibility. `value` selects the initial option, falling back to the first.
The radio name defaults to `id`; pass `name` to change the submitted form field.
Handle native `change` events in the consuming site to update panels, URLs or
saved preferences.

`Tabs` fills its container. Set `max-width` in the consumer when needed.

Styles come from [chrissx ID](https://github.com/chrissxMedia/id.chrissx.de) and
[KinkCheck.Top](https://github.com/chrissxMedia/KinkCheck.Top/blob/f0f678be94017d5c895e772b938e94ee3d6e03a8/src/components/SettingTabs.astro).
