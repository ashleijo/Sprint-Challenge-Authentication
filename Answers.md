<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
# Sessions may be thought of as a "record" to keep track of a user's data as they are interacting with a webpage or application. Middleware functions may be used to get unique information from the session so that future user interactions may be handled accordingly. bcypt and JWT are authentication tools used to make the submission and storage of user data more secure.

1.  What does bcrypt do in order to prevent attacks?
# bcrypt encrypts passwords by executing a hash function many times in a loop. It slower computing time makes it less likely to be subject to the effort of an attack.
1.  What are the three parts of the JSON Web Token?
# The header (declarations of the token type and hashing algorithm), the payload (typically data about the user), and the signature (verification of the sender and that the message was not altered).
