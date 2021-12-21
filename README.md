# <p align="center">Anywhere Fitness API</p>

## <p align="center">https://bw-anywhere-fitness1-app.herokuapp.com/</p>

## <p align="center">---------- Users ----------</p>

## Dummy Login Info

<details>
<summary>Usernames/Passwords</summary>

```json
[
    {
        "username": "bob",
        "password": "password",
        "role_type": "instructor"
    },
    {
        "username": "sam",
        "password": "password",
        "role_type": "instructor"
    },
    {
        "username": "kat",
        "password": "password",
        "role_type": "client"
    },
    {
        "username": "joe",
        "password": "password",
        "role_type": "client"
    }
]
```

</details>

### [POST] /api/auth/register

- In progress....


### [POST] /api/auth/login

- In progress.....

##

### [GET] /api/users/

**_RESTRICTED ENDPOINT_**

- Get an array of users
  - _requires valid token in authorization header to access_

_What you receive:_

```json
[
    {
        "user_id": 1,
        "username": "bob",
        "password": "$2a$08$yfULkHyql2ClLhS2s4P5ROZqnA9JErsqMaO/VfsDVmU9fYZAWv3M6",
        "role_type": "instructor",
        "created_at": "2021-12-20T23:02:31.689Z",
        "updated_at": "2021-12-20T23:02:31.689Z"
    },
    {
        "user_id": 2,
        "username": "sam",
        "password": "$2a$08$yfULkHyql2ClLhS2s4P5ROZqnA9JErsqMaO/VfsDVmU9fYZAWv3M6",
        "role_type": "instructor",
        "created_at": "2021-12-20T23:02:31.689Z",
        "updated_at": "2021-12-20T23:02:31.689Z"
    },
    {
        "user_id": 3,
        "username": "kat",
        "password": "$2a$08$yfULkHyql2ClLhS2s4P5ROZqnA9JErsqMaO/VfsDVmU9fYZAWv3M6",
        "role_type": "client",
        "created_at": "2021-12-20T23:02:31.689Z",
        "updated_at": "2021-12-20T23:02:31.689Z"
    },
    {
        "user_id": 4,
        "username": "joe",
        "password": "$2a$08$yfULkHyql2ClLhS2s4P5ROZqnA9JErsqMaO/VfsDVmU9fYZAWv3M6",
        "role_type": "client",
        "created_at": "2021-12-20T23:02:31.689Z",
        "updated_at": "2021-12-20T23:02:31.689Z"
    }
]
```

### [GET] /api/user/:user_id

**_RESTRICTED ENDPOINT_**

- Get information on a specific user
  - _requires valid token in authorization header to access_
  - _(example uses "1" for **:user_id** in URL)_

_What you receive:_

```json
{
    "user_id": 1,
    "username": "bob",
    "password": "$2a$08$yfULkHyql2ClLhS2s4P5ROZqnA9JErsqMaO/VfsDVmU9fYZAWv3M6",
    "role_type": "instructor",
    "created_at": "2021-12-20T23:02:31.689Z",
    "updated_at": "2021-12-20T23:02:31.689Z"
}
```

##

## <p align="center">---------- CLASSES ----------</p>

### [GET] /api/classes

**_RESTRICTED ENDPOINT_**

- Get an array of all classes you can sign up for
  - _requires valid token in authorization header to access_

_What you receive:_

```json
[
    {
        "class_id": 1,
        "class_name": "Power Ranger Pilates",
        "class_duration": "1 hour",
        "max_class_size": 15,
        "class_date": "2021-11-17T05:00:00.000Z",
        "start_time": "08:00:00",
        "class_location": "Central Park",
        "class_type": "pilates",
        "class_intensity": "Beginner",
        "class_instructor": 1
    },
    {
        "class_id": 2,
        "class_name": "Boxing Basics",
        "class_duration": "45 min",
        "max_class_size": 12,
        "class_date": "2021-12-22T05:00:00.000Z",
        "start_time": "10:30:00",
        "class_location": "YMCA",
        "class_type": "boxing",
        "class_intensity": "Beginner",
        "class_instructor": 2
    },
    {
        "class_id": 3,
        "class_name": "80's at 8",
        "class_duration": "1.5 hours",
        "max_class_size": 25,
        "class_date": "2021-11-19T05:00:00.000Z",
        "start_time": "08:00:00",
        "class_location": "Gym Z",
        "class_type": "aerobics",
        "class_intensity": "Advanced",
        "class_instructor": 1
    },
    {
        "class_id": 4,
        "class_name": "Sychronized Swimming",
        "class_duration": "2 hours",
        "max_class_size": 10,
        "class_date": "2022-01-07T05:00:00.000Z",
        "start_time": "16:45:00",
        "class_location": "Community Pool",
        "class_type": "swimming",
        "class_intensity": "Intermediate",
        "class_instructor": 2
    },
    {
        "class_id": 5,
        "class_name": "Tik Tok Zumba",
        "class_duration": "30 min",
        "max_class_size": 20,
        "class_date": "2022-02-08T05:00:00.000Z",
        "start_time": "18:30:00",
        "class_location": "Gym Z",
        "class_type": "dance",
        "class_intensity": "Advanced",
        "class_instructor": 2
    }
]
```

### [GET] /api/classes/:class_id

**_RESTRICTED ENDPOINT_**

- Get information for a specific class
  - _requires valid token in authorization header to access_
  - _(example uses "1" for **:class_id** in URL)_

_What you receive:_

```json
{
    "class_id": 1,
    "class_name": "Power Ranger Pilates",
    "class_duration": "1 hour",
    "max_class_size": 15,
    "class_date": "2021-11-17T05:00:00.000Z",
    "start_time": "08:00:00",
    "class_location": "Central Park",
    "class_type": "pilates",
    "class_intensity": "Beginner",
    "class_instructor": 1
}
```

### [GET] /api/classes/:user_id/attending

**_RESTRICTED ENDPOINT_**

- Get an array of classes a specific user is registered for
  - _requires valid token in authorization header to access_
- _(example uses "4" for **:user_id** in URL)_
  _What you receive:_

```json
[
    {
        "user_id": 4,
        "username": "joe",
        "class_id": 2,
        "class_name": "Boxing Basics",
        "class_duration": "45 min",
        "max_class_size": 12,
        "class_date": "2021-12-22T05:00:00.000Z",
        "start_time": "10:30:00",
        "class_location": "YMCA",
        "class_type": "boxing",
        "class_intensity": "Beginner",
        "class_instructor": 2
    },
    {
        "user_id": 4,
        "username": "joe",
        "class_id": 4,
        "class_name": "Sychronized Swimming",
        "class_duration": "2 hours",
        "max_class_size": 10,
        "class_date": "2022-01-07T05:00:00.000Z",
        "start_time": "16:45:00",
        "class_location": "Community Pool",
        "class_type": "swimming",
        "class_intensity": "Intermediate",
        "class_instructor": 2
    },
    {
        "user_id": 4,
        "username": "joe",
        "class_id": 3,
        "class_name": "80's at 8",
        "class_duration": "1.5 hours",
        "max_class_size": 25,
        "class_date": "2021-11-19T05:00:00.000Z",
        "start_time": "08:00:00",
        "class_location": "Gym Z",
        "class_type": "aerobics",
        "class_intensity": "Advanced",
        "class_instructor": 1
    }
]
```

### [GET] /api/classes/:user_id/instructing

**_RESTRICTED ENDPOINT_**

- Get an array of classes a specific instructor is teaching
  - _requires valid token in authorization header to access_
- _(example uses "1" for **:user_id** in URL)_
  _What you receive:_

```json
[
    {
        "username": "bob",
        "class_id": 3,
        "class_name": "80's at 8",
        "class_duration": "1.5 hours",
        "max_class_size": 25,
        "class_date": "2021-11-19T05:00:00.000Z",
        "start_time": "08:00:00",
        "class_location": "Gym Z",
        "class_type": "aerobics",
        "class_intensity": "Advanced",
        "class_instructor": 1,
        "number_registered": 2
    },
    {
        "username": "bob",
        "class_id": 1,
        "class_name": "Power Ranger Pilates",
        "class_duration": "1 hour",
        "max_class_size": 15,
        "class_date": "2021-11-17T05:00:00.000Z",
        "start_time": "08:00:00",
        "class_location": "Central Park",
        "class_type": "pilates",
        "class_intensity": "Beginner",
        "class_instructor": 1,
        "number_registered": 1
    }
]
```

### [POST] /api/classes/add

**_RESTRICTED ENDPOINT_**

- Add information for a new class
  - _requires valid token in authorization header to access_
  - _only an authorized instructor can add a class_

_What you send:_

```json
{
    "class_name": "Kardio Kings",
    "class_duration": "45 mins",
    "max_class_size": 20,
    "class_date": "2021-12-25T05:00:00.000Z",
    "start_time": "10:00:00",
    "class_location": "Central Park",
    "class_type": "cardio",
    "class_intensity": "Intermediate",
    "class_instructor": 2
}
```

_What you receive:_

```json
{
    "class_id": 6,
    "class_name": "Kardio Kings",
    "class_duration": "45 mins",
    "max_class_size": 20,
    "class_date": "2021-12-25T05:00:00.000Z",
    "start_time": "10:00:00",
    "class_location": "Central Park",
    "class_type": "cardio",
    "class_intensity": "Intermediate",
    "class_instructor": 2
}
```

### [POST] /api/classes/signup

**_RESTRICTED ENDPOINT_**

- user can signup for a new class
  - _requires valid token in authorization header to access_

_What you send:_

```json
{
    "class_id": 4, 
    "student_id": 3
}
```

_What you receive (list of all user's classes):_

```json
[
    {
        "user_id": 3,
        "username": "kat",
        "class_id": 1,
        "class_name": "Power Ranger Pilates",
        "class_duration": "1 hour",
        "max_class_size": 15,
        "class_date": "2021-11-17T05:00:00.000Z",
        "start_time": "08:00:00",
        "class_location": "Central Park",
        "class_type": "pilates",
        "class_intensity": "Beginner",
        "class_instructor": 1
    },
    {
        "user_id": 3,
        "username": "kat",
        "class_id": 3,
        "class_name": "80's at 8",
        "class_duration": "1.5 hours",
        "max_class_size": 25,
        "class_date": "2021-11-19T05:00:00.000Z",
        "start_time": "08:00:00",
        "class_location": "Gym Z",
        "class_type": "aerobics",
        "class_intensity": "Advanced",
        "class_instructor": 1
    },
    {
        "user_id": 3,
        "username": "kat",
        "class_id": 5,
        "class_name": "Tik Tok Zumba",
        "class_duration": "30 min",
        "max_class_size": 20,
        "class_date": "2022-02-08T05:00:00.000Z",
        "start_time": "18:30:00",
        "class_location": "Gym Z",
        "class_type": "dance",
        "class_intensity": "Advanced",
        "class_instructor": 2
    },
    {
        "user_id": 3,
        "username": "kat",
        "class_id": 4,
        "class_name": "Sychronized Swimming",
        "class_duration": "2 hours",
        "max_class_size": 10,
        "class_date": "2022-01-07T05:00:00.000Z",
        "start_time": "16:45:00",
        "class_location": "Community Pool",
        "class_type": "swimming",
        "class_intensity": "Intermediate",
        "class_instructor": 2
    }
]
```

### [POST] /api/auth/register

- Register a new user
  - _username required (must be between 3 and 30 characters)_
  - _password required (must be between 5 and 200 characters)_
  - _role required (must be between 'client' or 'instructor'_

_What you send:_

```json client
{
  "username": "SampleUser",
  "password": "password",
  "role_type": "client"
}
```

_What you receive:_

```json
{
    "user_id": 7,
    "username": "SampleUser",
    "password": "$2a$08$DuNScRplwZy4kknDv5I/6.hyTUBJ27YEM1VK57bZehPifHrurU.1.",
    "role_type": "client"
}
```

### [POST] /api/auth/login

- Login
  - _username and password required_
  - _provides a newly created token_

_What you send:_

```json
{
  "username": "SampleUser",
  "password": "password"
}
```

_What you receive:_

```json
{
    "message": "welcome back sampleUser",
    "role_type": "client",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo3LCJ1c2VybmFtZSI6InN1ZSIsInJvbGUiOiJpbnN0cnVjdG9yIiwiaWF0IjoxNjQwMTIyNDIwLCJleHAiOjE2NDAyMDg4MjB9.fo9Xsm6pYP3phZjWbR-uhvwMFDYpMvAmu6URqD_3UOU"
}
```
##
