# AlgoCube

Generated from a single HTML file.

## Build for free

1. Push this folder to a GitHub repository (include the `.github` folder).
2. Open the **Actions** tab and run the workflows if they have not started.
3. Download the `apk` artifact (`app-debug.apk`) from **Build APK**.
4. Download the `windows-exe` artifact (portable `.exe` and installer) from **Build Windows EXE**.

## Change the app later

Edit the HTML in `app/src/main/assets/www/index.html` and `desktop/index.html`, commit, and the workflows build new files.
# AlgoCube Windows auto-update patch

## Files in this package are replacements/additions for your repository:
- desktop/main.js
- desktop/package.json
- .github/workflows/build-exe.yml

## Install steps:
1. Back up your repository.
2. Replace the matching files with these files (keep desktop/index.html and desktop/build/icon.png).
3. Commit and push to main/master to test a build artifact.
4. For a public update release, update desktop/package.json version (for example 1.0.1), commit/push, then create and push a matching tag: git tag v1.0.1 && git push origin v1.0.1
5. Confirm the GitHub Actions run succeeds and the Release contains the NSIS setup EXE, latest.yml, and blockmap file(s).

### Important:
- electron-updater supports the NSIS-installed app, not the portable EXE target. Users must install via AlgoCube-Setup-<version>.exe for this update path.
- This config assumes the GitHub repository is public. For private repositories, extra updater authentication is needed.
- Windows code signing is not configured. Windows may show SmartScreen/unknown-publisher warnings; auto-update is not a substitute for Authenticode signing.
- Never publish a release tag before the build has been checked. A release tag triggers publication.
- Keep version in desktop/package.json increasing for every release.
- Android auto-updates are NOT included in this patch. Android needs a separate native updater flow and APK release signing with the same persistent key. Do not use a new key for every APK release.
