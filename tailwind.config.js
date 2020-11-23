module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    theme: {
        extend: {
            boxShadow: {
                'outline': '0 0 0 2px #2F80ED'
            },
        },
        fontFamily: {
            "head": ['DM Sans', 'sans-serif'],
            "body": ['Roboto', 'sans-serif'],
        },
        /* customForms: theme => ({
            default: {
                input: {
                    borderRadius: theme('borderRadius.2xl'),
                    backgroundColor: theme('colors.white'),
                    '&:focus': {
                        boxShadow: theme('shadow.outline'),
                        borderColor: theme('colors.orange.500'),
                    }
                },
                select: {
                    borderRadius: theme('borderRadius.2xl'),
                    boxShadow: theme('boxShadow.default'),
                },
                checkbox: {
                    color: theme('colors.orange.500'),
                    '&:focus': {
                        boxShadow: theme('shadow.outline'),
                    }
                },
                radio: {
                    color: theme('colors.orange.500'),
                    '&:focus': {
                        boxShadow: theme('shadow.outline'),
                        backgroundColor: theme('colors.ornage.500'),
                    }
                },
            },
        })
    */ },
    variants: {},
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removin
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js'
        ]
    },
    plugins: [
        // require('@tailwindcss/custom-forms'),
    ]

}
