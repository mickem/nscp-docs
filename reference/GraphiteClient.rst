.. default-domain:: nscp

.. module:: GraphiteClient
    :synopsis: Graphite client can be used to submit graph data to a graphite graphing system

===========================================
:module:`GraphiteClient` --- GraphiteClient
===========================================
Graphite client can be used to submit graph data to a graphite graphing system

**Queries (Overview)**:

A list of all avalible queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`graphite_submit` | Submit data to a graphite server.




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
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.path` | PATH FOR VALUES

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.alias` | ALIAS
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.host` | TARGET HOST
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.is template` | IS TEMPLATE
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.parent` | PARENT
    :confpath:`/settings/graphite/client/targets/default` | :confkey:`~/settings/graphite/client/targets/default.port` | TARGET PORT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.address` | TARGET ADDRESS
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.alias` | ALIAS
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.host` | TARGET HOST
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.is template` | IS TEMPLATE
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.parent` | PARENT
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.path` | PATH FOR VALUES
    :confpath:`/settings/graphite/client/targets/sample` | :confkey:`~/settings/graphite/client/targets/sample.port` | TARGET PORT


Queries
=======
A quick reference for all avalible queries (check commands) in the GraphiteClient module.

:query:`graphite_submit`
------------------------
.. query:: graphite_submit
    :synopsis: Submit data to a graphite server.

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
    :option:`path` | N/A | 
    :option:`timeout` | N/A | 


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

.. option:: path
    :synopsis: 



.. option:: timeout
    :synopsis: 








… 
--
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

        # CHANNEL
        # The channel to listen to.
        [/settings/graphite/client]
        channel=GRAPHITE


.. confkey:: hostname
    :synopsis: HOSTNAME

    **HOSTNAME**

    | The host name of this host if set to blank (default) the windows name of the computer will be used.

    **Path**: /settings/graphite/client

    **Key**: hostname

    **Default value**: auto

    **Used by**: :module:`GraphiteClient`

    **Sample**::

        # HOSTNAME
        # The host name of this host if set to blank (default) the windows name of the computer will be used.
        [/settings/graphite/client]
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
    :confkey:`path` | system.${hostname}.${check_alias}.${perf_alias} | PATH FOR VALUES
    :confkey:`port` | 0 | TARGET PORT


**Sample**::

    # TARGET DEFENITION
    # Target definition for: default
    [/settings/graphite/client/targets/default]
    address=
    alias=
    host=
    is template=0
    parent=default
    path=system.${hostname}.${check_alias}.${perf_alias}
    port=0


.. confkey:: address
    :synopsis: TARGET ADDRESS

    **TARGET ADDRESS**

    | Target host address

    **Path**: /settings/graphite/client/targets/default

    **Key**: address

    **Default value**: 

    **Used by**: :module:`GraphiteClient`

    **Sample**::

        # TARGET ADDRESS
        # Target host address
        [/settings/graphite/client/targets/default]
        address=


.. confkey:: alias
    :synopsis: ALIAS

    **ALIAS**

    | The alias (service name) to report to server

    **Advanced** (means it is not commonly used)

    **Path**: /settings/graphite/client/targets/default

    **Key**: alias

    **Default value**: 

    **Used by**: :module:`GraphiteClient`

    **Sample**::

        # ALIAS
        # The alias (service name) to report to server
        [/settings/graphite/client/targets/default]
        alias=


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

        # TARGET HOST
        # The target server to report results to.
        [/settings/graphite/client/targets/default]
        host=


.. confkey:: is template
    :synopsis: IS TEMPLATE

    **IS TEMPLATE**

    | Declare this object as a template (this means it will not be available as a separate object)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/graphite/client/targets/default

    **Key**: is template

    **Default value**: 0

    **Used by**: :module:`GraphiteClient`

    **Sample**::

        # IS TEMPLATE
        # Declare this object as a template (this means it will not be available as a separate object)
        [/settings/graphite/client/targets/default]
        is template=0


.. confkey:: parent
    :synopsis: PARENT

    **PARENT**

    | The parent the target inherits from

    **Advanced** (means it is not commonly used)

    **Path**: /settings/graphite/client/targets/default

    **Key**: parent

    **Default value**: default

    **Used by**: :module:`GraphiteClient`

    **Sample**::

        # PARENT
        # The parent the target inherits from
        [/settings/graphite/client/targets/default]
        parent=default


.. confkey:: path
    :synopsis: PATH FOR VALUES

    **PATH FOR VALUES**

    | Path mapping for metrics

    **Path**: /settings/graphite/client/targets/default

    **Key**: path

    **Default value**: system.${hostname}.${check_alias}.${perf_alias}

    **Used by**: :module:`GraphiteClient`

    **Sample**::

        # PATH FOR VALUES
        # Path mapping for metrics
        [/settings/graphite/client/targets/default]
        path=system.${hostname}.${check_alias}.${perf_alias}


.. confkey:: port
    :synopsis: TARGET PORT

    **TARGET PORT**

    | The target server port

    **Advanced** (means it is not commonly used)

    **Path**: /settings/graphite/client/targets/default

    **Key**: port

    **Default value**: 0

    **Used by**: :module:`GraphiteClient`

    **Sample**::

        # TARGET PORT
        # The target server port
        [/settings/graphite/client/targets/default]
        port=0




…  / targets / sample
---------------------
.. confpath:: /settings/graphite/client/targets/sample
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
    :confkey:`path` | system.${hostname}.${check_alias}.${perf_alias} | PATH FOR VALUES
    :confkey:`port` | 0 | TARGET PORT


**Sample**::

    # TARGET DEFENITION
    # Target definition for: sample
    [/settings/graphite/client/targets/sample]
    address=
    alias=
    host=
    is template=0
    parent=default
    path=system.${hostname}.${check_alias}.${perf_alias}
    port=0


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

        # TARGET ADDRESS
        # Target host address
        [/settings/graphite/client/targets/sample]
        address=


.. confkey:: alias
    :synopsis: ALIAS

    **ALIAS**

    | The alias (service name) to report to server

    **Advanced** (means it is not commonly used)

    **Path**: /settings/graphite/client/targets/sample

    **Key**: alias

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`GraphiteClient`

    **Sample**::

        # ALIAS
        # The alias (service name) to report to server
        [/settings/graphite/client/targets/sample]
        alias=


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

        # TARGET HOST
        # The target server to report results to.
        [/settings/graphite/client/targets/sample]
        host=


.. confkey:: is template
    :synopsis: IS TEMPLATE

    **IS TEMPLATE**

    | Declare this object as a template (this means it will not be available as a separate object)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/graphite/client/targets/sample

    **Key**: is template

    **Default value**: 0

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`GraphiteClient`

    **Sample**::

        # IS TEMPLATE
        # Declare this object as a template (this means it will not be available as a separate object)
        [/settings/graphite/client/targets/sample]
        is template=0


.. confkey:: parent
    :synopsis: PARENT

    **PARENT**

    | The parent the target inherits from

    **Advanced** (means it is not commonly used)

    **Path**: /settings/graphite/client/targets/sample

    **Key**: parent

    **Default value**: default

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`GraphiteClient`

    **Sample**::

        # PARENT
        # The parent the target inherits from
        [/settings/graphite/client/targets/sample]
        parent=default


.. confkey:: path
    :synopsis: PATH FOR VALUES

    **PATH FOR VALUES**

    | Path mapping for metrics

    **Path**: /settings/graphite/client/targets/sample

    **Key**: path

    **Default value**: system.${hostname}.${check_alias}.${perf_alias}

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`GraphiteClient`

    **Sample**::

        # PATH FOR VALUES
        # Path mapping for metrics
        [/settings/graphite/client/targets/sample]
        path=system.${hostname}.${check_alias}.${perf_alias}


.. confkey:: port
    :synopsis: TARGET PORT

    **TARGET PORT**

    | The target server port

    **Advanced** (means it is not commonly used)

    **Path**: /settings/graphite/client/targets/sample

    **Key**: port

    **Default value**: 0

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`GraphiteClient`

    **Sample**::

        # TARGET PORT
        # The target server port
        [/settings/graphite/client/targets/sample]
        port=0


