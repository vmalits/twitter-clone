## Twitter

## Usage

`$ git clone git@gitlab.com:vladimir.malits/twitter.git`

`$ cd twitter`

`$ cp .env.example .env`

`$ php artisan key:generate`

`$ docker-compose up -d --build`

`$ ./dc.sh composer install`

`$ ./dc.sh php artisan migrate`


### Run commands inside docker container
There is a dc.sh executable script, a shorthand for command `docker-compose exec php-fpm your_command`
1. Run `./dc.sh` to jump into container and run your commands there
Then type `exit` to leave container.
2. Run `./dc.sh your_command` to run commands directly without login into container

Example: `./dc.sh bin/console cache:clear`

### Info

The project is running at localhost:7777
