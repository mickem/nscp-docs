.. default-domain:: nscp

.. module:: SMTPClient
    :synopsis: SMTP client can be used both from command line and from queries to check remote systes via SMTP

===================================
:module:`SMTPClient` --- SMTPClient
===================================
SMTP client can be used both from command line and from queries to check remote systes via SMTP

**Queries (Overview)**:

A list of all avalible queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`smtp_submit` | Submit information to remote host via SMTP.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/SMTP/client` | :confkey:`~/settings/SMTP/client.channel` | CHANNEL
    :confpath:`/settings/SMTP/client/targets/default` | :confkey:`~/settings/SMTP/client/targets/default.address` | TARGET ADDRESS
    :confpath:`/settings/SMTP/client/targets/default` | :confkey:`~/settings/SMTP/client/targets/default.recipient` | RECIPIENT
    :confpath:`/settings/SMTP/client/targets/default` | :confkey:`~/settings/SMTP/client/targets/default.sender` | SENDER
    :confpath:`/settings/SMTP/client/targets/default` | :confkey:`~/settings/SMTP/client/targets/default.template` | TEMPLATE
    :confpath:`/settings/SMTP/client/targets/default` | :confkey:`~/settings/SMTP/client/targets/default.timeout` | TIMEOUT

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/SMTP/client/targets/default` | :confkey:`~/settings/SMTP/client/targets/default.alias` | ALIAS
    :confpath:`/settings/SMTP/client/targets/default` | :confkey:`~/settings/SMTP/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/SMTP/client/targets/default` | :confkey:`~/settings/SMTP/client/targets/default.is template` | IS TEMPLATE
    :confpath:`/settings/SMTP/client/targets/default` | :confkey:`~/settings/SMTP/client/targets/default.parent` | PARENT
    :confpath:`/settings/SMTP/client/targets/default` | :confkey:`~/settings/SMTP/client/targets/default.port` | TARGET PORT



Queries
=======
A quick reference for all avalible queries (check commands) in the SMTPClient module.

:query:`smtp_submit`
--------------------
.. query:: smtp_submit
    :synopsis: Submit information to remote host via SMTP.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`host` | N/A | The host of the host running the server
    :option:`port` | N/A | The port of the host running the server
    :option:`address` | N/A | The address (host:port) of the host running the server
    :option:`timeout` | N/A | Number of seconds before connection times out (default=10)
    :option:`target` | N/A | Target to use (lookup connection info from config)
    :option:`retry` | N/A | Number of times ti retry a failed connection attempt (default=2)
    :option:`command` | N/A | The name of the command that the remote daemon should run
    :option:`alias` | N/A | Same as command
    :option:`message` | N/A | Message
    :option:`result` | N/A | Result code either a number or OK, WARN, CRIT, UNKNOWN
    :option:`sender` | N/A | Length of payload (has to be same as on the server)
    :option:`recipient` | N/A | Length of payload (has to be same as on the server)
    :option:`template` | N/A | Do not initial an ssl handshake with the server, talk in plaintext.


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: host
    :synopsis: The host of the host running the server

    | The host of the host running the server

.. option:: port
    :synopsis: The port of the host running the server

    | The port of the host running the server

.. option:: address
    :synopsis: The address (host:port) of the host running the server

    | The address (host:port) of the host running the server

.. option:: timeout
    :synopsis: Number of seconds before connection times out (default=10)

    | Number of seconds before connection times out (default=10)

.. option:: target
    :synopsis: Target to use (lookup connection info from config)

    | Target to use (lookup connection info from config)

.. option:: retry
    :synopsis: Number of times ti retry a failed connection attempt (default=2)

    | Number of times ti retry a failed connection attempt (default=2)

.. option:: command
    :synopsis: The name of the command that the remote daemon should run

    | The name of the command that the remote daemon should run

.. option:: alias
    :synopsis: Same as command

    | Same as command

.. option:: message
    :synopsis: Message

    | Message

.. option:: result
    :synopsis: Result code either a number or OK, WARN, CRIT, UNKNOWN

    | Result code either a number or OK, WARN, CRIT, UNKNOWN

.. option:: sender
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: recipient
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: template
    :synopsis: Do not initial an ssl handshake with the server, talk in plaintext.

    | Do not initial an ssl handshake with the server, talk in plaintext.






… 
--
.. confpath:: /settings/SMTP/client
    :synopsis: SMTP CLIENT SECTION

    **SMTP CLIENT SECTION**

    | Section for SMTP passive check module.


.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`channel` | SMTP | CHANNEL


**Sample**::

    # SMTP CLIENT SECTION
    # Section for SMTP passive check module.
    [/settings/SMTP/client]
    channel=SMTP


.. confkey:: channel
    :synopsis: CHANNEL

    **CHANNEL**

    | The channel to listen to.

    **Path**: /settings/SMTP/client

    **Key**: channel

    **Default value**: SMTP

    **Used by**: :module:`SMTPClient`

    **Sample**::

        # CHANNEL
        # The channel to listen to.
        [/settings/SMTP/client]
        channel=SMTP




…  / handlers
-------------
.. confpath:: /settings/SMTP/client/handlers
    :synopsis: CLIENT HANDLER SECTION

    **CLIENT HANDLER SECTION**






**Sample**::

    # CLIENT HANDLER SECTION
    # 
    [/settings/SMTP/client/handlers]




…  / targets
------------
.. confpath:: /settings/SMTP/client/targets
    :synopsis: REMOTE TARGET DEFINITIONS

    **REMOTE TARGET DEFINITIONS**






**Sample**::

    # REMOTE TARGET DEFINITIONS
    # 
    [/settings/SMTP/client/targets]




…  / targets / default
----------------------
.. confpath:: /settings/SMTP/client/targets/default
    :synopsis: TARGET DEFENITION

    **TARGET DEFENITION**

    | Target definition for: default


.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`address` |  | TARGET ADDRESS
    :confkey:`alias` |  | ALIAS
    :confkey:`host` |  | TARGET HOST
    :confkey:`is template` | 0 | IS TEMPLATE
    :confkey:`parent` | default | PARENT
    :confkey:`port` | 0 | TARGET PORT
    :confkey:`recipient` | nscp@localhost | RECIPIENT
    :confkey:`sender` | nscp@localhost | SENDER
    :confkey:`template` | Hello, this is %source% reporting %message%! | TEMPLATE
    :confkey:`timeout` | 30 | TIMEOUT


**Sample**::

    # TARGET DEFENITION
    # Target definition for: default
    [/settings/SMTP/client/targets/default]
    address=
    alias=
    host=
    is template=0
    parent=default
    port=0
    recipient=nscp@localhost
    sender=nscp@localhost
    template=Hello, this is %source% reporting %message%!
    timeout=30


.. confkey:: address
    :synopsis: TARGET ADDRESS

    **TARGET ADDRESS**

    | Target host address

    **Path**: /settings/SMTP/client/targets/default

    **Key**: address

    **Default value**: 

    **Used by**: :module:`SMTPClient`

    **Sample**::

        # TARGET ADDRESS
        # Target host address
        [/settings/SMTP/client/targets/default]
        address=


.. confkey:: alias
    :synopsis: ALIAS

    **ALIAS**

    | The alias (service name) to report to server

    **Advanced** (means it is not commonly used)

    **Path**: /settings/SMTP/client/targets/default

    **Key**: alias

    **Default value**: 

    **Used by**: :module:`SMTPClient`

    **Sample**::

        # ALIAS
        # The alias (service name) to report to server
        [/settings/SMTP/client/targets/default]
        alias=


.. confkey:: host
    :synopsis: TARGET HOST

    **TARGET HOST**

    | The target server to report results to.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/SMTP/client/targets/default

    **Key**: host

    **Default value**: 

    **Used by**: :module:`SMTPClient`

    **Sample**::

        # TARGET HOST
        # The target server to report results to.
        [/settings/SMTP/client/targets/default]
        host=


.. confkey:: is template
    :synopsis: IS TEMPLATE

    **IS TEMPLATE**

    | Declare this object as a template (this means it will not be available as a separate object)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/SMTP/client/targets/default

    **Key**: is template

    **Default value**: 0

    **Used by**: :module:`SMTPClient`

    **Sample**::

        # IS TEMPLATE
        # Declare this object as a template (this means it will not be available as a separate object)
        [/settings/SMTP/client/targets/default]
        is template=0


.. confkey:: parent
    :synopsis: PARENT

    **PARENT**

    | The parent the target inherits from

    **Advanced** (means it is not commonly used)

    **Path**: /settings/SMTP/client/targets/default

    **Key**: parent

    **Default value**: default

    **Used by**: :module:`SMTPClient`

    **Sample**::

        # PARENT
        # The parent the target inherits from
        [/settings/SMTP/client/targets/default]
        parent=default


.. confkey:: port
    :synopsis: TARGET PORT

    **TARGET PORT**

    | The target server port

    **Advanced** (means it is not commonly used)

    **Path**: /settings/SMTP/client/targets/default

    **Key**: port

    **Default value**: 0

    **Used by**: :module:`SMTPClient`

    **Sample**::

        # TARGET PORT
        # The target server port
        [/settings/SMTP/client/targets/default]
        port=0


.. confkey:: recipient
    :synopsis: RECIPIENT

    **RECIPIENT**

    | Recipient of email message

    **Path**: /settings/SMTP/client/targets/default

    **Key**: recipient

    **Default value**: nscp@localhost

    **Used by**: :module:`SMTPClient`

    **Sample**::

        # RECIPIENT
        # Recipient of email message
        [/settings/SMTP/client/targets/default]
        recipient=nscp@localhost


.. confkey:: sender
    :synopsis: SENDER

    **SENDER**

    | Sender of email message

    **Path**: /settings/SMTP/client/targets/default

    **Key**: sender

    **Default value**: nscp@localhost

    **Used by**: :module:`SMTPClient`

    **Sample**::

        # SENDER
        # Sender of email message
        [/settings/SMTP/client/targets/default]
        sender=nscp@localhost


.. confkey:: template
    :synopsis: TEMPLATE

    **TEMPLATE**

    | Template for message data

    **Path**: /settings/SMTP/client/targets/default

    **Key**: template

    **Default value**: Hello, this is %source% reporting %message%!

    **Used by**: :module:`SMTPClient`

    **Sample**::

        # TEMPLATE
        # Template for message data
        [/settings/SMTP/client/targets/default]
        template=Hello, this is %source% reporting %message%!


.. confkey:: timeout
    :synopsis: TIMEOUT

    **TIMEOUT**

    | Timeout when reading/writing packets to/from sockets.

    **Path**: /settings/SMTP/client/targets/default

    **Key**: timeout

    **Default value**: 30

    **Used by**: :module:`SMTPClient`

    **Sample**::

        # TIMEOUT
        # Timeout when reading/writing packets to/from sockets.
        [/settings/SMTP/client/targets/default]
        timeout=30


