.. default-domain:: nscp

.. module:: SyslogClient
    :synopsis: Forward information as syslog messages to a syslog server

=======================================
:module:`SyslogClient` --- SyslogClient
=======================================
Forward information as syslog messages to a syslog server

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`submit_syslog` | Submit information to the remote syslog server.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/default` | :confkey:`~/default.address` | TARGET ADDRESS
    :confpath:`/default` | :confkey:`~/default.retries` | RETRIES
    :confpath:`/default` | :confkey:`~/default.timeout` | TIMEOUT
    :confpath:`/settings/syslog/client` | :confkey:`~/settings/syslog/client.channel` | CHANNEL
    :confpath:`/settings/syslog/client` | :confkey:`~/settings/syslog/client.hostname` | HOSTNAME

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/default` | :confkey:`~/default.host` | TARGET HOST
    :confpath:`/default` | :confkey:`~/default.port` | TARGET PORT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/sample/sample` | :confkey:`~/sample/sample.address` | TARGET ADDRESS
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.host` | TARGET HOST
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.port` | TARGET PORT
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.retries` | RETRIES
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.timeout` | TIMEOUT


Queries
=======
A quick reference for all available queries (check commands) in the SyslogClient module.

:query:`submit_syslog`
----------------------
.. query:: submit_syslog
    :synopsis: Submit information to the remote syslog server.

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
    :option:`path` |  | 
    :option:`severity` |  | Severity of error message
    :option:`unknown-severity` |  | Severity of error message
    :option:`ok-severity` |  | Severity of error message
    :option:`warning-severity` |  | Severity of error message
    :option:`critical-severity` |  | Severity of error message
    :option:`facility` |  | Facility of error message
    :option:`tag template` |  | Tag template (TODO)
    :option:`message template` |  | Message template (TODO)




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

.. option:: path
    :synopsis: 



.. option:: severity
    :synopsis: Severity of error message

    | Severity of error message

.. option:: unknown-severity
    :synopsis: Severity of error message

    | Severity of error message

.. option:: ok-severity
    :synopsis: Severity of error message

    | Severity of error message

.. option:: warning-severity
    :synopsis: Severity of error message

    | Severity of error message

.. option:: critical-severity
    :synopsis: Severity of error message

    | Severity of error message

.. option:: facility
    :synopsis: Facility of error message

    | Facility of error message

.. option:: tag template
    :synopsis: Tag template (TODO)

    | Tag template (TODO)

.. option:: message template
    :synopsis: Message template (TODO)

    | Message template (TODO)





… default
---------

.. confpath:: /default
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
        [/default]
        address=
        host=
        port=
        retries=3
        timeout=30


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /default

        **Key**: address

        **Default value**: 

        **Used by**: :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/default]
            # TARGET ADDRESS
            address=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /default

        **Key**: host

        **Default value**: 

        **Used by**: :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/default]
            # TARGET HOST
            host=


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /default

        **Key**: port

        **Default value**: 

        **Used by**: :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/default]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /default

        **Key**: retries

        **Default value**: 3

        **Used by**: :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/default]
            # RETRIES
            retries=3


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /default

        **Key**: timeout

        **Default value**: 30

        **Used by**: :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/default]
            # TIMEOUT
            timeout=30




… sample / sample
-----------------

.. confpath:: /sample/sample
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
        [/sample/sample]
        address=
        host=
        port=
        retries=3
        timeout=30


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /sample/sample

        **Key**: address

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # TARGET ADDRESS
            address=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: host

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # TARGET HOST
            host=


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: port

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /sample/sample

        **Key**: retries

        **Default value**: 3

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # RETRIES
            retries=3


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /sample/sample

        **Key**: timeout

        **Default value**: 30

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # TIMEOUT
            timeout=30




… settings / syslog / client
----------------------------

.. confpath:: /settings/syslog/client
    :synopsis: SYSLOG CLIENT SECTION

**SYSLOG CLIENT SECTION**

    | Section for SYSLOG passive check module.


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`channel` | syslog | CHANNEL
        :confkey:`hostname` | auto | HOSTNAME

    **Sample**::

        # SYSLOG CLIENT SECTION
        # Section for SYSLOG passive check module.
        [/settings/syslog/client]
        channel=syslog
        hostname=auto


    .. confkey:: channel
        :synopsis: CHANNEL

        **CHANNEL**

        | The channel to listen to.

        **Path**: /settings/syslog/client

        **Key**: channel

        **Default value**: syslog

        **Used by**: :module:`SyslogClient`

        **Sample**::

            [/settings/syslog/client]
            # CHANNEL
            channel=syslog


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

        **Path**: /settings/syslog/client

        **Key**: hostname

        **Default value**: auto

        **Used by**: :module:`SyslogClient`

        **Sample**::

            [/settings/syslog/client]
            # HOSTNAME
            hostname=auto




… settings / syslog / client / handlers
---------------------------------------

.. confpath:: /settings/syslog/client/handlers
    :synopsis: CLIENT HANDLER SECTION

**CLIENT HANDLER SECTION**






    **Sample**::

        # CLIENT HANDLER SECTION
        # 
        [/settings/syslog/client/handlers]




… settings / syslog / client / targets
--------------------------------------

.. confpath:: /settings/syslog/client/targets
    :synopsis: REMOTE TARGET DEFINITIONS

**REMOTE TARGET DEFINITIONS**






    **Sample**::

        # REMOTE TARGET DEFINITIONS
        # 
        [/settings/syslog/client/targets]


