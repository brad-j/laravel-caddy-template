# Laravel Caddy Template

This template uses [Laravel 11](https://laravel.com/) (with [Breeze](https://laravel.com/docs/11.x/starter-kits#breeze-and-inertia)) with [Inertia](https://inertiajs.com/), [React](https://react.dev/), and [Sqlite](https://www.sqlite.org/) deployed to a VPS with [Caddy](https://caddyserver.com/).

Click the green **Use this template** button to create a repo.

`git clone` the new repo and run the following commands:

1. **Install Composer Dependencies**:

    ```bash
    composer install
    ```

2. **Install NPM Dependencies**:

    ```bash
    npm install
    ```

3. **Build Frontend Assets**:

    ```bash
    npm run dev   # or `npm run build` for production
    ```

4. **Set Up Environment File**:

    ```bash
    cp .env.example .env
    ```

5. **Generate Application Key**:

    ```bash
    php artisan key:generate
    ```

6. **Set Up SQLite Database**:

    ```bash
    touch database/database.sqlite
    ```

7. **Run Migrations**:
    ```bash
    php artisan migrate
    ```

## GitHub Actions Workflow

To set up the GitHub Actions workflow for automatic deployment:

1. **Configure Secrets**:

    - Go to your repository on GitHub.
    - Navigate to `Settings` > `Secrets and variables` > `Actions`.
    - Add the following secrets:
        - `SSH_PRIVATE_KEY`: Your private SSH key for the server.
        - `SSH_KNOWN_HOSTS`: Known hosts entry for your server.

2. **Update the Workflow File**:

    In `.github/workflows/deploy.yml`, replace the placeholders with your server details:

    ```yaml
    rsync -avz --exclude='storage/' --exclude='.env' --exclude='.git' --exclude='.github' ./ USER@SERVER:/path/to/your/project

    ssh -o StrictHostKeyChecking=no USER@SERVER "
    sudo chown -R USER:www-data /path/to/your/project &&
    sudo chmod -R 775 /path/to/your/project &&
    sudo chmod -R 775 /path/to/your/project/storage &&
    sudo chmod -R 775 /path/to/your/project/bootstrap/cache &&
    sudo chmod 664 /path/to/your/project/database/*.sqlite &&
    sudo chown USER:www-data /path/to/your/project/database/*.sqlite
    "
    ```
