.. default-domain:: nscp

.. module:: GraphiteClient
    :synopsis: Graphite client can be used to submit graph data to a graphite graphing system

===========================================
:module:`GraphiteClient` --- GraphiteClient
===========================================
Graphite client can be used to submit graph data to a graphite graphing system

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`submit_graphite` | Submit information to the remote Graphite server.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/graphite/client` | :confkey:`~/settings/graphite/client.channel` | CHANNEL
    :confpath:`/settings/graphite/client` | :confkey:`~/settings/graphite/client.hostname` | HOSTNAME
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.address` | TARGET ADDRESS
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.path` | PATH FOR METRICS
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.retries` | RETRIES
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.send perfdata` | SEND PERF DATA
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.send status` | SEND STATUS
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.status path` | PATH FOR STATUS
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.timeout` | TIMEOUT

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.port` | TARGET PORT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.path` | PATH FOR METRICS
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.port` | TARGET PORT
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.retries` | RETRIES
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.send perfdata` | SEND PERF DATA
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.send status` | SEND STATUS
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.status path` | PATH FOR STATUS
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.timeout` | TIMEOUT



Queries
=======
A quick reference for all available queries (check commands) in the GraphiteClient module.

:query:`submit_graphite`
------------------------
.. query:: submit_graphite
    :synopsis: Submit information to the remote Graphite server.

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







/ settings/ graphite/ client
----------------------------

.. confpath:: /settings/graphite/client
    :synopsis: GRAPHITE CLIENT SECTION

**GRAPHITE CLIENT SECTION**

    | Section for graphite passive check module.


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`channel` | GRAPHITE | CHANNEL
        :confkey:`hostname` | auto | HOSTNAME

    **Sample**::

        # GRAPHITE CLIENT SECTION
        # Section for graphite passive check module.
        [/settings/graphite/client]
        channel=GRAPHITE
        hostname=auto


    .. confkey:: channel
        :synopsis: CHANNEL

        **CHANNEL**

        | The channel to listen to.

        **Path**: /settings/graphite/client

        **Key**: channel

        **Default value**: GRAPHITE

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client]
            # CHANNEL
            channel=GRAPHITE


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

        **Path**: /settings/graphite/client

        **Key**: hostname

        **Default value**: auto

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client]
            # HOSTNAME
            hostname=auto




…  / handlers
-------------

.. confpath:: /settings/graphite/client/handlers
    :synopsis: CLIENT HANDLER SECTION

**CLIENT HANDLER SECTION**






    **Sample**::

        # CLIENT HANDLER SECTION
        # 
        [/settings/graphite/client/handlers]




…  / targets
------------

.. confpath:: /settings/graphite/client/targets
    :synopsis: REMOTE TARGET DEFINITIONS

**REMOTE TARGET DEFINITIONS**






    **Sample**::

        # REMOTE TARGET DEFINITIONS
        # 
        [/settings/graphite/client/targets]




…  / targets / default
----------------------

.. confpath:: /settings/graphite/client/targets/default
    :synopsis: TARGET

**TARGET**

    | Target definition for: default


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`address` |  | TARGET ADDRESS
        :confkey:`host` |  | TARGET HOST
        :confkey:`path` | system.${hostname}.${check_alias}.${perf_alias} | PATH FOR METRICS
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`send perfdata` | 1 | SEND PERF DATA
        :confkey:`send status` | 1 | SEND STATUS
        :confkey:`status path` | system.${hostname}.${check_alias}.status | PATH FOR STATUS
        :confkey:`timeout` | 30 | TIMEOUT

    **Sample**::

        # TARGET
        # Target definition for: default
        [/settings/graphite/client/targets/default]
        address=
        host=
        path=system.${hostname}.${check_alias}.${perf_alias}
        port=
        retries=3
        send perfdata=1
        send status=1
        status path=system.${hostname}.${check_alias}.status
        timeout=30


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/graphite/client/targets/default

        **Key**: address

        **Default value**: 

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/default]
            # TARGET ADDRESS
            address=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/graphite/client/targets/default

        **Key**: host

        **Default value**: 

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/default]
            # TARGET HOST
            host=


    .. confkey:: path
        :synopsis: PATH FOR METRICS

        **PATH FOR METRICS**

        | Path mapping for metrics

        **Path**: /settings/graphite/client/targets/default

        **Key**: path

        **Default value**: system.${hostname}.${check_alias}.${perf_alias}

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/default]
            # PATH FOR METRICS
            path=system.${hostname}.${check_alias}.${perf_alias}


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/graphite/client/targets/default

        **Key**: port

        **Default value**: 

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/default]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/graphite/client/targets/default

        **Key**: retries

        **Default value**: 3

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/default]
            # RETRIES
            retries=3


    .. confkey:: send perfdata
        :synopsis: SEND PERF DATA

        **SEND PERF DATA**

        | Send performance data to this server

        **Path**: /settings/graphite/client/targets/default

        **Key**: send perfdata

        **Default value**: 1

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/default]
            # SEND PERF DATA
            send perfdata=1


    .. confkey:: send status
        :synopsis: SEND STATUS

        **SEND STATUS**

        | Send status data to this server

        **Path**: /settings/graphite/client/targets/default

        **Key**: send status

        **Default value**: 1

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/default]
            # SEND STATUS
            send status=1


    .. confkey:: status path
        :synopsis: PATH FOR STATUS

        **PATH FOR STATUS**

        | Path mapping for status

        **Path**: /settings/graphite/client/targets/default

        **Key**: status path

        **Default value**: system.${hostname}.${check_alias}.status

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/default]
            # PATH FOR STATUS
            status path=system.${hostname}.${check_alias}.status


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/graphite/client/targets/default

        **Key**: timeout

        **Default value**: 30

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/default]
            # TIMEOUT
            timeout=30




…  / targets / sample
---------------------

.. confpath:: /settings/graphite/client/targets/sample
    :synopsis: TARGET

**TARGET**

    | Target definition for: sample


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`address` |  | TARGET ADDRESS
        :confkey:`host` |  | TARGET HOST
        :confkey:`path` |  | PATH FOR METRICS
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`send perfdata` | 0 | SEND PERF DATA
        :confkey:`send status` | 0 | SEND STATUS
        :confkey:`status path` |  | PATH FOR STATUS
        :confkey:`timeout` | 30 | TIMEOUT

    **Sample**::

        # TARGET
        # Target definition for: sample
        [/settings/graphite/client/targets/sample]
        address=
        host=
        path=
        port=
        retries=3
        send perfdata=0
        send status=0
        status path=
        timeout=30


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /settings/graphite/client/targets/sample

        **Key**: address

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/sample]
            # TARGET ADDRESS
            address=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/graphite/client/targets/sample

        **Key**: host

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/sample]
            # TARGET HOST
            host=


    .. confkey:: path
        :synopsis: PATH FOR METRICS

        **PATH FOR METRICS**

        | Path mapping for metrics

        **Path**: /settings/graphite/client/targets/sample

        **Key**: path

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/sample]
            # PATH FOR METRICS
            path=


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /settings/graphite/client/targets/sample

        **Key**: port

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/sample]
            # TARGET PORT
            port=


    .. confkey:: retries
        :synopsis: RETRIES

        **RETRIES**

        | Number of times to retry sending.

        **Path**: /settings/graphite/client/targets/sample

        **Key**: retries

        **Default value**: 3

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/sample]
            # RETRIES
            retries=3


    .. confkey:: send perfdata
        :synopsis: SEND PERF DATA

        **SEND PERF DATA**

        | Send performance data to this server

        **Path**: /settings/graphite/client/targets/sample

        **Key**: send perfdata

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/sample]
            # SEND PERF DATA
            send perfdata=0


    .. confkey:: send status
        :synopsis: SEND STATUS

        **SEND STATUS**

        | Send status data to this server

        **Path**: /settings/graphite/client/targets/sample

        **Key**: send status

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/sample]
            # SEND STATUS
            send status=0


    .. confkey:: status path
        :synopsis: PATH FOR STATUS

        **PATH FOR STATUS**

        | Path mapping for status

        **Path**: /settings/graphite/client/targets/sample

        **Key**: status path

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/sample]
            # PATH FOR STATUS
            status path=


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /settings/graphite/client/targets/sample

        **Key**: timeout

        **Default value**: 30

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`GraphiteClient`

        **Sample**::

            [/settings/graphite/client/targets/sample]
            # TIMEOUT
            timeout=30


