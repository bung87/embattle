// const postcssPresetEnv = require('postcss-preset-env');
module.exports = {
    /* use stage 3 features + css nesting rules */
    stage: 3,
    features: {
        'nesting-rules': true
    },
    "modules": true,
    "plugins": {
        "autoprefixer": {
            "grid": true
        }
    }

}