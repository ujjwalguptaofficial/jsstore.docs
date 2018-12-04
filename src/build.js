var mdHelper = require('./md_helper');
mdHelper.convertMdToVueAndSaveInFolder('../docs/v1/tutorial', 'code/pages/v1/tutorial', 'tutorial.v1');
mdHelper.convertMdToVueAndSaveInFolder('../docs/v1/example', 'code/pages/v1/example', 'example.v1');
mdHelper.convertMdToVueAndSaveInFolder('../docs/tutorial', 'code/pages/tutorial', 'tutorial');
mdHelper.convertMdToVueAndSaveInFolder('../docs/example', 'code/pages/example', 'example');