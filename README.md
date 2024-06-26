# Laravel Caddy Template

Click the Use this template button to create a repo.

`git clone` the repo and run the following commands:

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
