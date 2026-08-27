FROM php:8.2-apache

# Pastikan hanya MPM prefork yang aktif
RUN a2dismod mpm_event mpm_worker 2>/dev/null || true \
    && a2dismod mpm_prefork 2>/dev/null || true \
    && rm -f /etc/apache2/mods-enabled/mpm_event.* \
              /etc/apache2/mods-enabled/mpm_worker.* \
    && a2enmod mpm_prefork

# Apache rewrite
RUN a2enmod rewrite

# PHP extensions untuk MySQL
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copy aplikasi
COPY . /var/www/html/

# Permission
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80

CMD ["apache2-foreground"]
