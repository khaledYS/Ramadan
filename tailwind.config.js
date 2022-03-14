module.exports = {
    content: [
        "./src/**/*.{html,js,jsx}",
        "./index.html"
    ],
    theme: {
      extend: {},
      screens: {
        'lr' : {'max': '1200px'},
        'lrr' : {'max': '1150px'},
        'lrrr' : {'max': '1100px'},
        'lrrrr' : {'max': '1050px'},
        'lrrrrr' : {'max': '1000px'},
        'lrrrrrr' : {'max': '950px'},
        'lrrrrrrr' : {'max': '900px'},
        'md' : {'max': '850px'},
        'mdd' : {'max': '800px'},
        'mddd' : {'max': '750px'},
        'mdddd' : {'max': '700px'},
        'mddddd' : {'max': '650px'},
        'mdddddd' : {'max': '600px'},
        'mddddddd' : {'max': '550px'},
        'sm' : {'max': '500px'},
        'smm' : {'max': '450px'},
        'smmm' : {'max': '400px'},
        'smmmm' : {'max': '350px'},
        'smmmmm' : {'max': '300px'},
        'smmmmmm' : {'max': '250px'},
        'smmmmmmm' : {'max': '200px'}
      }
    },
    plugins: [],
}