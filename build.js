var mdHelper = require('./md_helper');
// mdHelper.convertMdToVueAndSaveInFolder('docs/v1/tutorial', 'src/pages/v1/tutorial', 'tutorial.v1');
// mdHelper.convertMdToVueAndSaveInFolder('docs/v1/example', 'src/pages/v1/example', 'example.v1');
mdHelper.convertMdToVueAndSaveInFolder('docs/tutorial', 'src/pages/tutorial', 'tutorial');
mdHelper.convertMdToVueAndSaveInFolder('docs/example', 'src/pages/example', 'example');