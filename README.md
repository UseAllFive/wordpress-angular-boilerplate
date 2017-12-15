# Wordpress-Angular Boilerplate
Develop Angular websites, powered by Wordpress CMS. Brought to you by the strategists, designers and developers of [Use All Five](http://useallfive.com).
  
## Installation
  
```sh
git clone clone git@github.com:UseAllFive/wordpress-angular-boilerplate.git
cd wordpress-angular-boilerplate
npm install
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
In your brower, you should now see boilerplate data being imported from the [Use All Five](http://useallfive.com) Demo Wordpress

![figure](https://raw.githubusercontent.com/UseAllFive/wordpress-angular-boilerplate/master/src/assets/images/boilerplate.gif "Boilerplate demo") 

## Wordpress Configuation
After installing Wordpress, there are several plugins you'll need to install: 
`ACF to REST API, Advanced Custom Fields, Advanced Custom Fields PRO`

![figure](https://raw.githubusercontent.com/UseAllFive/wordpress-angular-boilerplate/master/src/assets/images/wp-plugins "Wordpress plugins") 

The [Advanced Custom Fields Pro plugin](https://www.advancedcustomfields.com/) is a paid plugin that allows us to create flexible and repeating content for our layout-driven designs


## Angular Configuration
We are using the [WP-API-Angular library](https://github.com/wordpress-clients/wp-api-angular) to import data from Wordpress (you can [see some of their examples here](https://plnkr.co/edit/hqE4bvbM6HXql5Insjx8?p=preview)

In your boilerplate Angular code, go to `app.module.ts` and replace `http://wp-playground.ua5.land` with your own Wordpress domain

And thats it! If your Wordpress & Advanced Custom Fields matches ours, this will work out of the box with your own Wordpress data coming through in the boilerplate template.
You can add custom pages in `app-routing.module.ts`, and create your own `interfaces` to make your own Wordpress custom fields.
  
## Questions & Help
If you have questions, feel free to open a github ticket or email us at hello@useallfive.com

## Advanced Custom Fields Plugin
https://www.advancedcustomfields.com/
Buy pro
