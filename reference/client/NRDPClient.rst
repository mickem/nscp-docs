.. default-domain:: nscp

.. module:: NRDPClient
    :synopsis: NRDP client can be used both from command line and from queries to check remote systes via NRDP

===================================
:module:`NRDPClient` --- NRDPClient
===================================
NRDP client can be used both from command line and from queries to check remote systes via NRDP

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`submit_nrdp` | Submit information to the remote NRDP Server.




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
    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.retries` | RETRIES
    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.timeout` | TIMEOUT

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/NRDP/client/targets/default` | :confkey:`~/settings/NRDP/client/targets/default.port` | TARGET PORT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.port` | TARGET PORT
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.retries` | RETRIES
    :confpath:`/settings/NRDP/client/targets/sample` | :confkey:`~/settings/NRDP/client/targets/sample.timeout` | TIMEOUT



Queries
=======
A quick reference for all available queries (check commands) in the NRDPClient module.

:query:`submit_nrdp`
--------------------
.. query:: submit_nrdp
    :synopsis: Submit information to the remote NRDP Server.

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
    :option:`alias` |  | Same as command
    :option:`message` |  | Message
    :option:`result` |  | Result code either a number or OK, WARN, CRIT, UNKNOWN
    :option:`separator` |  | Separator to use for the batch command (default is |)
    :option:`batch` |  | Add multiple records using the separator format is: command|result|message
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

.. option:: alias
    :synopsis: Same as command

    | Same as command

.. option:: message
    :synopsis: Message

    | Message

.. option:: result
    :synopsis: Result code either a number or OK, WARN, CRIT, UNKNOWN

    | Result code either a number or OK, WARN, CRIT, UNKNOWN

.. option:: separator
    :synopsis: Separator to use for the batch command (default is |)

    | Separator to use for the batch command (default is |)

.. option:: batch
    :synopsis: Add multiple records using the separator format is: command|result|message

    | Add multiple records using the separator format is: command|result|message

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





/ settings/ NRDP/ client
------------------------

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

        | The host name of the monitored computer.
        | Set this to auto (default) to use the windows name of the computer.
        | 
        | auto	Hostname
        | ${host}	Hostname
        | ${host_lc}
        | Hostname in lowercase
        | ${host_uc}	Hostname in uppercase
        | ${domain}	Domainname
        | ${domain_lc}	Domainname in lowercase
        | ${domain_uc}	Domainname in uppercase

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
        [/settings/NRDP/client/targets/default]
        address=
        host=
        port=
        retries=3
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


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRDP/client/targets/default

        **Key**: port

        **Default value**: 

        **Used by**: :module:`NRDPClient`

        **Sample**::

            [/settings/NRDP/client/targets/default]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/NRDP/client/targets/default

        **Key**: retries

        **Default value**: 3

        **Used by**: :module:`NRDPClient`

        **Sample**::

            [/settings/NRDP/client/targets/default]
            # RETRIES
            retries=3


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
        [/settings/NRDP/client/targets/sample]
        address=
        host=
        port=
        retries=3
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


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/NRDP/client/targets/sample

        **Key**: port

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRDPClient`

        **Sample**::

            [/settings/NRDP/client/targets/sample]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/NRDP/client/targets/sample

        **Key**: retries

        **Default value**: 3

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`NRDPClient`

        **Sample**::

            [/settings/NRDP/client/targets/sample]
            # RETRIES
            retries=3


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


