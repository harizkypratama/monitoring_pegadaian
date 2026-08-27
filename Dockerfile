FROM php:8.2-cli

# Install PHP extensions untuk MySQL
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copy application files
COPY . /var/www/html/

# Set permissions
RUN chown -R www-data:www-data /var/www/html

# Railway menyediakan PORT saat runtime
CMD ["sh", "-c", "php -S 0.0.0.0:${PORT:-8080} -t /var/www/html"]
