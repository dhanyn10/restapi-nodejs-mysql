# ADDITIONAL CONFIGURATIONS
- make sure you've installed nodemon globally, add file `nodemon.json` and fill with following code:
```json
{
    "env": {
        "DB_HOST": "host",
        "DB_NAME": "db_name",
        "DB_USER": "db_user",
        "DB_PASSWORD": "db_password",
        "TABLE_NAME": "table_name"
    }
}
```