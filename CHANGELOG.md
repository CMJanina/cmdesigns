# Changelog

## 0.1.13, 2026-10-27

- Add `SeoHead` to both layouts and export it for custom layouts. Supports title
  templates, canonical URLs, Open Graph, article metadata, keywords, noindex and
  Organization JSON-LD
  ([#13](https://github.com/chrissxMedia/cmdesigns/pull/13)).
- Load `BaseLayout`'s theme from an external stylesheet so CSP can block inline
  styles ([#14](https://github.com/chrissxMedia/cmdesigns/pull/14)).

## 0.1.12, 2026-10-27

- Add `cmdesigns/build-commit` to link `Footer` to the served commit, with an
  optional branch, version and commit label
  ([#12](https://github.com/chrissxMedia/cmdesigns/pull/12)).
- Center button and link labels horizontally
  ([#11](https://github.com/chrissxMedia/cmdesigns/pull/11)).

## 0.1.11, 2026-10-19

- Add `Button`, `Dialog` and `Tabs` components
  ([#6](https://github.com/chrissxMedia/cmdesigns/pull/6)).
- Add `LinkCard` ([#10](https://github.com/chrissxMedia/cmdesigns/pull/10)).
- Respect `hidden` on `Button` and `Tabs`
  ([#7](https://github.com/chrissxMedia/cmdesigns/pull/7)).
- Keep `Tabs` working after Astro client navigation and form resets
  ([#9](https://github.com/chrissxMedia/cmdesigns/pull/9)).
- Add dark scrollbars to `BaseLayout`
  ([#5](https://github.com/chrissxMedia/cmdesigns/pull/5)).
- Move `BaseLayout`'s theme styles into the document head
  ([#8](https://github.com/chrissxMedia/cmdesigns/pull/8)).

## 0.1.10, 2026-10-14

- Export chrissx Media and Fux Games logos as PNG and SVG assets
  ([#4](https://github.com/chrissxMedia/cmdesigns/pull/4)).
- Fix footer text overflowing narrow screens
  ([#1](https://github.com/chrissxMedia/cmdesigns/pull/1)).
- Stop `BaseLayout`'s dark theme affecting pages that only import other
  components ([#3](https://github.com/chrissxMedia/cmdesigns/pull/3)).
- Remove old Firefox focus resets from `MinimalLayout`.
- Correct the package's repository URL and add npm publishing through GitHub
  Actions ([#2](https://github.com/chrissxMedia/cmdesigns/pull/2)).

## 0.1.9, 2026-09-04

- Use margins for footer spacing and normal font weight for `CMText`.
- Require at least Astro 7.0.8 when using Astro 7.

## 0.1.8, 2026-07-13

- Center footer links and size them to their text.

## 0.1.7, 2026-07-07

- Stack footer content vertically with flexbox.

## 0.1.6, 2026-07-06

- Add an optional build label above the footer copyright.

## 0.1.5, 2026-07-02

- Add Fediverse creator metadata to `BaseLayout`.
- Support Astro 5, 6 and 7.
- Document the available components.

## 0.1.4, 2025-04-14

- Export `MinimalLayout` for custom layouts.
- Use dark native form controls through `color-scheme`.
- Document trademark restrictions for the branded components.

## 0.1.3, 2025-03-07

- Upgrade to Astro 5.
- Build `BaseLayout` on a new internal `MinimalLayout` with a bundled CSS reset,
  replacing the `normalize.css` dependency.

## 0.1.2, 2024-01-23

- Tell Dark Reader to leave `BaseLayout`'s dark theme alone.
- Let "Games" in `FGText` inherit its text color.

## 0.1.1, 2023-12-29

- Add `--fgorange` and use it for `FGText`.

## 0.1.0, 2023-12-06

- Upgrade to Astro 4 and `astro-favicon` 0.1.
- Remove `BaseLayout`'s automatic footer and copyright props. Add `Footer`
  explicitly instead.

## 0.0.26, 2023-11-29

- Load the shared fonts through a stylesheet link instead of a CSS import.
- Scale footer padding with the font size.

## 0.0.25, 2023-11-21

- Add shared font variables and use them in `BaseLayout`, the logos and footer.

## 0.0.24, 2023-11-18

- Add `normalize.css` to `BaseLayout`.
- Increase the footer's bottom padding to 40px.

## 0.0.23, 2023-10-17

- Apply `BaseLayout`'s font and dark theme to `body` instead of `html`.

## 0.0.22, 2023-10-15

- Render copyright symbols and spaces correctly in linked footers.

## 0.0.21, 2023-10-15

- Render copyright symbols and spaces correctly in unlinked footers.

## 0.0.20, 2023-10-15

- Rename `BaseLayout`'s `footerlink` prop to `repo`.

## 0.0.19, 2023-10-15

- Add `footerlink` to `BaseLayout` to pass a link to its footer.

## 0.0.18, 2023-10-15

- Add an optional link around the footer copyright.

## 0.0.17, 2023-10-12

- Use a nonbreaking space before the footer's rights holder.

## 0.0.16, 2023-10-12

- Add a configurable rights holder to `Footer` and `BaseLayout`.
- Add `copyrightend` to `BaseLayout` and type `copyrightstart` as a number.

## 0.0.15, 2023-10-07

- Make `BaseLayout`'s favicon optional.

## 0.0.14, 2023-10-07

- Add a footer slot and IE compatibility metadata to `BaseLayout`.

## 0.0.13, 2023-09-29

- Add theme color metadata and a `head` slot to `BaseLayout`.
- Update Astro to 3.1.

## 0.0.12, 2023-09-28

- Stop forcing colors and text decoration on links and inputs.
- Use shared color variables for `CMText`.

## 0.0.11, 2023-09-14

- Add description metadata and accept image imports or string favicon URLs in
  `BaseLayout`.
- Update `astro-favicon` to 0.0.5.

## 0.0.10, 2023-09-14

- Require Astro image imports for favicons with `astro-favicon` 0.0.4.
- Remove individual font imports from the logos and footer.

## 0.0.9, 2023-09-14

- Accept favicon URLs without an `.ico` restriction and update `astro-favicon`
  to 0.0.2.

## 0.0.8, 2023-09-13

- Switch `BaseLayout` to `astro-favicon` with `.ico` favicon paths.

## 0.0.7, 2023-09-13

- Add an optional footer end year and show matching start and end years only
  once.

## 0.0.6, 2023-09-13

- Add `BaseLayout` with shared fonts, dark styling and a footer.
- Make the footer's copyright start year configurable.

## 0.0.5, 2023-09-13

- Upgrade to Astro 3.

## 0.0.4, 2023-08-25

- Export `Footer` from the package entry point.

## 0.0.3, 2023-08-25

- Add the `Footer` component with a content slot and copyright years.

## 0.0.2, 2023-08-25

- Replace the Stencil web components with Astro 2 versions of `CMText` and
  `FGText`.

## 0.0.1, 2023-04-24

- Initial Stencil release with `cm-text` and `fg-text` web components.
