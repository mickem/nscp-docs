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

    :confpath:`/default` | :confkey:`~/default.address` | TARGET ADDRESS
    :confpath:`/default` | :confkey:`~/default.default` | 
    :confpath:`/default` | :confkey:`~/default.retries` | RETRIES
    :confpath:`/default` | :confkey:`~/default.timeout` | TIMEOUT
    :confpath:`/settings/NRDP/client` | :confkey:`~/settings/NRDP/client.channel` | CHANNEL
    :confpath:`/settings/NRDP/client` | :confkey:`~/settings/NRDP/client.hostname` | HOSTNAME

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
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.command` | COMMAND NAME
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.critical` | CRITICAL FILTER
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.debug` | DEBUG
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.destination` | DESTINATION
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.detail syntax` | SYNTAX
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.empty message` | EMPTY MESSAGE
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.filter` | FILTER
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.host` | TARGET HOST
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.log` | FILE
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.logs` | FILES
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.maximum age` | MAGIMUM AGE
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.ok` | OK FILTER
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.ok syntax` | SYNTAX
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.perf config` | PERF CONFIG
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.port` | TARGET PORT
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.retries` | RETRIES
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.severity` | SEVERITY
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.source id` | SOURCE ID
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.target` | DESTINATION
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.target id` | TARGET ID
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.timeout` | TIMEOUT
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.top syntax` | SYNTAX
    :confpath:`/sample/sample` | :confkey:`~/sample/sample.warning` | WARNING FILTER


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
        :confkey:`default` |  | 
        :confkey:`host` |  | TARGET HOST
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`timeout` | 30 | TIMEOUT

    **Sample**::

        # TARGET
        # Target definition for: default
        [/default]
        address=
        default=
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

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/default]
            # TARGET ADDRESS
            address=


    .. confkey:: default
        :synopsis: 

        ****

        | Filter for . To configure this item add a section called: /default

        **Path**: /default

        **Key**: default

        **Default value**: 

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/default]
            # 
            default=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /default

        **Key**: host

        **Default value**: 

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

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

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

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

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

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

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

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
        :confkey:`command` |  | COMMAND NAME
        :confkey:`critical` |  | CRITICAL FILTER
        :confkey:`debug` | 0 | DEBUG
        :confkey:`destination` |  | DESTINATION
        :confkey:`detail syntax` |  | SYNTAX
        :confkey:`empty message` | eventlog found no records | EMPTY MESSAGE
        :confkey:`filter` |  | FILTER
        :confkey:`host` |  | TARGET HOST
        :confkey:`log` |  | FILE
        :confkey:`logs` |  | FILES
        :confkey:`maximum age` | 5m | MAGIMUM AGE
        :confkey:`ok` |  | OK FILTER
        :confkey:`ok syntax` |  | SYNTAX
        :confkey:`perf config` |  | PERF CONFIG
        :confkey:`port` |  | TARGET PORT
        :confkey:`retries` | 3 | RETRIES
        :confkey:`severity` |  | SEVERITY
        :confkey:`source id` |  | SOURCE ID
        :confkey:`target` |  | DESTINATION
        :confkey:`target id` |  | TARGET ID
        :confkey:`timeout` | 30 | TIMEOUT
        :confkey:`top syntax` |  | SYNTAX
        :confkey:`warning` |  | WARNING FILTER

    **Sample**::

        # TARGET
        # Target definition for: sample
        [/sample/sample]
        address=
        command=
        critical=
        debug=0
        destination=
        detail syntax=
        empty message=eventlog found no records
        filter=
        host=
        log=
        logs=
        maximum age=5m
        ok=
        ok syntax=
        perf config=
        port=
        retries=3
        severity=
        source id=
        target=
        target id=
        timeout=30
        top syntax=
        warning=


    .. confkey:: address
        :synopsis: TARGET ADDRESS

        **TARGET ADDRESS**

        | Target host address

        **Path**: /sample/sample

        **Key**: address

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # TARGET ADDRESS
            address=


    .. confkey:: command
        :synopsis: COMMAND NAME

        **COMMAND NAME**

        | The name of the command (think nagios service name) to report up stream (defaults to alias if not set)

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: command

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # COMMAND NAME
            command=


    .. confkey:: critical
        :synopsis: CRITICAL FILTER

        **CRITICAL FILTER**

        | If any rows match this filter severity will escalated to CRITICAL

        **Path**: /sample/sample

        **Key**: critical

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # CRITICAL FILTER
            critical=


    .. confkey:: debug
        :synopsis: DEBUG

        **DEBUG**

        | Enable this to display debug information for this match filter

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: debug

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # DEBUG
            debug=0


    .. confkey:: destination
        :synopsis: DESTINATION

        **DESTINATION**

        | The destination for intercepted messages

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: destination

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # DESTINATION
            destination=


    .. confkey:: detail syntax
        :synopsis: SYNTAX

        **SYNTAX**

        | Format string for dates

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: detail syntax

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # SYNTAX
            detail syntax=


    .. confkey:: empty message
        :synopsis: EMPTY MESSAGE

        **EMPTY MESSAGE**

        | The message to display if nothing matches the filter (generally considered the ok state).

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: empty message

        **Default value**: eventlog found no records

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # EMPTY MESSAGE
            empty message=eventlog found no records


    .. confkey:: filter
        :synopsis: FILTER

        **FILTER**

        | Scan files for matching rows for each matching rows an OK message will be submitted

        **Path**: /sample/sample

        **Key**: filter

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # FILTER
            filter=


    .. confkey:: host
        :synopsis: TARGET HOST

        **TARGET HOST**

        | The target server to report results to.

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: host

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # TARGET HOST
            host=


    .. confkey:: log
        :synopsis: FILE

        **FILE**

        | The eventlog record to filter on (if set to 'all' means all enabled logs)

        **Path**: /sample/sample

        **Key**: log

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # FILE
            log=


    .. confkey:: logs
        :synopsis: FILES

        **FILES**

        | The eventlog record to filter on (if set to 'all' means all enabled logs)

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: logs

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # FILES
            logs=


    .. confkey:: maximum age
        :synopsis: MAGIMUM AGE

        **MAGIMUM AGE**

        | How long before reporting "ok".
        | If this is set to "false" no periodic ok messages will be reported only errors.

        **Path**: /sample/sample

        **Key**: maximum age

        **Default value**: 5m

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # MAGIMUM AGE
            maximum age=5m


    .. confkey:: ok
        :synopsis: OK FILTER

        **OK FILTER**

        | If any rows match this filter severity will escalated down to OK

        **Path**: /sample/sample

        **Key**: ok

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # OK FILTER
            ok=


    .. confkey:: ok syntax
        :synopsis: SYNTAX

        **SYNTAX**

        | Format string for dates

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: ok syntax

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # SYNTAX
            ok syntax=


    .. confkey:: perf config
        :synopsis: PERF CONFIG

        **PERF CONFIG**

        | Performance data configuration

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: perf config

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # PERF CONFIG
            perf config=


    .. confkey:: port
        :synopsis: TARGET PORT

        **TARGET PORT**

        | The target server port

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: port

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

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

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # RETRIES
            retries=3


    .. confkey:: severity
        :synopsis: SEVERITY

        **SEVERITY**

        | THe severity of this message (OK, WARNING, CRITICAL, UNKNOWN)

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: severity

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # SEVERITY
            severity=


    .. confkey:: source id
        :synopsis: SOURCE ID

        **SOURCE ID**

        | The name of the source system, will automatically use the remote system if a remote system is called. Almost most sending systems will replace this with current systems hostname if not present. So use this only if you need specific source systems for specific schedules and not calling remote systems.

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: source id

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # SOURCE ID
            source id=


    .. confkey:: target
        :synopsis: DESTINATION

        **DESTINATION**

        | Same as destination

        **Path**: /sample/sample

        **Key**: target

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # DESTINATION
            target=


    .. confkey:: target id
        :synopsis: TARGET ID

        **TARGET ID**

        | The target to send the message to (will be resolved by the consumer)

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: target id

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # TARGET ID
            target id=


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading/writing packets to/from sockets.

        **Path**: /sample/sample

        **Key**: timeout

        **Default value**: 30

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # TIMEOUT
            timeout=30


    .. confkey:: top syntax
        :synopsis: SYNTAX

        **SYNTAX**

        | Format string for dates

        **Advanced** (means it is not commonly used)

        **Path**: /sample/sample

        **Key**: top syntax

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # SYNTAX
            top syntax=


    .. confkey:: warning
        :synopsis: WARNING FILTER

        **WARNING FILTER**

        | If any rows match this filter severity will escalated to WARNING

        **Path**: /sample/sample

        **Key**: warning

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`,  :module:`CheckMKClient`,  :module:`GraphiteClient`,  :module:`NRDPClient`,  :module:`SMTPClient`,  :module:`SyslogClient`

        **Sample**::

            [/sample/sample]
            # WARNING FILTER
            warning=




… settings / NRDP / client
--------------------------

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




… settings / NRDP / client / handlers
-------------------------------------

.. confpath:: /settings/NRDP/client/handlers
    :synopsis: CLIENT HANDLER SECTION

**CLIENT HANDLER SECTION**






    **Sample**::

        # CLIENT HANDLER SECTION
        # 
        [/settings/NRDP/client/handlers]




… settings / NRDP / client / targets
------------------------------------

.. confpath:: /settings/NRDP/client/targets
    :synopsis: REMOTE TARGET DEFINITIONS

**REMOTE TARGET DEFINITIONS**






    **Sample**::

        # REMOTE TARGET DEFINITIONS
        # 
        [/settings/NRDP/client/targets]


