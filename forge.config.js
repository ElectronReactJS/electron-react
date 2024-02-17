module.exports = {
  packagerConfig: {
    asar: true,
    icon: './src/images/brazil-flag-256x256.icns',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'template-electron-react',
        authors: 'Malnati',
        exe: 'template-electron-react.exe',
        setupIcon: './src/images/brazil-flag-256x256.ico',
        loadingGif: './src/images/brazil-flag-4517×2992.gif'
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'win32', 'linux'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'Malnati',
          homepage: 'https://github.com/Malnati/template-electron-react',
          icon: './src/images/brazil-flag-64x64.png'
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          maintainer: 'Malnati',
          homepage: 'https://github.com/Malnati/template-electron-react',
          icon: './src/images/brazil-flag-64x64.png'
        }
      },
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Malnati',
          name: 'template-electron-react'
        },
        prerelease: true
      }
    }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './src/pages/index.html',
              js: './src/pages/index.js',
              name: 'main_window',
              preload: {
                js: './src/preload.js',
              },
            },
          ],
        },
      },
    },
  ],
};
