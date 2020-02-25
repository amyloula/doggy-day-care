# Doggy day care

Hybrid application to book doggy day care 

## Installation

Use npm to install all application dependencies

```
npm install
```

## Usage
To run the application locally:

```
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Structure

All services:

``` src/app/services```

Organizational parts of presentation layer should be feature modules, organized as a page and include child components

Pages are generated using:

``` ng generate page pageName```

Example:

``` src/app/profile```

Components only available for use in that 'feature' are stored as dependencies in the file structure like so:
````
src/app/profile/dog
src/app/profile/owner
src/app/profile/edit
src/app/profile/settings
````

and are included in the feature module `.module.ts` file `declarations` array

## License
[MIT](https://choosealicense.com/licenses/mit/)