#!/usr/bin/env node

const fs = require('fs');
const resolveConfig = require('tailwindcss/resolveConfig');
const prettier = require('prettier');
const path = require('path');
const tailwindConfig = require('../tailwind.config.cjs');
const { theme } = resolveConfig(tailwindConfig);
const themeStr = JSON.stringify(theme);
const js = `
const theme  = ${themeStr}

export default theme
`;

try {
    prettier.format(js, { parser: 'babel' })
      .then((formatted) => {
        fs.writeFileSync(
          path.resolve(process.cwd(), './src/ui/theme/theme.ts'),
          formatted,
          'utf-8'
        );
      })
      .catch(err => {
        throw err
      })
    // write the file to src/theme.js after
    // having prettier format the string for us
    
} catch (err) {
    // uh-oh, something happened here!
   throw err 
}
