import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import type { AstroIntegration } from "astro";
import hostedGitInfo from "hosted-git-info";

export default function buildCommit(
    repository: string,
    { build = false } = {},
): AstroIntegration {
    return {
        name: "cmdesigns/build-commit",
        hooks: {
            "astro:config:setup": ({ config, command, updateConfig }) => {
                if (command !== "build" && command !== "dev") return;

                const repo = hostedGitInfo.fromUrl(repository);
                if (!repo) {
                    throw new Error("cmdesigns/build-commit: unsupported repository URL");
                }

                const commit = execFileSync("git", ["rev-parse", "HEAD"], {
                    cwd: config.root,
                    encoding: "utf8",
                }).trim();
                const link = repo.browse({ committish: commit });
                const define: Record<string, string> = {
                    "import.meta.env.CMDESIGNS_BUILD_LINK": JSON.stringify(link),
                };

                if (build) {
                    const ref = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {
                        cwd: config.root,
                        encoding: "utf8",
                    }).trim();
                    const { version } = JSON.parse(
                        readFileSync(new URL("package.json", config.root), "utf8"),
                    );
                    if (!version) {
                        throw new Error("cmdesigns/build-commit: package.json must have a version");
                    }
                    const label = `${repo.project} (${ref === "HEAD" ? "unknown" : ref}) v${version}-${commit.slice(0, 7)}`;
                    define["import.meta.env.CMDESIGNS_BUILD"] = JSON.stringify(label);
                }

                updateConfig({ vite: { define } });
            },
        },
    };
}
