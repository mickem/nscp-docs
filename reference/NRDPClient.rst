.. default-domain:: nscp

.. module:: NRDPClient
    :synopsis: NRDP client can be used both from command line and from queries to check remote systes via NRDP

===================================
:module:`NRDPClient` --- NRDPClient
===================================
NRDP client can be used both from command line and from queries to check remote systes via NRDP

**Queries (Overview)**:

A list of all avalible queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`nrdp_submit` | Submit information to remote host via NRDP.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/NRDP/client` | :confkey:`~/settings/NRDP/client.channel` | CHANNEL
    :confpath:`/settings/NRDP/client` | :confkey:`~/settings/NRDP/client.hostname` | HOSTNAME
    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.address` | TARGET ADDRESS
    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.recipient` | RECIPIENT
    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.sender` | SENDER
    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.template` | TEMPLATE
    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.timeout` | TIMEOUT

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.alias` | ALIAS
    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.is template` | IS TEMPLATE
    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.parent` | PARENT
    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.port` | TARGET PORT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.alias` | ALIAS
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.is template` | IS TEMPLATE
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.parent` | PARENT
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.port` | TARGET PORT
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.recipient` | RECIPIENT
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.sender` | SENDER
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.template` | TEMPLATE
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.timeout` | TIMEOUT


Queries
=======
A quick reference for all avalible queries (check commands) in the NRDPClient module.

:query:`nrdp_submit`
--------------------
.. query:: nrdp_submit
    :synopsis: Submit information to remote host via NRDP.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`host` |  | The host of the host running the server
    :option:`port` |  | The port of the host running the server
    :option:`address` |  | The address (host:port) of the host running the server
    :option:`timeout` |  | Number of seconds before connection times out (default=10)
    :option:`target` |  | Target to use (lookup connection info from config)
    :option:`retry` |  | Number of times ti retry a failed connection attempt (default=2)
    :option:`command` |  | The name of the command that the remote daemon should run
    :option:`alias` |  | Same as command
    :option:`message` |  | Message
    :option:`result` |  | Result code either a number or OK, WARN, CRIT, UNKNOWN
    :option:`key` |  | The security token
    :option:`password` |  | The security token
    :option:`source-host` |  | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`sender-host` |  | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`token` |  | The security token


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

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

.. option:: key
    :synopsis: The security token

    | The security token

.. option:: password
    :synopsis: The security token

    | The security token

.. option:: source-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: sender-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: token
    :synopsis: The security token

    | The security token






… 
--
.. confpath:: /settings/NRDP/client
    :synopsis: SMTP CLIENT SECTION

    **SMTP CLIENT SECTION**

    | Section for SMTP passive check module.


.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`channel` | NRDP | CHANNEL
    :confkey:`hostname` | auto | HOSTNAME


**Sample**::

    # SMTP CLIENT SECTION
    # Section for SMTP passive check module.
    [/settings/NRDP/client]
    channel=NRDP
    hostname=auto


.. confkey:: channel
    :synopsis: CHANNEL

    **CHANNEL**

    | The channel to listen to.

    **Path**: /settings/NRDP/client

    **Key**: channel

    **Default value**: NRDP

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client]
        # CHANNEL
        channel=NRDP


.. confkey:: hostname
    :synopsis: HOSTNAME

    **HOSTNAME**

    | The host name of this host if set to blank (default) the windows name of the computer will be used.

    **Path**: /settings/NRDP/client

    **Key**: hostname

    **Default value**: auto

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client]
        # HOSTNAME
        hostname=auto




…  / handlers
-------------
.. confpath:: /settings/NRDP/client/handlers
    :synopsis: CLIENT HANDLER SECTION

    **CLIENT HANDLER SECTION**






**Sample**::

    # CLIENT HANDLER SECTION
    # 
    [/settings/NRDP/client/handlers]




…  / targets
------------
.. confpath:: /settings/NRDP/client/targets
    :synopsis: REMOTE TARGET DEFINITIONS

    **REMOTE TARGET DEFINITIONS**






**Sample**::

    # REMOTE TARGET DEFINITIONS
    # 
    [/settings/NRDP/client/targets]




…  / targets / default
----------------------
.. confpath:: /settings/NRDP/client/targets/default
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
    [/settings/NRDP/client/targets/default]
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

    **Path**: /settings/NRDP/client/targets/default

    **Key**: address

    **Default value**: 

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/default]
        # TARGET ADDRESS
        address=


.. confkey:: alias
    :synopsis: ALIAS

    **ALIAS**

    | The alias (service name) to report to server

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRDP/client/targets/default

    **Key**: alias

    **Default value**: 

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/default]
        # ALIAS
        alias=


.. confkey:: host
    :synopsis: TARGET HOST

    **TARGET HOST**

    | The target server to report results to.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRDP/client/targets/default

    **Key**: host

    **Default value**: 

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/default]
        # TARGET HOST
        host=


.. confkey:: is template
    :synopsis: IS TEMPLATE

    **IS TEMPLATE**

    | Declare this object as a template (this means it will not be available as a separate object)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRDP/client/targets/default

    **Key**: is template

    **Default value**: 0

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/default]
        # IS TEMPLATE
        is template=0


.. confkey:: parent
    :synopsis: PARENT

    **PARENT**

    | The parent the target inherits from

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRDP/client/targets/default

    **Key**: parent

    **Default value**: default

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/default]
        # PARENT
        parent=default


.. confkey:: port
    :synopsis: TARGET PORT

    **TARGET PORT**

    | The target server port

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRDP/client/targets/default

    **Key**: port

    **Default value**: 0

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/default]
        # TARGET PORT
        port=0


.. confkey:: recipient
    :synopsis: RECIPIENT

    **RECIPIENT**

    | Recipient of email message

    **Path**: /settings/NRDP/client/targets/default

    **Key**: recipient

    **Default value**: nscp@localhost

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/default]
        # RECIPIENT
        recipient=nscp@localhost


.. confkey:: sender
    :synopsis: SENDER

    **SENDER**

    | Sender of email message

    **Path**: /settings/NRDP/client/targets/default

    **Key**: sender

    **Default value**: nscp@localhost

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/default]
        # SENDER
        sender=nscp@localhost


.. confkey:: template
    :synopsis: TEMPLATE

    **TEMPLATE**

    | Template for message data

    **Path**: /settings/NRDP/client/targets/default

    **Key**: template

    **Default value**: Hello, this is %source% reporting %message%!

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/default]
        # TEMPLATE
        template=Hello, this is %source% reporting %message%!


.. confkey:: timeout
    :synopsis: TIMEOUT

    **TIMEOUT**

    | Timeout when reading/writing packets to/from sockets.

    **Path**: /settings/NRDP/client/targets/default

    **Key**: timeout

    **Default value**: 30

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/default]
        # TIMEOUT
        timeout=30




…  / targets / sample
---------------------
.. confpath:: /settings/NRDP/client/targets/sample
    :synopsis: TARGET DEFENITION

    **TARGET DEFENITION**

    | Target definition for: sample


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
    # Target definition for: sample
    [/settings/NRDP/client/targets/sample]
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

    **Path**: /settings/NRDP/client/targets/sample

    **Key**: address

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/sample]
        # TARGET ADDRESS
        address=


.. confkey:: alias
    :synopsis: ALIAS

    **ALIAS**

    | The alias (service name) to report to server

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRDP/client/targets/sample

    **Key**: alias

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/sample]
        # ALIAS
        alias=


.. confkey:: host
    :synopsis: TARGET HOST

    **TARGET HOST**

    | The target server to report results to.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRDP/client/targets/sample

    **Key**: host

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/sample]
        # TARGET HOST
        host=


.. confkey:: is template
    :synopsis: IS TEMPLATE

    **IS TEMPLATE**

    | Declare this object as a template (this means it will not be available as a separate object)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRDP/client/targets/sample

    **Key**: is template

    **Default value**: 0

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/sample]
        # IS TEMPLATE
        is template=0


.. confkey:: parent
    :synopsis: PARENT

    **PARENT**

    | The parent the target inherits from

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRDP/client/targets/sample

    **Key**: parent

    **Default value**: default

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/sample]
        # PARENT
        parent=default


.. confkey:: port
    :synopsis: TARGET PORT

    **TARGET PORT**

    | The target server port

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRDP/client/targets/sample

    **Key**: port

    **Default value**: 0

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/sample]
        # TARGET PORT
        port=0


.. confkey:: recipient
    :synopsis: RECIPIENT

    **RECIPIENT**

    | Recipient of email message

    **Path**: /settings/NRDP/client/targets/sample

    **Key**: recipient

    **Default value**: nscp@localhost

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/sample]
        # RECIPIENT
        recipient=nscp@localhost


.. confkey:: sender
    :synopsis: SENDER

    **SENDER**

    | Sender of email message

    **Path**: /settings/NRDP/client/targets/sample

    **Key**: sender

    **Default value**: nscp@localhost

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/sample]
        # SENDER
        sender=nscp@localhost


.. confkey:: template
    :synopsis: TEMPLATE

    **TEMPLATE**

    | Template for message data

    **Path**: /settings/NRDP/client/targets/sample

    **Key**: template

    **Default value**: Hello, this is %source% reporting %message%!

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/sample]
        # TEMPLATE
        template=Hello, this is %source% reporting %message%!


.. confkey:: timeout
    :synopsis: TIMEOUT

    **TIMEOUT**

    | Timeout when reading/writing packets to/from sockets.

    **Path**: /settings/NRDP/client/targets/sample

    **Key**: timeout

    **Default value**: 30

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`NRDPClient`

    **Sample**::

        [/settings/NRDP/client/targets/sample]
        # TIMEOUT
        timeout=30


