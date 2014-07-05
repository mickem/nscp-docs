.. default-domain:: nscp

.. module:: SyslogClient
    :synopsis: Forward information as syslog messages to a syslog server

=======================================
:module:`SyslogClient` --- SyslogClient
=======================================
Forward information as syslog messages to a syslog server

**Queries (Overview)**:

A list of all avalible queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`syslog_submit` | Submit information to remote syslog server.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/syslog/client` | :confkey:`~/settings/syslog/client.channel` | CHANNEL
    :confpath:`/settings/syslog/client` | :confkey:`~/settings/syslog/client.hostname` | HOSTNAME
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.address` | TARGET ADDRESS
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.critical severity` | TODO
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.facility` | TODO
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.message_syntax` | TODO
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.ok severity` | TODO
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.severity` | TODO
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.tag_syntax` | TODO
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.unknown severity` | TODO
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.warning severity` | TODO

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.alias` | ALIAS
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.is template` | IS TEMPLATE
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.parent` | PARENT
    :confpath:`/settings/syslog/client/targets/default` | :confkey:`~/settings/syslog/client/targets/default.port` | TARGET PORT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.alias` | ALIAS
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.critical severity` | TODO
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.facility` | TODO
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.is template` | IS TEMPLATE
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.message_syntax` | TODO
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.ok severity` | TODO
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.parent` | PARENT
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.port` | TARGET PORT
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.severity` | TODO
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.tag_syntax` | TODO
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.unknown severity` | TODO
    :confpath:`/settings/syslog/client/targets/sample` | :confkey:`~/settings/syslog/client/targets/sample.warning severity` | TODO


Queries
=======
A quick reference for all avalible queries (check commands) in the SyslogClient module.

:query:`syslog_submit`
----------------------
.. query:: syslog_submit
    :synopsis: Submit information to remote syslog server.

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
    :option:`severity` | N/A | Severity of error message
    :option:`unknown-severity` | N/A | Severity of error message
    :option:`ok-severity` | N/A | Severity of error message
    :option:`warning-severity` | N/A | Severity of error message
    :option:`critical-severity` | N/A | Severity of error message
    :option:`facility` | N/A | Facility of error message
    :option:`tag template` | N/A | Tag template (TODO)
    :option:`message template` | N/A | Message template (TODO)


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






… 
--
.. confpath:: /settings/syslog/client
    :synopsis: SYSLOG CLIENT SECTION

    **SYSLOG CLIENT SECTION**

    | Section for SYSLOG passive check module.


.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`channel` | syslog | CHANNEL
    :confkey:`hostname` |  | HOSTNAME


**Sample**::

    # SYSLOG CLIENT SECTION
    # Section for SYSLOG passive check module.
    [/settings/syslog/client]
    channel=syslog
    hostname=


.. confkey:: channel
    :synopsis: CHANNEL

    **CHANNEL**

    | The channel to listen to.

    **Path**: /settings/syslog/client

    **Key**: channel

    **Default value**: syslog

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # CHANNEL
        # The channel to listen to.
        [/settings/syslog/client]
        channel=syslog


.. confkey:: hostname
    :synopsis: HOSTNAME

    **HOSTNAME**

    | The host name of this host if set to blank (default) the windows name of the computer will be used.

    **Path**: /settings/syslog/client

    **Key**: hostname

    **Default value**: 

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # HOSTNAME
        # The host name of this host if set to blank (default) the windows name of the computer will be used.
        [/settings/syslog/client]
        hostname=




…  / handlers
-------------
.. confpath:: /settings/syslog/client/handlers
    :synopsis: CLIENT HANDLER SECTION

    **CLIENT HANDLER SECTION**






**Sample**::

    # CLIENT HANDLER SECTION
    # 
    [/settings/syslog/client/handlers]




…  / targets
------------
.. confpath:: /settings/syslog/client/targets
    :synopsis: REMOTE TARGET DEFINITIONS

    **REMOTE TARGET DEFINITIONS**






**Sample**::

    # REMOTE TARGET DEFINITIONS
    # 
    [/settings/syslog/client/targets]




…  / targets / default
----------------------
.. confpath:: /settings/syslog/client/targets/default
    :synopsis: TARGET DEFENITION

    **TARGET DEFENITION**

    | Target definition for: default


.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`address` |  | TARGET ADDRESS
    :confkey:`alias` |  | ALIAS
    :confkey:`critical severity` | critical | TODO
    :confkey:`facility` | kernel | TODO
    :confkey:`host` |  | TARGET HOST
    :confkey:`is template` | 0 | IS TEMPLATE
    :confkey:`message_syntax` | %message% | TODO
    :confkey:`ok severity` | informational | TODO
    :confkey:`parent` | default | PARENT
    :confkey:`port` | 0 | TARGET PORT
    :confkey:`severity` | error | TODO
    :confkey:`tag_syntax` | NSCA | TODO
    :confkey:`unknown severity` | emergency | TODO
    :confkey:`warning severity` | warning | TODO


**Sample**::

    # TARGET DEFENITION
    # Target definition for: default
    [/settings/syslog/client/targets/default]
    address=
    alias=
    critical severity=critical
    facility=kernel
    host=
    is template=0
    message_syntax=%message%
    ok severity=informational
    parent=default
    port=0
    severity=error
    tag_syntax=NSCA
    unknown severity=emergency
    warning severity=warning


.. confkey:: address
    :synopsis: TARGET ADDRESS

    **TARGET ADDRESS**

    | Target host address

    **Path**: /settings/syslog/client/targets/default

    **Key**: address

    **Default value**: 

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TARGET ADDRESS
        # Target host address
        [/settings/syslog/client/targets/default]
        address=


.. confkey:: alias
    :synopsis: ALIAS

    **ALIAS**

    | The alias (service name) to report to server

    **Advanced** (means it is not commonly used)

    **Path**: /settings/syslog/client/targets/default

    **Key**: alias

    **Default value**: 

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # ALIAS
        # The alias (service name) to report to server
        [/settings/syslog/client/targets/default]
        alias=


.. confkey:: critical severity
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/default

    **Key**: critical severity

    **Default value**: critical

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/default]
        critical severity=critical


.. confkey:: facility
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/default

    **Key**: facility

    **Default value**: kernel

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/default]
        facility=kernel


.. confkey:: host
    :synopsis: TARGET HOST

    **TARGET HOST**

    | The target server to report results to.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/syslog/client/targets/default

    **Key**: host

    **Default value**: 

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TARGET HOST
        # The target server to report results to.
        [/settings/syslog/client/targets/default]
        host=


.. confkey:: is template
    :synopsis: IS TEMPLATE

    **IS TEMPLATE**

    | Declare this object as a template (this means it will not be available as a separate object)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/syslog/client/targets/default

    **Key**: is template

    **Default value**: 0

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # IS TEMPLATE
        # Declare this object as a template (this means it will not be available as a separate object)
        [/settings/syslog/client/targets/default]
        is template=0


.. confkey:: message_syntax
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/default

    **Key**: message_syntax

    **Default value**: %message%

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/default]
        message_syntax=%message%


.. confkey:: ok severity
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/default

    **Key**: ok severity

    **Default value**: informational

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/default]
        ok severity=informational


.. confkey:: parent
    :synopsis: PARENT

    **PARENT**

    | The parent the target inherits from

    **Advanced** (means it is not commonly used)

    **Path**: /settings/syslog/client/targets/default

    **Key**: parent

    **Default value**: default

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # PARENT
        # The parent the target inherits from
        [/settings/syslog/client/targets/default]
        parent=default


.. confkey:: port
    :synopsis: TARGET PORT

    **TARGET PORT**

    | The target server port

    **Advanced** (means it is not commonly used)

    **Path**: /settings/syslog/client/targets/default

    **Key**: port

    **Default value**: 0

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TARGET PORT
        # The target server port
        [/settings/syslog/client/targets/default]
        port=0


.. confkey:: severity
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/default

    **Key**: severity

    **Default value**: error

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/default]
        severity=error


.. confkey:: tag_syntax
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/default

    **Key**: tag_syntax

    **Default value**: NSCA

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/default]
        tag_syntax=NSCA


.. confkey:: unknown severity
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/default

    **Key**: unknown severity

    **Default value**: emergency

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/default]
        unknown severity=emergency


.. confkey:: warning severity
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/default

    **Key**: warning severity

    **Default value**: warning

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/default]
        warning severity=warning




…  / targets / sample
---------------------
.. confpath:: /settings/syslog/client/targets/sample
    :synopsis: TARGET DEFENITION

    **TARGET DEFENITION**

    | Target definition for: sample


.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`address` |  | TARGET ADDRESS
    :confkey:`alias` |  | ALIAS
    :confkey:`critical severity` | critical | TODO
    :confkey:`facility` | kernel | TODO
    :confkey:`host` |  | TARGET HOST
    :confkey:`is template` | 0 | IS TEMPLATE
    :confkey:`message_syntax` | %message% | TODO
    :confkey:`ok severity` | informational | TODO
    :confkey:`parent` | default | PARENT
    :confkey:`port` | 0 | TARGET PORT
    :confkey:`severity` | error | TODO
    :confkey:`tag_syntax` | NSCA | TODO
    :confkey:`unknown severity` | emergency | TODO
    :confkey:`warning severity` | warning | TODO


**Sample**::

    # TARGET DEFENITION
    # Target definition for: sample
    [/settings/syslog/client/targets/sample]
    address=
    alias=
    critical severity=critical
    facility=kernel
    host=
    is template=0
    message_syntax=%message%
    ok severity=informational
    parent=default
    port=0
    severity=error
    tag_syntax=NSCA
    unknown severity=emergency
    warning severity=warning


.. confkey:: address
    :synopsis: TARGET ADDRESS

    **TARGET ADDRESS**

    | Target host address

    **Path**: /settings/syslog/client/targets/sample

    **Key**: address

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TARGET ADDRESS
        # Target host address
        [/settings/syslog/client/targets/sample]
        address=


.. confkey:: alias
    :synopsis: ALIAS

    **ALIAS**

    | The alias (service name) to report to server

    **Advanced** (means it is not commonly used)

    **Path**: /settings/syslog/client/targets/sample

    **Key**: alias

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # ALIAS
        # The alias (service name) to report to server
        [/settings/syslog/client/targets/sample]
        alias=


.. confkey:: critical severity
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/sample

    **Key**: critical severity

    **Default value**: critical

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/sample]
        critical severity=critical


.. confkey:: facility
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/sample

    **Key**: facility

    **Default value**: kernel

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/sample]
        facility=kernel


.. confkey:: host
    :synopsis: TARGET HOST

    **TARGET HOST**

    | The target server to report results to.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/syslog/client/targets/sample

    **Key**: host

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TARGET HOST
        # The target server to report results to.
        [/settings/syslog/client/targets/sample]
        host=


.. confkey:: is template
    :synopsis: IS TEMPLATE

    **IS TEMPLATE**

    | Declare this object as a template (this means it will not be available as a separate object)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/syslog/client/targets/sample

    **Key**: is template

    **Default value**: 0

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # IS TEMPLATE
        # Declare this object as a template (this means it will not be available as a separate object)
        [/settings/syslog/client/targets/sample]
        is template=0


.. confkey:: message_syntax
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/sample

    **Key**: message_syntax

    **Default value**: %message%

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/sample]
        message_syntax=%message%


.. confkey:: ok severity
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/sample

    **Key**: ok severity

    **Default value**: informational

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/sample]
        ok severity=informational


.. confkey:: parent
    :synopsis: PARENT

    **PARENT**

    | The parent the target inherits from

    **Advanced** (means it is not commonly used)

    **Path**: /settings/syslog/client/targets/sample

    **Key**: parent

    **Default value**: default

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # PARENT
        # The parent the target inherits from
        [/settings/syslog/client/targets/sample]
        parent=default


.. confkey:: port
    :synopsis: TARGET PORT

    **TARGET PORT**

    | The target server port

    **Advanced** (means it is not commonly used)

    **Path**: /settings/syslog/client/targets/sample

    **Key**: port

    **Default value**: 0

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TARGET PORT
        # The target server port
        [/settings/syslog/client/targets/sample]
        port=0


.. confkey:: severity
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/sample

    **Key**: severity

    **Default value**: error

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/sample]
        severity=error


.. confkey:: tag_syntax
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/sample

    **Key**: tag_syntax

    **Default value**: NSCA

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/sample]
        tag_syntax=NSCA


.. confkey:: unknown severity
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/sample

    **Key**: unknown severity

    **Default value**: emergency

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/sample]
        unknown severity=emergency


.. confkey:: warning severity
    :synopsis: TODO

    **TODO**



    **Path**: /settings/syslog/client/targets/sample

    **Key**: warning severity

    **Default value**: warning

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`SyslogClient`

    **Sample**::

        # TODO
        # 
        [/settings/syslog/client/targets/sample]
        warning severity=warning


