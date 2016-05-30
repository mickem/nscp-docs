.. default-domain:: nscp

.. module:: CheckMKClient
    :synopsis: check_mk client can be used both from command line and from queries to check remote systes via check_mk

=========================================
:module:`CheckMKClient` --- CheckMKClient
=========================================
check_mk client can be used both from command line and from queries to check remote systes via check_mk

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_mk_query` | Request remote information via check_mk.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/check_mk/client` | :confkey:`~/settings/check_mk/client.channel` | CHANNEL
    :confpath:`/settings/check_mk/client/targets/default` | :confkey:`~/settings/check_mk/client/targets/default.address` | TARGET ADDRESS
    :confpath:`/settings/check_mk/client/targets/default` | :confkey:`~/settings/check_mk/client/targets/default.retries` | RETRIES
    :confpath:`/settings/check_mk/client/targets/default` | :confkey:`~/settings/check_mk/client/targets/default.timeout` | TIMEOUT

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/check_mk/client/targets/default` | :confkey:`~/settings/check_mk/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/check_mk/client/targets/default` | :confkey:`~/settings/check_mk/client/targets/default.port` | TARGET PORT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/check_mk/client/targets/sample` | :confkey:`~/settings/check_mk/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/check_mk/client/targets/sample` | :confkey:`~/settings/check_mk/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/check_mk/client/targets/sample` | :confkey:`~/settings/check_mk/client/targets/sample.port` | TARGET PORT
    :confpath:`/settings/check_mk/client/targets/sample` | :confkey:`~/settings/check_mk/client/targets/sample.retries` | RETRIES
    :confpath:`/settings/check_mk/client/targets/sample` | :confkey:`~/settings/check_mk/client/targets/sample.timeout` | TIMEOUT



Queries
=======
A quick reference for all available queries (check commands) in the CheckMKClient module.

:query:`check_mk_query`
-----------------------
.. query:: check_mk_query
    :synopsis: Request remote information via check_mk.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`host` |  | The host of the host running the server
    :option:`port` |  | The port of the host running the server
    :option:`address` |  | The address (host:port) of the host running the server
    :option:`timeout` |  | Number of seconds before connection times out (default=10)
    :option:`target` |  | Target to use (lookup connection info from config)
    :option:`retry` |  | Number of times ti retry a failed connection attempt (default=2)
    :option:`retries` |  | legacy version of retry
    :option:`source-host` |  | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`sender-host` |  | Source/sender host name (default is auto which means use the name of the actual host)
    :option:`command` |  | The name of the command that the remote daemon should run
    :option:`argument` |  | Set command line arguments
    :option:`separator` |  | Separator to use for the batch command (default is |)
    :option:`batch` |  | Add multiple records using the separator format is: command|argument|argument
    :option:`certificate` |  | Length of payload (has to be same as on the server)
    :option:`dh` |  | Length of payload (has to be same as on the server)
    :option:`certificate-key` |  | Client certificate to use
    :option:`certificate-format` |  | Client certificate format
    :option:`ca` |  | Certificate authority
    :option:`verify` |  | Client certificate format
    :option:`allowed-ciphers` |  | Client certificate format
    :option:`ssl` | 1 | Initial an ssl handshake with the server.




Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

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

.. option:: retries
    :synopsis: legacy version of retry

    | legacy version of retry

.. option:: source-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: sender-host
    :synopsis: Source/sender host name (default is auto which means use the name of the actual host)

    | Source/sender host name (default is auto which means use the name of the actual host)

.. option:: command
    :synopsis: The name of the command that the remote daemon should run

    | The name of the command that the remote daemon should run

.. option:: argument
    :synopsis: Set command line arguments

    | Set command line arguments

.. option:: separator
    :synopsis: Separator to use for the batch command (default is |)

    | Separator to use for the batch command (default is |)

.. option:: batch
    :synopsis: Add multiple records using the separator format is: command|argument|argument

    | Add multiple records using the separator format is: command|argument|argument

.. option:: certificate
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: dh
    :synopsis: Length of payload (has to be same as on the server)

    | Length of payload (has to be same as on the server)

.. option:: certificate-key
    :synopsis: Client certificate to use

    | Client certificate to use

.. option:: certificate-format
    :synopsis: Client certificate format

    | Client certificate format

.. option:: ca
    :synopsis: Certificate authority

    | Certificate authority

.. option:: verify
    :synopsis: Client certificate format

    | Client certificate format

.. option:: allowed-ciphers
    :synopsis: Client certificate format

    | Client certificate format

.. option:: ssl
    :synopsis: Initial an ssl handshake with the server.

    | Initial an ssl handshake with the server.





/ settings/ check_mk/ client
----------------------------

.. confpath:: /settings/check_mk/client
    :synopsis: CHECK MK CLIENT SECTION

**CHECK MK CLIENT SECTION**

    | Section for check_mk active/passive check module.


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`channel` | CheckMK | CHANNEL

    **Sample**::

        # CHECK MK CLIENT SECTION
        # Section for check_mk active/passive check module.
        [/settings/check_mk/client]
        channel=CheckMK


    .. confkey:: channel
        :synopsis: CHANNEL

        **CHANNEL**

        | The channel to listen to.

        **Path**: /settings/check_mk/client

        **Key**: channel

        **Default value**: CheckMK

        **Used by**: :module:`CheckMKClient`

        **Sample**::

            [/settings/check_mk/client]
            # CHANNEL
            channel=CheckMK




…  / handlers
-------------

.. confpath:: /settings/check_mk/client/handlers
    :synopsis: CLIENT HANDLER SECTION

**CLIENT HANDLER SECTION**






    **Sample**::

        # CLIENT HANDLER SECTION
        # 
        [/settings/check_mk/client/handlers]




…  / scripts
------------

.. confpath:: /settings/check_mk/client/scripts
    :synopsis: REMOTE TARGET DEFINITIONS

**REMOTE TARGET DEFINITIONS**






    **Sample**::

        # REMOTE TARGET DEFINITIONS
        # 
        [/settings/check_mk/client/scripts]




…  / targets
------------

.. confpath:: /settings/check_mk/client/targets
    :synopsis: REMOTE TARGET DEFINITIONS

**REMOTE TARGET DEFINITIONS**






    **Sample**::

        # REMOTE TARGET DEFINITIONS
        # 
        [/settings/check_mk/client/targets]




…  / targets / default
----------------------

.. confpath:: /settings/check_mk/client/targets/default
    :synopsis: TARGET

**TARGET**

    | Target definition for: default


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`address` |  | TARGET ADDRESS
        :confkey:`host` |  | TARGET HOST
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`timeout` | 30 | TIMEOUT

    **Sample**::

        # TARGET
        # Target definition for: default
        [/settings/check_mk/client/targets/default]
        address=
        host=
        port=
        retries=3
        timeout=30


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/check_mk/client/targets/default

        **Key**: address

        **Default value**: 

        **Used by**: :module:`CheckMKClient`

        **Sample**::

            [/settings/check_mk/client/targets/default]
            # TARGET ADDRESS
            address=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/check_mk/client/targets/default

        **Key**: host

        **Default value**: 

        **Used by**: :module:`CheckMKClient`

        **Sample**::

            [/settings/check_mk/client/targets/default]
            # TARGET HOST
            host=


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/check_mk/client/targets/default

        **Key**: port

        **Default value**: 

        **Used by**: :module:`CheckMKClient`

        **Sample**::

            [/settings/check_mk/client/targets/default]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/check_mk/client/targets/default

        **Key**: retries

        **Default value**: 3

        **Used by**: :module:`CheckMKClient`

        **Sample**::

            [/settings/check_mk/client/targets/default]
            # RETRIES
            retries=3


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/check_mk/client/targets/default

        **Key**: timeout

        **Default value**: 30

        **Used by**: :module:`CheckMKClient`

        **Sample**::

            [/settings/check_mk/client/targets/default]
            # TIMEOUT
            timeout=30




…  / targets / sample
---------------------

.. confpath:: /settings/check_mk/client/targets/sample
    :synopsis: TARGET

**TARGET**

    | Target definition for: sample


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`address` |  | TARGET ADDRESS
        :confkey:`host` |  | TARGET HOST
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`timeout` | 30 | TIMEOUT

    **Sample**::

        # TARGET
        # Target definition for: sample
        [/settings/check_mk/client/targets/sample]
        address=
        host=
        port=
        retries=3
        timeout=30


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/check_mk/client/targets/sample

        **Key**: address

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckMKClient`

        **Sample**::

            [/settings/check_mk/client/targets/sample]
            # TARGET ADDRESS
            address=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/check_mk/client/targets/sample

        **Key**: host

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckMKClient`

        **Sample**::

            [/settings/check_mk/client/targets/sample]
            # TARGET HOST
            host=


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/check_mk/client/targets/sample

        **Key**: port

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckMKClient`

        **Sample**::

            [/settings/check_mk/client/targets/sample]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/check_mk/client/targets/sample

        **Key**: retries

        **Default value**: 3

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckMKClient`

        **Sample**::

            [/settings/check_mk/client/targets/sample]
            # RETRIES
            retries=3


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/check_mk/client/targets/sample

        **Key**: timeout

        **Default value**: 30

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckMKClient`

        **Sample**::

            [/settings/check_mk/client/targets/sample]
            # TIMEOUT
            timeout=30


