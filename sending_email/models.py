from django.db import models

# Model for sending email on the wepsite.


class EmailModels(models.Model):
    name = models.CharField(max_length=250)
    email_here = models.EmailField(max_length=250)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'You have Email from {self.name}, at {self.created_at}'
