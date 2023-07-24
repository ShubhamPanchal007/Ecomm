// All information is about responses recieved from the server.

// OTP Requested 

/*
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 603
ETag: W/"25b-6Q0HyFhi0II3Vl2jP7Ycy4rqUMs"
Date: Wed, 19 Jul 2023 12:16:28 GMT
Connection: close

{
  "sid": "VE73b751ed3ff1626b37b2b1c4012bc38f",
  "serviceSid": "VAca5cdf9cf24a1c7f0d3e6d2822489fd8",
  "accountSid": "ACe16e08590ca59c4d721f7bb748249ca5",
  "to": "+918168260313",
  "channel": "sms",
  "status": "pending",
  "valid": false,
  "lookup": {
    "carrier": null
  },
  "amount": null,
  "payee": null,
  "sendCodeAttempts": [
    {
      "attempt_sid": "VL34c733de2efd7748403a83413e6905f2",
      "channel": "sms",
      "time": "2023-07-19T12:16:27.000Z"
    }
  ],
  "dateCreated": "2023-07-19T12:16:27.000Z",
  "dateUpdated": "2023-07-19T12:16:27.000Z",
  "url": "https://verify.twilio.com/v2/Services/VAca5cdf9cf24a1c7f0d3e6d2822489fd8/Verifications/VE73b751ed3ff1626b37b2b1c4012bc38f"
}
*/ 

// Role token

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIrOTE4MTY4MjYwMzEzIiwidXNlclJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4OTc3MDU4MCwiZXhwIjoxNjg5Nzc0MTgwfQ.59S7kbYtSDh09-uBbjKmsPPqF5wG-uRXUuK8owAxI-k