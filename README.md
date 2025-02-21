# Backend API for v1

## Description
This is a **Django REST** backend API. The backend API handles email functionality, allowing users to send messages via the contact feature on the website.



## Technical Stack
- **Backend**: Django REST Framework
- **Version Control**: GitHub
- **Deployment**: Backend on Heroku

### Install Dependencies

#### Install Django
1. Install Django using pip:
    ```bash
    pip install django
    ```

2. Create a new Django project:
    ```bash
    django-admin startproject myproject
    ```

3. Navigate to the project directory:
    ```bash
    cd myproject
    ```

#### Set Up the Project
1. Apply initial migrations:
    ```bash
    python manage.py migrate
    ```

2. Create a superuser:
    ```bash
    python manage.py createsuperuser
    ```

3. Run the development server:
    ```bash
    python manage.py runserver
    ```

#### Set Up the App for Sending Emails
1. Create a new Django app:
    ```bash
    python manage.py startapp sending_email
    ```

2. Add the app to your project's `INSTALLED_APPS` in `settings.py`:
    ```python
    INSTALLED_APPS = [
        ...
        'sending_email',
    ]
    ```

3. Configure email settings in `settings.py`:
    ```python
    EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
    EMAIL_HOST = 'smtp.example.com'
    EMAIL_PORT = 587
    EMAIL_USE_TLS = True
    EMAIL_HOST_USER = 'your-email@example.com'
    EMAIL_HOST_PASSWORD = 'your-email-password'
    ```

4. Created a view to handle email sending in `sending_email/views.py`:


5. Add a URL pattern for the email view in `sending_email/urls.py`:
    ```python
    from django.urls import path
    from .views import send_email

    urlpatterns = [
        path('send-email/', send_email, name='send_email'),
    ]
    ```

6. Include the app's URLs in the project's `urls.py`:
    ```python
    from django.urls import include, path

    urlpatterns = [
        ...
        path('sending_email/', include('sending_email.urls')),
    ]
    ```
    7. Created a serializers.py to handle json `sending_email/serializers.py`:

    ## env.py file

    ### this is what used in the file


Specify the front-end URL for API communication

os.environ["MY_FRONTEND"] = "https://yourfrontend.com"  

Allowed domains that can make requests to your backend

os.environ["ALLOWED_HOSTS"] = "localhost, .yourdomain.com" 


Email server username

os.environ["EMAIL_HOST_USER"] = "your_email@example.com" 

Email server password

os.environ["EMAIL_HOST_PASSWORD"] = "your_email_password" 

Django secret key used to secure data and sessions

os.environ["SECRET_KEY"] = "your_secret_key" 



## Deployment 
The frontend is deployed on **Heroku**.

- **Frontend**: [Link to live website](https://my-webpage-v1-react-c9cd915b1668.herokuapp.com)


- **Backend**: [Link to GitHub repository](https://github.com/Timalexanderandersson/personal-webpage-v1)

## Deployment to Heroku

### Preparations
1. Create an account on [Heroku](https://www.heroku.com/).
2. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

### Create a Heroku app manually
1. Log in to your Heroku account.
2. Click on "New" and select "Create new app".
3. Name your app `my-webpage-v1` and click "Create app".

### Config vars in your settings in heroku
#### same as in the env file


Specify the front-end URL for API communication

os.environ["MY_FRONTEND"] = "https://yourfrontend.com"  

Allowed domains that can make requests to your backend

os.environ["ALLOWED_HOSTS"] = "localhost, .yourdomain.com" 

Email server username

os.environ["EMAIL_HOST_USER"] = "your_email@example.com" 

Email server password

os.environ["EMAIL_HOST_PASSWORD"] = "your_email_password" 

Django secret key used to secure data and sessions

os.environ["SECRET_KEY"] = "your_secret_key" 

Disable automatic collectstatic on Heroku (useful for custom static handling)

os.environ["DISABLE_COLLECTSTATIC"] = "1" 


### Deploy the code manually
1. Navigate to the "Deploy" tab in your Heroku app dashboard.
2. Connect your GitHub repository.
3. Select the branch you want to deploy and click "Deploy Branch".

## Deploying to GitHub

### Create a GitHub Repository
1. Go to [GitHub](https://github.com/) and log in to your account.
2. Click on the "+" icon in the top right corner and select "New repository".
3. Name your repository `my-webpage-v1` and click "Create repository".

### Push Code to GitHub
1. Open your project in VSCode.
2. Open a terminal in VSCode.
3. Initialize a new Git repository:

4. Add your files to the repository:
        ```bash
        git add .
        ```
5. Commit your changes:
        ```bash
        git commit -m "Initial commit"
        ```
7. Push your code to GitHub:
        ```bash
        git push 
        ```


## Improvements

- Add more validation for sending the email.


## Installed Libraries

The following libraries are used in this project:

### Dependencies

**asgiref==3.8.1**

**Django==5.1.4**

**django-cors-headers==4.6.0**

**django-crispy-forms==2.3**

**djangorestframework==3.15.2**

**gunicorn==23.0.0**

**packaging==24.2**

**pillow==11.1.0**

**psycopg2-binary==2.9.10**

**python-dotenv==1.0.1**

**sqlparse==0.5.2**

**tzdata==2024.1**

## Problems with Deployment
Having problems uploading the frontend soo the frontend part is moved to own github repository.

## Bugs

### Known Issues
There are currently no known issues.

### Resolved Issues
There are no resolved issues at this time.
## Testing in React 



## Testing in Django

| Test Description | Status | Notes |
|------------------|--------|-------|
| **Valid Post**   | ✅      | This test checks if a post request with valid data is successfully created. |
| **Invalid Post** | ✅      | This test checks if a post request with missing description returns a bad request error. |


## Credit
I have taken help from the following resources:

[Django Rest Framework Official Documentation](https://www.django-rest-framework.org/)
The go-to place for all things related to Django Rest Framework. Find detailed guides, tutorials, and API documentation to help you build powerful APIs.

[Django Email Documentation](https://docs.djangoproject.com/en/5.1/topics/email/)
Official Django documentation on how to send emails, configure email backends, and integrate email functionality into your Django projects.
